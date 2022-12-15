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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/livecam/index.tsx");
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

/***/ "./pages/livecam/index.tsx":
/*!*********************************!*\
  !*** ./pages/livecam/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/performer/performer-grid */ "./src/components/performer/performer-grid.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _redux_studio_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux/studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var _components_user_performer_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/user/performer-filter */ "./src/components/user/performer-filter.tsx");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\pages\\livecam\\index.tsx";

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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, ui === null || ui === void 0 ? void 0 : ui.siteName), __jsx("meta", {
      name: "keywords",
      content: settings === null || settings === void 0 ? void 0 : settings.metaKeywords,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: settings === null || settings === void 0 ? void 0 : settings.metaDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:title",
      content: settings === null || settings === void 0 ? void 0 : settings.siteName,
      key: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:image",
      content: settings === null || settings === void 0 ? void 0 : settings.logoUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:keywords",
      content: settings === null || settings === void 0 ? void 0 : settings.metaKeywords,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:description",
      content: settings === null || settings === void 0 ? void 0 : settings.metaDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    })), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      pageTitle: "Live Cam",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Live Cam",
      imgClass: "bg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "homepage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, __jsx(_components_user_performer_filter__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
      countries: countries,
      categories: categories,
      setFilter: this.setFilter.bind(this),
      clearFilter: this.clearFilter.bind(this)
    }, query, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }
    })), __jsx(_components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.props, {
      onLike: this.onLike.bind(this),
      title: "Live cams",
      isPage: true,
      setFilter: this.setFilter.bind(this)
    }, query, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }))));
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
  searchPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["searchPerformer"],
  updatePerformerFavourite: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerFavourite"],
  updateCurrentUser: _redux_user_actions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentUser"],
  updateCurrentPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentPerformer"],
  updateCurrentStudio: _redux_studio_actions__WEBPACK_IMPORTED_MODULE_7__["updateCurrentStudio"],
  loginSuccess: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_5__["loginSuccess"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatch)(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Homepage)));

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

/***/ "./src/components/user/performer-filter.less":
/*!***************************************************!*\
  !*** ./src/components/user/performer-filter.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/user/performer-filter.tsx":
/*!**************************************************!*\
  !*** ./src/components/user/performer-filter.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _performer_filter_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performer-filter.less */ "./src/components/user/performer-filter.less");
/* harmony import */ var _performer_filter_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_performer_filter_less__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\src\\components\\user\\performer-filter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PerformerFilter = ({
  countries,
  categories,
  setFilter,
  category,
  country,
  gender,
  clearFilter
}) => {
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [selectedMenuKeys, setSelectedMenuKeys] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [lastSelectedMenuKey, setLastSelectedMenuKey] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();

  const onOpenChange = keys => {
    const menuKeys = keys.filter(key => key !== lastSelectedMenuKey);
    setSelectedMenuKeys(menuKeys);
    setLastSelectedMenuKey(menuKeys[0]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    className: "performer-filter",
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FilterOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    }),
    type: "primary",
    onClick: () => setVisible(true),
    className: "mr-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Filter"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    className: "ant-space-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Popular Filter:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: clearFilter,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === '' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'female' ? '' : 'female'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'female' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'transgender' ? '' : 'transgender'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'transgender' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Transgender"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'male' ? '' : 'male'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'male' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Male")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    visible: visible,
    placement: "left",
    onClose: () => setVisible(false),
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      justify: "space-between",
      align: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, "Filter by:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "link",
      onClick: () => clearFilter(),
      size: "small",
      style: {
        marginRight: 10
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, "Clear Filter"))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    multiple: false,
    onSelect: ({
      key
    }) => setFilter('category', key),
    onDeselect: () => setFilter('category', ''),
    selectedKeys: [category],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Category",
    key: "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, categories.length > 0 && categories.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: c._id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, c.name)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    onSelect: ({
      key
    }) => setFilter('gender', key),
    onDeselect: () => setFilter('gender', ''),
    selectedKeys: [gender],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Gender",
    key: "gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "female",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "transgender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Transgender"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "male",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "Male"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    multiple: false,
    onSelect: ({
      key
    }) => setFilter('country', key),
    onDeselect: () => setFilter('country', ''),
    selectedKeys: [country],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Country",
    key: "country",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, countries.length > 0 && countries.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: c.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, c.name))))));
};

PerformerFilter.defaultProps = {
  countries: [],
  categories: [],
  // offset: 0,
  // limit: 0,
  gender: '',
  category: '',
  country: ''
};
/* harmony default export */ __webpack_exports__["default"] = (PerformerFilter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGl2ZWNhbS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvaWNvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9iYW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BlcmZvcm1lci9wZXJmb3JtZXItZ3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlci9wZXJmb3JtZXItZmlsdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbnRlcm5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2xheW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZWR1eC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RvcmVIb2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wZXJmb3JtZXIvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3R1ZGlvL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VzZXIvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFubmVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZWFybmluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9mYXZvdXJpdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9vcmRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wYXltZW50LWluZm9ybWF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW91dC1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wZXJmb21lci1jYXRlZ29yaWVzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvbWVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Bob3RvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Bvc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wdXJjaGFzZS1pdGVtLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JlZnVuZC1yZXF1ZXN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyZWFtLnNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdHVkaW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdG9rZW4tcGFja2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90cmFuc2FjdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3ZpZGVvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9FdmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9Tb2NrZXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvU29ja2V0Q29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L3V0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGgtdG8tcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbIlBhZ2VCYW5uZXIiLCJwYWdlVGl0bGUiLCJob21lUGFnZVVybCIsImhvbWVQYWdlVGV4dCIsImFjdGl2ZVBhZ2VUZXh0IiwiaW1nQ2xhc3MiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImluaXRRdWVyeVN0YXRlIiwib2Zmc2V0IiwibGltaXQiLCJnZW5kZXIiLCJjYXRlZ29yeSIsImNvdW50cnkiLCJzb3J0QnkiLCJzb3J0IiwiSG9tZXBhZ2UiLCJQdXJlQ29tcG9uZW50Iiwic2VhcmNoUGVyZm9ybWVyIiwiZGlzcGF0Y2hTZWFyY2hQZXJmb3JtZXIiLCJjb21wb25lbnREaWRNb3VudCIsInNvY2tldCIsImNvbnRleHQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGVzIiwibG9nZ2VkSW4iLCJxIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJvbkxpa2UiLCJwZXJmb3JtZXIiLCJ1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUiLCJkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm9yaXRlIiwiX2lkIiwiaXNGYXZvcml0ZSIsImZhdm91cml0ZVNlcnZpY2UiLCJmYXZvcml0ZSIsInJlc29sdmUiLCJnZXRSZXNwb25zZUVycm9yIiwic2V0RmlsdGVyIiwic2V0U3RhdGUiLCJjbGVhckZpbHRlciIsInJlbmRlciIsImNhdGVnb3JpZXMiLCJjb3VudHJpZXMiLCJ1aSIsInNldHRpbmdzIiwic2l0ZU5hbWUiLCJtZXRhS2V5d29yZHMiLCJtZXRhRGVzY3JpcHRpb24iLCJsb2dvVXJsIiwiYmluZCIsImNvbnRleHRUeXBlIiwiU29ja2V0Q29udGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBlcmZvcm1lcnMiLCJtYXBEaXNwYXRjaCIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlQ3VycmVudFBlcmZvcm1lciIsInVwZGF0ZUN1cnJlbnRTdHVkaW8iLCJsb2dpblN1Y2Nlc3MiLCJjb25uZWN0Iiwid2l0aFJvdXRlciIsIkZhY2Vib29rSWNvbiIsInN0eWxlIiwiVHdpdHRlckljb24iLCJJbnN0YWdyYW1JY29uIiwiR2lmdEljb24iLCJNZXNzYWdlSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJGYXZvdXJpdGVJY29uIiwiU2VuZE1lc3NhZ2VJY29uIiwiRnVuZHNJY29uIiwiUGF5bWVudFRva2Vuc0hpc3RvcnlJY29uIiwiVHJhbnNhY3Rpb25IaXN0b3J5SWNvbiIsIlB1cmNoYXNlZEltYWdlSWNvbiIsIlB1cmNoYXNlZFZpZGVvSWNvbiIsIlB1cmNoYXNlZEl0ZW1JY29uIiwiTXlQcm9kdWN0SWNvbiIsIlZpZGVvc0ljb24iLCJQaG90b3NJY29uIiwiRmVtYWxlU2lnbkljb24iLCJNYWxlU2lnbkljb24iLCJUcmFuc2dlbmRlckljb24iLCJUb2tlbnNJY29uIiwiRWFybmluZ0ljb24iLCJQYXlvdXRSZXF1ZXN0SWNvbiIsIkdyb3VwIiwiTG9hZGVyIiwic3Bpbm5pbmciLCJmdWxsU2NyZWVuIiwiY2xhc3NOYW1lcyIsImhpZGRlbiIsInJlbmRlckJhbm5lciIsImJhbm5lciIsInN0eWxlSW1hZ2UiLCJ0eXBlIiwicGhvdG8iLCJjb250ZW50SFRNTCIsIl9faHRtbCIsIkJhbm5lciIsImJhbm5lcnMiLCJjbGFzc25hbWVzIiwibGVuZ3RoIiwibWFwIiwiZGVmYXVsdFByb3BzIiwicmVuZGVyVGl0bGUiLCJtYXJnaW5SaWdodCIsInJlbmRlclRhZ3MiLCJ0YWdzIiwidGFnIiwiR3JpZENhcmQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlckF2YXRhclVybCIsImlzT25saW5lIiwic3RyZWFtaW5nU3RhdHVzIiwic3RhdHVzQ2xhc3NOYW1lcyIsInN0YXR1cyIsImRlZmF1bHRQbGFjZWhvbGRlckF2YXRhclVybCIsImlzQmxvY2tlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsImF2YXRhciIsImpvaW4iLCJzdGF0cyIsInZpZXdzIiwiYWJvdXRNZSIsIlBlcmZvcm1lckdyaWQiLCJzZWFyY2hpbmciLCJ0aXRsZSIsImlzUGFnZSIsInRvdGFsIiwidG9wQmFubmVycyIsInJpZ2h0QmFubmVycyIsImJvdHRvbUJhbm5lcnMiLCJSb3dHcmlkIiwiZGF0YVNvdXJjZSIsInJlbmRlckdyaWQiLCJwYWRkaW5nIiwiZGF0YUNodW5rIiwiY2h1bmsiLCJsYXN0RGF0YUNodW5rIiwic2xpY2UiLCJ2IiwiZ2VuZXJhdGVVdWlkIiwiYWN0aW9ucyIsIk1hdGgiLCJyb3VuZCIsImJhbm5lclNlbGVjdGVyIiwibGlzdEJhbm5lcnMiLCJmaWx0ZXJCYW5uZXIiLCJjcmVhdGVTZWxlY3RvciIsImZpbHRlciIsImIiLCJwb3NpdGlvbiIsIm1hcFN0YXRlcyIsIlBlcmZvcm1lckZpbHRlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJzZWxlY3RlZE1lbnVLZXlzIiwic2V0U2VsZWN0ZWRNZW51S2V5cyIsImxhc3RTZWxlY3RlZE1lbnVLZXkiLCJzZXRMYXN0U2VsZWN0ZWRNZW51S2V5Iiwib25PcGVuQ2hhbmdlIiwibWVudUtleXMiLCJmb250V2VpZ2h0IiwiYm9yZGVyUmlnaHQiLCJjIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXQiLCJtb21lbnQiLCJjb252ZXJEdXJhdGlvbiIsImR1cmF0aW9uIiwidXRjIiwiYXNNaWxsaXNlY29uZHMiLCJwYXJzZUFnZSIsImdldEFnZSIsImRpZmYiLCJ0b1N0cmluZyIsImZvcm1hdER1cmF0aW9uIiwicyIsImhvdXJzIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsImJlZm9yZUF2YXRhclVwbG9hZCIsImZpbGUiLCJleHQiLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiY29uZmlnIiwiZ2V0R2xvYmFsQ29uZmlnIiwiaXNJbWFnZUFjY2VwdCIsIk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVCIsInRyaW0iLCJpbmRleE9mIiwiaXNMdDJNIiwic2l6ZSIsIk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIiwiSU5URVJORVRfQ0hFQ0tfVVJMIiwiaXNIYXNJbnRlcm5ldENvbm5lY3Rpb24iLCJmZXRjaCIsImhlYWRlcnMiLCJQcmFnbWEiLCJFeHBpcmVzIiwiZXhjZXB0aW9uIiwibG9nIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInhzIiwic3BhbiIsInNtIiwid3JhcHBlckNvbCIsInRhaWxGb3JtSXRlbUxheW91dCIsImRlZmF1bHRDb2xvciIsInByaW1hcnlDb2xvciIsInN1Y2Nlc3NDb2xvciIsIndoaXRlQ29sb3IiLCJ2YWxpZGF0ZU1lc3NhZ2VzIiwicmVxdWlyZWQiLCJ0eXBlcyIsImVtYWlsIiwibnVtYmVyIiwicmFuZ2UiLCJjcmVhdGVBY3Rpb24iLCJhY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVSZWR1eEFjdGlvbnMiLCJyZWR1Y2UiLCJyZWR1Y2VyIiwiYWN0IiwiY3JlYXRlUmVkdWNlcnMiLCJzdGF0ZUNvbnRleHQiLCJyZWR1Y2VycyIsInByZXZlbnRSZXNldHRpbmciLCJmbGF0dGVuIiwiaXNBcnJheSIsImZvckVhY2giLCJBUFBfU1RBVEVfUkVTRVQiLCJjcmVhdGVTYWdhcyIsInNhZ2FzIiwic2FnYSIsImVmZmVjdCIsInRha2VMYXRlc3QiLCJ3b3JrZXIiLCJkZWxheSIsImNyZWF0ZVNlbGVjdG9yc0EiLCJzdGF0ZVNlbGVjdG9yIiwiaXNFbXB0eSIsImdldEluIiwiY3JlYXRlU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiY3JlYXRlSlNTZWxlY3RvcnMiLCJ1c2VybmFtZVBhdHRlcm5SdWxlIiwicGF0dGVybiIsIlJlZ0V4cCIsInN0b3JlIiwiZ2V0U3RvcmUiLCJzZXRTdG9yZSIsIkRFRkFVTFRfT0ZGTElORV9JTUFHRV9VUkwiLCJERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMIiwiREVGQVVMVF9HUk9VUF9JTUFHRV9VUkwiLCJERUZBVUxUX09OTElORV9JTUFHRV9VUkwiLCJnZXRQb3N0ZXIiLCJwb3N0ZXIiLCJzdG9yZUhvbGRlciIsImdldFN0YXRlIiwiZGVmYXVsdFByaXZhdGVDYWxsSW1hZ2UiLCJkZWZhdWx0T2ZmbGluZU1vZGVsSW1hZ2UiLCJkZWZhdWx0R3JvdXBDaGF0SW1hZ2UiLCJpc1VybCIsIm1hdGNoIiwiciIsInJhbmRvbSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwidW5pdFByaWNlcyIsInRleHQiLCJhcnJheVRvVHJlZSIsImFycmF5IiwiaWQiLCJwYXJlbnRJZCIsImNsb25lRGVlcCIsImluZGV4IiwiaGFzaFBhcmVudCIsInBhdGhNYXRjaFJlZ2V4cCIsInJlZ2V4cCIsImV4ZWMiLCJxdWVyeUFuY2VzdG9ycyIsImN1cnJlbnQiLCJoYXNoTWFwIiwiTWFwIiwiZ2V0UGF0aCIsImN1cnJlbnRQYXJlbnRJZCIsImNvbnN0cmFpbnRzIiwidmFsdWVzIiwiaXNNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJnZXRVcmxQYXJhbWV0ZXIiLCJzUGFyYW0iLCJzUGFnZVVSTCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNQYXJhbWV0ZXJOYW1lIiwidW5kZWZpbmVkIiwiREFZX09GX1dFRUsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJnZXREZWZhdWx0U2NoZWR1bGUiLCJkZWZhdWx0VmFsIiwic3RhcnQiLCJlbmQiLCJjbG9zZWQiLCJnZXROZXh0U2hvdyIsInNjaGVkdWxlIiwid2Vla0RheSIsIm5leHRTaG93IiwicGVyZm9ybWVyU2hvd3MiLCJkYXkiLCJnZXRTZWFyY2hEYXRhIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJvcmRlciIsIlNPUlQiLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJvbmVycm9yIiwiY29udmVydENvbm5lY3Rpb25EYXRhIiwiYXJyIiwic2VydmVyRGF0YSIsInBhcnNlIiwiY2xpZW50RGF0YSIsImNoZWNrVXNlckxvZ2luIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJnZXRDdXJyZW50VXNlciIsImlzUGh5c2ljYWxQcm9kdWN0IiwiY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUiLCJyZXEiLCJpc01pbmUiLCJzdGFydHNTZXF1ZW5jZSIsImVuZHNTZXF1ZW5jZSIsIm1pbmUiLCJ0aXAiLCJjb252ZXJ0RmVldFRvQ20iLCJmZWV0IiwiaW5jaCIsImYiLCJmb3JtYXREYXRhV2VpZ2h0IiwibWluIiwibWF4IiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0RGF0YUhlaWdodCIsImEiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZnJhY3Rpb25EaWdpdHMiLCJsb2dpbiIsImxvZ2luRmFpbCIsImxvZ2luUmVxdWVzdGluZyIsInBlcmZvcm1lcmxvZ2luIiwicGVyZm9ybWVybG9naW5TdWNjZXNzIiwicGVyZm9ybWVybG9naW5GYWlsIiwicmVzZXRMb2dpbkRhdGEiLCJzdHVkaW9Mb2dpbiIsInN0dWRpb0xvZ2luU3VjY2VzcyIsInN0dWRpb0xvZ2luRmFpbCIsInBlcmZvcm1lclJlZ2lzdGVyIiwicGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzIiwicGVyZm9ybWVyUmVnaXN0ZXJGYWlsIiwic2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nIiwidXNlclJlZ2lzdGVyIiwidXNlclJlZ2lzdGVyU3VjY2VzcyIsInVzZXJSZWdpc3RlckZhaWwiLCJzZXRVc2VyUmVnaXN0ZXJTdWJtaXR0aW5nIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQYXNzd29yZFN1Y2Nlc3MiLCJ1cGRhdGVQYXNzd29yZEZhaWwiLCJzZXRVcGRhdGVQYXNzd29yZFN1Ym1pdHRpbmciLCJsb2dvdXQiLCJnZXRQZXJmb3JtZXJDYXRlZ29yaWVzIiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc1N1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJDYXRlZ29yaWVzRmFpbCIsInNlYXJjaFBlcmZvcm1lclN1Y2Nlc3MiLCJzZWFyY2hQZXJmb3JtZXJGYWlsIiwic2V0UGVyZm9ybWVyU2VhcmNoaW5nIiwidXBkYXRlUGVyZm9ybWVyUHJvZmlsZSIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGVTdWNjZXNzIiwidXBkYXRlUGVyZm9ybWVyUHJvZmlsZUZhaWwiLCJzZXR1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUiLCJ1cGRhdGVQYXltZW50SW5mbyIsInVwZGF0ZURpcmVjdERlcG9zaXQiLCJ1cGRhdGVQYXh1bSIsInVwZGF0ZUJpdHBheSIsInVwZGF0ZVN0cmVhbWluZ1N0YXR1cyIsInVwZGF0ZURlZmF1bHRQcmljZSIsImdldFBlcmZvcm1lckRldGFpbHMiLCJnZXRQZXJmb3JtZXJEZXRhaWxzU3VjY2VzcyIsImdldFBlcmZvcm1lckRldGFpbHNGYWlsIiwic2V0R2V0dGluZ1BlcmZvcm1lckRldGFpbHMiLCJzZXRQZXJmb3JtZXJEZXRhaWxzIiwidXBkYXRlUGVyZm9ybWVyQXNzZXQiLCJzZXRGYXZvcml0ZVBlcmZvcm1lckRldGFpbHMiLCJnZXRNeVByb2R1Y3RzIiwiZ2V0TXlQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRNeVByb2R1Y3RzRmFpbCIsInNldEdldHRpbmdNeVByb2R1Y3RzIiwiYWRkTXlQcm9kdWN0IiwicmVtb3ZlTXlQcm9kdWN0IiwiZ2V0RWFybmluZyIsImdldEVhcm5pbmdTdWNjZXNzIiwiZ2V0RWFybmluZ0ZhaWwiLCJzZXRHZXR0aW5nRWFybmluZyIsImdldFBheW91dFJlcXVlc3QiLCJnZXRQYXlvdXRSZXF1ZXN0U3VjY2VzcyIsImdldFBheW91dFJlcXVlc3RGYWlsIiwic2V0R2V0dGluZ1BheW91dFJlcXVlc3QiLCJyZW1vdmVQYXlvdXRSZXF1ZXN0IiwiZ2V0TXlWaWRlb3MiLCJnZXRNeVZpZGVvc1N1Y2Nlc3MiLCJnZXRNeVZpZGVvc0ZhaWwiLCJzZXRnZXR0aW5nTXlWaWRlb3MiLCJhZGRNeVZpZGVvcyIsInJlbW92ZU15VmlkZW8iLCJnZXRNeVBob3RvcyIsImdldE15UGhvdG9zU3VjY2VzcyIsImdldE15UGhvdG9zRmFpbCIsInNldGdldHRpbmdNeVBob3RvcyIsImFkZE15UGhvdG9zIiwicmVtb3ZlTXlQaG90byIsImdldE15R2FsbGVyaWVzIiwiZ2V0TXlHYWxsZXJpZXNTdWNjZXNzIiwiZ2V0TXlHYWxsZXJpZXNGYWlsIiwic2V0Z2V0dGluZ015R2FsbGVyaWVzIiwiYWRkTXlHYWxsZXJpZXMiLCJyZW1vdmVNeUdhbGxlcmllcyIsInVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJCYWxhbmNlIiwidXBkYXRlU3R1ZGlvIiwidXBkYXRlU3R1ZGlvU3VjY2VzcyIsInVwZGF0ZVN0dWRpb0ZhaWwiLCJzZXRVcGRhdGluZ1N0dWRpbyIsInVwZGF0ZVN0dWRpb1BheW1lbnRJbmZvIiwidXBkYXRlU3R1ZGlvRGlyZWN0RGVwb3NpdCIsInVwZGF0ZVN0dWRpb1BheHVtIiwidXBkYXRlU3R1ZGlvQml0cGF5IiwiZ2V0U3R1ZGlvRWFybmluZyIsImdldFN0dWRpb0Vhcm5pbmdTdWNjZXNzIiwiZ2V0U3R1ZGlvRWFybmluZ0ZhaWwiLCJzZXRHZXR0aW5nU3R1ZGlvRWFybmluZyIsImdldFN0dWRpb1BheW91dFJlcXVlc3QiLCJnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0U3VjY2VzcyIsImdldFN0dWRpb1BheW91dFJlcXVlc3RGYWlsIiwic2V0R2V0dGluZ1N0dWRpb1BheW91dFJlcXVlc3QiLCJyZW1vdmVTdHVkaW9QYXlvdXRSZXF1ZXN0IiwiZ2V0UGVyZm9ybWVyUmVxdWVzdCIsImdldFBlcmZvcm1lclJlcXVlc3RTdWNjZXNzIiwiZ2V0UGVyZm9ybWVyUmVxdWVzdEZhaWwiLCJzZXRHZXR0aW5nUGVyZm9ybWVyUmVxdWVzdCIsImdldE1lbWJlcnMiLCJnZXRNZW1iZXJzU3VjY2VzcyIsImdldE1lbWJlcnNGYWlsIiwiZ2V0TWVtYmVyc1NlYXJjaGluZyIsInVwZGF0ZU1lbWJlclN0YXR1cyIsImdldE1lbWJlcnNDb21taXNzaW9ucyIsImdldE1lbWJlcnNDb21taXNzaW9uc1N1Y2Nlc3MiLCJnZXRNZW1iZXJzQ29tbWlzc2lvbnNGYWlsIiwiZ2V0TWVtYmVyc0NvbW1pc3Npb25zU2VhcmNoaW5nIiwidXBkYXRlTWVtYmVyQ29tbWlzaW9uIiwiZ2V0U3R1ZGlvU3RhdHMiLCJnZXRTdHVkaW9TdGF0c1N1Y2Nlc3MiLCJnZXRTdHVkaW9TdGF0c0ZhaWwiLCJ1cGRhdGVUb3RhbFBlcmZvcm1lciIsInVwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyIiwidXBkYXRlQ3VycmVudFVzZXJCYWxhbmNlIiwidXBkYXRlVXNlciIsInVwZGF0ZVVzZXJTdWNjZXNzIiwidXBkYXRlVXNlckZhaWwiLCJzZXRVcGRhdGluZyIsInNldFJlZHVjZXIiLCJidXlUb2tlblN1Y2Nlc3MiLCJnZXRGYXZvcml0ZVBlcmZvcm1lcnMiLCJnZXRGYXZvcml0ZVBlcmZvcm1lcnNTdWNjZXNzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzRmFpbGVkIiwiZ2V0dGluZ0Zhdm9yaXRlUGVyZm9ybWVycyIsInJlbW92ZUZhdm9yaXRlIiwiZ2V0UGF5bWVudFRva2VuSGlzdHJveSIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3lTdWNjZXNzIiwiZ2V0UGF5bWVudFRva2VuSGlzdHJveUZhaWwiLCJnZXR0aWdQYXltZW50VG9rZW5IaXN0b3J5IiwiVE9LRU4iLCJST0xFIiwiUEVSRk9STUVSX1JPTEUiLCJVU0VSX1JPTEUiLCJTVFVESU9fUk9MRSIsImRlc2NlbmQiLCJhc2NlbmQiLCJBUElSZXF1ZXN0Iiwic2V0QXV0aEhlYWRlclRva2VuIiwidG9rZW4iLCJwYXJzZUpTT04iLCJyZXNwb25zZSIsImpzb24iLCJjaGVja1N0YXR1cyIsIkVycm9yIiwiY2xvbmUiLCJyZXF1ZXN0IiwiYm9keSIsInZlcmIiLCJ1cGRhdGVkSGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsIkFQSV9FTkRQT0lOVCIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsInRoZW4iLCJidWlsZFVybCIsImJhc2VVcmwiLCJxdWVyeVN0cmluZyIsImsiLCJwb3N0IiwicHV0IiwiZGVsIiwidXBsb2FkIiwiZmlsZXMiLCJvblByb2dyZXNzIiwidXBsb2FkVXJsIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRhZ2UiLCJsb2FkZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmllbGRuYW1lIiwiY3VzdG9tRGF0YSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJpZFZlcmlmaWNhdGlvbiIsImlkVmVyaWZpY2F0aW9uRGlsZSIsIm9taXQiLCJBdXRoU2VydmljZSIsInNldEF1dGhIZWFkZXIiLCJyb2xlIiwiZXhwaXJlcyIsInBlcmZvcm1lckxvZ2luIiwic2V0VG9rZW4iLCJnZXRUb2tlbiIsImdldFJvbGUiLCJyZW1vdmVUb2tlbiIsInJlbW92ZSIsInJlbW92ZVJlbWVtYmVyIiwicGVyZm9ybWVyc1JlZ2lzdGVyIiwic3R1ZGlvUmVnaXN0ZXIiLCJmb3Jnb3RQYXNzd29yZCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXV0aFNlcnZpY2UiLCJCYW5uZXJTZXJ2aWNlIiwiYmFubmVyU2VydmljZSIsImdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsIkVhcm5pbmdTZXJ2aWNlIiwiZWFybmluZ1NlcnZpY2UiLCJGYXZvdXJpdGVTZXJ2aWNlIiwibGlrZSIsInVubGlrZSIsImlzRmF2b3JpdGVkIiwiR2FsbGVyeVNlcnZpY2UiLCJpc1BlcmZvcm1lciIsInB1cmNoYXNlZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRldGFpbHMiLCJwdWJsaWNkZXRhaWxzIiwiZ2FsbGVyeVNlcnZpY2UiLCJNZXNzYWdlU2VydmljZSIsImdldENvbnZlcnNhdGlvbnMiLCJzZWFyY2hDb252ZXJzYXRpb25zIiwiY3JlYXRlQ29udmVyc2F0aW9uIiwiZ2V0Q29udmVyc2F0aW9uRGV0YWlsIiwiZ2V0Q29udmVyc2F0aW9uQnlTdHJlYW1JZCIsInN0cmVhbUlkIiwiZ2V0TWVzc2FnZXMiLCJjb252ZXJzYXRpb25JZCIsImdldFB1YmxpY01lc3NhZ2VzIiwic2VuZE1lc3NhZ2UiLCJzZW5kU3RyZWFtTWVzc2FnZSIsInNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlIiwiZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lciIsInBlcmZvcm1lcklkIiwiY291bnRUb3RhbE5vdFJlYWQiLCJyZWFkQWxsSW5Db252ZXJzYXRpb24iLCJyZWNpcGllbnRJZCIsImdldE1lc3NhZ2VVcGxvYWRVcmwiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uIiwibWVzc2FnZVNlcnZpY2UiLCJPcmRlclNlcnZpY2UiLCJwYXlsb2FkIiwidXNlclNlYXJjaCIsInVzZXJGaW5kRGV0YWlscyIsIm9yZGVyU2VydmljZSIsIlBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UiLCJmaW5kT25lIiwicGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsIlBheW91dFJlcXVlc3RTZXJ2aWNlIiwiY2FsY3VsYXRlIiwic3R1ZGlvU2VhcmNoIiwiZGV0YWlsIiwicGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSIsImdldExpc3QiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwiUGVyZm9ybWVyU2VydmljZSIsIm1lIiwidXBkYXRlTWUiLCJnZXRBdmF0YXJVcGxvYWRVcmwiLCJnZXREb2N1bWVudHNVcGxvYWRVcmwiLCJnZXRSZWxlYXNlRm9ybVVybCIsIm15UHJvZHVjdCIsImNyZWF0ZVByb2R1Y3QiLCJpbWFnZSIsImRpZ2l0YWxGaWxlIiwidXBkYXRlUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJnZXRDb21taXNzaW9uIiwidXBkYXRlRGlyZWN0RGVwb3N0IiwiZ2VvQmxvY2siLCJnZXRCbG9ja2VkTGlzdCIsImluY3JlYXNlVmlldyIsInVwZGF0ZUJyb2FkY2FzdFNldHRpbmciLCJzdXNwZW5kQWNjb3VudCIsInBhc3N3b3JkIiwiY2hlY2tCbG9jayIsIkdFTk5ERVJfUEVSRk9STUVSIiwicGVyZm9ybWVyU2VydmljZSIsIlBob3RvU2VydmljZSIsInNlYXJjaEJ5R2FsbGVyeSIsImdhbGxlcnlJZCIsIm15UGhvdG9zIiwidXBsb2FkSW1hZ2VzIiwicGhvdG9TZXJ2aWNlIiwiUG9zdFNlcnZpY2UiLCJmaW5kQnlJZCIsImNyZWF0ZUNvbnRhY3RDb3RlbnQiLCJwb3N0U2VydmljZSIsIlByb2R1Y3RTZXJ2aWNlIiwiZ2V0RG93bmxvYWRMaW5rIiwicHJvZHVjdFNlcnZpY2UiLCJQdXJjaGFzZUl0ZW1TZXJ2aWNlIiwicHVyY2hhc2VJdGVtIiwicHVyY2hhc2VQcm9kdWN0IiwicHVyY2hhc2VWaWRlbyIsInB1cmNoYXNlSXRlbVNlcnZpY2UiLCJSZWZ1bmRSZXF1ZXN0U2VydmljZSIsInJlZnVuZFJlcXVlc3RTZXJ2aWNlIiwiU2V0dGluZ1NlcnZpY2UiLCJncm91cCIsImdldENvdW50cmllcyIsImdldFRpbWV6b25lcyIsInNldHRpbmdTZXJ2aWNlIiwiU3RyZWFtU2VydmljZSIsImdldFNlc3Npb25JZCIsImdvTGl2ZSIsImpvaW5QdWJsaWNDaGF0IiwicmVxdWVzdFByaXZhdGVDaGF0IiwiYWNjZXB0UHJpdmF0ZUNoYXQiLCJzdGFydEdyb3VwQ2hhdCIsImpvaW5Hcm91cENoYXQiLCJnZW5lcmF0ZU9uZVRpbWVUb2tlbiIsImdldFB1Ymxpc2hUb2tlbiIsImV4cGlyZURhdGUiLCJhZGQiLCJ0b0RhdGUiLCJnZXRUaW1lIiwic2VjdXJlT3B0aW9uIiwicmVzcCIsInRva2VuSWQiLCJnZXRTdWJzY3JpYmVyVG9rZW4iLCJnZXRMaXZlU3RyZWFtT3JWb2RVUkwiLCJfcGxheWVyIiwiYXBwTmFtZSIsInZpZXdlclVSTCIsImV4dGVuc2lvbiIsIm9uZVRpbWVUb2tlbiIsInN0cmVhbVNlcnZpY2UiLCJTdHVkaW9TZXJ2aWNlIiwiYWRkTW9kZWwiLCJnZXRNZW1iZXJDb21taXNzaW9ucyIsInVwZGF0ZU1lbWJlckNvbW1pc3Npb24iLCJ1cGRhdGVTdGF0dXNQZXJmb3JtZXJSZXF1ZXN0Iiwic3R1ZGlvU2VydmljZSIsIlRva2VuUGFja2FnZVNlcnZpY2UiLCJidXlUb2tlbnMiLCJ0b2tlblBhY2thZ2VTZXJ2aWNlIiwiVHJhbnNhY3Rpb25TZXJ2aWNlIiwic2VuZFRpcFRva2VuIiwic2VuZFBhaWRUb2tlbiIsInRyYW5zYWN0aW9uU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwidXNlcklkIiwidXNlclNlcnZpY2UiLCJVdGlsc1NlcnZpY2UiLCJjb3VudHJpZXNMaXN0IiwibGFuZ3VhZ2VzTGlzdCIsInBob25lQ29kZXNMaXN0Iiwic3RhdGlzdGljcyIsInZlcmlmeVJlY2FwdGNoYSIsInV0aWxzU2VydmljZSIsIlZpZGVvU2VydmljZSIsIm15VmlkZW9zIiwidmlkZW8iLCJ0cmFpbGVyIiwidGh1bWJuYWlsIiwidXNlckZpbmRWaWRlb0J5SWQiLCJ2aWRlb1NlcnZpY2UiLCJFdmVudCIsIndhcm5pbmciLCJTb2NrZXQiLCJuZXh0UHJvcHMiLCJjbG9zZSIsInVyaSIsIk5FWFRfUFVCTElDX1NPQ0tFVF9FTkRQT0lOVCIsInRyYW5zcG9ydHMiLCJTb2NrZXRJTyIsIm1lcmdlT3B0aW9ucyIsImRlYnVnIiwiZGVmYXVsdE9wdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsImF1dG9Db25uZWN0IiwicmVqZWN0VW5hdXRob3JpemVkIiwib25seSIsImNyZWF0ZUNvbnRleHQiLCJOT0RFX0VOViIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBQ0MsV0FBRDtBQUFZQyxhQUFaO0FBQXlCQyxjQUF6QjtBQUF1Q0MsZ0JBQXZDO0FBQXVEQztBQUF2RCxDQUFELEtBQXNFO0FBQ3JGLFNBQ0k7QUFBSyxhQUFTLEVBQUcsbUJBQWtCQSxRQUFTO0FBQTVDLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLGtCQUFLSixTQUFMLENBREosRUFFSSxrQkFDSSxrQkFDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQztBQUFaLEtBQ0ksaUJBQUlDLFlBQUosQ0FESixDQURKLENBREosRUFNSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQXdCQyxjQUF4QixDQU5KLENBRkosQ0FESixDQURKLENBREosQ0FESixDQURKO0FBcUJILENBdEJEOztBQXdCZUoseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7QUFFQTs7QUFRQTs7QUFzQkE7QUFDQSxNQUFNTSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxvQkFBb0IsR0FDeEIsUUFBZ0NDLFNBQWhDLEdBREY7QUFFQSxNQUFNQyxVQUEyQyxHQUFqRDs7QUFFQSx1QkFBeUQ7QUFDdkQ7QUFDQSxzQkFBb0I7QUFDbEI7QUFHRixHQU51RCxDQU12RDs7O0FBQ0EsTUFBSSxDQUFKLHNCQUEyQjtBQUN6QjtBQUdGOztBQUFBLFNBQVFDLGNBQWMsR0FBRyx5QkFDdEJDLE9BQUQsSUFBYTtBQUNYQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsVUFBSSxDQUFDTixTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBeEIsTUFBS04sQ0FBTCxFQUFrQztBQUNoQztBQUdGOztBQUFBLFlBQU1PLEVBQUUsR0FBR1AsU0FBUyxDQUFUQSxJQUFjTSxLQUFLLENBQTlCLE1BQVdOLENBQVg7O0FBQ0EsVUFBSU0sS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTVCLEdBQXlEO0FBQ3ZERixzQkFBYyxDQUFkQSxVQUF5QkUsS0FBSyxDQUE5QkY7QUFDQUosaUJBQVMsQ0FBVEEsT0FBaUJNLEtBQUssQ0FBdEJOO0FBQ0FPLFVBQUU7QUFFTDtBQVhERjtBQUZxQixLQWV2QjtBQUFFRyxjQUFVLEVBZmQ7QUFlRSxHQWZ1QixDQUF6QjtBQW1CRjs7QUFBQSxNQUFNQyxxQkFBcUIsR0FBRyxZQUFpQztBQUM3RCxRQUFNQyxRQUFRLEdBQUdDLFdBQWpCOztBQUNBLE1BQUksQ0FBSixVQUFlO0FBQ2IsV0FBTyxNQUFNLENBQWI7QUFHRkQ7O0FBQUFBLFVBQVEsQ0FBUkE7QUFDQVYsV0FBUyxDQUFUQTtBQUNBLFNBQU8sTUFBTTtBQUNYLFFBQUk7QUFDRlUsY0FBUSxDQUFSQTtBQUNBLEtBRkYsQ0FFRSxZQUFZO0FBQ1pFLGFBQU8sQ0FBUEE7QUFFRlo7O0FBQUFBLGFBQVMsQ0FBVEE7QUFORjtBQVJGOztBQWtCQSw2Q0FLUTtBQUNOLFlBQW1DO0FBQ25DLE1BQUksQ0FBQyx3QkFBTCxJQUFLLENBQUwsRUFBdUIsT0FGakIsQ0FHTjtBQUNBO0FBQ0E7QUFDQTs7QUFDQWEsUUFBTSxDQUFOQSxrQ0FBMENDLEdBQUQsSUFBUztBQUNoRCxjQUEyQztBQUN6QztBQUNBO0FBRUg7QUFMREQsS0FQTSxDQWFOOztBQUNBVixZQUFVLENBQUNZLElBQUksR0FBSkEsTUFBWFosRUFBVSxDQUFWQTtBQUdGOztBQUFBLGdDQUFrRDtBQUNoRCxRQUFNO0FBQUE7QUFBQSxNQUFhYSxLQUFLLENBQXhCO0FBQ0EsU0FDR0MsTUFBTSxJQUFJQSxNQUFNLEtBQWpCLE9BQUNBLElBQ0RELEtBQUssQ0FETCxPQUFDQyxJQUVERCxLQUFLLENBRkwsT0FBQ0MsSUFHREQsS0FBSyxDQUhMLFFBQUNDLElBSURELEtBQUssQ0FKTCxNQUFDQyxJQUllO0FBQ2ZELE9BQUssQ0FBTEEsZUFBcUJBLEtBQUssQ0FBTEEsc0JBTnhCO0FBVUY7O0FBQUEsb0VBUVE7QUFDTixRQUFNO0FBQUE7QUFBQSxNQUFlRSxDQUFDLENBQXRCOztBQUVBLE1BQUlDLFFBQVEsS0FBUkEsUUFBcUJDLGVBQWUsQ0FBZkEsQ0FBZSxDQUFmQSxJQUFzQixDQUFDLHdCQUFoRCxJQUFnRCxDQUE1Q0QsQ0FBSixFQUFtRTtBQUNqRTtBQUNBO0FBR0ZEOztBQUFBQSxHQUFDLENBQURBLGlCQVJNLENBVU47O0FBQ0EsTUFBSUcsTUFBTSxJQUFWLE1BQW9CO0FBQ2xCQSxVQUFNLEdBQUdDLEVBQUUsQ0FBRkEsZUFBVEQ7QUFHRixHQWZNLENBZU47OztBQUNBUixRQUFNLENBQUNVLE9BQU8sZUFBZFYsTUFBTSxDQUFOQSxXQUErQztBQUEvQ0E7QUFBK0MsR0FBL0NBLE9BQ0dXLE9BQUQsSUFBc0I7QUFDcEIsUUFBSSxDQUFKLFNBQWM7O0FBQ2QsZ0JBQVk7QUFDVnRCLFlBQU0sQ0FBTkE7QUFDQXVCLGNBQVEsQ0FBUkE7QUFFSDtBQVBIWjtBQVdGOztBQUFBLHFCQUF5RDtBQUN2RCxZQUEyQztBQUN6QyxtQ0FJRztBQUNELGFBQU8sVUFDSixnQ0FBK0JhLElBQUksQ0FBQ0MsR0FBSSxnQkFBZUQsSUFBSSxDQUFDRSxRQUFTLDZCQUE0QkYsSUFBSSxDQUFDRyxNQUF2RyxhQUFDLElBQ0Usb0JBRkwsRUFDRyxDQURJLENBQVA7QUFRRixLQWR5QyxDQWN6Qzs7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURmLFVBQUksRUFETjtBQUE0RCxLQUE1RDtBQUdBLFVBQU1nQixhQUFrQyxHQUFHQyxNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCTCxHQUFELElBQTRCO0FBQ2hELFVBQUlBLEdBQUcsS0FBUCxRQUFvQjtBQUNsQixZQUNFTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFDQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLGlCQUFrQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBRnJDLFVBR0U7QUFDQSxnQkFBTUMsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBQUVJLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxxQkFBK0IsT0FBT0EsS0FBSyxDQUhyRCxHQUdxRDtBQUgvQixXQUFELENBQXJCO0FBTUg7QUFYRCxhQVdPO0FBQ0w7QUFDQTtBQUNBLGNBQU1FLENBQVEsR0FBZDtBQUVIO0FBakJELE9BckJ5QyxDQXdDekM7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURkLFFBQUUsRUFEd0Q7QUFFMURDLGFBQU8sRUFGbUQ7QUFHMURGLFlBQU0sRUFIb0Q7QUFJMURnQixhQUFPLEVBSm1EO0FBSzFEQyxjQUFRLEVBTGtEO0FBTTFEQyxjQUFRLEVBTlY7QUFBNEQsS0FBNUQ7QUFRQSxVQUFNQyxhQUFrQyxHQUFHUixNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCTCxHQUFELElBQTRCO0FBQ2hELFVBQUlBLEdBQUcsS0FBUCxNQUFrQjtBQUNoQixZQUNFTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFDQSxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBREFBLFlBRUEsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUhGLFVBSUU7QUFDQSxnQkFBTUMsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBQUUsT0FBT0ksS0FBSyxDQUh0QixHQUdzQjtBQUhBLFdBQUQsQ0FBckI7QUFNSDtBQVpELGFBWU8sSUFDTE4sR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUlNLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxZQUFzQixPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBQTFCLFdBQTJEO0FBQ3pELGdCQUFNQyxlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRSxPQUFPSSxLQUFLLENBSHRCLEdBR3NCO0FBSEEsV0FBRCxDQUFyQjtBQU1IO0FBZE0sYUFjQTtBQUNMO0FBQ0E7QUFDQSxjQUFNRSxDQUFRLEdBQWQ7QUFFSDtBQWhDRCxPQXBEeUMsQ0FzRnpDO0FBQ0E7O0FBQ0EsVUFBTU0sU0FBUyxHQUFHQyxzQkFBbEIsS0FBa0JBLENBQWxCOztBQUNBLFFBQUlULEtBQUssQ0FBTEEsWUFBa0IsQ0FBQ1EsU0FBUyxDQUFoQyxTQUEwQztBQUN4Q0EsZUFBUyxDQUFUQTtBQUNBN0IsYUFBTyxDQUFQQTtBQUlIO0FBQ0Q7O0FBQUEsUUFBTStCLENBQUMsR0FBR1YsS0FBSyxDQUFMQSxhQUFWOztBQUVBLFFBQU0sMEJBQTBCUyxlQUFoQyxRQUFnQ0EsRUFBaEM7O0FBRUEsUUFBTTdCLE1BQU0sR0FBRyxhQUFmLFNBQWUsR0FBZjtBQUNBLFFBQU0rQixRQUFRLEdBQUkvQixNQUFNLElBQUlBLE1BQU0sQ0FBakIsUUFBQ0EsSUFBbEI7O0FBRUEsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFlNkIsdUJBQWMsTUFBTTtBQUN2QyxVQUFNLDZCQUE2QixtQ0FBc0JULEtBQUssQ0FBM0IsTUFBbkMsSUFBbUMsQ0FBbkM7QUFDQSxXQUFPO0FBQ0xsQixVQUFJLEVBREM7QUFFTE8sUUFBRSxFQUFFVyxLQUFLLENBQUxBLEtBQ0EsbUNBQXNCQSxLQUFLLENBRDNCQSxFQUNBLENBREFBLEdBRUFZLFVBQVUsSUFKaEI7QUFBTyxLQUFQO0FBRm1CSCxLQVFsQixXQUFXVCxLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBUi9CLEVBUUcsQ0FSa0JTLENBQXJCOztBQVVBLDJCQUFnQixNQUFNO0FBQ3BCLFFBQ0VDLENBQUMsSUFBREEsb0NBR0FHLFFBQVEsQ0FIUkgsV0FJQSx3QkFMRixJQUtFLENBTEYsRUFNRTtBQUNBO0FBQ0EsWUFBTUksWUFBWSxHQUFHNUMsVUFBVSxDQUFDWSxJQUFJLEdBQUpBLE1BQWhDLEVBQStCLENBQS9COztBQUNBLFVBQUksQ0FBSixjQUFtQjtBQUNqQixlQUFPTixxQkFBcUIsV0FBVyxNQUFNO0FBQzNDOEIsa0JBQVEsZUFBUkEsRUFBUSxDQUFSQTtBQURGLFNBQTRCLENBQTVCO0FBSUg7QUFDRjtBQWhCRCxLQWdCRyx3QkFoQkgsTUFnQkcsQ0FoQkg7O0FBa0JBLE1BQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUosTUFwSXVELENBcUl2RDs7QUFDQSxNQUFJLG9CQUFKLFVBQWtDO0FBQ2hDUyxZQUFRLGdCQUFHLHdDQUFYQSxRQUFXLENBQVhBO0FBR0YsR0ExSXVELENBMEl2RDs7O0FBQ0EsUUFBTUMsS0FBVSxHQUFHQyxxQkFBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQU1DLFVBS0wsR0FBRztBQUNGQyxPQUFHLEVBQUdDLEVBQUQsSUFBYTtBQUNoQixjQUFRQyxXQUFXLENBQVhBLEVBQVcsQ0FBWEE7O0FBRVIsVUFBSUwsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUEvQyxLQUFxRDtBQUNuRCxZQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFlBQXFDQSxLQUFLLENBQUxBLElBQXJDLEVBQXFDQSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFaLFFBQUosVUFBbUM7QUFDdENBLGVBQUssQ0FBTEE7QUFFSDtBQUNGO0FBVkM7QUFXRk0sV0FBTyxFQUFHckMsQ0FBRCxJQUF5QjtBQUNoQyxVQUFJK0IsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxZQUFuQixZQUE4RDtBQUM1REEsYUFBSyxDQUFMQTtBQUVGOztBQUFBLFVBQUksQ0FBQy9CLENBQUMsQ0FBTixrQkFBeUI7QUFDdkJzQyxtQkFBVyx3Q0FBWEEsTUFBVyxDQUFYQTtBQUVIO0FBdkJIO0FBS0ksR0FMSjs7QUEwQkEsU0FBTztBQUNMTCxjQUFVLENBQVZBLGVBQTJCakMsQ0FBRCxJQUF5QjtBQUNqRCxVQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCOztBQUN2QixVQUFJK0IsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxpQkFBbkIsWUFBbUU7QUFDakVBLGFBQUssQ0FBTEE7QUFFRlY7O0FBQUFBLGNBQVEsbUJBQW1CO0FBQUVrQixnQkFBUSxFQUFyQ2xCO0FBQTJCLE9BQW5CLENBQVJBO0FBTEZZO0FBU0YsR0FoTHVELENBZ0x2RDtBQUNBOzs7QUFDQSxNQUFJbEIsS0FBSyxDQUFMQSxZQUFtQmdCLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUE5RCxLQUE2QyxDQUE3QyxFQUF3RTtBQUN0RUUsY0FBVSxDQUFWQSxPQUFrQix5QkFDaEIsMkJBQWN0QyxNQUFNLElBQUlBLE1BQU0sQ0FBOUIsUUFBdUNBLE1BQU0sSUFBSUEsTUFBTSxDQUR6RHNDLGFBQ0UsQ0FEZ0IsQ0FBbEJBO0FBS0Y7O0FBQUEsc0JBQU9ULG1DQUFQLFVBQU9BLENBQVA7OztlQUdhZ0IsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFZmOzs7O0FBR08sdUNBQXVEO0FBQzVELFNBQU9DLElBQUksQ0FBSkEsaUJBQXNCQSxJQUFJLEtBQTFCQSxNQUFxQ0EsSUFBSSxDQUFKQSxTQUFjLENBQW5EQSxDQUFxQ0EsQ0FBckNBLEdBQVA7QUFHRjtBQUFBOzs7Ozs7QUFJTyxNQUFNQywwQkFBMEIsR0FBR0MsU0FDckNGLFNBRHFDRSxHQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7O0FBQ0E7Ozs7O0FBQ0E7O0FBc0hBOzs7QUF6SEE7O0FBbUJBLE1BQU1DLGVBQW9DLEdBQUc7QUFDM0NqRCxRQUFNLEVBRHFDO0FBQzdCO0FBQ2RrRCxnQkFBYyxFQUY2Qjs7QUFHM0NDLE9BQUssS0FBaUI7QUFDcEIsUUFBSSxLQUFKLFFBQWlCLE9BQU96RCxFQUFQOztBQUNqQixlQUFtQyxFQUdwQztBQVJIOztBQUE2QyxDQUE3QyxDLENBV0E7O0FBQ0EsTUFBTTBELGlCQUFpQixHQUFHLHNHQUExQixlQUEwQixDQUExQjtBQVlBLE1BQU1DLFlBQVksR0FBRywwR0FBckIsb0JBQXFCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0RBQXpCLGdCQUF5QixDQUF6QixDLENBU0E7O0FBQ0FuQyxNQUFNLENBQU5BLDBDQUFpRDtBQUMvQ29DLEtBQUcsR0FBRztBQUNKLFdBQU9DLGlCQUFQO0FBRkpyQzs7QUFBaUQsQ0FBakRBO0FBTUFpQyxpQkFBaUIsQ0FBakJBLFFBQTJCSyxLQUFELElBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQXRDLFFBQU0sQ0FBTkEsdUNBQThDO0FBQzVDb0MsT0FBRyxHQUFHO0FBQ0osWUFBTXZELE1BQU0sR0FBRzBELFNBQWY7QUFDQSxhQUFPMUQsTUFBTSxDQUFiLEtBQWEsQ0FBYjtBQUhKbUI7O0FBQThDLEdBQTlDQTtBQUxGaUM7QUFhQSxnQkFBZ0IsQ0FBaEIsUUFBMEJLLEtBQUQsSUFBVztBQUNsQztBQUNBOztBQUFFUixpQkFBRCxPQUFDQSxHQUFpQyxDQUFDLEdBQUQsU0FBb0I7QUFDckQsVUFBTWpELE1BQU0sR0FBRzBELFNBQWY7QUFDQSxXQUFPMUQsTUFBTSxDQUFOQSxLQUFNLENBQU5BLENBQWMsR0FBckIsSUFBT0EsQ0FBUDtBQUZELEdBQUNpRDtBQUZKO0FBUUFJLFlBQVksQ0FBWkEsUUFBc0JsRCxLQUFELElBQVc7QUFDOUI4QyxpQkFBZSxDQUFmQSxNQUFzQixNQUFNO0FBQzFCTyxzQ0FBd0IsQ0FBQyxHQUFELFNBQWE7QUFDbkMsWUFBTUcsVUFBVSxHQUFJLEtBQUl4RCxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTXlELGdCQUFnQixHQUF0Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsQ0FBcEIsVUFBb0IsQ0FBcEIsRUFBa0M7QUFDaEMsWUFBSTtBQUNGQSwwQkFBZ0IsQ0FBaEJBLFVBQWdCLENBQWhCQSxDQUE2QixHQUE3QkE7QUFDQSxTQUZGLENBRUUsWUFBWTtBQUNaN0QsaUJBQU8sQ0FBUEEsTUFBZSx3Q0FBdUM0RCxVQUF0RDVEO0FBQ0FBLGlCQUFPLENBQVBBLE1BQWUsR0FBRUUsR0FBRyxDQUFDNEQsT0FBUSxLQUFJNUQsR0FBRyxDQUFDNkQsS0FBckMvRDtBQUVIO0FBQ0Y7QUFiRHlEO0FBREZQO0FBREZJOztBQW1CQSxxQkFBNkI7QUFDM0IsTUFBSSxDQUFDSixlQUFlLENBQXBCLFFBQTZCO0FBQzNCLFVBQU1ZLE9BQU8sR0FDWCxnQ0FERjtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPWixlQUFlLENBQXRCO0FBR0YsQyxDQUFBOzs7ZUFDZUEsZSxFQUVmOzs7O0FBR08scUJBQWlDO0FBQ3RDLFNBQU9wQiwwQkFBaUJrQyxlQUF4QixhQUFPbEMsQ0FBUDtBQUdGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1tQyxZQUFZLEdBQUcsQ0FBQyxHQUFELFNBQWlDO0FBQzNEZixpQkFBZSxDQUFmQSxTQUF5QixJQUFJTyxTQUFKLFFBQVcsR0FBcENQLElBQXlCLENBQXpCQTtBQUNBQSxpQkFBZSxDQUFmQSx1QkFBd0N2RCxFQUFELElBQVFBLEVBQS9DdUQ7QUFDQUEsaUJBQWUsQ0FBZkE7QUFFQSxTQUFPQSxlQUFlLENBQXRCO0FBTEssRSxDQVFQOzs7OztBQUNPLDBDQUE4RDtBQUNuRSxRQUFNZ0IsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQi9DLE1BQU0sQ0FBTkEsT0FDbkJnRCxLQUFLLENBQUxBLFFBQWNGLE9BQU8sQ0FBckJFLFFBQXFCLENBQXJCQSxTQURtQmhELElBRW5COEMsT0FBTyxDQUZUQyxRQUVTLENBRlkvQyxDQUFyQitDLENBRHlDLENBSXZDOztBQUNGO0FBR0ZBOztBQUFBQSxZQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUJELE9BQU8sQ0FBNUJDLFFBQTRCLENBQTVCQTtBQUdGLEdBaEJtRSxDQWdCbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCVixpQkFBbEJVO0FBRUFaLGtCQUFnQixDQUFoQkEsUUFBMEJHLEtBQUQsSUFBVztBQUNsQ1MsWUFBUSxDQUFSQSxLQUFRLENBQVJBLEdBQWtCLENBQUMsR0FBRCxTQUFvQjtBQUNwQyxhQUFPRCxPQUFPLENBQVBBLEtBQU8sQ0FBUEEsQ0FBZSxHQUF0QixJQUFPQSxDQUFQO0FBREZDO0FBREZaO0FBTUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektEOztBQUVBOztBQVdlLHVDQUsrQjtBQUM1QyxvQ0FBdUM7QUFDckMsd0JBQU87QUFBbUIsWUFBTSxFQUFFLFlBQTNCLFNBQTJCO0FBQTNCLE9BQVAsS0FBTyxFQUFQO0FBR0Y7O0FBQUEsbUJBQWlCLENBQWpCLGtCQUFvQ2MsaUJBQWlCLENBQUNDLGVBQXRELENBQ0E7QUFEQTtBQUVFQyxtQkFBRCxvQkFBQ0EsR0FBaURGLGlCQUFELENBQWpELG1CQUFDRTs7QUFDRixZQUEyQztBQUN6QyxVQUFNQyxJQUFJLEdBQ1JILGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWFDLElBQTlDRDtBQUdGOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDakNZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwyQ0FBMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0Esb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFpRCxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLHdPQUF3TyxVQUFVLEVBQUU7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkRBQTZEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDclpBOzs7Ozs7O0FBWUE7QUFDQTtBQUNBOztBQVVlLGdCQUE2QjtBQUMxQyxRQUFNRSxHQUErQixHQUFHckQsTUFBTSxDQUFOQSxPQUF4QyxJQUF3Q0EsQ0FBeEM7QUFFQSxTQUFPO0FBQ0xzRCxNQUFFLGdCQUFpQztBQUNqQztBQUFDLE9BQUNELEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxLQUFjQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsR0FBZixFQUFDQSxDQUFEO0FBRkU7O0FBS0xFLE9BQUcsZ0JBQWlDO0FBQ2xDLFVBQUlGLEdBQUcsQ0FBUCxJQUFPLENBQVAsRUFBZTtBQUNiQSxXQUFHLENBQUhBLElBQUcsQ0FBSEEsUUFBaUJBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxzQkFBakJBO0FBRUg7QUFUSTs7QUFXTEcsUUFBSSxPQUFlLEdBQWYsTUFBK0I7QUFDakM7QUFDQTtBQUFDLE9BQUNILEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxJQUFELGdCQUErQkksT0FBRCxJQUFzQjtBQUNuREEsZUFBTyxDQUFDLEdBQVJBLElBQU8sQ0FBUEE7QUFERDtBQWJMOztBQUFPLEdBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTNCQTtBQUFBO0FBQ0E7OztBQXdDQSxNQUFNQyxRQUFRLEdBQUk3QixVQUFsQjs7QUFFQSxrQ0FBa0M7QUFDaEMsU0FBTzdCLE1BQU0sQ0FBTkEsT0FBYyxVQUFkQSxpQkFBYyxDQUFkQSxFQUE0QztBQUNqRDJELGFBQVMsRUFEWDtBQUFtRCxHQUE1QzNELENBQVA7QUFLRjs7QUFBQSxxQ0FBc0Q7QUFDcEQsU0FBTzRELE1BQU0sSUFBSWpDLElBQUksQ0FBSkEsV0FBVmlDLEdBQVVqQyxDQUFWaUMsR0FDSGpDLElBQUksS0FBSkEsTUFDRSx3REFERkEsTUFDRSxDQURGQSxHQUVHLEdBQUVpQyxNQUFPLEdBQUVqQyxJQUhYaUMsS0FBUDtBQU9LOztBQUFBLGdEQUlMO0FBQ0EsTUFBSS9CLEtBQUosRUFBcUMsRUFLckM7O0FBQUE7QUFHSzs7QUFBQSxpQ0FBa0Q7QUFDdkQsTUFBSUEsS0FBSixFQUFxQyxFQUtyQzs7QUFBQTtBQUdLOztBQUFBLDJCQUE0QztBQUNqRCxTQUFPRixJQUFJLEtBQUpBLFlBQXFCQSxJQUFJLENBQUpBLFdBQWdCK0IsUUFBUSxHQUFwRCxHQUE0Qi9CLENBQTVCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hEO0FBQ0EsU0FBT2tDLGFBQWEsT0FBcEIsUUFBb0IsQ0FBcEI7QUFHSzs7QUFBQSwyQkFBMkM7QUFDaEQsU0FBT2xDLElBQUksQ0FBSkEsTUFBVytCLFFBQVEsQ0FBbkIvQixXQUFQO0FBR0Y7QUFBQTs7Ozs7QUFHTyx5QkFBMEM7QUFDL0MsTUFBSW1DLEdBQUcsQ0FBSEEsV0FBSixHQUFJQSxDQUFKLEVBQXlCOztBQUN6QixNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxjQUFjLEdBQUcsV0FBdkIsaUJBQXVCLEdBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLGFBQWpCLGNBQWlCLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFSQSw2QkFBc0NDLFdBQVcsQ0FBQ0QsUUFBUSxDQUFqRSxRQUF3RCxDQUF4RDtBQUNBLEdBTEYsQ0FLRSxVQUFVO0FBQ1Y7QUFFSDtBQUlNOztBQUFBLGlEQUlMO0FBQ0EsTUFBSUUsaUJBQWlCLEdBQXJCO0FBRUEsUUFBTUMsWUFBWSxHQUFHLCtCQUFyQixLQUFxQixDQUFyQjtBQUNBLFFBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFsQztBQUNBLFFBQU1FLGNBQWMsR0FDbEI7QUFDQSxHQUFDQyxVQUFVLEtBQVZBLFFBQXVCLGlEQUF2QkEsVUFBdUIsQ0FBdkJBLEdBQUQsT0FDQTtBQUNBO0FBSkY7QUFPQUosbUJBQWlCLEdBQWpCQTtBQUNBLFFBQU1LLE1BQU0sR0FBR3ZFLE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQ3VFLE1BQU0sQ0FBTkEsTUFBY0MsS0FBRCxJQUFXO0FBQ3ZCLFFBQUlDLEtBQUssR0FBR0osY0FBYyxDQUFkQSxLQUFjLENBQWRBLElBQVo7QUFDQSxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQXVCRCxhQUFhLENBQTFDLEtBQTBDLENBQTFDLENBRnVCLENBSXZCO0FBQ0E7O0FBQ0EsUUFBSU0sUUFBUSxHQUFJLElBQUdDLE1BQU0sV0FBVyxFQUFHLEdBQUVILEtBQXpDOztBQUNBLGtCQUFjO0FBQ1pFLGNBQVEsR0FBSSxHQUFFLGVBQWUsRUFBRyxJQUFHQSxRQUFuQ0E7QUFFRjs7QUFBQSxRQUFJQyxNQUFNLElBQUksQ0FBQzNCLEtBQUssQ0FBTEEsUUFBZixLQUFlQSxDQUFmLEVBQXFDeUIsS0FBSyxHQUFHLENBQVJBLEtBQVEsQ0FBUkE7QUFFckMsV0FDRSxDQUFDRyxRQUFRLElBQUlKLEtBQUssSUFBbEIscUJBQ0E7QUFDQ04scUJBQWlCLEdBQ2hCQSxpQkFBaUIsQ0FBakJBLGtCQUVFUyxNQUFNLEdBQ0RGLEtBQUQsSUFBQ0EsQ0FBdUJJLHNCQUF4QixPQUFDSixFQUFELElBQUNBLENBREMsR0FDREEsQ0FEQyxHQUVGLG1DQUpOUCxLQUlNLENBSk5BLEtBSkosR0FDRSxDQURGO0FBYkosR0FDR0ssQ0FESCxFQXlCRTtBQUNBTCxxQkFBaUIsR0FBakJBLEdBREEsQ0FDdUI7QUFFdkI7QUFDQTtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMWSxVQUFNLEVBRlI7QUFBTyxHQUFQO0FBTUY7O0FBQUEsMkNBQXFFO0FBQ25FLFFBQU1DLGFBQTZCLEdBQW5DO0FBRUEvRSxRQUFNLENBQU5BLG9CQUE0QkwsR0FBRCxJQUFTO0FBQ2xDLFFBQUksQ0FBQzRFLE1BQU0sQ0FBTkEsU0FBTCxHQUFLQSxDQUFMLEVBQTJCO0FBQ3pCUSxtQkFBYSxDQUFiQSxHQUFhLENBQWJBLEdBQXFCQyxLQUFLLENBQTFCRCxHQUEwQixDQUExQkE7QUFFSDtBQUpEL0U7QUFLQTtBQUdGO0FBQUE7Ozs7OztBQUlPLG1EQUlHO0FBQ1I7QUFDQSxRQUFNaUYsSUFBSSxHQUFHLHFCQUFiLFVBQWEsQ0FBYjtBQUNBLFFBQU1DLFdBQVcsR0FDZixrQ0FBa0MsaUNBRHBDLElBQ29DLENBRHBDOztBQUVBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcscUJBQWpCLElBQWlCLENBQWpCO0FBQ0FBLFlBQVEsQ0FBUkEsV0FBb0Isd0RBQTJCQSxRQUFRLENBQXZEQSxRQUFvQixDQUFwQkE7QUFDQSxRQUFJQyxjQUFjLEdBQWxCOztBQUVBLFFBQ0UsK0JBQWVELFFBQVEsQ0FBdkIsYUFDQUEsUUFBUSxDQURSLGdCQURGLFdBSUU7QUFDQSxZQUFNSCxLQUFLLEdBQUcseUNBQXVCRyxRQUFRLENBQTdDLFlBQWMsQ0FBZDtBQUVBLFlBQU07QUFBQTtBQUFBO0FBQUEsVUFBcUJFLGFBQWEsQ0FDdENGLFFBQVEsQ0FEOEIsVUFFdENBLFFBQVEsQ0FGOEIsVUFBeEMsS0FBd0MsQ0FBeEM7O0FBTUEsa0JBQVk7QUFDVkMsc0JBQWMsR0FBRyxpQ0FBcUI7QUFDcEN4RSxrQkFBUSxFQUQ0QjtBQUVwQzBFLGNBQUksRUFBRUgsUUFBUSxDQUZzQjtBQUdwQ0gsZUFBSyxFQUFFTyxrQkFBa0IsUUFIM0JILE1BRzJCO0FBSFcsU0FBckIsQ0FBakJBO0FBTUg7QUFFRCxLQTNCRSxDQTJCRjs7O0FBQ0EsVUFBTUksWUFBWSxHQUNoQkwsUUFBUSxDQUFSQSxXQUFvQkYsSUFBSSxDQUF4QkUsU0FDSUEsUUFBUSxDQUFSQSxXQUFvQkEsUUFBUSxDQUFSQSxPQUR4QkEsTUFDSUEsQ0FESkEsR0FFSUEsUUFBUSxDQUhkO0FBS0EsV0FBUU0sU0FBUyxHQUNiLGVBQWVMLGNBQWMsSUFEaEIsWUFDYixDQURhLEdBQWpCO0FBR0EsR0FwQ0YsQ0FvQ0UsVUFBVTtBQUNWLFdBQVFLLFNBQVMsR0FBRyxDQUFILFdBQUcsQ0FBSCxHQUFqQjtBQUVIO0FBRUQ7O0FBQUEsTUFBTUMsZUFBZSxHQUFHQyxNQUFNLENBQTlCLGlCQUE4QixDQUE5Qjs7QUFDTywrQkFBNkM7QUFDbEQsU0FBTzNGLE1BQU0sQ0FBTkEscUNBQVAsRUFBT0EsQ0FBUDtBQUdGOztBQUFBLHVDQUE2RDtBQUMzRDtBQUNBO0FBQ0EsU0FBTztBQUNMOEQsT0FBRyxFQUFFOEIsV0FBVyxDQUFDQyxXQUFXLENBQUNoSCxNQUFNLENBQVAsVUFEdkIsR0FDdUIsQ0FBWixDQURYO0FBRUxTLE1BQUUsRUFBRUEsRUFBRSxHQUFHc0csV0FBVyxDQUFDQyxXQUFXLENBQUNoSCxNQUFNLENBQVAsVUFBMUIsRUFBMEIsQ0FBWixDQUFkLEdBRlI7QUFBTyxHQUFQO0FBeURGOztBQUFBLE1BQU1pSCx1QkFBdUIsR0FDM0JqRSxVQUVBLEtBSEY7O0FBS0EsbUNBQWlFO0FBQy9ELFNBQU8sS0FBSyxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWtFLGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFQyxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsVUFBSUMsUUFBUSxHQUFSQSxLQUFnQkQsR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPRSxVQUFVLE1BQU1ELFFBQVEsR0FBL0IsQ0FBaUIsQ0FBakI7QUFFRjs7QUFBQSxZQUFNLFVBQU4sNkJBQU0sQ0FBTjtBQUdGOztBQUFBLFdBQU9ELEdBQUcsQ0FBVixJQUFPQSxFQUFQO0FBckJGLEdBQU8sQ0FBUDtBQXlCRjs7QUFBQSxpREFBa0U7QUFDaEUsU0FBTyxVQUFVLFdBQVdHLGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EckgsR0FBRCxJQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUosZ0JBQXFCO0FBQ25Cc0gsc0JBQWdCLENBQWhCQSxHQUFnQixDQUFoQkE7QUFFRjs7QUFBQTtBQVBGLEdBQU8sQ0FBUDtBQVdhOztBQUFBLE1BQU0vRCxNQUFOLENBQW1DO0FBT2hEOztBQVBnRDtBQVdoRDtBQWtCQWdFLGFBQVcseUJBSVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBK0JUO0FBQUEsU0EzREZDLEtBMkRFO0FBQUEsU0ExREYxRixRQTBERTtBQUFBLFNBekRGb0UsS0F5REU7QUFBQSxTQXhERnVCLE1Bd0RFO0FBQUEsU0F2REY3QyxRQXVERTtBQUFBLFNBbERGOEMsVUFrREU7QUFBQSxTQWhERkMsR0FnREUsR0FoRGtDLEVBZ0RsQztBQUFBLFNBL0NGQyxHQStDRTtBQUFBLFNBOUNGQyxHQThDRTtBQUFBLFNBN0NGQyxVQTZDRTtBQUFBLFNBNUNGQyxJQTRDRTtBQUFBLFNBM0NGQyxNQTJDRTtBQUFBLFNBMUNGQyxRQTBDRTtBQUFBLFNBekNGQyxLQXlDRTtBQUFBLFNBeENGQyxVQXdDRTtBQUFBLFNBdkNGQyxjQXVDRTtBQUFBLFNBdENGQyxRQXNDRTtBQUFBLFNBckNGQyxNQXFDRTtBQUFBLFNBcENGQyxPQW9DRTtBQUFBLFNBbkNGQyxhQW1DRTs7QUFBQSxzQkFxR1lwSSxDQUFELElBQTRCO0FBQ3ZDLFlBQU1xSSxLQUFLLEdBQUdySSxDQUFDLENBQWY7O0FBRUEsVUFBSSxDQUFKLE9BQVk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUE7QUFBQTtBQUFBLFlBQU47QUFDQSx5Q0FFRSxpQ0FBcUI7QUFBRTBCLGtCQUFRLEVBQUVnRixXQUFXLENBQXZCLFFBQXVCLENBQXZCO0FBRnZCO0FBRXVCLFNBQXJCLENBRkYsRUFHRSxXQUhGLE1BR0UsR0FIRjtBQUtBO0FBR0Y7O0FBQUEsVUFBSSxDQUFDMkIsS0FBSyxDQUFWLEtBQWdCO0FBQ2Q7QUFHRjs7QUFBQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjtBQUVBLFlBQU07QUFBQTtBQUFBLFVBQWUsd0NBQXJCLEdBQXFCLENBQXJCLENBNUJ1QyxDQThCdkM7QUFDQTs7QUFDQSxVQUFJLGNBQWNqSSxFQUFFLEtBQUssS0FBckIsVUFBb0NzQixRQUFRLEtBQUssS0FBckQsVUFBb0U7QUFDbEU7QUFHRixPQXBDdUMsQ0FvQ3ZDO0FBQ0E7OztBQUNBLFVBQUksYUFBYSxDQUFDLFVBQWxCLEtBQWtCLENBQWxCLEVBQW9DO0FBQ2xDO0FBR0Y7O0FBQUEsMkNBSUVaLE1BQU0sQ0FBTkEsb0JBQTJCO0FBQ3pCSyxlQUFPLEVBQUVtSCxPQUFPLENBQVBBLFdBQW1CLEtBTGhDO0FBSTZCLE9BQTNCeEgsQ0FKRjtBQS9JQSxPQUNBOzs7QUFDQSxpQkFBYSxxREFBYixTQUFhLENBQWIsQ0FGQSxDQUlBOztBQUNBLHlCQUxBLENBTUE7QUFDQTtBQUNBOztBQUNBLFFBQUlZLFNBQVEsS0FBWixXQUE0QjtBQUMxQixzQkFBZ0IsS0FBaEIsU0FBOEI7QUFBQTtBQUU1QjZHLG1CQUFXLEVBRmlCO0FBRzVCeEgsYUFBSyxFQUh1QjtBQUFBO0FBSzVCeUgsZUFBTyxFQUFFQyxZQUFZLElBQUlBLFlBQVksQ0FMVDtBQU01QkMsZUFBTyxFQUFFRCxZQUFZLElBQUlBLFlBQVksQ0FOdkM7QUFBOEIsT0FBOUI7QUFVRjs7QUFBQSwrQkFBMkI7QUFDekJFLGVBQVMsRUFEZ0I7QUFFekJKLGlCQUFXLEVBQUU7QUFGZjtBQUVlO0FBRlksS0FBM0IsQ0FwQkEsQ0EyQkE7QUFDQTs7QUFDQSxrQkFBY3BGLE1BQU0sQ0FBcEI7QUFFQTtBQUNBO0FBQ0Esd0JBakNBLENBa0NBO0FBQ0E7O0FBQ0Esa0JBQ0U7QUFDQSxpREFBNEJ5RixhQUFhLENBQXpDLHlCQUZGO0FBR0E7QUFDQTtBQUNBO0FBQ0EsNEJBMUNBLENBMkNBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFFQSxRQUFJakcsS0FBSixFQUFxQyxFQU1yQzs7QUFBQSxlQUFtQyxFQTRDcEM7QUFzRERrRzs7QUFBQUEsUUFBTSxHQUFTO0FBQ2I3SixVQUFNLENBQU5BO0FBR0Y7QUFBQTs7Ozs7QUFHQThKLE1BQUksR0FBRztBQUNMOUosVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUErSixNQUFJLE1BQVczSSxFQUFPLEdBQWxCLEtBQTBCa0ksT0FBMEIsR0FBcEQsSUFBMkQ7QUFDN0Q7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNVLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUEzSSxTQUFPLE1BQVdELEVBQU8sR0FBbEIsS0FBMEJrSSxPQUEwQixHQUFwRCxJQUEyRDtBQUNoRTtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBY1UsWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8scUNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEsUUFBTUMsTUFBTiwyQkFLb0I7QUFDbEIsUUFBSSxDQUFDQyxVQUFVLENBQWYsR0FBZSxDQUFmLEVBQXNCO0FBQ3BCbEssWUFBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSSxDQUFFc0osT0FBRCxDQUFMLElBQTBCO0FBQ3hCO0FBRUYsS0FUa0IsQ0FTbEI7OztBQUNBLFFBQUlhLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGOztBQUFBLFFBQUksS0FBSixnQkFBeUI7QUFDdkIsOEJBQXdCLEtBQXhCO0FBR0ZoSjs7QUFBQUEsTUFBRSxHQUFHaUosU0FBUyxLQUFLLEtBQUwsUUFBa0IsS0FBaENqSixhQUFjLENBQWRBO0FBQ0EsVUFBTWtKLFNBQVMsR0FBR0MsU0FBUyxDQUN6QnhFLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQnlFLFdBQVcsQ0FBN0J6RSxFQUE2QixDQUE3QkEsR0FEeUIsSUFFekIsS0FGRixNQUEyQixDQUEzQjtBQUlBLDZCQXZCa0IsQ0F5QmxCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFFdUQsT0FBRCxDQUFELE1BQXdCLHFCQUE1QixTQUE0QixDQUE1QixFQUE2RDtBQUMzRDtBQUNBbkYsWUFBTSxDQUFOQSxtQ0FGMkQsQ0FHM0Q7O0FBQ0E7QUFDQTtBQUNBLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0YsS0ExQ2tCLENBMENsQjtBQUNBO0FBQ0E7OztBQUNBLFVBQU1zRyxLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFDQSxVQUFNO0FBQUVDLGdCQUFVLEVBQVo7QUFBQSxRQUEyQixNQUFNLGdCQUF2QztBQUVBLFFBQUlDLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQTtBQUFBLFFBQUo7QUFFQUEsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ2pJLGNBQVEsR0FBR2lJLE1BQU0sQ0FBakJqSTtBQUNBa0QsU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0EzRGtCLENBMkRsQjtBQUNBO0FBQ0E7OztBQUNBbEQsWUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCOEgsV0FBVyxDQURwQixRQUNvQixDQUFuQyxDQURlLEdBQW5COUgsU0E5RGtCLENBa0VsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBQyxjQUFMLFNBQUssQ0FBTCxFQUErQjtBQUM3QmtJLFlBQU0sR0FBTkE7QUFHRjs7QUFBQSxRQUFJeEMsS0FBSyxHQUFHLHFEQUFaLFFBQVksQ0FBWjtBQUNBLFVBQU07QUFBRWpHLGFBQU8sR0FBVDtBQUFBLFFBQU4sUUE1RWtCLENBOEVsQjtBQUNBOztBQUNBLFFBQUlRLFVBQVUsR0FBZDs7QUFFQSxRQUFJZ0IsSUFBSixFQUFxQztBQUNuQ2hCLGdCQUFVLEdBQUcsOEJBQ1gsNENBRFcsNENBTVZGLENBQUQsSUFBZSxrQkFBa0I7QUFBRUMsZ0JBQVEsRUFBNUI7QUFBa0IsT0FBbEIsU0FOakJDLFFBQWEsQ0FBYkE7O0FBU0EsVUFBSUEsVUFBVSxLQUFkLElBQXVCO0FBQ3JCLGNBQU1rSSxhQUFhLEdBQUcscURBQ3BCLGtCQUNFL0ksTUFBTSxDQUFOQSxtQkFBMEI7QUFBRVksa0JBQVEsRUFEdEM7QUFDNEIsU0FBMUJaLENBREYsZ0JBREYsUUFBc0IsQ0FBdEIsQ0FEcUIsQ0FTckI7QUFDQTs7QUFDQSxZQUFJMkksS0FBSyxDQUFMQSxTQUFKLGFBQUlBLENBQUosRUFBbUM7QUFDakNyQyxlQUFLLEdBQUxBO0FBQ0ExRixrQkFBUSxHQUFSQTtBQUNBaUksZ0JBQU0sQ0FBTkE7QUFDQS9FLGFBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUVIO0FBQ0Y7QUFDRGpEOztBQUFBQSxjQUFVLEdBQUc0SCxTQUFTLENBQUNDLFdBQVcsQ0FBWixVQUFZLENBQVosRUFBMEIsS0FBaEQ3SCxNQUFzQixDQUF0QkE7O0FBRUEsUUFBSSwrQkFBSixLQUFJLENBQUosRUFBMkI7QUFDekIsWUFBTW1JLFFBQVEsR0FBRyx3Q0FBakIsVUFBaUIsQ0FBakI7QUFDQSxZQUFNMUUsVUFBVSxHQUFHMEUsUUFBUSxDQUEzQjtBQUVBLFlBQU1DLFVBQVUsR0FBRywrQkFBbkIsS0FBbUIsQ0FBbkI7QUFDQSxZQUFNQyxVQUFVLEdBQUcsK0NBQW5CLFVBQW1CLENBQW5CO0FBQ0EsWUFBTUMsaUJBQWlCLEdBQUc3QyxLQUFLLEtBQS9CO0FBQ0EsWUFBTWxCLGNBQWMsR0FBRytELGlCQUFpQixHQUNwQzlELGFBQWEsb0JBRHVCLEtBQ3ZCLENBRHVCLEdBQXhDOztBQUlBLFVBQUksZUFBZ0I4RCxpQkFBaUIsSUFBSSxDQUFDL0QsY0FBYyxDQUF4RCxRQUFrRTtBQUNoRSxjQUFNZ0UsYUFBYSxHQUFHcEosTUFBTSxDQUFOQSxLQUFZaUosVUFBVSxDQUF0QmpKLGVBQ25Cd0UsS0FBRCxJQUFXLENBQUNRLEtBQUssQ0FEbkIsS0FDbUIsQ0FER2hGLENBQXRCOztBQUlBLFlBQUlvSixhQUFhLENBQWJBLFNBQUosR0FBOEI7QUFDNUIsb0JBQTJDO0FBQ3pDeEssbUJBQU8sQ0FBUEEsS0FDRyxHQUNDdUssaUJBQWlCLDBCQUVaLGlDQUhQLDhCQUFDLEdBS0UsZUFBY0MsYUFBYSxDQUFiQSxVQU5uQnhLO0FBWUY7O0FBQUEsZ0JBQU0sVUFDSixDQUFDdUssaUJBQWlCLEdBQ2IsMEJBQXlCckYsR0FBSSxvQ0FBbUNzRixhQUFhLENBQWJBLFVBRG5ELG9DQUliLDhCQUE2QjlFLFVBQVcsOENBQTZDZ0MsS0FKMUYsU0FLRyw0Q0FDQzZDLGlCQUFpQixpQ0FFYixzQkFUVixFQUFNLENBQU47QUFhSDtBQWhDRCxhQWdDTyx1QkFBdUI7QUFDNUI3SixVQUFFLEdBQUcsaUNBQ0hVLE1BQU0sQ0FBTkEscUJBQTRCO0FBQzFCWSxrQkFBUSxFQUFFd0UsY0FBYyxDQURFO0FBRTFCSixlQUFLLEVBQUVPLGtCQUFrQixRQUFRSCxjQUFjLENBSG5EOUYsTUFHNkI7QUFGQyxTQUE1QlUsQ0FERyxDQUFMVjtBQURLLGFBT0E7QUFDTDtBQUNBVSxjQUFNLENBQU5BO0FBRUg7QUFFRHFDOztBQUFBQSxVQUFNLENBQU5BOztBQUVBLFFBQUk7QUFDRixZQUFNZ0gsU0FBUyxHQUFHLE1BQU0sOENBQXhCLE9BQXdCLENBQXhCO0FBT0EsVUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSixVQVJFLENBVUY7O0FBQ0EsVUFDRSxDQUFDM0IsT0FBTyxJQUFSLHFCQUVDekgsS0FBRCxDQUZBLGFBR0NBLEtBQUQsVUFBQ0EsQ0FKSCxjQUtFO0FBQ0EsY0FBTXFKLFdBQVcsR0FBSXJKLEtBQUQsVUFBQ0EsQ0FBckIsYUFEQSxDQUdBO0FBQ0E7QUFDQTs7QUFDQSxZQUFJcUosV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0IsZ0JBQU1DLFVBQVUsR0FBRyx3Q0FBbkIsV0FBbUIsQ0FBbkI7O0FBQ0E7O0FBRUEsY0FBSVosS0FBSyxDQUFMQSxTQUFlWSxVQUFVLENBQTdCLFFBQUlaLENBQUosRUFBeUM7QUFDdkMsbUJBQU8sc0RBQVAsT0FBTyxDQUFQO0FBT0g7QUFFRHpLOztBQUFBQSxjQUFNLENBQU5BO0FBQ0EsZUFBTyxZQUFZLE1BQU0sQ0FBekIsQ0FBTyxDQUFQO0FBR0ZtRTs7QUFBQUEsWUFBTSxDQUFOQTtBQUNBLG9DQUdFa0csU0FBUyxLQUFLLEtBQUwsUUFBa0IsS0FIN0IsYUFHVyxDQUhYOztBQU9BLGdCQUEyQztBQUN6QyxjQUFNaUIsT0FBWSxHQUFHLHlCQUFyQjtBQUNFdEwsY0FBRCxLQUFDQSxDQUFELGFBQUNBLEdBQ0FzTCxPQUFPLENBQVBBLG9CQUE0QkEsT0FBTyxDQUFuQ0EsdUJBQ0EsQ0FBRUgsU0FBUyxDQUFWLFNBQUNBLENBRkgsZUFBQ25MO0FBS0o7O0FBQUEsWUFBTSw2REFDSGdCLENBQUQsSUFBTztBQUNMLFlBQUlBLENBQUMsQ0FBTCxXQUFpQnVLLEtBQUssR0FBR0EsS0FBSyxJQUE5QixDQUFpQkEsQ0FBakIsS0FDSztBQUhULE9BQU0sQ0FBTjs7QUFPQSxpQkFBVztBQUNUcEgsY0FBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSVIsS0FBSixFQUEyQyxFQUszQ1E7O0FBQUFBLFlBQU0sQ0FBTkE7QUFFQTtBQUNBLEtBM0VGLENBMkVFLFlBQVk7QUFDWixVQUFJdkQsR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBRUY7O0FBQUE7QUFFSDtBQUVENEs7O0FBQUFBLGFBQVcsa0JBSVRsQyxPQUEwQixHQUpqQixJQUtIO0FBQ04sY0FBMkM7QUFDekMsVUFBSSxPQUFPdEosTUFBTSxDQUFiLFlBQUosYUFBMkM7QUFDekNVLGVBQU8sQ0FBUEE7QUFDQTtBQUdGOztBQUFBLFVBQUksT0FBT1YsTUFBTSxDQUFOQSxRQUFQLE1BQU9BLENBQVAsS0FBSixhQUFtRDtBQUNqRFUsZUFBTyxDQUFQQSxNQUFlLDJCQUEwQmtLLE1BQXpDbEs7QUFDQTtBQUVIO0FBRUQ7O0FBQUEsUUFBSWtLLE1BQU0sS0FBTkEsZUFBMEIseUJBQTlCLElBQStDO0FBQzdDLHNCQUFnQnRCLE9BQU8sQ0FBdkI7QUFDQSxZQUFNLENBQU4sZ0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFJRW1DLFdBQUcsRUFMUDtBQUNFLE9BREYsRUFPRTtBQUNBO0FBQ0E7QUFURjtBQWNIO0FBRUQ7O0FBQUEsUUFBTUMsb0JBQU4sMENBTTZCO0FBQzNCLFFBQUk5SyxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFDQTtBQUdGOztBQUFBLFFBQUk0RyxlQUFlLElBQWZBLE9BQUosZUFBNkM7QUFDM0NyRCxZQUFNLENBQU5BLHlDQUQyQyxDQUczQztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBbkUsWUFBTSxDQUFOQSxtQkFUMkMsQ0FXM0M7QUFDQTs7QUFDQSxZQUFNMkwsc0JBQU47QUFHRjs7QUFBQSxRQUFJO0FBQ0YsWUFBTTtBQUFFQyxZQUFJLEVBQU47QUFBQTtBQUFBLFVBQW1DLE1BQU0sb0JBQS9DLFNBQStDLENBQS9DO0FBR0EsWUFBTVQsU0FBMkIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUlsQ0ksYUFBSyxFQUpQO0FBQW9DLE9BQXBDOztBQU9BLFVBQUk7QUFDRkosaUJBQVMsQ0FBVEEsUUFBa0IsTUFBTSxnQ0FBZ0M7QUFBQTtBQUFBO0FBQXhEQTtBQUF3RCxTQUFoQyxDQUF4QkE7QUFLQSxPQU5GLENBTUUsZUFBZTtBQUNmekssZUFBTyxDQUFQQTtBQUNBeUssaUJBQVMsQ0FBVEE7QUFHRjs7QUFBQTtBQUNBLEtBdkJGLENBdUJFLHFCQUFxQjtBQUNyQixhQUFPLDZEQUFQLElBQU8sQ0FBUDtBQUVIO0FBRUQ7O0FBQUEsUUFBTVUsWUFBTiw2QkFLRTFKLE9BQWdCLEdBTGxCLE9BTTZCO0FBQzNCLFFBQUk7QUFDRixZQUFNMkosZUFBZSxHQUFHLGdCQUF4QixLQUF3QixDQUF4Qjs7QUFFQSxVQUFJM0osT0FBTyxJQUFQQSxtQkFBOEIsZUFBbEMsT0FBd0Q7QUFDdEQ7QUFHRjs7QUFBQSxZQUFNZ0osU0FBMkIsR0FBR1csZUFBZSxxQkFFL0MsTUFBTSxnQ0FBaUNoRSxHQUFELEtBQVU7QUFDOUM2QixpQkFBUyxFQUFFN0IsR0FBRyxDQURnQztBQUU5Q3lCLG1CQUFXLEVBQUV6QixHQUFHLENBRjhCO0FBRzlDMEIsZUFBTyxFQUFFMUIsR0FBRyxDQUFIQSxJQUhxQztBQUk5QzRCLGVBQU8sRUFBRTVCLEdBQUcsQ0FBSEEsSUFOZjtBQUVvRCxPQUFWLENBQWhDLENBRlY7QUFTQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUJpRSxtQkFBTyxDQUF0QywwQkFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDQyxrQkFBa0IsQ0FBdkIsU0FBdUIsQ0FBdkIsRUFBb0M7QUFDbEMsZ0JBQU0sVUFDSCx5REFBd0R0SixRQUQzRCxHQUFNLENBQU47QUFJSDtBQUVEOztBQUFBOztBQUVBLFVBQUk4RyxPQUFPLElBQVgsU0FBd0I7QUFDdEJ5QyxnQkFBUSxHQUFHLDRCQUNULGlDQUFxQjtBQUFBO0FBRFo7QUFDWSxTQUFyQixDQURTLEVBRVR6QixXQUFXLENBRkYsRUFFRSxDQUZGLFdBSVQsS0FKUyxRQUtULEtBTEZ5QixhQUFXLENBQVhBO0FBU0Y7O0FBQUEsWUFBTWxLLEtBQUssR0FBRyxNQUFNLGNBQWdDLE1BQ2xEeUgsT0FBTyxHQUNILG9CQURHLFFBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sUUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRXJCLGNBQU0sRUFYaEI7QUFRUSxPQUhGLENBTGMsQ0FBcEI7QUFnQkE4QyxlQUFTLENBQVRBO0FBQ0E7QUFDQTtBQUNBLEtBMURGLENBMERFLFlBQVk7QUFDWixhQUFPLGdEQUFQLEVBQU8sQ0FBUDtBQUVIO0FBRURlOztBQUFBQSxLQUFHLG1DQU1jO0FBQ2Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sWUFBUCxJQUFPLENBQVA7QUFHRjtBQUFBOzs7Ozs7QUFJQUMsZ0JBQWMsS0FBNkI7QUFDekM7QUFHRkM7O0FBQUFBLGlCQUFlLEtBQXNCO0FBQ25DLFFBQUksQ0FBQyxLQUFMLFFBQWtCO0FBQ2xCLFVBQU0sMEJBQTBCLGtCQUFoQyxHQUFnQyxDQUFoQztBQUNBLFVBQU0sMEJBQTBCaEwsRUFBRSxDQUFGQSxNQUFoQyxHQUFnQ0EsQ0FBaEMsQ0FIbUMsQ0FLbkM7O0FBQ0EsUUFBSWlMLE9BQU8sSUFBSUMsWUFBWSxLQUF2QkQsZ0JBQTRDRSxPQUFPLEtBQXZELFNBQXFFO0FBQ25FO0FBR0YsS0FWbUMsQ0FVbkM7OztBQUNBLFFBQUlELFlBQVksS0FBaEIsY0FBbUM7QUFDakM7QUFHRixLQWZtQyxDQWVuQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0MsT0FBTyxLQUFkO0FBR0ZDOztBQUFBQSxjQUFZLEtBQW1CO0FBQzdCLFVBQU0sV0FBV3BMLEVBQUUsQ0FBRkEsTUFBakIsR0FBaUJBLENBQWpCLENBRDZCLENBRTdCOztBQUNBLFFBQUlnRyxJQUFJLEtBQVIsSUFBaUI7QUFDZnBILFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBUjZCLENBUTdCOzs7QUFDQSxVQUFNeU0sSUFBSSxHQUFHbEwsUUFBUSxDQUFSQSxlQUFiLElBQWFBLENBQWI7O0FBQ0EsY0FBVTtBQUNSa0wsVUFBSSxDQUFKQTtBQUNBO0FBRUYsS0FkNkIsQ0FjN0I7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHbkwsUUFBUSxDQUFSQSx3QkFBZixDQUFlQSxDQUFmOztBQUNBLGdCQUFZO0FBQ1ZtTCxZQUFNLENBQU5BO0FBRUg7QUFFREM7O0FBQUFBLFVBQVEsU0FBMEI7QUFDaEMsV0FBTyxnQkFBUDtBQUdGQzs7QUFBQUEsY0FBWSxvQkFBeUNDLGFBQWEsR0FBdEQsTUFBK0Q7QUFDekUsVUFBTTtBQUFBO0FBQUEsUUFBTjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUdyQyxXQUFXLENBQWQsUUFBYyxDQUFkLEdBRG5DLFFBQ0UsQ0FEb0IsQ0FBdEI7O0FBSUEsUUFBSXNDLGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixLQVZ5RSxDQVV6RTs7O0FBQ0EsUUFBSSxDQUFDckMsS0FBSyxDQUFMQSxTQUFMLGFBQUtBLENBQUwsRUFBcUM7QUFDbkM7QUFDQUEsV0FBSyxDQUFMQSxLQUFZbUIsSUFBRCxJQUFVO0FBQ25CLFlBQ0Usd0NBQ0EsNkNBRkYsYUFFRSxDQUZGLEVBR0U7QUFDQVAsb0JBQVUsQ0FBVkEsV0FBc0J3QixhQUFhLEdBQUduRixXQUFXLENBQWQsSUFBYyxDQUFkLEdBQW5DMkQ7QUFDQTtBQUVIO0FBUkRaO0FBVUY7O0FBQUE7QUFHRjtBQUFBOzs7OztBQU1BOzs7QUFBQSxRQUFNcEksUUFBTixNQUVFZ0csTUFBYyxHQUZoQixLQUdFaUIsT0FBd0IsR0FIMUIsSUFJaUI7QUFDZixRQUFJcUIsTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUVBLFFBQUk7QUFBQTtBQUFBLFFBQUo7QUFFQSxVQUFNRixLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFFQUUsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ2pJLGNBQVEsR0FBR2lJLE1BQU0sQ0FBakJqSTtBQUNBa0QsU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0FkZSxDQWNmOzs7QUFDQSxjQUEyQztBQUN6QztBQUdGOztBQUFBLFVBQU13QyxLQUFLLEdBQUcscURBQWQsUUFBYyxDQUFkO0FBQ0EsVUFBTTJFLE9BQU8sQ0FBUEEsSUFBWSxDQUNoQiwwQ0FHRSxLQUhGLFFBSUUsS0FMYyxhQUNoQixDQURnQixFQU9oQixnQkFBZ0J6RCxPQUFPLENBQVBBLHdCQUFoQixZQVBGLEtBT0UsQ0FQZ0IsQ0FBWnlELENBQU47QUFXRjs7QUFBQSxRQUFNQyxjQUFOLFFBQTREO0FBQzFELFFBQUl2SCxTQUFTLEdBQWI7O0FBQ0EsVUFBTXdILE1BQU0sR0FBSSxXQUFXLE1BQU07QUFDL0J4SCxlQUFTLEdBQVRBO0FBREY7O0FBSUEsVUFBTXlILGVBQWUsR0FBRyxNQUFNLHlCQUE5QixLQUE4QixDQUE5Qjs7QUFFQSxtQkFBZTtBQUNiLFlBQU0zQixLQUFVLEdBQUcsVUFDaEIsd0NBQXVDbkQsS0FEMUMsR0FBbUIsQ0FBbkI7QUFHQW1ELFdBQUssQ0FBTEE7QUFDQTtBQUdGOztBQUFBLFFBQUkwQixNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBO0FBR0ZFOztBQUFBQSxVQUFRLEtBQXNDO0FBQzVDLFFBQUkxSCxTQUFTLEdBQWI7O0FBQ0EsVUFBTXdILE1BQU0sR0FBRyxNQUFNO0FBQ25CeEgsZUFBUyxHQUFUQTtBQURGOztBQUdBO0FBQ0EsV0FBTzJILEVBQUUsR0FBRkEsS0FBV0MsSUFBRCxJQUFVO0FBQ3pCLFVBQUlKLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNck0sR0FBUSxHQUFHLFVBQWpCLGlDQUFpQixDQUFqQjtBQUNBQSxXQUFHLENBQUhBO0FBQ0E7QUFHRjs7QUFBQTtBQVhGLEtBQU93TSxDQUFQO0FBZUZFOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxVQUFNO0FBQUV6TSxVQUFJLEVBQU47QUFBQSxRQUFxQixrQkFBa0JiLE1BQU0sQ0FBTkEsU0FBN0MsSUFBMkIsQ0FBM0I7O0FBQ0EsUUFBSTJELEtBQUosRUFBaUUsRUFHakU7O0FBQUEsV0FBTzRKLGFBQWEsV0FBVyxLQUF4QkEsS0FBYSxDQUFiQSxNQUEwQ0YsSUFBRCxJQUFVO0FBQ3hEO0FBQ0E7QUFGRixLQUFPRSxDQUFQO0FBTUZDOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxXQUFPRCxhQUFhLFdBQVcsS0FBL0IsS0FBb0IsQ0FBcEI7QUFHRnZJOztBQUFBQSxpQkFBZSxpQkFHQztBQUNkLFVBQU07QUFBRTJFLGVBQVMsRUFBWDtBQUFBLFFBQXFCLGdCQUEzQixPQUEyQixDQUEzQjs7QUFDQSxVQUFNOEQsT0FBTyxHQUFHLGNBQWhCLEdBQWdCLENBQWhCOztBQUNBQyxPQUFHLENBQUhBO0FBQ0EsV0FBTyxxQ0FBaUQ7QUFBQTtBQUFBO0FBR3REL00sWUFBTSxFQUhnRDtBQUF4RDtBQUF3RCxLQUFqRCxDQUFQO0FBUUZnTjs7QUFBQUEsb0JBQWtCLEtBQW1CO0FBQ25DLFFBQUksS0FBSixLQUFjO0FBQ1p4SixZQUFNLENBQU5BLGdDQUF1Q3dILHNCQUF2Q3hIO0FBQ0E7QUFDQTtBQUVIO0FBRUR5Sjs7QUFBQUEsUUFBTSxPQUF3QztBQUM1QyxXQUFPLGVBQWUseUJBQXRCLFNBQU8sQ0FBUDtBQXozQjhDOztBQUFBOzs7QUFBN0J6SixNLENBMkJaeUUsTUEzQll6RSxHQTJCVSxvQkEzQlZBLEM7Ozs7Ozs7Ozs7Ozs7Ozt3Q0NsVnJCOztBQUNlLHVDQUF1RDtBQUNwRSxTQUFPMEosT0FBTyxDQUFQQSxrQkFBMkJDLElBQUQsSUFBa0JDLGtCQUFrQixDQUFyRSxJQUFxRSxDQUE5REYsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEJBLEMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BLE1BQU1HLGdCQUFnQixHQUF0Qjs7QUFFTywyQkFBc0M7QUFDM0MsTUFBSTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQ0EsTUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJeEwsUUFBUSxHQUFHd0wsTUFBTSxDQUFOQSxZQUFmO0FBQ0EsTUFBSTlHLElBQUksR0FBRzhHLE1BQU0sQ0FBTkEsUUFBWDtBQUNBLE1BQUlwSCxLQUFLLEdBQUdvSCxNQUFNLENBQU5BLFNBQVo7QUFDQSxNQUFJQyxJQUFvQixHQUF4QjtBQUVBQyxNQUFJLEdBQUdBLElBQUksR0FBR0wsa0JBQWtCLENBQWxCQSxJQUFrQixDQUFsQkEsd0JBQUgsTUFBWEs7O0FBRUEsTUFBSUYsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFFBQUksR0FBR0MsSUFBSSxHQUFHRixNQUFNLENBQXBCQztBQURGLFNBRU8sY0FBYztBQUNuQkEsUUFBSSxHQUFHQyxJQUFJLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFELEdBQUNBLENBQUQsR0FBMEIsSUFBR0EsUUFBN0IsTUFBZkYsUUFBVyxDQUFYQTs7QUFDQSxRQUFJRCxNQUFNLENBQVYsTUFBaUI7QUFDZkMsVUFBSSxJQUFJLE1BQU1ELE1BQU0sQ0FBcEJDO0FBRUg7QUFFRDs7QUFBQSxNQUFJckgsS0FBSyxJQUFJLGlCQUFiLFVBQXdDO0FBQ3RDQSxTQUFLLEdBQUd3SCxNQUFNLENBQUNDLFdBQVcsQ0FBWEEsdUJBQWZ6SCxLQUFleUgsQ0FBRCxDQUFkekg7QUFHRjs7QUFBQSxNQUFJMEgsTUFBTSxHQUFHTixNQUFNLENBQU5BLFVBQWtCcEgsS0FBSyxJQUFLLElBQUdBLEtBQS9Cb0gsTUFBYjtBQUVBLE1BQUlELFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxPQUFnQixDQUFoQkEsT0FBaEIsS0FBNkNBLFFBQVEsSUFBUkE7O0FBRTdDLE1BQ0VDLE1BQU0sQ0FBTkEsV0FDQyxDQUFDLGFBQWFGLGdCQUFnQixDQUFoQkEsS0FBZCxRQUFjQSxDQUFkLEtBQWtERyxJQUFJLEtBRnpELE9BR0U7QUFDQUEsUUFBSSxHQUFHLFFBQVFBLElBQUksSUFBbkJBLEVBQU8sQ0FBUEE7QUFDQSxRQUFJekwsUUFBUSxJQUFJQSxRQUFRLENBQVJBLENBQVEsQ0FBUkEsS0FBaEIsS0FBcUNBLFFBQVEsR0FBRyxNQUFYQTtBQUx2QyxTQU1PLElBQUksQ0FBSixNQUFXO0FBQ2hCeUwsUUFBSSxHQUFKQTtBQUdGOztBQUFBLE1BQUkvRyxJQUFJLElBQUlBLElBQUksQ0FBSkEsQ0FBSSxDQUFKQSxLQUFaLEtBQTZCQSxJQUFJLEdBQUcsTUFBUEE7QUFDN0IsTUFBSW9ILE1BQU0sSUFBSUEsTUFBTSxDQUFOQSxDQUFNLENBQU5BLEtBQWQsS0FBaUNBLE1BQU0sR0FBRyxNQUFUQTtBQUVqQzlMLFVBQVEsR0FBR0EsUUFBUSxDQUFSQSxpQkFBWEEsa0JBQVdBLENBQVhBO0FBQ0E4TCxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsYUFBVEEsS0FBU0EsQ0FBVEE7QUFFQSxTQUFRLEdBQUVQLFFBQVMsR0FBRUUsSUFBSyxHQUFFekwsUUFBUyxHQUFFOEwsTUFBTyxHQUFFcEgsSUFBaEQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDeEVEOztBQUNBLE1BQU1xSCxVQUFVLEdBQWhCOztBQUVPLCtCQUFnRDtBQUNyRCxTQUFPQSxVQUFVLENBQVZBLEtBQVAsS0FBT0EsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7O0FBQ0E7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFFBQ2pCLG9CQUE2QyxTQUQ1QixDQUFuQjtBQUlBOzs7Ozs7O0FBTU8scUNBQXNEO0FBQzNELFFBQU1DLFlBQVksR0FBRzVILElBQUksR0FBRyxjQUFILFVBQUcsQ0FBSCxHQUF6QjtBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsYUFSSixZQVFJLENBUko7O0FBU0EsTUFDRTZILE1BQU0sS0FBS0YsVUFBVSxDQUFyQkUsVUFDQ1gsUUFBUSxLQUFSQSxXQUF3QkEsUUFBUSxLQUZuQyxVQUdFO0FBQ0EsVUFBTSxVQUFOLGlDQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTG5ILFNBQUssRUFBRSx5Q0FGRixZQUVFLENBRkY7QUFBQTtBQUFBO0FBS0xqRyxRQUFJLEVBQUVBLElBQUksQ0FBSkEsTUFBVzZOLFVBQVUsQ0FBVkEsT0FMbkIsTUFLUTdOO0FBTEQsR0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTzs7QUFBQSxNQUFNZ08sY0FDYyxHQUFHO0FBQzVCQyxXQUFTLEVBRG1CO0FBRTVCQyxXQUFTLEVBSEo7QUFDdUIsQ0FEdkI7OztBQU1BLE1BQU1DLHlCQUNjLG1DQUFHLGNBQUg7QUFFekJDLFFBQU0sRUFIRDtBQUNvQixFQURwQjs7OztlQU1RLENBQUNDLFdBQVcsR0FBWixVQUF5QjtBQUN0QyxTQUFRekwsSUFBRCxJQUFrQjtBQUN2QixVQUFNMEwsSUFBd0IsR0FBOUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBWkEseUJBR25CSCxXQUFXLCtCQUhiLGNBQXFCRyxDQUFyQjtBQUtBLFVBQU1DLE9BQU8sR0FBR0QsWUFBWSxDQUFaQSwrQkFBaEIsSUFBZ0JBLENBQWhCO0FBRUEsV0FBTyxzQkFBdUQ7QUFDNUQsWUFBTXZILEdBQUcsR0FBR3BGLFFBQVEsSUFBUkEsZUFBMkI0TSxPQUFPLENBQTlDLFFBQThDLENBQTlDOztBQUNBLFVBQUksQ0FBSixLQUFVO0FBQ1I7QUFHRjs7QUFBQSx1QkFBaUI7QUFDZixhQUFLLE1BQUwsYUFBd0I7QUFDdEI7QUFDQTtBQUNBLGNBQUksT0FBTzdOLEdBQUcsQ0FBVixTQUFKLFVBQWtDO0FBQ2hDLG1CQUFRcUcsR0FBRyxDQUFKLE1BQUNBLENBQW1CckcsR0FBRyxDQUE5QixJQUFRcUcsQ0FBUjtBQUVIO0FBQ0Y7QUFFRDs7QUFBQSw2Q0FBTyxNQUFQLEdBQXVCQSxHQUFHLENBQTFCO0FBaEJGO0FBVEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJGOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWU7O0FBQUEsdUZBTWI7QUFDQSxNQUFJeUgsaUJBS21DLEdBTHZDOztBQU9BLE1BQUluRSxXQUFXLENBQVhBLFdBQUosR0FBSUEsQ0FBSixFQUFpQztBQUMvQm1FLHFCQUFpQixHQUFHLHdDQUFwQkEsV0FBb0IsQ0FBcEJBO0FBREYsU0FFTztBQUNMLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFTRixRQVRKLFdBU0ksQ0FUSjtBQVdBQSxxQkFBaUIsR0FBRztBQUFBO0FBRWxCekksV0FBSyxFQUFFLHlDQUZXLFlBRVgsQ0FGVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEJ5STtBQUFvQixLQUFwQkE7QUFZRjs7QUFBQSxRQUFNQyxTQUFTLEdBQUdELGlCQUFpQixDQUFuQztBQUNBLFFBQU1FLFFBQVEsR0FBSSxHQUFFRixpQkFBaUIsQ0FBQzdNLFFBQVUsR0FDOUM2TSxpQkFBaUIsQ0FBakJBLFFBQTBCLEVBRDVCO0FBR0EsUUFBTUcsaUJBQXFDLEdBQTNDO0FBQ0FMLGNBQVksQ0FBWkE7QUFFQSxRQUFNTSxjQUFjLEdBQUdELGlCQUFpQixDQUFqQkEsSUFBdUJqTyxHQUFELElBQVNBLEdBQUcsQ0FBekQsSUFBdUJpTyxDQUF2QjtBQUVBLE1BQUlFLG1CQUFtQixHQUFHLFlBQVksQ0FBWixrQkFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBRUMsWUFBUSxFQVJaO0FBUUUsR0FSd0IsQ0FBMUI7QUFVQSxhQXJEQSxDQXVEQTs7QUFDQSxPQUFLLE1BQU0sTUFBWCxVQUFXLENBQVgsSUFBZ0MvTixNQUFNLENBQU5BLFFBQWhDLFNBQWdDQSxDQUFoQyxFQUEyRDtBQUN6RCxRQUFJeUUsS0FBSyxHQUFHekIsS0FBSyxDQUFMQSxzQkFBNEJnTCxVQUFVLENBQXRDaEwsQ0FBc0MsQ0FBdENBLEdBQVo7O0FBQ0EsZUFBVztBQUNUO0FBQ0E7QUFDQXlCLFdBQUssR0FBSSxJQUFHQSxLQUFaQTtBQUNBLFlBQU13SixhQUFhLEdBQUdWLFlBQVksQ0FBWkEsZUFBNEI7QUFBRVEsZ0JBQVEsRUFBNUQ7QUFBa0QsT0FBNUJSLENBQXRCO0FBQ0E5SSxXQUFLLEdBQUd3SixhQUFhLENBQWJBLE1BQWEsQ0FBYkEsUUFBUnhKLENBQVF3SixDQUFSeEo7QUFFRmlKOztBQUFBQSxhQUFTLENBQVRBLEdBQVMsQ0FBVEE7QUFHRixHQXBFQSxDQW9FQTtBQUNBOzs7QUFDQSxRQUFNUSxTQUFTLEdBQUdsTyxNQUFNLENBQU5BLEtBQWxCLE1BQWtCQSxDQUFsQjs7QUFFQSxNQUNFbU8sbUJBQW1CLElBQ25CLENBQUNELFNBQVMsQ0FBVEEsS0FBZ0J2TyxHQUFELElBQVNrTyxjQUFjLENBQWRBLFNBRjNCLEdBRTJCQSxDQUF4QkssQ0FGSCxFQUdFO0FBQ0EsU0FBSyxNQUFMLGtCQUE2QjtBQUMzQixVQUFJLEVBQUV2TyxHQUFHLElBQVQsU0FBSSxDQUFKLEVBQXlCO0FBQ3ZCK04saUJBQVMsQ0FBVEEsR0FBUyxDQUFUQSxHQUFpQm5KLE1BQU0sQ0FBdkJtSixHQUF1QixDQUF2QkE7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsUUFBTVUsaUJBQWlCLEdBQUc5RSxXQUFXLENBQVhBLG1CQUExQjs7QUFFQSxNQUFJO0FBQ0YrRSxVQUFNLEdBQUksR0FBRUQsaUJBQWlCLGNBQWMsRUFBRyxHQUFFTixtQkFBbUIsUUFBbkVPO0FBSUEsVUFBTSxtQkFBbUJBLE1BQU0sQ0FBTkEsTUFBekIsR0FBeUJBLENBQXpCO0FBQ0FaLHFCQUFpQixDQUFqQkE7QUFDQUEscUJBQWlCLENBQWpCQSxPQUEwQixHQUFFbkksSUFBSSxTQUFTLEVBQUcsR0FBRUEsSUFBSSxJQUFJLEVBQXREbUk7QUFDQSxXQUFPQSxpQkFBaUIsQ0FBeEI7QUFDQSxHQVRGLENBU0UsWUFBWTtBQUNaLFFBQUkzTyxHQUFHLENBQUhBLGNBQUosOENBQUlBLENBQUosRUFBdUU7QUFDckUsWUFBTSxVQUFOLHdLQUFNLENBQU47QUFJRjs7QUFBQTtBQUdGLEdBdkdBLENBdUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTJPLG1CQUFpQixDQUFqQkEsd0NBQTBCLEtBQTFCQSxHQUVLQSxpQkFBaUIsQ0FGdEJBO0FBS0EsU0FBTztBQUFBO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ITSw4Q0FFVztBQUNoQixRQUFNekksS0FBcUIsR0FBM0I7QUFDQXNKLGNBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCO0FBQ25DLFFBQUksT0FBT3RKLEtBQUssQ0FBWixHQUFZLENBQVosS0FBSixhQUF1QztBQUNyQ0EsV0FBSyxDQUFMQSxHQUFLLENBQUxBO0FBREYsV0FFTyxJQUFJaEMsS0FBSyxDQUFMQSxRQUFjZ0MsS0FBSyxDQUF2QixHQUF1QixDQUFuQmhDLENBQUosRUFBK0I7QUFDcEM7QUFBRWdDLFdBQUssQ0FBTixHQUFNLENBQUxBLENBQUQsSUFBQ0EsQ0FBRCxLQUFDQTtBQURHLFdBRUE7QUFDTEEsV0FBSyxDQUFMQSxHQUFLLENBQUxBLEdBQWEsQ0FBQ0EsS0FBSyxDQUFOLEdBQU0sQ0FBTixFQUFiQSxLQUFhLENBQWJBO0FBRUg7QUFSRHNKO0FBU0E7QUFHRjs7QUFBQSx1Q0FBdUQ7QUFDckQsTUFDRSw2QkFDQyw2QkFBNkIsQ0FBQ0MsS0FBSyxDQURwQyxLQUNvQyxDQURwQyxJQUVBLGlCQUhGLFdBSUU7QUFDQSxXQUFPL0IsTUFBTSxDQUFiLEtBQWEsQ0FBYjtBQUxGLFNBTU87QUFDTDtBQUVIO0FBRU07O0FBQUEsMENBRVk7QUFDakIsUUFBTTFILE1BQU0sR0FBRyxJQUFmLGVBQWUsRUFBZjtBQUNBOUUsUUFBTSxDQUFOQSwwQkFBaUMsQ0FBQyxNQUFELEtBQUMsQ0FBRCxLQUFrQjtBQUNqRCxRQUFJZ0QsS0FBSyxDQUFMQSxRQUFKLEtBQUlBLENBQUosRUFBMEI7QUFDeEJ5QixXQUFLLENBQUxBLFFBQWUrSixJQUFELElBQVUxSixNQUFNLENBQU5BLFlBQW1CMkosc0JBQXNCLENBQWpFaEssSUFBaUUsQ0FBekNLLENBQXhCTDtBQURGLFdBRU87QUFDTEssWUFBTSxDQUFOQSxTQUFnQjJKLHNCQUFzQixDQUF0QzNKLEtBQXNDLENBQXRDQTtBQUVIO0FBTkQ5RTtBQU9BO0FBR0s7O0FBQUEsd0JBRUwsR0FGSyxrQkFHWTtBQUNqQjBPLGtCQUFnQixDQUFoQkEsUUFBMEJKLFlBQUQsSUFBa0I7QUFDekN0TCxTQUFLLENBQUxBLEtBQVdzTCxZQUFZLENBQXZCdEwsSUFBV3NMLEVBQVh0TCxVQUF5Q3JELEdBQUQsSUFBU1YsTUFBTSxDQUFOQSxPQUFqRCtELEdBQWlEL0QsQ0FBakQrRDtBQUNBc0wsZ0JBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCclAsTUFBTSxDQUFOQSxZQUFyQ3FQLEtBQXFDclAsQ0FBckNxUDtBQUZGSTtBQUlBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBOztBQUFBLE1BQU1DLGtCQUFrQixHQUFHLHdCQUEzQixJQUEyQixDQUEzQjs7QUFFZSxnRkFPYjtBQUNBLE1BQUksQ0FBQ2hHLEtBQUssQ0FBTEEsU0FBTCxNQUFLQSxDQUFMLEVBQTZCO0FBQzNCLFNBQUssTUFBTCxxQkFBZ0M7QUFDOUIsWUFBTTZFLE9BQU8sR0FBR21CLGtCQUFrQixDQUFDQyxPQUFPLENBQTFDLE1BQWtDLENBQWxDO0FBQ0EsWUFBTXJLLE1BQU0sR0FBR2lKLE9BQU8sQ0FBdEIsTUFBc0IsQ0FBdEI7O0FBRUEsa0JBQVk7QUFDVixZQUFJLENBQUNvQixPQUFPLENBQVosYUFBMEI7QUFDeEI7QUFDQTtBQUVGOztBQUFBLGNBQU1DLE9BQU8sR0FBRyxpQ0FDZEQsT0FBTyxDQURPLGtDQUtkQSxPQUFPLENBQVBBLDBCQUxGLFFBQWdCLENBQWhCO0FBT0FySSxjQUFNLEdBQUdzSSxPQUFPLENBQVBBLGtCQUFUdEk7QUFDQXZHLGNBQU0sQ0FBTkEsY0FBcUI2TyxPQUFPLENBQVBBLGtCQUFyQjdPOztBQUVBLFlBQUkySSxLQUFLLENBQUxBLFNBQWUscURBQW5CLE1BQW1CLENBQWZBLENBQUosRUFBcUQ7QUFDbkQ7QUFDQTtBQUNBO0FBR0YsU0FyQlUsQ0FxQlY7OztBQUNBLGNBQU1uRCxZQUFZLEdBQUdLLFdBQVcsQ0FBaEMsTUFBZ0MsQ0FBaEM7O0FBRUEsWUFBSUwsWUFBWSxLQUFaQSxVQUEyQm1ELEtBQUssQ0FBTEEsU0FBL0IsWUFBK0JBLENBQS9CLEVBQTZEO0FBQzNEO0FBRUg7QUFDRjtBQUNGO0FBQ0Q7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxxQ0FBdUU7QUFDNUUsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBUS9ILFFBQUQsSUFBeUM7QUFDOUMsVUFBTXNJLFVBQVUsR0FBRzRGLEVBQUUsQ0FBRkEsS0FBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQUksQ0FBSixZQUFpQjtBQUNmO0FBR0Y7O0FBQUEsVUFBTUMsTUFBTSxHQUFJdkssS0FBRCxJQUFtQjtBQUNoQyxVQUFJO0FBQ0YsZUFBT3dLLGtCQUFrQixDQUF6QixLQUF5QixDQUF6QjtBQUNBLE9BRkYsQ0FFRSxVQUFVO0FBQ1YsY0FBTWxRLEdBQThCLEdBQUcsVUFBdkMsd0JBQXVDLENBQXZDO0FBR0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUVIO0FBVkQ7O0FBV0EsVUFBTXlGLE1BQWtELEdBQXhEO0FBRUF2RSxVQUFNLENBQU5BLHFCQUE2QmlQLFFBQUQsSUFBc0I7QUFDaEQsWUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQWhCLFFBQWdCLENBQWhCO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHbEcsVUFBVSxDQUFDZ0csQ0FBQyxDQUF0QixHQUFvQixDQUFwQjs7QUFDQSxVQUFJRSxDQUFDLEtBQUwsV0FBcUI7QUFDbkI3SyxjQUFNLENBQU5BLFFBQU0sQ0FBTkEsR0FBbUIsQ0FBQzZLLENBQUMsQ0FBREEsUUFBRCxHQUFDQSxDQUFELEdBQ2ZBLENBQUMsQ0FBREEsZUFBa0I5USxLQUFELElBQVd5USxNQUFNLENBRG5CLEtBQ21CLENBQWxDSyxDQURlLEdBRWZGLENBQUMsQ0FBREEsU0FDQSxDQUFDSCxNQUFNLENBRFBHLENBQ08sQ0FBUCxDQURBQSxHQUVBSCxNQUFNLENBSlZ4SyxDQUlVLENBSlZBO0FBTUg7QUFWRHZFO0FBV0E7QUE5QkY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQzlCRDtBQUNBOztBQUNBLDBCQUFrQztBQUNoQyxTQUFPcVAsR0FBRyxDQUFIQSxnQ0FBUCxNQUFPQSxDQUFQO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU16SyxRQUFRLEdBQUdKLEtBQUssQ0FBTEEsbUJBQXlCQSxLQUFLLENBQUxBLFNBQTFDLEdBQTBDQSxDQUExQzs7QUFDQSxnQkFBYztBQUNaQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsU0FBZSxDQUF2QkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxRQUFNRyxNQUFNLEdBQUdILEtBQUssQ0FBTEEsV0FBZixLQUFlQSxDQUFmOztBQUNBLGNBQVk7QUFDVkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLE1BQVJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsU0FBTztBQUFFN0UsT0FBRyxFQUFMO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFHSzs7QUFBQSx3Q0FPTDtBQUNBLFFBQU0yUCxRQUFRLEdBQUcsQ0FBQ0MsZUFBZSxDQUFmQSxzQkFBRCxvQkFBakIsR0FBaUIsQ0FBakI7QUFJQSxRQUFNSixNQUFzQyxHQUE1QztBQUNBLE1BQUlLLFVBQVUsR0FBZDtBQUNBLFFBQU1DLGtCQUFrQixHQUFHSCxRQUFRLENBQVJBLElBQ25CdkQsT0FBRCxJQUFhO0FBQ2hCLFFBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNEIyRCxjQUFjLENBQUMzRCxPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhEO0FBQ0FvRCxZQUFNLENBQU5BLEdBQU0sQ0FBTkEsR0FBYztBQUFFUSxXQUFHLEVBQUVILFVBQVA7QUFBQTtBQUFkTDtBQUFjLE9BQWRBO0FBQ0EsYUFBT3hLLE1BQU0sR0FBSUMsUUFBUSxtQkFBWixXQUFiO0FBSEYsV0FJTztBQUNMLGFBQVEsSUFBR2dMLFdBQVcsU0FBdEI7QUFFSDtBQVR3Qk4sVUFBM0IsRUFBMkJBLENBQTNCLENBUEEsQ0FtQkE7QUFDQTs7QUFDQSxZQUFtQztBQUNqQyxRQUFJTyxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxrQkFBa0IsR0FBdEIsRUFGaUMsQ0FJakM7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsVUFBSUMsUUFBUSxHQUFaOztBQUVBLFdBQUssSUFBSUMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLG9CQUF3Q0EsQ0FBeEMsSUFBNkM7QUFDM0NELGdCQUFRLElBQUl4RCxNQUFNLENBQU5BLGFBQVp3RCxnQkFBWXhELENBQVp3RDtBQUNBSCx3QkFBZ0I7O0FBRWhCLFlBQUlBLGdCQUFnQixHQUFwQixLQUE0QjtBQUMxQkMsNEJBQWtCO0FBQ2xCRCwwQkFBZ0IsR0FBaEJBO0FBRUg7QUFDRDs7QUFBQTtBQVpGOztBQWVBLFVBQU1LLFNBQXNDLEdBQTVDO0FBRUEsUUFBSUMsdUJBQXVCLEdBQUdiLFFBQVEsQ0FBUkEsSUFDdEJ2RCxPQUFELElBQWE7QUFDaEIsVUFBSUEsT0FBTyxDQUFQQSxtQkFBMkJBLE9BQU8sQ0FBUEEsU0FBL0IsR0FBK0JBLENBQS9CLEVBQXNEO0FBQ3BELGNBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE0QjJELGNBQWMsQ0FBQzNELE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQsQ0FEb0QsQ0FFcEQ7QUFDQTs7QUFDQSxZQUFJcUUsVUFBVSxHQUFHelEsR0FBRyxDQUFIQSxlQUFqQixFQUFpQkEsQ0FBakI7QUFDQSxZQUFJMFEsVUFBVSxHQUFkLE1BTG9ELENBT3BEO0FBQ0E7O0FBQ0EsWUFBSUQsVUFBVSxDQUFWQSxnQkFBMkJBLFVBQVUsQ0FBVkEsU0FBL0IsSUFBdUQ7QUFDckRDLG9CQUFVLEdBQVZBO0FBRUY7O0FBQUEsWUFBSSxDQUFDOUIsS0FBSyxDQUFDK0IsUUFBUSxDQUFDRixVQUFVLENBQVZBLFVBQXBCLENBQW9CQSxDQUFELENBQVQsQ0FBVixFQUErQztBQUM3Q0Msb0JBQVUsR0FBVkE7QUFHRjs7QUFBQSx3QkFBZ0I7QUFDZEQsb0JBQVUsR0FBR0wsZUFBYks7QUFHRkY7O0FBQUFBLGlCQUFTLENBQVRBLFVBQVMsQ0FBVEE7QUFDQSxlQUFPdkwsTUFBTSxHQUNUQyxRQUFRLEdBQ0wsVUFBU3dMLFVBREosWUFFTCxPQUFNQSxVQUhBLFVBSVIsT0FBTUEsVUFKWDtBQXJCRixhQTBCTztBQUNMLGVBQVEsSUFBR1IsV0FBVyxTQUF0QjtBQUVIO0FBL0IyQk4sWUFBOUIsRUFBOEJBLENBQTlCO0FBa0NBLFdBQU87QUFDTFIsUUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQUE7QUFBQTtBQUlMYyxnQkFBVSxFQUFHLElBQUdKLHVCQUpsQjtBQUFPLEtBQVA7QUFRRjs7QUFBQSxTQUFPO0FBQ0xyQixNQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEQ7QUF5UUE7Ozs7O0FBR08sc0JBRUY7QUFDSCxNQUFJZSxJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQTFMLFlBQU0sR0FBR3dHLEVBQUUsQ0FBQyxHQUFaeEcsSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCNUcsTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRWlPLFFBQVMsS0FBSUksUUFBUyxHQUFFa0UsSUFBSSxHQUFHLE1BQUgsT0FBZ0IsRUFBdEQ7QUFHSzs7QUFBQSxrQkFBa0I7QUFDdkIsUUFBTTtBQUFBO0FBQUEsTUFBV3ZTLE1BQU0sQ0FBdkI7QUFDQSxRQUFNNE8sTUFBTSxHQUFHNEQsaUJBQWY7QUFDQSxTQUFPM1IsSUFBSSxDQUFKQSxVQUFlK04sTUFBTSxDQUE1QixNQUFPL04sQ0FBUDtBQUdLOztBQUFBLG1DQUF3RDtBQUM3RCxTQUFPLDRDQUVIOEksU0FBUyxDQUFUQSxlQUF5QkEsU0FBUyxDQUFsQ0EsUUFGSjtBQUtLOztBQUFBLHdCQUF3QztBQUM3QyxTQUFPN0IsR0FBRyxDQUFIQSxZQUFnQkEsR0FBRyxDQUExQjtBQUdLOztBQUFBLDZDQUlrRDtBQUN2RCxZQUEyQztBQUFBOztBQUN6QywwQkFBSTJLLEdBQUcsQ0FBUCw4QkFBSUEsZUFBSixpQkFBb0M7QUFDbEMsWUFBTWpPLE9BQU8sR0FBSSxJQUFHa08sY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNNUssR0FBRyxHQUFHNEYsR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDK0UsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJL0UsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMaUYsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ2xGLEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNM0wsS0FBSyxHQUFHLE1BQU0wUSxHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSTNLLEdBQUcsSUFBSStLLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU1yTyxPQUFPLEdBQUksSUFBR2tPLGNBQWMsS0FFaEMsK0RBQThEM1EsS0FGaEU7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSUQsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQzRMLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0NoTixhQUFPLENBQVBBLEtBQ0csR0FBRWdTLGNBQWMsS0FEbkJoUztBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNb1MsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUlsTixHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDOUQsWUFBTSxDQUFOQSxrQkFBMEJMLEdBQUQsSUFBUztBQUNoQyxZQUFJcVIsYUFBYSxDQUFiQSxpQkFBK0IsQ0FBbkMsR0FBdUM7QUFDckNwUyxpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRGUsR0FEdkRmO0FBSUg7QUFORG9CO0FBUUg7QUFFRDs7QUFBQSxTQUFPLDBCQUFQLEdBQU8sQ0FBUDtBQUdLOztBQUFBLE1BQU1pUixFQUFFLEdBQUcsdUJBQVg7O0FBQ0EsTUFBTTVJLEVBQUUsR0FDYjRJLEVBQUUsSUFDRixPQUFPM0ksV0FBVyxDQUFsQixTQURBMkksY0FFQSxPQUFPM0ksV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7O0FDeFlNLHdCQUF3QiwwQ0FBMEMsZ0RBQWdELGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7OztBQ0RBLGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDRGQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlDQSxNQUFNNEksY0FBOEIsR0FBRztBQUNyQ0MsUUFBTSxFQUFFLENBRDZCO0FBRXJDQyxPQUFLLEVBQUUsRUFGOEI7QUFHckNDLFFBQU0sRUFBRSxFQUg2QjtBQUlyQ0MsVUFBUSxFQUFFLEVBSjJCO0FBS3JDQyxTQUFPLEVBQUUsRUFMNEI7QUFNckNDLFFBQU0sRUFBRSxFQU42QjtBQU9yQ0MsTUFBSSxFQUFFO0FBUCtCLENBQXZDOztBQVVBLE1BQU1DLFFBQU4sU0FBdUJDLG1EQUF2QixDQUFzRDtBQUdwRHRMLGFBQVcsQ0FBQ3BHLEtBQUQsRUFBZ0I7QUFDekIsVUFBTUEsS0FBTjs7QUFEeUI7O0FBQUEsb0NBNERsQixNQUFNO0FBQ2IsWUFBTTtBQUFFcEIsY0FBRjtBQUFVK1MsdUJBQWUsRUFBRUM7QUFBM0IsVUFBdUQsS0FBSzVSLEtBQWxFO0FBQ0EsWUFBTTtBQUFFK0U7QUFBRixVQUFZLEtBQUt1QyxLQUF2QjtBQUNBc0ssNkJBQXVCLGlDQUNsQjdNLEtBRGtCLEdBRWxCbkcsTUFBTSxDQUFDbUcsS0FGVyxFQUF2QjtBQUlELEtBbkUwQjs7QUFFekIsU0FBS3VDLEtBQUwsR0FBYTtBQUNYdkMsV0FBSyxFQUFFa007QUFESSxLQUFiO0FBR0Q7O0FBRURZLG1CQUFpQixHQUFHO0FBQ2xCLFNBQUtwRixNQUFMO0FBQ0EsU0FBS3FGLE1BQUwsR0FBYyxLQUFLQyxPQUFuQjtBQUNBLFNBQUtELE1BQUwsQ0FBWXpPLEVBQVosQ0FBZSxtQkFBZixFQUFvQyxLQUFLb0osTUFBekM7QUFDQSxTQUFLcUYsTUFBTCxDQUFZek8sRUFBWixDQUFlLDRCQUFmLEVBQTZDLEtBQUtvSixNQUFsRDtBQUNEOztBQUVEdUYsb0JBQWtCLENBQUNDLFNBQUQsRUFBb0JDLFVBQXBCLEVBQXlDO0FBQ3pELFVBQU07QUFBRXRULFlBQUY7QUFBVXVUO0FBQVYsUUFBdUIsS0FBS25TLEtBQWxDO0FBQ0EsVUFBTTtBQUFFK0U7QUFBRixRQUFZLEtBQUt1QyxLQUF2Qjs7QUFDQSxRQUNFMUksTUFBTSxDQUFDbUcsS0FBUCxDQUFhcU4sQ0FBYixLQUFtQkgsU0FBUyxDQUFDclQsTUFBVixDQUFpQm1HLEtBQWpCLENBQXVCcU4sQ0FBMUMsSUFDR3JOLEtBQUssS0FBS21OLFVBQVUsQ0FBQ25OLEtBRjFCLEVBR0U7QUFDQSxXQUFLMEgsTUFBTDtBQUNEOztBQUNELFFBQUksQ0FBQzBGLFFBQUQsSUFBYUEsUUFBUSxLQUFLRixTQUFTLENBQUNFLFFBQXhDLEVBQWtEO0FBQ2hELFdBQUsxRixNQUFMO0FBQ0Q7QUFDRjs7QUFFRDRGLHNCQUFvQixHQUFHO0FBQ3JCLFNBQUtQLE1BQUwsR0FBYyxLQUFLQyxPQUFuQjs7QUFDQSxRQUFJLEtBQUtELE1BQVQsRUFBaUI7QUFDZixXQUFLQSxNQUFMLENBQVl4TyxHQUFaLENBQWdCLG1CQUFoQjtBQUNBLFdBQUt3TyxNQUFMLENBQVl4TyxHQUFaLENBQWdCLDRCQUFoQjtBQUNEO0FBQ0Y7O0FBRVcsUUFBTmdQLE1BQU0sQ0FBQ0MsU0FBRCxFQUF3QjtBQUNsQyxVQUFNO0FBQ0pDLDhCQUF3QixFQUFFQztBQUR0QixRQUVGLEtBQUt6UyxLQUZUO0FBR0EsVUFBTTtBQUFFMFMsU0FBRjtBQUFPQztBQUFQLFFBQXNCSixTQUE1Qjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUssNkRBQWdCLENBQUNDLFFBQWpCLENBQTBCSCxHQUExQixFQUErQkMsVUFBL0IsQ0FBTjtBQUNBRixxQ0FBK0IsQ0FBQ0MsR0FBRCxDQUEvQjtBQUNELEtBSEQsQ0FHRSxPQUFPbEosS0FBUCxFQUFjO0FBQ2QsWUFBTXZLLENBQUMsR0FBRyxNQUFNK0wsT0FBTyxDQUFDOEgsT0FBUixDQUFnQnRKLEtBQWhCLENBQWhCO0FBQ0EvRyxtREFBTyxDQUFDK0csS0FBUixDQUFjdUosaUVBQWdCLENBQUM5VCxDQUFELENBQTlCO0FBQ0Q7QUFDRjs7QUFFRCtULFdBQVMsQ0FBQzdQLElBQUQsRUFBZXFCLEtBQWYsRUFBMkI7QUFDbEMsVUFBTTtBQUFFTztBQUFGLFFBQVksS0FBS3VDLEtBQXZCO0FBQ0EsU0FBSzJMLFFBQUwsQ0FBYztBQUNabE8sV0FBSyxrQ0FDQUEsS0FEQTtBQUVILFNBQUM1QixJQUFELEdBQVFxQjtBQUZMO0FBRE8sS0FBZDtBQU1EOztBQVdEME8sYUFBVyxHQUFHO0FBQ1osU0FBS0QsUUFBTCxDQUFjO0FBQ1psTyxXQUFLLEVBQUVrTTtBQURLLEtBQWQ7QUFHRDs7QUFFRGtDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFDSkMsZ0JBREk7QUFDUUMsZUFEUjtBQUNtQkMsUUFEbkI7QUFDdUJDO0FBRHZCLFFBRUYsS0FBS3ZULEtBRlQ7QUFHQSxVQUFNO0FBQUUrRTtBQUFGLFFBQVksS0FBS3VDLEtBQXZCO0FBRUEsV0FDRSxtRUFDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVFnTSxFQUFSLGFBQVFBLEVBQVIsdUJBQVFBLEVBQUUsQ0FBRUUsUUFBWixDQURGLEVBRUU7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUVELFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFRSxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUNFLFVBQUksRUFBQyxhQURQO0FBRUUsYUFBTyxFQUFFRixRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRUcsZUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBUUU7QUFDRSxjQUFRLEVBQUMsVUFEWDtBQUVFLGFBQU8sRUFBRUgsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVDLFFBRnJCO0FBR0UsU0FBRyxFQUFDLE9BSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBYUU7QUFBTSxjQUFRLEVBQUMsVUFBZjtBQUEwQixhQUFPLEVBQUVELFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFSSxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYkYsRUFjRTtBQUNFLGNBQVEsRUFBQyxhQURYO0FBRUUsYUFBTyxFQUFFSixRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRUUsWUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRGLEVBa0JFO0FBQ0UsY0FBUSxFQUFDLGdCQURYO0FBRUUsYUFBTyxFQUFFRixRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRUcsZUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRixDQURGLEVBd0JFLE1BQUMscUVBQUQ7QUFDRSxlQUFTLEVBQUMsVUFEWjtBQUVFLGlCQUFXLEVBQUMsR0FGZDtBQUdFLGtCQUFZLEVBQUMsTUFIZjtBQUlFLG9CQUFjLEVBQUMsVUFKakI7QUFLRSxjQUFRLEVBQUMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BeEJGLEVBK0JFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUVBQUQ7QUFDRSxlQUFTLEVBQUVMLFNBRGI7QUFFRSxnQkFBVSxFQUFFRCxVQUZkO0FBR0UsZUFBUyxFQUFFLEtBQUtKLFNBQUwsQ0FBZVksSUFBZixDQUFvQixJQUFwQixDQUhiO0FBSUUsaUJBQVcsRUFBRSxLQUFLVixXQUFMLENBQWlCVSxJQUFqQixDQUFzQixJQUF0QjtBQUpmLE9BS003TyxLQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixFQVFFLE1BQUMsNEVBQUQsZUFDTSxLQUFLL0UsS0FEWDtBQUVFLFlBQU0sRUFBRSxLQUFLc1MsTUFBTCxDQUFZc0IsSUFBWixDQUFpQixJQUFqQixDQUZWO0FBR0UsV0FBSyxFQUFDLFdBSFI7QUFJRSxZQUFNLE1BSlI7QUFLRSxlQUFTLEVBQUUsS0FBS1osU0FBTCxDQUFlWSxJQUFmLENBQW9CLElBQXBCO0FBTGIsT0FNTTdPLEtBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVJGLENBL0JGLENBREY7QUFtREQ7O0FBdkltRDs7QUEwSXREME0sUUFBUSxDQUFDb0MsV0FBVCxHQUF1QkMseURBQXZCOztBQUVBLE1BQU1DLGVBQWUsR0FBSXpNLEtBQUQ7QUFDdEJnTSxJQUFFLG9CQUFPaE0sS0FBSyxDQUFDZ00sRUFBYjtBQURvQixHQUVuQmhNLEtBQUssQ0FBQ2lMLFNBQU4sQ0FBZ0J5QixVQUZHO0FBR3RCWCxXQUFTLEVBQUUvTCxLQUFLLENBQUNpTSxRQUFOLENBQWVGLFNBSEo7QUFJdEJsQixVQUFRLEVBQUU3SyxLQUFLLENBQUMrRSxJQUFOLENBQVc4RixRQUpDO0FBS3RCaUIsWUFBVSxFQUFFOUwsS0FBSyxDQUFDaUwsU0FBTixDQUFnQmEsVUFBaEIsQ0FBMkI5SCxJQUxqQjtBQU10QmlJLFVBQVEsRUFBRWpNLEtBQUssQ0FBQ2lNO0FBTk0sRUFBeEI7O0FBUUEsTUFBTVUsV0FBVyxHQUFHO0FBQ2xCdEMsMkZBRGtCO0FBRWxCYSw2R0FGa0I7QUFHbEIwQiwwRkFIa0I7QUFJbEJDLHlHQUprQjtBQUtsQkMsZ0dBTGtCO0FBTWxCQyxnRkFBWUE7QUFOTSxDQUFwQjtBQVFlQywwSEFBTyxDQUFDUCxlQUFELEVBQWtCRSxXQUFsQixDQUFQLENBQXNDTSwrREFBVSxDQUFDOUMsUUFBRCxDQUFoRCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQVNPLE1BQU0rQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDMUI7QUFBSyxLQUFHLEVBQUMscUJBQVQ7QUFBK0IsT0FBSyxFQUFFQTtBQUF0QyxFQURLO0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQ3pCO0FBQUssS0FBRyxFQUFDLG9CQUFUO0FBQThCLE9BQUssRUFBRUE7QUFBckMsRUFESztBQUlBLE1BQU1FLGFBQWEsR0FBRyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUMzQjtBQUFLLEtBQUcsRUFBQyxzQkFBVDtBQUFnQyxPQUFLLEVBQUVBO0FBQXZDLEVBREs7QUFJQSxNQUFNRyxRQUFRLEdBQUcsTUFDdEI7QUFBSyxXQUFTLEVBQUM7QUFBZixHQUNFO0FBQ0UsT0FBSyxFQUFDLElBRFI7QUFFRSxRQUFNLEVBQUMsSUFGVDtBQUdFLFNBQU8sRUFBQyxXQUhWO0FBSUUsTUFBSSxFQUFDLE1BSlA7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQ0UsR0FBQyxFQUFDLHFxQ0FESjtBQUVFLE1BQUksRUFBQztBQUZQLEVBUEYsQ0FERixDQURLO0FBaUJBLE1BQU1DLFdBQVcsR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsUUFBVDtBQUFpQkM7QUFBakIsQ0FBRCxLQUN6QjtBQUNFLE9BQUssRUFBRUYsS0FBSyxJQUFJLEtBRGxCO0FBRUUsUUFBTSxFQUFFQyxNQUFNLElBQUksS0FGcEI7QUFHRSxTQUFPLEVBQUMsV0FIVjtBQUlFLE1BQUksRUFBQyxNQUpQO0FBS0UsT0FBSyxFQUFDO0FBTFIsR0FPRTtBQUNFLEdBQUMsRUFBQywwa0JBREo7QUFFRSxNQUFJLEVBQUVDO0FBRlIsRUFQRixDQURLO0FBZUEsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFBRUgsT0FBRjtBQUFTQyxRQUFUO0FBQWlCQztBQUFqQixDQUFELEtBQzNCO0FBQ0UsT0FBSyxFQUFFRixLQUFLLElBQUksS0FEbEI7QUFFRSxRQUFNLEVBQUVDLE1BQU0sSUFBSSxLQUZwQjtBQUdFLFNBQU8sRUFBQyxXQUhWO0FBSUUsTUFBSSxFQUFDLE1BSlA7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQ0UsR0FBQyxFQUFDLGcwQ0FESjtBQUVFLE1BQUksRUFBRUM7QUFGUixFQVBGLENBREs7QUFlQSxNQUFNRSxlQUFlLEdBQUcsQ0FBQztBQUFFSixPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUM3QjtBQUNFLE9BQUssRUFBRUQsS0FBSyxJQUFJLEtBRGxCO0FBRUUsUUFBTSxFQUFFQyxNQUFNLElBQUksS0FGcEI7QUFHRSxTQUFPLEVBQUMsV0FIVjtBQUlFLE1BQUksRUFBQyxNQUpQO0FBS0UsT0FBSyxFQUFDO0FBTFIsR0FPRTtBQUNFLEdBQUMsRUFBQyw2ckJBREo7QUFFRSxNQUFJLEVBQUM7QUFGUCxFQVBGLENBREs7QUFlQSxNQUFNSSxTQUFTLEdBQUcsQ0FBQztBQUFFTCxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUN2QjtBQUNFLE9BQUssRUFBRUQsS0FBSyxJQUFJLEtBRGxCO0FBRUUsUUFBTSxFQUFFQyxNQUFNLElBQUksS0FGcEI7QUFHRSxTQUFPLEVBQUMsV0FIVjtBQUlFLE1BQUksRUFBQyxjQUpQO0FBS0UsT0FBSyxFQUFDO0FBTFIsR0FPRTtBQUFNLEdBQUMsRUFBQztBQUFSLEVBUEYsQ0FESztBQVlBLE1BQU1LLHdCQUF3QixHQUFHLENBQUM7QUFBRU4sT0FBRjtBQUFTQztBQUFULENBQUQsS0FDdEM7QUFDRSxPQUFLLEVBQUVELEtBQUssSUFBSSxLQURsQjtBQUVFLFFBQU0sRUFBRUMsTUFBTSxJQUFJLEtBRnBCO0FBR0UsTUFBSSxFQUFDLGNBSFA7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVBGLEVBUUU7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVJGLEVBU0U7QUFBTSxHQUFDLEVBQUMsb0RBQVI7QUFBNkQsTUFBSSxFQUFDO0FBQWxFLEVBVEYsRUFVRTtBQUFNLEdBQUMsRUFBQztBQUFSLEVBVkYsRUFXRTtBQUFNLEdBQUMsRUFBQywyQ0FBUjtBQUFvRCxNQUFJLEVBQUM7QUFBekQsRUFYRixFQVlFO0FBQU0sR0FBQyxFQUFDLDhDQUFSO0FBQXVELE1BQUksRUFBQztBQUE1RCxFQVpGLENBREs7QUFpQkEsTUFBTU0sc0JBQXNCLEdBQUcsQ0FBQztBQUFFUCxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUNwQztBQUNFLE9BQUssRUFBRUQsS0FBSyxJQUFJLEtBRGxCO0FBRUUsUUFBTSxFQUFFQyxNQUFNLElBQUksS0FGcEI7QUFHRSxNQUFJLEVBQUMsY0FIUDtBQUlFLFNBQU8sRUFBQyxXQUpWO0FBS0UsT0FBSyxFQUFDO0FBTFIsR0FPRTtBQUFNLEdBQUMsRUFBQztBQUFSLEVBUEYsRUFRRTtBQUFNLEdBQUMsRUFBQztBQUFSLEVBUkYsQ0FESztBQWFBLE1BQU1PLGtCQUFrQixHQUFHLENBQUM7QUFBRVIsT0FBRjtBQUFTQztBQUFULENBQUQsS0FDaEM7QUFDRSxPQUFLLEVBQUVELEtBQUssSUFBSSxLQURsQjtBQUVFLFFBQU0sRUFBRUMsTUFBTSxJQUFJLEtBRnBCO0FBR0UsTUFBSSxFQUFDLGNBSFA7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVBGLEVBUUU7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVJGLENBREs7QUFhQSxNQUFNUSxrQkFBa0IsR0FBRyxDQUFDO0FBQUVULE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQ2hDO0FBQ0UsT0FBSyxFQUFFRCxLQUFLLElBQUksS0FEbEI7QUFFRSxRQUFNLEVBQUVDLE1BQU0sSUFBSSxLQUZwQjtBQUdFLE1BQUksRUFBQyxjQUhQO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQU0sR0FBQyxFQUFDO0FBQVIsRUFQRixFQVFFO0FBQU0sR0FBQyxFQUFDO0FBQVIsRUFSRixFQVNFO0FBQU0sR0FBQyxFQUFDLG9DQUFSO0FBQTZDLE1BQUksRUFBQztBQUFsRCxFQVRGLENBREs7QUFjQSxNQUFNUyxpQkFBaUIsR0FBRyxDQUFDO0FBQUVWLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQy9CO0FBQ0UsT0FBSyxFQUFFRCxLQUFLLElBQUksS0FEbEI7QUFFRSxRQUFNLEVBQUVDLE1BQU0sSUFBSSxLQUZwQjtBQUdFLE1BQUksRUFBQyxjQUhQO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQU0sR0FBQyxFQUFDO0FBQVIsRUFQRixDQURLO0FBWUEsTUFBTVUsYUFBYSxHQUFHLENBQUM7QUFBRVgsT0FBRjtBQUFTQztBQUFULENBQUQsS0FDM0I7QUFDRSxPQUFLLEVBQUVELEtBQUssSUFBSSxLQURsQjtBQUVFLFFBQU0sRUFBRUMsTUFBTSxJQUFJLEtBRnBCO0FBR0UsTUFBSSxFQUFDLGNBSFA7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFDRSxVQUFRLEVBQUMsU0FEWDtBQUVFLFVBQVEsRUFBQyxTQUZYO0FBR0UsR0FBQyxFQUFDO0FBSEosRUFQRixDQURLO0FBZ0JBLE1BQU1XLFVBQVUsR0FBRyxDQUFDO0FBQUVaLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQ3hCO0FBQ0UsT0FBSyxFQUFFRCxLQUFLLElBQUksS0FEbEI7QUFFRSxRQUFNLEVBQUVDLE1BQU0sSUFBSSxLQUZwQjtBQUdFLE1BQUksRUFBQyxjQUhQO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQU0sR0FBQyxFQUFDO0FBQVIsRUFQRixDQURLO0FBWUEsTUFBTVksVUFBVSxHQUFHLENBQUM7QUFBRWIsT0FBRjtBQUFTQztBQUFULENBQUQsS0FDeEI7QUFDRSxPQUFLLEVBQUVELEtBQUssSUFBSSxLQURsQjtBQUVFLFFBQU0sRUFBRUMsTUFBTSxJQUFJLEtBRnBCO0FBR0UsU0FBTyxFQUFDLFdBSFY7QUFJRSxNQUFJLEVBQUMsY0FKUDtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVBGLENBREs7QUFZQSxNQUFNYSxjQUFjLEdBQUcsQ0FBQztBQUFFWjtBQUFGLENBQUQsS0FDNUI7QUFDRSxPQUFLLEVBQUMsSUFEUjtBQUVFLFFBQU0sRUFBQyxJQUZUO0FBR0UsU0FBTyxFQUFDLFdBSFY7QUFJRSxNQUFJLEVBQUMsTUFKUDtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFDRSxHQUFDLEVBQUMsMGJBREo7QUFFRSxNQUFJLEVBQUVBLEtBQUssSUFBSTtBQUZqQixFQVBGLENBREs7QUFlQSxNQUFNYSxZQUFZLEdBQUcsQ0FBQztBQUFFYjtBQUFGLENBQUQsS0FDMUI7QUFDRSxPQUFLLEVBQUMsSUFEUjtBQUVFLFFBQU0sRUFBQyxJQUZUO0FBR0UsU0FBTyxFQUFDLFdBSFY7QUFJRSxNQUFJLEVBQUMsTUFKUDtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFDRSxHQUFDLEVBQUMsa2lCQURKO0FBRUUsTUFBSSxFQUFFQSxLQUFLLElBQUk7QUFGakIsRUFQRixDQURLO0FBZUEsTUFBTWMsZUFBZSxHQUFHLENBQUM7QUFBRWQ7QUFBRixDQUFELEtBQzdCO0FBQ0UsT0FBSyxFQUFDLElBRFI7QUFFRSxRQUFNLEVBQUMsSUFGVDtBQUdFLFNBQU8sRUFBQyxXQUhWO0FBSUUsTUFBSSxFQUFDLE1BSlA7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQ0UsR0FBQyxFQUFDLDRnRUFESjtBQUVFLE1BQUksRUFBRUEsS0FBSyxJQUFJO0FBRmpCLEVBUEYsQ0FESztBQWVBLE1BQU1lLFVBQVUsR0FBRyxNQUN4QjtBQUNFLE9BQUssRUFBQyxJQURSO0FBRUUsUUFBTSxFQUFDLElBRlQ7QUFHRSxTQUFPLEVBQUMsV0FIVjtBQUlFLE1BQUksRUFBQyxNQUpQO0FBS0UsT0FBSyxFQUFDO0FBTFIsR0FPRTtBQUNFLEdBQUMsRUFBQyx5bkVBREo7QUFFRSxNQUFJLEVBQUM7QUFGUCxFQVBGLENBREs7QUFlQSxNQUFNQyxXQUFXLEdBQUcsTUFDekI7QUFDRSxPQUFLLEVBQUMsSUFEUjtBQUVFLFFBQU0sRUFBQyxJQUZUO0FBR0UsU0FBTyxFQUFDLFdBSFY7QUFJRSxNQUFJLEVBQUMsTUFKUDtBQUtFLE9BQUssRUFBQztBQUxSLEdBT0U7QUFDRSxHQUFDLEVBQUMsMkRBREo7QUFFRSxNQUFJLEVBQUM7QUFGUCxFQVBGLEVBV0U7QUFBTSxHQUFDLEVBQUMsMkNBQVI7QUFBb0QsTUFBSSxFQUFDO0FBQXpELEVBWEYsRUFZRTtBQUNFLEdBQUMsRUFBQywrVUFESjtBQUVFLE1BQUksRUFBQztBQUZQLEVBWkYsRUFnQkU7QUFBTSxHQUFDLEVBQUMscUNBQVI7QUFBOEMsTUFBSSxFQUFDO0FBQW5ELEVBaEJGLEVBaUJFO0FBQU0sR0FBQyxFQUFDLHdDQUFSO0FBQWlELE1BQUksRUFBQztBQUF0RCxFQWpCRixDQURLO0FBc0JBLE1BQU1DLGlCQUFpQixHQUFHLE1BQy9CO0FBQ0UsT0FBSyxFQUFDLElBRFI7QUFFRSxRQUFNLEVBQUMsSUFGVDtBQUdFLFNBQU8sRUFBQyxXQUhWO0FBSUUsTUFBSSxFQUFDLE1BSlA7QUFLRSxPQUFLLEVBQUM7QUFMUixHQU9FO0FBQ0UsR0FBQyxFQUFDLHN3QkFESjtBQUVFLE1BQUksRUFBQztBQUZQLEVBUEYsQ0FESztBQWVBLE1BQU1DLEtBQUssR0FBRyxNQUNuQjtBQUNFLE9BQUssRUFBQyxJQURSO0FBRUUsUUFBTSxFQUFDLElBRlQ7QUFHRSxTQUFPLEVBQUMsV0FIVjtBQUlFLE1BQUksRUFBQyxNQUpQO0FBS0UsT0FBSyxFQUFDO0FBTFIsR0FPRTtBQUNFLEdBQUMsRUFBQyw2WUFESjtBQUVFLE1BQUksRUFBQztBQUZQLEVBUEYsRUFXRTtBQUNFLEdBQUMsRUFBQywyZUFESjtBQUVFLE1BQUksRUFBQztBQUZQLEVBWEYsQ0FESyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFRQO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQztBQUFFQyxVQUFRLEdBQUcsS0FBYjtBQUFvQkMsWUFBVSxHQUFHO0FBQWpDLENBQUQsS0FDYjtBQUNFLFdBQVMsRUFBRUMsaURBQVUsQ0FBQyxRQUFELEVBQVc7QUFDOUJDLFVBQU0sRUFBRSxDQUFDSCxRQURxQjtBQUU5QkM7QUFGOEIsR0FBWDtBQUR2QixHQU1FO0FBQUssV0FBUyxFQUFDO0FBQWYsRUFORixDQURGOztBQWNlRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2pCQTs7QUFDQTtBQUVBOztBQVFBLE1BQU1LLFlBQVksR0FBRyxDQUFDQyxNQUFELEVBQWtCQyxVQUFsQixLQUF5RDtBQUM1RSxRQUFNO0FBQ0pDLFFBREk7QUFDRTdYLFFBREY7QUFDUTRULE9BRFI7QUFDYWtFLFNBRGI7QUFDb0JDO0FBRHBCLE1BRUZKLE1BRko7O0FBR0EsTUFBSUUsSUFBSSxLQUFLLE1BQVQsSUFBbUJFLFdBQXZCLEVBQW9DO0FBQ2xDO0FBQ0EsV0FBTztBQUFLLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRUQ7QUFBVixPQUE5QjtBQUF1RCxXQUFLLEVBQUVILFVBQVUsSUFBSSxFQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxTQUNFO0FBQUcsUUFBSSxFQUFFNVgsSUFBSSxJQUFJLEdBQWpCO0FBQXNCLFVBQU0sRUFBQyxRQUE3QjtBQUFzQyxPQUFHLEVBQUMsWUFBMUM7QUFBdUQsT0FBRyxFQUFFNFQsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFa0UsS0FBSyxJQUFJQSxLQUFLLENBQUMvUyxHQUR0QjtBQUVFLE9BQUcsRUFBQyxFQUZOO0FBR0UsU0FBSyxFQUFFNlMsVUFBVSxJQUFJLEVBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBU0QsQ0FsQkQ7O0FBbUJBLE1BQU1LLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV04sWUFBWDtBQUF1Qk87QUFBdkIsQ0FBRCxLQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDR0QsT0FBTyxJQUFJQSxPQUFPLENBQUNFLE1BQVIsR0FBaUIsQ0FBNUIsSUFDQyxNQUFDLDZDQUFEO0FBQVUsVUFBUSxNQUFsQjtBQUFtQixRQUFNLE1BQXpCO0FBQTBCLE1BQUksRUFBRSxLQUFoQztBQUF1QyxRQUFNLEVBQUMsTUFBOUM7QUFBcUQsV0FBUyxFQUFFRCxVQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0dELE9BQU8sQ0FBQ0csR0FBUixDQUFhNUksSUFBRCxJQUFXaUksWUFBWSxDQUFDakksSUFBRCxFQUFPbUksVUFBUCxDQUFuQyxDQURILENBRkosQ0FERjs7QUFXQUssTUFBTSxDQUFDSyxZQUFQLEdBQXNCO0FBQ3BCSCxZQUFVLEVBQUU7QUFEUSxDQUF0QjtBQUdlRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFFQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkEsTUFBTU0sV0FBVyxHQUFHLENBQUNqRyxNQUFELEVBQWlCak8sSUFBakIsS0FDbEI7QUFBSyxXQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxPQUFLLEVBQUU7QUFBRW1VLGVBQVcsRUFBRTtBQUFmLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFrQ25VLElBQWxDLENBREYsRUFFR2lPLE1BQU0sS0FBSyxNQUFYLEdBQ0M7QUFBTSxXQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREQsR0FJR0EsTUFBTSxLQUFLLFFBQVgsR0FDRjtBQUFNLFdBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERSxHQUtGO0FBQU0sV0FBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQVhKLENBREY7O0FBbUJBLE1BQU1tRyxVQUFVLEdBQUlDLElBQUQsSUFDakIsTUFBQywwQ0FBRDtBQUFPLFdBQVMsRUFBQyxNQUFqQjtBQUF3QixNQUFJLE1BQTVCO0FBQTZCLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDR0EsSUFBSSxDQUFDTCxHQUFMLENBQVVNLEdBQUQsSUFDUixNQUFDLGdEQUFEO0FBQ0UsTUFBSSxFQUFFO0FBQUU5VyxZQUFRLEVBQUUsTUFBWjtBQUFvQm9FLFNBQUssRUFBRTtBQUFFeVMsVUFBSSxFQUFFQztBQUFSO0FBQTNCLEdBRFI7QUFFRSxLQUFHLEVBQUVBLEdBRlA7QUFHRSxJQUFFLEVBQUcsUUFBT0EsR0FBSSxFQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUVHQSxHQUZILENBTEYsQ0FERCxDQURILENBREY7O0FBd0JPLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQ3ZCbkYsV0FEdUI7QUFFdkJKLFVBRnVCO0FBR3ZCRyxRQUh1QjtBQUl2QnFGLFdBSnVCO0FBS3ZCQztBQUx1QixDQUFELEtBTVA7QUFBQTs7QUFDZixRQUFNO0FBQUVDLFlBQUY7QUFBWUM7QUFBWixNQUFnQ3ZGLFNBQXRDO0FBQ0EsUUFBTXdGLGdCQUFnQixHQUFHLENBQUMsVUFBRCxDQUF6QjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxTQUFiOztBQUNBLE1BQUlILFFBQUosRUFBYztBQUNaLFlBQVFDLGVBQVI7QUFDRSxXQUFLLFNBQUw7QUFDRUMsd0JBQWdCLENBQUMvUCxJQUFqQixDQUFzQixTQUF0QjtBQUNBZ1EsY0FBTSxHQUFHLGNBQVQ7QUFDQTs7QUFDRixXQUFLLE9BQUw7QUFDRUQsd0JBQWdCLENBQUMvUCxJQUFqQixDQUFzQixPQUF0QjtBQUNBZ1EsY0FBTSxHQUFHLFlBQVQ7QUFDQTs7QUFDRixXQUFLLFFBQUw7QUFDRUEsY0FBTSxHQUFHLE1BQVQ7QUFDQUQsd0JBQWdCLENBQUMvUCxJQUFqQixDQUFzQixRQUF0QjtBQUNBOztBQUNGO0FBQ0VnUSxjQUFNLEdBQUcsUUFBVDtBQUNBRCx3QkFBZ0IsQ0FBQy9QLElBQWpCLENBQXNCLFFBQXRCO0FBQ0E7QUFoQko7QUFrQkQsR0FuQkQsTUFtQk87QUFDTCtQLG9CQUFnQixDQUFDL1AsSUFBakIsQ0FBc0IsU0FBdEI7QUFDRDs7QUFDRCxRQUFNaVEsMkJBQTJCLEdBQUdMLG9CQUFvQixJQUFJLHdCQUE1RDtBQUVBLFNBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFTLEVBQUVELFNBQXRCO0FBQWlDLE9BQUcsRUFBRXBGLFNBQVMsQ0FBQ0csR0FBaEQ7QUFBcUQsYUFBUyxFQUFFLEtBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsU0FBUyxDQUFDMkYsU0FBVixJQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosRUFNRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQ0p2WCxjQUFRLEVBQUUsU0FETjtBQUVKb0UsV0FBSyxFQUFFO0FBQUV3TixpQkFBUyxFQUFFNEYsSUFBSSxDQUFDQyxTQUFMLENBQWU3RixTQUFmO0FBQWI7QUFGSCxLQURSO0FBS0UsTUFBRSxFQUFHLFlBQVdBLFNBQVMsQ0FBQzhGLFFBQVMsRUFMckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxPQUFHLEVBQ0QsT0FBTzlGLFNBQVMsQ0FBQytGLE1BQWpCLEtBQTRCLFFBQTVCLElBQ0cvRixTQUFTLENBQUMrRixNQUFWLENBQWlCcEIsTUFBakIsR0FBMEIsQ0FEN0IsR0FFSTNFLFNBQVMsQ0FBQytGLE1BRmQsR0FHSUwsMkJBTlI7QUFRRSxPQUFHLEVBQUMsRUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFXRTtBQUFNLGFBQVMsRUFBRUYsZ0JBQWdCLENBQUNRLElBQWpCLENBQXNCLEdBQXRCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOENQLE1BQTlDLENBWEYsRUFZR1gsV0FBVyxDQUFDOUUsU0FBUyxDQUFDbkIsTUFBWCxFQUFtQm1CLFNBQVMsQ0FBQzhGLFFBQTdCLENBWmQsRUFhRyxDQUFBOUYsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxnQ0FBQUEsU0FBUyxDQUFFaUcsS0FBWCxzRUFBa0JDLEtBQWxCLElBQTBCLENBQTFCLElBQ0M7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFhLFNBQUssRUFBRTtBQUFFbkIsaUJBQVcsRUFBRTtBQUFmLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTy9FLFNBQVMsQ0FBQ2lHLEtBQVYsQ0FBZ0JDLEtBQXZCLENBRkYsQ0FkSixDQURGLENBUEYsQ0FORixFQW9DRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFdBQU8sRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1sRyxTQUFTLENBQUNpRixJQUFWLElBQWtCRCxVQUFVLENBQUNoRixTQUFTLENBQUNpRixJQUFYLENBQWxDLENBREYsQ0FERixFQUlFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsdUJBREY7QUFFRSxVQUFNLEVBQUUsQ0FBQ3JGLFFBRlg7QUFHRSxhQUFTLEVBQUMsWUFIWjtBQUlFLFdBQU8sRUFBRSxNQUFNRyxNQUFNLENBQUNDLFNBQUQsQ0FKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HQSxTQUFTLENBQUNJLFVBQVYsR0FDQyxNQUFDLDZEQUFEO0FBQWEsYUFBUyxFQUFDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDLE1BQUMsK0RBQUQ7QUFBZSxhQUFTLEVBQUMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREYsQ0FKRixDQURGLEVBb0JFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQkosU0FBM0IsYUFBMkJBLFNBQTNCLHVCQUEyQkEsU0FBUyxDQUFFbUcsT0FBdEMsQ0FwQkYsQ0FwQ0YsQ0FERjtBQTZERCxDQS9GTTs7QUFpR1AsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFDckJyTixNQURxQjtBQUVyQnNOLFdBRnFCO0FBR3JCclosU0FIcUI7QUFJckJzWixPQUpxQjtBQUtyQnZHLFFBTHFCO0FBTXJCSCxVQU5xQjtBQU9yQjJHLFFBUHFCO0FBUXJCNUgsUUFScUI7QUFTckJDLE9BVHFCO0FBVXJCNEgsT0FWcUI7QUFXckIvRixXQVhxQjtBQVlyQjRFLHNCQVpxQjtBQWFyQlosU0FicUI7QUFjckI3RDtBQWRxQixDQUFELEtBZVI7QUFDWixRQUFNO0FBQUU2RixjQUFGO0FBQWNDLGdCQUFkO0FBQTRCQztBQUE1QixNQUE4Q2xDLE9BQXBEOztBQUNBLFFBQU1tQyxPQUFPLEdBQUcsQ0FBQztBQUFFQztBQUFGLEdBQUQsS0FDZCxNQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUV0RSxXQUFLLEVBQUU7QUFBVCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3NFLFVBQVUsSUFDTkEsVUFBVSxDQUFDbEMsTUFBWCxHQUFvQixDQUR4QixJQUVJa0MsVUFBVSxDQUFDakMsR0FBWCxDQUFnQjVFLFNBQUQsSUFDaEIsTUFBQyxRQUFEO0FBQ0Usd0JBQW9CLEVBQUVxRixvQkFEeEI7QUFFRSxhQUFTLEVBQUMsZUFGWjtBQUdFLE9BQUcsRUFBRXJGLFNBQVMsQ0FBQ0csR0FIakI7QUFJRSxhQUFTLEVBQUVILFNBSmI7QUFLRSxZQUFRLEVBQUVKLFFBTFo7QUFNRSxVQUFNLEVBQUVHLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURDLENBSFAsQ0FERjs7QUFpQkEsUUFBTStHLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFVBQU07QUFBRW5DO0FBQUYsUUFBYTVMLElBQW5COztBQUNBLFFBQUk0TCxNQUFNLElBQUksRUFBZCxFQUFrQjtBQUNoQixhQUNFLE1BQUMsd0NBQUQ7QUFBSyxhQUFLLEVBQUU7QUFBRXBDLGVBQUssRUFBRTtBQUFULFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHbUUsWUFBWSxJQUFJQSxZQUFZLENBQUMvQixNQUFiLEdBQXNCLENBQXRDLEdBQ0MsbUVBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQXFCLFVBQUUsRUFBRSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0c1TCxJQUFJLElBQ0FBLElBQUksQ0FBQzRMLE1BQUwsR0FBYyxDQURsQixJQUVJNUwsSUFBSSxDQUFDNkwsR0FBTCxDQUFVNUUsU0FBRCxJQUNWLE1BQUMsUUFBRDtBQUNFLDRCQUFvQixFQUFFcUYsb0JBRHhCO0FBRUUsaUJBQVMsRUFBQyxvQ0FGWjtBQUdFLFdBQUcsRUFBRXJGLFNBQVMsQ0FBQ0csR0FIakI7QUFJRSxpQkFBUyxFQUFFSCxTQUpiO0FBS0UsZ0JBQVEsRUFBRUosUUFMWjtBQU1FLGNBQU0sRUFBRSxNQUFNRyxNQUFNLENBQUNDLFNBQUQsQ0FOdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURDLENBSFAsQ0FERixDQURGLEVBaUJFLE1BQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFZLFVBQUUsRUFBRSxDQUFoQjtBQUFtQixVQUFFLEVBQUUsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0VBQUQ7QUFDRSxrQkFBVSxFQUFDLGVBRGI7QUFFRSxlQUFPLEVBQUUwRyxZQUZYO0FBR0Usa0JBQVUsRUFBRTtBQUFFSyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJ4RSxlQUFLLEVBQUU7QUFBMUIsU0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FqQkYsQ0FERCxHQTJCQ3hKLElBQUksSUFDREEsSUFBSSxDQUFDNEwsTUFBTCxHQUFjLENBRGpCLElBRUc1TCxJQUFJLENBQUM2TCxHQUFMLENBQVU1RSxTQUFELElBQ1YsTUFBQyxRQUFEO0FBQ0UsNEJBQW9CLEVBQUVxRixvQkFEeEI7QUFFRSxpQkFBUyxFQUFDLGVBRlo7QUFHRSxXQUFHLEVBQUVyRixTQUFTLENBQUNHLEdBSGpCO0FBSUUsaUJBQVMsRUFBRUgsU0FKYjtBQUtFLGdCQUFRLEVBQUVKLFFBTFo7QUFNRSxjQUFNLEVBQUUsTUFBTUcsTUFBTSxDQUFDQyxTQUFELENBTnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQyxDQTlCUCxDQURGO0FBNENEOztBQUNELFFBQUkyRSxNQUFNLEdBQUcsRUFBVCxJQUFlQSxNQUFNLElBQUksRUFBN0IsRUFBaUM7QUFDL0IsWUFBTXFDLFNBQVMsR0FBR0Msb0RBQUssQ0FBQ2xPLElBQUQsRUFBTyxFQUFQLENBQXZCO0FBQ0EsYUFDRSxtRUFDRzJOLFlBQVksSUFBSUEsWUFBWSxDQUFDL0IsTUFBYixHQUFzQixDQUF0QyxHQUNDLG1FQUNFLE1BQUMsd0NBQUQ7QUFBSyxhQUFLLEVBQUU7QUFBRXBDLGVBQUssRUFBRTtBQUFULFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxFQUFqQjtBQUFxQixVQUFFLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHeUUsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUNJQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFyQyxNQUFiLEdBQXNCLENBRDFCLElBRUlxQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFwQyxHQUFiLENBQWtCNUUsU0FBRCxJQUNsQixNQUFDLFFBQUQ7QUFDRSw0QkFBb0IsRUFBRXFGLG9CQUR4QjtBQUVFLGlCQUFTLEVBQUMsb0NBRlo7QUFHRSxXQUFHLEVBQUVyRixTQUFTLENBQUNHLEdBSGpCO0FBSUUsaUJBQVMsRUFBRUgsU0FKYjtBQUtFLGdCQUFRLEVBQUVKLFFBTFo7QUFNRSxjQUFNLEVBQUUsTUFBTUcsTUFBTSxDQUFDQyxTQUFELENBTnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQyxDQUhQLENBREYsQ0FERixFQWlCRSxNQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBbUIsVUFBRSxFQUFFLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRzBHLFlBQVksSUFBSUEsWUFBWSxDQUFDL0IsTUFBYixHQUFzQixDQUF0QyxJQUNDLE1BQUMsd0VBQUQ7QUFDRSxrQkFBVSxFQUFDLGVBRGI7QUFFRSxlQUFPLEVBQUUrQixZQUZYO0FBR0Usa0JBQVUsRUFBRTtBQUFFSyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJ4RSxlQUFLLEVBQUU7QUFBMUIsU0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FqQkYsQ0FERixFQTRCRSxNQUFDLE9BQUQ7QUFBUyxrQkFBVSxFQUFFeUUsU0FBUyxDQUFDLENBQUQsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTVCRixDQURELEdBZ0NDLE1BQUMsT0FBRDtBQUFTLGtCQUFVLEVBQUVqTyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBakNKLENBREY7QUFzQ0Q7O0FBQ0QsUUFBSTRMLE1BQU0sR0FBRyxFQUFULElBQWVBLE1BQU0sSUFBSSxFQUE3QixFQUFpQztBQUMvQixZQUFNcUMsU0FBUyxHQUFHQyxvREFBSyxDQUFDbE8sSUFBRCxFQUFPLEVBQVAsQ0FBdkI7QUFDQSxhQUNFLG1FQUNFLE1BQUMsT0FBRDtBQUFTLGtCQUFVLEVBQUVpTyxTQUFTLENBQUMsQ0FBRCxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFR04sWUFBWSxJQUFJQSxZQUFZLENBQUMvQixNQUFiLEdBQXNCLENBQXRDLEdBQ0MsTUFBQyx3Q0FBRDtBQUFLLGFBQUssRUFBRTtBQUFFcEMsZUFBSyxFQUFFO0FBQVQsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQXFCLFVBQUUsRUFBRSxFQUF6QjtBQUE2QixVQUFFLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHeUUsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUNJQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFyQyxNQUFiLEdBQXNCLENBRDFCLElBRUlxQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFwQyxHQUFiLENBQWtCNUUsU0FBRCxJQUNsQixNQUFDLFFBQUQ7QUFDRSw0QkFBb0IsRUFBRXFGLG9CQUR4QjtBQUVFLGlCQUFTLEVBQUMsb0NBRlo7QUFHRSxXQUFHLEVBQUVyRixTQUFTLENBQUNHLEdBSGpCO0FBSUUsaUJBQVMsRUFBRUgsU0FKYjtBQUtFLGdCQUFRLEVBQUVKLFFBTFo7QUFNRSxjQUFNLEVBQUUsTUFBTUcsTUFBTSxDQUFDQyxTQUFELENBTnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQyxDQUhQLENBREYsQ0FERixFQWlCRSxNQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQTBCLFVBQUUsRUFBRSxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx3RUFBRDtBQUNFLGtCQUFVLEVBQUMsZUFEYjtBQUVFLGVBQU8sRUFBRTBHLFlBRlg7QUFHRSxrQkFBVSxFQUFFO0FBQUVLLGlCQUFPLEVBQUUsTUFBWDtBQUFtQnhFLGVBQUssRUFBRTtBQUExQixTQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQWpCRixDQURELEdBMkJDLE1BQUMsT0FBRDtBQUFTLGtCQUFVLEVBQUV5RSxTQUFTLENBQUMsQ0FBRCxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBN0JKLEVBK0JFLE1BQUMsT0FBRDtBQUFTLGtCQUFVLEVBQUVBLFNBQVMsQ0FBQyxDQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUEvQkYsQ0FERjtBQW1DRDs7QUFDRCxRQUFJckMsTUFBTSxHQUFHLEVBQWIsRUFBaUI7QUFDZixZQUFNcUMsU0FBUyxHQUFHQyxvREFBSyxDQUFDbE8sSUFBRCxFQUFPLEVBQVAsQ0FBdkI7QUFDQSxZQUFNbU8sYUFBYSxHQUFHRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBdEI7QUFDQSxhQUNFLG1FQUNFLE1BQUMsT0FBRDtBQUFTLGtCQUFVLEVBQUVILFNBQVMsQ0FBQyxDQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVHTixZQUFZLElBQUlBLFlBQVksQ0FBQy9CLE1BQWIsR0FBc0IsQ0FBdEMsR0FDQyxNQUFDLHdDQUFEO0FBQUssYUFBSyxFQUFFO0FBQUVwQyxlQUFLLEVBQUU7QUFBVCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBcUIsVUFBRSxFQUFFLEVBQXpCO0FBQTZCLFVBQUUsRUFBRSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0d5RSxTQUFTLENBQUMsQ0FBRCxDQUFULElBQ0lBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXJDLE1BQWIsR0FBc0IsQ0FEMUIsSUFFSXFDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXBDLEdBQWIsQ0FBa0I1RSxTQUFELElBQ2xCLE1BQUMsUUFBRDtBQUNFLDRCQUFvQixFQUFFcUYsb0JBRHhCO0FBRUUsaUJBQVMsRUFBQyxvQ0FGWjtBQUdFLFdBQUcsRUFBRXJGLFNBQVMsQ0FBQ0csR0FIakI7QUFJRSxpQkFBUyxFQUFFSCxTQUpiO0FBS0UsZ0JBQVEsRUFBRUosUUFMWjtBQU1FLGNBQU0sRUFBRSxNQUFNRyxNQUFNLENBQUNDLFNBQUQsQ0FOdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURDLENBSFAsQ0FERixDQURGLEVBaUJFLE1BQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFZLFVBQUUsRUFBRSxDQUFoQjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBMEIsVUFBRSxFQUFFLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdFQUFEO0FBQ0Usa0JBQVUsRUFBQyxlQURiO0FBRUUsZUFBTyxFQUFFMEcsWUFGWDtBQUdFLGtCQUFVLEVBQUU7QUFBRUssaUJBQU8sRUFBRSxNQUFYO0FBQW1CeEUsZUFBSyxFQUFFO0FBQTFCLFNBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBakJGLENBREQsR0EyQkMsTUFBQyxPQUFEO0FBQVMsa0JBQVUsRUFBRXlFLFNBQVMsQ0FBQyxDQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE3QkosRUErQkUsTUFBQyxPQUFEO0FBQVMsa0JBQVUsRUFBRUEsU0FBUyxDQUFDLENBQUQsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQS9CRixFQWdDR0UsYUFBYSxDQUFDdkMsTUFBZCxHQUF1QixDQUF2QixJQUNJdUMsYUFBYSxDQUFDdEMsR0FBZCxDQUFtQndDLENBQUQsSUFDbkIsTUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFFQyw0REFBWSxFQUExQjtBQUE4QixrQkFBVSxFQUFFRCxDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREMsQ0FqQ1AsQ0FERjtBQXVDRDs7QUFDRCxXQUFPLGtFQUFQO0FBQ0QsR0EzS0Q7O0FBNktBLFFBQU1FLE9BQU8sR0FBRzdHLFNBQVMsSUFBSStGLEtBQUssR0FBRyxDQUFyQixHQUNaLENBQ0FBLEtBQUssR0FBRzVILEtBQVIsSUFDRSxNQUFDLCtDQUFEO0FBQ0UsWUFBUSxFQUFFeUgsU0FEWjtBQUVFLFdBQU8sRUFBRWtCLElBQUksQ0FBQ0MsS0FBTCxDQUFXN0ksTUFBTSxHQUFHQyxLQUFwQixJQUE2QixDQUZ4QztBQUdFLFlBQVEsRUFBRUEsS0FIWjtBQUlFLFNBQUssRUFBRTRILEtBSlQ7QUFLRSxRQUFJLEVBQUMsT0FMUDtBQU1FLFlBQVEsRUFBR2xQLElBQUQsSUFBVW1KLFNBQVMsQ0FBQyxRQUFELEVBQVcsQ0FBQ25KLElBQUksR0FBRyxDQUFSLElBQWFzSCxLQUF4QixDQU4vQjtBQU9FLG1CQUFlLEVBQUUsS0FQbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRFksR0FjWixFQWRKOztBQWdCQSxNQUFJZ0MsTUFBSixFQUFZO0FBQ1Y7QUFDSjtBQUNBO0FBQ0ksV0FDRSxNQUFDLHlDQUFEO0FBQ0UsZUFBUyxFQUFDLGdCQURaO0FBRUUsV0FBSyxFQUFFMEYsS0FGVDtBQUdFLGNBQVEsRUFBRSxLQUhaO0FBSUUsZUFBUyxFQUFFLEtBSmI7QUFLRSxlQUFTLEVBQUU7QUFBRVMsZUFBTyxFQUFFO0FBQVgsT0FMYjtBQU1FLGFBQU8sRUFBRU8sT0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUUsTUFBQyxzRUFBRDtBQUFRLGNBQVEsRUFBRWpCLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixFQVNHdE4sSUFBSSxDQUFDNEwsTUFBTCxHQUFjLENBQWQsSUFBbUI1TCxJQUFJLENBQUM2TCxHQUFMLENBQVU1RSxTQUFELElBQWVZLE1BQU0sQ0FBQ1osU0FBRCxDQUE5QixDQVR0QixDQURGO0FBYUQ7O0FBRUQsU0FDRSxtRUFDR3VHLE1BQU0sSUFBSSxDQUFBRSxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRTlCLE1BQVosSUFBcUIsQ0FBL0IsSUFDQyxNQUFDLHdFQUFEO0FBQ0UsV0FBTyxFQUFFOEIsVUFEWDtBQUVFLGNBQVUsRUFBRTtBQUFFTSxhQUFPLEVBQUUsTUFBWDtBQUFtQnhFLFdBQUssRUFBRTtBQUExQixLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQU9FLE1BQUMseUNBQUQ7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxTQUFLLEVBQUUrRCxLQUZUO0FBR0UsWUFBUSxFQUFFLEtBSFo7QUFJRSxhQUFTLEVBQUUsS0FKYjtBQUtFLGFBQVMsRUFBRTtBQUFFUyxhQUFPLEVBQUU7QUFBWCxLQUxiO0FBTUUsV0FBTyxFQUFFTyxPQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLHNFQUFEO0FBQVEsWUFBUSxFQUFFakIsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0dyWixPQUFPLENBQ047QUFETSxNQUVGd1osS0FBSyxHQUFHLENBQVIsR0FDRkQsTUFBTSxHQUNKTyxVQUFVLEVBRE4sR0FHSi9OLElBQUksQ0FBQzZMLEdBQUwsQ0FBVTVFLFNBQUQsSUFDUCxNQUFDLFFBQUQ7QUFDRSxPQUFHLEVBQUVBLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFFRyxHQURsQjtBQUVFLHdCQUFvQixFQUFFa0Ysb0JBRnhCO0FBR0UsYUFBUyxFQUFDLGVBSFo7QUFJRSxhQUFTLEVBQUVyRixTQUpiO0FBS0UsWUFBUSxFQUFFSixRQUxaO0FBTUUsVUFBTSxFQUFHelIsQ0FBRCxJQUFtQjRSLE1BQU0sQ0FBQzVSLENBQUQsQ0FObkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkEsR0FnQkY7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxCSSxDQVRWLENBUEYsRUFxQ0dvWSxNQUFNLElBQUksQ0FBQUksYUFBYSxTQUFiLElBQUFBLGFBQWEsV0FBYixZQUFBQSxhQUFhLENBQUVoQyxNQUFmLElBQXdCLENBQWxDLElBQ0MsTUFBQyx3RUFBRDtBQUNFLFdBQU8sRUFBRWdDLGFBRFg7QUFFRSxjQUFVLEVBQUU7QUFBRUksYUFBTyxFQUFFLE1BQVg7QUFBbUJ4RSxXQUFLLEVBQUU7QUFBMUIsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdENKLENBREY7QUE4Q0QsQ0FoU0Q7O0FBaVNBNkQsYUFBYSxDQUFDdkIsWUFBZCxHQUE2QjtBQUMzQmpGLFVBQVEsRUFBRSxLQURpQjtBQUUzQmEsV0FBUyxFQUFFLElBRmdCO0FBRzNCN0IsT0FBSyxFQUFFLENBSG9CO0FBSTNCRCxRQUFNLEVBQUUsQ0FKbUI7QUFLM0I2SCxPQUFLLEVBQUUsQ0FMb0I7QUFNM0J4WixTQUFPLEVBQUUsS0FOa0I7QUFPM0JxWixXQUFTLEVBQUUsS0FQZ0I7QUFRM0JDLE9BQUssRUFBRSxFQVJvQjtBQVMzQnZHLFFBQU0sRUFBRSxJQVRtQjtBQVUzQmEsUUFBTSxFQUFFLElBVm1CO0FBVzNCMkYsUUFBTSxFQUFFLEtBWG1CO0FBWTNCOUIsU0FBTyxFQUFFLEVBWmtCO0FBYTNCWSxzQkFBb0IsRUFBRTtBQWJLLENBQTdCOztBQWdCQSxNQUFNb0MsY0FBYyxHQUFJMVMsS0FBRCxJQUFXQSxLQUFLLENBQUNtUCxNQUFOLENBQWF3RCxXQUFiLENBQXlCM08sSUFBM0Q7O0FBQ0EsTUFBTTRPLFlBQVksR0FBR0MsOERBQWMsQ0FBQ0gsY0FBRCxFQUFrQmhELE9BQUQsSUFBYTtBQUMvRCxNQUFJLENBQUNBLE9BQU8sQ0FBQ0UsTUFBYixFQUFxQixPQUFPLEVBQVA7QUFFckIsU0FBTztBQUNMOEIsY0FBVSxFQUFFaEMsT0FBTyxDQUFDb0QsTUFBUixDQUFnQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLFFBQUYsS0FBZSxLQUFyQyxDQURQO0FBRUxyQixnQkFBWSxFQUFFakMsT0FBTyxDQUFDb0QsTUFBUixDQUFnQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLFFBQUYsS0FBZSxPQUFyQyxDQUZUO0FBR0xwQixpQkFBYSxFQUFFbEMsT0FBTyxDQUFDb0QsTUFBUixDQUFnQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLFFBQUYsS0FBZSxRQUFyQztBQUhWLEdBQVA7QUFLRCxDQVJrQyxDQUFuQzs7QUFTQSxNQUFNQyxTQUFTLEdBQUlqVCxLQUFELEtBQWlCO0FBQ2pDc1Esc0JBQW9CLEVBQUV0USxLQUFLLENBQUNnTSxFQUFOLENBQVNzRSxvQkFERTtBQUVqQ1osU0FBTyxFQUFFa0QsWUFBWSxDQUFDNVMsS0FBRDtBQUZZLENBQWpCLENBQWxCOztBQUtlZ04sMkhBQU8sQ0FBQ2lHLFNBQUQsQ0FBUCxDQUFtQjVCLGFBQW5CLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmZBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7O0FBY0EsTUFBTTZCLGVBQWUsR0FBRyxDQUFDO0FBQ3ZCbkgsV0FEdUI7QUFFdkJELFlBRnVCO0FBR3ZCSixXQUh1QjtBQUl2QjNCLFVBSnVCO0FBS3ZCQyxTQUx1QjtBQU12QkYsUUFOdUI7QUFPdkI4QjtBQVB1QixDQUFELEtBUVY7QUFDWixRQUFNLENBQUN1SCxPQUFELEVBQVVDLFVBQVYsSUFBd0JqYSw0Q0FBSyxDQUFDa2EsUUFBTixDQUF3QixLQUF4QixDQUE5QjtBQUNBLFFBQU0sQ0FBQ0MsZ0JBQUQsRUFBbUJDLG1CQUFuQixJQUEwQ3BhLDRDQUFLLENBQUNrYSxRQUFOLENBQXlCLEVBQXpCLENBQWhEO0FBQ0EsUUFBTSxDQUFDRyxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEdGEsNENBQUssQ0FBQ2thLFFBQU4sRUFBdEQ7O0FBQ0EsUUFBTUssWUFBWSxHQUFJNU4sSUFBRCxJQUFvQjtBQUN2QyxVQUFNNk4sUUFBUSxHQUFHN04sSUFBSSxDQUFDZ04sTUFBTCxDQUFhMWEsR0FBRCxJQUFTQSxHQUFHLEtBQUtvYixtQkFBN0IsQ0FBakI7QUFDQUQsdUJBQW1CLENBQUNJLFFBQUQsQ0FBbkI7QUFDQUYsMEJBQXNCLENBQUNFLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBdEI7QUFDRCxHQUpEOztBQUtBLFNBQ0UsbUVBQ0UsTUFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQW9CLGFBQVMsRUFBQyxrQkFBOUI7QUFBaUQsV0FBTyxFQUFDLGVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsUUFBSSxFQUFFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxXQUFPLEVBQUUsTUFBTVAsVUFBVSxDQUFDLElBQUQsQ0FIM0I7QUFJRSxhQUFTLEVBQUMsTUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFTRSxNQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFDLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRVEsZ0JBQVUsRUFBRTtBQUFkLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFLE1BQUMsMkNBQUQ7QUFDRSxXQUFPLEVBQUVoSSxXQURYO0FBRUUsYUFBUyxFQUFFK0QsaURBQVUsQ0FBQzdGLE1BQU0sS0FBSyxFQUFYLEdBQWdCLFFBQWhCLEdBQTJCLEVBQTVCLENBRnZCO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBU0UsTUFBQywyQ0FBRDtBQUNFLFdBQU8sRUFBRSxNQUFNNEIsU0FBUyxDQUFDLFFBQUQsRUFBVzVCLE1BQU0sS0FBSyxRQUFYLEdBQXNCLEVBQXRCLEdBQTJCLFFBQXRDLENBRDFCO0FBRUUsYUFBUyxFQUFFNkYsaURBQVUsQ0FBQzdGLE1BQU0sS0FBSyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLEVBQWxDLENBRnZCO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLEVBZ0JFLE1BQUMsMkNBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBTTRCLFNBQVMsQ0FBQyxRQUFELEVBQVc1QixNQUFNLEtBQUssYUFBWCxHQUEyQixFQUEzQixHQUFnQyxhQUEzQyxDQUQxQjtBQUVFLGFBQVMsRUFBRTZGLGlEQUFVLENBQUM3RixNQUFNLEtBQUssYUFBWCxHQUEyQixRQUEzQixHQUFzQyxFQUF2QyxDQUZ2QjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGLEVBdUJFLE1BQUMsMkNBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBTTRCLFNBQVMsQ0FBQyxRQUFELEVBQVc1QixNQUFNLEtBQUssTUFBWCxHQUFvQixFQUFwQixHQUF5QixNQUFwQyxDQUQxQjtBQUVFLGFBQVMsRUFBRTZGLGlEQUFVLENBQUM3RixNQUFNLEtBQUssTUFBWCxHQUFvQixRQUFwQixHQUErQixFQUFoQyxDQUZ2QjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsQ0FURixDQURGLENBREYsRUE0Q0UsTUFBQywyQ0FBRDtBQUNFLFdBQU8sRUFBRXFKLE9BRFg7QUFFRSxhQUFTLEVBQUMsTUFGWjtBQUdFLFdBQU8sRUFBRSxNQUFNQyxVQUFVLENBQUMsS0FBRCxDQUgzQjtBQUlFLFNBQUssRUFDSCxNQUFDLHdDQUFEO0FBQUssYUFBTyxFQUFDLGVBQWI7QUFBNkIsV0FBSyxFQUFDLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFPLEVBQUUsTUFBTXhILFdBQVcsRUFGNUI7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLFdBQUssRUFBRTtBQUFFb0UsbUJBQVcsRUFBRTtBQUFmLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQUZGLENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXFCRSxNQUFDLHlDQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUU7QUFBRTZELGlCQUFXLEVBQUU7QUFBZixLQUZUO0FBR0UsWUFBUSxFQUFFLEtBSFo7QUFJRSxZQUFRLEVBQUUsQ0FBQztBQUFFemI7QUFBRixLQUFELEtBQWFzVCxTQUFTLENBQUMsVUFBRCxFQUFhdFQsR0FBYixDQUpsQztBQUtFLGNBQVUsRUFBRSxNQUFNc1QsU0FBUyxDQUFDLFVBQUQsRUFBYSxFQUFiLENBTDdCO0FBTUUsZ0JBQVksRUFBRSxDQUFDM0IsUUFBRCxDQU5oQjtBQU9FLFlBQVEsRUFBRXVKLGdCQVBaO0FBUUUsZ0JBQVksRUFBRUksWUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMseUNBQUQsQ0FBTSxPQUFOO0FBQWMsU0FBSyxFQUFDLFVBQXBCO0FBQStCLE9BQUcsRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1SCxVQUFVLENBQUM4RCxNQUFYLEdBQW9CLENBQXBCLElBQ0k5RCxVQUFVLENBQUMrRCxHQUFYLENBQWdCaUUsQ0FBRCxJQUNoQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBRUEsQ0FBQyxDQUFDMUksR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QjBJLENBQUMsQ0FBQ2pZLElBQTFCLENBREMsQ0FGUCxDQVZGLENBckJGLEVBc0NFLE1BQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFNBQUssRUFBRTtBQUFFZ1ksaUJBQVcsRUFBRTtBQUFmLEtBRlQ7QUFHRSxZQUFRLEVBQUUsQ0FBQztBQUFFemI7QUFBRixLQUFELEtBQWFzVCxTQUFTLENBQUMsUUFBRCxFQUFXdFQsR0FBWCxDQUhsQztBQUlFLGNBQVUsRUFBRSxNQUFNc1QsU0FBUyxDQUFDLFFBQUQsRUFBVyxFQUFYLENBSjdCO0FBS0UsZ0JBQVksRUFBRSxDQUFDNUIsTUFBRCxDQUxoQjtBQU1FLFlBQVEsRUFBRXdKLGdCQU5aO0FBT0UsZ0JBQVksRUFBRUksWUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMseUNBQUQsQ0FBTSxPQUFOO0FBQWMsU0FBSyxFQUFDLFFBQXBCO0FBQTZCLE9BQUcsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixDQVRGLENBdENGLEVBc0RFLE1BQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFNBQUssRUFBRTtBQUFFRyxpQkFBVyxFQUFFO0FBQWYsS0FGVDtBQUdFLFlBQVEsRUFBRSxLQUhaO0FBSUUsWUFBUSxFQUFFLENBQUM7QUFBRXpiO0FBQUYsS0FBRCxLQUFhc1QsU0FBUyxDQUFDLFNBQUQsRUFBWXRULEdBQVosQ0FKbEM7QUFLRSxjQUFVLEVBQUUsTUFBTXNULFNBQVMsQ0FBQyxTQUFELEVBQVksRUFBWixDQUw3QjtBQU1FLGdCQUFZLEVBQUUsQ0FBQzFCLE9BQUQsQ0FOaEI7QUFPRSxZQUFRLEVBQUVzSixnQkFQWjtBQVFFLGdCQUFZLEVBQUVJLFlBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLHlDQUFELENBQU0sT0FBTjtBQUFjLFNBQUssRUFBQyxTQUFwQjtBQUE4QixPQUFHLEVBQUMsU0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHM0gsU0FBUyxDQUFDNkQsTUFBVixHQUFtQixDQUFuQixJQUNJN0QsU0FBUyxDQUFDOEQsR0FBVixDQUFlaUUsQ0FBRCxJQUNmLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFFQSxDQUFDLENBQUNqWSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCaVksQ0FBQyxDQUFDalksSUFBM0IsQ0FEQyxDQUZQLENBVkYsQ0F0REYsQ0E1Q0YsQ0FERjtBQXVIRCxDQXhJRDs7QUF5SUFxWCxlQUFlLENBQUNwRCxZQUFoQixHQUErQjtBQUM3Qi9ELFdBQVMsRUFBRSxFQURrQjtBQUU3QkQsWUFBVSxFQUFFLEVBRmlCO0FBRzdCO0FBQ0E7QUFDQWhDLFFBQU0sRUFBRSxFQUxxQjtBQU03QkMsVUFBUSxFQUFFLEVBTm1CO0FBTzdCQyxTQUFPLEVBQUU7QUFQb0IsQ0FBL0I7QUFVZWtKLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTYSxVQUFULENBQW9CQyxJQUFwQixFQUFnQ0MsTUFBTSxHQUFHLHFCQUF6QyxFQUFnRTtBQUNyRSxTQUFPQyw2Q0FBTSxDQUFDRixJQUFELENBQU4sQ0FBYUMsTUFBYixDQUFvQkEsTUFBcEIsQ0FBUDtBQUNEO0FBRU0sU0FBU0UsY0FBVCxDQUF3QkMsUUFBeEIsRUFBMENILE1BQU0sR0FBRyxPQUFuRCxFQUE0RDtBQUNqRSxTQUFPQyw2Q0FBTSxDQUNWRyxHQURJLENBQ0FILDZDQUFNLENBQUNFLFFBQVAsQ0FBZ0JBLFFBQWhCLEVBQTBCLGNBQTFCLEVBQTBDRSxjQUExQyxFQURBLEVBRUpMLE1BRkksQ0FFR0EsTUFGSCxDQUFQO0FBR0Q7QUFFTSxTQUFTTSxRQUFULENBQWtCUCxJQUFsQixFQUFnQ0MsTUFBTSxHQUFHLGVBQXpDLEVBQTBEO0FBQy9ELFNBQU9DLDZDQUFNLENBQUNGLElBQUQsQ0FBTixDQUFhQyxNQUFiLENBQW9CQSxNQUFwQixDQUFQO0FBQ0Q7QUFFTSxTQUFTTyxNQUFULENBQWdCUixJQUFoQixFQUFvQztBQUN6QyxTQUFPRSw2Q0FBTSxHQUFHTyxJQUFULENBQWNQLDZDQUFNLENBQUNGLElBQUQsQ0FBTixDQUFhQyxNQUFiLENBQW9CLFlBQXBCLENBQWQsRUFBaUQsT0FBakQsRUFBMERTLFFBQTFELEVBQVA7QUFDRDtBQUVNLFNBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQW1DO0FBQ3hDLFFBQU1DLEtBQUssR0FBR3JDLElBQUksQ0FBQ3NDLEtBQUwsQ0FBV0YsQ0FBQyxHQUFHLElBQWYsQ0FBZDtBQUNBLFFBQU1HLE9BQU8sR0FBR3ZDLElBQUksQ0FBQ3NDLEtBQUwsQ0FBVyxDQUFDRixDQUFDLEdBQUdDLEtBQUssR0FBRyxJQUFiLElBQXFCLEVBQWhDLENBQWhCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHSixDQUFDLEdBQUdDLEtBQUssR0FBRyxJQUFaLEdBQW1CRSxPQUFPLEdBQUcsRUFBN0M7QUFDQSxTQUFRLEdBQUVGLEtBQUssR0FBRyxFQUFSLEdBQWEsR0FBYixHQUFtQixFQUFHLEdBQUVBLEtBQU0sSUFDdENFLE9BQU8sR0FBRyxFQUFWLEdBQWUsR0FBZixHQUFxQixFQUN0QixHQUFFQSxPQUFRLElBQUdDLE9BQU8sR0FBRyxFQUFWLEdBQWUsR0FBZixHQUFxQixFQUFHLEdBQUVBLE9BQVEsRUFGaEQ7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHTyxTQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBbUQ7QUFDeEQsUUFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNyWixJQUFMLENBQVV1WixLQUFWLENBQWdCLEdBQWhCLEVBQXFCQyxHQUFyQixHQUEyQkMsV0FBM0IsRUFBWjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msd0VBQWUsRUFBOUI7QUFDQSxRQUFNQyxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csd0JBQVAsQ0FDbkJOLEtBRG1CLENBQ2IsR0FEYSxFQUVuQnZGLEdBRm1CLENBRWQ1SSxJQUFELElBQWtCQSxJQUFJLENBQUMwTyxJQUFMLEVBRkgsRUFHbkJDLE9BSG1CLENBR1YsSUFBR1QsR0FBSSxFQUhHLENBQXRCOztBQUlBLE1BQUlNLGFBQWEsS0FBSyxDQUFDLENBQXZCLEVBQTBCO0FBQ3hCdGEsZ0RBQU8sQ0FBQytHLEtBQVIsQ0FBZSx1QkFBc0JxVCxNQUFNLENBQUNHLHdCQUF5QixRQUFyRTtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFFBQU1HLE1BQU0sR0FBR1gsSUFBSSxDQUFDWSxJQUFMLEdBQVksSUFBWixHQUFtQixJQUFuQixJQUEyQlAsTUFBTSxDQUFDUSxzQ0FBUCxJQUFpRCxDQUE1RSxDQUFmOztBQUNBLE1BQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1gxYSxnREFBTyxDQUFDK0csS0FBUixDQUNHLDJCQUEwQnFULE1BQU0sQ0FBQ1Esc0NBQVAsSUFBaUQsQ0FBRSxLQURoRjtBQUdBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRU8sTUFBTUMsdUJBQXVCLEdBQUcsWUFBOEI7QUFDbkUsTUFBSTtBQUNGLFVBQU14WCxHQUFHLEdBQUcsTUFBTXlYLEtBQUssQ0FBQ0Ysa0JBQUQsRUFBcUI7QUFDMUNHLGFBQU8sRUFBRTtBQUNQLHlCQUFpQixxQ0FEVjtBQUVQQyxjQUFNLEVBQUUsVUFGRDtBQUdQQyxlQUFPLEVBQUU7QUFIRjtBQURpQyxLQUFyQixDQUF2Qjs7QUFPQSxRQUNFNVgsR0FBRyxDQUFDaVMsTUFBSixLQUFlLEdBQWYsSUFDR2pTLEdBQUcsQ0FBQ2lTLE1BQUosS0FBZSxHQURsQixJQUVHalMsR0FBRyxDQUFDaVMsTUFBSixLQUFlLEdBRmxCLElBR0dqUyxHQUFHLENBQUNpUyxNQUFKLEtBQWUsR0FIbEIsSUFJSWpTLEdBQUcsQ0FBQ2lTLE1BQUosSUFBYyxHQUFkLElBQXFCalMsR0FBRyxDQUFDaVMsTUFBSixJQUFjLEdBTHpDLEVBTUU7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNGLEdBakJELENBaUJFLE9BQU80RixTQUFQLEVBQWtCO0FBQ2xCO0FBQ0FqZixXQUFPLENBQUNrZixHQUFSLENBQVlELFNBQVo7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQXZCTSxDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1FLGNBQWMsR0FBRztBQUM1QkMsVUFBUSxFQUFFO0FBQ1JDLE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUU7QUFESixLQURJO0FBSVJDLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUU7QUFESjtBQUpJLEdBRGtCO0FBUzVCRSxZQUFVLEVBQUU7QUFDVkgsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRTtBQURKLEtBRE07QUFJVkMsTUFBRSxFQUFFO0FBQ0ZELFVBQUksRUFBRTtBQURKO0FBSk07QUFUZ0IsQ0FBdkI7QUFtQkEsTUFBTUcsa0JBQWtCLEdBQUc7QUFDaENELFlBQVUsRUFBRTtBQUNWSCxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFLEVBREo7QUFFRi9NLFlBQU0sRUFBRTtBQUZOLEtBRE07QUFLVmdOLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUUsRUFESjtBQUVGL00sWUFBTSxFQUFFO0FBRk47QUFMTTtBQURvQixDQUEzQjtBQWFBLE1BQU1tTixZQUFZLEdBQUc7QUFDMUJDLGNBQVksRUFBRSxTQURZO0FBRTFCQyxjQUFZLEVBQUUsU0FGWTtBQUcxQkMsWUFBVSxFQUFFO0FBSGMsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDaENQO0FBQUE7QUFBTyxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QkMsVUFBUSxFQUFFLHlCQURvQjtBQUU5QkMsT0FBSyxFQUFFO0FBQ0xDLFNBQUssRUFBRSx1QkFERjtBQUVMQyxVQUFNLEVBQUU7QUFGSCxHQUZ1QjtBQU05QkEsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUREO0FBTnNCLENBQXpCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQWFBLFNBQVNDLFlBQVQsQ0FBcUNwSSxJQUFyQyxFQUE0RTtBQUMxRSxRQUFNcUksTUFBTSxHQUFHQyxrRUFBaUIsQ0FBVXRJLElBQVYsQ0FBaEM7O0FBQ0FxSSxRQUFNLENBQUNFLEVBQVAsR0FBYUMsS0FBRCxJQUFtQkgsTUFBTSxDQUFDaEQsUUFBUCxPQUFzQm1ELEtBQXJEOztBQUNBLFNBQU9ILE1BQVA7QUFDRDtBQUVEOzs7QUFDQSxTQUFTSSxpQkFBVCxDQUEyQkosTUFBM0IsRUFBMkNySSxJQUEzQyxFQUE4RDtBQUM1RCxTQUFPO0FBQ0wsS0FBQ3FJLE1BQUQsR0FBVUQsWUFBWSxDQUFDcEksSUFBRCxDQURqQjtBQUVMLEtBQUUsR0FBRXFJLE1BQU8sU0FBWCxHQUFzQkQsWUFBWSxDQUFFLEdBQUVwSSxJQUFLLFVBQVQsQ0FGN0I7QUFHTCxLQUFFLEdBQUVxSSxNQUFPLE1BQVgsR0FBbUJELFlBQVksQ0FBRSxHQUFFcEksSUFBSyxPQUFUO0FBSDFCLEdBQVA7QUFLRDs7QUFFRCxTQUFTMEksa0JBQVQsQ0FLRTFJLElBTEYsRUFVRTtBQUNBLFNBQU8sQ0FDTG9JLFlBQVksQ0FBYXBJLElBQWIsQ0FEUCxFQUVMb0ksWUFBWSxDQUFlLEdBQUVwSSxJQUFLLFVBQXRCLENBRlAsRUFHTG9JLFlBQVksQ0FBYSxHQUFFcEksSUFBSyxPQUFwQixDQUhQLENBQVA7QUFLRDtBQUVEOzs7QUFDQSxTQUFTMkksYUFBVCxDQUF1QnpGLE9BQXZCLEVBQXFDMEYsWUFBckMsRUFBd0Q7QUFDdEQsU0FBT0MsbUVBQWtCLENBQ3ZCQyxxREFBTSxDQUNKNUYsT0FESSxFQUVKLENBQUM2RixPQUFELEVBQWVsYyxPQUFmLEVBQXdCd2IsTUFBeEIsS0FBbUM7QUFDakNVLFdBQU8sQ0FBQ1YsTUFBRCxDQUFQLEdBQWtCLENBQUMxWCxLQUFELEVBQWFxWSxHQUFiLEtBQTBCbmMsT0FBTyxDQUFDOEQsS0FBSyxDQUFDNkMsR0FBTixDQUFVLFFBQVYsRUFBb0I2VSxNQUFwQixDQUFELEVBQThCVyxHQUE5QixDQUFuRDs7QUFDQSxXQUFPRCxPQUFQO0FBQ0QsR0FMRyxFQU1KLEVBTkksQ0FEaUIsRUFTdkJILFlBVHVCLENBQXpCO0FBV0Q7O0FBRUQsU0FBU0ssY0FBVCxDQUNFQyxZQURGLEVBRUVDLFFBRkYsRUFHRVAsWUFIRixFQUlFUSxnQkFBeUIsR0FBRyxLQUo5QixFQUtPO0FBQ0wsU0FBTztBQUNMLEtBQUNGLFlBQUQsR0FBZ0JMLG1FQUFrQixDQUNoQ0MscURBQU0sQ0FDSk8sc0RBQU8sQ0FBQ0YsUUFBRCxDQURILEVBRUosQ0FBQ0osT0FBRCxFQUFlVixNQUFmLEtBQStCO0FBQzdCLFVBQUlpQixzREFBTyxDQUFDakIsTUFBTSxDQUFDM2IsRUFBUixDQUFYLEVBQXdCO0FBQ3RCMmIsY0FBTSxDQUFDM2IsRUFBUCxDQUFVNmMsT0FBVixDQUFtQlAsR0FBRCxJQUFjO0FBQzlCRCxpQkFBTyxDQUFDQyxHQUFELENBQVAsR0FBZVgsTUFBTSxDQUFDVSxPQUF0QjtBQUNELFNBRkQ7QUFHRCxPQUpELE1BSU9BLE9BQU8sQ0FBQ1YsTUFBTSxDQUFDM2IsRUFBUixDQUFQLEdBQXFCMmIsTUFBTSxDQUFDVSxPQUE1Qjs7QUFDUCxhQUFPQSxPQUFQO0FBQ0QsS0FURyxFQVVKSyxnQkFBZ0IsR0FDWixFQURZLEdBRVo7QUFDQUkscUJBQWUsRUFBRSxNQUFNWjtBQUR2QixLQVpBLENBRDBCLEVBaUJoQ0EsWUFqQmdDO0FBRDdCLEdBQVA7QUFxQkQ7O0FBRU0sU0FBU2EsV0FBVCxDQUFxQkMsS0FBckIsRUFBMEM7QUFDL0MsU0FBT0wsc0RBQU8sQ0FBQ0ssS0FBRCxDQUFQLENBQWVsSixHQUFmLENBQW9CbUosSUFBRCxJQUFlO0FBQ3ZDLFVBQU07QUFBRWpkLFFBQUY7QUFBTWtkLFlBQU0sR0FBR0MsNkRBQWY7QUFBMkJDO0FBQTNCLFFBQXNDSCxJQUE1QztBQUNBLFdBQU8sYUFBYTtBQUNsQixZQUFNQyxNQUFNLENBQUNsZCxFQUFELEVBQUssV0FBVzJiLE1BQVgsRUFBd0I7QUFDdkMsY0FBTTBCLGdFQUFLLENBQUMsQ0FBRCxDQUFYO0FBQ0EsY0FBTUQsTUFBTSxDQUFDekIsTUFBRCxDQUFaO0FBQ0QsT0FIVyxDQUFaO0FBSUQsS0FMRDtBQU1ELEdBUk0sQ0FBUDtBQVNEOztBQUVELFNBQVMyQixnQkFBVCxDQUEwQjVPLE9BQTFCLEVBQTJDM0UsSUFBVyxHQUFHLEVBQXpELEVBQWtFO0FBQ2hFLFFBQU13VCxhQUFhLEdBQUl0WixLQUFELElBQWdCQSxLQUFLLENBQUN5SyxPQUFELENBQTNDOztBQUVBLE1BQUk4TyxzREFBTyxDQUFDelQsSUFBRCxDQUFYLEVBQW1CLE9BQU93VCxhQUFQO0FBRW5CLFNBQU94VCxJQUFJLENBQUMrSixHQUFMLENBQVV6WCxHQUFELElBQWU0SCxLQUFELElBQWlCMlksc0RBQU8sQ0FBQ3ZnQixHQUFELENBQVAsR0FDM0NraEIsYUFBYSxDQUFDdFosS0FBRCxDQUFiLENBQXFCd1osS0FBckIsQ0FBMkJwaEIsR0FBM0IsQ0FEMkMsR0FFM0NraEIsYUFBYSxDQUFDdFosS0FBRCxDQUFiLENBQXFCbkYsR0FBckIsQ0FBeUJ6QyxHQUF6QixDQUZHLENBQVA7QUFHRDs7QUFFRCxTQUFTcWhCLGVBQVQsQ0FBeUJoUCxPQUF6QixFQUEwQzNFLElBQTFDLEVBQStEO0FBQzdELFFBQU13VCxhQUFhLEdBQUl0WixLQUFELElBQWdCQSxLQUFLLENBQUN5SyxPQUFELENBQTNDOztBQUVBLFNBQU8wTixxREFBTSxDQUNYclMsSUFEVyxFQUVYLENBQUM0VCxTQUFELEVBQWlCdGhCLEdBQWpCLEtBQXlCO0FBQ3ZCc2hCLGFBQVMsQ0FBRSxHQUFFdGhCLEdBQUksVUFBUixDQUFULEdBQStCNEgsS0FBRCxJQUFnQnNaLGFBQWEsQ0FBQ3RaLEtBQUQsQ0FBYixDQUFxQm5GLEdBQXJCLENBQXlCekMsR0FBekIsQ0FBOUM7O0FBQ0EsV0FBT3NoQixTQUFQO0FBQ0QsR0FMVSxFQU1YLEVBTlcsQ0FBYjtBQVFEOztBQUVELFNBQVNDLGlCQUFULENBQTJCbFAsT0FBM0IsRUFBNEMzRSxJQUE1QyxFQUFpRTtBQUMvRCxRQUFNd1QsYUFBYSxHQUFJdFosS0FBRCxJQUFnQkEsS0FBSyxDQUFDeUssT0FBRCxDQUEzQzs7QUFFQSxTQUFPME4scURBQU0sQ0FDWHJTLElBRFcsRUFFWCxDQUFDNFQsU0FBRCxFQUFpQnRoQixHQUFqQixLQUF5QjtBQUN2QnNoQixhQUFTLENBQUUsR0FBRXRoQixHQUFJLFVBQVIsQ0FBVCxHQUErQjRILEtBQUQsSUFBZ0JzWixhQUFhLENBQUN0WixLQUFELENBQWIsQ0FBcUI1SCxHQUFyQixDQUE5Qzs7QUFDQSxXQUFPc2hCLFNBQVA7QUFDRCxHQUxVLEVBTVgsRUFOVyxDQUFiO0FBUUQ7Ozs7Ozs7Ozs7Ozs7O0FDL0lEO0FBQUE7QUFBTyxNQUFNRSxtQkFBbUIsR0FBRztBQUNqQ0MsU0FBTyxFQUFFLElBQUlDLE1BQUosQ0FBVyxnQkFBWCxDQUR3QjtBQUVqQzNlLFNBQU8sRUFBRTtBQUZ3QixDQUE1QixDOzs7Ozs7Ozs7Ozs7QUNJUDtBQUFBLElBQUk0ZSxLQUFtQixHQUFHLElBQTFCO0FBRWU7QUFDYkMsVUFBUSxFQUFFLE1BQU1ELEtBREg7QUFFYkUsVUFBUSxFQUFHckYsQ0FBRCxJQUFjO0FBQ3RCbUYsU0FBSyxHQUFHbkYsQ0FBUjtBQUNEO0FBSlksQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXNGLHlCQUF5QixHQUFHLGNBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsY0FBbEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyxZQUFoQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLEVBQWpDO0FBRUEsU0FBU0MsU0FBVCxDQUFtQjVKLE1BQW5CLEVBQTJDO0FBQ2hELE1BQUk2SixNQUFNLEdBQUcsRUFBYjtBQUNBLFFBQU1SLEtBQUssR0FBR1Msb0RBQVcsQ0FBQ1IsUUFBWixFQUFkO0FBQ0EsUUFBTTtBQUFFL04sWUFBUSxHQUFHO0FBQWIsTUFBb0I4TixLQUFLLENBQUNVLFFBQU4sRUFBMUI7O0FBQ0EsVUFBUS9KLE1BQVI7QUFDRSxTQUFLLFNBQUw7QUFDRTZKLFlBQU0sR0FBR3RPLFFBQVEsQ0FBQ3lPLHVCQUFULElBQW9DUCx5QkFBN0M7QUFDQTs7QUFDRixTQUFLLFNBQUw7QUFDRUksWUFBTSxHQUFHdE8sUUFBUSxDQUFDME8sd0JBQVQsSUFBcUNULHlCQUE5QztBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFSyxZQUFNLEdBQUdGLHdCQUFUO0FBQ0E7O0FBQ0YsU0FBSyxPQUFMO0FBQ0VFLFlBQU0sR0FBR3RPLFFBQVEsQ0FBQzJPLHFCQUFULElBQWtDUix1QkFBM0M7QUFDQTs7QUFDRjtBQUNFRyxZQUFNLEdBQUdMLHlCQUFUO0FBQ0E7QUFmSjs7QUFpQkEsU0FBT0ssTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU00sS0FBVCxDQUFldGUsR0FBZixFQUFxQztBQUMxQyxTQUNFQSxHQUFHLENBQUN1ZSxLQUFKLENBQ0Usa0dBREYsTUFFTSxJQUhSO0FBS0Q7QUFFTSxNQUFNeEksWUFBWSxHQUFHLE1BQU0sdUNBQXVDdGEsT0FBdkMsQ0FBK0MsT0FBL0MsRUFBeUQ4YixDQUFELElBQU87QUFDL0Y7QUFDRSxRQUFNaUgsQ0FBQyxHQUFJdkksSUFBSSxDQUFDd0ksTUFBTCxLQUFnQixFQUFqQixHQUF1QixDQUFqQztBQUNBLFFBQU0zSSxDQUFDLEdBQUd5QixDQUFDLEtBQUssR0FBTixHQUFZaUgsQ0FBWixHQUFpQkEsQ0FBQyxHQUFHLEdBQUwsR0FBWSxHQUF0QztBQUNBLFNBQU8xSSxDQUFDLENBQUNxQyxRQUFGLENBQVcsRUFBWCxDQUFQO0FBQ0E7QUFDSCxDQU5pQyxDQUEzQjtBQVFBLFNBQVN1RyxxQkFBVCxDQUErQm5ULEdBQS9CLEVBQW9EO0FBQ3pELE1BQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sRUFBUDtBQUNWLFNBQU9BLEdBQUcsQ0FBQ29ULE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsS0FBOEJyVCxHQUFHLENBQUNzSyxLQUFKLENBQVUsQ0FBVixDQUFyQztBQUNEO0FBRU0sTUFBTWdKLFVBQTBDLEdBQUcsQ0FDeEQ7QUFDRWxlLE9BQUssRUFBRSxFQURUO0FBRUVtZSxNQUFJLEVBQUU7QUFGUixDQUR3RCxFQUt4RDtBQUNFbmUsT0FBSyxFQUFFLEVBRFQ7QUFFRW1lLE1BQUksRUFBRTtBQUZSLENBTHdELEVBU3hEO0FBQ0VuZSxPQUFLLEVBQUUsRUFEVDtBQUVFbWUsTUFBSSxFQUFFO0FBRlIsQ0FUd0QsRUFheEQ7QUFDRW5lLE9BQUssRUFBRSxFQURUO0FBRUVtZSxNQUFJLEVBQUU7QUFGUixDQWJ3RCxFQWlCeEQ7QUFDRW5lLE9BQUssRUFBRSxFQURUO0FBRUVtZSxNQUFJLEVBQUU7QUFGUixDQWpCd0QsRUFxQnhEO0FBQ0VuZSxPQUFLLEVBQUUsRUFEVDtBQUVFbWUsTUFBSSxFQUFFO0FBRlIsQ0FyQndELEVBeUJ4RDtBQUNFbmUsT0FBSyxFQUFFLEVBRFQ7QUFFRW1lLE1BQUksRUFBRTtBQUZSLENBekJ3RCxFQTZCeEQ7QUFDRW5lLE9BQUssRUFBRSxFQURUO0FBRUVtZSxNQUFJLEVBQUU7QUFGUixDQTdCd0QsQ0FpQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaE13RCxDQUFuRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQyxXQUFULENBQ0xDLEtBREssRUFFTEMsRUFBRSxHQUFHLElBRkEsRUFHTEMsUUFBUSxHQUFHLEtBSE4sRUFJTGhpQixRQUFRLEdBQUcsVUFKTixFQUtMO0FBQ0EsUUFBTThELE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTVEsSUFBSSxHQUFHLEVBQWI7QUFDQSxRQUFNaUcsSUFBSSxHQUFHMFgsd0RBQVMsQ0FBQ0gsS0FBRCxDQUF0QjtBQUVBdlgsTUFBSSxDQUFDNFUsT0FBTCxDQUFhLENBQUMzUixJQUFELEVBQU8wVSxLQUFQLEtBQWlCO0FBQzVCNWQsUUFBSSxDQUFDaUcsSUFBSSxDQUFDMlgsS0FBRCxDQUFKLENBQVlILEVBQVosQ0FBRCxDQUFKLEdBQXdCeFgsSUFBSSxDQUFDMlgsS0FBRCxDQUE1QjtBQUNELEdBRkQ7QUFJQTNYLE1BQUksQ0FBQzRVLE9BQUwsQ0FBYzNSLElBQUQsSUFBVTtBQUNyQixVQUFNMlUsVUFBVSxHQUFHN2QsSUFBSSxDQUFDa0osSUFBSSxDQUFDd1UsUUFBRCxDQUFMLENBQXZCOztBQUNBLFFBQUlHLFVBQUosRUFBZ0I7QUFDZCxPQUFDQSxVQUFVLENBQUNuaUIsUUFBRCxDQUFYLEtBQTBCbWlCLFVBQVUsQ0FBQ25pQixRQUFELENBQVYsR0FBdUIsRUFBakQ7QUFDQW1pQixnQkFBVSxDQUFDbmlCLFFBQUQsQ0FBVixDQUFxQmlILElBQXJCLENBQTBCdUcsSUFBMUI7QUFDRCxLQUhELE1BR087QUFDTDFKLFlBQU0sQ0FBQ21ELElBQVAsQ0FBWXVHLElBQVo7QUFDRDtBQUNGLEdBUkQ7QUFTQSxTQUFPMUosTUFBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNzZSxlQUFULENBQXlCQyxNQUF6QixFQUFpQ3ppQixRQUFqQyxFQUEyQztBQUNoRCxTQUFPMk0sMkRBQUEsQ0FBMEI4VixNQUExQixFQUFrQ0MsSUFBbEMsQ0FBdUMxaUIsUUFBdkMsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTMmlCLGNBQVQsQ0FBd0JULEtBQXhCLEVBQStCVSxPQUEvQixFQUF3Q1IsUUFBeEMsRUFBa0RELEVBQUUsR0FBRyxJQUF2RCxFQUE2RDtBQUNsRSxRQUFNamUsTUFBTSxHQUFHLENBQUMwZSxPQUFELENBQWY7QUFDQSxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsR0FBSixFQUFoQjtBQUNBWixPQUFLLENBQUMzQyxPQUFOLENBQWUzUixJQUFELElBQVVpVixPQUFPLENBQUNyWixHQUFSLENBQVlvRSxJQUFJLENBQUN1VSxFQUFELENBQWhCLEVBQXNCdlUsSUFBdEIsQ0FBeEIsRUFIa0UsQ0FLbEU7O0FBQ0EsUUFBTW1WLE9BQU8sR0FBSUgsT0FBRCxJQUFhO0FBQzNCLFVBQU1JLGVBQWUsR0FBR0gsT0FBTyxDQUFDcmhCLEdBQVIsQ0FBWW9oQixPQUFPLENBQUNULEVBQUQsQ0FBbkIsRUFBeUJDLFFBQXpCLENBQXhCOztBQUNBLFFBQUlZLGVBQUosRUFBcUI7QUFDbkI5ZSxZQUFNLENBQUNtRCxJQUFQLENBQVl3YixPQUFPLENBQUNyaEIsR0FBUixDQUFZd2hCLGVBQVosQ0FBWjtBQUNBRCxhQUFPLENBQUNGLE9BQU8sQ0FBQ3JoQixHQUFSLENBQVl3aEIsZUFBWixDQUFELENBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBUUFELFNBQU8sQ0FBQ0gsT0FBRCxDQUFQO0FBQ0EsU0FBTzFlLE1BQVA7QUFDRDtBQUVNLFNBQVNrTyxnQkFBVCxDQUEwQnpILElBQTFCLEVBQXFDO0FBQzFDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxjQUFQO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFdBQU9BLElBQVA7QUFDRDs7QUFFRCxNQUFJdkksS0FBSyxDQUFDa2QsT0FBTixDQUFjM1UsSUFBSSxDQUFDN0ksT0FBbkIsQ0FBSixFQUFpQztBQUMvQixVQUFNOEwsSUFBSSxHQUFHakQsSUFBSSxDQUFDN0ksT0FBTCxDQUFhLENBQWIsQ0FBYjs7QUFDQSxRQUFJLENBQUM4TCxJQUFJLENBQUNxVixXQUFWLEVBQXVCO0FBQ3JCLGFBQU90WSxJQUFJLENBQUM5QixLQUFMLElBQWMsY0FBckI7QUFDRDs7QUFDRCxXQUFPekosTUFBTSxDQUFDOGpCLE1BQVAsQ0FBY3RWLElBQUksQ0FBQ3FWLFdBQW5CLEVBQWdDLENBQWhDLENBQVA7QUFDRCxHQWZ5QyxDQWlCMUM7OztBQUNBLFNBQU8sT0FBT3RZLElBQUksQ0FBQzdJLE9BQVosS0FBd0IsUUFBeEIsR0FBbUM2SSxJQUFJLENBQUM3SSxPQUF4QyxHQUFrRCxjQUF6RDtBQUNEO0FBRU0sU0FBU3FoQixRQUFULEdBQTZCO0FBQ2xDLE1BQ0VDLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQjVCLEtBQXBCLENBQTBCLFVBQTFCLEtBQ0cyQixTQUFTLENBQUNDLFNBQVYsQ0FBb0I1QixLQUFwQixDQUEwQixRQUExQixDQURILElBRUcyQixTQUFTLENBQUNDLFNBQVYsQ0FBb0I1QixLQUFwQixDQUEwQixTQUExQixDQUZILElBR0cyQixTQUFTLENBQUNDLFNBQVYsQ0FBb0I1QixLQUFwQixDQUEwQixPQUExQixDQUhILElBSUcyQixTQUFTLENBQUNDLFNBQVYsQ0FBb0I1QixLQUFwQixDQUEwQixPQUExQixDQUpILElBS0cyQixTQUFTLENBQUNDLFNBQVYsQ0FBb0I1QixLQUFwQixDQUEwQixhQUExQixDQUxILElBTUcyQixTQUFTLENBQUNDLFNBQVYsQ0FBb0I1QixLQUFwQixDQUEwQixnQkFBMUIsQ0FQTCxFQVFFO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQyxDQUVEOztBQUNPLFNBQVM2QixlQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUN0QyxRQUFNQyxRQUFRLEdBQUdwVixrQkFBa0IsQ0FBQzlRLE1BQU0sQ0FBQ21tQixRQUFQLENBQWdCM1gsTUFBaEIsQ0FBdUI0WCxTQUF2QixDQUFpQyxDQUFqQyxDQUFELENBQW5DO0FBQ0EsUUFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUN6SCxLQUFULENBQWUsR0FBZixDQUF0QjtBQUNBLE1BQUk2SCxjQUFKO0FBQ0EsTUFBSXZVLENBQUo7O0FBRUEsT0FBS0EsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHc1UsYUFBYSxDQUFDcE4sTUFBOUIsRUFBc0NsSCxDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDNUN1VSxrQkFBYyxHQUFHRCxhQUFhLENBQUN0VSxDQUFELENBQWIsQ0FBaUIwTSxLQUFqQixDQUF1QixHQUF2QixDQUFqQjs7QUFFQSxRQUFJNkgsY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQkwsTUFBMUIsRUFBa0M7QUFDaEMsYUFBT0ssY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQkMsU0FBdEIsR0FBa0MsSUFBbEMsR0FBeUNELGNBQWMsQ0FBQyxDQUFELENBQTlEO0FBQ0Q7QUFDRjtBQUNGO0FBRU0sTUFBTUUsV0FBVyxHQUFHO0FBQ3pCQyxLQUFHLEVBQUUsUUFEb0I7QUFFekJDLEtBQUcsRUFBRSxTQUZvQjtBQUd6QkMsS0FBRyxFQUFFLFdBSG9CO0FBSXpCQyxLQUFHLEVBQUUsVUFKb0I7QUFLekJDLEtBQUcsRUFBRSxRQUxvQjtBQU16QkMsS0FBRyxFQUFFLFVBTm9CO0FBT3pCQyxLQUFHLEVBQUU7QUFQb0IsQ0FBcEI7QUFVQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUNuQyxRQUFNQyxVQUFVLEdBQUc7QUFBRUMsU0FBSyxFQUFFLElBQVQ7QUFBZUMsT0FBRyxFQUFFLElBQXBCO0FBQTBCQyxVQUFNLEVBQUU7QUFBbEMsR0FBbkI7QUFDQSxTQUFPO0FBQ0xYLE9BQUcsb0JBQU9RLFVBQVAsQ0FERTtBQUVMUCxPQUFHLG9CQUFPTyxVQUFQLENBRkU7QUFHTE4sT0FBRyxvQkFBT00sVUFBUCxDQUhFO0FBSUxMLE9BQUcsb0JBQU9LLFVBQVAsQ0FKRTtBQUtMSixPQUFHLG9CQUFPSSxVQUFQLENBTEU7QUFNTEgsT0FBRyxvQkFBT0csVUFBUCxDQU5FO0FBT0xGLE9BQUcsb0JBQU9FLFVBQVA7QUFQRSxHQUFQO0FBU0Q7QUFFTSxTQUFTSSxXQUFULENBQXFCQyxRQUFyQixFQUFrRDtBQUN2RCxNQUFJQyxPQUFPLEdBQUduVixRQUFRLENBQUNtTCw2Q0FBTSxHQUFHRCxNQUFULENBQWdCLEdBQWhCLENBQUQsRUFBdUIsRUFBdkIsQ0FBdEI7QUFDQSxNQUFJdkwsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJeVYsUUFBSjtBQUNBLFFBQU1DLGNBQWMsR0FBRzNsQixNQUFNLENBQUNxTixJQUFQLENBQVltWSxRQUFaLEVBQXNCbkwsTUFBdEIsQ0FDcEIxYSxHQUFELElBQVMsQ0FBQzZsQixRQUFRLENBQUM3bEIsR0FBRCxDQUFSLENBQWMybEIsTUFESCxDQUF2Qjs7QUFHQSxLQUFHO0FBQ0QsVUFBTS9KLElBQUksR0FBR0UsNkNBQU0sR0FBR21LLEdBQVQsQ0FBYUgsT0FBYixFQUFzQmpLLE1BQXRCLENBQTZCLEtBQTdCLEVBQW9DcUIsV0FBcEMsRUFBYjs7QUFDQSxRQUFJOEksY0FBYyxDQUFDeEksT0FBZixDQUF1QjVCLElBQXZCLElBQStCLENBQUMsQ0FBcEMsRUFBdUM7QUFDckNtSyxjQUFRLEdBQUduSyxJQUFYO0FBQ0Q7O0FBQ0RrSyxXQUFPLElBQUksQ0FBWDtBQUNBeFYsS0FBQyxJQUFJLENBQUw7QUFDRCxHQVBELFFBT1NBLENBQUMsR0FBRyxDQUFKLElBQVMsQ0FBQ3lWLFFBUG5COztBQVNBLE1BQUlBLFFBQUosRUFBYztBQUNaLFdBQVEsR0FBRUYsUUFBUSxDQUFDRSxRQUFELENBQVIsQ0FBbUJOLEtBQU0sSUFBRzNKLDZDQUFNLEdBQ3pDbUssR0FEbUMsQ0FDL0JILE9BQU8sR0FBRyxDQURxQixFQUVuQ2pLLE1BRm1DLENBRTVCLFlBRjRCLENBRWQsRUFGeEI7QUFHRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDtBQUVNLFNBQVNxSyxhQUFULENBQXVCQyxVQUF2QixFQUFtQ0MsT0FBbkMsRUFBNENDLE1BQTVDLEVBQW9EemUsS0FBcEQsRUFBMkQ7QUFDaEUsTUFBSTtBQUFFa0ssUUFBRjtBQUFRRCxVQUFSO0FBQWdCNkk7QUFBaEIsTUFBMkI5UyxLQUEvQjtBQUNBLFFBQU07QUFBRTZKO0FBQUYsTUFBWTdKLEtBQWxCOztBQUNBLE1BQUl3ZSxPQUFKLEVBQWE7QUFDWC9sQixVQUFNLENBQUNxTixJQUFQLENBQVkwWSxPQUFaLEVBQXFCNUYsT0FBckIsQ0FBOEJ4Z0IsR0FBRCxJQUFTO0FBQ3BDLFVBQUlvbUIsT0FBTyxDQUFDcG1CLEdBQUQsQ0FBUCxJQUFnQm9tQixPQUFPLENBQUNwbUIsR0FBRCxDQUFQLENBQWF3WCxNQUFqQyxFQUF5QztBQUN2QztBQUNBa0QsY0FBTSxDQUFDMWEsR0FBRCxDQUFOLEdBQWNvbUIsT0FBTyxDQUFDcG1CLEdBQUQsQ0FBUCxDQUFhLENBQWIsQ0FBZDtBQUNEOztBQUVELFVBQUksQ0FBQ29tQixPQUFPLENBQUNwbUIsR0FBRCxDQUFaLEVBQW1CO0FBQ2pCMGEsY0FBTSxDQUFDMWEsR0FBRCxDQUFOLEdBQWMsRUFBZDtBQUNEO0FBQ0YsS0FURDtBQVVELEdBWEQsTUFXTztBQUNMMGEsVUFBTSxHQUFHLEVBQVQ7QUFDRDs7QUFFRCxNQUFJMkwsTUFBSixFQUFZO0FBQ1YsUUFBSUEsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2hCLFlBQU07QUFBRTNqQixhQUFGO0FBQVMyakI7QUFBVCxVQUFtQkQsTUFBekI7QUFDQXZVLFVBQUksR0FBR3lVLDBEQUFJLENBQUNELEtBQUQsQ0FBWDtBQUNBelUsWUFBTSxHQUFHbFAsS0FBVDtBQUNELEtBSkQsTUFJTztBQUNMa1AsWUFBTSxHQUFHLFdBQVQ7QUFDQUMsVUFBSSxHQUFHLE1BQVA7QUFDRDtBQUNGOztBQUVELHVEQUNLbEssS0FETCxHQUVLOFMsTUFGTDtBQUdFNUksUUFIRjtBQUlFRCxVQUpGO0FBS0VMLFVBQU0sRUFBRSxDQUFDMlUsVUFBVSxDQUFDdEMsT0FBWCxHQUFxQixDQUF0QixJQUEyQnBTO0FBTHJDO0FBT0Q7QUFFTSxTQUFTK1UsU0FBVCxDQUFtQkMsYUFBbkIsRUFBa0NuTyxNQUFNLEdBQUcsV0FBM0MsRUFBd0R3RSxJQUF4RCxFQUE4RDtBQUNuRSxTQUFPLElBQUl4UixPQUFKLENBQVksQ0FBQzhILE9BQUQsRUFBVXNULE1BQVYsS0FBcUI7QUFDdEMsVUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjs7QUFDQSxRQUFJSCxhQUFKLEVBQW1CO0FBQ2pCRSxZQUFNLENBQUNFLGFBQVAsQ0FBcUJKLGFBQXJCOztBQUNBRSxZQUFNLENBQUNHLE1BQVAsR0FBZ0IsTUFBTTFULE9BQU8saUNBQ3hCcVQsYUFEd0I7QUFFM0JuTyxjQUYyQjtBQUczQjdVLFlBQUksRUFBRWdqQixhQUFhLENBQUNoakIsSUFITztBQUkzQlUsV0FBRyxFQUFFd2lCLE1BQU0sQ0FBQ3hoQixNQUplO0FBSzNCc2hCO0FBTDJCLFNBQTdCOztBQU9BRSxZQUFNLENBQUNJLE9BQVAsR0FBa0JqZCxLQUFELElBQVc0YyxNQUFNLENBQUM1YyxLQUFELENBQWxDO0FBQ0QsS0FWRCxNQVVPO0FBQ0xzSixhQUFPLENBQUMwSixJQUFELENBQVA7QUFDRDtBQUNGLEdBZk0sQ0FBUDtBQWdCRDtBQUVNLFNBQVNrSyxxQkFBVCxDQUErQnBiLElBQS9CLEVBQXFDO0FBQzFDLFFBQU1xYixHQUFHLEdBQUdyYixJQUFJLENBQUNvUixLQUFMLENBQVcsS0FBWCxDQUFaO0FBQ0EsUUFBTWtLLFVBQVUsR0FBR0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFVeE8sSUFBSSxDQUFDME8sS0FBTCxDQUFXRixHQUFHLENBQUMsQ0FBRCxDQUFkLENBQTdCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHSCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVV4TyxJQUFJLENBQUMwTyxLQUFMLENBQVdGLEdBQUcsQ0FBQyxDQUFELENBQWQsQ0FBN0I7QUFDQSxTQUFPO0FBQ0xDLGNBREs7QUFFTEU7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyxjQUFULENBQXdCQyxVQUF4QixFQUE2Q0MsSUFBN0MsRUFBaUY7QUFDdEYsTUFBSSxDQUFDRCxVQUFMLEVBQWlCLE9BQU8sS0FBUDtBQUNqQixNQUFJLENBQUNDLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUN2VSxHQUFuQixFQUF3QixPQUFPLEtBQVA7QUFFeEIsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTd1UsY0FBVCxDQUF3QkQsSUFBeEIsRUFBcUMxVSxTQUFyQyxFQUE0RDtBQUNqRSxNQUFJMFUsSUFBSSxJQUFJQSxJQUFJLENBQUN2VSxHQUFqQixFQUFzQixPQUFPdVUsSUFBUDtBQUN0QixNQUFJMVUsU0FBUyxJQUFJQSxTQUFTLENBQUNHLEdBQTNCLEVBQWdDLE9BQU9ILFNBQVA7QUFFaEMsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTNFUsaUJBQVQsQ0FBMkI1WSxJQUEzQixFQUFpQztBQUN0QyxNQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ29JLElBQUwsS0FBYyxVQUExQixFQUFzQyxPQUFPLElBQVA7QUFDdEMsU0FBTyxLQUFQO0FBQ0Q7QUFFTSxTQUFTeVEsdUJBQVQsQ0FBaUNDLEdBQWpDLEVBQXNDO0FBQzNDLFFBQU07QUFDSkMsVUFESTtBQUVKQyxrQkFGSTtBQUdKQyxnQkFISTtBQUlKbGMsUUFBSSxFQUFFO0FBQUVxTDtBQUFGO0FBSkYsTUFLRjBRLEdBTEo7QUFNQSxTQUFPcFEsaURBQVUsQ0FDZixTQURlLEVBRWY7QUFBRXdRLFFBQUksRUFBRUgsTUFBTSxJQUFJM1EsSUFBSSxLQUFLO0FBQTNCLEdBRmUsRUFHZjtBQUFFK1EsT0FBRyxFQUFFL1EsSUFBSSxLQUFLO0FBQWhCLEdBSGUsRUFJZjtBQUFFd08sU0FBSyxFQUFFLENBQUMsQ0FBQ29DO0FBQVgsR0FKZSxFQUtmO0FBQUVuQyxPQUFHLEVBQUUsQ0FBQyxDQUFDb0M7QUFBVCxHQUxlLENBQWpCO0FBT0Q7O0FBRUQsU0FBU0csZUFBVCxDQUF5QkMsSUFBekIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQ25DLFFBQU0sQ0FBQ0MsQ0FBRCxJQUFNRixJQUFJLENBQUNsTCxLQUFMLENBQVcsR0FBWCxDQUFaO0FBQ0EsUUFBTSxDQUFDMU0sQ0FBRCxJQUFNNlgsSUFBSSxDQUFDbkwsS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBLFNBQU8sQ0FBQ3JNLFFBQVEsQ0FBQ3lYLENBQUQsRUFBSSxFQUFKLENBQVIsR0FBa0IsRUFBbEIsR0FBdUJ6WCxRQUFRLENBQUNMLENBQUQsRUFBSSxFQUFKLENBQWhDLElBQTJDLElBQWxEO0FBQ0Q7O0FBRU0sU0FBUytYLGdCQUFULENBQTBCQyxHQUFHLEdBQUcsRUFBaEMsRUFBb0NDLEdBQUcsR0FBRyxHQUExQyxFQUErQztBQUNwRCxNQUFJalksQ0FBQyxHQUFHZ1ksR0FBUjtBQUNBLFFBQU1uakIsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsS0FBRztBQUNEQSxVQUFNLENBQUNtTCxDQUFELENBQU4sR0FBWSxDQUFDQSxDQUFDLEdBQUcsSUFBTCxFQUFXa1ksT0FBWCxDQUFtQixDQUFuQixDQUFaO0FBQ0FsWSxLQUFDLElBQUksQ0FBTDtBQUNELEdBSEQsUUFHU0EsQ0FBQyxHQUFHaVksR0FIYjs7QUFJQSxTQUFPcGpCLE1BQU0sQ0FBQ3NTLEdBQVAsQ0FBVyxDQUFDd0MsQ0FBRCxFQUFJc0osS0FBSixNQUFlO0FBQy9Ca0YsU0FBSyxFQUFHLEdBQUVsRixLQUFNLFVBQVN0SixDQUFFLEtBREk7QUFFL0JuVixTQUFLLEVBQUcsR0FBRXllLEtBQU07QUFGZSxHQUFmLENBQVgsQ0FBUDtBQUlEO0FBQ00sU0FBU21GLGdCQUFULENBQTBCSixHQUFHLEdBQUcsQ0FBaEMsRUFBbUNDLEdBQUcsR0FBRyxDQUF6QyxFQUE0QztBQUNqRCxRQUFNcGpCLE1BQU0sR0FBRyxFQUFmOztBQUNBLE9BQUssSUFBSStpQixJQUFJLEdBQUdJLEdBQWhCLEVBQXFCSixJQUFJLEdBQUdLLEdBQTVCLEVBQWlDTCxJQUFJLElBQUksQ0FBekMsRUFBNEM7QUFDMUMsU0FBSyxJQUFJQyxJQUFJLEdBQUcsQ0FBaEIsRUFBbUJBLElBQUksSUFBSSxFQUEzQixFQUErQkEsSUFBSSxJQUFJLENBQXZDLEVBQTBDO0FBQ3hDLFlBQU1RLENBQUMsR0FBR1YsZUFBZSxDQUN2QkMsSUFBSSxDQUFDTSxPQUFMLENBQWEsQ0FBYixFQUFnQmxNLFFBQWhCLEVBRHVCLEVBRXZCNkwsSUFBSSxDQUFDSyxPQUFMLENBQWEsQ0FBYixFQUFnQmxNLFFBQWhCLEVBRnVCLENBQXpCO0FBSUFuWCxZQUFNLENBQUNtRCxJQUFQLENBQWEsR0FBRTRmLElBQUssSUFBR0MsSUFBSyxNQUFLUSxDQUFDLENBQUNILE9BQUYsQ0FBVSxDQUFWLENBQWEsTUFBOUM7QUFDRDtBQUNGOztBQUNELFNBQU9yakIsTUFBTSxDQUFDc1MsR0FBUCxDQUFZMlEsQ0FBRCxLQUFRO0FBQUVLLFNBQUssRUFBRyxHQUFFTCxDQUFFLEVBQWQ7QUFBaUJ0akIsU0FBSyxFQUFHLEdBQUVzakIsQ0FBRTtBQUE3QixHQUFSLENBQVgsQ0FBUDtBQUNEO0FBRU0sU0FBU1EsV0FBVCxDQUFxQkMsS0FBckIsRUFBb0NDLGNBQWMsR0FBRyxDQUFyRCxFQUF3RDtBQUM3RCxNQUFJRCxLQUFKLEVBQVc7QUFDVCxXQUFPQSxLQUFLLENBQUNMLE9BQU4sQ0FBY00sY0FBZCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDL1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU07QUFBRUMsT0FBRjtBQUFTcFUsY0FBVDtBQUF1QnFVO0FBQXZCLElBQXFDdEosb0VBQWlCLENBQ2pFLE9BRGlFLEVBRWpFLE9BRmlFLENBQTVEO0FBSUEsTUFBTXVKLGVBQWUsR0FBRzVKLCtEQUFZLENBQUMsa0JBQUQsQ0FBcEM7QUFFQSxNQUFNO0FBQ1g2SixnQkFEVztBQUVYQyx1QkFGVztBQUdYQztBQUhXLElBSVQxSixvRUFBaUIsQ0FBQyxnQkFBRCxFQUFtQixpQkFBbkIsQ0FKZDtBQU1BLE1BQ0wySixjQUFjLEdBQUdoSywrREFBWSxDQUFDLGdCQUFELENBRHhCO0FBR0EsTUFBTTtBQUNYaUssYUFEVztBQUVYQyxvQkFGVztBQUdYQztBQUhXLElBSVQ5SixvRUFBaUIsQ0FBQyxhQUFELEVBQWdCLGNBQWhCLENBSmQ7QUFNQSxNQUFNO0FBQ1grSixtQkFEVztBQUVYQywwQkFGVztBQUdYQztBQUhXLElBSVRqSyxvRUFBaUIsQ0FBQyxtQkFBRCxFQUFzQixvQkFBdEIsQ0FKZDtBQUtBLE1BQU1rSyw4QkFBOEIsR0FBR3ZLLCtEQUFZLENBQ3hELG1DQUR3RCxDQUFuRDtBQUlBLE1BQU07QUFDWHdLLGNBRFc7QUFFWEMscUJBRlc7QUFHWEM7QUFIVyxJQUlUckssb0VBQWlCLENBQUMsY0FBRCxFQUFpQixlQUFqQixDQUpkO0FBS0EsTUFBTXNLLHlCQUF5QixHQUFHM0ssK0RBQVksQ0FDbkQsOEJBRG1ELENBQTlDO0FBSUEsTUFBTTtBQUNYNEssZ0JBRFc7QUFFWEMsdUJBRlc7QUFHWEM7QUFIVyxJQUlUekssb0VBQWlCLENBQUMsZ0JBQUQsRUFBbUIsaUJBQW5CLENBSmQ7QUFLQSxNQUFNMEssMkJBQTJCLEdBQUcvSywrREFBWSxDQUNyRCxnQ0FEcUQsQ0FBaEQ7QUFJQSxNQUFNZ0wsTUFBTSxHQUFHaEwsK0RBQVksQ0FBQyxRQUFELENBQTNCLEM7Ozs7Ozs7Ozs7OztBQ2xEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNO0FBQ1hpTCx3QkFEVztBQUVYQywrQkFGVztBQUdYQztBQUhXLElBSVQ5Syx1RUFBaUIsQ0FBQyx3QkFBRCxFQUEyQiwwQkFBM0IsQ0FKZDtBQU1BLE1BQU07QUFDWHpOLGlCQURXO0FBRVh3WSx3QkFGVztBQUdYQztBQUhXLElBSVRoTCx1RUFBaUIsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsQ0FKZDtBQU1BLE1BQU1pTCxxQkFBcUIsR0FBR3RMLGtFQUFZLENBQUMseUJBQUQsQ0FBMUM7QUFFQSxNQUFNO0FBQ1h1TCx3QkFEVztBQUVYQywrQkFGVztBQUdYQztBQUhXLElBSVRwTCx1RUFBaUIsQ0FBQyx3QkFBRCxFQUEyQiwwQkFBM0IsQ0FKZDtBQUtBLE1BQU1xTCwyQkFBMkIsR0FBRzFMLGtFQUFZLENBQ3JELDBCQURxRCxDQUFoRDtBQUdBLE1BQU0yTCxpQkFBaUIsR0FBRzNMLGtFQUFZLENBQUMscUJBQUQsQ0FBdEM7QUFDQSxNQUFNNEwsbUJBQW1CLEdBQUc1TCxrRUFBWSxDQUFDLHVCQUFELENBQXhDO0FBQ0EsTUFBTTZMLFdBQVcsR0FBRzdMLGtFQUFZLENBQUMsY0FBRCxDQUFoQztBQUNBLE1BQU04TCxZQUFZLEdBQUc5TCxrRUFBWSxDQUFDLGVBQUQsQ0FBakM7QUFDQSxNQUFNK0wscUJBQXFCLEdBQUcvTCxrRUFBWSxDQUFDLHlCQUFELENBQTFDO0FBQ0EsTUFBTWdNLGtCQUFrQixHQUFHaE0sa0VBQVksQ0FBQyxzQkFBRCxDQUF2QztBQUVBLE1BQU07QUFDWGlNLHFCQURXO0FBRVhDLDRCQUZXO0FBR1hDO0FBSFcsSUFJVDlMLHVFQUFpQixDQUFDLHFCQUFELEVBQXdCLHVCQUF4QixDQUpkO0FBS0EsTUFBTStMLDBCQUEwQixHQUFHcE0sa0VBQVksQ0FDcEQsNEJBRG9ELENBQS9DO0FBR0EsTUFBTXFNLG1CQUFtQixHQUFHck0sa0VBQVksQ0FBQyx1QkFBRCxDQUF4QztBQUNBLE1BQU1zTSxvQkFBb0IsR0FBR3RNLGtFQUFZLENBQUMsd0JBQUQsQ0FBekM7QUFDQSxNQUFNdU0sMkJBQTJCLEdBQUd2TSxrRUFBWSxDQUNyRCxnQ0FEcUQsQ0FBaEQ7QUFJQSxNQUFNO0FBQ1h3TSxlQURXO0FBRVhDLHNCQUZXO0FBR1hDO0FBSFcsSUFJVHJNLHVFQUFpQixDQUFDLGVBQUQsRUFBa0IsZ0JBQWxCLENBSmQ7QUFLQSxNQUFNc00sb0JBQW9CLEdBQUczTSxrRUFBWSxDQUFDLHNCQUFELENBQXpDO0FBQ0EsTUFBTTRNLFlBQVksR0FBRzVNLGtFQUFZLENBQUMsY0FBRCxDQUFqQztBQUNBLE1BQU02TSxlQUFlLEdBQUc3TSxrRUFBWSxDQUFDLGlCQUFELENBQXBDO0FBRUEsTUFBTTtBQUNYOE0sWUFEVztBQUVYQyxtQkFGVztBQUdYQztBQUhXLElBSVQzTSx1RUFBaUIsQ0FBQyxZQUFELEVBQWUsYUFBZixDQUpkO0FBS0EsTUFBTTRNLGlCQUFpQixHQUFHak4sa0VBQVksQ0FBQyxvQkFBRCxDQUF0QztBQUVBLE1BQU07QUFDWGtOLGtCQURXO0FBRVhDLHlCQUZXO0FBR1hDO0FBSFcsSUFJVC9NLHVFQUFpQixDQUFDLGtCQUFELEVBQXFCLG9CQUFyQixDQUpkO0FBS0EsTUFBTWdOLHVCQUF1QixHQUFHck4sa0VBQVksQ0FBQyw0QkFBRCxDQUE1QztBQUNBLE1BQU1zTixtQkFBbUIsR0FBR3ROLGtFQUFZLENBQUMsdUJBQUQsQ0FBeEM7QUFFQSxNQUFNO0FBQ1h1TixhQURXO0FBRVhDLG9CQUZXO0FBR1hDO0FBSFcsSUFJVHBOLHVFQUFpQixDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsQ0FKZDtBQUtBLE1BQU1xTixrQkFBa0IsR0FBRzFOLGtFQUFZLENBQUMsb0JBQUQsQ0FBdkM7QUFDQSxNQUFNMk4sV0FBVyxHQUFHM04sa0VBQVksQ0FBQyxhQUFELENBQWhDO0FBQ0EsTUFBTTROLGFBQWEsR0FBRzVOLGtFQUFZLENBQUMsZUFBRCxDQUFsQztBQUVBLE1BQU07QUFDWDZOLGFBRFc7QUFFWEMsb0JBRlc7QUFHWEM7QUFIVyxJQUlUMU4sdUVBQWlCLENBQUMsYUFBRCxFQUFnQixjQUFoQixDQUpkO0FBS0EsTUFBTTJOLGtCQUFrQixHQUFHaE8sa0VBQVksQ0FBQyxvQkFBRCxDQUF2QztBQUNBLE1BQU1pTyxXQUFXLEdBQUdqTyxrRUFBWSxDQUFDLGFBQUQsQ0FBaEM7QUFDQSxNQUFNa08sYUFBYSxHQUFHbE8sa0VBQVksQ0FBQyxlQUFELENBQWxDO0FBRUEsTUFBTTtBQUNYbU8sZ0JBRFc7QUFFWEMsdUJBRlc7QUFHWEM7QUFIVyxJQUlUaE8sdUVBQWlCLENBQUMsZ0JBQUQsRUFBbUIsa0JBQW5CLENBSmQ7QUFLQSxNQUFNaU8scUJBQXFCLEdBQUd0TyxrRUFBWSxDQUFDLHVCQUFELENBQTFDO0FBQ0EsTUFBTXVPLGNBQWMsR0FBR3ZPLGtFQUFZLENBQUMsZ0JBQUQsQ0FBbkM7QUFDQSxNQUFNd08saUJBQWlCLEdBQUd4TyxrRUFBWSxDQUFDLG1CQUFELENBQXRDO0FBRUEsTUFBTTVLLHNCQUFzQixHQUFHNEssa0VBQVksQ0FBQyx3QkFBRCxDQUEzQztBQUNBLE1BQU12TSx3QkFBd0IsR0FBR3VNLGtFQUFZLENBQ2xELDRCQURrRCxDQUE3QztBQUdBLE1BQU15Tyw2QkFBNkIsR0FBR3pPLGtFQUFZLENBQ3ZELGtDQUR1RCxDQUFsRCxDOzs7Ozs7Ozs7Ozs7QUNwR1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS08sTUFBTTNLLG1CQUFtQixHQUFHMkssK0RBQVksQ0FBQyxxQkFBRCxDQUF4QztBQUVBLE1BQU07QUFDWDBPLGNBRFc7QUFFWEMscUJBRlc7QUFHWEM7QUFIVyxJQUlUdk8sb0VBQWlCLENBQUMsY0FBRCxFQUFpQixlQUFqQixDQUpkO0FBTUEsTUFBTXdPLGlCQUFpQixHQUFHN08sK0RBQVksQ0FBQyxnQkFBRCxDQUF0QztBQUVBLE1BQU04Tyx1QkFBdUIsR0FBRzlPLCtEQUFZLENBQ2pELDRCQURpRCxDQUE1QztBQUdBLE1BQU0rTyx5QkFBeUIsR0FBRy9PLCtEQUFZLENBQ25ELDhCQURtRCxDQUE5QztBQUdBLE1BQU1nUCxpQkFBaUIsR0FBR2hQLCtEQUFZLENBQUMscUJBQUQsQ0FBdEM7QUFDQSxNQUFNaVAsa0JBQWtCLEdBQUdqUCwrREFBWSxDQUFDLHNCQUFELENBQXZDO0FBRUEsTUFBTTtBQUNYa1Asa0JBRFc7QUFFWEMseUJBRlc7QUFHWEM7QUFIVyxJQUlUL08sb0VBQWlCLENBQUMsa0JBQUQsRUFBcUIsb0JBQXJCLENBSmQ7QUFLQSxNQUFNZ1AsdUJBQXVCLEdBQUdyUCwrREFBWSxDQUNqRCwyQkFEaUQsQ0FBNUM7QUFJQSxNQUFNO0FBQ1hzUCx3QkFEVztBQUVYQywrQkFGVztBQUdYQztBQUhXLElBSVRuUCxvRUFBaUIsQ0FBQyx3QkFBRCxFQUEyQiwyQkFBM0IsQ0FKZDtBQUtBLE1BQU1vUCw2QkFBNkIsR0FBR3pQLCtEQUFZLENBQ3ZELG1DQUR1RCxDQUFsRDtBQUdBLE1BQU0wUCx5QkFBeUIsR0FBRzFQLCtEQUFZLENBQ25ELDhCQURtRCxDQUE5QztBQUlBLE1BQU07QUFDWDJQLHFCQURXO0FBRVhDLDRCQUZXO0FBR1hDO0FBSFcsSUFJVHhQLG9FQUFpQixDQUFDLHFCQUFELEVBQXdCLHVCQUF4QixDQUpkO0FBS0EsTUFBTXlQLDBCQUEwQixHQUFHOVAsK0RBQVksQ0FDcEQsK0JBRG9ELENBQS9DO0FBSUEsTUFBTTtBQUNYK1AsWUFEVztBQUVYQyxtQkFGVztBQUdYQztBQUhXLElBSVQ1UCxvRUFBaUIsQ0FBQyxZQUFELEVBQWUsYUFBZixDQUpkO0FBS0EsTUFBTTZQLG1CQUFtQixHQUFHbFEsK0RBQVksQ0FBQyxxQkFBRCxDQUF4QztBQUNBLE1BQU1tUSxrQkFBa0IsR0FBR25RLCtEQUFZLENBQUMsc0JBQUQsQ0FBdkM7QUFFQSxNQUFNO0FBQ1hvUSx1QkFEVztBQUVYQyw4QkFGVztBQUdYQztBQUhXLElBSVRqUSxvRUFBaUIsQ0FBQyx1QkFBRCxFQUEwQix3QkFBMUIsQ0FKZDtBQUtBLE1BQU1rUSw4QkFBOEIsR0FBR3ZRLCtEQUFZLENBQ3hELDhCQUR3RCxDQUFuRDtBQUdBLE1BQU13USxxQkFBcUIsR0FBR3hRLCtEQUFZLENBQUMsMEJBQUQsQ0FBMUM7QUFFQSxNQUFNO0FBQ1h5USxnQkFEVztBQUVYQyx1QkFGVztBQUdYQztBQUhXLElBSVR0USxvRUFBaUIsQ0FBQyxnQkFBRCxFQUFtQixrQkFBbkIsQ0FKZDtBQUtBLE1BQU11USxvQkFBb0IsR0FBRzVRLCtEQUFZLENBQUMsd0JBQUQsQ0FBekMsQzs7Ozs7Ozs7Ozs7O0FDN0VQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtPLE1BQU03SyxpQkFBaUIsR0FBRzZLLCtEQUFZLENBQUMsbUJBQUQsQ0FBdEM7QUFDQSxNQUFNNlEsdUJBQXVCLEdBQUc3USwrREFBWSxDQUFDLHlCQUFELENBQTVDO0FBQ0EsTUFBTThRLHdCQUF3QixHQUFHOVEsK0RBQVksQ0FDbEQsMEJBRGtELENBQTdDO0FBSUEsTUFBTTtBQUNYK1EsWUFEVztBQUVYQyxtQkFGVztBQUdYQztBQUhXLElBSVQ1USxvRUFBaUIsQ0FBQyxZQUFELEVBQWUsYUFBZixDQUpkO0FBTUEsTUFBTTZRLFdBQVcsR0FBR2xSLCtEQUFZLENBQUMsY0FBRCxDQUFoQztBQUVBLE1BQU1tUixVQUFVLEdBQUduUiwrREFBWSxDQUFDLGdCQUFELENBQS9CO0FBRUEsTUFBTW9SLGVBQWUsR0FBR3BSLCtEQUFZLENBQUMsaUJBQUQsQ0FBcEM7QUFFQSxNQUFNO0FBQ1hxUix1QkFEVztBQUVYQyw4QkFGVztBQUdYQztBQUhXLElBSVRsUixvRUFBaUIsQ0FBQyx1QkFBRCxFQUEwQixlQUExQixDQUpkO0FBS0EsTUFBTW1SLHlCQUF5QixHQUFHeFIsK0RBQVksQ0FBQyxrQkFBRCxDQUE5QztBQUNBLE1BQU15UixjQUFjLEdBQUd6UiwrREFBWSxDQUFDLGlCQUFELENBQW5DO0FBRUEsTUFBTTtBQUNYMFIsd0JBRFc7QUFFWEMsK0JBRlc7QUFHWEM7QUFIVyxJQUlUdlIsb0VBQWlCLENBQUMsd0JBQUQsRUFBMkIseUJBQTNCLENBSmQ7QUFLQSxNQUFNd1IseUJBQXlCLEdBQUc3UiwrREFBWSxDQUFDLDZCQUFELENBQTlDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ1A7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9PLE1BQU04UixLQUFLLEdBQUcsT0FBZDtBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFdBQXZCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFFBQXBCO0FBQ0EsTUFBTWhMLElBQUksR0FBRztBQUFFaUwsU0FBTyxFQUFFLE1BQVg7QUFBbUJDLFFBQU0sRUFBRTtBQUEzQixDQUFiO0FBRUEsTUFBZUMsVUFBZixDQUEwQjtBQUcvQkMsb0JBQWtCLENBQUNDLEtBQUQsRUFBZ0I7QUFDaENGLGNBQVUsQ0FBQ0UsS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDVUMsV0FBUyxDQUFDQyxRQUFELEVBQXFCO0FBQ3BDLFFBQUlBLFFBQVEsQ0FBQ3haLE1BQVQsS0FBb0IsR0FBcEIsSUFBMkJ3WixRQUFRLENBQUN4WixNQUFULEtBQW9CLEdBQW5ELEVBQXdEO0FBQ3RELGFBQU8sSUFBUDtBQUNEOztBQUNELFdBQU93WixRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUMyQixRQUFYQyxXQUFXLENBQUNGLFFBQUQsRUFBcUI7QUFDNUMsUUFBSUEsUUFBUSxDQUFDeFosTUFBVCxJQUFtQixHQUFuQixJQUEwQndaLFFBQVEsQ0FBQ3haLE1BQVQsR0FBa0IsR0FBaEQsRUFBcUQ7QUFDbkQsYUFBT3daLFFBQVA7QUFDRDs7QUFFRCxRQUFJQSxRQUFRLENBQUN4WixNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLFlBQU0sSUFBSTJaLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSUgsUUFBUSxDQUFDeFosTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixpQkFBcUIsRUFHcEI7QUFDRixLQWQyQyxDQWU1QztBQUNBO0FBQ0E7OztBQUNBLFVBQU13WixRQUFRLENBQUNJLEtBQVQsR0FBaUJILElBQWpCLEVBQU47QUFDRDs7QUFFREksU0FBTyxDQUNMaHVCLEdBREssRUFFTGdGLE1BRkssRUFHTGlwQixJQUhLLEVBSUxyVSxPQUpLLEVBS29CO0FBQ3pCLFVBQU1zVSxJQUFJLEdBQUcsQ0FBQ2xwQixNQUFNLElBQUksS0FBWCxFQUFrQjRaLFdBQWxCLEVBQWI7O0FBQ0EsVUFBTXVQLGFBQWE7QUFDakIsc0JBQWdCLGtCQURDO0FBRWpCO0FBQ0FDLG1CQUFhLEVBQ1hiLFVBQVUsQ0FBQ0UsS0FBWCxLQUFxQixRQUFrQlksU0FBbEIsR0FBc0MsRUFBM0Q7QUFKZSxPQUtielUsT0FBTyxJQUFJLEVBTEUsQ0FBbkI7O0FBT0EsVUFBTVosTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUVBLFdBQU9VLHlEQUFLLENBQUMyRSx5REFBSyxDQUFDdGUsR0FBRCxDQUFMLEdBQWFBLEdBQWIsR0FBb0IsR0FBRWdaLE1BQU0sQ0FBQ3NWLFlBQVAsSUFBdUJ0VixNQUFNLENBQUN1Vix3QkFBeUIsR0FBRXZ1QixHQUFJLEVBQXBGLEVBQXVGO0FBQ2pHZ0YsWUFBTSxFQUFFa3BCLElBRHlGO0FBRWpHdFUsYUFBTyxFQUFFdVUsYUFGd0Y7QUFHakdGLFVBQUksRUFBRUEsSUFBSSxHQUFHM1osSUFBSSxDQUFDQyxTQUFMLENBQWUwWixJQUFmLENBQUgsR0FBMEI7QUFINkQsS0FBdkYsQ0FBTCxDQUtKTyxJQUxJLENBS0MsS0FBS1gsV0FMTixFQU1KVyxJQU5JLENBTUMsS0FBS2QsU0FOTixDQUFQO0FBT0Q7O0FBRURlLFVBQVEsQ0FBQ0MsT0FBRCxFQUFrQmp1QixNQUFsQixFQUF5RTtBQUMvRSxRQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYLGFBQU9pdUIsT0FBUDtBQUNEOztBQUVELFVBQU1DLFdBQVcsR0FBR3p5QixNQUFNLENBQUNxTixJQUFQLENBQVk5SSxNQUFaLEVBQ2pCNlMsR0FEaUIsQ0FDWnNiLENBQUQsSUFBUSxHQUFFem1CLGtCQUFrQixDQUFDeW1CLENBQUQsQ0FBSSxJQUFHem1CLGtCQUFrQixDQUFDMUgsTUFBTSxDQUFDbXVCLENBQUQsQ0FBUCxDQUFZLEVBRHBELEVBRWpCbGEsSUFGaUIsQ0FFWixHQUZZLENBQXBCO0FBR0EsV0FBUSxHQUFFZ2EsT0FBUSxJQUFHQyxXQUFZLEVBQWpDO0FBQ0Q7O0FBRURyd0IsS0FBRyxDQUFDMEIsR0FBRCxFQUFjNFosT0FBZCxFQUFtRDtBQUNwRCxXQUFPLEtBQUtvVSxPQUFMLENBQWFodUIsR0FBYixFQUFrQixLQUFsQixFQUF5QixJQUF6QixFQUErQjRaLE9BQS9CLENBQVA7QUFDRDs7QUFFRGlWLE1BQUksQ0FBQzd1QixHQUFELEVBQWN5SCxJQUFkLEVBQTBCbVMsT0FBMUIsRUFBK0Q7QUFDakUsV0FBTyxLQUFLb1UsT0FBTCxDQUFhaHVCLEdBQWIsRUFBa0IsTUFBbEIsRUFBMEJ5SCxJQUExQixFQUFnQ21TLE9BQWhDLENBQVA7QUFDRDs7QUFFRGtWLEtBQUcsQ0FBQzl1QixHQUFELEVBQWN5SCxJQUFkLEVBQTBCbVMsT0FBMUIsRUFBK0Q7QUFDaEUsV0FBTyxLQUFLb1UsT0FBTCxDQUFhaHVCLEdBQWIsRUFBa0IsS0FBbEIsRUFBeUJ5SCxJQUF6QixFQUErQm1TLE9BQS9CLENBQVA7QUFDRDs7QUFFRG1WLEtBQUcsQ0FBQy91QixHQUFELEVBQWN5SCxJQUFkLEVBQTBCbVMsT0FBMUIsRUFBK0Q7QUFDaEUsV0FBTyxLQUFLb1UsT0FBTCxDQUFhaHVCLEdBQWIsRUFBa0IsUUFBbEIsRUFBNEJ5SCxJQUE1QixFQUFrQ21TLE9BQWxDLENBQVA7QUFDRDs7QUFFRG9WLFFBQU0sQ0FDSmh2QixHQURJLEVBRUppdkIsS0FGSSxFQU1KdnJCLE9BSUMsR0FBRztBQUNGd3JCLGNBQVUsR0FBRyxDQUFFLENBRGI7O0FBRUZscUIsVUFBTSxFQUFFO0FBRk4sR0FWQSxFQWNKO0FBQ0EsVUFBTWdVLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxVQUFNa1csU0FBUyxHQUFHN1EseURBQUssQ0FBQ3RlLEdBQUQsQ0FBTCxHQUFhQSxHQUFiLEdBQW9CLEdBQUVnWixNQUFNLENBQUN1Vix3QkFBeUIsR0FBRXZ1QixHQUFJLEVBQTlFO0FBQ0EsV0FBTyxJQUFJbUgsT0FBSixDQUFZLENBQUM4SCxPQUFELEVBQVVzVCxNQUFWLEtBQXFCO0FBQ3RDLFlBQU1pQixHQUFHLEdBQUcsSUFBSTRMLGNBQUosRUFBWjtBQUVBNUwsU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q24wQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDbzBCLGdCQUFWLEVBQTRCO0FBQzFCNXJCLGlCQUFPLENBQUN3ckIsVUFBUixDQUFtQjtBQUNqQkssc0JBQVUsRUFBR3IwQixLQUFLLENBQUNzMEIsTUFBTixHQUFldDBCLEtBQUssQ0FBQ2dhLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFzTyxTQUFHLENBQUM2TCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU0zekIsT0FBTyxHQUFHOG5CLEdBQUcsQ0FBQ3JQLE1BQUosSUFBYyxHQUFkLElBQXFCcVAsR0FBRyxDQUFDclAsTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFd1o7QUFBRixZQUFlbkssR0FBckI7O0FBQ0EsWUFBSSxDQUFDOW5CLE9BQUwsRUFBYztBQUNaLGlCQUFPNm1CLE1BQU0sQ0FBQ29MLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xZSxPQUFPLENBQUMwZSxRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FuSyxTQUFHLENBQUN3TCxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekM5TSxjQUFNLENBQUNpQixHQUFHLENBQUNtSyxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTThCLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FULFdBQUssQ0FBQzVTLE9BQU4sQ0FBZTRILENBQUQsSUFBT3dMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQjFMLENBQUMsQ0FBQzJMLFNBQWxCLEVBQTZCM0wsQ0FBQyxDQUFDdEwsSUFBL0IsRUFBcUNzTCxDQUFDLENBQUN0TCxJQUFGLENBQU9yWixJQUE1QyxDQUFyQjtBQUNBb0UsYUFBTyxDQUFDbXNCLFVBQVIsSUFDSzN6QixNQUFNLENBQUNxTixJQUFQLENBQVk3RixPQUFPLENBQUNtc0IsVUFBcEIsRUFBZ0N4VCxPQUFoQyxDQUNBdVQsU0FBRCxJQUFlLE9BQU9sc0IsT0FBTyxDQUFDbXNCLFVBQVIsQ0FBbUJELFNBQW5CLENBQVAsS0FBeUMsV0FBekMsSUFDVkgsUUFBUSxDQUFDRSxNQUFULENBQWdCQyxTQUFoQixFQUEyQmxzQixPQUFPLENBQUNtc0IsVUFBUixDQUFtQkQsU0FBbkIsQ0FBM0IsQ0FGSixDQURMO0FBTUFwTSxTQUFHLENBQUNzTSxZQUFKLEdBQW1CLE1BQW5CO0FBQ0F0TSxTQUFHLENBQUN1TSxJQUFKLENBQVNyc0IsT0FBTyxDQUFDc0IsTUFBUixJQUFrQixNQUEzQixFQUFtQ21xQixTQUFuQztBQUVBLFlBQU0xQixLQUFVLEdBQUdZLGdEQUFNLENBQUMvdkIsR0FBUCxDQUFXMHVCLEtBQVgsQ0FBbkI7O0FBQ0EsVUFBSVMsS0FBSixFQUFXO0FBQ1RqSyxXQUFHLENBQUN3TSxnQkFBSixDQUFxQixlQUFyQixFQUFzQ3ZDLEtBQXRDO0FBQ0Q7O0FBQ0RqSyxTQUFHLENBQUN5TSxJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQXhDTSxDQUFQO0FBeUNEOztBQUVEUyxVQUFRLENBQ05sd0IsR0FETSxFQUVOeUgsSUFGTSxFQUdOL0QsT0FBaUMsR0FBRztBQUNsQ3dyQixjQUFVLEdBQUcsQ0FBRTs7QUFEbUIsR0FIOUIsRUFNTjtBQUNBLFVBQU1sVyxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJOVIsT0FBSixDQUFZLENBQUM4SCxPQUFELEVBQVVzVCxNQUFWLEtBQXFCO0FBQ3RDLFlBQU1pQixHQUFHLEdBQUcsSUFBSTRMLGNBQUosRUFBWjtBQUVBNUwsU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q24wQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDbzBCLGdCQUFWLEVBQTRCO0FBQzFCNXJCLGlCQUFPLENBQUN3ckIsVUFBUixDQUFtQjtBQUNqQkssc0JBQVUsRUFBR3IwQixLQUFLLENBQUNzMEIsTUFBTixHQUFldDBCLEtBQUssQ0FBQ2dhLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFzTyxTQUFHLENBQUM2TCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU0zekIsT0FBTyxHQUFHOG5CLEdBQUcsQ0FBQ3JQLE1BQUosSUFBYyxHQUFkLElBQXFCcVAsR0FBRyxDQUFDclAsTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFd1o7QUFBRixZQUFlbkssR0FBckI7O0FBQ0EsWUFBSSxDQUFDOW5CLE9BQUwsRUFBYztBQUNaLGlCQUFPNm1CLE1BQU0sQ0FBQ29MLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xZSxPQUFPLENBQUMwZSxRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FuSyxTQUFHLENBQUN3TCxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekM5TSxjQUFNLENBQUNpQixHQUFHLENBQUNtSyxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTThCLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCLENBeEJzQyxDQXlCdEM7O0FBQ0EsVUFBSWpvQixJQUFJLENBQUMwb0Isb0JBQVQsRUFBK0I7QUFDN0IsY0FBTUMsd0JBQXdCLEdBQUczb0IsSUFBSSxDQUFDMG9CLG9CQUFMLENBQTBCeFgsSUFBMUIsQ0FBK0IySixhQUFoRTtBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUNFLHNCQURGLEVBRUVTLHdCQUZGLEVBR0VBLHdCQUF3QixDQUFDOXdCLElBSDNCO0FBS0Q7O0FBRUQsVUFBSW1JLElBQUksQ0FBQzRvQixjQUFULEVBQXlCO0FBQ3ZCLGNBQU1DLGtCQUFrQixHQUFHN29CLElBQUksQ0FBQzRvQixjQUFMLENBQW9CMVgsSUFBcEIsQ0FBeUIySixhQUFwRDtBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUNFLGdCQURGLEVBRUVXLGtCQUZGLEVBR0VBLGtCQUFrQixDQUFDaHhCLElBSHJCO0FBS0Q7O0FBRURwRCxZQUFNLENBQUNxTixJQUFQLENBQ0VnbkIsbURBQUksQ0FBQzlvQixJQUFELEVBQU8sQ0FBQyxzQkFBRCxFQUF5QixnQkFBekIsQ0FBUCxDQUROLEVBRUU0VSxPQUZGLENBRVd2RyxDQUFELElBQU87QUFDZjJaLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0I3WixDQUFoQixFQUFtQnJPLElBQUksQ0FBQ3FPLENBQUQsQ0FBdkI7QUFDRCxPQUpEO0FBTUEwTixTQUFHLENBQUNzTSxZQUFKLEdBQW1CLE1BQW5CO0FBQ0F0TSxTQUFHLENBQUN1TSxJQUFKLENBQVMsTUFBVCxFQUFpQnpSLHlEQUFLLENBQUN0ZSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFZ1osTUFBTSxDQUFDdVYsd0JBQXlCLEdBQUV2dUIsR0FBSSxFQUE3RTtBQUVBLFlBQU15dEIsS0FBVSxHQUFHWSxnREFBTSxDQUFDL3ZCLEdBQVAsQ0FBVzB1QixLQUFYLENBQW5COztBQUNBLFVBQUlTLEtBQUosRUFBVztBQUNUakssV0FBRyxDQUFDd00sZ0JBQUosQ0FBcUIsZUFBckIsRUFBc0N2QyxLQUF0QztBQUNEOztBQUNEakssU0FBRyxDQUFDeU0sSUFBSixDQUFTUixRQUFUO0FBQ0QsS0ExRE0sQ0FBUDtBQTJERDs7QUFwTzhCOztnQkFBWGxDLFUsV0FDRyxFOzs7Ozs7Ozs7Ozs7QUNwQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFJTyxNQUFNaUQsV0FBTixTQUEwQmpELHVEQUExQixDQUFxQztBQUMxQzNJLE9BQUssQ0FBQ25kLElBQUQsRUFBZTtBQUNsQixXQUFPLEtBQUtvbkIsSUFBTCxDQUFVLG1CQUFWLEVBQStCcG5CLElBQS9CLENBQVA7QUFDRDs7QUFFRGdwQixlQUFhLENBQUNoRCxLQUFELEVBQWdCaUQsSUFBaEIsRUFBOEI7QUFDekM7QUFDQTtBQUNBckMsb0RBQU0sQ0FBQy9uQixHQUFQLENBQVcwbUIsa0RBQVgsRUFBa0JTLEtBQWxCLEVBQXlCO0FBQUVrRCxhQUFPLEVBQUU7QUFBWCxLQUF6QjtBQUNBdEMsb0RBQU0sQ0FBQy9uQixHQUFQLENBQVcybUIsaURBQVgsRUFBaUJ5RCxJQUFqQixFQUF1QjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUF2QjtBQUNBLFNBQUtuRCxrQkFBTCxDQUF3QkMsS0FBeEI7QUFDRDs7QUFFRG1ELGdCQUFjLENBQUNucEIsSUFBRCxFQUF3QjtBQUNwQyxXQUFPLEtBQUtvbkIsSUFBTCxDQUFVLHdCQUFWLEVBQW9DcG5CLElBQXBDLENBQVA7QUFDRDs7QUFFRDBkLGFBQVcsQ0FBQzFkLElBQUQsRUFBZTtBQUN4QixXQUFPLEtBQUtvbkIsSUFBTCxDQUFVLG9CQUFWLEVBQWdDcG5CLElBQWhDLENBQVA7QUFDRDs7QUFFRG9wQixVQUFRLENBQUNwRCxLQUFELEVBQXNCO0FBQzVCO0FBQ0E7QUFDQVksb0RBQU0sQ0FBQy9uQixHQUFQLENBQVcwbUIsa0RBQVgsRUFBa0JTLEtBQWxCLEVBQXlCO0FBQUVrRCxhQUFPLEVBQUU7QUFBWCxLQUF6QjtBQUNBLFNBQUtuRCxrQkFBTCxDQUF3QkMsS0FBeEI7QUFDRDs7QUFFRHFELFVBQVEsR0FBVztBQUNqQixVQUFNckQsS0FBSyxHQUFHWSxnREFBTSxDQUFDL3ZCLEdBQVAsQ0FBVzB1QixrREFBWCxDQUFkO0FBQ0EsV0FBT1MsS0FBSyxJQUFJLElBQWhCO0FBQ0Q7O0FBRURzRCxTQUFPLEdBQVc7QUFDaEIsVUFBTUwsSUFBSSxHQUFHckMsZ0RBQU0sQ0FBQy92QixHQUFQLENBQVcydUIsaURBQVgsQ0FBYjtBQUNBLFdBQU95RCxJQUFJLElBQUksSUFBZjtBQUNEOztBQUVETSxhQUFXLEdBQVM7QUFDbEIzQyxvREFBTSxDQUFDNEMsTUFBUCxDQUFjakUsa0RBQWQ7QUFDQXFCLG9EQUFNLENBQUM0QyxNQUFQLENBQWNoRSxpREFBZDtBQUNEOztBQUVEaUUsZ0JBQWMsR0FBUztBQUNyQixjQUFtQjdDLEtBQW5CO0FBQ0Q7O0FBRUR2SSxnQkFBYyxDQUFDbUksSUFBRCxFQUE4QztBQUMxRCxXQUFPLEtBQUthLEdBQUwsQ0FBUyx5QkFBVCxFQUFvQ2IsSUFBcEMsQ0FBUDtBQUNEOztBQUVEa0Qsb0JBQWtCLENBQUMxcEIsSUFBRCxFQUF3QztBQUN4RCxXQUFPLEtBQUt5b0IsUUFBTCxDQUFjLDJCQUFkLEVBQTJDem9CLElBQTNDLENBQVA7QUFDRDs7QUFFRGllLGNBQVksQ0FBQ2plLElBQUQsRUFBdUQ7QUFDakUsV0FBTyxLQUFLb25CLElBQUwsQ0FBVSxzQkFBVixFQUFrQ3BuQixJQUFsQyxDQUFQO0FBQ0Q7O0FBRUQycEIsZ0JBQWMsQ0FBQzNwQixJQUFELEVBQXdDO0FBQ3BELFdBQU8sS0FBS3lvQixRQUFMLENBQWMsdUJBQWQsRUFBdUN6b0IsSUFBdkMsQ0FBUDtBQUNEOztBQUVENHBCLGdCQUFjLENBQUN0VyxLQUFELEVBQWdCakksSUFBaEIsRUFBOEI7QUFDMUMsVUFBTXJMLElBQUksR0FBRztBQUNYc1QsV0FEVztBQUVYakk7QUFGVyxLQUFiO0FBSUEsV0FBTyxLQUFLK2IsSUFBTCxDQUFVLG9CQUFWLEVBQWdDcG5CLElBQWhDLENBQVA7QUFDRDs7QUFFRDZwQix5QkFBdUIsQ0FBQzdwQixJQUFELEVBQXlDO0FBQzlELFdBQU8sS0FBS29uQixJQUFMLENBQVUseUNBQVYsRUFBcURwbkIsSUFBckQsQ0FBUDtBQUNEOztBQXpFeUM7QUE0RXJDLE1BQU04cEIsV0FBVyxHQUFHLElBQUlmLFdBQUosRUFBcEIsQzs7Ozs7Ozs7Ozs7O0FDdEZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNZ0IsYUFBTixTQUE0QmpFLHVEQUE1QixDQUF1QztBQUM1QzNrQixRQUFNLENBQUMxSCxLQUFELEVBQXVCO0FBQzNCLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ3Z0QixLQUFqQyxDQUFULENBQVA7QUFDRDs7QUFIMkM7QUFNdkMsTUFBTXV3QixhQUFhLEdBQUcsSUFBSUQsYUFBSixFQUF0QixDOzs7Ozs7Ozs7Ozs7QUNUUDtBQUFBO0FBQUE7QUFBQSxJQUFJRSxZQUFZLEdBQUcsRUFBbkI7QUFFTyxNQUFNQyxlQUFlLEdBQUkzWSxNQUFELElBQWlCO0FBQzlDMFksY0FBWSxHQUFHMVksTUFBZjtBQUNELENBRk07QUFJQSxNQUFNQyxlQUFlLEdBQUcsTUFBTXlZLFlBQTlCLEM7Ozs7Ozs7Ozs7OztBQ05QO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1FLGNBQU4sU0FBNkJyRSx1REFBN0IsQ0FBd0M7QUFDdEMza0IsUUFBTSxDQUFDbkksTUFBRCxFQUFxQ2l3QixJQUFJLEdBQUcsV0FBNUMsRUFBeUQ7QUFDN0QsV0FBTyxLQUFLcHlCLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBZSxZQUFXaUMsSUFBSyxTQUEvQixFQUF5Q2p3QixNQUF6QyxDQUFULENBQVA7QUFDRDs7QUFFRGtVLE9BQUssQ0FBQ2xVLE1BQUQsRUFBcUNpd0IsSUFBSSxHQUFHLFdBQTVDLEVBQXlEO0FBQzVELFdBQU8sS0FBS3B5QixHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWUsWUFBV2lDLElBQUssUUFBL0IsRUFBd0Nqd0IsTUFBeEMsQ0FBVCxDQUFQO0FBQ0Q7O0FBUHFDOztBQVVqQyxNQUFNb3hCLGNBQWMsR0FBRyxJQUFJRCxjQUFKLEVBQXZCLEM7Ozs7Ozs7Ozs7OztBQ1pQO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1FLGdCQUFOLFNBQStCdkUsdURBQS9CLENBQTBDO0FBQ3hDd0UsTUFBSSxDQUFDOVMsRUFBRCxFQUFhO0FBQ2YsV0FBTyxLQUFLNFAsSUFBTCxDQUFXLGNBQWE1UCxFQUFHLE9BQTNCLENBQVA7QUFDRDs7QUFFRCtTLFFBQU0sQ0FBQy9TLEVBQUQsRUFBYTtBQUNqQixXQUFPLEtBQUs0UCxJQUFMLENBQVcsY0FBYTVQLEVBQUcsU0FBM0IsQ0FBUDtBQUNEOztBQUVEalEsVUFBUSxDQUFDaVEsRUFBRCxFQUFhZ1QsV0FBYixFQUFtQztBQUN6QyxXQUFPLEtBQUtwRCxJQUFMLENBQVcsY0FBYTVQLEVBQUcsSUFBR2dULFdBQVcsR0FBRyxRQUFILEdBQWMsTUFBTyxFQUE5RCxDQUFQO0FBQ0Q7O0FBRURycEIsUUFBTSxDQUFDMUgsS0FBRCxFQUFtQztBQUN2QyxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMsWUFBZCxFQUE0QnZ0QixLQUE1QixDQUFULENBQVA7QUFDRDs7QUFmdUM7O0FBa0JuQyxNQUFNNk4sZ0JBQWdCLEdBQUcsSUFBSStpQixnQkFBSixFQUF6QixDOzs7Ozs7Ozs7Ozs7QUNuQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1JLGNBQU4sU0FBNkIzRSx1REFBN0IsQ0FBd0M7QUFDN0Mza0IsUUFBTSxDQUNKbkksTUFESSxFQUVKMHhCLFdBQVcsR0FBRyxJQUZWLEVBR2tEO0FBQ3RELFdBQU8sS0FBSzd6QixHQUFMLENBQ0wsS0FBS213QixRQUFMLENBQ0UwRCxXQUFXLEdBQ1AsOENBRE8sR0FFUCx5Q0FITixFQUlFMXhCLE1BSkYsQ0FESyxDQUFQO0FBUUQ7O0FBRUQyeEIsV0FBUyxDQUFDM3hCLE1BQUQsRUFFZ0Q7QUFDdkQsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLGlDQUFkLEVBQWlEaHVCLE1BQWpELENBQVQsQ0FBUDtBQUNEOztBQUVENHhCLFFBQU0sQ0FBQzVxQixJQUFELEVBQU87QUFDWCxXQUFPLEtBQUtvbkIsSUFBTCxDQUFVLHVDQUFWLEVBQW1EcG5CLElBQW5ELENBQVA7QUFDRDs7QUFFRDZxQixRQUFNLENBQUNyVCxFQUFELEVBQUt4WCxJQUFMLEVBQVc7QUFDZixXQUFPLEtBQUtxbkIsR0FBTCxDQUFVLHlDQUF3QzdQLEVBQUcsRUFBckQsRUFBd0R4WCxJQUF4RCxDQUFQO0FBQ0Q7O0FBRUQ4cUIsU0FBTyxDQUFDdFQsRUFBRCxFQUFhckYsT0FBYixFQUFrRDtBQUN2RCxXQUFPLEtBQUt0YixHQUFMLENBQ0oseUNBQXdDMmdCLEVBQUcsT0FEdkMsRUFFTHJGLE9BRkssQ0FBUDtBQUlEOztBQUVENFksZUFBYSxDQUFDdlQsRUFBRCxFQUFhckYsT0FBYixFQUFrRDtBQUM3RCxXQUFPLEtBQUt0YixHQUFMLENBQVUsb0NBQW1DMmdCLEVBQUcsT0FBaEQsRUFBd0RyRixPQUF4RCxDQUFQO0FBQ0Q7O0FBRURxWCxRQUFNLENBQUNoUyxFQUFELEVBQWE7QUFDakIsV0FBTyxLQUFLOFAsR0FBTCxDQUFVLHlDQUF3QzlQLEVBQUcsRUFBckQsQ0FBUDtBQUNEOztBQTFDNEM7QUE2Q3hDLE1BQU13VCxjQUFjLEdBQUcsSUFBSVAsY0FBSixFQUF2QixDOzs7Ozs7Ozs7Ozs7QUNoRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1RLGNBQU4sU0FBNkJuRix1REFBN0IsQ0FBd0M7QUFDN0NvRixrQkFBZ0IsQ0FBQ3p4QixLQUFELEVBQThCO0FBQzVDLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxnQkFBZCxFQUFnQ3Z0QixLQUFoQyxDQUFULENBQVA7QUFDRDs7QUFFRDB4QixxQkFBbUIsQ0FBQzF4QixLQUFELEVBQThCO0FBQy9DLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyx1QkFBZCxFQUF1Q3Z0QixLQUF2QyxDQUFULENBQVA7QUFDRDs7QUFFRDJ4QixvQkFBa0IsQ0FBQ3ByQixJQUFELEVBQStCO0FBQy9DLFdBQU8sS0FBS29uQixJQUFMLENBQVUsZ0JBQVYsRUFBNEJwbkIsSUFBNUIsQ0FBUDtBQUNEOztBQUVEcXJCLHVCQUFxQixDQUFDN1QsRUFBRCxFQUFhO0FBQ2hDLFdBQU8sS0FBSzNnQixHQUFMLENBQVUsa0JBQWlCMmdCLEVBQUcsRUFBOUIsQ0FBUDtBQUNEOztBQUVEOFQsMkJBQXlCLENBQUNDLFFBQUQsRUFBbUI7QUFDMUMsV0FBTyxLQUFLMTBCLEdBQUwsQ0FBVSx5QkFBd0IwMEIsUUFBUyxFQUEzQyxDQUFQO0FBQ0Q7O0FBRURDLGFBQVcsQ0FBQ0MsY0FBRCxFQUF5Qmh5QixLQUF6QixFQUFzRDtBQUMvRCxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWUsMkJBQTBCeUUsY0FBZSxFQUF4RCxFQUEyRGh5QixLQUEzRCxDQUFULENBQVA7QUFDRDs7QUFFRGl5QixtQkFBaUIsQ0FBQ0QsY0FBRCxFQUF5Qmh5QixLQUF6QixFQUFzRDtBQUNyRSxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWUsa0NBQWlDeUUsY0FBZSxFQUEvRCxFQUFrRWh5QixLQUFsRSxDQUFULENBQVA7QUFDRDs7QUFFRGt5QixhQUFXLENBQUNGLGNBQUQsRUFBeUJ6ckIsSUFBekIsRUFBb0Q7QUFDN0QsV0FBTyxLQUFLb25CLElBQUwsQ0FBVywyQkFBMEJxRSxjQUFlLEVBQXBELEVBQXVEenJCLElBQXZELENBQVA7QUFDRDs7QUFFRDRyQixtQkFBaUIsQ0FBQ0gsY0FBRCxFQUF5QnpyQixJQUF6QixFQUFvRDtBQUNuRSxXQUFPLEtBQUtvbkIsSUFBTCxDQUFXLGtDQUFpQ3FFLGNBQWUsRUFBM0QsRUFBOER6ckIsSUFBOUQsQ0FBUDtBQUNEOztBQUVENnJCLHlCQUF1QixDQUFDSixjQUFELEVBQXlCenJCLElBQXpCLEVBQW9EO0FBQ3pFLFdBQU8sS0FBS29uQixJQUFMLENBQVcseUNBQXdDcUUsY0FBZSxFQUFsRSxFQUFxRXpyQixJQUFyRSxDQUFQO0FBQ0Q7O0FBRUQ4ckIsaUNBQStCLENBQUNDLFdBQUQsRUFBc0I7QUFDbkQsV0FBTyxLQUFLbDFCLEdBQUwsQ0FBVSxnQ0FBK0JrMUIsV0FBWSxFQUFyRCxDQUFQO0FBQ0Q7O0FBRURDLG1CQUFpQixHQUFHO0FBQ2xCLFdBQU8sS0FBS24xQixHQUFMLENBQVMsc0NBQVQsQ0FBUDtBQUNEOztBQUVEbzFCLHVCQUFxQixDQUFDUixjQUFELEVBQWtDUyxXQUFsQyxFQUF1RDtBQUMxRSxXQUFPLEtBQUs5RSxJQUFMLENBQVUsb0JBQVYsRUFBZ0M7QUFBRXFFLG9CQUFGO0FBQWtCUztBQUFsQixLQUFoQyxDQUFQO0FBQ0Q7O0FBRURDLHFCQUFtQixHQUFHO0FBQ3BCLFVBQU01YSxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBUSxHQUFFRCxNQUFNLENBQUN1Vix3QkFBeUIsd0JBQTFDO0FBQ0Q7O0FBRURzRixlQUFhLENBQUM1VSxFQUFELEVBQUs7QUFDaEIsV0FBTyxLQUFLOFAsR0FBTCxDQUFVLGFBQVk5UCxFQUFHLEVBQXpCLENBQVA7QUFDRDs7QUFFRDZVLGdDQUE4QixDQUFDWixjQUFELEVBQWlCO0FBQzdDLFdBQU8sS0FBS25FLEdBQUwsQ0FBVSxhQUFZbUUsY0FBZSxxQkFBckMsQ0FBUDtBQUNEOztBQWhFNEM7QUFtRXhDLE1BQU1hLGNBQWMsR0FBRyxJQUFJckIsY0FBSixFQUF2QixDOzs7Ozs7Ozs7Ozs7QUN0RVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTXNCLFlBQU4sU0FBMkJ6Ryx1REFBM0IsQ0FBc0M7QUFDM0Mza0IsUUFBTSxDQUFDcXJCLE9BQUQsRUFBVTtBQUNkLFdBQU8sS0FBSzMxQixHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMsZ0JBQWQsRUFBZ0N3RixPQUFoQyxDQUFULENBQVA7QUFDRDs7QUFFRDFCLFNBQU8sQ0FBQ3RULEVBQUQsRUFBSztBQUNWLFdBQU8sS0FBSzNnQixHQUFMLENBQVUsbUJBQWtCMmdCLEVBQUcsRUFBL0IsQ0FBUDtBQUNEOztBQUVEcVQsUUFBTSxDQUFDclQsRUFBRCxFQUFLeFgsSUFBTCxFQUFXO0FBQ2YsV0FBTyxLQUFLcW5CLEdBQUwsQ0FBVSxXQUFVN1AsRUFBRyxTQUF2QixFQUFpQ3hYLElBQWpDLENBQVA7QUFDRDs7QUFFRHlzQixZQUFVLENBQUNoekIsS0FBRCxFQUFRO0FBQ2hCLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxxQkFBZCxFQUFxQ3Z0QixLQUFyQyxDQUFULENBQVA7QUFDRDs7QUFFRGl6QixpQkFBZSxDQUFDbFYsRUFBRCxFQUFLO0FBQ2xCLFdBQU8sS0FBSzNnQixHQUFMLENBQVUsd0JBQXVCMmdCLEVBQUcsRUFBcEMsQ0FBUDtBQUNEOztBQW5CMEM7QUFzQnRDLE1BQU1tVixZQUFZLEdBQUcsSUFBSUosWUFBSixFQUFyQixDOzs7Ozs7Ozs7Ozs7QUN6QlA7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUsseUJBQU4sU0FBd0M5Ryx1REFBeEMsQ0FBbUQ7QUFDakQ4RSxRQUFNLENBQUM1cUIsSUFBRCxFQUFPO0FBQ1gsV0FBTyxLQUFLb25CLElBQUwsQ0FBVSxzQkFBVixFQUFrQ3BuQixJQUFsQyxDQUFQO0FBQ0Q7O0FBRUQ2c0IsU0FBTyxDQUFDN3NCLElBQUQsRUFBTztBQUNaLFdBQU8sS0FBS25KLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxzQkFBZCxFQUFzQ2huQixJQUF0QyxDQUFULENBQVA7QUFDRDs7QUFQZ0Q7O0FBVTVDLE1BQU04c0IseUJBQXlCLEdBQUcsSUFBSUYseUJBQUosRUFBbEMsQzs7Ozs7Ozs7Ozs7O0FDWFA7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUcsb0JBQU4sU0FBbUNqSCx1REFBbkMsQ0FBOEM7QUFDNUNrSCxXQUFTLENBQUNoMEIsTUFBRCxFQUFvQ2l3QixJQUFwQyxFQUFrRDtBQUN6RCxXQUFPLEtBQUtweUIsR0FBTCxDQUNMLEtBQUttd0IsUUFBTCxDQUFlLFlBQVdpQyxJQUFJLElBQUksV0FBWSxTQUE5QyxFQUF3RGp3QixNQUF4RCxDQURLLENBQVA7QUFHRDs7QUFFRG1JLFFBQU0sQ0FBQzFILEtBQUQsRUFBbUM7QUFDdkMsV0FBTyxLQUFLNUMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLG1DQUFkLEVBQW1EdnRCLEtBQW5ELENBQVQsQ0FBUDtBQUNEOztBQUVEd3pCLGNBQVksQ0FBQ3h6QixLQUFELEVBQW1DO0FBQzdDLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxnQ0FBZCxFQUFnRHZ0QixLQUFoRCxDQUFULENBQVA7QUFDRDs7QUFFRG14QixRQUFNLENBQUNwRSxJQUFELEVBQVl5QyxJQUFJLEdBQUcsV0FBbkIsRUFBZ0M7QUFDcEMsV0FBTyxLQUFLN0IsSUFBTCxDQUFXLG9CQUFtQjZCLElBQUssRUFBbkMsRUFBc0N6QyxJQUF0QyxDQUFQO0FBQ0Q7O0FBRURxRSxRQUFNLENBQUNyVCxFQUFELEVBQWFnUCxJQUFiLEVBQXdCeUMsSUFBSSxHQUFHLFdBQS9CLEVBQTRDO0FBQ2hELFdBQU8sS0FBSzVCLEdBQUwsQ0FBVSxvQkFBbUI0QixJQUFLLElBQUd6UixFQUFHLEVBQXhDLEVBQTJDZ1AsSUFBM0MsQ0FBUDtBQUNEOztBQUVEMEcsUUFBTSxDQUNKMVYsRUFESSxFQUVKckYsT0FGSSxFQUtKOFcsSUFBSSxHQUFHLFdBTEgsRUFNc0M7QUFDMUMsV0FBTyxLQUFLcHlCLEdBQUwsQ0FBVSxvQkFBbUJveUIsSUFBSyxJQUFHelIsRUFBRyxPQUF4QyxFQUFnRHJGLE9BQWhELENBQVA7QUFDRDs7QUEvQjJDOztBQWtDdkMsTUFBTWdiLG9CQUFvQixHQUFHLElBQUlKLG9CQUFKLEVBQTdCLEM7Ozs7Ozs7Ozs7OztBQ3JDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUssMEJBQU4sU0FBeUN0SCx1REFBekMsQ0FBb0Q7QUFDekR1SCxTQUFPLENBQUM1ekIsS0FBRCxFQUFpQztBQUN0QyxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMsdUJBQWQsRUFBdUN2dEIsS0FBdkMsQ0FBVCxDQUFQO0FBQ0Q7O0FBRURxeEIsU0FBTyxDQUFDdFQsRUFBRCxFQUFhO0FBQ2xCLFdBQU8sS0FBSzNnQixHQUFMLENBQVUseUJBQXdCMmdCLEVBQUcsT0FBckMsQ0FBUDtBQUNEOztBQVB3RDtBQVVwRCxNQUFNOFYsbUJBQW1CLEdBQUcsSUFBSUYsMEJBQUosRUFBNUIsQzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxNQUFNRyxnQkFBTixTQUErQnpILHVEQUEvQixDQUEwQztBQUMvQzBILElBQUUsQ0FBQ3JiLE9BQUQsRUFBc0U7QUFDdEUsV0FBTyxLQUFLdGIsR0FBTCxDQUFTLGdCQUFULEVBQTJCc2IsT0FBM0IsQ0FBUDtBQUNEOztBQUVEc2IsVUFBUSxDQUFDakIsT0FBRCxFQUFlO0FBQ3JCLFdBQU8sS0FBS25GLEdBQUwsQ0FBUyxhQUFULEVBQXdCbUYsT0FBeEIsQ0FBUDtBQUNEOztBQUVEcnJCLFFBQU0sQ0FBQzFILEtBQUQsRUFBaUM7QUFDckMsV0FBTyxLQUFLNUMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLG9CQUFkLEVBQW9DdnRCLEtBQXBDLENBQVQsQ0FBUDtBQUNEOztBQUVEcXhCLFNBQU8sQ0FBQy9kLFFBQUQsRUFBbUJvRixPQUFPLEdBQUcsRUFBN0IsRUFBaUU7QUFDdEUsV0FBTyxLQUFLdGIsR0FBTCxDQUFVLGVBQWNrVyxRQUFTLE9BQWpDLEVBQXlDb0YsT0FBekMsQ0FBUDtBQUNEOztBQUVEdWIsb0JBQWtCLEdBQUc7QUFDbkIsVUFBTW5jLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxXQUFRLEdBQUVELE1BQU0sQ0FBQ3VWLHdCQUF5QiwyQkFBMUM7QUFDRDs7QUFFRDZHLHVCQUFxQixHQUFHO0FBQ3RCLFVBQU1wYyxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBUSxHQUFFRCxNQUFNLENBQUN1Vix3QkFBeUIsOEJBQTFDO0FBQ0Q7O0FBRUQ4RyxtQkFBaUIsR0FBRztBQUNsQixVQUFNcmMsTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQVEsR0FBRUQsTUFBTSxDQUFDdVYsd0JBQXlCLGlDQUExQztBQUNEOztBQUVEK0csV0FBUyxDQUFDcDBCLEtBQUQsRUFBaUM7QUFDeEMsV0FBTyxLQUFLNUMsR0FBTCxDQUNMLEtBQUttd0IsUUFBTCxDQUFjLDZDQUFkLEVBQTZEdnRCLEtBQTdELENBREssQ0FBUDtBQUdEOztBQUVEcTBCLGVBQWEsQ0FDWHYxQixHQURXLEVBRVh5SCxJQUZXLEVBR1gvRCxPQUFpQyxHQUFHO0FBQ2xDd3JCLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUh6QixFQU1jO0FBQ3pCLFVBQU1sVyxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJOVIsT0FBSixDQUFZLENBQUM4SCxPQUFELEVBQVVzVCxNQUFWLEtBQXFCO0FBQ3RDLFlBQU1pQixHQUFHLEdBQUcsSUFBSTRMLGNBQUosRUFBWjtBQUVBNUwsU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q24wQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDbzBCLGdCQUFWLEVBQTRCO0FBQzFCNXJCLGlCQUFPLENBQUN3ckIsVUFBUixDQUFtQjtBQUNqQkssc0JBQVUsRUFBR3IwQixLQUFLLENBQUNzMEIsTUFBTixHQUFldDBCLEtBQUssQ0FBQ2dhLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFzTyxTQUFHLENBQUM2TCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU0zekIsT0FBTyxHQUFHOG5CLEdBQUcsQ0FBQ3JQLE1BQUosSUFBYyxHQUFkLElBQXFCcVAsR0FBRyxDQUFDclAsTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFd1o7QUFBRixZQUFlbkssR0FBckI7O0FBQ0EsWUFBSSxDQUFDOW5CLE9BQUwsRUFBYztBQUNaLGlCQUFPNm1CLE1BQU0sQ0FBQ29MLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xZSxPQUFPLENBQUMwZSxRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FuSyxTQUFHLENBQUN3TCxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekM5TSxjQUFNLENBQUNpQixHQUFHLENBQUNtSyxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTThCLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCLENBeEJzQyxDQXlCdEM7O0FBQ0EsVUFBSWpvQixJQUFJLENBQUMrdEIsS0FBVCxFQUFnQjtBQUNkLGNBQU1BLEtBQUssR0FBRy90QixJQUFJLENBQUMrdEIsS0FBTCxDQUFXN2MsSUFBWCxDQUFnQjJKLGFBQTlCO0FBQ0FtTixnQkFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCNkYsS0FBekIsRUFBZ0NBLEtBQUssQ0FBQ2wyQixJQUF0QztBQUNEOztBQUVELFVBQUltSSxJQUFJLENBQUNndUIsV0FBVCxFQUFzQjtBQUNwQixjQUFNQSxXQUFXLEdBQUdodUIsSUFBSSxDQUFDZ3VCLFdBQUwsQ0FBaUI5YyxJQUFqQixDQUFzQjJKLGFBQTFDO0FBQ0FtTixnQkFBUSxDQUFDRSxNQUFULENBQWdCLGFBQWhCLEVBQStCOEYsV0FBL0IsRUFBNENBLFdBQVcsQ0FBQ24yQixJQUF4RDtBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZZ25CLG1EQUFJLENBQUM5b0IsSUFBRCxFQUFPLENBQUMsT0FBRCxFQUFVLGFBQVYsQ0FBUCxDQUFoQixFQUFrRDRVLE9BQWxELENBQTJEdkcsQ0FBRCxJQUFPO0FBQy9EMlosZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQjdaLENBQWhCLEVBQW1Cck8sSUFBSSxDQUFDcU8sQ0FBRCxDQUF2QjtBQUNELE9BRkQ7QUFJQTBOLFNBQUcsQ0FBQ3NNLFlBQUosR0FBbUIsTUFBbkI7QUFDQXRNLFNBQUcsQ0FBQ3VNLElBQUosQ0FBUyxNQUFULEVBQWlCelIseURBQUssQ0FBQ3RlLEdBQUQsQ0FBTCxHQUFhQSxHQUFiLEdBQW9CLEdBQUVnWixNQUFNLENBQUN1Vix3QkFBeUIsR0FBRXZ1QixHQUFJLEVBQTdFO0FBRUEsWUFBTXl0QixLQUFVLEdBQUdZLGdEQUFNLENBQUMvdkIsR0FBUCxDQUFXMHVCLGtEQUFYLENBQW5COztBQUNBLFVBQUlTLEtBQUosRUFBVztBQUNUakssV0FBRyxDQUFDd00sZ0JBQUosQ0FBcUIsZUFBckIsRUFBc0N2QyxLQUF0QztBQUNEOztBQUNEakssU0FBRyxDQUFDeU0sSUFBSixDQUFTUixRQUFUO0FBQ0QsS0FoRE0sQ0FBUDtBQWlERDs7QUFFRGlHLGVBQWEsQ0FDWDExQixHQURXLEVBRVh5SCxJQUZXLEVBR1gvRCxPQUFpQyxHQUFHO0FBQ2xDd3JCLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUh6QixFQU1jO0FBQ3pCLFVBQU1sVyxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJOVIsT0FBSixDQUFZLENBQUM4SCxPQUFELEVBQVVzVCxNQUFWLEtBQXFCO0FBQ3RDLFlBQU1pQixHQUFHLEdBQUcsSUFBSTRMLGNBQUosRUFBWjtBQUVBNUwsU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q24wQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDbzBCLGdCQUFWLEVBQTRCO0FBQzFCNXJCLGlCQUFPLENBQUN3ckIsVUFBUixDQUFtQjtBQUNqQkssc0JBQVUsRUFBR3IwQixLQUFLLENBQUNzMEIsTUFBTixHQUFldDBCLEtBQUssQ0FBQ2dhLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFzTyxTQUFHLENBQUM2TCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU0zekIsT0FBTyxHQUFHOG5CLEdBQUcsQ0FBQ3JQLE1BQUosSUFBYyxHQUFkLElBQXFCcVAsR0FBRyxDQUFDclAsTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFd1o7QUFBRixZQUFlbkssR0FBckI7O0FBQ0EsWUFBSSxDQUFDOW5CLE9BQUwsRUFBYztBQUNaLGlCQUFPNm1CLE1BQU0sQ0FBQ29MLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xZSxPQUFPLENBQUMwZSxRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FuSyxTQUFHLENBQUN3TCxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekM5TSxjQUFNLENBQUNpQixHQUFHLENBQUNtSyxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTThCLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCLENBeEJzQyxDQXlCdEM7O0FBQ0EsVUFBSWpvQixJQUFJLENBQUMrdEIsS0FBTCxJQUFjL3RCLElBQUksQ0FBQyt0QixLQUFMLENBQVc3YyxJQUE3QixFQUFtQztBQUNqQyxjQUFNNmMsS0FBSyxHQUFHL3RCLElBQUksQ0FBQyt0QixLQUFMLENBQVc3YyxJQUFYLENBQWdCMkosYUFBOUI7QUFDQW1OLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUI2RixLQUF6QixFQUFnQ0EsS0FBSyxDQUFDbDJCLElBQXRDO0FBQ0Q7O0FBRUQsVUFBSW1JLElBQUksQ0FBQ2d1QixXQUFMLElBQW9CaHVCLElBQUksQ0FBQ2d1QixXQUFMLENBQWlCOWMsSUFBekMsRUFBK0M7QUFDN0MsY0FBTThjLFdBQVcsR0FBR2h1QixJQUFJLENBQUNndUIsV0FBTCxDQUFpQjljLElBQWpCLENBQXNCMkosYUFBMUM7QUFDQW1OLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsYUFBaEIsRUFBK0I4RixXQUEvQixFQUE0Q0EsV0FBVyxDQUFDbjJCLElBQXhEO0FBQ0Q7O0FBRURwRCxZQUFNLENBQUNxTixJQUFQLENBQVlnbkIsbURBQUksQ0FBQzlvQixJQUFELEVBQU8sQ0FBQyxPQUFELEVBQVUsYUFBVixDQUFQLENBQWhCLEVBQWtENFUsT0FBbEQsQ0FBMkR2RyxDQUFELElBQU87QUFDL0QyWixnQkFBUSxDQUFDRSxNQUFULENBQWdCN1osQ0FBaEIsRUFBbUJyTyxJQUFJLENBQUNxTyxDQUFELENBQXZCO0FBQ0QsT0FGRDtBQUlBME4sU0FBRyxDQUFDc00sWUFBSixHQUFtQixNQUFuQjtBQUNBdE0sU0FBRyxDQUFDdU0sSUFBSixDQUFTLEtBQVQsRUFBZ0J6Uix5REFBSyxDQUFDdGUsR0FBRCxDQUFMLEdBQWFBLEdBQWIsR0FBb0IsR0FBRWdaLE1BQU0sQ0FBQ3VWLHdCQUF5QixHQUFFdnVCLEdBQUksRUFBNUU7QUFFQSxZQUFNeXRCLEtBQVUsR0FBR1ksZ0RBQU0sQ0FBQy92QixHQUFQLENBQVcwdUIsa0RBQVgsQ0FBbkI7O0FBQ0EsVUFBSVMsS0FBSixFQUFXO0FBQ1RqSyxXQUFHLENBQUN3TSxnQkFBSixDQUFxQixlQUFyQixFQUFzQ3ZDLEtBQXRDO0FBQ0Q7O0FBQ0RqSyxTQUFHLENBQUN5TSxJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQWhETSxDQUFQO0FBaUREOztBQUVEa0csZUFBYSxDQUFDMVcsRUFBRCxFQUFhO0FBQ3hCLFdBQU8sS0FBSzhQLEdBQUwsQ0FBVSx3Q0FBdUM5UCxFQUFHLEVBQXBELENBQVA7QUFDRDs7QUFFRDJXLGVBQWEsR0FBRztBQUNkLFdBQU8sS0FBS3QzQixHQUFMLENBQVMsZ0NBQVQsQ0FBUDtBQUNEOztBQUVEdW9CLG1CQUFpQixDQUFDb04sT0FBRCxFQUEwQztBQUN6RCxXQUFPLEtBQUtwRixJQUFMLENBQVUsa0NBQVYsRUFBOENvRixPQUE5QyxDQUFQO0FBQ0Q7O0FBRUQ0QixvQkFBa0IsQ0FBQzVCLE9BQUQsRUFBMEM7QUFDMUQsV0FBTyxLQUFLcEYsSUFBTCxDQUFVLG1DQUFWLEVBQStDb0YsT0FBL0MsQ0FBUDtBQUNEOztBQUVEbE4sYUFBVyxDQUFDa04sT0FBRCxFQUEwQztBQUNuRCxXQUFPLEtBQUtwRixJQUFMLENBQVUsMEJBQVYsRUFBc0NvRixPQUF0QyxDQUFQO0FBQ0Q7O0FBRURqTixjQUFZLENBQUNpTixPQUFELEVBQTBDO0FBQ3BELFdBQU8sS0FBS3BGLElBQUwsQ0FBVSwyQkFBVixFQUF1Q29GLE9BQXZDLENBQVA7QUFDRDs7QUFFRGhOLHVCQUFxQixDQUFDZ04sT0FBRCxFQUVjO0FBQ2pDLFdBQU8sS0FBS3BGLElBQUwsQ0FBVSxxQ0FBVixFQUFpRG9GLE9BQWpELENBQVA7QUFDRDs7QUFFRDZCLFVBQVEsQ0FBQzdCLE9BQUQsRUFBK0U7QUFDckYsV0FBTyxLQUFLcEYsSUFBTCxDQUFVLDZCQUFWLEVBQXlDb0YsT0FBekMsQ0FBUDtBQUNEOztBQUVEOEIsZ0JBQWMsR0FBNEI7QUFDeEMsV0FBTyxLQUFLejNCLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxzQkFBZCxDQUFULENBQVA7QUFDRDs7QUFFRHVILGNBQVksQ0FBQ3hDLFdBQUQsRUFBYztBQUN4QixXQUFPLEtBQUszRSxJQUFMLENBQVcsZUFBYzJFLFdBQVksV0FBckMsQ0FBUDtBQUNEOztBQUVEdE0sb0JBQWtCLENBQUMrTSxPQUFELEVBQTBDO0FBQzFELFdBQU8sS0FBS3BGLElBQUwsQ0FBVSxrQ0FBVixFQUE4Q29GLE9BQTlDLENBQVA7QUFDRDs7QUFFRGdDLHdCQUFzQixDQUFDaEMsT0FBRCxFQUFtQztBQUN2RCxXQUFPLEtBQUtwRixJQUFMLENBQVUsc0NBQVYsRUFBa0RvRixPQUFsRCxDQUFQO0FBQ0Q7O0FBRURpQyxnQkFBYyxDQUFDQyxRQUFELEVBQW1CO0FBQy9CLFdBQU8sS0FBS3RILElBQUwsQ0FBVSw2QkFBVixFQUF5QztBQUFFc0g7QUFBRixLQUF6QyxDQUFQO0FBQ0Q7O0FBRURDLFlBQVUsQ0FBQzVDLFdBQUQsRUFBc0I7QUFDOUIsV0FBTyxLQUFLbDFCLEdBQUwsQ0FBVSxlQUFjazFCLFdBQVksaUJBQXBDLENBQVA7QUFDRDs7QUFwTjhDO0FBdU4xQyxNQUFNNkMsaUJBQWlCLEdBQUcsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixNQUExQixDQUExQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLElBQUl0QixnQkFBSixFQUF6QixDOzs7Ozs7Ozs7Ozs7QUNyT1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFTyxNQUFNdUIsWUFBTixTQUEyQmhKLG1FQUEzQixDQUFzQztBQUMzQzNrQixRQUFNLENBQUNuSSxNQUFELEVBRXdDO0FBQzVDLFdBQU8sS0FBS25DLEdBQUwsQ0FDTCxLQUFLbXdCLFFBQUwsQ0FBYywyQ0FBZCxFQUEyRGh1QixNQUEzRCxDQURLLENBQVA7QUFHRDs7QUFFRCsxQixpQkFBZSxDQUNiQyxTQURhLEVBRWJoMkIsTUFGYSxFQUtibVosT0FMYSxFQU1iO0FBQ0EsV0FBTyxLQUFLdGIsR0FBTCxDQUNMLEtBQUttd0IsUUFBTCxDQUNHLGlDQUFnQ2dJLFNBQVUsU0FEN0MsRUFFRWgyQixNQUZGLENBREssRUFLTG1aLE9BTEssQ0FBUDtBQU9EOztBQUVEMlksU0FBTyxDQUFDdFQsRUFBRCxFQUFhckYsT0FBYixFQUFrRDtBQUN2RCxXQUFPLEtBQUt0YixHQUFMLENBQVUsc0NBQXFDMmdCLEVBQUcsT0FBbEQsRUFBMERyRixPQUExRCxDQUFQO0FBQ0Q7O0FBRUQ4YyxVQUFRLENBQUN4MUIsS0FBRCxFQUFpQztBQUN2QyxXQUFPLEtBQUs1QyxHQUFMLENBQ0wsS0FBS213QixRQUFMLENBQWMsMkNBQWQsRUFBMkR2dEIsS0FBM0QsQ0FESyxDQUFQO0FBR0Q7O0FBRUQrdkIsUUFBTSxDQUFDaFMsRUFBRCxFQUFhO0FBQ2pCLFdBQU8sS0FBSzhQLEdBQUwsQ0FBVSxzQ0FBcUM5UCxFQUFHLEVBQWxELENBQVA7QUFDRDs7QUFFRG9ULFFBQU0sQ0FDSnJ5QixHQURJLEVBRUp5SCxJQUZJLEVBR0ovRCxPQUFpQyxHQUFHO0FBQ2xDd3JCLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUhoQyxFQU1xQjtBQUN6QixVQUFNbFcsTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQU8sSUFBSTlSLE9BQUosQ0FBWSxDQUFDOEgsT0FBRCxFQUFVc1QsTUFBVixLQUFxQjtBQUN0QyxZQUFNaUIsR0FBRyxHQUFHLElBQUk0TCxjQUFKLEVBQVo7QUFFQTVMLFNBQUcsQ0FBQ3dMLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBeUNuMEIsS0FBRCxJQUFXO0FBQ2pELFlBQUlBLEtBQUssQ0FBQ28wQixnQkFBVixFQUE0QjtBQUMxQjVyQixpQkFBTyxDQUFDd3JCLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUdyMEIsS0FBSyxDQUFDczBCLE1BQU4sR0FBZXQwQixLQUFLLENBQUNnYSxLQUF0QixHQUErQjtBQUQxQixXQUFuQjtBQUdEO0FBQ0YsT0FORDtBQVFBc08sU0FBRyxDQUFDNkwsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsTUFBTTtBQUNqQyxjQUFNM3pCLE9BQU8sR0FBRzhuQixHQUFHLENBQUNyUCxNQUFKLElBQWMsR0FBZCxJQUFxQnFQLEdBQUcsQ0FBQ3JQLE1BQUosR0FBYSxHQUFsRDtBQUNBLGNBQU07QUFBRXdaO0FBQUYsWUFBZW5LLEdBQXJCOztBQUNBLFlBQUksQ0FBQzluQixPQUFMLEVBQWM7QUFDWixpQkFBTzZtQixNQUFNLENBQUNvTCxRQUFELENBQWI7QUFDRDs7QUFDRCxlQUFPMWUsT0FBTyxDQUFDMGUsUUFBRCxDQUFkO0FBQ0QsT0FQRDtBQVNBbkssU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxNQUFNO0FBQ3pDOU0sY0FBTSxDQUFDaUIsR0FBRyxDQUFDbUssUUFBTCxDQUFOO0FBQ0QsT0FGRDtBQUlBLFlBQU04QixRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQixDQXhCc0MsQ0F5QnRDOztBQUNBLFVBQUlqb0IsSUFBSSxDQUFDc0wsS0FBVCxFQUFnQjtBQUNkLGNBQU1BLEtBQUssR0FBR3RMLElBQUksQ0FBQ3NMLEtBQUwsQ0FBVzRGLElBQVgsQ0FBZ0IySixhQUE5QjtBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QjVjLEtBQXpCLEVBQWdDQSxLQUFLLENBQUN6VCxJQUF0QztBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZZ25CLG1EQUFJLENBQUM5b0IsSUFBRCxFQUFPLENBQUMsT0FBRCxDQUFQLENBQWhCLEVBQW1DNFUsT0FBbkMsQ0FBNEN2RyxDQUFELElBQU87QUFDaEQyWixnQkFBUSxDQUFDRSxNQUFULENBQWdCN1osQ0FBaEIsRUFBbUJyTyxJQUFJLENBQUNxTyxDQUFELENBQXZCO0FBQ0QsT0FGRDtBQUlBME4sU0FBRyxDQUFDc00sWUFBSixHQUFtQixNQUFuQjtBQUNBdE0sU0FBRyxDQUFDdU0sSUFBSixDQUFTLE1BQVQsRUFBaUJ6Uix5REFBSyxDQUFDdGUsR0FBRCxDQUFMLEdBQWFBLEdBQWIsR0FBb0IsR0FBRWdaLE1BQU0sQ0FBQ3VWLHdCQUF5QixHQUFFdnVCLEdBQUksRUFBN0U7QUFFQSxZQUFNeXRCLEtBQVUsR0FBR1ksZ0RBQU0sQ0FBQy92QixHQUFQLENBQVcwdUIsOERBQVgsQ0FBbkI7O0FBQ0EsVUFBSVMsS0FBSixFQUFXO0FBQ1RqSyxXQUFHLENBQUN3TSxnQkFBSixDQUFxQixlQUFyQixFQUFzQ3ZDLEtBQXRDO0FBQ0Q7O0FBQ0RqSyxTQUFHLENBQUN5TSxJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQTNDTSxDQUFQO0FBNENEOztBQUVENkMsUUFBTSxDQUNKdHlCLEdBREksRUFFSnlILElBRkksRUFHSi9ELE9BQWlDLEdBQUc7QUFDbEN3ckIsY0FBVSxHQUFHLENBQUU7O0FBRG1CLEdBSGhDLEVBTXFCO0FBQ3pCLFVBQU1sVyxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJOVIsT0FBSixDQUFZLENBQUM4SCxPQUFELEVBQVVzVCxNQUFWLEtBQXFCO0FBQ3RDLFlBQU1pQixHQUFHLEdBQUcsSUFBSTRMLGNBQUosRUFBWjtBQUVBNUwsU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q24wQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDbzBCLGdCQUFWLEVBQTRCO0FBQzFCNXJCLGlCQUFPLENBQUN3ckIsVUFBUixDQUFtQjtBQUNqQkssc0JBQVUsRUFBR3IwQixLQUFLLENBQUNzMEIsTUFBTixHQUFldDBCLEtBQUssQ0FBQ2dhLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFzTyxTQUFHLENBQUM2TCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU0zekIsT0FBTyxHQUFHOG5CLEdBQUcsQ0FBQ3JQLE1BQUosSUFBYyxHQUFkLElBQXFCcVAsR0FBRyxDQUFDclAsTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFd1o7QUFBRixZQUFlbkssR0FBckI7O0FBQ0EsWUFBSSxDQUFDOW5CLE9BQUwsRUFBYztBQUNaLGlCQUFPNm1CLE1BQU0sQ0FBQ29MLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xZSxPQUFPLENBQUMwZSxRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FuSyxTQUFHLENBQUN3TCxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekM5TSxjQUFNLENBQUNpQixHQUFHLENBQUNtSyxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTThCLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCLENBeEJzQyxDQXlCdEM7O0FBQ0EsVUFBSWpvQixJQUFJLENBQUNzTCxLQUFMLElBQWN0TCxJQUFJLENBQUNzTCxLQUFMLENBQVc0RixJQUE3QixFQUFtQztBQUNqQyxjQUFNNUYsS0FBSyxHQUFHdEwsSUFBSSxDQUFDc0wsS0FBTCxDQUFXNEYsSUFBWCxDQUFnQjJKLGFBQTlCO0FBQ0FtTixnQkFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCNWMsS0FBekIsRUFBZ0NBLEtBQUssQ0FBQ3pULElBQXRDO0FBQ0Q7O0FBRURwRCxZQUFNLENBQUNxTixJQUFQLENBQVlnbkIsbURBQUksQ0FBQzlvQixJQUFELEVBQU8sQ0FBQyxPQUFELENBQVAsQ0FBaEIsRUFBbUM0VSxPQUFuQyxDQUE0Q3ZHLENBQUQsSUFBTztBQUNoRDJaLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0I3WixDQUFoQixFQUFtQnJPLElBQUksQ0FBQ3FPLENBQUQsQ0FBdkI7QUFDRCxPQUZEO0FBSUEwTixTQUFHLENBQUNzTSxZQUFKLEdBQW1CLE1BQW5CO0FBQ0F0TSxTQUFHLENBQUN1TSxJQUFKLENBQVMsS0FBVCxFQUFnQnpSLHlEQUFLLENBQUN0ZSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFZ1osTUFBTSxDQUFDdVYsd0JBQXlCLEdBQUV2dUIsR0FBSSxFQUE1RTtBQUVBLFlBQU15dEIsS0FBVSxHQUFHWSxnREFBTSxDQUFDL3ZCLEdBQVAsQ0FBVzB1Qiw4REFBWCxDQUFuQjs7QUFDQSxVQUFJUyxLQUFKLEVBQVc7QUFDVGpLLFdBQUcsQ0FBQ3dNLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDdkMsS0FBdEM7QUFDRDs7QUFDRGpLLFNBQUcsQ0FBQ3lNLElBQUosQ0FBU1IsUUFBVDtBQUNELEtBM0NNLENBQVA7QUE0Q0Q7O0FBRURrSCxjQUFZLENBQUNoZSxJQUFELEVBQWFzYixPQUFiLEVBQTJCL0UsVUFBM0IsRUFBa0Q7QUFDNUQsV0FBTyxLQUFLRixNQUFMLENBQ0wsMkNBREssRUFFTCxDQUNFO0FBQ0VZLGVBQVMsRUFBRSxPQURiO0FBRUVqWDtBQUZGLEtBREYsQ0FGSyxFQVFMO0FBQ0V1VyxnQkFERjtBQUVFVyxnQkFBVSxFQUFFb0U7QUFGZCxLQVJLLENBQVA7QUFhRDs7QUFqSzBDO0FBb0t0QyxNQUFNMkMsWUFBWSxHQUFHLElBQUlMLFlBQUosRUFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMUDtBQUVPLE1BQU1NLFdBQU4sU0FBMEJ0Six1REFBMUIsQ0FBcUM7QUFDMUMza0IsUUFBTSxDQUFDMUgsS0FBRCxFQUFxQjtBQUN6QixXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMsZUFBZCxFQUErQnZ0QixLQUEvQixDQUFULENBQVA7QUFDRDs7QUFFRDQxQixVQUFRLENBQUM3WCxFQUFELEVBQWE7QUFDbkIsV0FBTyxLQUFLM2dCLEdBQUwsQ0FBVSxVQUFTMmdCLEVBQUcsRUFBdEIsQ0FBUDtBQUNEOztBQUVEOFgscUJBQW1CLENBQUN0dkIsSUFBRCxFQUE0QjtBQUM3QyxXQUFPLEtBQUtvbkIsSUFBTCxDQUFVLFVBQVYsb0JBQTJCcG5CLElBQTNCLEVBQVA7QUFDRDs7QUFYeUM7QUFjckMsTUFBTXV2QixXQUFXLEdBQUcsSUFBSUgsV0FBSixFQUFwQixDOzs7Ozs7Ozs7Ozs7QUNqQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1JLGNBQU4sU0FBNkIxSix1REFBN0IsQ0FBd0M7QUFDN0NnRixTQUFPLENBQUN0VCxFQUFELEVBQWFyRixPQUFiLEVBQW1EO0FBQ3hELFdBQU8sS0FBS3RiLEdBQUwsQ0FBVSx3Q0FBdUMyZ0IsRUFBRyxPQUFwRCxFQUE0RHJGLE9BQTVELENBQVA7QUFDRDs7QUFFRGhSLFFBQU0sQ0FBQ25JLE1BQUQsRUFBa0M7QUFDdEMsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLHdDQUFkLEVBQXdEaHVCLE1BQXhELENBQVQsQ0FBUDtBQUNEOztBQUVEMnhCLFdBQVMsQ0FBQzN4QixNQUFELEVBQWtDO0FBQ3pDLFdBQU8sS0FBS25DLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyxnQ0FBZCxFQUFnRGh1QixNQUFoRCxDQUFULENBQVA7QUFDRDs7QUFFRHkyQixpQkFBZSxDQUFDalksRUFBRCxFQUFhO0FBQzFCLFdBQU8sS0FBSzNnQixHQUFMLENBQVUsbUNBQWtDMmdCLEVBQUcsZ0JBQS9DLENBQVA7QUFDRDs7QUFmNEM7QUFrQnhDLE1BQU1rWSxjQUFjLEdBQUcsSUFBSUYsY0FBSixFQUF2QixDOzs7Ozs7Ozs7Ozs7QUNwQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1HLG1CQUFOLFNBQWtDN0osdURBQWxDLENBQTZDO0FBQ2xEM2tCLFFBQU0sQ0FBQzFILEtBQUQsRUFBUTtBQUNaLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyw4QkFBZCxFQUE4Q3Z0QixLQUE5QyxDQUFULENBQVA7QUFDRDs7QUFFRG0yQixjQUFZLENBQUNwWSxFQUFELEVBQWFuTSxJQUFiLEVBQTJCckwsSUFBM0IsRUFBdUM7QUFDakQsV0FBTyxLQUFLb25CLElBQUwsQ0FBVyxtQkFBa0IvYixJQUFLLElBQUdtTSxFQUFHLEVBQXhDLEVBQTJDeFgsSUFBM0MsQ0FBUDtBQUNEOztBQUVENnZCLGlCQUFlLENBQUNyWSxFQUFELEVBQWE7QUFDMUIsV0FBTyxLQUFLNFAsSUFBTCxDQUFXLDJCQUEwQjVQLEVBQUcsRUFBeEMsQ0FBUDtBQUNEOztBQUVEc1ksZUFBYSxDQUFDdFksRUFBRCxFQUFhO0FBQ3hCLFdBQU8sS0FBSzRQLElBQUwsQ0FBVyx5QkFBd0I1UCxFQUFHLEVBQXRDLENBQVA7QUFDRDs7QUFmaUQ7QUFrQjdDLE1BQU11WSxtQkFBbUIsR0FBRyxJQUFJSixtQkFBSixFQUE1QixDOzs7Ozs7Ozs7Ozs7QUNwQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1LLG9CQUFOLFNBQW1DbEssdURBQW5DLENBQThDO0FBQ25EOEUsUUFBTSxDQUFDNXFCLElBQUQsRUFBTztBQUNYLFdBQU8sS0FBS29uQixJQUFMLENBQVUsa0JBQVYsRUFBOEJwbkIsSUFBOUIsQ0FBUDtBQUNEOztBQUVEbUIsUUFBTSxDQUFDbkksTUFBRCxFQUFrQztBQUN0QyxXQUFPLEtBQUtuQyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMseUJBQWQsRUFBeUNodUIsTUFBekMsQ0FBVCxDQUFQO0FBQ0Q7O0FBUGtEO0FBVTlDLE1BQU1pM0Isb0JBQW9CLEdBQUcsSUFBSUQsb0JBQUosRUFBN0IsQzs7Ozs7Ozs7Ozs7O0FDWFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1FLGNBQU4sU0FBNkJwSyx1REFBN0IsQ0FBd0M7QUFDN0NodUIsS0FBRyxDQUFDcTRCLEtBQUssR0FBRyxFQUFULEVBQTJDO0FBQzVDLFdBQU8sS0FBS3Q1QixHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMsa0JBQWQsRUFBa0M7QUFBRW1KO0FBQUYsS0FBbEMsQ0FBVCxDQUFQO0FBQ0Q7O0FBRURDLGNBQVksR0FBcUM7QUFDL0MsV0FBTyxLQUFLdjVCLEdBQUwsQ0FBUyxpQkFBVCxDQUFQO0FBQ0Q7O0FBRUR3NUIsY0FBWSxHQUFpQztBQUMzQyxXQUFPLEtBQUt4NUIsR0FBTCxDQUFTLGlCQUFULENBQVA7QUFDRDs7QUFYNEM7QUFjeEMsTUFBTXk1QixjQUFjLEdBQUcsSUFBSUosY0FBSixFQUF2QixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLGFBQU4sU0FBNEJ6Syx1REFBNUIsQ0FBdUM7QUFDckMwSyxjQUFZLENBQUNoWixFQUFELEVBQWFuTSxJQUFiLEVBQTJCO0FBQ3JDLFdBQU8sS0FBS3hVLEdBQUwsQ0FBVSxzQkFBcUIyZ0IsRUFBRyxJQUFHbk0sSUFBSyxFQUExQyxDQUFQO0FBQ0Q7O0FBRURvbEIsUUFBTSxHQUFHO0FBQ1AsV0FBTyxLQUFLckosSUFBTCxDQUFVLGlCQUFWLENBQVA7QUFDRDs7QUFFRHNKLGdCQUFjLENBQUMzRSxXQUFELEVBQXNCO0FBQ2xDLFdBQU8sS0FBSzNFLElBQUwsQ0FBVyxtQkFBa0IyRSxXQUFZLEVBQXpDLENBQVA7QUFDRDs7QUFFRDRFLG9CQUFrQixDQUFDNUUsV0FBRCxFQUFzQjtBQUN0QyxXQUFPLEtBQUszRSxJQUFMLENBQVcsMkJBQTBCMkUsV0FBWSxFQUFqRCxDQUFQO0FBQ0Q7O0FBRUQ2RSxtQkFBaUIsQ0FBQ3BaLEVBQUQsRUFBYTtBQUM1QixXQUFPLEtBQUszZ0IsR0FBTCxDQUFVLDJCQUEwQjJnQixFQUFHLEVBQXZDLENBQVA7QUFDRDs7QUFFRHFaLGdCQUFjLEdBQUc7QUFDZixXQUFPLEtBQUt6SixJQUFMLENBQVUsdUJBQVYsQ0FBUDtBQUNEOztBQUVEMEosZUFBYSxDQUFDdFosRUFBRCxFQUFhO0FBQ3hCLFdBQU8sS0FBSzNnQixHQUFMLENBQVUseUJBQXdCMmdCLEVBQUcsRUFBckMsQ0FBUDtBQUNEOztBQUVEdVosc0JBQW9CLENBQUMvd0IsSUFBRCxFQUFzQjtBQUN4QyxXQUFPLEtBQUtvbkIsSUFBTCxDQUFVLGtCQUFWLEVBQThCcG5CLElBQTlCLENBQVA7QUFDRDs7QUFFb0IsUUFBZmd4QixlQUFlLENBQUMvMEIsT0FBRCxFQUdoQmcxQixVQUFVLEdBQUcvZ0IsNkNBQU0sR0FBR2doQixHQUFULENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQkMsTUFBckIsR0FBOEJDLE9BQTlCLEVBSEcsRUFHdUQ7QUFDMUUsUUFBSTtBQUNGLFlBQU07QUFBRW5wQixnQkFBRjtBQUFZc2pCO0FBQVosVUFBeUJ0dkIsT0FBL0I7QUFDQSxZQUFNO0FBQUVvMUI7QUFBRixVQUFtQnBwQixRQUF6Qjs7QUFDQSxVQUFJb3BCLFlBQUosRUFBa0I7QUFDaEIsY0FBTUMsSUFBSSxHQUFHLE1BQU0sS0FBS1Asb0JBQUwsQ0FBMEI7QUFDM0N2WixZQUFFLEVBQUUrVCxRQUR1QztBQUUzQ2xnQixjQUFJLEVBQUUsU0FGcUM7QUFHM0M0bEI7QUFIMkMsU0FBMUIsQ0FBbkI7QUFLQSxlQUFPSyxJQUFJLENBQUN0eEIsSUFBTCxDQUFVdXhCLE9BQWpCO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0QsS0FiRCxDQWFFLE9BQU9oK0IsR0FBUCxFQUFZO0FBQ1osWUFBTTJLLEtBQUssR0FBRyxNQUFNd0IsT0FBTyxDQUFDOEgsT0FBUixDQUFnQmpVLEdBQWhCLENBQXBCO0FBQ0E0RCxrREFBTyxDQUFDK0csS0FBUixDQUFjdUosZ0VBQWdCLENBQUN2SixLQUFELENBQTlCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFdUIsUUFBbEJzekIsa0JBQWtCLENBQUN2MUIsT0FBRCxFQUduQmcxQixVQUFVLEdBQUcvZ0IsNkNBQU0sR0FBR2doQixHQUFULENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQkMsTUFBckIsR0FBOEJDLE9BQTlCLEVBSE0sRUFHb0Q7QUFDMUUsUUFBSTtBQUNGLFlBQU07QUFBRW5wQixnQkFBRjtBQUFZc2pCO0FBQVosVUFBeUJ0dkIsT0FBL0I7QUFDQSxZQUFNO0FBQUVvMUI7QUFBRixVQUFtQnBwQixRQUF6Qjs7QUFDQSxVQUFJb3BCLFlBQUosRUFBa0I7QUFDaEIsY0FBTUMsSUFBSSxHQUFHLE1BQU0sS0FBS1Asb0JBQUwsQ0FBMEI7QUFDM0N2WixZQUFFLEVBQUUrVCxRQUR1QztBQUUzQ2xnQixjQUFJLEVBQUUsTUFGcUM7QUFHM0M0bEI7QUFIMkMsU0FBMUIsQ0FBbkI7QUFLQSxlQUFPSyxJQUFJLENBQUN0eEIsSUFBTCxDQUFVdXhCLE9BQWpCO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0QsS0FiRCxDQWFFLE9BQU9oK0IsR0FBUCxFQUFZO0FBQ1osWUFBTTJLLEtBQUssR0FBRyxNQUFNd0IsT0FBTyxDQUFDOEgsT0FBUixDQUFnQmpVLEdBQWhCLENBQXBCO0FBQ0E0RCxrREFBTyxDQUFDK0csS0FBUixDQUFjdUosZ0VBQWdCLENBQUN2SixLQUFELENBQTlCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFMEIsUUFBckJ1ekIscUJBQXFCLENBQUN4MUIsT0FBRCxFQUl0QmcxQixVQUFVLEdBQUcvZ0IsNkNBQU0sR0FBR2doQixHQUFULENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQkMsTUFBckIsR0FBOEJDLE9BQTlCLEVBSlMsRUFJZ0NNLE9BQU8sR0FBRyxLQUoxQyxFQUlpRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxRQUFJO0FBQ0Y7QUFDQTtBQUNBLFlBQU07QUFBRUMsZUFBRjtBQUFXMXBCLGdCQUFYO0FBQXFCc2pCO0FBQXJCLFVBQWtDdHZCLE9BQXhDO0FBQ0EsWUFBTTtBQUFFbzFCLG9CQUFGO0FBQWdCTztBQUFoQixVQUE4QjNwQixRQUFwQztBQUNBLFlBQU00cEIsU0FBUyxHQUFHSCxPQUFPLEtBQUssS0FBWixHQUFvQixNQUFwQixHQUE2QixLQUEvQzs7QUFDQSxVQUFJLENBQUNFLFNBQUQsSUFBYyxDQUFDRCxPQUFuQixFQUE0QjtBQUMxQixlQUFPLEVBQVA7QUFDRDs7QUFFRCxVQUFJRyxZQUFZLEdBQUcsRUFBbkI7O0FBQ0EsVUFBSVQsWUFBSixFQUFrQjtBQUNoQixjQUFNQyxJQUFJLEdBQUcsTUFBTSxLQUFLUCxvQkFBTCxDQUEwQjtBQUMzQ3ZaLFlBQUUsRUFBRStULFFBRHVDO0FBRTNDbGdCLGNBQUksRUFBRSxNQUZxQztBQUczQzRsQjtBQUgyQyxTQUExQixDQUFuQjtBQUtBYSxvQkFBWSxHQUFHUixJQUFJLENBQUN0eEIsSUFBTCxDQUFVdXhCLE9BQXpCO0FBQ0Q7O0FBRUQsWUFBTTtBQUFFM3dCO0FBQUYsVUFBZWpPLE1BQU0sQ0FBQ21tQixRQUE1QjtBQUNBLGFBQVEsR0FBRWxZLFFBQVMsS0FBSWd4QixTQUFVLElBQUdELE9BQVEsWUFBV3BHLFFBQVMsSUFBR3NHLFNBQVUsR0FBRUMsWUFBWSxHQUFJLFVBQVNBLFlBQWEsRUFBMUIsR0FBOEIsRUFBRyxFQUE1SDtBQUNELEtBdEJELENBc0JFLE9BQU92K0IsR0FBUCxFQUFZO0FBQ1osWUFBTTJLLEtBQUssR0FBRyxNQUFNd0IsT0FBTyxDQUFDOEgsT0FBUixDQUFnQmpVLEdBQWhCLENBQXBCO0FBQ0E0RCxrREFBTyxDQUFDK0csS0FBUixDQUFjdUosZ0VBQWdCLENBQUN2SixLQUFELENBQTlCO0FBQ0EsYUFBTyxFQUFQO0FBQ0Q7QUFDRjs7QUFwSG9DOztBQXVIaEMsTUFBTTZ6QixhQUFhLEdBQUcsSUFBSXhCLGFBQUosRUFBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SFA7QUFDQTtBQUVPLE1BQU15QixhQUFOLFNBQTRCbE0sdURBQTVCLENBQXVDO0FBQzVDMEgsSUFBRSxDQUFDcmIsT0FBRCxFQUFtRTtBQUNuRSxXQUFPLEtBQUt0YixHQUFMLENBQVMsWUFBVCxFQUF1QnNiLE9BQXZCLENBQVA7QUFDRDs7QUFFRDBZLFFBQU0sQ0FBQzJCLE9BQUQsRUFBZTtBQUNuQixXQUFPLEtBQUtuRixHQUFMLENBQVMsZ0JBQVQsRUFBMkJtRixPQUEzQixDQUFQO0FBQ0Q7O0FBRURwTixtQkFBaUIsQ0FBQ29OLE9BQUQsRUFBdUM7QUFDdEQsV0FBTyxLQUFLcEYsSUFBTCxDQUFVLDhCQUFWLEVBQTBDb0YsT0FBMUMsQ0FBUDtBQUNEOztBQUVENEIsb0JBQWtCLENBQUM1QixPQUFELEVBQXVDO0FBQ3ZELFdBQU8sS0FBS3BGLElBQUwsQ0FBVSwrQkFBVixFQUEyQ29GLE9BQTNDLENBQVA7QUFDRDs7QUFFRGxOLGFBQVcsQ0FBQ2tOLE9BQUQsRUFBdUM7QUFDaEQsV0FBTyxLQUFLcEYsSUFBTCxDQUFVLHNCQUFWLEVBQWtDb0YsT0FBbEMsQ0FBUDtBQUNEOztBQUVEak4sY0FBWSxDQUFDaU4sT0FBRCxFQUF1QztBQUNqRCxXQUFPLEtBQUtwRixJQUFMLENBQVUsdUJBQVYsRUFBbUNvRixPQUFuQyxDQUFQO0FBQ0Q7O0FBRUQyQixlQUFhLEdBQUc7QUFDZCxXQUFPLEtBQUt0M0IsR0FBTCxDQUFTLDZCQUFULENBQVA7QUFDRDs7QUFFRG83QixVQUFRLENBQUN6RixPQUFELEVBQVU7QUFDaEIsV0FBTyxLQUFLcEYsSUFBTCxDQUFVLGlCQUFWLEVBQTZCb0YsT0FBN0IsQ0FBUDtBQUNEOztBQUVEaEosWUFBVSxDQUFDeHFCLE1BQUQsRUFBcUM7QUFDN0MsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLGlCQUFkLEVBQWlDaHVCLE1BQWpDLENBQVQsQ0FBUDtBQUNEOztBQUVEazVCLHNCQUFvQixDQUFDbDVCLE1BQUQsRUFBcUM7QUFDdkQsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLG9CQUFkLEVBQW9DaHVCLE1BQXBDLENBQVQsQ0FBUDtBQUNEOztBQUVEbTVCLHdCQUFzQixDQUFDM2EsRUFBRCxFQUFhZ1YsT0FBYixFQUEyQjtBQUMvQyxXQUFPLEtBQUtuRixHQUFMLENBQVUsNkJBQTRCN1AsRUFBRyxFQUF6QyxFQUE0Q2dWLE9BQTVDLENBQVA7QUFDRDs7QUFFRHBKLHFCQUFtQixDQUFDcHFCLE1BQUQsRUFBcUM7QUFDdEQsV0FBTyxLQUFLbkMsR0FBTCxDQUNMLEtBQUttd0IsUUFBTCxDQUFjLDJDQUFkLEVBQTJEaHVCLE1BQTNELENBREssQ0FBUDtBQUdEOztBQUVEbzVCLDhCQUE0QixDQUFDNWEsRUFBRCxFQUFhZ1YsT0FBYixFQUFzQjtBQUNoRCxXQUFPLEtBQUtuRixHQUFMLENBQVUsa0NBQWlDN1AsRUFBRyxFQUE5QyxvQkFBc0RnVixPQUF0RCxFQUFQO0FBQ0Q7O0FBRUQ1SSxvQkFBa0IsQ0FBQ3BNLEVBQUQsRUFBYTlLLE1BQWIsRUFBNkI7QUFDN0MsV0FBTyxLQUFLMGEsSUFBTCxDQUFXLG1CQUFrQjVQLEVBQUcsSUFBRzlLLE1BQU8sRUFBMUMsQ0FBUDtBQUNEOztBQUVEUSxPQUFLLEdBQUc7QUFDTixXQUFPLEtBQUtyVyxHQUFMLENBQVMsZUFBVCxDQUFQO0FBQ0Q7O0FBRUQ4MkIsdUJBQXFCLEdBQUc7QUFDdEIsVUFBTXBjLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxXQUFRLEdBQUVELE1BQU0sQ0FBQ3VWLHdCQUF5QiwwQkFBMUM7QUFDRDs7QUFsRTJDO0FBcUV2QyxNQUFNdUwsYUFBYSxHQUFHLElBQUlMLGFBQUosRUFBdEIsQzs7Ozs7Ozs7Ozs7O0FDekVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNTSxtQkFBTixTQUFrQ3hNLHVEQUFsQyxDQUE2QztBQUNsRDNrQixRQUFNLENBQUNuSSxNQUFELEVBQXFDO0FBQ3pDLFdBQU8sS0FBS25DLEdBQUwsQ0FBUyxLQUFLbXdCLFFBQUwsQ0FBYyx1QkFBZCxFQUF1Q2h1QixNQUF2QyxDQUFULENBQVA7QUFDRDs7QUFFRHU1QixXQUFTLENBQUMvYSxFQUFELEVBQWE7QUFDcEIsV0FBTyxLQUFLNFAsSUFBTCxDQUFXLDRCQUEyQjVQLEVBQUcsRUFBekMsQ0FBUDtBQUNEOztBQVBpRDtBQVU3QyxNQUFNZ2IsbUJBQW1CLEdBQUcsSUFBSUYsbUJBQUosRUFBNUIsQzs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1HLGtCQUFOLFNBQWlDM00sdURBQWpDLENBQTRDO0FBQ2pEM2tCLFFBQU0sQ0FBQ25JLE1BQUQsRUFBa0M7QUFDdEMsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUttd0IsUUFBTCxDQUFjLDJCQUFkLEVBQTJDaHVCLE1BQTNDLENBQVQsQ0FBUDtBQUNEOztBQUVEMDVCLGNBQVksQ0FBQzNHLFdBQUQsRUFBc0IvRixLQUF0QixFQUFxQ3lGLGNBQXJDLEVBQThEO0FBQ3hFLFdBQU8sS0FBS3JFLElBQUwsQ0FBVywwQkFBeUIyRSxXQUFZLEVBQWhELEVBQW1EO0FBQUUvRixXQUFGO0FBQVN5RjtBQUFULEtBQW5ELENBQVA7QUFDRDs7QUFFTWtILGVBQWEsQ0FBQ2xILGNBQUQsRUFBeUI7QUFDM0MsV0FBTyxLQUFLckUsSUFBTCxDQUFXLDBCQUF5QnFFLGNBQWUsRUFBbkQsQ0FBUDtBQUNEOztBQVhnRDtBQWM1QyxNQUFNbUgsa0JBQWtCLEdBQUcsSUFBSUgsa0JBQUosRUFBM0IsQzs7Ozs7Ozs7Ozs7O0FDZlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNSSxXQUFOLFNBQTBCL00sdURBQTFCLENBQXFDO0FBQzFDMEgsSUFBRSxDQUFDcmIsT0FBRCxFQUFpRTtBQUNqRSxXQUFPLEtBQUt0YixHQUFMLENBQVMsV0FBVCxFQUFzQnNiLE9BQXRCLENBQVA7QUFDRDs7QUFFRHNiLFVBQVEsQ0FBQ2pCLE9BQUQsRUFBZTtBQUNyQixXQUFPLEtBQUtuRixHQUFMLENBQVMsUUFBVCxFQUFtQm1GLE9BQW5CLENBQVA7QUFDRDs7QUFFRGtCLG9CQUFrQixDQUFDb0YsTUFBRCxFQUFrQjtBQUNsQyxVQUFNdmhCLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7O0FBQ0EsUUFBSXNoQixNQUFKLEVBQVk7QUFDVixhQUFRLEdBQUV2aEIsTUFBTSxDQUFDdVYsd0JBQXlCLFVBQVNnTSxNQUFPLGdCQUExRDtBQUNEOztBQUNELFdBQVEsR0FBRXZoQixNQUFNLENBQUN1Vix3QkFBeUIsc0JBQTFDO0FBQ0Q7O0FBRUQzbEIsUUFBTSxDQUFDMUgsS0FBRCxFQUFpQztBQUNyQyxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS213QixRQUFMLENBQWMsZUFBZCxFQUErQnZ0QixLQUEvQixDQUFULENBQVA7QUFDRDs7QUFFRDQxQixVQUFRLENBQUM3WCxFQUFELEVBQWE7QUFDbkIsV0FBTyxLQUFLM2dCLEdBQUwsQ0FBVSxlQUFjMmdCLEVBQUcsRUFBM0IsQ0FBUDtBQUNEOztBQXZCeUM7QUEwQnJDLE1BQU11YixXQUFXLEdBQUcsSUFBSUYsV0FBSixFQUFwQixDOzs7Ozs7Ozs7Ozs7QUM3QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1HLFlBQU4sU0FBMkJsTix1REFBM0IsQ0FBc0M7QUFDM0NtTixlQUFhLEdBQWlDO0FBQzVDLFdBQU8sS0FBS3A4QixHQUFMLENBQVMsaUJBQVQsQ0FBUDtBQUNEOztBQUVEcThCLGVBQWEsR0FBbUM7QUFDOUMsV0FBTyxLQUFLcjhCLEdBQUwsQ0FBUyxpQkFBVCxDQUFQO0FBQ0Q7O0FBRURzOEIsZ0JBQWMsR0FBb0M7QUFDaEQsV0FBTyxLQUFLdDhCLEdBQUwsQ0FBUyxtQkFBVCxDQUFQO0FBQ0Q7O0FBRUR1OEIsWUFBVSxHQUE0QjtBQUNwQyxXQUFPLEtBQUt2OEIsR0FBTCxDQUFTLG1CQUFULENBQVA7QUFDRDs7QUFFRHc4QixpQkFBZSxDQUFDck4sS0FBRCxFQUFnQjtBQUM3QixXQUFPLEtBQUtvQixJQUFMLENBQVUsb0JBQVYsRUFBZ0M7QUFBRXBCO0FBQUYsS0FBaEMsQ0FBUDtBQUNEOztBQW5CMEM7QUFzQnRDLE1BQU1zTixZQUFZLEdBQUcsSUFBSU4sWUFBSixFQUFyQixDOzs7Ozs7Ozs7Ozs7QUN4QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNTyxZQUFOLFNBQTJCek4sbUVBQTNCLENBQXNDO0FBQzNDM2tCLFFBQU0sQ0FBQ25JLE1BQUQsRUFBa0M7QUFDdEMsV0FBTyxLQUFLbkMsR0FBTCxDQUNMLEtBQUttd0IsUUFBTCxDQUFjLHNDQUFkLEVBQXNEaHVCLE1BQXRELENBREssQ0FBUDtBQUdEOztBQUVEMnhCLFdBQVMsQ0FBQzN4QixNQUFELEVBQWtDO0FBQ3pDLFdBQU8sS0FBS25DLEdBQUwsQ0FDTCxLQUFLbXdCLFFBQUwsQ0FBYyw4QkFBZCxFQUE4Q2h1QixNQUE5QyxDQURLLENBQVA7QUFHRDs7QUFFRDh4QixTQUFPLENBQUN0VCxFQUFELEVBQWFyRixPQUFiLEVBQWtEO0FBQ3ZELFdBQU8sS0FBS3RiLEdBQUwsQ0FBVSxzQ0FBcUMyZ0IsRUFBRyxPQUFsRCxFQUEwRHJGLE9BQTFELENBQVA7QUFDRDs7QUFFRHFoQixVQUFRLENBQUMvNUIsS0FBRCxFQUFpQztBQUN2QyxXQUFPLEtBQUs1QyxHQUFMLENBQ0wsS0FBS213QixRQUFMLENBQWMsMkNBQWQsRUFBMkR2dEIsS0FBM0QsQ0FESyxDQUFQO0FBR0Q7O0FBRUQ0bkIsZUFBYSxDQUFDN0osRUFBRCxFQUFhO0FBQ3hCLFdBQU8sS0FBSzhQLEdBQUwsQ0FBVSxzQ0FBcUM5UCxFQUFHLEVBQWxELENBQVA7QUFDRDs7QUFFRG9ULFFBQU0sQ0FDSnJ5QixHQURJLEVBRUp5SCxJQUZJLEVBR0ovRCxPQUFpQyxHQUFHO0FBQ2xDd3JCLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUhoQyxFQU1xQjtBQUN6QixVQUFNbFcsTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQU8sSUFBSTlSLE9BQUosQ0FBWSxDQUFDOEgsT0FBRCxFQUFVc1QsTUFBVixLQUFxQjtBQUN0QyxZQUFNaUIsR0FBRyxHQUFHLElBQUk0TCxjQUFKLEVBQVo7QUFFQTVMLFNBQUcsQ0FBQ3dMLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBeUNuMEIsS0FBRCxJQUFXO0FBQ2pELFlBQUlBLEtBQUssQ0FBQ28wQixnQkFBVixFQUE0QjtBQUMxQjVyQixpQkFBTyxDQUFDd3JCLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUdyMEIsS0FBSyxDQUFDczBCLE1BQU4sR0FBZXQwQixLQUFLLENBQUNnYSxLQUF0QixHQUErQjtBQUQxQixXQUFuQjtBQUdEO0FBQ0YsT0FORDtBQVFBc08sU0FBRyxDQUFDNkwsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsTUFBTTtBQUNqQyxjQUFNM3pCLE9BQU8sR0FBRzhuQixHQUFHLENBQUNyUCxNQUFKLElBQWMsR0FBZCxJQUFxQnFQLEdBQUcsQ0FBQ3JQLE1BQUosR0FBYSxHQUFsRDtBQUNBLGNBQU07QUFBRXdaO0FBQUYsWUFBZW5LLEdBQXJCOztBQUNBLFlBQUksQ0FBQzluQixPQUFMLEVBQWM7QUFDWixpQkFBTzZtQixNQUFNLENBQUNvTCxRQUFELENBQWI7QUFDRDs7QUFDRCxlQUFPMWUsT0FBTyxDQUFDMGUsUUFBRCxDQUFkO0FBQ0QsT0FQRDtBQVNBbkssU0FBRyxDQUFDd0wsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxNQUFNO0FBQ3pDOU0sY0FBTSxDQUFDaUIsR0FBRyxDQUFDbUssUUFBTCxDQUFOO0FBQ0QsT0FGRDtBQUlBLFlBQU04QixRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQixDQXhCc0MsQ0F5QnRDOztBQUNBLFVBQUlqb0IsSUFBSSxDQUFDeXpCLEtBQVQsRUFBZ0I7QUFDZCxjQUFNQSxLQUFLLEdBQUd6ekIsSUFBSSxDQUFDeXpCLEtBQUwsQ0FBV3ZpQixJQUFYLENBQWdCMkosYUFBOUI7QUFDQW1OLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJ1TCxLQUF6QixFQUFnQ0EsS0FBSyxDQUFDNTdCLElBQXRDO0FBQ0Q7O0FBRUQsVUFBSW1JLElBQUksQ0FBQzB6QixPQUFULEVBQWtCO0FBQ2hCLGNBQU1BLE9BQU8sR0FBRzF6QixJQUFJLENBQUMwekIsT0FBTCxDQUFheGlCLElBQWIsQ0FBa0IySixhQUFsQztBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixTQUFoQixFQUEyQndMLE9BQTNCLEVBQW9DQSxPQUFPLENBQUM3N0IsSUFBNUM7QUFDRDs7QUFFRCxVQUFJbUksSUFBSSxDQUFDMnpCLFNBQVQsRUFBb0I7QUFDbEIsY0FBTUEsU0FBUyxHQUFHM3pCLElBQUksQ0FBQzJ6QixTQUFMLENBQWV6aUIsSUFBZixDQUFvQjJKLGFBQXRDO0FBQ0FtTixnQkFBUSxDQUFDRSxNQUFULENBQWdCLFdBQWhCLEVBQTZCeUwsU0FBN0IsRUFBd0NBLFNBQVMsQ0FBQzk3QixJQUFsRDtBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZZ25CLG1EQUFJLENBQUM5b0IsSUFBRCxFQUFPLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsU0FBdkIsQ0FBUCxDQUFoQixFQUEyRDRVLE9BQTNELENBQ0d2RyxDQUFELElBQU87QUFDTDJaLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0I3WixDQUFoQixFQUFtQnJPLElBQUksQ0FBQ3FPLENBQUQsQ0FBdkI7QUFDRCxPQUhIO0FBTUEwTixTQUFHLENBQUNzTSxZQUFKLEdBQW1CLE1BQW5CO0FBQ0F0TSxTQUFHLENBQUN1TSxJQUFKLENBQVMsTUFBVCxFQUFpQnpSLHlEQUFLLENBQUN0ZSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFZ1osTUFBTSxDQUFDdVYsd0JBQXlCLEdBQUV2dUIsR0FBSSxFQUE3RTtBQUVBLFlBQU15dEIsS0FBVSxHQUFHWSxnREFBTSxDQUFDL3ZCLEdBQVAsQ0FBVzB1Qiw4REFBWCxDQUFuQjs7QUFDQSxVQUFJUyxLQUFKLEVBQVc7QUFDVGpLLFdBQUcsQ0FBQ3dNLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDdkMsS0FBdEM7QUFDRDs7QUFDRGpLLFNBQUcsQ0FBQ3lNLElBQUosQ0FBU1IsUUFBVDtBQUNELEtBdkRNLENBQVA7QUF3REQ7O0FBRUQ2QyxRQUFNLENBQ0p0eUIsR0FESSxFQUVKeUgsSUFGSSxFQUdKL0QsT0FBaUMsR0FBRztBQUNsQ3dyQixjQUFVLEdBQUcsQ0FBRTs7QUFEbUIsR0FIaEMsRUFNcUI7QUFDekIsVUFBTWxXLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxXQUFPLElBQUk5UixPQUFKLENBQVksQ0FBQzhILE9BQUQsRUFBVXNULE1BQVYsS0FBcUI7QUFDdEMsWUFBTWlCLEdBQUcsR0FBRyxJQUFJNEwsY0FBSixFQUFaO0FBRUE1TCxTQUFHLENBQUN3TCxNQUFKLENBQVdLLGdCQUFYLENBQTRCLFVBQTVCLEVBQXlDbjBCLEtBQUQsSUFBVztBQUNqRCxZQUFJQSxLQUFLLENBQUNvMEIsZ0JBQVYsRUFBNEI7QUFDMUI1ckIsaUJBQU8sQ0FBQ3dyQixVQUFSLENBQW1CO0FBQ2pCSyxzQkFBVSxFQUFHcjBCLEtBQUssQ0FBQ3MwQixNQUFOLEdBQWV0MEIsS0FBSyxDQUFDZ2EsS0FBdEIsR0FBK0I7QUFEMUIsV0FBbkI7QUFHRDtBQUNGLE9BTkQ7QUFRQXNPLFNBQUcsQ0FBQzZMLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLE1BQU07QUFDakMsY0FBTTN6QixPQUFPLEdBQUc4bkIsR0FBRyxDQUFDclAsTUFBSixJQUFjLEdBQWQsSUFBcUJxUCxHQUFHLENBQUNyUCxNQUFKLEdBQWEsR0FBbEQ7QUFDQSxjQUFNO0FBQUV3WjtBQUFGLFlBQWVuSyxHQUFyQjs7QUFDQSxZQUFJLENBQUM5bkIsT0FBTCxFQUFjO0FBQ1osaUJBQU82bUIsTUFBTSxDQUFDb0wsUUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsZUFBTzFlLE9BQU8sQ0FBQzBlLFFBQUQsQ0FBZDtBQUNELE9BUEQ7QUFTQW5LLFNBQUcsQ0FBQ3dMLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsTUFBTTtBQUN6QzlNLGNBQU0sQ0FBQ2lCLEdBQUcsQ0FBQ21LLFFBQUwsQ0FBTjtBQUNELE9BRkQ7QUFJQSxZQUFNOEIsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakIsQ0F4QnNDLENBeUJ0Qzs7QUFDQSxVQUFJam9CLElBQUksQ0FBQ3l6QixLQUFMLElBQWN6ekIsSUFBSSxDQUFDeXpCLEtBQUwsQ0FBV3ZpQixJQUE3QixFQUFtQztBQUNqQyxjQUFNdWlCLEtBQUssR0FBR3p6QixJQUFJLENBQUN5ekIsS0FBTCxDQUFXdmlCLElBQVgsQ0FBZ0IySixhQUE5QjtBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QnVMLEtBQXpCLEVBQWdDQSxLQUFLLENBQUM1N0IsSUFBdEM7QUFDRDs7QUFFRCxVQUFJbUksSUFBSSxDQUFDMHpCLE9BQUwsSUFBZ0IxekIsSUFBSSxDQUFDMHpCLE9BQUwsQ0FBYXhpQixJQUFqQyxFQUF1QztBQUNyQyxjQUFNd2lCLE9BQU8sR0FBRzF6QixJQUFJLENBQUMwekIsT0FBTCxDQUFheGlCLElBQWIsQ0FBa0IySixhQUFsQztBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixTQUFoQixFQUEyQndMLE9BQTNCLEVBQW9DQSxPQUFPLENBQUM3N0IsSUFBNUM7QUFDRDs7QUFFRCxVQUFJbUksSUFBSSxDQUFDMnpCLFNBQUwsSUFBa0IzekIsSUFBSSxDQUFDMnpCLFNBQUwsQ0FBZXppQixJQUFyQyxFQUEyQztBQUN6QyxjQUFNeWlCLFNBQVMsR0FBRzN6QixJQUFJLENBQUMyekIsU0FBTCxDQUFlemlCLElBQWYsQ0FBb0IySixhQUF0QztBQUNBbU4sZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixXQUFoQixFQUE2QnlMLFNBQTdCLEVBQXdDQSxTQUFTLENBQUM5N0IsSUFBbEQ7QUFDRDs7QUFFRHBELFlBQU0sQ0FBQ3FOLElBQVAsQ0FBWWduQixtREFBSSxDQUFDOW9CLElBQUQsRUFBTyxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLFNBQXZCLENBQVAsQ0FBaEIsRUFBMkQ0VSxPQUEzRCxDQUFvRXZHLENBQUQsSUFBTztBQUN4RTJaLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0I3WixDQUFoQixFQUFtQnJPLElBQUksQ0FBQ3FPLENBQUQsQ0FBdkI7QUFDRCxPQUZEO0FBSUEwTixTQUFHLENBQUNzTSxZQUFKLEdBQW1CLE1BQW5CO0FBQ0F0TSxTQUFHLENBQUN1TSxJQUFKLENBQVMsS0FBVCxFQUFnQnpSLHlEQUFLLENBQUN0ZSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFZ1osTUFBTSxDQUFDdVYsd0JBQXlCLEdBQUV2dUIsR0FBSSxFQUE1RTtBQUVBLFlBQU15dEIsS0FBVSxHQUFHWSxnREFBTSxDQUFDL3ZCLEdBQVAsQ0FBVzB1Qiw4REFBWCxDQUFuQjs7QUFDQSxVQUFJUyxLQUFKLEVBQVc7QUFDVGpLLFdBQUcsQ0FBQ3dNLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDdkMsS0FBdEM7QUFDRDs7QUFDRGpLLFNBQUcsQ0FBQ3lNLElBQUosQ0FBU1IsUUFBVDtBQUNELEtBckRNLENBQVA7QUFzREQ7O0FBRUR1RyxjQUFZLENBQUMvVyxFQUFELEVBQWE7QUFDdkIsV0FBTyxLQUFLNFAsSUFBTCxDQUFXLGlDQUFnQzVQLEVBQUcsV0FBOUMsQ0FBUDtBQUNELEdBL0owQyxDQWlLM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQW9jLG1CQUFpQixDQUFDcGMsRUFBRCxFQUFhckYsT0FBTyxHQUFHLEVBQXZCLEVBQTJCO0FBQzFDLFdBQU8sS0FBS3RiLEdBQUwsQ0FBVSxpQ0FBZ0MyZ0IsRUFBRyxFQUE3QyxFQUFnRHJGLE9BQWhELENBQVA7QUFDRDs7QUF6SzBDO0FBNEt0QyxNQUFNMGhCLFlBQVksR0FBRyxJQUFJTixZQUFKLEVBQXJCLEM7Ozs7Ozs7Ozs7OztBQ3BMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQU9BLE1BQU1PLEtBQU4sU0FBb0IzK0IsNENBQUssQ0FBQ21ILFNBQTFCLENBQWlEO0FBQy9DeEIsYUFBVyxDQUFDcEcsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFRDZSLG1CQUFpQixHQUFHO0FBQ2xCLFVBQU07QUFBRTlTLFdBQUY7QUFBU3lFO0FBQVQsUUFBcUIsS0FBS3hELEtBQWhDO0FBQ0EsVUFBTThSLE1BQU0sR0FBRyxLQUFLQyxPQUFwQjs7QUFFQSxRQUFJLENBQUNELE1BQUwsRUFBYTtBQUNYdXRCLDREQUFPLENBQUMsZ0RBQUQsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUR2dEIsVUFBTSxDQUFDek8sRUFBUCxDQUFVdEUsS0FBVixFQUFpQnlFLE9BQWpCO0FBQ0Q7O0FBRUQ2TyxzQkFBb0IsR0FBRztBQUNyQixVQUFNO0FBQUV0VDtBQUFGLFFBQVksS0FBS2lCLEtBQXZCO0FBQ0EsVUFBTThSLE1BQU0sR0FBRyxLQUFLQyxPQUFwQjs7QUFFQSxRQUFJLENBQUNELE1BQUwsRUFBYTtBQUNYdXRCLDREQUFPLENBQUMsZ0RBQUQsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUR2dEIsVUFBTSxDQUFDeE8sR0FBUCxDQUFXdkUsS0FBWDtBQUNEOztBQUVEb1UsUUFBTSxHQUFHO0FBQ1AsV0FBTyxLQUFQO0FBQ0Q7O0FBL0I4Qzs7QUFrQ2pEaXNCLEtBQUssQ0FBQ3ZyQixXQUFOLEdBQW9CQyw0REFBcEI7QUFFZXNyQixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLE1BQU1FLE1BQU4sU0FBcUI3K0IsNENBQUssQ0FBQ21ILFNBQTNCLENBQW1EO0FBR2pEeEIsYUFBVyxDQUFDcEcsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCOztBQUVqQixTQUFLc1UsT0FBTDtBQUNEOztBQUVEdEMsb0JBQWtCLENBQUN1dEIsU0FBRCxFQUFpQjtBQUNqQyxVQUFNO0FBQUVwdEI7QUFBRixRQUFlLEtBQUtuUyxLQUExQjs7QUFDQSxRQUFJdS9CLFNBQVMsQ0FBQ3B0QixRQUFWLEtBQXVCQSxRQUEzQixFQUFxQztBQUNuQyxXQUFLbUMsT0FBTDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVEakMsc0JBQW9CLEdBQUc7QUFDckIsU0FBS1AsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWTB0QixLQUFaLEVBQWY7QUFDRDs7QUFFRGxyQixTQUFPLEdBQUc7QUFDUixVQUFNO0FBQUVuQztBQUFGLFFBQWUsS0FBS25TLEtBQTFCO0FBQ0EsVUFBTXN4QixLQUFLLEdBQUduZixRQUFRLElBQUlpakIsa0VBQVcsQ0FBQ1QsUUFBWixFQUExQjs7QUFDQSxRQUFJLElBQUosRUFBc0I7QUFDcEI7QUFDRDs7QUFDRCxVQUFNOVgsTUFBTSxHQUFHQyx3RUFBZSxFQUE5QjtBQUNBLFVBQU07QUFBRTJpQixTQUFHLEdBQUc1aUIsTUFBTSxDQUFDNmlCO0FBQWYsUUFBK0MsS0FBSzEvQixLQUExRDtBQUNBLFVBQU11SCxPQUFPLEdBQUc7QUFDZG80QixnQkFBVSxFQUFFLENBQUMsV0FBRCxFQUFjLFNBQWQsRUFBeUIsY0FBekIsQ0FERTtBQUVkNTZCLFdBQUssRUFBRXVzQixLQUFLLEdBQUksU0FBUUEsS0FBTSxFQUFsQixHQUFzQjtBQUZwQixLQUFoQjtBQUtBLFNBQUt4ZixNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZMHRCLEtBQVosRUFBZjtBQUVBLFNBQUsxdEIsTUFBTCxHQUFjOHRCLHVEQUFRLENBQUNILEdBQUQsRUFBTSxLQUFLSSxZQUFMLENBQWtCdDRCLE9BQWxCLENBQU4sQ0FBdEI7QUFFQSxTQUFLdUssTUFBTCxDQUFZa0csTUFBWixHQUFxQixhQUFyQjtBQUVBLFNBQUtsRyxNQUFMLENBQVl6TyxFQUFaLENBQWUsU0FBZixFQUEwQixNQUFNO0FBQzlCLFdBQUt5TyxNQUFMLENBQVlrRyxNQUFaLEdBQXFCLFdBQXJCO0FBQ0E4bkIsMERBQUssQ0FBQyxXQUFELENBQUw7QUFDRCxLQUhEO0FBS0EsU0FBS2h1QixNQUFMLENBQVl6TyxFQUFaLENBQWUsWUFBZixFQUE2QixNQUFNO0FBQ2pDLFdBQUt5TyxNQUFMLENBQVlrRyxNQUFaLEdBQXFCLGNBQXJCO0FBQ0E4bkIsMERBQUssQ0FBQyxZQUFELENBQUw7QUFDRCxLQUhEO0FBS0EsU0FBS2h1QixNQUFMLENBQVl6TyxFQUFaLENBQWUsT0FBZixFQUF5QnhFLEdBQUQsSUFBUztBQUMvQixXQUFLaVQsTUFBTCxDQUFZa0csTUFBWixHQUFxQixRQUFyQjtBQUNBcW5CLDREQUFPLENBQUMsT0FBRCxFQUFVeGdDLEdBQVYsQ0FBUDtBQUNELEtBSEQ7QUFLQSxTQUFLaVQsTUFBTCxDQUFZek8sRUFBWixDQUFlLFdBQWYsRUFBNkJpSSxJQUFELElBQVU7QUFDcEMsV0FBS3dHLE1BQUwsQ0FBWWtHLE1BQVosR0FBcUIsV0FBckI7QUFDQThuQiwwREFBSyxDQUFDLFdBQUQsRUFBY3gwQixJQUFkLENBQUw7QUFDRCxLQUhEO0FBS0EsU0FBS3dHLE1BQUwsQ0FBWXpPLEVBQVosQ0FBZSxtQkFBZixFQUFvQyxNQUFNO0FBQ3hDeThCLDBEQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNELEtBRkQ7QUFJQSxTQUFLaHVCLE1BQUwsQ0FBWXpPLEVBQVosQ0FBZSxjQUFmLEVBQStCLE1BQU07QUFDbkMsV0FBS3lPLE1BQUwsQ0FBWWtHLE1BQVosR0FBcUIsY0FBckI7QUFDQThuQiwwREFBSyxDQUFDLGNBQUQsQ0FBTDtBQUNELEtBSEQ7QUFLQSxTQUFLaHVCLE1BQUwsQ0FBWXpPLEVBQVosQ0FBZSxrQkFBZixFQUFvQ21HLEtBQUQsSUFBVztBQUM1QyxXQUFLc0ksTUFBTCxDQUFZa0csTUFBWixHQUFxQixRQUFyQjtBQUNBcW5CLDREQUFPLENBQUMsa0JBQUQsRUFBcUI3MUIsS0FBckIsQ0FBUDtBQUNELEtBSEQ7QUFJRDs7QUFFRHEyQixjQUFZLENBQUN0NEIsT0FBTyxHQUFHLEVBQVgsRUFBZTtBQUN6QixVQUFNdzRCLGNBQWMsR0FBRztBQUNyQkMsa0JBQVksRUFBRSxJQURPO0FBRXJCQywwQkFBb0IsRUFBRUMsUUFGRDtBQUdyQkMsdUJBQWlCLEVBQUUsSUFBSSxJQUhGO0FBSXJCQywwQkFBb0IsRUFBRSxJQUFJLElBSkw7QUFLckJDLGlCQUFXLEVBQUUsSUFMUTtBQU1yQlYsZ0JBQVUsRUFBRSxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLGNBQXpCLENBTlM7QUFPckJXLHdCQUFrQixFQUFFO0FBUEMsS0FBdkI7QUFTQSwyQ0FBWVAsY0FBWixHQUErQng0QixPQUEvQjtBQUNEOztBQUVENEwsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFcFM7QUFBRixRQUFlLEtBQUtmLEtBQTFCO0FBQ0EsV0FDRSxNQUFDLDREQUFELENBQWUsUUFBZjtBQUF3QixXQUFLLEVBQUUsS0FBSzhSO0FBQXBDLE9BQ0dyUiw0Q0FBSyxDQUFDUSxRQUFOLENBQWVzL0IsSUFBZixDQUFvQngvQixRQUFwQixDQURILENBREY7QUFLRDs7QUE5RmdEOztBQWlHbkQsTUFBTXdaLFNBQVMsR0FBSWpULEtBQUQsS0FBaUI7QUFDakM2SyxVQUFRLEVBQUU3SyxLQUFLLENBQUMrRSxJQUFOLENBQVc4RjtBQURZLENBQWpCLENBQWxCOztBQUllbUMsMEhBQU8sQ0FBQ2lHLFNBQUQsQ0FBUCxDQUFtQitrQixNQUFuQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ25IQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXhyQixhQUFhLGdCQUFHclQsNENBQUssQ0FBQysvQixhQUFOLENBQXlCLFFBQXpCLENBQXRCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLFdBQXFCLEVBRXBCOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNbkIsT0FBTyxHQUFHLENBQUMsR0FBRzUvQixJQUFKLEtBQWE7QUFDbEMsUUFBTW9kLE1BQU0sR0FBR0Msd0VBQWUsRUFBOUIsQ0FEa0MsQ0FFbEM7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDNGpCLFFBQVAsS0FBb0IsWUFBeEIsRUFBc0M7QUFFdEM7O0FBQ0EsTUFBSSxPQUFPOWhDLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0EsT0FBTyxDQUFDNkssS0FBZixLQUF5QixVQUEvRCxFQUEyRTtBQUN6RTdLLFdBQU8sQ0FBQzZLLEtBQVIsQ0FBY2szQixLQUFkLENBQW9CL2hDLE9BQXBCLEVBQTZCYyxJQUE3QjtBQUNEO0FBQ0Q7OztBQUNBLE1BQUk7QUFDRjtBQUNBO0FBQ0E7QUFFQSxVQUFNLElBQUlreUIsS0FBSixDQUFVbHlCLElBQUksQ0FBQzhZLElBQUwsQ0FBVSxHQUFWLENBQVYsQ0FBTjtBQUNBO0FBQ0QsR0FQRCxDQU9FLE9BQU90WixDQUFQLEVBQVUsQ0FBRTtBQUNkOztBQUNELENBbkJNO0FBcUJBLE1BQU02Z0MsS0FBSyxHQUFHLENBQUMsR0FBR3JnQyxJQUFKLEtBQWE7QUFDaEMsUUFBTW9kLE1BQU0sR0FBR0Msd0VBQWUsRUFBOUIsQ0FEZ0MsQ0FFaEM7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDNGpCLFFBQVAsS0FBb0IsWUFBeEIsRUFBc0M7QUFFdEM7O0FBQ0EsTUFBSSxPQUFPOWhDLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0EsT0FBTyxDQUFDbWhDLEtBQWYsS0FBeUIsVUFBL0QsRUFBMkU7QUFDekVuaEMsV0FBTyxDQUFDbWhDLEtBQVIsQ0FBY1ksS0FBZCxDQUFvQi9oQyxPQUFwQixFQUE2QmMsSUFBN0I7QUFDRDtBQUNGLENBVE0sQzs7Ozs7Ozs7Ozs7QUMvQlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvbGl2ZWNhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbGl2ZWNhbS9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQYWdlQmFubmVyID0gKHtwYWdlVGl0bGUsIGhvbWVQYWdlVXJsLCBob21lUGFnZVRleHQsIGFjdGl2ZVBhZ2VUZXh0LCBpbWdDbGFzc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBhZ2UtdGl0bGUtYXJlYSAke2ltZ0NsYXNzfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwYWdlVGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hvbWVQYWdlVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aG9tZVBhZ2VUZXh0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPnthY3RpdmVQYWdlVGV4dH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUJhbm5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIElQZXJmb3JtZXIsXG4gIElDb3VudHJpZXMsXG4gIElQZXJmb3JtZXJDYXRlZ29naWVzLFxuICBJUGVyZm9ybVNlYXJjaCxcbiAgSVVJQ29uZmlnXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBQZXJmb3JtZXJHcmlkIGZyb20gJ0Bjb21wb25lbnRzL3BlcmZvcm1lci9wZXJmb3JtZXItZ3JpZCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsXG4gIHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJcbn0gZnJvbSAnQHJlZHV4L3BlcmZvcm1lci9hY3Rpb25zJztcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXInO1xuaW1wb3J0IHsgbG9naW5TdWNjZXNzIH0gZnJvbSAnQHJlZHV4L2F1dGgvYWN0aW9ucyc7XG5pbXBvcnQgeyB1cGRhdGVDdXJyZW50VXNlciB9IGZyb20gJ0ByZWR1eC91c2VyL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXBkYXRlQ3VycmVudFN0dWRpbyB9IGZyb20gJ0ByZWR1eC9zdHVkaW8vYWN0aW9ucyc7XG5pbXBvcnQgUGVyZm9ybWVyRmlsdGVyIGZyb20gJ0Bjb21wb25lbnRzL3VzZXIvcGVyZm9ybWVyLWZpbHRlcic7XG5pbXBvcnQgeyBmYXZvdXJpdGVTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2VzJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldFJlc3BvbnNlRXJyb3IgfSBmcm9tICdzcmMvbGliJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnc3JjL3NvY2tldCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcm91dGVyOiBOZXh0Um91dGVyO1xuICB1aTogSVVJQ29uZmlnO1xuICBkYXRhOiBJUGVyZm9ybWVyW107XG4gIHNlYXJjaFBlcmZvcm1lcj86IEZ1bmN0aW9uO1xuICB0b3RhbD86IG51bWJlcjtcbiAgc3VjY2Vzcz86IGJvb2xlYW47XG4gIGVycm9yPzogYW55O1xuICBzZXR0aW5ncz86IGFueTtcbiAgc2VhcmNoaW5nPzogYm9vbGVhbjtcbiAgbG9nZ2VkSW4/OiBib29sZWFuO1xuICBxdWVyeT86IHtcbiAgICBxOiBzdHJpbmc7XG4gIH07XG4gIGNhdGVnb3JpZXM/OiBJUGVyZm9ybWVyQ2F0ZWdvZ2llc1tdO1xuICBjb3VudHJpZXM/OiBJQ291bnRyaWVzW107XG4gIHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZTogRnVuY3Rpb247XG4gIHVwZGF0ZUN1cnJlbnRVc2VyOiBGdW5jdGlvbjtcbiAgdXBkYXRlQ3VycmVudFBlcmZvcm1lcjogRnVuY3Rpb247XG4gIHVwZGF0ZUN1cnJlbnRTdHVkaW86IEZ1bmN0aW9uO1xuICBsb2dpblN1Y2Nlc3M6IEZ1bmN0aW9uO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlcyB7XG4gIHF1ZXJ5OiBJUGVyZm9ybVNlYXJjaDtcbiAgc29ydD86IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc29ydEJ5Pzogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBpbml0UXVlcnlTdGF0ZTogSVBlcmZvcm1TZWFyY2ggPSB7XG4gIG9mZnNldDogMCxcbiAgbGltaXQ6IDYwLFxuICBnZW5kZXI6ICcnLFxuICBjYXRlZ29yeTogJycsXG4gIGNvdW50cnk6ICcnLFxuICBzb3J0Qnk6ICcnLFxuICBzb3J0OiAnZGVzYydcbn07XG5cbmNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZXM+IHtcbiAgcHJpdmF0ZSBzb2NrZXQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6IGluaXRRdWVyeVN0YXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG4gICAgdGhpcy5zb2NrZXQub24oJ21vZGVsVXBkYXRlU3RhdHVzJywgdGhpcy5zZWFyY2gpO1xuICAgIHRoaXMuc29ja2V0Lm9uKCdtb2RlbFVwZGF0ZVN0cmVhbWluZ1N0YXR1cycsIHRoaXMuc2VhcmNoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IElQcm9wcywgcHJldlN0YXRlczogSVN0YXRlcykge1xuICAgIGNvbnN0IHsgcm91dGVyLCBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChcbiAgICAgIHJvdXRlci5xdWVyeS5xICE9PSBwcmV2UHJvcHMucm91dGVyLnF1ZXJ5LnFcbiAgICAgIHx8IHF1ZXJ5ICE9PSBwcmV2U3RhdGVzLnF1ZXJ5XG4gICAgKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgICBpZiAoIWxvZ2dlZEluICYmIGxvZ2dlZEluICE9PSBwcmV2UHJvcHMubG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5vZmYoJ21vZGVsVXBkYXRlU3RhdHVzJyk7XG4gICAgICB0aGlzLnNvY2tldC5vZmYoJ21vZGVsVXBkYXRlU3RyZWFtaW5nU3RhdHVzJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25MaWtlKHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICAgIGNvbnN0IHtcbiAgICAgIHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZTogZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvcml0ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgX2lkLCBpc0Zhdm9yaXRlIH0gPSBwZXJmb3JtZXI7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZhdm91cml0ZVNlcnZpY2UuZmF2b3JpdGUoX2lkLCBpc0Zhdm9yaXRlKTtcbiAgICAgIGRpc3BhdGNoVXBkYXRlUGVyZm9ybWVyRmF2b3JpdGUoX2lkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZSkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEZpbHRlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJvdXRlciwgc2VhcmNoUGVyZm9ybWVyOiBkaXNwYXRjaFNlYXJjaFBlcmZvcm1lciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgLi4ucm91dGVyLnF1ZXJ5XG4gICAgfSk7XG4gIH07XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeTogaW5pdFF1ZXJ5U3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXRlZ29yaWVzLCBjb3VudHJpZXMsIHVpLCBzZXR0aW5nc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt1aT8uc2l0ZU5hbWV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtzZXR0aW5ncz8ubWV0YUtleXdvcmRzfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD17c2V0dGluZ3M/Lm1ldGFEZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBPRyB0YWdzICovfVxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3NldHRpbmdzPy5zaXRlTmFtZX1cbiAgICAgICAgICAgIGtleT1cInRpdGxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtzZXR0aW5ncz8ubG9nb1VybH0gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzprZXl3b3Jkc1wiXG4gICAgICAgICAgICBjb250ZW50PXtzZXR0aW5ncz8ubWV0YUtleXdvcmRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD17c2V0dGluZ3M/Lm1ldGFEZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgcGFnZVRpdGxlPVwiTGl2ZSBDYW1cIlxuICAgICAgICAgIGhvbWVQYWdlVXJsPVwiL1wiXG4gICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiSG9tZVwiXG4gICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCJMaXZlIENhbVwiXG4gICAgICAgICAgaW1nQ2xhc3M9XCJiZy0xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZVwiPlxuICAgICAgICAgIDxQZXJmb3JtZXJGaWx0ZXJcbiAgICAgICAgICAgIGNvdW50cmllcz17Y291bnRyaWVzfVxuICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgIHNldEZpbHRlcj17dGhpcy5zZXRGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGNsZWFyRmlsdGVyPXt0aGlzLmNsZWFyRmlsdGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB7Li4ucXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGVyZm9ybWVyR3JpZFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBvbkxpa2U9e3RoaXMub25MaWtlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB0aXRsZT1cIkxpdmUgY2Ftc1wiXG4gICAgICAgICAgICBpc1BhZ2VcbiAgICAgICAgICAgIHNldEZpbHRlcj17dGhpcy5zZXRGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHsuLi5xdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuSG9tZXBhZ2UuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH0sXG4gIC4uLnN0YXRlLnBlcmZvcm1lci5wZXJmb3JtZXJzLFxuICBjb3VudHJpZXM6IHN0YXRlLnNldHRpbmdzLmNvdW50cmllcyxcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIGNhdGVnb3JpZXM6IHN0YXRlLnBlcmZvcm1lci5jYXRlZ29yaWVzLmRhdGEsXG4gIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5nc1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsXG4gIHVwZGF0ZUN1cnJlbnRVc2VyLFxuICB1cGRhdGVDdXJyZW50UGVyZm9ybWVyLFxuICB1cGRhdGVDdXJyZW50U3R1ZGlvLFxuICBsb2dpblN1Y2Nlc3Ncbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKHdpdGhSb3V0ZXIoSG9tZXBhZ2UpKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FsdC10ZXh0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElJY29ucyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBjb25zdCBGYWNlYm9va0ljb24gPSAoeyBzdHlsZSB9OiBJSWNvbnMpID0+IChcbiAgPGltZyBzcmM9XCIvaWNvbnMvZmFjZWJvb2suc3ZnXCIgc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJJY29uID0gKHsgc3R5bGUgfTogSUljb25zKSA9PiAoXG4gIDxpbWcgc3JjPVwiL2ljb25zL3R3aXR0ZXIuc3ZnXCIgc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IEluc3RhZ3JhbUljb24gPSAoeyBzdHlsZSB9OiBJSWNvbnMpID0+IChcbiAgPGltZyBzcmM9XCIvaWNvbnMvaW5zdGFncmFtLnN2Z1wiIHN0eWxlPXtzdHlsZX0gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBHaWZ0SWNvbiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbnRpY29uXCI+XG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxN1wiXG4gICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE3IDE2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQuNjAwMSA0Ljg0Mzc1SDEyLjI5MzhDMTIuNTA2MyA0LjUwOTM4IDEyLjYzMTMgNC4xMTI1IDEyLjYzMTMgMy42ODc1QzEyLjYzMTMgMi40OTg0NCAxMS42NjQyIDEuNTMxMjUgMTAuNDc1MSAxLjUzMTI1QzkuODI4MjIgMS41MzEyNSA5LjI0NTQxIDEuODE4NzUgOC44NTAxIDIuMjcxODdDOC40NTQ3OSAxLjgxODc1IDcuODcxOTcgMS41MzEyNSA3LjIyNTEgMS41MzEyNUM2LjAzNjA0IDEuNTMxMjUgNS4wNjg4NSAyLjQ5ODQ0IDUuMDY4ODUgMy42ODc1QzUuMDY4ODUgNC4xMTI1IDUuMTkyMjkgNC41MDkzOCA1LjQwNjM1IDQuODQzNzVIMy4xMDAxQzIuODIzNTQgNC44NDM3NSAyLjYwMDEgNS4wNjcxOSAyLjYwMDEgNS4zNDM3NVY4LjQ2ODc1QzIuNjAwMSA4LjUzNzUgMi42NTYzNSA4LjU5Mzc1IDIuNzI1MSA4LjU5Mzc1SDMuMzUwMVYxMy45Njg4QzMuMzUwMSAxNC4yNDUzIDMuNTczNTQgMTQuNDY4OCAzLjg1MDEgMTQuNDY4OEgxMy44NTAxQzE0LjEyNjcgMTQuNDY4OCAxNC4zNTAxIDE0LjI0NTMgMTQuMzUwMSAxMy45Njg4VjguNTkzNzVIMTQuOTc1MUMxNS4wNDM4IDguNTkzNzUgMTUuMTAwMSA4LjUzNzUgMTUuMTAwMSA4LjQ2ODc1VjUuMzQzNzVDMTUuMTAwMSA1LjA2NzE5IDE0Ljg3NjcgNC44NDM3NSAxNC42MDAxIDQuODQzNzVaTTkuMzgxMzUgMy42ODc1QzkuMzgxMzUgMy4wODQzOCA5Ljg3MTk3IDIuNTkzNzUgMTAuNDc1MSAyLjU5Mzc1QzExLjA3ODIgMi41OTM3NSAxMS41Njg4IDMuMDg0MzggMTEuNTY4OCAzLjY4NzVDMTEuNTY4OCA0LjI5MDYyIDExLjA3ODIgNC43ODEyNSAxMC40NzUxIDQuNzgxMjVIOS4zODEzNVYzLjY4NzVaTTcuMjI1MSAyLjU5Mzc1QzcuODI4MjIgMi41OTM3NSA4LjMxODg1IDMuMDg0MzggOC4zMTg4NSAzLjY4NzVWNC43ODEyNUg3LjIyNTFDNi42MjE5NyA0Ljc4MTI1IDYuMTMxMzUgNC4yOTA2MiA2LjEzMTM1IDMuNjg3NUM2LjEzMTM1IDMuMDg0MzggNi42MjE5NyAyLjU5Mzc1IDcuMjI1MSAyLjU5Mzc1Wk0zLjY2MjYgNy41MzEyNVY1LjkwNjI1SDguMzE4ODVWNy41MzEyNUgzLjY2MjZaTTQuNDEyNiA4LjU5Mzc1SDguMzE4ODVWMTMuNDA2Mkg0LjQxMjZWOC41OTM3NVpNMTMuMjg3NiAxMy40MDYySDkuMzgxMzVWOC41OTM3NUgxMy4yODc2VjEzLjQwNjJaTTE0LjAzNzYgNy41MzEyNUg5LjM4MTM1VjUuOTA2MjVIMTQuMDM3NlY3LjUzMTI1WlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yMS43NSAzLjc1SDIuMjVDMS44MzUxNiAzLjc1IDEuNSA0LjA4NTE2IDEuNSA0LjVWMTkuNUMxLjUgMTkuOTE0OCAxLjgzNTE2IDIwLjI1IDIuMjUgMjAuMjVIMjEuNzVDMjIuMTY0OCAyMC4yNSAyMi41IDE5LjkxNDggMjIuNSAxOS41VjQuNUMyMi41IDQuMDg1MTYgMjIuMTY0OCAzLjc1IDIxLjc1IDMuNzVaTTIwLjgxMjUgNi4zNDY4N1YxOC41NjI1SDMuMTg3NVY2LjM0Njg3TDIuNTQwNjMgNS44NDI5N0wzLjQ2MTcyIDQuNjU5MzhMNC40NjQ4NCA1LjQzOTg0SDE5LjUzNzVMMjAuNTQwNiA0LjY1OTM4TDIxLjQ2MTcgNS44NDI5N0wyMC44MTI1IDYuMzQ2ODdaTTE5LjUzNzUgNS40Mzc1TDEyIDExLjI5NjlMNC40NjI1IDUuNDM3NUwzLjQ1OTM4IDQuNjU3MDNMMi41MzgyOCA1Ljg0MDYyTDMuMTg1MTYgNi4zNDQ1M0wxMS4xOTE0IDEyLjU2OTVDMTEuNDIxNyAxMi43NDg0IDExLjcwNDkgMTIuODQ1NSAxMS45OTY1IDEyLjg0NTVDMTIuMjg4MSAxMi44NDU1IDEyLjU3MTMgMTIuNzQ4NCAxMi44MDE2IDEyLjU2OTVMMjAuODEyNSA2LjM0Njg3TDIxLjQ1OTQgNS44NDI5N0wyMC41MzgzIDQuNjU5MzhMMTkuNTM3NSA1LjQzNzVaXCJcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEZhdm91cml0ZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xNC4xODU1IDQuNDU5MTZDMTMuOTgzOCAzLjk3NzkzIDEzLjY5MjkgMy41NDE4NSAxMy4zMjkyIDMuMTc1MzJDMTIuOTY1MyAyLjgwNzY5IDEyLjUzNjIgMi41MTU1NSAxMi4wNjUyIDIuMzE0NzdDMTEuNTc2OSAyLjEwNTc1IDExLjA1MzEgMS45OTg3NiAxMC41MjQzIDIuMDAwMDFDOS43ODI0MyAyLjAwMDAxIDkuMDU4NjIgMi4yMDkzMyA4LjQyOTYxIDIuNjA0NzJDOC4yNzkxMyAyLjY5OTMgOC4xMzYxOCAyLjgwMzE5IDguMDAwNzQgMi45MTYzOEM3Ljg2NTMxIDIuODAzMTkgNy43MjIzNiAyLjY5OTMgNy41NzE4OCAyLjYwNDcyQzYuOTQyODcgMi4yMDkzMyA2LjIxOTA2IDIuMDAwMDEgNS40NzcxOSAyLjAwMDAxQzQuOTQyOTkgMi4wMDAwMSA0LjQyNTMzIDIuMTA1NDUgMy45MzYyNyAyLjMxNDc3QzMuNDYzNzcgMi41MTYzNCAzLjAzNzkxIDIuODA2MjkgMi42NzIyNCAzLjE3NTMyQzIuMzA4MDcgMy41NDE0MyAyLjAxNzE3IDMuOTc3NjIgMS44MTYwMSA0LjQ1OTE2QzEuNjA2ODQgNC45NTk5OCAxLjUgNS40OTE4MiAxLjUgNi4wMzkxNkMxLjUgNi41NTU0OSAxLjYwMjMzIDcuMDkzNTIgMS44MDU0NyA3LjY0MDg2QzEuOTc1NTIgOC4wOTgyNyAyLjIxOTMgOC41NzI3MyAyLjUzMDc5IDkuMDUxODVDMy4wMjQzNiA5LjgxMDA2IDMuNzAzMDMgMTAuNjAwOCA0LjU0NTcyIDExLjQwMjVDNS45NDIxOCAxMi43MzEzIDcuMzI1MDkgMTMuNjQ5MiA3LjM4Mzc4IDEzLjY4NjRMNy43NDA0MSAxMy45MjIxQzcuODk4NDIgMTQuMDI2IDguMTAxNTcgMTQuMDI2IDguMjU5NTcgMTMuOTIyMUw4LjYxNjIxIDEzLjY4NjRDOC42NzQ5IDEzLjY0NzYgMTAuMDU2MyAxMi43MzEzIDExLjQ1NDMgMTEuNDAyNUMxMi4yOTcgMTAuNjAwOCAxMi45NzU2IDkuODEwMDYgMTMuNDY5MiA5LjA1MTg1QzEzLjc4MDcgOC41NzI3MyAxNC4wMjYgOC4wOTgyNyAxNC4xOTQ1IDcuNjQwODZDMTQuMzk3NyA3LjA5MzUyIDE0LjUgNi41NTU0OSAxNC41IDYuMDM5MTZDMTQuNTAxNSA1LjQ5MTgyIDE0LjM5NDYgNC45NTk5OCAxNC4xODU1IDQuNDU5MTZWNC40NTkxNlpNOC4wMDA3NCAxMi42OTU2QzguMDAwNzQgMTIuNjk1NiAyLjY0MzY1IDkuMTU4ODQgMi42NDM2NSA2LjAzOTE2QzIuNjQzNjUgNC40NTkxNiAzLjkxMjIgMy4xNzg0MiA1LjQ3NzE5IDMuMTc4NDJDNi41NzcyIDMuMTc4NDIgNy41MzEyNSAzLjgxMTA0IDguMDAwNzQgNC43MzUxNkM4LjQ3MDI0IDMuODExMDQgOS40MjQyOSAzLjE3ODQyIDEwLjUyNDMgMy4xNzg0MkMxMi4wODkzIDMuMTc4NDIgMTMuMzU3OCA0LjQ1OTE2IDEzLjM1NzggNi4wMzkxNkMxMy4zNTc4IDkuMTU4ODQgOC4wMDA3NCAxMi42OTU2IDguMDAwNzQgMTIuNjk1NlpcIlxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgU2VuZE1lc3NhZ2VJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yNi43NTUyIDE0LjYzNjdMMy42NDAxOCAzLjA0NjA4QzMuNTQ2MjMgMi45OTkxIDMuNDM4NDYgMi45ODgwNCAzLjMzNjIyIDMuMDEyOTFDMy4xMDEzNCAzLjA3MDk1IDIuOTU0ODggMy4zMDg2MiAzLjAxMjkxIDMuNTQ2MjlMNS4zOTQ4OCAxMy4yNzk3QzUuNDMwOCAxMy40MjYyIDUuNTM4NTcgMTMuNTQ1MSA1LjY4MjI2IDEzLjU5Mkw5Ljc2MzY1IDE0Ljk5MzJMNS42ODUwMiAxNi4zOTQzQzUuNTQxMzMgMTYuNDQ0MSA1LjQzMzU2IDE2LjU2MDIgNS40MDA0IDE2LjcwNjZMMy4wMTI5MSAyNi40NTM5QzIuOTg4MDQgMjYuNTU2MiAyLjk5OTEgMjYuNjYzOSAzLjA0NjA3IDI2Ljc1NTFDMy4xNTM4NCAyNi45NzM1IDMuNDE5MTIgMjcuMDYxOSAzLjY0MDE4IDI2Ljk1NDFMMjYuNzU1MiAxNS40Mjk4QzI2Ljg0MDggMTUuMzg4NCAyNi45MDk5IDE1LjMxNjUgMjYuOTU0MSAxNS4yMzM2QzI3LjA2MTkgMTUuMDEyNSAyNi45NzM1IDE0Ljc0NzIgMjYuNzU1MiAxNC42MzY3Wk01LjczNzUyIDIzLjY4NDhMNy4xMjc0NiAxOC4wMDI4TDE1LjI4NDcgMTUuMjAzMkMxNS4zNDgzIDE1LjE4MTEgMTUuNDAwOCAxNS4xMzE0IDE1LjQyMjkgMTUuMDY1QzE1LjQ2MTYgMTQuOTQ5IDE1LjQwMDggMTQuODI0NiAxNS4yODQ3IDE0Ljc4MzJMNy4xMjc0NiAxMS45ODY0TDUuNzQzMDUgNi4zMjY0OUwyMy4wOTY2IDE1LjAyOTFMNS43Mzc1MiAyMy42ODQ4WlwiXG4gICAgICBmaWxsPVwiI0ZGMDA2NlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRnVuZHNJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI0XCJcbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNOS44NTAxIDEwQzkuNTg0ODggMTAgOS4zMzA1MyAxMC4xMDU0IDkuMTQyOTkgMTAuMjkyOUM4Ljk1NTQ1IDEwLjQ4MDQgOC44NTAxIDEwLjczNDggOC44NTAxIDExVjEzQzguODUwMSAxMy4yNjUyIDguOTU1NDUgMTMuNTE5NiA5LjE0Mjk5IDEzLjcwNzFDOS4zMzA1MyAxMy44OTQ2IDkuNTg0ODggMTQgOS44NTAxIDE0QzEwLjExNTMgMTQgMTAuMzY5NyAxMy44OTQ2IDEwLjU1NzIgMTMuNzA3MUMxMC43NDQ3IDEzLjUxOTYgMTAuODUwMSAxMy4yNjUyIDEwLjg1MDEgMTNWMTFDMTAuODUwMSAxMC43MzQ4IDEwLjc0NDcgMTAuNDgwNCAxMC41NTcyIDEwLjI5MjlDMTAuMzY5NyAxMC4xMDU0IDEwLjExNTMgMTAgOS44NTAxIDEwWk0yMS44NTAxIDExQzIyLjExNTMgMTEgMjIuMzY5NyAxMC44OTQ2IDIyLjU1NzIgMTAuNzA3MUMyMi43NDQ3IDEwLjUxOTYgMjIuODUwMSAxMC4yNjUyIDIyLjg1MDEgMTBWNkMyMi44NTAxIDUuNzM0NzggMjIuNzQ0NyA1LjQ4MDQzIDIyLjU1NzIgNS4yOTI4OUMyMi4zNjk3IDUuMTA1MzYgMjIuMTE1MyA1IDIxLjg1MDEgNUgzLjg1MDFDMy41ODQ4OCA1IDMuMzMwNTMgNS4xMDUzNiAzLjE0Mjk5IDUuMjkyODlDMi45NTU0NSA1LjQ4MDQzIDIuODUwMSA1LjczNDc4IDIuODUwMSA2VjEwQzIuODUwMSAxMC4yNjUyIDIuOTU1NDUgMTAuNTE5NiAzLjE0Mjk5IDEwLjcwNzFDMy4zMzA1MyAxMC44OTQ2IDMuNTg0ODggMTEgMy44NTAxIDExQzQuMTE1MzEgMTEgNC4zNjk2NyAxMS4xMDU0IDQuNTU3MiAxMS4yOTI5QzQuNzQ0NzQgMTEuNDgwNCA0Ljg1MDEgMTEuNzM0OCA0Ljg1MDEgMTJDNC44NTAxIDEyLjI2NTIgNC43NDQ3NCAxMi41MTk2IDQuNTU3MiAxMi43MDcxQzQuMzY5NjcgMTIuODk0NiA0LjExNTMxIDEzIDMuODUwMSAxM0MzLjU4NDg4IDEzIDMuMzMwNTMgMTMuMTA1NCAzLjE0Mjk5IDEzLjI5MjlDMi45NTU0NSAxMy40ODA0IDIuODUwMSAxMy43MzQ4IDIuODUwMSAxNFYxOEMyLjg1MDEgMTguMjY1MiAyLjk1NTQ1IDE4LjUxOTYgMy4xNDI5OSAxOC43MDcxQzMuMzMwNTMgMTguODk0NiAzLjU4NDg4IDE5IDMuODUwMSAxOUgyMS44NTAxQzIyLjExNTMgMTkgMjIuMzY5NyAxOC44OTQ2IDIyLjU1NzIgMTguNzA3MUMyMi43NDQ3IDE4LjUxOTYgMjIuODUwMSAxOC4yNjUyIDIyLjg1MDEgMThWMTRDMjIuODUwMSAxMy43MzQ4IDIyLjc0NDcgMTMuNDgwNCAyMi41NTcyIDEzLjI5MjlDMjIuMzY5NyAxMy4xMDU0IDIyLjExNTMgMTMgMjEuODUwMSAxM0MyMS41ODQ5IDEzIDIxLjMzMDUgMTIuODk0NiAyMS4xNDMgMTIuNzA3MUMyMC45NTU1IDEyLjUxOTYgMjAuODUwMSAxMi4yNjUyIDIwLjg1MDEgMTJDMjAuODUwMSAxMS43MzQ4IDIwLjk1NTUgMTEuNDgwNCAyMS4xNDMgMTEuMjkyOUMyMS4zMzA1IDExLjEwNTQgMjEuNTg0OSAxMSAyMS44NTAxIDExWk0yMC44NTAxIDkuMThDMjAuMjcwOSA5LjM5MDIgMTkuNzcwNiA5Ljc3MzYzIDE5LjQxNjkgMTAuMjc4MkMxOS4wNjMzIDEwLjc4MjcgMTguODczNiAxMS4zODM5IDE4Ljg3MzYgMTJDMTguODczNiAxMi42MTYxIDE5LjA2MzMgMTMuMjE3MyAxOS40MTY5IDEzLjcyMThDMTkuNzcwNiAxNC4yMjY0IDIwLjI3MDkgMTQuNjA5OCAyMC44NTAxIDE0LjgyVjE3SDEwLjg1MDFDMTAuODUwMSAxNi43MzQ4IDEwLjc0NDcgMTYuNDgwNCAxMC41NTcyIDE2LjI5MjlDMTAuMzY5NyAxNi4xMDU0IDEwLjExNTMgMTYgOS44NTAxIDE2QzkuNTg0ODggMTYgOS4zMzA1MyAxNi4xMDU0IDkuMTQyOTkgMTYuMjkyOUM4Ljk1NTQ1IDE2LjQ4MDQgOC44NTAxIDE2LjczNDggOC44NTAxIDE3SDQuODUwMVYxNC44MkM1LjQyOTI1IDE0LjYwOTggNS45Mjk2NCAxNC4yMjY0IDYuMjgzMjYgMTMuNzIxOEM2LjYzNjg3IDEzLjIxNzMgNi44MjY1NyAxMi42MTYxIDYuODI2NTcgMTJDNi44MjY1NyAxMS4zODM5IDYuNjM2ODcgMTAuNzgyNyA2LjI4MzI2IDEwLjI3ODJDNS45Mjk2NCA5Ljc3MzYzIDUuNDI5MjUgOS4zOTAyIDQuODUwMSA5LjE4VjdIOC44NTAxQzguODUwMSA3LjI2NTIyIDguOTU1NDUgNy41MTk1NyA5LjE0Mjk5IDcuNzA3MTFDOS4zMzA1MyA3Ljg5NDY0IDkuNTg0ODggOCA5Ljg1MDEgOEMxMC4xMTUzIDggMTAuMzY5NyA3Ljg5NDY0IDEwLjU1NzIgNy43MDcxMUMxMC43NDQ3IDcuNTE5NTcgMTAuODUwMSA3LjI2NTIyIDEwLjg1MDEgN0gyMC44NTAxVjkuMThaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudFRva2Vuc0hpc3RvcnlJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMTkuOTU4IDQuMDQyMDFDMTguOTE1NyAyLjk5Njg0IDE3LjY3NzIgMi4xNjc5NiAxNi4zMTM1IDEuNjAzQzE0Ljk0OTkgMS4wMzgwNSAxMy40ODggMC43NDgxNjYgMTIuMDEyIDAuNzUwMDA5QzguOTM3OTcgMC43NTAwMDkgNi4xNTE5NyAxLjk4NDAxIDQuMTIyOTcgMy45ODUwMUw0LjEyMzk3IDMuOTg0MDFWMC43NTEwMDlIMi42MjM5N1Y2Ljc1MTAxSDguNjIzOTdWNS4yNTEwMUg0Ljk4MDk3QzUuODg5MjQgNC4zMDIxNSA2Ljk4MDMzIDMuNTQ3MTMgOC4xODg0IDMuMDMxNTNDOS4zOTY0NiAyLjUxNTkyIDEwLjY5NjUgMi4yNTA0IDEyLjAxIDIuMjUxMDFDMTcuMzggMi4yNTEwMSAyMS43NDggNi42MjAwMSAyMS43NDggMTEuOTg5QzIxLjc0OCAxNy4zNTggMTcuMzc5IDIxLjcyNyAxMi4wMSAyMS43MjdDNi42NDA5NyAyMS43MjcgMi4yNzE5NyAxNy4zNTggMi4yNzE5NyAxMS45ODlIMC43NzE5NzNDMC43NzE5NzMgMTguMTk2IDUuODAzOTcgMjMuMjI3IDEyLjAxIDIzLjIyN0MxNS4xMTMgMjMuMjI3IDE3LjkyMyAyMS45NjkgMTkuOTU3IDE5LjkzNUMyMS45OTEgMTcuOTAxIDIzLjI0OSAxNS4wOTIgMjMuMjQ5IDExLjk4OEMyMy4yNDkgOC44ODQwMSAyMS45OTEgNi4wNzUwMSAxOS45NTcgNC4wNDEwMUwxOS45NTggNC4wNDIwMVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTYuMTI1IDcuNUg2LjM3NVYxNUgxNi4xMjVWNy41Wk0xNS4zNzUgMTQuMjVINy4xMjVWOC4yNUgxNS4zNzVWMTQuMjVaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE2Ljg3NSA5LjM3NVYxNS43NUg4LjI1VjE2LjVIMTcuNjI1VjkuMzc1SDE2Ljg3NVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTEuMjUgMTMuMDg5QzEyLjE4MDUgMTMuMDg5IDEyLjkzNzUgMTIuMjY1NSAxMi45Mzc1IDExLjI1M0MxMi45Mzc1IDEwLjI0MDUgMTIuMTgwNSA5LjQxNjk5IDExLjI1IDkuNDE2OTlDMTAuMzE5NSA5LjQxNjk5IDkuNTYyNSAxMC4yNDA1IDkuNTYyNSAxMS4yNTNDOS41NjI1IDEyLjI2NTUgMTAuMzE5NSAxMy4wODkgMTEuMjUgMTMuMDg5Wk0xMS4yNSAxMC4xNjc1QzExLjc2NyAxMC4xNjc1IDEyLjE4NzUgMTAuNjU0NSAxMi4xODc1IDExLjI1MzVDMTIuMTg3NSAxMS44NTI1IDExLjc2NyAxMi4zMzk1IDExLjI1IDEyLjMzOTVDMTAuNzMzIDEyLjMzOTUgMTAuMzEyNSAxMS44NTI1IDEwLjMxMjUgMTEuMjUzNUMxMC4zMTI1IDEwLjY1NDUgMTAuNzMzIDEwLjE2NzUgMTEuMjUgMTAuMTY3NVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNNy44NzUgOS4xODc1SDguNjI1VjEzLjMxMjVINy44NzVWOS4xODc1WlwiIGZpbGw9XCJibGFja1wiIC8+XG4gICAgPHBhdGggZD1cIk0xMy44NzUgOS4xODc1SDE0LjYyNVYxMy4zMTI1SDEzLjg3NVY5LjE4NzVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25IaXN0b3J5SWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTE5Ljk1OCA0LjA0MjAxQzE4LjkxNTcgMi45OTY4NCAxNy42NzcyIDIuMTY3OTYgMTYuMzEzNSAxLjYwM0MxNC45NDk5IDEuMDM4MDUgMTMuNDg4IDAuNzQ4MTY2IDEyLjAxMiAwLjc1MDAwOUM4LjkzNzk3IDAuNzUwMDA5IDYuMTUxOTcgMS45ODQwMSA0LjEyMjk3IDMuOTg1MDFMNC4xMjM5NyAzLjk4NDAxVjAuNzUxMDA5SDIuNjIzOTdWNi43NTEwMUg4LjYyMzk3VjUuMjUxMDFINC45ODA5N0M1Ljg4OTI0IDQuMzAyMTUgNi45ODAzMyAzLjU0NzEzIDguMTg4NCAzLjAzMTUzQzkuMzk2NDYgMi41MTU5MiAxMC42OTY1IDIuMjUwNCAxMi4wMSAyLjI1MTAxQzE3LjM4IDIuMjUxMDEgMjEuNzQ4IDYuNjIwMDEgMjEuNzQ4IDExLjk4OUMyMS43NDggMTcuMzU4IDE3LjM3OSAyMS43MjcgMTIuMDEgMjEuNzI3QzYuNjQwOTcgMjEuNzI3IDIuMjcxOTcgMTcuMzU4IDIuMjcxOTcgMTEuOTg5SDAuNzcxOTczQzAuNzcxOTczIDE4LjE5NiA1LjgwMzk3IDIzLjIyNyAxMi4wMSAyMy4yMjdDMTUuMTEzIDIzLjIyNyAxNy45MjMgMjEuOTY5IDE5Ljk1NyAxOS45MzVDMjEuOTkxIDE3LjkwMSAyMy4yNDkgMTUuMDkyIDIzLjI0OSAxMS45ODhDMjMuMjQ5IDguODg0MDEgMjEuOTkxIDYuMDc1MDEgMTkuOTU3IDQuMDQxMDFMMTkuOTU4IDQuMDQyMDFaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEyLjAwMDMgNi4xNjY3NUM4Ljc3ODk3IDYuMTY2NzUgNi4xNjY5OSA4Ljc3ODczIDYuMTY2OTkgMTIuMDAwMUM2LjE2Njk5IDE1LjIyMTQgOC43Nzg5NyAxNy44MzM0IDEyLjAwMDMgMTcuODMzNEMxNS4yMjE3IDE3LjgzMzQgMTcuODMzNyAxNS4yMjE0IDE3LjgzMzcgMTIuMDAwMUMxNy44MzM3IDguNzc4NzMgMTUuMjIxNyA2LjE2Njc1IDEyLjAwMDMgNi4xNjY3NVpNMTIuMDAwMyAxNi44NDM4QzkuMzI1ODUgMTYuODQzOCA3LjE1NjU4IDE0LjY3NDYgNy4xNTY1OCAxMi4wMDAxQzcuMTU2NTggOS4zMjU2IDkuMzI1ODUgNy4xNTYzMyAxMi4wMDAzIDcuMTU2MzNDMTQuNjc0OCA3LjE1NjMzIDE2Ljg0NDEgOS4zMjU2IDE2Ljg0NDEgMTIuMDAwMUMxNi44NDQxIDE0LjY3NDYgMTQuNjc0OCAxNi44NDM4IDEyLjAwMDMgMTYuODQzOFpNMTIuNjIxNCAxMS42OThMMTIuMjkwNyAxMS42MjEyVjkuODcyNDhDMTIuNzg1NSA5Ljk0MDE5IDEzLjA5MTUgMTAuMjUwMSAxMy4xNDM2IDEwLjYzMDNDMTMuMTUwMSAxMC42ODI0IDEzLjE5NDMgMTAuNzIwMSAxMy4yNDY0IDEwLjcyMDFIMTMuODMxMUMxMy44OTIzIDEwLjcyMDEgMTMuOTQwNCAxMC42NjY3IDEzLjkzNTIgMTAuNjA1NkMxMy44NTU4IDkuNzk0MzUgMTMuMTg3OCA5LjI3MzUyIDEyLjI5NTkgOS4xODM2OFY4Ljc1Nzg5QzEyLjI5NTkgOC43MDA2IDEyLjI0OSA4LjY1MzczIDEyLjE5MTcgOC42NTM3M0gxMS44MjU4QzExLjc2ODYgOC42NTM3MyAxMS43MjE3IDguNzAwNiAxMS43MjE3IDguNzU3ODlWOS4xODc1OEMxMC43OTk4IDkuMjc3NDMgMTAuMDc4NSA5Ljc4NjU0IDEwLjA3ODUgMTAuNzM3MUMxMC4wNzg1IDExLjYxNzMgMTAuNzI2OSAxMi4wNDE3IDExLjQwNzkgMTIuMjA0NUwxMS43Mjk1IDEyLjI4NjVWMTQuMTQ0NkMxMS4xNTQgMTQuMDY3OCAxMC44MzExIDEzLjc2MDUgMTAuNzY0NiAxMy4zNDY0QzEwLjc1NjggMTMuMjk3IDEwLjcxMjYgMTMuMjYwNSAxMC42NjE4IDEzLjI2MDVIMTAuMDYwMkM5Ljk5OTAyIDEzLjI2MDUgOS45NTA4NSAxMy4zMTI2IDkuOTU2MDYgMTMuMzczOEMxMC4wMTQ2IDE0LjA4OTkgMTAuNTU3NiAxNC43NDg4IDExLjcxNjUgMTQuODMzNFYxNS4yNDIzQzExLjcxNjUgMTUuMjk5NiAxMS43NjMzIDE1LjM0NjQgMTEuODIwNiAxNS4zNDY0SDEyLjE5MDRDMTIuMjQ3NyAxNS4zNDY0IDEyLjI5NDYgMTUuMjk5NiAxMi4yOTQ2IDE1LjI0MUwxMi4yOTIgMTQuODI4MkMxMy4zMTE1IDE0LjczODQgMTQuMDQwNyAxNC4xOTI4IDE0LjA0MDcgMTMuMjEzNkMxNC4wMzk0IDEyLjMxIDEzLjQ2NTIgMTEuOTA2MyAxMi42MjE0IDExLjY5OFpNMTEuNzI4MiAxMS40ODcxQzExLjY1NTMgMTEuNDY2MiAxMS41OTQxIDExLjQ0NjcgMTEuNTMyOSAxMS40MjJDMTEuMDkyOCAxMS4yNjMxIDEwLjg4ODMgMTEuMDA2NiAxMC44ODgzIDEwLjY3NTlDMTAuODg4MyAxMC4yMDMyIDExLjI0NjQgOS45MzM2OCAxMS43MjgyIDkuODcyNDhWMTEuNDg3MVpNMTIuMjkwNyAxNC4xNDg1VjEyLjQwNzZDMTIuMzMxMSAxMi40MTk0IDEyLjM2NzUgMTIuNDI4NSAxMi40MDUzIDEyLjQzNjNDMTMuMDIxMiAxMi42MjM4IDEzLjIyODIgMTIuODg0MiAxMy4yMjgyIDEzLjI4MzlDMTMuMjI4MiAxMy43OTMxIDEyLjg0NTQgMTQuMDk5IDEyLjI5MDcgMTQuMTQ4NVpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQdXJjaGFzZWRJbWFnZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk03LjUgNi43NUM3LjUgNi43NSA3LjUgMi4yNSAxMiAyLjI1QzE2LjUgMi4yNSAxNi41IDYuNzUgMTYuNSA2Ljc1TTMuNzUgNi43NVYyMS43NUgyMC4yNVY2Ljc1SDMuNzVaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEyLjQ4MTYgMTMuOTY2TDExLjU2OTkgMTUuMTI4NUwxMS4wODgzIDE0LjUxNDVDMTEuMDc5NSAxNC41MDMyIDExLjA2ODMgMTQuNDk0MiAxMS4wNTU1IDE0LjQ4OEMxMS4wNDI3IDE0LjQ4MTcgMTEuMDI4NyAxNC40Nzg1IDExLjAxNDUgMTQuNDc4NUMxMS4wMDAyIDE0LjQ3ODUgMTAuOTg2MiAxNC40ODE3IDEwLjk3MzQgMTQuNDg4QzEwLjk2MDYgMTQuNDk0MiAxMC45NDk0IDE0LjUwMzIgMTAuOTQwNiAxNC41MTQ1TDkuNzcxMDkgMTYuMDA1MUM5Ljc2MDI3IDE2LjAxODkgOS43NTM1NiAxNi4wMzU1IDkuNzUxNzIgMTYuMDUyOUM5Ljc0OTg4IDE2LjA3MDQgOS43NTI5OSAxNi4wODggOS43NjA2OSAxNi4xMDM4QzkuNzY4MzkgMTYuMTE5NSA5Ljc4MDM4IDE2LjEzMjggOS43OTUyNyAxNi4xNDIxQzkuODEwMTcgMTYuMTUxNCA5LjgyNzM3IDE2LjE1NjMgOS44NDQ5MiAxNi4xNTYySDE0LjE1NjJDMTQuMjM0OCAxNi4xNTYyIDE0LjI3ODEgMTYuMDY2IDE0LjIzMDEgMTYuMDA1MUwxMi42MzA1IDEzLjk2NkMxMi42MjE2IDEzLjk1NDggMTIuNjEwMyAxMy45NDU3IDEyLjU5NzQgMTMuOTM5NUMxMi41ODQ1IDEzLjkzMzMgMTIuNTcwNCAxMy45MyAxMi41NTYxIDEzLjkzQzEyLjU0MTcgMTMuOTMgMTIuNTI3NiAxMy45MzMzIDEyLjUxNDcgMTMuOTM5NUMxMi41MDE4IDEzLjk0NTcgMTIuNDkwNSAxMy45NTQ4IDEyLjQ4MTYgMTMuOTY2Wk0xMC4yMTg4IDEzLjE3OTdDMTAuMjE4OCAxMy4zMDQgMTAuMjY4MSAxMy40MjMyIDEwLjM1NiAxMy41MTExQzEwLjQ0NCAxMy41OTkxIDEwLjU2MzIgMTMuNjQ4NCAxMC42ODc1IDEzLjY0ODRDMTAuODExOCAxMy42NDg0IDEwLjkzMSAxMy41OTkxIDExLjAxOSAxMy41MTExQzExLjEwNjkgMTMuNDIzMiAxMS4xNTYyIDEzLjMwNCAxMS4xNTYyIDEzLjE3OTdDMTEuMTU2MiAxMy4wNTU0IDExLjEwNjkgMTIuOTM2MSAxMS4wMTkgMTIuODQ4MkMxMC45MzEgMTIuNzYwMyAxMC44MTE4IDEyLjcxMDkgMTAuNjg3NSAxMi43MTA5QzEwLjU2MzIgMTIuNzEwOSAxMC40NDQgMTIuNzYwMyAxMC4zNTYgMTIuODQ4MkMxMC4yNjgxIDEyLjkzNjEgMTAuMjE4OCAxMy4wNTU0IDEwLjIxODggMTMuMTc5N1pNMTYuMDE0OCAxMS4zODJMMTMuNDkzIDguODYwMTZDMTMuNDIyNyA4Ljc4OTg0IDEzLjMyNzcgOC43NSAxMy4yMjgxIDguNzVIOC4yNUM4LjA0MjU4IDguNzUgNy44NzUgOC45MTc1OCA3Ljg3NSA5LjEyNVYxOC44NzVDNy44NzUgMTkuMDgyNCA4LjA0MjU4IDE5LjI1IDguMjUgMTkuMjVIMTUuNzVDMTUuOTU3NCAxOS4yNSAxNi4xMjUgMTkuMDgyNCAxNi4xMjUgMTguODc1VjExLjY0OEMxNi4xMjUgMTEuNTQ4NCAxNi4wODUyIDExLjQ1MjMgMTYuMDE0OCAxMS4zODJaTTE1LjI2MDIgMTEuODIwM0gxMy4wNTQ3VjkuNjE0ODRMMTUuMjYwMiAxMS44MjAzWk0xNS4yODEyIDE4LjQwNjJIOC43MTg3NVY5LjU5Mzc1SDEyLjI1NzhWMTIuMTI1QzEyLjI1NzggMTIuMjU1NSAxMi4zMDk3IDEyLjM4MDcgMTIuNDAyIDEyLjQ3M0MxMi40OTQzIDEyLjU2NTMgMTIuNjE5NSAxMi42MTcyIDEyLjc1IDEyLjYxNzJIMTUuMjgxMlYxOC40MDYyWlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlZFZpZGVvSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTcuNSA2Ljc1QzcuNSA2Ljc1IDcuNSAyLjI1IDEyIDIuMjVDMTYuNSAyLjI1IDE2LjUgNi43NSAxNi41IDYuNzVNMy43NSA2Ljc1VjIxLjc1SDIwLjI1VjYuNzVIMy43NVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgOUM5LjI0MyA5IDcgMTEuMjQzIDcgMTRDNyAxNi43NTcgOS4yNDMgMTkgMTIgMTlDMTQuNzU3IDE5IDE3IDE2Ljc1NyAxNyAxNEMxNyAxMS4yNDMgMTQuNzU3IDkgMTIgOVpNMTIgMThDOS43OTQ1IDE4IDggMTYuMjA1NSA4IDE0QzggMTEuNzk0NSA5Ljc5NDUgMTAgMTIgMTBDMTQuMjA1NSAxMCAxNiAxMS43OTQ1IDE2IDE0QzE2IDE2LjIwNTUgMTQuMjA1NSAxOCAxMiAxOFpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTAuNSAxNi41TDE0LjUgMTRMMTAuNSAxMS41VjE2LjVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VkSXRlbUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0xLjUgNi40MDQ5OFYxNy42MUMxLjUgMTguMjg1IDEuOTUgMTguODcgMi42MjUgMTkuMDY1TDEyLjM3NSAyMS42NkMxMi42MTUgMjEuNzM1IDEyLjg4NSAyMS43MzUgMTMuMTI1IDIxLjY2TDIyLjg3NSAxOS4wNjVDMjMuNTUgMTguODcgMjQgMTguMjg1IDI0IDE3LjYxVjYuNDA0OThDMjQgNS43Mjk5OCAyMy41NSA1LjE0NDk4IDIyLjg3NSA0Ljk0OTk4TDEzLjEyNSAyLjMzOTk4QzEyLjg3NyAyLjI5NDk4IDEyLjYyMyAyLjI5NDk4IDEyLjM3NSAyLjMzOTk4TDIuNjI1IDQuOTQ5OThDMS45NSA1LjE0NDk4IDEuNSA1LjcyOTk4IDEuNSA2LjQwNDk4Wk0xMiAyMC4wNEwzIDE3LjY1NVY3LjQ5OTk4TDEyIDkuOTE0OThWMjAuMDRaTTMgNS45OTk5OEw2Ljc1IDQuOTk0OThMMTYuNSA3LjU4OTk4TDEyLjc1IDguNTk0OThMMyA1Ljk5OTk4Wk0yMi41IDE3LjY1NUwxMy41IDIwLjA0VjkuOTE0OThMMTYuNSA5LjA4OTk4VjEyLjc1TDE5LjUgMTEuOTU1VjguMjk0OThMMjIuNSA3LjQ5OTk4VjE3LjY1NVpNMTkuNSA2Ljc5NDk4TDkuNzUgNC4xOTk5OEwxMi43NSAzLjQwNDk4TDIyLjUgNS45OTk5OEwxOS41IDYuNzk0OThaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgTXlQcm9kdWN0SWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTEuNSA2LjQwNTAzVjE3LjYxQzEuNSAxOC4yODUgMS45NSAxOC44NyAyLjYyNSAxOS4wNjVMMTIuMzc1IDIxLjY2QzEyLjYxNSAyMS43MzUgMTIuODg1IDIxLjczNSAxMy4xMjUgMjEuNjZMMjIuODc1IDE5LjA2NUMyMy41NSAxOC44NyAyNCAxOC4yODUgMjQgMTcuNjFWNi40MDUwM0MyNCA1LjczMDAzIDIzLjU1IDUuMTQ1MDMgMjIuODc1IDQuOTUwMDNMMTMuMTI1IDIuMzQwMDNDMTIuODc3IDIuMjk1MDIgMTIuNjIzIDIuMjk1MDIgMTIuMzc1IDIuMzQwMDNMMi42MjUgNC45NTAwM0MxLjk1IDUuMTQ1MDMgMS41IDUuNzMwMDMgMS41IDYuNDA1MDNaTTEyIDIwLjA0TDMgMTcuNjU1VjcuNTAwMDNMMTIgOS45MTUwM1YyMC4wNFpNMyA2LjAwMDAzTDYuNzUgNC45OTUwM0wxNi41IDcuNTkwMDNMMTIuNzUgOC41OTUwM0wzIDYuMDAwMDNaTTIyLjUgMTcuNjU1TDEzLjUgMjAuMDRWOS45MTUwM0wxNi41IDkuMDkwMDNWMTIuNzVMMTkuNSAxMS45NTVWOC4yOTUwM0wyMi41IDcuNTAwMDNWMTcuNjU1Wk0xOS41IDYuNzk1MDNMOS43NSA0LjIwMDAzTDEyLjc1IDMuNDA1MDNMMjIuNSA2LjAwMDAzTDE5LjUgNi43OTUwM1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFZpZGVvc0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMzAgMzFcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0yMi41MDAyIDkuMTQ0MjRDMjIuNTAwMiA3Ljc2NTQ5IDIxLjM3ODkgNi42NDQyNCAyMC4wMDAyIDYuNjQ0MjRINS4wMDAxOEMzLjYyMTQzIDYuNjQ0MjQgMi41MDAxOCA3Ljc2NTQ5IDIuNTAwMTggOS4xNDQyNFYyMS42NDQyQzIuNTAwMTggMjMuMDIzIDMuNjIxNDMgMjQuMTQ0MiA1LjAwMDE4IDI0LjE0NDJIMjAuMDAwMkMyMS4zNzg5IDI0LjE0NDIgMjIuNTAwMiAyMy4wMjMgMjIuNTAwMiAyMS42NDQyVjE3LjQ3OEwyNy41MDAyIDIxLjY0NDJWOS4xNDQyNEwyMi41MDAyIDEzLjMxMDVWOS4xNDQyNFpNMjAuMDAyNyAyMS42NDQySDUuMDAwMThWOS4xNDQyNEgyMC4wMDAyTDIwLjAwMTQgMTUuMzkzTDIwLjAwMDIgMTUuMzk0MkwyMC4wMDE0IDE1LjM5NTVMMjAuMDAyNyAyMS42NDQyWlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBob3Rvc0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0yMS43NSAzLjc1SDIuMjVDMS44MzUxNiAzLjc1IDEuNSA0LjA4NTE2IDEuNSA0LjVWMTkuNUMxLjUgMTkuOTE0OCAxLjgzNTE2IDIwLjI1IDIuMjUgMjAuMjVIMjEuNzVDMjIuMTY0OCAyMC4yNSAyMi41IDE5LjkxNDggMjIuNSAxOS41VjQuNUMyMi41IDQuMDg1MTYgMjIuMTY0OCAzLjc1IDIxLjc1IDMuNzVaTTIwLjgxMjUgMTguNTYyNUgzLjE4NzVWMTcuNjI3M0w2LjQzMzU5IDEzLjc3NjZMOS45NTE1NiAxNy45NDg0TDE1LjQyNDIgMTEuNDYwOUwyMC44MTI1IDE3Ljg1VjE4LjU2MjVaTTIwLjgxMjUgMTUuNTIwM0wxNS41NjcyIDkuM0MxNS40OTIyIDkuMjEwOTQgMTUuMzU2MiA5LjIxMDk0IDE1LjI4MTIgOS4zTDkuOTUxNTYgMTUuNjE4OEw2LjU3NjU2IDExLjYxOEM2LjUwMTU2IDExLjUyODkgNi4zNjU2MiAxMS41Mjg5IDYuMjkwNjIgMTEuNjE4TDMuMTg3NSAxNS4yOTc3VjUuNDM3NUgyMC44MTI1VjE1LjUyMDNaTTcuMTI1IDEwLjY4NzVDNy4zOTU4NSAxMC42ODc1IDcuNjY0MDUgMTAuNjM0MiA3LjkxNDI4IDEwLjUzMDVDOC4xNjQ1MiAxMC40MjY5IDguMzkxODkgMTAuMjc0OSA4LjU4MzQxIDEwLjA4MzRDOC43NzQ5MyA5Ljg5MTg5IDguOTI2ODUgOS42NjQ1MiA5LjAzMDUgOS40MTQyOEM5LjEzNDE1IDkuMTY0MDUgOS4xODc1IDguODk1ODUgOS4xODc1IDguNjI1QzkuMTg3NSA4LjM1NDE1IDkuMTM0MTUgOC4wODU5NSA5LjAzMDUgNy44MzU3MkM4LjkyNjg1IDcuNTg1NDggOC43NzQ5MyA3LjM1ODExIDguNTgzNDEgNy4xNjY1OUM4LjM5MTg5IDYuOTc1MDcgOC4xNjQ1MiA2LjgyMzE1IDcuOTE0MjggNi43MTk1QzcuNjY0MDUgNi42MTU4NSA3LjM5NTg1IDYuNTYyNSA3LjEyNSA2LjU2MjVDNi41Nzc5OSA2LjU2MjUgNi4wNTMzOSA2Ljc3OTggNS42NjY1OSA3LjE2NjU5QzUuMjc5OCA3LjU1MzM5IDUuMDYyNSA4LjA3Nzk5IDUuMDYyNSA4LjYyNUM1LjA2MjUgOS4xNzIwMSA1LjI3OTggOS42OTY2MSA1LjY2NjU5IDEwLjA4MzRDNi4wNTMzOSAxMC40NzAyIDYuNTc3OTkgMTAuNjg3NSA3LjEyNSAxMC42ODc1Wk03LjEyNSA3Ljk2ODc1QzcuNDg4MjggNy45Njg3NSA3Ljc4MTI1IDguMjYxNzIgNy43ODEyNSA4LjYyNUM3Ljc4MTI1IDguOTg4MjggNy40ODgyOCA5LjI4MTI1IDcuMTI1IDkuMjgxMjVDNi43NjE3MiA5LjI4MTI1IDYuNDY4NzUgOC45ODgyOCA2LjQ2ODc1IDguNjI1QzYuNDY4NzUgOC4yNjE3MiA2Ljc2MTcyIDcuOTY4NzUgNy4xMjUgNy45Njg3NVpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBGZW1hbGVTaWduSWNvbiA9ICh7IGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTggMS4zMzMzN0M1Ljc5NCAxLjMzMzM3IDQgMy4xMjczNyA0IDUuMzMzMzdDNCA3LjMxMTM3IDUuNDQ0NjcgOC45NTQ3MSA3LjMzMzMzIDkuMjczMzdWMTEuMzMzNEg1LjMzMzMzVjEyLjY2NjdINy4zMzMzM1YxNC42NTg3SDguNjY2NjdWMTIuNjY2N0gxMC42NjY3VjExLjMzMzRIOC42NjY2N1Y5LjI3MzM3QzEwLjU1NTMgOC45NTQwNCAxMiA3LjMxMTM3IDEyIDUuMzMzMzdDMTIgMy4xMjczNyAxMC4yMDYgMS4zMzMzNyA4IDEuMzMzMzdaTTggOC4wMDAwNEM2LjUyOTMzIDguMDAwMDQgNS4zMzMzMyA2LjgwNDA0IDUuMzMzMzMgNS4zMzMzN0M1LjMzMzMzIDMuODYyNzEgNi41MjkzMyAyLjY2NjcxIDggMi42NjY3MUM5LjQ3MDY3IDIuNjY2NzEgMTAuNjY2NyAzLjg2MjcxIDEwLjY2NjcgNS4zMzMzN0MxMC42NjY3IDYuODA0MDQgOS40NzA2NyA4LjAwMDA0IDggOC4wMDAwNFpcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgTWFsZVNpZ25JY29uID0gKHsgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTMuMzMzNCA3LjMzMzI5VjIuNjY2NjNIOC42NjY3MUwxMC41Mjg3IDQuNTI4NjNMNy42NDczNyA3LjQwOTk2QzYuOTcyNiA2LjkyNjYgNi4xNjM0MSA2LjY2NjY3IDUuMzMzMzcgNi42NjY2M0MzLjEyNzM3IDYuNjY2NjMgMS4zMzMzNyA4LjQ2MDYzIDEuMzMzMzcgMTAuNjY2NkMxLjMzMzM3IDEyLjg3MjYgMy4xMjczNyAxNC42NjY2IDUuMzMzMzcgMTQuNjY2NkM3LjUzOTM3IDE0LjY2NjYgOS4zMzMzNyAxMi44NzI2IDkuMzMzMzcgMTAuNjY2NkM5LjMzMzM3IDkuODAzOTYgOS4wNTYwNCA5LjAwNjYzIDguNTkwMDQgOC4zNTI2M0wxMS40NzE0IDUuNDcxMjlMMTMuMzMzNCA3LjMzMzI5Wk01LjMzMzM3IDEzLjMzMzNDMy44NjI3MSAxMy4zMzMzIDIuNjY2NzEgMTIuMTM3MyAyLjY2NjcxIDEwLjY2NjZDMi42NjY3MSA5LjE5NTk2IDMuODYyNzEgNy45OTk5NiA1LjMzMzM3IDcuOTk5OTZDNi44MDQwNCA3Ljk5OTk2IDguMDAwMDQgOS4xOTU5NiA4LjAwMDA0IDEwLjY2NjZDOC4wMDAwNCAxMi4xMzczIDYuODA0MDQgMTMuMzMzMyA1LjMzMzM3IDEzLjMzMzNaXCJcbiAgICAgIGZpbGw9e2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zZ2VuZGVySWNvbiA9ICh7IGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTYuNjY2NjUgMTAuMzMzM0M3LjU1MDcgMTAuMzMzMyA4LjM5ODU1IDkuOTgyMSA5LjAyMzY3IDkuMzU2OThDOS42NDg3OSA4LjczMTg1IDkuOTk5OTggNy44ODQwMSA5Ljk5OTk4IDYuOTk5OTVDOS45OTk5OCA2LjExNTkgOS42NDg3OSA1LjI2ODA1IDkuMDIzNjcgNC42NDI5M0M4LjM5ODU1IDQuMDE3ODEgNy41NTA3IDMuNjY2NjIgNi42NjY2NSAzLjY2NjYyQzUuNzgyNTkgMy42NjY2MiA0LjkzNDc0IDQuMDE3ODEgNC4zMDk2MiA0LjY0MjkzQzMuNjg0NSA1LjI2ODA1IDMuMzMzMzEgNi4xMTU5IDMuMzMzMzEgNi45OTk5NUMzLjMzMzMxIDcuODg0MDEgMy42ODQ1IDguNzMxODUgNC4zMDk2MiA5LjM1Njk4QzQuOTM0NzQgOS45ODIxIDUuNzgyNTkgMTAuMzMzMyA2LjY2NjY1IDEwLjMzMzNWMTAuMzMzM1pNMTAuNjc1MyA0LjYwOTI5QzExLjA2ODggNS4yNjkyNCAxMS4yOTMyIDYuMDE2MSAxMS4zMjg4IDYuNzgzNjJDMTEuMzY0NCA3LjU1MTEzIDExLjIxIDguMzE1NTYgMTAuODc5MiA5LjAwOTA3QzEwLjU0ODUgOS43MDI1OCAxMC4wNTE3IDEwLjMwMzcgOS40MzI5IDEwLjc1OTJDOC44MTQxIDExLjIxNDYgOC4wOTI0NSAxMS41MTAzIDcuMzMxOTggMTEuNjJMNy4zMzMzMSAxMS42NjY2VjEyLjMzMzNINy45OTk5OEM4LjE3Njc5IDEyLjMzMzMgOC4zNDYzNiAxMi40MDM1IDguNDcxMzggMTIuNTI4NUM4LjU5NjQxIDEyLjY1MzYgOC42NjY2NCAxMi44MjMxIDguNjY2NjQgMTNDOC42NjY2NCAxMy4xNzY4IDguNTk2NDEgMTMuMzQ2MyA4LjQ3MTM4IDEzLjQ3MTRDOC4zNDYzNiAxMy41OTY0IDguMTc2NzkgMTMuNjY2NiA3Ljk5OTk4IDEzLjY2NjZINy4zMzMzMVYxNC4zMzMzQzcuMzMzMzEgMTQuNTEwMSA3LjI2MzA3IDE0LjY3OTcgNy4xMzgwNSAxNC44MDQ3QzcuMDEzMDMgMTQuOTI5NyA2Ljg0MzQ2IDE1IDYuNjY2NjUgMTVDNi40ODk4MyAxNSA2LjMyMDI2IDE0LjkyOTcgNi4xOTUyNCAxNC44MDQ3QzYuMDcwMjIgMTQuNjc5NyA1Ljk5OTk4IDE0LjUxMDEgNS45OTk5OCAxNC4zMzMzVjEzLjY2NjZINS4zMzMzMUM1LjE1NjUgMTMuNjY2NiA0Ljk4NjkzIDEzLjU5NjQgNC44NjE5MSAxMy40NzE0QzQuNzM2ODggMTMuMzQ2MyA0LjY2NjY1IDEzLjE3NjggNC42NjY2NSAxM0M0LjY2NjY1IDEyLjgyMzEgNC43MzY4OCAxMi42NTM2IDQuODYxOTEgMTIuNTI4NUM0Ljk4NjkzIDEyLjQwMzUgNS4xNTY1IDEyLjMzMzMgNS4zMzMzMSAxMi4zMzMzSDUuOTk5OThWMTEuNjY2NkM1Ljk5OTk4IDExLjY1MDYgNS45OTk5OCAxMS42MzUzIDYuMDAxMzEgMTEuNjJDNC44MzU0NSAxMS40NDkxIDMuNzc3MzIgMTAuODQzNyAzLjAzOTI2IDkuOTI1MThDMi4zMDEyIDkuMDA2NjYgMS45Mzc4MSA3Ljg0Mjk5IDIuMDIyMDEgNi42Njc2OUMyLjEwNjIyIDUuNDkyMzkgMi42MzE3OCA0LjM5MjQyIDMuNDkzMjUgMy41ODg0OUM0LjM1NDcxIDIuNzg0NTcgNS40ODgzNCAyLjMzNjE3IDYuNjY2NjUgMi4zMzMyOUM3LjgzOTA2IDIuMzMxODYgOC45Njg4MSAyLjc3MzA0IDkuODI5OTggMy41Njg2MkwxMS4wNjMzIDIuMzM1MjlIMTAuMDA2NkM5LjgyOTgzIDIuMzM1MjkgOS42NjAyNiAyLjI2NTA1IDkuNTM1MjQgMi4xNDAwMkM5LjQxMDIyIDIuMDE1IDkuMzM5OTggMS44NDU0MyA5LjMzOTk4IDEuNjY4NjJDOS4zMzk5OCAxLjQ5MTgxIDkuNDEwMjIgMS4zMjIyNCA5LjUzNTI0IDEuMTk3MjJDOS42NjAyNiAxLjA3MjE5IDkuODI5ODMgMS4wMDE5NSAxMC4wMDY2IDEuMDAxOTVIMTIuNjczM0MxMi44NTAxIDEuMDAxOTUgMTMuMDE5NyAxLjA3MjE5IDEzLjE0NDcgMS4xOTcyMkMxMy4yNjk3IDEuMzIyMjQgMTMuMzQgMS40OTE4MSAxMy4zNCAxLjY2ODYyVjQuMzM1MjlDMTMuMzQgNC41MTIxIDEzLjI2OTcgNC42ODE2NyAxMy4xNDQ3IDQuODA2NjlDMTMuMDE5NyA0LjkzMTcyIDEyLjg1MDEgNS4wMDE5NSAxMi42NzMzIDUuMDAxOTVDMTIuNDk2NSA1LjAwMTk1IDEyLjMyNjkgNC45MzE3MiAxMi4yMDE5IDQuODA2NjlDMTIuMDc2OSA0LjY4MTY3IDEyLjAwNjYgNC41MTIxIDEyLjAwNjYgNC4zMzUyOVYzLjI3Nzk1TDEwLjY3NiA0LjYwOTI5SDEwLjY3NTNaXCJcbiAgICAgIGZpbGw9e2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRva2Vuc0ljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjI1XCJcbiAgICBoZWlnaHQ9XCIyNFwiXG4gICAgdmlld0JveD1cIjAgMCAyNSAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNOS44NTAxIDEwQzkuNTg0ODggMTAgOS4zMzA1MyAxMC4xMDU0IDkuMTQyOTkgMTAuMjkyOUM4Ljk1NTQ1IDEwLjQ4MDQgOC44NTAxIDEwLjczNDggOC44NTAxIDExVjEzQzguODUwMSAxMy4yNjUyIDguOTU1NDUgMTMuNTE5NiA5LjE0Mjk5IDEzLjcwNzFDOS4zMzA1MyAxMy44OTQ2IDkuNTg0ODggMTQgOS44NTAxIDE0QzEwLjExNTMgMTQgMTAuMzY5NyAxMy44OTQ2IDEwLjU1NzIgMTMuNzA3MUMxMC43NDQ3IDEzLjUxOTYgMTAuODUwMSAxMy4yNjUyIDEwLjg1MDEgMTNWMTFDMTAuODUwMSAxMC43MzQ4IDEwLjc0NDcgMTAuNDgwNCAxMC41NTcyIDEwLjI5MjlDMTAuMzY5NyAxMC4xMDU0IDEwLjExNTMgMTAgOS44NTAxIDEwWk0yMS44NTAxIDExQzIyLjExNTMgMTEgMjIuMzY5NyAxMC44OTQ2IDIyLjU1NzIgMTAuNzA3MUMyMi43NDQ3IDEwLjUxOTYgMjIuODUwMSAxMC4yNjUyIDIyLjg1MDEgMTBWNkMyMi44NTAxIDUuNzM0NzggMjIuNzQ0NyA1LjQ4MDQzIDIyLjU1NzIgNS4yOTI4OUMyMi4zNjk3IDUuMTA1MzYgMjIuMTE1MyA1IDIxLjg1MDEgNUgzLjg1MDFDMy41ODQ4OCA1IDMuMzMwNTMgNS4xMDUzNiAzLjE0Mjk5IDUuMjkyODlDMi45NTU0NSA1LjQ4MDQzIDIuODUwMSA1LjczNDc4IDIuODUwMSA2VjEwQzIuODUwMSAxMC4yNjUyIDIuOTU1NDUgMTAuNTE5NiAzLjE0Mjk5IDEwLjcwNzFDMy4zMzA1MyAxMC44OTQ2IDMuNTg0ODggMTEgMy44NTAxIDExQzQuMTE1MzEgMTEgNC4zNjk2NyAxMS4xMDU0IDQuNTU3MiAxMS4yOTI5QzQuNzQ0NzQgMTEuNDgwNCA0Ljg1MDEgMTEuNzM0OCA0Ljg1MDEgMTJDNC44NTAxIDEyLjI2NTIgNC43NDQ3NCAxMi41MTk2IDQuNTU3MiAxMi43MDcxQzQuMzY5NjcgMTIuODk0NiA0LjExNTMxIDEzIDMuODUwMSAxM0MzLjU4NDg4IDEzIDMuMzMwNTMgMTMuMTA1NCAzLjE0Mjk5IDEzLjI5MjlDMi45NTU0NSAxMy40ODA0IDIuODUwMSAxMy43MzQ4IDIuODUwMSAxNFYxOEMyLjg1MDEgMTguMjY1MiAyLjk1NTQ1IDE4LjUxOTYgMy4xNDI5OSAxOC43MDcxQzMuMzMwNTMgMTguODk0NiAzLjU4NDg4IDE5IDMuODUwMSAxOUgyMS44NTAxQzIyLjExNTMgMTkgMjIuMzY5NyAxOC44OTQ2IDIyLjU1NzIgMTguNzA3MUMyMi43NDQ3IDE4LjUxOTYgMjIuODUwMSAxOC4yNjUyIDIyLjg1MDEgMThWMTRDMjIuODUwMSAxMy43MzQ4IDIyLjc0NDcgMTMuNDgwNCAyMi41NTcyIDEzLjI5MjlDMjIuMzY5NyAxMy4xMDU0IDIyLjExNTMgMTMgMjEuODUwMSAxM0MyMS41ODQ5IDEzIDIxLjMzMDUgMTIuODk0NiAyMS4xNDMgMTIuNzA3MUMyMC45NTU1IDEyLjUxOTYgMjAuODUwMSAxMi4yNjUyIDIwLjg1MDEgMTJDMjAuODUwMSAxMS43MzQ4IDIwLjk1NTUgMTEuNDgwNCAyMS4xNDMgMTEuMjkyOUMyMS4zMzA1IDExLjEwNTQgMjEuNTg0OSAxMSAyMS44NTAxIDExWk0yMC44NTAxIDkuMThDMjAuMjcwOSA5LjM5MDIgMTkuNzcwNiA5Ljc3MzYzIDE5LjQxNjkgMTAuMjc4MkMxOS4wNjMzIDEwLjc4MjcgMTguODczNiAxMS4zODM5IDE4Ljg3MzYgMTJDMTguODczNiAxMi42MTYxIDE5LjA2MzMgMTMuMjE3MyAxOS40MTY5IDEzLjcyMThDMTkuNzcwNiAxNC4yMjY0IDIwLjI3MDkgMTQuNjA5OCAyMC44NTAxIDE0LjgyVjE3SDEwLjg1MDFDMTAuODUwMSAxNi43MzQ4IDEwLjc0NDcgMTYuNDgwNCAxMC41NTcyIDE2LjI5MjlDMTAuMzY5NyAxNi4xMDU0IDEwLjExNTMgMTYgOS44NTAxIDE2QzkuNTg0ODggMTYgOS4zMzA1MyAxNi4xMDU0IDkuMTQyOTkgMTYuMjkyOUM4Ljk1NTQ1IDE2LjQ4MDQgOC44NTAxIDE2LjczNDggOC44NTAxIDE3SDQuODUwMVYxNC44MkM1LjQyOTI1IDE0LjYwOTggNS45Mjk2NCAxNC4yMjY0IDYuMjgzMjYgMTMuNzIxOEM2LjYzNjg3IDEzLjIxNzMgNi44MjY1NyAxMi42MTYxIDYuODI2NTcgMTJDNi44MjY1NyAxMS4zODM5IDYuNjM2ODcgMTAuNzgyNyA2LjI4MzI2IDEwLjI3ODJDNS45Mjk2NCA5Ljc3MzYzIDUuNDI5MjUgOS4zOTAyIDQuODUwMSA5LjE4VjdIOC44NTAxQzguODUwMSA3LjI2NTIyIDguOTU1NDUgNy41MTk1NyA5LjE0Mjk5IDcuNzA3MTFDOS4zMzA1MyA3Ljg5NDY0IDkuNTg0ODggOCA5Ljg1MDEgOEMxMC4xMTUzIDggMTAuMzY5NyA3Ljg5NDY0IDEwLjU1NzIgNy43MDcxMUMxMC43NDQ3IDcuNTE5NTcgMTAuODUwMSA3LjI2NTIyIDEwLjg1MDEgN0gyMC44NTAxVjkuMThaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEVhcm5pbmdJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIwLjI1IDNIMC43NVYxOEgyMC4yNVYzWk0xOC43NSAxNi41SDIuMjVWNC41SDE4Ljc1VjE2LjVaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gICAgPHBhdGggZD1cIk0yMS43NSA2Ljc1VjE5LjVINC41VjIxSDIzLjI1VjYuNzVIMjEuNzVaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTAuNSAxNC4xNzhDMTIuMzYxIDE0LjE3OCAxMy44NzUgMTIuNTMxIDEzLjg3NSAxMC41MDZDMTMuODc1IDguNDgxIDEyLjM2MSA2LjgzNCAxMC41IDYuODM0QzguNjM5IDYuODM0IDcuMTI1IDguNDgxIDcuMTI1IDEwLjUwNkM3LjEyNSAxMi41MzEgOC42MzkgMTQuMTc4IDEwLjUgMTQuMTc4Wk0xMC41IDguMzM1QzExLjUzNCA4LjMzNSAxMi4zNzUgOS4zMDkgMTIuMzc1IDEwLjUwN0MxMi4zNzUgMTEuNzA1IDExLjUzNCAxMi42NzkgMTAuNSAxMi42NzlDOS40NjYgMTIuNjc5IDguNjI1IDExLjcwNSA4LjYyNSAxMC41MDdDOC42MjUgOS4zMDkgOS40NjYgOC4zMzUgMTAuNSA4LjMzNVpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgICA8cGF0aCBkPVwiTTMuNzUgNi4zNzVINS4yNVYxNC42MjVIMy43NVY2LjM3NVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE1Ljc1IDYuMzc1SDE3LjI1VjE0LjYyNUgxNS43NVY2LjM3NVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUGF5b3V0UmVxdWVzdEljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjAuNjI1IDIuNjI1SDMuMzc1QzIuOTYwMTYgMi42MjUgMi42MjUgMi45NjAxNiAyLjYyNSAzLjM3NVYyMC42MjVDMi42MjUgMjEuMDM5OCAyLjk2MDE2IDIxLjM3NSAzLjM3NSAyMS4zNzVIMjAuNjI1QzIxLjAzOTggMjEuMzc1IDIxLjM3NSAyMS4wMzk4IDIxLjM3NSAyMC42MjVWMy4zNzVDMjEuMzc1IDIuOTYwMTYgMjEuMDM5OCAyLjYyNSAyMC42MjUgMi42MjVaTTE5LjY4NzUgMTMuNUgxMi4zNzVWMTAuNUgxOS42ODc1VjEzLjVaTTE5LjY4NzUgMTkuNjg3NUg0LjMxMjVWNC4zMTI1SDE5LjY4NzVWOUgxMS42MjVDMTEuMjEwMiA5IDEwLjg3NSA5LjMzNTE2IDEwLjg3NSA5Ljc1VjE0LjI1QzEwLjg3NSAxNC42NjQ4IDExLjIxMDIgMTUgMTEuNjI1IDE1SDE5LjY4NzVWMTkuNjg3NVpNMTMuNTkzOCAxMkMxMy41OTM4IDEyLjI0ODYgMTMuNjkyNSAxMi40ODcxIDEzLjg2ODMgMTIuNjYyOUMxNC4wNDQyIDEyLjgzODcgMTQuMjgyNiAxMi45Mzc1IDE0LjUzMTIgMTIuOTM3NUMxNC43Nzk5IDEyLjkzNzUgMTUuMDE4MyAxMi44Mzg3IDE1LjE5NDIgMTIuNjYyOUMxNS4zNyAxMi40ODcxIDE1LjQ2ODggMTIuMjQ4NiAxNS40Njg4IDEyQzE1LjQ2ODggMTEuNzUxNCAxNS4zNyAxMS41MTI5IDE1LjE5NDIgMTEuMzM3MUMxNS4wMTgzIDExLjE2MTMgMTQuNzc5OSAxMS4wNjI1IDE0LjUzMTIgMTEuMDYyNUMxNC4yODI2IDExLjA2MjUgMTQuMDQ0MiAxMS4xNjEzIDEzLjg2ODMgMTEuMzM3MUMxMy42OTI1IDExLjUxMjkgMTMuNTkzOCAxMS43NTE0IDEzLjU5MzggMTJaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTE3LjQ1NDIgMTEuMDQ4QzE4LjA2MzIgMTAuMDEwMSAxOC4zMjYyIDguODA1MjggMTguMjA1MiA3LjYwNzk3QzE4LjAyNjIgNS44MjM5NyAxNy4wMzAyIDQuMjQ2OTcgMTUuNDAyMiAzLjE2Nzk3TDE0LjI5NzIgNC44MzM5N0MxNS40MTYyIDUuNTc1OTcgMTYuMDk3MiA2LjYzMjk3IDE2LjIxNTIgNy44MDc5N0MxNi4yNjk2IDguMzU0MDcgMTYuMjAxNiA4LjkwNTQzIDE2LjAxNjIgOS40MjE5NUMxNS44MzA3IDkuOTM4NDcgMTUuNTMyNSAxMC40MDcyIDE1LjE0MzIgMTAuNzk0TDEzLjk1MTIgMTEuOTg2TDE1LjU2OTIgMTIuNDYxQzE5LjgwMTIgMTMuNzAxIDE5Ljg1MDIgMTcuOTU3IDE5Ljg1MDIgMThIMjEuODUwMkMyMS44NTAyIDE2LjIxMSAyMC44OTQyIDEyLjcxNSAxNy40NTQyIDExLjA0OFpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMC4zNTAxIDEyQzEyLjU1NjEgMTIgMTQuMzUwMSAxMC4yMDYgMTQuMzUwMSA4QzE0LjM1MDEgNS43OTQgMTIuNTU2MSA0IDEwLjM1MDEgNEM4LjE0NDEgNCA2LjM1MDEgNS43OTQgNi4zNTAxIDhDNi4zNTAxIDEwLjIwNiA4LjE0NDEgMTIgMTAuMzUwMSAxMlpNMTAuMzUwMSA2QzExLjQ1MzEgNiAxMi4zNTAxIDYuODk3IDEyLjM1MDEgOEMxMi4zNTAxIDkuMTAzIDExLjQ1MzEgMTAgMTAuMzUwMSAxMEM5LjI0NzEgMTAgOC4zNTAxIDkuMTAzIDguMzUwMSA4QzguMzUwMSA2Ljg5NyA5LjI0NzEgNiAxMC4zNTAxIDZaTTExLjg1MDEgMTNIOC44NTAxQzUuNTQxMSAxMyAyLjg1MDEgMTUuNjkxIDIuODUwMSAxOVYyMEg0Ljg1MDFWMTlDNC44NTAxIDE2Ljc5NCA2LjY0NDEgMTUgOC44NTAxIDE1SDExLjg1MDFDMTQuMDU2MSAxNSAxNS44NTAxIDE2Ljc5NCAxNS44NTAxIDE5VjIwSDE3Ljg1MDFWMTlDMTcuODUwMSAxNS42OTEgMTUuMTU5MSAxMyAxMS44NTAxIDEzWlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vbG9hZGVyLmxlc3MnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBzcGlubmluZyA9IGZhbHNlLCBmdWxsU2NyZWVuID0gZmFsc2UgfTogYW55KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xvYWRlcicsIHtcbiAgICAgIGhpZGRlbjogIXNwaW5uaW5nLFxuICAgICAgZnVsbFNjcmVlblxuICAgIH0pfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YXJwcGVyXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiIC8+ICovfVxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjxpbWcgc3JjPVwiL2xvYWRpbmctaWNvLmdpZlwiIHdpZHRoPVwiNjVweFwiIGFsdD1cIlwiIC8+PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0ICcuL2Jhbm5lci5sZXNzJztcbmltcG9ydCB7IElCYW5uZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBiYW5uZXJzOiBJQmFubmVyW107XG4gIHN0eWxlSW1hZ2U6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIGNsYXNzbmFtZXM/OiBzdHJpbmc7XG59XG5jb25zdCByZW5kZXJCYW5uZXIgPSAoYmFubmVyOiBJQmFubmVyLCBzdHlsZUltYWdlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLCBocmVmLCBfaWQsIHBob3RvLCBjb250ZW50SFRNTFxuICB9ID0gYmFubmVyO1xuICBpZiAodHlwZSA9PT0gJ2h0bWwnICYmIGNvbnRlbnRIVE1MKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudEhUTUwgfX0gc3R5bGU9e3N0eWxlSW1hZ2UgfHwge319IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmIHx8ICcjJ30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGtleT17X2lkfT5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwaG90byAmJiBwaG90by51cmx9XG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIHN0eWxlPXtzdHlsZUltYWdlIHx8IHt9fVxuICAgICAgLz5cbiAgICA8L2E+XG4gICk7XG59O1xuY29uc3QgQmFubmVyID0gKHsgYmFubmVycywgc3R5bGVJbWFnZSwgY2xhc3NuYW1lcyB9OiBJUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7YmFubmVycyAmJiBiYW5uZXJzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgPENhcm91c2VsIGF1dG9wbGF5IGFycm93cyBkb3RzPXtmYWxzZX0gZWZmZWN0PVwiZmFkZVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lc30+XG4gICAgICAgIHtiYW5uZXJzLm1hcCgoaXRlbSkgPT4gKHJlbmRlckJhbm5lcihpdGVtLCBzdHlsZUltYWdlKVxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5CYW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc25hbWVzOiAnJ1xufTtcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJUGVyZm9ybWVyLCBHRU5ERVIsIElCYW5uZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgQ2FyZCwgU3BhY2UsIFJvdywgQ29sLCBQYWdpbmF0aW9uXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgTWFsZVNpZ25JY29uLFxuICBGZW1hbGVTaWduSWNvbixcbiAgVHJhbnNnZW5kZXJJY29uXG59IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL2ljb25zJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBnZW5lcmF0ZVV1aWQgfSBmcm9tICdzcmMvbGliJztcbmltcG9ydCB7XG4gIEhlYXJ0RmlsbGVkLFxuICBIZWFydE91dGxpbmVkLFxuICBFeWVPdXRsaW5lZCxcbiAgTG9ja091dGxpbmVkXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcbmltcG9ydCB7IGNodW5rIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2xheW91dC9iYW5uZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICdAY29tcG9uZW50cy9jb21tb24vYmFzZS9sb2FkZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGxvZ2dlZEluPzogYm9vbGVhbjtcbiAgc2V0RmlsdGVyPzogRnVuY3Rpb247XG4gIGxpbWl0PzogbnVtYmVyO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGRhdGE6IElQZXJmb3JtZXJbXTtcbiAgdG90YWw/OiBudW1iZXI7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBiYW5uZXJzPzogUmVjb3JkPHN0cmluZywgSUJhbm5lcltdPjtcbiAgc2VhcmNoaW5nPzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgb25MaWtlPzogRnVuY3Rpb247XG4gIGlzUGFnZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsPzogc3RyaW5nO1xuICByZW5kZXI/OiAocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IHJlbmRlclRpdGxlID0gKGdlbmRlcjogR0VOREVSLCBuYW1lOiBzdHJpbmcpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwLXRpdGxlXCI+XG4gICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+e25hbWV9PC9zcGFuPlxuICAgIHtnZW5kZXIgPT09ICdtYWxlJyA/IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPE1hbGVTaWduSWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICkgOiBnZW5kZXIgPT09ICdmZW1hbGUnID8gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW50aWNvblwiPlxuICAgICAgICA8RmVtYWxlU2lnbkljb24gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApIDogKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW50aWNvblwiPlxuICAgICAgICA8VHJhbnNnZW5kZXJJY29uIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCByZW5kZXJUYWdzID0gKHRhZ3M6IHN0cmluZ1tdKSA9PiAoXG4gIDxTcGFjZSBjbGFzc05hbWU9XCJ0YWdzXCIgd3JhcCBzaXplPXtbNSwgMl19PlxuICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnL3RhZycsIHF1ZXJ5OiB7IHRhZ3M6IHRhZyB9IH19XG4gICAgICAgIGtleT17dGFnfVxuICAgICAgICBhcz17YC90YWcvJHt0YWd9YH1cbiAgICAgID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgI1xuICAgICAgICAgIHt0YWd9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApKX1cbiAgPC9TcGFjZT5cbik7XG5cbmludGVyZmFjZSBJR3JpZENhcmQge1xuICBwZXJmb3JtZXI6IElQZXJmb3JtZXI7XG4gIGxvZ2dlZEluOiBib29sZWFuO1xuICBvbkxpa2U6IGFueTtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsOiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgR3JpZENhcmQgPSAoe1xuICBwZXJmb3JtZXIsXG4gIGxvZ2dlZEluLFxuICBvbkxpa2UsXG4gIGNsYXNzTmFtZSxcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmxcbn06IElHcmlkQ2FyZCkgPT4ge1xuICBjb25zdCB7IGlzT25saW5lLCBzdHJlYW1pbmdTdGF0dXMgfSA9IHBlcmZvcm1lcjtcbiAgY29uc3Qgc3RhdHVzQ2xhc3NOYW1lcyA9IFsncC1zdGF0dXMnXTtcbiAgbGV0IHN0YXR1cyA9ICdvZmZsaW5lJztcbiAgaWYgKGlzT25saW5lKSB7XG4gICAgc3dpdGNoIChzdHJlYW1pbmdTdGF0dXMpIHtcbiAgICAgIGNhc2UgJ3ByaXZhdGUnOlxuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ3ByaXZhdGUnKTtcbiAgICAgICAgc3RhdHVzID0gJ3ByaXZhdGUgY2hhdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ2dyb3VwJyk7XG4gICAgICAgIHN0YXR1cyA9ICdncm91cCBjaGF0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwdWJsaWMnOlxuICAgICAgICBzdGF0dXMgPSAnbGl2ZSc7XG4gICAgICAgIHN0YXR1c0NsYXNzTmFtZXMucHVzaCgnb25saW5lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdHVzID0gJ29ubGluZSc7XG4gICAgICAgIHN0YXR1c0NsYXNzTmFtZXMucHVzaCgnb25saW5lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29mZmxpbmUnKTtcbiAgfVxuICBjb25zdCBkZWZhdWx0UGxhY2Vob2xkZXJBdmF0YXJVcmwgPSBwbGFjZWhvbGRlckF2YXRhclVybCB8fCAnL2RlZmF1bHQtdXNlci1pY29uLnBuZyc7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5HcmlkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3BlcmZvcm1lci5faWR9IGhvdmVyYWJsZT17ZmFsc2V9PlxuICAgICAge3BlcmZvcm1lci5pc0Jsb2NrZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrZWQtdGh1bWJcIj5cbiAgICAgICAgICA8TG9ja091dGxpbmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e3tcbiAgICAgICAgICBwYXRobmFtZTogJy9zdHJlYW0nLFxuICAgICAgICAgIHF1ZXJ5OiB7IHBlcmZvcm1lcjogSlNPTi5zdHJpbmdpZnkocGVyZm9ybWVyKSB9XG4gICAgICAgIH19XG4gICAgICAgIGFzPXtgL3Byb2ZpbGUvJHtwZXJmb3JtZXIudXNlcm5hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJmb3JtZXItYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLXBlcmZvcm1lclwiXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBlcmZvcm1lci5hdmF0YXIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgJiYgcGVyZm9ybWVyLmF2YXRhci5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IHBlcmZvcm1lci5hdmF0YXJcbiAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFBsYWNlaG9sZGVyQXZhdGFyVXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzTmFtZXMuam9pbignICcpfT57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgIHtyZW5kZXJUaXRsZShwZXJmb3JtZXIuZ2VuZGVyLCBwZXJmb3JtZXIudXNlcm5hbWUpfVxuICAgICAgICAgICAge3BlcmZvcm1lcj8uc3RhdHM/LnZpZXdzID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC12aWV3ZXJcIj5cbiAgICAgICAgICAgICAgICA8RXllT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cGVyZm9ybWVyLnN0YXRzLnZpZXdzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3R0b21cIj5cbiAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2PntwZXJmb3JtZXIudGFncyAmJiByZW5kZXJUYWdzKHBlcmZvcm1lci50YWdzKX08L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlblxuICAgICAgICAgICAgICBoaWRkZW49eyFsb2dnZWRJbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1mYXZvcml0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGVyZm9ybWVyLmlzRmF2b3JpdGUgPyAoXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LW1lXCI+e3BlcmZvcm1lcj8uYWJvdXRNZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZC5HcmlkPlxuICApO1xufTtcblxuY29uc3QgUGVyZm9ybWVyR3JpZCA9ICh7XG4gIGRhdGEsXG4gIHNlYXJjaGluZyxcbiAgc3VjY2VzcyxcbiAgdGl0bGUsXG4gIG9uTGlrZSxcbiAgbG9nZ2VkSW4sXG4gIGlzUGFnZSxcbiAgb2Zmc2V0LFxuICBsaW1pdCxcbiAgdG90YWwsXG4gIHNldEZpbHRlcixcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmwsXG4gIGJhbm5lcnMsXG4gIHJlbmRlclxufTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdG9wQmFubmVycywgcmlnaHRCYW5uZXJzLCBib3R0b21CYW5uZXJzIH0gPSBiYW5uZXJzO1xuICBjb25zdCBSb3dHcmlkID0gKHsgZGF0YVNvdXJjZSB9OiB7IGRhdGFTb3VyY2U6IElQZXJmb3JtZXJbXSB9KSA9PiAoXG4gICAgPFJvdyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAge2RhdGFTb3VyY2VcbiAgICAgICAgJiYgZGF0YVNvdXJjZS5sZW5ndGggPiAwXG4gICAgICAgICYmIGRhdGFTb3VyY2UubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3hcIlxuICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICBvbkxpa2U9e29uTGlrZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICA8L1Jvdz5cbiAgKTtcblxuICBjb25zdCByZW5kZXJHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgIGlmIChsZW5ndGggPD0gMTIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPENvbCBsZz17MTZ9IG1kPXsxNn0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFcbiAgICAgICAgICAgICAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGEubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezh9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgYmFubmVycz17cmlnaHRCYW5uZXJzfVxuICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAmJiBkYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICYmIGRhdGEubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3hcIlxuICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoID4gMTIgJiYgbGVuZ3RoIDw9IDI0KSB7XG4gICAgICBjb25zdCBkYXRhQ2h1bmsgPSBjaHVuayhkYXRhLCAxMik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPENvbCBsZz17MTZ9IG1kPXsxNn0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhQ2h1bmtbMF1cbiAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMF0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1swXS5tYXAoKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveCBwZXJmb3JtZXItYm94LTQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17OH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZUltYWdlPXt7IHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDxSb3dHcmlkIGRhdGFTb3VyY2U9e2RhdGFDaHVua1sxXX0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDI0ICYmIGxlbmd0aCA8PSAzNikge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMF19IC8+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPENvbCB4bD17MTZ9IGxnPXsxOH0gbWQ9ezE4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzFdXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5tYXAoKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveCBwZXJmb3JtZXItYm94LTQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhsPXs4fSBsZz17Nn0gbWQ9ezZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgYmFubmVycz17cmlnaHRCYW5uZXJzfVxuICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMl19IC8+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDM2KSB7XG4gICAgICBjb25zdCBkYXRhQ2h1bmsgPSBjaHVuayhkYXRhLCAxMik7XG4gICAgICBjb25zdCBsYXN0RGF0YUNodW5rID0gZGF0YUNodW5rLnNsaWNlKDMpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMF19IC8+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPENvbCB4bD17MTZ9IGxnPXsxOH0gbWQ9ezE4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzFdXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5tYXAoKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveCBwZXJmb3JtZXItYm94LTQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhsPXs4fSBsZz17Nn0gbWQ9ezZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgYmFubmVycz17cmlnaHRCYW5uZXJzfVxuICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMl19IC8+XG4gICAgICAgICAge2xhc3REYXRhQ2h1bmsubGVuZ3RoID4gMFxuICAgICAgICAgICAgJiYgbGFzdERhdGFDaHVuay5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPFJvd0dyaWQga2V5PXtnZW5lcmF0ZVV1aWQoKX0gZGF0YVNvdXJjZT17dn0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8PjwvPjtcbiAgfTtcblxuICBjb25zdCBhY3Rpb25zID0gc2V0RmlsdGVyICYmIHRvdGFsID4gMFxuICAgID8gW1xuICAgICAgdG90YWwgPiBsaW1pdCAmJiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgZGlzYWJsZWQ9e3NlYXJjaGluZ31cbiAgICAgICAgICBjdXJyZW50PXtNYXRoLnJvdW5kKG9mZnNldCAvIGxpbWl0KSArIDF9XG4gICAgICAgICAgcGFnZVNpemU9e2xpbWl0fVxuICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsocGFnZSkgPT4gc2V0RmlsdGVyKCdvZmZzZXQnLCAocGFnZSAtIDEpICogbGltaXQpfVxuICAgICAgICAgIHNob3dTaXplQ2hhbmdlcj17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgXVxuICAgIDogW107XG5cbiAgaWYgKHJlbmRlcikge1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyQXZhdGFyVXJsIHByb3BzXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ncmlkXCJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgIGhvdmVyYWJsZT17ZmFsc2V9XG4gICAgICAgIGJvZHlTdHlsZT17eyBwYWRkaW5nOiAnMCcgfX1cbiAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgID5cbiAgICAgICAgPExvYWRlciBzcGlubmluZz17c2VhcmNoaW5nfSAvPlxuICAgICAgICB7ZGF0YS5sZW5ndGggPiAwICYmIGRhdGEubWFwKChwZXJmb3JtZXIpID0+IHJlbmRlcihwZXJmb3JtZXIpKX1cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzUGFnZSAmJiB0b3BCYW5uZXJzPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIGJhbm5lcnM9e3RvcEJhbm5lcnN9XG4gICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Q2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItZ3JpZFwiXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBob3ZlcmFibGU9e2ZhbHNlfVxuICAgICAgICBib2R5U3R5bGU9e3sgcGFkZGluZzogJzAnIH19XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICA+XG4gICAgICAgIDxMb2FkZXIgc3Bpbm5pbmc9e3NlYXJjaGluZ30gLz5cbiAgICAgICAge3N1Y2Nlc3NcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAmJiAodG90YWwgPiAwID8gKFxuICAgICAgICAgICAgaXNQYWdlID8gKFxuICAgICAgICAgICAgICByZW5kZXJHcmlkKClcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGRhdGEubWFwKChwZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyPy5faWR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgICAgb25MaWtlPXsocDogSVBlcmZvcm1lcikgPT4gb25MaWtlKHApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNhcmQtaGVhZFwiPk5vIG1vZGVsIGZvdW5kLjwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkPlxuICAgICAge2lzUGFnZSAmJiBib3R0b21CYW5uZXJzPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIGJhbm5lcnM9e2JvdHRvbUJhbm5lcnN9XG4gICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuUGVyZm9ybWVyR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ2dlZEluOiBmYWxzZSxcbiAgc2V0RmlsdGVyOiBudWxsLFxuICBsaW1pdDogMCxcbiAgb2Zmc2V0OiAwLFxuICB0b3RhbDogMCxcbiAgc3VjY2VzczogZmFsc2UsXG4gIHNlYXJjaGluZzogZmFsc2UsXG4gIHRpdGxlOiAnJyxcbiAgb25MaWtlOiBudWxsLFxuICByZW5kZXI6IG51bGwsXG4gIGlzUGFnZTogZmFsc2UsXG4gIGJhbm5lcnM6IHt9LFxuICBwbGFjZWhvbGRlckF2YXRhclVybDogJy9uby1hdmF0YXIucG5nJ1xufTtcblxuY29uc3QgYmFubmVyU2VsZWN0ZXIgPSAoc3RhdGUpID0+IHN0YXRlLmJhbm5lci5saXN0QmFubmVycy5kYXRhO1xuY29uc3QgZmlsdGVyQmFubmVyID0gY3JlYXRlU2VsZWN0b3IoYmFubmVyU2VsZWN0ZXIsIChiYW5uZXJzKSA9PiB7XG4gIGlmICghYmFubmVycy5sZW5ndGgpIHJldHVybiB7fTtcblxuICByZXR1cm4ge1xuICAgIHRvcEJhbm5lcnM6IGJhbm5lcnMuZmlsdGVyKChiKSA9PiBiLnBvc2l0aW9uID09PSAndG9wJyksXG4gICAgcmlnaHRCYW5uZXJzOiBiYW5uZXJzLmZpbHRlcigoYikgPT4gYi5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyksXG4gICAgYm90dG9tQmFubmVyczogYmFubmVycy5maWx0ZXIoKGIpID0+IGIucG9zaXRpb24gPT09ICdib3R0b20nKVxuICB9O1xufSk7XG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmw6IHN0YXRlLnVpLnBsYWNlaG9sZGVyQXZhdGFyVXJsLFxuICBiYW5uZXJzOiBmaWx0ZXJCYW5uZXIoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMpKFBlcmZvcm1lckdyaWQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFJvdywgQ29sLCBEcmF3ZXIsIEJ1dHRvbiwgTWVudSwgU3BhY2Vcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGaWx0ZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IElDb3VudHJpZXMsIElQZXJmb3JtZXJDYXRlZ29naWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vcGVyZm9ybWVyLWZpbHRlci5sZXNzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvdW50cmllcz86IElDb3VudHJpZXNbXTtcbiAgY2F0ZWdvcmllcz86IElQZXJmb3JtZXJDYXRlZ29naWVzW107XG4gIC8vIG9mZnNldD86IG51bWJlcjtcbiAgLy8gbGltaXQ/OiBudW1iZXI7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIHNldEZpbHRlcjogRnVuY3Rpb247XG4gIGNsZWFyRmlsdGVyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBQZXJmb3JtZXJGaWx0ZXIgPSAoe1xuICBjb3VudHJpZXMsXG4gIGNhdGVnb3JpZXMsXG4gIHNldEZpbHRlcixcbiAgY2F0ZWdvcnksXG4gIGNvdW50cnksXG4gIGdlbmRlcixcbiAgY2xlYXJGaWx0ZXJcbn06IElQcm9wcykgPT4ge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZE1lbnVLZXlzLCBzZXRTZWxlY3RlZE1lbnVLZXlzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtsYXN0U2VsZWN0ZWRNZW51S2V5LCBzZXRMYXN0U2VsZWN0ZWRNZW51S2V5XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3Qgb25PcGVuQ2hhbmdlID0gKGtleXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgbWVudUtleXMgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IGxhc3RTZWxlY3RlZE1lbnVLZXkpO1xuICAgIHNldFNlbGVjdGVkTWVudUtleXMobWVudUtleXMpO1xuICAgIHNldExhc3RTZWxlY3RlZE1lbnVLZXkobWVudUtleXNbMF0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWZpbHRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj17PEZpbHRlck91dGxpbmVkIC8+fVxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLThcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZpbHRlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJhbnQtc3BhY2Utd3JhcFwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlBvcHVsYXIgRmlsdGVyOjwvc3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhnZW5kZXIgPT09ICcnID8gJ2FjdGl2ZScgOiAnJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXNoZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsIGdlbmRlciA9PT0gJ2ZlbWFsZScgPyAnJyA6ICdmZW1hbGUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGdlbmRlciA9PT0gJ2ZlbWFsZScgPyAnYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhc2hlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcignZ2VuZGVyJywgZ2VuZGVyID09PSAndHJhbnNnZW5kZXInID8gJycgOiAndHJhbnNnZW5kZXInKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGdlbmRlciA9PT0gJ3RyYW5zZ2VuZGVyJyA/ICdhY3RpdmUnIDogJycpfVxuICAgICAgICAgICAgICB0eXBlPVwiZGFzaGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVHJhbnNnZW5kZXJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsIGdlbmRlciA9PT0gJ21hbGUnID8gJycgOiAnbWFsZScpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZ2VuZGVyID09PSAnbWFsZScgPyAnYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhc2hlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1hbGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cbiAgICAgICAgdGl0bGU9eyhcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgIDxDb2w+RmlsdGVyIGJ5OjwvQ29sPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGVhckZpbHRlcigpfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbGVhciBGaWx0ZXJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgey8qIFNlbGVjdCBtdWx0aXBsZSBjYXRlZ29yeSAqL31cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxuICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICBvblNlbGVjdD17KHsga2V5IH0pID0+IHNldEZpbHRlcignY2F0ZWdvcnknLCBrZXkpfVxuICAgICAgICAgIG9uRGVzZWxlY3Q9eygpID0+IHNldEZpbHRlcignY2F0ZWdvcnknLCAnJyl9XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY2F0ZWdvcnldfVxuICAgICAgICAgIG9wZW5LZXlzPXtzZWxlY3RlZE1lbnVLZXlzfVxuICAgICAgICAgIG9uT3BlbkNoYW5nZT17b25PcGVuQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIkNhdGVnb3J5XCIga2V5PVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgJiYgY2F0ZWdvcmllcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17Yy5faWR9PntjLm5hbWV9PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICBvblNlbGVjdD17KHsga2V5IH0pID0+IHNldEZpbHRlcignZ2VuZGVyJywga2V5KX1cbiAgICAgICAgICBvbkRlc2VsZWN0PXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsICcnKX1cbiAgICAgICAgICBzZWxlY3RlZEtleXM9e1tnZW5kZXJdfVxuICAgICAgICAgIG9wZW5LZXlzPXtzZWxlY3RlZE1lbnVLZXlzfVxuICAgICAgICAgIG9uT3BlbkNoYW5nZT17b25PcGVuQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIkdlbmRlclwiIGtleT1cImdlbmRlclwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJmZW1hbGVcIj5GZW1hbGU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidHJhbnNnZW5kZXJcIj5UcmFuc2dlbmRlcjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWxlXCI+TWFsZTwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIHsvKiBTZWxlY3QgbXVsdGlwbGUgY291bnRyeSAqL31cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxuICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICBvblNlbGVjdD17KHsga2V5IH0pID0+IHNldEZpbHRlcignY291bnRyeScsIGtleSl9XG4gICAgICAgICAgb25EZXNlbGVjdD17KCkgPT4gc2V0RmlsdGVyKCdjb3VudHJ5JywgJycpfVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2NvdW50cnldfVxuICAgICAgICAgIG9wZW5LZXlzPXtzZWxlY3RlZE1lbnVLZXlzfVxuICAgICAgICAgIG9uT3BlbkNoYW5nZT17b25PcGVuQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIkNvdW50cnlcIiBrZXk9XCJjb3VudHJ5XCI+XG4gICAgICAgICAgICB7Y291bnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgJiYgY291bnRyaWVzLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtjLm5hbWV9PntjLm5hbWV9PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5QZXJmb3JtZXJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb3VudHJpZXM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgLy8gb2Zmc2V0OiAwLFxuICAvLyBsaW1pdDogMCxcbiAgZ2VuZGVyOiAnJyxcbiAgY2F0ZWdvcnk6ICcnLFxuICBjb3VudHJ5OiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyZm9ybWVyRmlsdGVyO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQgPSAnREQvTU0vWVlZWSBISDptbTpzcycpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlckR1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIsIGZvcm1hdCA9ICdISDptbScpIHtcbiAgcmV0dXJuIG1vbWVudFxuICAgIC51dGMobW9tZW50LmR1cmF0aW9uKGR1cmF0aW9uLCAnbWlsbGlzZWNvbmRzJykuYXNNaWxsaXNlY29uZHMoKSlcbiAgICAuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFnZShkYXRlOiBzdHJpbmcsIGZvcm1hdCA9ICdNTU1NIERELCBZWVlZJykge1xuICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gbW9tZW50KCkuZGlmZihtb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyksICd5ZWFycycpLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREdXJhdGlvbihzOiBudW1iZXIpIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHMgLyAzNjAwKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHMgLSBob3VycyAqIDM2MDApIC8gNjApO1xuICBjb25zdCBzZWNvbmRzID0gcyAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MDtcbiAgcmV0dXJuIGAke2hvdXJzIDwgMTAgPyAnMCcgOiAnJ30ke2hvdXJzfToke1xuICAgIG1pbnV0ZXMgPCAxMCA/ICcwJyA6ICcnXG4gIH0ke21pbnV0ZXN9OiR7c2Vjb25kcyA8IDEwID8gJzAnIDogJyd9JHtzZWNvbmRzfWA7XG59XG4iLCJpbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFJjRmlsZSB9IGZyb20gJ2FudGQvbGliL3VwbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVBdmF0YXJVcGxvYWQoZmlsZTogUmNGaWxlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICBjb25zdCBpc0ltYWdlQWNjZXB0ID0gY29uZmlnLk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVFxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtLnRyaW0oKSlcbiAgICAuaW5kZXhPZihgLiR7ZXh0fWApO1xuICBpZiAoaXNJbWFnZUFjY2VwdCA9PT0gLTEpIHtcbiAgICBtZXNzYWdlLmVycm9yKGBZb3UgY2FuIG9ubHkgdXBsb2FkICR7Y29uZmlnLk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVH0gZmlsZSFgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IChjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMik7XG4gIGlmICghaXNMdDJNKSB7XG4gICAgbWVzc2FnZS5lcnJvcihcbiAgICAgIGBJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAke2NvbmZpZy5ORVhUX1BVQkxJQ19NQVhJTVVNX1NJWkVfVVBMT0FEX0FWQVRBUiB8fCAyfU1CIWBcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbnRlcm5ldCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZHV4JztcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbSc7XG4iLCJjb25zdCBJTlRFUk5FVF9DSEVDS19VUkwgPSAnaHR0cHM6Ly9nb29nbGUuY29tJztcblxuZXhwb3J0IGNvbnN0IGlzSGFzSW50ZXJuZXRDb25uZWN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKElOVEVSTkVUX0NIRUNLX1VSTCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZScsXG4gICAgICAgIFByYWdtYTogJ25vLWNhY2hlJyxcbiAgICAgICAgRXhwaXJlczogMFxuICAgICAgfSBhcyBhbnlcbiAgICB9KTtcbiAgICBpZiAoXG4gICAgICByZXMuc3RhdHVzID09PSA0MDRcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwMVxuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNDAzXG4gICAgICB8fCByZXMuc3RhdHVzID09PSA1MDBcbiAgICAgIHx8IChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDw9IDMwMClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhleGNlcHRpb24pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPSB7XG4gIGxhYmVsQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH0sXG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjRcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxMlxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhaWxGb3JtSXRlbUxheW91dCA9IHtcbiAgd3JhcHBlckNvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDE2LFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbG9yID0ge1xuICBwcmltYXJ5Q29sb3I6ICcjMGNiOGI2JyxcbiAgc3VjY2Vzc0NvbG9yOiAnIzJmYjUyZCcsXG4gIHdoaXRlQ29sb3I6ICcjZmZmZmZmJ1xufTtcblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludCA9ICd4eGwnIHwgJ3hsJyB8ICdsZycgfCAnbWQnIHwgJ3NtJyB8ICd4cyc7XG5leHBvcnQgdHlwZSBCcmVha3BvaW50TWFwID0gUGFydGlhbDxSZWNvcmQ8QnJlYWtwb2ludCwgc3RyaW5nPj47XG4iLCJleHBvcnQgY29uc3QgdmFsaWRhdGVNZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIScsXG4gIHR5cGVzOiB7XG4gICAgZW1haWw6ICdOb3QgYSB2YWxpZGF0ZSBlbWFpbCEnLFxuICAgIG51bWJlcjogJ05vdCBhIHZhbGlkYXRlIG51bWJlciEnXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIHJhbmdlOiAnTXVzdCBiZSBiZXR3ZWVuIG1pbiBhbmQgbWF4J1xuICB9XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7XG4gIHJlZHVjZSwgaXNBcnJheSwgaXNFbXB0eSwgZmxhdHRlblxufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBjcmVhdGVBY3Rpb24gYXMgUmVkdXhDcmVhdGVBY3Rpb24sXG4gIGhhbmRsZUFjdGlvbnMgYXMgaGFuZGxlUmVkdXhBY3Rpb25zLFxuICBBY3Rpb25cbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkZ1bmN0aW9uMTxUMSwgUj4gPSAodDE/OiBUMSkgPT4gUjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPlxuICBleHRlbmRzIEFjdGlvbkZ1bmN0aW9uMTxQYXlsb2FkLCBBY3Rpb248UGF5bG9hZD4+IHtcbiAgaXM6ICh0eXBlOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxQYXlsb2FkID0gYW55Pih0eXBlOiBzdHJpbmcpOiBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPiB7XG4gIGNvbnN0IGFjdGlvbiA9IFJlZHV4Q3JlYXRlQWN0aW9uPFBheWxvYWQ+KHR5cGUpIGFzIEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+O1xuICBhY3Rpb24uaXMgPSAoYVR5cGU6IHN0cmluZykgPT4gYWN0aW9uLnRvU3RyaW5nKCkgPT09IGFUeXBlO1xuICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uKGFjdGlvbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFthY3Rpb25dOiBjcmVhdGVBY3Rpb24odHlwZSksXG4gICAgW2Ake2FjdGlvbn1TdWNjZXNzYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgW2Ake2FjdGlvbn1GYWlsYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9GQUlMYClcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNBY3Rpb25zPFxuICBBY3Rpb25EYXRhID0gYW55LFxuICBTdWNjZXNzRGF0YSA9IGFueSxcbiAgRXJyb3JEYXRhID0gRXJyb3Jcbj4oXG4gIHR5cGU6IHN0cmluZ1xuKTogW1xuICBBY3Rpb25GdW5jdGlvbjxBY3Rpb25EYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248U3VjY2Vzc0RhdGE+LFxuICBBY3Rpb25GdW5jdGlvbjxFcnJvckRhdGE+XG5dIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVBY3Rpb248QWN0aW9uRGF0YT4odHlwZSksXG4gICAgY3JlYXRlQWN0aW9uPFN1Y2Nlc3NEYXRhPihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgY3JlYXRlQWN0aW9uPEVycm9yRGF0YT4oYCR7dHlwZX1fRkFJTGApXG4gIF07XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5mdW5jdGlvbiBoYW5kbGVBY3Rpb25zKGFjdGlvbnM6IGFueSwgaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICByZWR1Y2UoXG4gICAgICBhY3Rpb25zLFxuICAgICAgKHJlZHVjZXI6IGFueSwgaGFuZGxlciwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJlZHVjZXJbYWN0aW9uXSA9IChzdGF0ZTogYW55LCBhY3Q6IGFueSkgPT4gaGFuZGxlcihzdGF0ZS5zZXQoJ2FjdGlvbicsIGFjdGlvbiksIGFjdCk7XG4gICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgfSxcbiAgICAgIHt9XG4gICAgKSxcbiAgICBpbml0aWFsU3RhdGVcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcnMoXG4gIHN0YXRlQ29udGV4dDogc3RyaW5nLFxuICByZWR1Y2VyczogYW55W10sXG4gIGluaXRpYWxTdGF0ZTogYW55LFxuICBwcmV2ZW50UmVzZXR0aW5nOiBib29sZWFuID0gZmFsc2Vcbik6IGFueSB7XG4gIHJldHVybiB7XG4gICAgW3N0YXRlQ29udGV4dF06IGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICAgIHJlZHVjZShcbiAgICAgICAgZmxhdHRlbihyZWR1Y2VycyksXG4gICAgICAgIChyZWR1Y2VyOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoYWN0aW9uLm9uKSkge1xuICAgICAgICAgICAgYWN0aW9uLm9uLmZvckVhY2goKGFjdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlZHVjZXJbYWN0XSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlZHVjZXJbYWN0aW9uLm9uXSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50UmVzZXR0aW5nXG4gICAgICAgICAgPyB7fVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgQVBQX1NUQVRFX1JFU0VUOiAoKSA9PiBpbml0aWFsU3RhdGVcbiAgICAgICAgICB9XG4gICAgICApLFxuICAgICAgaW5pdGlhbFN0YXRlXG4gICAgKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2FnYXMoc2FnYXM6IGFueVtdKTogYW55W10ge1xuICByZXR1cm4gZmxhdHRlbihzYWdhcykubWFwKChzYWdhOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uLCBlZmZlY3QgPSB0YWtlTGF0ZXN0LCB3b3JrZXIgfSA9IHNhZ2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKiAoKSB7XG4gICAgICB5aWVsZCBlZmZlY3Qob24sIGZ1bmN0aW9uKiAoYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgeWllbGQgZGVsYXkoMCk7XG4gICAgICAgIHlpZWxkIHdvcmtlcihhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0EoY29udGV4dDogc3RyaW5nLCBrZXlzOiBhbnlbXSA9IFtdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICBpZiAoaXNFbXB0eShrZXlzKSkgcmV0dXJuIHN0YXRlU2VsZWN0b3I7XG5cbiAgcmV0dXJuIGtleXMubWFwKChrZXk6IGFueSkgPT4gKHN0YXRlOiBhbnkpID0+IChpc0FycmF5KGtleSlcbiAgICA/IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldEluKGtleSlcbiAgICA6IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldChrZXkpKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVKU1NlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKVtrZXldO1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9ucyxcbiAgY3JlYXRlU2VsZWN0b3JzQSxcbiAgaGFuZGxlQWN0aW9ucyxcbiAgY3JlYXRlUmVkdWNlcnMsXG4gIGNyZWF0ZVNlbGVjdG9ycyxcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZUpTU2VsZWN0b3JzXG59O1xuIiwiZXhwb3J0IGNvbnN0IHVzZXJuYW1lUGF0dGVyblJ1bGUgPSB7XG4gIHBhdHRlcm46IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05XSokJyksXG4gIG1lc3NhZ2U6ICdEb250IGFsbG93IHNwZWNpYWwgY2hhcnMgb3Igc3BhY2UnXG59O1xuIiwiaW1wb3J0IHsgU3RvcmUgYXMgUkRTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IHR5cGUgU3RvcmUgPSBSRFN0b3JlPHt9PjtcblxubGV0IHN0b3JlOiBTdG9yZSB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFN0b3JlOiAoKSA9PiBzdG9yZSxcbiAgc2V0U3RvcmU6IChzOiBTdG9yZSkgPT4ge1xuICAgIHN0b3JlID0gcztcbiAgfVxufTtcbiIsImltcG9ydCBzdG9yZUhvbGRlciBmcm9tICcuL3N0b3JlSG9sZGVyJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0ZGTElORV9JTUFHRV9VUkwgPSAnL29mZmxpbmUucG5nJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMID0gJy9wcml2YXRlLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkwgPSAnL2dyb3VwLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9PTkxJTkVfSU1BR0VfVVJMID0gJyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0ZXIoc3RhdHVzOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgcG9zdGVyID0gJyc7XG4gIGNvbnN0IHN0b3JlID0gc3RvcmVIb2xkZXIuZ2V0U3RvcmUoKTtcbiAgY29uc3QgeyBzZXR0aW5ncyA9IHt9IH0gPSBzdG9yZS5nZXRTdGF0ZSgpIGFzIGFueTtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlICdwcml2YXRlJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIHx8IERFRkFVTFRfUFJJVkFURV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvZmZsaW5lJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRPZmZsaW5lTW9kZWxJbWFnZSB8fCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHVibGljJzpcbiAgICAgIHBvc3RlciA9IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRHcm91cENoYXRJbWFnZSB8fCBERUZBVUxUX0dST1VQX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHBvc3Rlcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHVybC5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopL2dcbiAgICApICE9PSBudWxsXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVV1aWQgPSAoKSA9PiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY29uc3QgdW5pdFByaWNlczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBhbnkgfVtdID0gW1xuICB7XG4gICAgdmFsdWU6IDE1LFxuICAgIHRleHQ6ICcxNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJzIwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0ZXh0OiAnMjUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDMwLFxuICAgIHRleHQ6ICczMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMzUsXG4gICAgdGV4dDogJzM1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0MCxcbiAgICB0ZXh0OiAnNDAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDQ1LFxuICAgIHRleHQ6ICc0NSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNTAsXG4gICAgdGV4dDogJzUwIHRva2VucydcbiAgfVxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1LFxuICAvLyAgIHRleHQ6ICc1NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAsXG4gIC8vICAgdGV4dDogJzYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2NSxcbiAgLy8gICB0ZXh0OiAnNjUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwLFxuICAvLyAgIHRleHQ6ICc3MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUsXG4gIC8vICAgdGV4dDogJzc1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4MCxcbiAgLy8gICB0ZXh0OiAnODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1LFxuICAvLyAgIHRleHQ6ICc4NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAsXG4gIC8vICAgdGV4dDogJzkwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5NSxcbiAgLy8gICB0ZXh0OiAnOTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMCxcbiAgLy8gICB0ZXh0OiAnMTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMjAsXG4gIC8vICAgdGV4dDogJzEyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTQwLFxuICAvLyAgIHRleHQ6ICcxNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE2MCxcbiAgLy8gICB0ZXh0OiAnMTYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxODAsXG4gIC8vICAgdGV4dDogJzE4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjAwLFxuICAvLyAgIHRleHQ6ICcyMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIyMCxcbiAgLy8gICB0ZXh0OiAnMjIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyNDAsXG4gIC8vICAgdGV4dDogJzI0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjYwLFxuICAvLyAgIHRleHQ6ICcyNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI4MCxcbiAgLy8gICB0ZXh0OiAnMjgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzMDAsXG4gIC8vICAgdGV4dDogJzMwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzIwLFxuICAvLyAgIHRleHQ6ICczMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM0MCxcbiAgLy8gICB0ZXh0OiAnMzQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNjAsXG4gIC8vICAgdGV4dDogJzM2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzgwLFxuICAvLyAgIHRleHQ6ICczODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQwMCxcbiAgLy8gICB0ZXh0OiAnNDAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MjAsXG4gIC8vICAgdGV4dDogJzQyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDQwLFxuICAvLyAgIHRleHQ6ICc0NDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ2MCxcbiAgLy8gICB0ZXh0OiAnNDYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0ODAsXG4gIC8vICAgdGV4dDogJzQ4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNTAwLFxuICAvLyAgIHRleHQ6ICc1MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1MCxcbiAgLy8gICB0ZXh0OiAnNTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2MDAsXG4gIC8vICAgdGV4dDogJzYwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUwLFxuICAvLyAgIHRleHQ6ICc2NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwMCxcbiAgLy8gICB0ZXh0OiAnNzAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3NTAsXG4gIC8vICAgdGV4dDogJzc1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAwLFxuICAvLyAgIHRleHQ6ICc4MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1MCxcbiAgLy8gICB0ZXh0OiAnODUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5MDAsXG4gIC8vICAgdGV4dDogJzkwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUwLFxuICAvLyAgIHRleHQ6ICc5NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMDAsXG4gIC8vICAgdGV4dDogJzEwMDAgdG9rZW5zJ1xuICAvLyB9XG5dO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQge1xuICBJU2NoZWR1bGUsIElVc2VyLCBJUGVyZm9ybWVyLCBJU3R1ZGlvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNPUlQgfSBmcm9tICdAc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGNoaWxkcmVuICBUaGUgYWxpYXMgb2YgY2hpbGRyZW4gb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9UcmVlKFxuICBhcnJheSxcbiAgaWQgPSAnaWQnLFxuICBwYXJlbnRJZCA9ICdwaWQnLFxuICBjaGlsZHJlbiA9ICdjaGlsZHJlbidcbikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgaGFzaCA9IHt9O1xuICBjb25zdCBkYXRhID0gY2xvbmVEZWVwKGFycmF5KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGFzaFtkYXRhW2luZGV4XVtpZF1dID0gZGF0YVtpbmRleF07XG4gIH0pO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGhhc2hQYXJlbnQgPSBoYXNoW2l0ZW1bcGFyZW50SWRdXTtcbiAgICBpZiAoaGFzaFBhcmVudCkge1xuICAgICAgIWhhc2hQYXJlbnRbY2hpbGRyZW5dICYmIChoYXNoUGFyZW50W2NoaWxkcmVuXSA9IFtdKTtcbiAgICAgIGhhc2hQYXJlbnRbY2hpbGRyZW5dLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgcGF0aCBtYXRjaGVzIHRoZSByZWdleHAgaWYgdGhlIGxhbmd1YWdlIHByZWZpeCBpcyBpZ25vcmVkLCBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAuXG4gKiBAcGFyYW0gICB7c3RyaW5nfHJlZ2V4cHxhcnJheX0gICAgIHJlZ2V4cCAgICAgU3BlY2lmeSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIHBhdGhuYW1lICAgU3BlY2lmeSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJuICB7YXJyYXl8bnVsbH0gICAgICAgICAgICAgIFJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtYXRjaCBvciBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aE1hdGNoUmVnZXhwKHJlZ2V4cCwgcGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocmVnZXhwKS5leGVjKHBhdGhuYW1lKTtcbn1cblxuLyoqXG4gKiBJbiBhbiBhcnJheSBvZiBvYmplY3RzLCBzcGVjaWZ5IGFuIG9iamVjdCB0aGF0IHRyYXZlcnNlcyB0aGUgb2JqZWN0cyB3aG9zZSBwYXJlbnQgSUQgbWF0Y2hlcy5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjdXJyZW50ICAgU3BlY2lmeSB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgcXVlcmllZC5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHBhcmVudElkICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGlkICAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEByZXR1cm4gIHthcnJheX0gICAgUmV0dXJuIGEga2V5IGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbmNlc3RvcnMoYXJyYXksIGN1cnJlbnQsIHBhcmVudElkLCBpZCA9ICdpZCcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW2N1cnJlbnRdO1xuICBjb25zdCBoYXNoTWFwID0gbmV3IE1hcCgpO1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBoYXNoTWFwLnNldChpdGVtW2lkXSwgaXRlbSkpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgZ2V0UGF0aCA9IChjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmVudElkID0gaGFzaE1hcC5nZXQoY3VycmVudFtpZF0pW3BhcmVudElkXTtcbiAgICBpZiAoY3VycmVudFBhcmVudElkKSB7XG4gICAgICByZXN1bHQucHVzaChoYXNoTWFwLmdldChjdXJyZW50UGFyZW50SWQpKTtcbiAgICAgIGdldFBhdGgoaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFBhdGgoY3VycmVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zZUVycm9yKGRhdGE6IGFueSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gJ0JhZCByZXF1ZXN0ISc7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UpKSB7XG4gICAgY29uc3QgaXRlbSA9IGRhdGEubWVzc2FnZVswXTtcbiAgICBpZiAoIWl0ZW0uY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBkYXRhLmVycm9yIHx8ICdCYWQgcmVxdWVzdCEnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhpdGVtLmNvbnN0cmFpbnRzKVswXTtcbiAgfVxuXG4gIC8vIFRPRE8gLSBwYXJzZSBmb3IgbGFuZ2F1Z2Ugb3Igb3RoZXJzXG4gIHJldHVybiB0eXBlb2YgZGF0YS5tZXNzYWdlID09PSAnc3RyaW5nJyA/IGRhdGEubWVzc2FnZSA6ICdCYWQgcmVxdWVzdCEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gIGNvbnN0IHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgY29uc3Qgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyk7XG4gIGxldCBzUGFyYW1ldGVyTmFtZTtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERBWV9PRl9XRUVLID0ge1xuICBtb246ICdNb25kYXknLFxuICB0dWU6ICdUdWVzZGF5JyxcbiAgd2VkOiAnV2VkbmVzZGF5JyxcbiAgdGh1OiAnVGh1cnNkYXknLFxuICBmcmk6ICdGcmlkYXknLFxuICBzYXQ6ICdTYXR1cmRheScsXG4gIHN1bjogJ1N1bmRheSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGUoKSB7XG4gIGNvbnN0IGRlZmF1bHRWYWwgPSB7IHN0YXJ0OiBudWxsLCBlbmQ6IG51bGwsIGNsb3NlZDogdHJ1ZSB9O1xuICByZXR1cm4ge1xuICAgIG1vbjogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgdHVlOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB3ZWQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHRodTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgZnJpOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzYXQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHN1bjogeyAuLi5kZWZhdWx0VmFsIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaG93KHNjaGVkdWxlOiBJU2NoZWR1bGUpOiBzdHJpbmcge1xuICBsZXQgd2Vla0RheSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnZScpLCAxMCk7XG4gIGxldCBpID0gMDtcbiAgbGV0IG5leHRTaG93OiBzdHJpbmc7XG4gIGNvbnN0IHBlcmZvcm1lclNob3dzID0gT2JqZWN0LmtleXMoc2NoZWR1bGUpLmZpbHRlcihcbiAgICAoa2V5KSA9PiAhc2NoZWR1bGVba2V5XS5jbG9zZWRcbiAgKTtcbiAgZG8ge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5kYXkod2Vla0RheSkuZm9ybWF0KCdkZGQnKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChwZXJmb3JtZXJTaG93cy5pbmRleE9mKGRhdGUpID4gLTEpIHtcbiAgICAgIG5leHRTaG93ID0gZGF0ZTtcbiAgICB9XG4gICAgd2Vla0RheSArPSAxO1xuICAgIGkgKz0gMTtcbiAgfSB3aGlsZSAoaSA8IDcgJiYgIW5leHRTaG93KTtcblxuICBpZiAobmV4dFNob3cpIHtcbiAgICByZXR1cm4gYCR7c2NoZWR1bGVbbmV4dFNob3ddLnN0YXJ0fSAke21vbWVudCgpXG4gICAgICAuZGF5KHdlZWtEYXkgLSAxKVxuICAgICAgLmZvcm1hdCgnREQvTU0vWVlZWScpfWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoRGF0YShwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIHN0YXRlKSB7XG4gIGxldCB7IHNvcnQsIHNvcnRCeSwgZmlsdGVyIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBsaW1pdCB9ID0gc3RhdGU7XG4gIGlmIChmaWx0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoZmlsdGVyc1trZXldICYmIGZpbHRlcnNba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGZpbHRlcltrZXldID0gZmlsdGVyc1trZXldWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlcnNba2V5XSkge1xuICAgICAgICBmaWx0ZXJba2V5XSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlciA9IHt9O1xuICB9XG5cbiAgaWYgKHNvcnRlcikge1xuICAgIGlmIChzb3J0ZXIub3JkZXIpIHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIG9yZGVyIH0gPSBzb3J0ZXI7XG4gICAgICBzb3J0ID0gU09SVFtvcmRlcl07XG4gICAgICBzb3J0QnkgPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydEJ5ID0gJ2NyZWF0ZWRBdCc7XG4gICAgICBzb3J0ID0gJ2Rlc2MnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgc29ydEJ5LFxuICAgIG9mZnNldDogKHBhZ2luYXRpb24uY3VycmVudCAtIDEpICogbGltaXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2U2NChvcmlnaW5GaWxlT2JqLCBzdGF0dXMgPSAndXBsb2FkaW5nJywgZmlsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgaWYgKG9yaWdpbkZpbGVPYmopIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG9yaWdpbkZpbGVPYmopO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoe1xuICAgICAgICAuLi5vcmlnaW5GaWxlT2JqLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIG5hbWU6IG9yaWdpbkZpbGVPYmoubmFtZSxcbiAgICAgICAgdXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICBvcmlnaW5GaWxlT2JqXG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKGZpbGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q29ubmVjdGlvbkRhdGEoZGF0YSkge1xuICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCclLyUnKTtcbiAgY29uc3Qgc2VydmVyRGF0YSA9IGFyclsxXSAmJiBKU09OLnBhcnNlKGFyclsxXSk7XG4gIGNvbnN0IGNsaWVudERhdGEgPSBhcnJbMF0gJiYgSlNPTi5wYXJzZShhcnJbMF0pO1xuICByZXR1cm4ge1xuICAgIHNlcnZlckRhdGEsXG4gICAgY2xpZW50RGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVc2VyTG9naW4oaXNMb2dnZWRJbjogYm9vbGVhbiwgdXNlcjogSVVzZXIgfCBJUGVyZm9ybWVyIHwgSVN0dWRpbykge1xuICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybiBmYWxzZTtcbiAgaWYgKCF1c2VyICYmICF1c2VyLl9pZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIodXNlcjogSVVzZXIsIHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICBpZiAodXNlciAmJiB1c2VyLl9pZCkgcmV0dXJuIHVzZXI7XG4gIGlmIChwZXJmb3JtZXIgJiYgcGVyZm9ybWVyLl9pZCkgcmV0dXJuIHBlcmZvcm1lcjtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGh5c2ljYWxQcm9kdWN0KGl0ZW0pIHtcbiAgaWYgKGl0ZW0gJiYgaXRlbS50eXBlID09PSAncGh5c2ljYWwnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUocmVxKSB7XG4gIGNvbnN0IHtcbiAgICBpc01pbmUsXG4gICAgc3RhcnRzU2VxdWVuY2UsXG4gICAgZW5kc1NlcXVlbmNlLFxuICAgIGRhdGE6IHsgdHlwZSB9XG4gIH0gPSByZXE7XG4gIHJldHVybiBjbGFzc25hbWVzKFxuICAgICdtZXNzYWdlJyxcbiAgICB7IG1pbmU6IGlzTWluZSAmJiB0eXBlICE9PSAndGlwJyB9LFxuICAgIHsgdGlwOiB0eXBlID09PSAndGlwJyB9LFxuICAgIHsgc3RhcnQ6ICEhc3RhcnRzU2VxdWVuY2UgfSxcbiAgICB7IGVuZDogISFlbmRzU2VxdWVuY2UgfVxuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmVldFRvQ20oZmVldCwgaW5jaCkge1xuICBjb25zdCBbZl0gPSBmZWV0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IFtpXSA9IGluY2guc3BsaXQoJy4nKTtcbiAgcmV0dXJuIChwYXJzZUludChmLCAxMCkgKiAxMiArIHBhcnNlSW50KGksIDEwKSkgKiAyLjU0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0YVdlaWdodChtaW4gPSA5OSwgbWF4ID0gMzE5KSB7XG4gIGxldCBpID0gbWluO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZG8ge1xuICAgIHJlc3VsdFtpXSA9IChpICogMC40NSkudG9GaXhlZCgyKTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCBtYXgpO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgbGFiZWw6IGAke2luZGV4fSAgbGJzICgke3Z9a2cpYCxcbiAgICB2YWx1ZTogYCR7aW5kZXh9IGxic2BcbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFIZWlnaHQobWluID0gNCwgbWF4ID0gNykge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgZmVldCA9IG1pbjsgZmVldCA8IG1heDsgZmVldCArPSAxKSB7XG4gICAgZm9yIChsZXQgaW5jaCA9IDA7IGluY2ggPD0gMTE7IGluY2ggKz0gMSkge1xuICAgICAgY29uc3QgYSA9IGNvbnZlcnRGZWV0VG9DbShcbiAgICAgICAgZmVldC50b0ZpeGVkKDEpLnRvU3RyaW5nKCksXG4gICAgICAgIGluY2gudG9GaXhlZCgxKS50b1N0cmluZygpXG4gICAgICApO1xuICAgICAgcmVzdWx0LnB1c2goYCR7ZmVldH0nJHtpbmNofVwiICgke2EudG9GaXhlZCgyKX0gY20pYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQubWFwKChmKSA9PiAoeyBsYWJlbDogYCR7Zn1gLCB2YWx1ZTogYCR7Zn1gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzID0gMikge1xuICBpZiAocHJpY2UpIHtcbiAgICByZXR1cm4gcHJpY2UudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICdsb2dpbicsXG4gICdMT0dJTidcbik7XG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0aW5nID0gY3JlYXRlQWN0aW9uKCdMT0dJTl9SRVFVRVNUSU5HJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHBlcmZvcm1lcmxvZ2luLFxuICBwZXJmb3JtZXJsb2dpblN1Y2Nlc3MsXG4gIHBlcmZvcm1lcmxvZ2luRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdwZXJmb3JtZXJsb2dpbicsICdQRVJGT1JNRVJfTE9HSU4nKTtcblxuZXhwb3J0IGNvbnN0XG4gIHJlc2V0TG9naW5EYXRhID0gY3JlYXRlQWN0aW9uKCdyZXNldExvZ2luRGF0YScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzdHVkaW9Mb2dpbixcbiAgc3R1ZGlvTG9naW5TdWNjZXNzLFxuICBzdHVkaW9Mb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc3R1ZGlvTG9naW4nLCAnU1RVRElPX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHBlcmZvcm1lclJlZ2lzdGVyLFxuICBwZXJmb3JtZXJSZWdpc3RlclN1Y2Nlc3MsXG4gIHBlcmZvcm1lclJlZ2lzdGVyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdwZXJmb3JtZXJSZWdpc3RlcicsICdQRVJGT1JNRVJfUkVHSVNURVInKTtcbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJSZWdpc3RlclN1Ym1pdHRpbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfUEVSRk9STUVSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1c2VyUmVnaXN0ZXIsXG4gIHVzZXJSZWdpc3RlclN1Y2Nlc3MsXG4gIHVzZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXNlclJlZ2lzdGVyJywgJ1VTRVJfUkVHSVNURVInKTtcbmV4cG9ydCBjb25zdCBzZXRVc2VyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VTRVJfUkVHSVNURVJfU1VCTUlUVElORydcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVwZGF0ZVBhc3N3b3JkLFxuICB1cGRhdGVQYXNzd29yZFN1Y2Nlc3MsXG4gIHVwZGF0ZVBhc3N3b3JkRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCd1cGRhdGVQYXNzd29yZCcsICdVUERBVEVfUEFTU1dPUkQnKTtcbmV4cG9ydCBjb25zdCBzZXRVcGRhdGVQYXNzd29yZFN1Ym1pdHRpbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfVVBEQVRFX1BBU1NXT1JEX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gY3JlYXRlQWN0aW9uKCdsb2dvdXQnKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jQWN0aW9uLCBjcmVhdGVBY3Rpb24gfSBmcm9tICdzcmMvbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllcyxcbiAgZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc1N1Y2Nlc3MsXG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBlcmZvcm1lckNhdGVnb3JpZXMnLCAnR0VUX1BFUkZPUk1FUl9DQVRFR09SSUVTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNlYXJjaFBlcmZvcm1lcixcbiAgc2VhcmNoUGVyZm9ybWVyU3VjY2VzcyxcbiAgc2VhcmNoUGVyZm9ybWVyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdzZWFyY2hQZXJmb3JtZXInLCAnU0VBUkNIX1BFUkZPUk1FUicpO1xuXG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyU2VhcmNoaW5nID0gY3JlYXRlQWN0aW9uKCdTRVRfUEVSRk9STUVSX1NFQVJDSElORycpO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQZXJmb3JtZXJQcm9maWxlLFxuICB1cGRhdGVQZXJmb3JtZXJQcm9maWxlU3VjY2VzcyxcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZUZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGVyZm9ybWVyUHJvZmlsZScsICdVUERBVEVfUEVSRk9STUVSX1BST0ZJTEUnKTtcbmV4cG9ydCBjb25zdCBzZXR1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUgPSBjcmVhdGVBY3Rpb24oXG4gICd1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheW1lbnRJbmZvID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEFZTUVOVF9JTkZPJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGlyZWN0RGVwb3NpdCA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX0RJUkVDVF9ERVBPU0lUJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlUGF4dW0gPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9QQVhVTScpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUJpdHBheSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX0JJVFBBWScpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0cmVhbWluZ1N0YXR1cyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1NUUkVBTUlOR19TVEFUVVMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVEZWZhdWx0UHJpY2UgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9ERUZBVUxUX1BSSUNFJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lckRldGFpbHMsXG4gIGdldFBlcmZvcm1lckRldGFpbHNTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJEZXRhaWxzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJEZXRhaWxzJywgJ0dFVF9QRVJGT1JNRVJfREVUQUlMUycpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKFxuICAnc2V0R2V0dGluZ1BlcmZvcm1lckRldGFpbHMnXG4pO1xuZXhwb3J0IGNvbnN0IHNldFBlcmZvcm1lckRldGFpbHMgPSBjcmVhdGVBY3Rpb24oJ1NFVF9QRVJGT1JNRVJfREVUQUlMUycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcmZvcm1lckFzc2V0ID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEVSRk9STUVSX0FTU0VUJyk7XG5leHBvcnQgY29uc3Qgc2V0RmF2b3JpdGVQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX0ZBVk9SSVRFX1BFUkZPUk1FUl9ERVRBSUxTJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlQcm9kdWN0cyxcbiAgZ2V0TXlQcm9kdWN0c1N1Y2Nlc3MsXG4gIGdldE15UHJvZHVjdHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15UHJvZHVjdHMnLCAnR0VUX01ZX1BST0RVQ1QnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nTXlQcm9kdWN0cyA9IGNyZWF0ZUFjdGlvbignc2V0R2V0dGluZ015UHJvZHVjdHMnKTtcbmV4cG9ydCBjb25zdCBhZGRNeVByb2R1Y3QgPSBjcmVhdGVBY3Rpb24oJ2FkZE15UHJvZHVjdCcpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15UHJvZHVjdCA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlQcm9kdWN0Jyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldEVhcm5pbmcsXG4gIGdldEVhcm5pbmdTdWNjZXNzLFxuICBnZXRFYXJuaW5nRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRFYXJuaW5nJywgJ0dFVF9FQVJOSU5HJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ0Vhcm5pbmcgPSBjcmVhdGVBY3Rpb24oJ1NFVF9HRVRUSU5HX0VBUk5JRycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQYXlvdXRSZXF1ZXN0LFxuICBnZXRQYXlvdXRSZXF1ZXN0U3VjY2VzcyxcbiAgZ2V0UGF5b3V0UmVxdWVzdEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGF5b3V0UmVxdWVzdCcsICdHRVRfUEFZT1VUX1JFUVVFU1QnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nUGF5b3V0UmVxdWVzdCA9IGNyZWF0ZUFjdGlvbignU0VUX0dFVFRJTkdfUEFZT1VUX1JFUVVFU1QnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVQYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKCdSRU1PVkVfUEFZT1VUX1JFUVVFU1QnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlWaWRlb3MsXG4gIGdldE15VmlkZW9zU3VjY2VzcyxcbiAgZ2V0TXlWaWRlb3NGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15VmlkZW9zJywgJ0dFVF9NWV9WSURFTycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeVZpZGVvcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015VmlkZW9zJyk7XG5leHBvcnQgY29uc3QgYWRkTXlWaWRlb3MgPSBjcmVhdGVBY3Rpb24oJ2FkZE15VmlkZW9zJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlWaWRlbyA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlWaWRlbycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeVBob3RvcyxcbiAgZ2V0TXlQaG90b3NTdWNjZXNzLFxuICBnZXRNeVBob3Rvc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlQaG90b3MnLCAnR0VUX01ZX1BIT1RPJyk7XG5leHBvcnQgY29uc3Qgc2V0Z2V0dGluZ015UGhvdG9zID0gY3JlYXRlQWN0aW9uKCdzZXRnZXR0aW5nTXlQaG90b3MnKTtcbmV4cG9ydCBjb25zdCBhZGRNeVBob3RvcyA9IGNyZWF0ZUFjdGlvbignYWRkTXlQaG90b3MnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeVBob3RvID0gY3JlYXRlQWN0aW9uKCdyZW1vdmVNeVBob3RvJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15R2FsbGVyaWVzLFxuICBnZXRNeUdhbGxlcmllc1N1Y2Nlc3MsXG4gIGdldE15R2FsbGVyaWVzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeUdhbGxlcmllcycsICdHRVRfTVlfR0FMTEVSSUVTJyk7XG5leHBvcnQgY29uc3Qgc2V0Z2V0dGluZ015R2FsbGVyaWVzID0gY3JlYXRlQWN0aW9uKCdzZXRnZXR0aW5nTXlHYWxsZXJpZXMnKTtcbmV4cG9ydCBjb25zdCBhZGRNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbignYWRkTXlHYWxsZXJpZXMnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlHYWxsZXJpZXMnKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRQZXJmb3JtZXInKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUgPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfUEVSRk9STUVSX0ZBVk9VUklURSdcbik7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFBlcmZvcm1lckJhbGFuY2UgPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfQ1VSUkVOVF9QRVJGT1JNRVJfQkFMQU5DRSdcbik7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uXG59IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFN0dWRpbyA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFN0dWRpbycpO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVTdHVkaW8sXG4gIHVwZGF0ZVN0dWRpb1N1Y2Nlc3MsXG4gIHVwZGF0ZVN0dWRpb0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlU3R1ZGlvJywgJ1VQREFURV9TVFVESU8nKTtcblxuZXhwb3J0IGNvbnN0IHNldFVwZGF0aW5nU3R1ZGlvID0gY3JlYXRlQWN0aW9uKCd1cGRhdGluZ1N0dWRpbycpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3R1ZGlvUGF5bWVudEluZm8gPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfU1RVRElPX1BBWU1FTlRfSU5GTydcbik7XG5leHBvcnQgY29uc3QgdXBkYXRlU3R1ZGlvRGlyZWN0RGVwb3NpdCA9IGNyZWF0ZUFjdGlvbihcbiAgJ1VQREFURV9TVFVESU9fRElSRUNUX0RFUE9TSVQnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb1BheHVtID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfU1RVRElPX1BBWFVNJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlU3R1ZGlvQml0cGF5ID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfU1RVRElPX0JJVFBBWScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRTdHVkaW9FYXJuaW5nLFxuICBnZXRTdHVkaW9FYXJuaW5nU3VjY2VzcyxcbiAgZ2V0U3R1ZGlvRWFybmluZ0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0U3R1ZGlvRWFybmluZycsICdHRVRfU1RVRElPX0VBUk5JTkcnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nU3R1ZGlvRWFybmluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9HRVRUSU5HX1NUVURJT19FQVJOSUcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0LFxuICBnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0U3VjY2VzcyxcbiAgZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdCcsICdHRVRfU1RVRElPX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1N0dWRpb1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfR0VUVElOR19TVFVESU9fUEFZT1VUX1JFUVVFU1QnXG4pO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVN0dWRpb1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oXG4gICdSRU1PVkVfU1RVRElPX1BBWU9VVF9SRVFVRVNUJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdCxcbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFBlcmZvcm1lclJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBlcmZvcm1lclJlcXVlc3QnLCAnR0VUX1BFUkZPUk1FUl9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1BlcmZvcm1lclJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfR0VUVElOR19QRVJGT1JNRVJfUkVRVUVTVCdcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE1lbWJlcnMsXG4gIGdldE1lbWJlcnNTdWNjZXNzLFxuICBnZXRNZW1iZXJzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNZW1iZXJzJywgJ0dFVF9NRU1CRVJTJyk7XG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyc1NlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbignR0VUX01FTUJFUl9TRUFDSElORycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1lbWJlclN0YXR1cyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX01FTUJFUl9TVEFUVVMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TWVtYmVyc0NvbW1pc3Npb25zLFxuICBnZXRNZW1iZXJzQ29tbWlzc2lvbnNTdWNjZXNzLFxuICBnZXRNZW1iZXJzQ29tbWlzc2lvbnNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE1lbWJlcnNDb21taXNzaW9ucycsICdHRVRfTUVNQkVSU19DT01NU1NJT05TJyk7XG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyc0NvbW1pc3Npb25zU2VhcmNoaW5nID0gY3JlYXRlQWN0aW9uKFxuICAnR0VUX01FTUJFUl9DT01NU1NJT19TRUFDSElORydcbik7XG5leHBvcnQgY29uc3QgdXBkYXRlTWVtYmVyQ29tbWlzaW9uID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfTUVNQkVSX0NPTU1JU1NJT04nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0U3R1ZGlvU3RhdHMsXG4gIGdldFN0dWRpb1N0YXRzU3VjY2VzcyxcbiAgZ2V0U3R1ZGlvU3RhdHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFN0dWRpb1N0YXRzJywgJ0dFVF9TVFVESU9fU1RBVFMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVUb3RhbFBlcmZvcm1lciA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1RPVEFMX1BFUkZPUk1FUicpO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvblxufSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50VXNlcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50VXNlckF2YXRhcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSA9IGNyZWF0ZUFjdGlvbihcbiAgJ3VwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSdcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVwZGF0ZVVzZXIsXG4gIHVwZGF0ZVVzZXJTdWNjZXNzLFxuICB1cGRhdGVVc2VyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCd1cGRhdGVVc2VyJywgJ1VQREFURV9VU0VSJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGRhdGluZyA9IGNyZWF0ZUFjdGlvbigndXBkYXRpbmdVc2VyJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRSZWR1Y2VyID0gY3JlYXRlQWN0aW9uKCdzZXRVc2VyUmVkdWNlcicpO1xuXG5leHBvcnQgY29uc3QgYnV5VG9rZW5TdWNjZXNzID0gY3JlYXRlQWN0aW9uKCdidXlUb2tlblN1Y2Nlc3MnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0RmF2b3JpdGVQZXJmb3JtZXJzLFxuICBnZXRGYXZvcml0ZVBlcmZvcm1lcnNTdWNjZXNzLFxuICBnZXRGYXZvcml0ZVBlcmZvcm1lcnNGYWlsZWRcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0RmF2b3JpdGVQZXJmb3JtZXJzJywgJ0dFVF9GQVZPVVJJVEUnKTtcbmV4cG9ydCBjb25zdCBnZXR0aW5nRmF2b3JpdGVQZXJmb3JtZXJzID0gY3JlYXRlQWN0aW9uKCdHRVRUSU5HX0ZBVk9SSVRFJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlRmF2b3JpdGUgPSBjcmVhdGVBY3Rpb24oJ1JFTU9WRV9GQVZPUklURScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQYXltZW50VG9rZW5IaXN0cm95LFxuICBnZXRQYXltZW50VG9rZW5IaXN0cm95U3VjY2VzcyxcbiAgZ2V0UGF5bWVudFRva2VuSGlzdHJveUZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGF5bWVudFRva2VuSGlzdHJveScsICdHRVRfUEFZTUVUX1RPS0VfSElTVE9SWScpO1xuZXhwb3J0IGNvbnN0IGdldHRpZ1BheW1lbnRUb2tlbkhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oJ0dFVFRJTkdfUEFZTUVUX1RPS0VfSElTVE9SWScpO1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgSVJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3BvbnNlPFQ+IHtcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGRhdGE6IFQ7XG59XG5cbmV4cG9ydCBjb25zdCBUT0tFTiA9ICd0b2tlbic7XG5leHBvcnQgY29uc3QgUk9MRSA9ICdyb2xlJztcbmV4cG9ydCBjb25zdCBQRVJGT1JNRVJfUk9MRSA9ICdwZXJmb3JtZXInO1xuZXhwb3J0IGNvbnN0IFVTRVJfUk9MRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBTVFVESU9fUk9MRSA9ICdzdHVkaW8nO1xuZXhwb3J0IGNvbnN0IFNPUlQgPSB7IGRlc2NlbmQ6ICdkZXNjJywgYXNjZW5kOiAnYXNjJyB9O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVBJUmVxdWVzdCB7XG4gIHN0YXRpYyB0b2tlbjogc3RyaW5nID0gJyc7XG5cbiAgc2V0QXV0aEhlYWRlclRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICBBUElSZXF1ZXN0LnRva2VuID0gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBKU09OIHJldHVybmVkIGJ5IGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgVGhlIHBhcnNlZCBKU09OIGZyb20gdGhlIHJlcXVlc3RcbiAgICovXG4gIHByaXZhdGUgcGFyc2VKU09OKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbmV0d29yayByZXF1ZXN0IGNhbWUgYmFjayBmaW5lLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIG5vdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlICAgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdHx1bmRlZmluZWR9IFJldHVybnMgZWl0aGVyIHRoZSByZXNwb25zZSwgb3IgdGhyb3dzIGFuIGVycm9yXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNoZWNrU3RhdHVzKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQxMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2UnKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm9yYmlkZGVuIGluIHRoZSBhY3Rpb24hJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpIGFzIGFueTtcbiAgICAvLyBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIC8vIHRocm93IGVycm9yO1xuICAgIHRocm93IHJlc3BvbnNlLmNsb25lKCkuanNvbigpO1xuICB9XG5cbiAgcmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q/OiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgdmVyYiA9IChtZXRob2QgfHwgJ2dldCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgdXBkYXRlZEhlYWRlciA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyBUT0RPIC0gY2hlY2sgbWVcbiAgICAgIEF1dGhvcml6YXRpb246XG4gICAgICAgIEFQSVJlcXVlc3QudG9rZW4gfHwgKHByb2Nlc3MuYnJvd3NlciA/IGNvb2tpZS5nZXQoVE9LRU4pIDogJycpLFxuICAgICAgLi4uKGhlYWRlcnMgfHwge30pXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcblxuICAgIHJldHVybiBmZXRjaChpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLkFQSV9FTkRQT0lOVCB8fCBjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWAsIHtcbiAgICAgIG1ldGhvZDogdmVyYixcbiAgICAgIGhlYWRlcnM6IHVwZGF0ZWRIZWFkZXIsXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsXG4gICAgfSlcbiAgICAgIC50aGVuKHRoaXMuY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbih0aGlzLnBhcnNlSlNPTik7XG4gIH1cblxuICBidWlsZFVybChiYXNlVXJsOiBzdHJpbmcsIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBiYXNlVXJsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLm1hcCgoaykgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba10pfWApXG4gICAgICAuam9pbignJicpO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cblxuICBnZXQodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdnZXQnLCBudWxsLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwb3N0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwdXQnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGRlbCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2RlbGV0ZScsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBsb2FkKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGZpbGVzOiB7XG4gICAgICBmaWxlOiBGaWxlO1xuICAgICAgZmllbGRuYW1lOiBzdHJpbmc7XG4gICAgfVtdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uO1xuICAgICAgY3VzdG9tRGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBjb25zdCB1cGxvYWRVcmwgPSBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmaWxlcy5mb3JFYWNoKChmKSA9PiBmb3JtRGF0YS5hcHBlbmQoZi5maWVsZG5hbWUsIGYuZmlsZSwgZi5maWxlLm5hbWUpKTtcbiAgICAgIG9wdGlvbnMuY3VzdG9tRGF0YVxuICAgICAgICAmJiBPYmplY3Qua2V5cyhvcHRpb25zLmN1c3RvbURhdGEpLmZvckVhY2goXG4gICAgICAgICAgKGZpZWxkbmFtZSkgPT4gdHlwZW9mIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgZm9ybURhdGEuYXBwZW5kKGZpZWxkbmFtZSwgb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0pXG4gICAgICAgICk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnUE9TVCcsIHVwbG9hZFVybCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElSZWdpc3RlckZvcm1EYXRhLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUgPSBkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdkb2N1bWVudFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmlkVmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlkVmVyaWZpY2F0aW9uRGlsZSA9IGRhdGEuaWRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2lkVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgIG9taXQoZGF0YSwgWydkb2N1bWVudFZlcmlmaWNhdGlvbicsICdpZFZlcmlmaWNhdGlvbiddKVxuICAgICAgKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQge1xuICBJTG9naW4sXG4gIElwZXJmb3JtZXJMb2dpbixcbiAgSVJlZ2lzdGVyRm9ybURhdGEsXG4gIElVc2VyUmVnaXN0ZXJGb3JtRGF0YVxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBBUElSZXF1ZXN0LCBUT0tFTiwgSVJlc3BvbnNlLCBST0xFXG59IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbG9naW4oZGF0YTogSUxvZ2luKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldEF1dGhIZWFkZXIodG9rZW46IHN0cmluZywgcm9sZTogc3RyaW5nKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAgICAvLyBzaW5jZSBTYWZhcmkgZG9lcyBub3Qgc3VwcG9ydCwgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuICAgIGNvb2tpZS5zZXQoVE9LRU4sIHRva2VuLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICBjb29raWUuc2V0KFJPTEUsIHJvbGUsIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIHBlcmZvcm1lckxvZ2luKGRhdGE6IElwZXJmb3JtZXJMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3BlcmZvcm1lcnMvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHN0dWRpb0xvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3N0dWRpby9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgdGhpcy5zZXRBdXRoSGVhZGVyVG9rZW4odG9rZW4pO1xuICB9XG5cbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgIHJldHVybiB0b2tlbiB8fCBudWxsO1xuICB9XG5cbiAgZ2V0Um9sZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJvbGUgPSBjb29raWUuZ2V0KFJPTEUpO1xuICAgIHJldHVybiByb2xlIHx8IG51bGw7XG4gIH1cblxuICByZW1vdmVUb2tlbigpOiB2b2lkIHtcbiAgICBjb29raWUucmVtb3ZlKFRPS0VOKTtcbiAgICBjb29raWUucmVtb3ZlKFJPTEUpO1xuICB9XG5cbiAgcmVtb3ZlUmVtZW1iZXIoKTogdm9pZCB7XG4gICAgcHJvY2Vzcy5icm93c2VyICYmIGNvb2tpZS5yZW1vdmUoJ3JlbWVtYmVyTWUnKTtcbiAgfVxuXG4gIHVwZGF0ZVBhc3N3b3JkKGJvZHk6IHsgcGFzc3dvcmQ6IHN0cmluZzsgc291cmNlPzogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9hdXRoL3VzZXJzL21lL3Bhc3N3b3JkJywgYm9keSk7XG4gIH1cblxuICBwZXJmb3JtZXJzUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9wZXJmb3JtZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICB1c2VyUmVnaXN0ZXIoZGF0YTogSVVzZXJSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9SZWdpc3RlcihkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoJy9hdXRoL3N0dWRpby9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoZW1haWw6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgdHlwZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvZm9yZ290JywgZGF0YSk7XG4gIH1cblxuICByZXNlbmRWZXJpZmljYXRpb25FbWFpbChkYXRhOiB7IGVtYWlsOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nfSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy92ZXJpZmljYXRpb24vcmVzZW5kLXZlcmlmaWNhdGlvbi1lbWFpbCcsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSUJhbm5lclNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEJhbm5lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5OiBJQmFubmVyU2VhcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9iYW5uZXJzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBiYW5uZXJTZXJ2aWNlID0gbmV3IEJhbm5lclNlcnZpY2UoKTtcbiIsImxldCBnbG9iYWxDb25maWcgPSB7fSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoY29uZmlnOiBhbnkpID0+IHtcbiAgZ2xvYmFsQ29uZmlnID0gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbENvbmZpZyA9ICgpID0+IGdsb2JhbENvbmZpZztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgRWFybmluZ1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3NlYXJjaGAsIHBhcmFtcykpO1xuICB9XG5cbiAgc3RhdHMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZX0vc3RhdHNgLCBwYXJhbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZWFybmluZ1NlcnZpY2UgPSBuZXcgRWFybmluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgRmF2b3VyaXRlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBsaWtlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvZmF2b3VyaXRlLyR7aWR9L2xpa2VgKTtcbiAgfVxuXG4gIHVubGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS91bmxpa2VgKTtcbiAgfVxuXG4gIGZhdm9yaXRlKGlkOiBzdHJpbmcsIGlzRmF2b3JpdGVkOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS8ke2lzRmF2b3JpdGVkID8gJ3VubGlrZScgOiAnbGlrZSd9YCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2Zhdm91cml0ZScsIHF1ZXJ5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZhdm91cml0ZVNlcnZpY2UgPSBuZXcgRmF2b3VyaXRlU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJRGF0YVJlc3BvbnNlLCBJUGVyZm9ybWVyR2FsbGVyeSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChcbiAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGlzUGVyZm9ybWVyID0gdHJ1ZVxuICApOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKFxuICAgICAgICBpc1BlcmZvcm1lclxuICAgICAgICAgID8gJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvc2VhcmNoJ1xuICAgICAgICAgIDogJy91c2VyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCcsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBlcmZvcm1lckdhbGxlcnk+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvZ2FsbGVyaWVzJywgcGFyYW1zKSk7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMnLCBkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9L3ZpZXdgLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBwdWJsaWNkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5U2VydmljZSA9IG5ldyBHYWxsZXJ5U2VydmljZSgpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb21lci1jYXRlZ29yaWVzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb21lci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmcuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bob3RvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9nYWxsZXJ5LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9mYXZvdXJpdGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuLXBhY2thZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3B1cmNoYXNlLWl0ZW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9lYXJuaW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXlvdXQtcmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZnVuZC1yZXF1ZXN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R1ZGlvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9iYW5uZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbS5zZXJ2aWNlJztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zJywgcXVlcnkpKTtcbiAgfVxuXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjcmVhdGVDb252ZXJzYXRpb24oZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb252ZXJzYXRpb25zJywgZGF0YSk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25EZXRhaWwoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQoc3RyZWFtSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtLyR7c3RyZWFtSWR9YCk7XG4gIH1cblxuICBnZXRNZXNzYWdlcyhjb252ZXJzYXRpb25JZDogc3RyaW5nLCBxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgZ2V0UHVibGljTWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zL3B1YmxpYy8ke2NvbnZlcnNhdGlvbklkfWAsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL3B1YmxpYy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS9wdWJsaWMvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGNvdW50VG90YWxOb3RSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL21lc3NhZ2VzL2NvdW50aW5nLW5vdC1yZWFkLW1lc3NhZ2VzJyk7XG4gIH1cblxuICByZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQ6IHN0cmluZyB8IG51bWJlciwgcmVjaXBpZW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9tZXNzYWdlcy9yZWFkLWFsbCcsIHsgY29udmVyc2F0aW9uSWQsIHJlY2lwaWVudElkIH0pO1xuICB9XG5cbiAgZ2V0TWVzc2FnZVVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vbWVzc2FnZXMvcHJpdmF0ZS9maWxlYDtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH0vcmVtb3ZlLWFsbC1tZXNzYWdlYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKCk7XG4iLCIvLyBpbXBvcnQgeyBJR2FsbGVyeUNyZWF0ZSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvZGV0YWlscy8ke2lkfWApO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvb3JkZXJzLyR7aWR9L3VwZGF0ZWAsIGRhdGEpO1xuICB9XG5cbiAgdXNlclNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHVzZXJGaW5kRGV0YWlscyhpZCkge1xuICAgIHJldHVybiB0aGlzLmdldChgL29yZGVycy91c2VyL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JkZXJTZXJ2aWNlID0gbmV3IE9yZGVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKTtcbiAgfVxuXG4gIGZpbmRPbmUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5bWVudC1pbmZvcm1hdGlvbicsIGRhdGEpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5bWVudEluZm9ybWF0aW9uU2VydmljZSA9IG5ldyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFBheW91dFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNhbGN1bGF0ZShwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZSB8fCAncGVyZm9ybWVyJ30vcGF5b3V0YCwgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHN0dWRpb1NlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlKGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9YCwgYm9keSk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgYm9keTogYW55LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfWAsIGJvZHkpO1xuICB9XG5cbiAgZGV0YWlsKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH0sXG4gICAgcm9sZSA9ICdwZXJmb3JtZXInXG4gICk6IFByb21pc2U8SVJlc3BvbnNlPFBheW91dFJlcXVlc3RTZXJ2aWNlPj4ge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9LyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5b3V0UmVxdWVzdFNlcnZpY2UgPSBuZXcgUGF5b3V0UmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldExpc3QocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXItY2F0ZWdvcmllcycsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXItY2F0ZWdvcmllcy8ke2lkfS92aWV3YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lckNhdGVnb3JpZXMgPSBuZXcgUGVyZm9ybWVyQ2F0ZWdvcmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIElQZXJmb3JtZXIsXG4gIElDcmVhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgSVVwZGF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSwgVE9LRU4gfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3BlcmZvcm1lcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3BlcmZvcm1lcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGRldGFpbHModXNlcm5hbWU6IHN0cmluZywgaGVhZGVycyA9IHt9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7dXNlcm5hbWV9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9hdmF0YXIvdXBsb2FkYDtcbiAgfVxuXG4gIGdldERvY3VtZW50c1VwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9kb2N1bWVudHMvdXBsb2FkYDtcbiAgfVxuXG4gIGdldFJlbGVhc2VGb3JtVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL3JlbGVhc2UtZm9ybS91cGxvYWRgO1xuICB9XG5cbiAgbXlQcm9kdWN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSkge1xuICAgICAgICBjb25zdCBkaWdpdGFsRmlsZSA9IGRhdGEuZGlnaXRhbEZpbGUuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpZ2l0YWxGaWxlJywgZGlnaXRhbEZpbGUsIGRpZ2l0YWxGaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsnaW1hZ2UnLCAnZGlnaXRhbEZpbGUnXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElVcGRhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmltYWdlICYmIGRhdGEuaW1hZ2UuZmlsZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSAmJiBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUpIHtcbiAgICAgICAgY29uc3QgZGlnaXRhbEZpbGUgPSBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaWdpdGFsRmlsZScsIGRpZ2l0YWxGaWxlLCBkaWdpdGFsRmlsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ2ltYWdlJywgJ2RpZ2l0YWxGaWxlJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9wZXJmb3JtZXIvY29tbWlzc2lvbicpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYmFuay10cmFuc2Zlci91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZURpcmVjdERlcG9zdChwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9kaXJlY3QtZGVwb3NpdC91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheHVtKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JpdHBheS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVN0cmVhbWluZ1N0YXR1cyhwYXlsb2FkOiB7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3N0cmVhbWluZy1zdGF0dXMvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZW9CbG9jayhwYXlsb2FkOiB7dXNlcklkcz86IHN0cmluZ1tdLCBjb3VudHJpZXM/OiBzdHJpbmdbXX0pOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYmxvY2tpbmcvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRCbG9ja2VkTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL2Jsb2NraW5nJykpO1xuICB9XG5cbiAgaW5jcmVhc2VWaWV3KHBlcmZvcm1lcklkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BlcmZvcm1lcnMvJHtwZXJmb3JtZXJJZH0vaW5jLXZpZXdgKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHRQcmljZShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9kZWZhdWx0LXByaWNlL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQnJvYWRjYXN0U2V0dGluZyhwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jyb2FkY2FzdC1zZXR0aW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgc3VzcGVuZEFjY291bnQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3N1c3BlbmQtYWNjb3VudCcsIHsgcGFzc3dvcmQgfSk7XG4gIH1cblxuICBjaGVja0Jsb2NrKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2NoZWNrLWJsb2NraW5nYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdFTk5ERVJfUEVSRk9STUVSID0gWydmZW1hbGUnLCAndHJhbnNnZW5kZXInLCAnbWFsZSddO1xuXG5leHBvcnQgY29uc3QgcGVyZm9ybWVyU2VydmljZSA9IG5ldyBQZXJmb3JtZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgSVJlc3BvbnNlLFxuICBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICBJRGF0YVJlc3BvbnNlLFxuICBJUGhvdG9cbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgUGhvdG9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGhvdG8+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2hCeUdhbGxlcnkoXG4gICAgZ2FsbGVyeUlkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzoge1xuICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH0sXG4gICAgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7Z2FsbGVyeUlkfS9zZWFyY2hgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICksXG4gICAgICBoZWFkZXJzXG4gICAgKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgbXlQaG90b3MocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEucGhvdG8pIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJQaG90b1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5waG90byAmJiBkYXRhLnBob3RvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRJbWFnZXMoZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy91cGxvYWQnLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGRuYW1lOiAncGhvdG8nLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBob3RvU2VydmljZSA9IG5ldyBQaG90b1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElQb3N0U2VhcmNoIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5OiBJUG9zdFNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcG9zdHMvc2VhcmNoJywgcXVlcnkgYXMgYW55KSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcG9zdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRhY3RDb3RlbnQoZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb250YWN0JywgeyAuLi5kYXRhIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3N0U2VydmljZSA9IG5ldyBQb3N0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3Byb2R1Y3RzJywgcGFyYW1zKSk7XG4gIH1cblxuICBnZXREb3dubG9hZExpbmsoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS9kb3dubG9hZC1saW5rYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZUl0ZW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHB1cmNoYXNlSXRlbShpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvJHt0eXBlfS8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgcHVyY2hhc2VQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvcHJvZHVjdC8ke2lkfWApO1xuICB9XG5cbiAgcHVyY2hhc2VWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3ZpZGVvLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlSXRlbVNlcnZpY2UgPSBuZXcgUHVyY2hhc2VJdGVtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUmVmdW5kUmVxdWVzdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmVmdW5kLXJlcXVlc3RzJywgZGF0YSk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVmdW5kLXJlcXVlc3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWZ1bmRSZXF1ZXN0U2VydmljZSA9IG5ldyBSZWZ1bmRSZXF1ZXN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVNldHRpbmcsIElDb3VudHJpZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGFsbChncm91cCA9ICcnKTogUHJvbWlzZTxJUmVzcG9uc2U8SVNldHRpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zZXR0aW5ncy9wdWJsaWMnLCB7IGdyb3VwIH0pKTtcbiAgfVxuXG4gIGdldENvdW50cmllcygpOiBQcm9taXNlPElSZXNwb25zZTxJQ291bnRyaWVzW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGdldFRpbWV6b25lcygpOiBQcm9taXNlPElSZXNwb25zZTxzdHJpbmdbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy90aW1lem9uZXMvbGlzdCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nU2VydmljZSA9IG5ldyBTZXR0aW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSU9uZVRpbWVUb2tlbiwgU3RyZWFtU2V0dGluZ3MgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFN0cmVhbVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0U2Vzc2lvbklkKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9zZXNzaW9uLyR7aWR9LyR7dHlwZX1gKTtcbiAgfVxuXG4gIGdvTGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2xpdmUnKTtcbiAgfVxuXG4gIGpvaW5QdWJsaWNDaGF0KHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3RyZWFtaW5nL2pvaW4vJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIHJlcXVlc3RQcml2YXRlQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9wcml2YXRlLWNoYXQvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGFjY2VwdFByaXZhdGVDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBzdGFydEdyb3VwQ2hhdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2dyb3VwLWNoYXQnKTtcbiAgfVxuXG4gIGpvaW5Hcm91cENoYXQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9ncm91cC1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBnZW5lcmF0ZU9uZVRpbWVUb2tlbihkYXRhOiBJT25lVGltZVRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy90b2tlbicsIGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHVibGlzaFRva2VuKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5nc1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uIH0gPSBzZXR0aW5ncztcbiAgICAgIGlmIChzZWN1cmVPcHRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVPbmVUaW1lVG9rZW4oe1xuICAgICAgICAgIGlkOiBzdHJlYW1JZCxcbiAgICAgICAgICB0eXBlOiAncHVibGlzaCcsXG4gICAgICAgICAgZXhwaXJlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFN1YnNjcmliZXJUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRMaXZlU3RyZWFtT3JWb2RVUkwob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzLFxuICAgIGFwcE5hbWU6IHN0cmluZ1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCksIF9wbGF5ZXIgPSAnaGxzJykge1xuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3N0cmVhbXMvc3RyZWFtSUQubXA0P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm0zdTg/dG9rZW49dG9rZW5JZFxuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3BsYXkuaHRtbD9uYW1lPXN0cmVhbUlEJnBsYXlPcmRlcj1obHMmdG9rZW49dG9rZW5JZFxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBzcmMgPSBgaHR0cHM6Ly8ke3ZpZXdlclVSTH06NTQ0My8ke2FwcE5hbWV9L3N0cmVhbXMvJHtzdHJlYW1JZH0ubTN1OCR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGNvbnN0IHsgYXBwTmFtZSwgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24sIHZpZXdlclVSTCB9ID0gc2V0dGluZ3M7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBfcGxheWVyID09PSAnaGxzJyA/ICdtM3U4JyA6ICdtcDQnO1xuICAgICAgaWYgKCF2aWV3ZXJVUkwgfHwgIWFwcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgb25lVGltZVRva2VuID0gJyc7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIG9uZVRpbWVUb2tlbiA9IHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHByb3RvY29sIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke3ZpZXdlclVSTH0vJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9LiR7ZXh0ZW5zaW9ufSR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0cmVhbVNlcnZpY2UgPSBuZXcgU3RyZWFtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVN0dWRpbyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3R1ZGlvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvc3R1ZGlvL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9iYW5rLXRyYW5zZmVyL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlRGlyZWN0RGVwb3N0KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYml0cGF5L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9zdHVkaW8vY29tbWlzc2lvbicpO1xuICB9XG5cbiAgYWRkTW9kZWwocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vbWVtYmVycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0TWVtYmVycyhwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zdHVkaW8vbWVtYmVycycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0TWVtYmVyQ29tbWlzc2lvbnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL2NvbW1pc3Npb24nLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHVwZGF0ZU1lbWJlckNvbW1pc3Npb24oaWQ6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvc3R1ZGlvL2NvbW1pc3Npb24vbWVtYmVyLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRQZXJmb3JtZXJSZXF1ZXN0KHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9wZXJmb3JtZXItcmVxdWVzdCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdChpZDogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby91cGRhdGUvJHtpZH1gLCB7IC4uLnBheWxvYWQgfSk7XG4gIH1cblxuICB1cGRhdGVNZW1iZXJTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3R1ZGlvL21lbWJlcnMvJHtpZH0vJHtzdGF0dXN9YCk7XG4gIH1cblxuICBzdGF0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHVkaW8vc3RhdHMnKTtcbiAgfVxuXG4gIGdldERvY3VtZW50c1VwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vc3R1ZGlvL2RvY3VtZW50cy91cGxvYWRgO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHVkaW9TZXJ2aWNlID0gbmV3IFN0dWRpb1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFja2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BhY2thZ2UvdG9rZW4vc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBidXlUb2tlbnMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXltZW50L3B1cmNoYXNlLXRva2Vucy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblBhY2thZ2VTZXJ2aWNlID0gbmV3IFRva2VuUGFja2FnZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdHJhbnNhY3Rpb25zL3VzZXIvc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBzZW5kVGlwVG9rZW4ocGVyZm9ybWVySWQ6IHN0cmluZywgdG9rZW46IG51bWJlciwgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVtYmVyL3NlbmQtdGlwLXRva2VuLyR7cGVyZm9ybWVySWR9YCwgeyB0b2tlbiwgY29udmVyc2F0aW9uSWQgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VuZFBhaWRUb2tlbihjb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXBheS10b2tlbi8ke2NvbnZlcnNhdGlvbklkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvblNlcnZpY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJVXNlciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy91c2Vycy9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlTWUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvdXNlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCh1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvJHt1c2VySWR9L2F2YXRhci91cGxvYWRgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2Vycy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXJzL3ZpZXcvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElDb3VudHJ5LCBJTGFuZ2d1Z2VzLCBJUGhvbmVDb2RlcyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNvdW50cmllc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGxhbmd1YWdlc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUxhbmdndWdlcz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9sYW5ndWFnZXMvbGlzdCcpO1xuICB9XG5cbiAgcGhvbmVDb2Rlc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBob25lQ29kZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvcGhvbmUtY29kZXMvbGlzdCcpO1xuICB9XG5cbiAgc3RhdGlzdGljcygpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3RhdGlzdGljcy9hZG1pbicpO1xuICB9XG5cbiAgdmVyaWZ5UmVjYXB0Y2hhKHRva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmUtY2FwdGNoYS92ZXJpZnknLCB7IHRva2VuIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1dGlsc1NlcnZpY2UgPSBuZXcgVXRpbHNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UsIElQZXJmb3JtZXJWaWRlb1BheWxvYWQgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci92aWRlb3MnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgbXlWaWRlb3MocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlTXlWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZGF0YS52aWRlby5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCB2aWRlbywgdmlkZW8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRyYWlsZXIpIHtcbiAgICAgICAgY29uc3QgdHJhaWxlciA9IGRhdGEudHJhaWxlci5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHJhaWxlcicsIHRyYWlsZXIsIHRyYWlsZXIubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRodW1ibmFpbCkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaChcbiAgICAgICAgKHYpID0+IHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvICYmIGRhdGEudmlkZW8uZmlsZSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyICYmIGRhdGEudHJhaWxlci5maWxlKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwgJiYgZGF0YS50aHVtYm5haWwuZmlsZSkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5jcmVhc2VWaWV3KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfS9pbmMtdmlld2ApO1xuICB9XG5cbiAgLy8gdXBkYXRlKHZpZGVvSWQsIHBlcmZvcm1lcklkLCBkYXRhKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7dmlkZW9JZH1gLCB7XG4gIC8vICAgICAuLi5kYXRhLFxuICAvLyAgICAgcGVyZm9ybWVySWRcbiAgLy8gICB9KTtcbiAgLy8gfVxuICB1c2VyRmluZFZpZGVvQnlJZChpZDogc3RyaW5nLCBoZWFkZXJzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpZGVvU2VydmljZSA9IG5ldyBWaWRlb1NlcnZpY2UoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIElFdmVudFByb3BzIHtcbiAgZXZlbnQ6IHN0cmluZztcbiAgaGFuZGxlcjogRnVuY3Rpb247XG59XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElFdmVudFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBldmVudCwgaGFuZGxlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgd2FybmluZygnU29ja2V0IElPIGNvbm5lY3Rpb24gaGFzIG5vdCBiZWVuIGVzdGFibGlzaGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvY2tldC5vbihldmVudCwgaGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGV2ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuY29udGV4dDtcblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICB3YXJuaW5nKCdTb2NrZXQgSU8gY29ubmVjdGlvbiBoYXMgbm90IGJlZW4gZXN0YWJsaXNoZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc29ja2V0Lm9mZihldmVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbkV2ZW50LmNvbnRleHRUeXBlID0gU29ja2V0Q29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcbmltcG9ydCB7IHdhcm5pbmcsIGRlYnVnIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcblxuaW50ZXJmYWNlIElTb2NrZXRQcm9wcyB7XG4gIHVyaT86IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbiAgbG9nZ2VkSW46IGJvb2xlYW47XG59XG5cbmNsYXNzIFNvY2tldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU29ja2V0UHJvcHM+IHtcbiAgc29ja2V0O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wczogYW55KSB7XG4gICAgY29uc3QgeyBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobmV4dFByb3BzLmxvZ2dlZEluICE9PSBsb2dnZWRJbikge1xuICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3QgeyBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2tlbiA9IGxvZ2dlZEluICYmIGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgeyB1cmkgPSBjb25maWcuTkVYVF9QVUJMSUNfU09DS0VUX0VORFBPSU5UIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCcsICdwb2xsaW5nJywgJ2xvbmctcG9sbGluZyddLFxuICAgICAgcXVlcnk6IHRva2VuID8gYHRva2VuPSR7dG9rZW59YCA6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LmNsb3NlKCk7XG5cbiAgICB0aGlzLnNvY2tldCA9IFNvY2tldElPKHVyaSwgdGhpcy5tZXJnZU9wdGlvbnMob3B0aW9ucykpO1xuXG4gICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2luaXRpYWxpemVkJztcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygnY29ubmVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdkaXNjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgd2FybmluZygnZXJyb3InLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3QnLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RfYXR0ZW1wdCcsICgpID0+IHtcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3RfYXR0ZW1wdCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdGluZycsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdyZWNvbm5lY3RpbmcnO1xuICAgICAgZGVidWcoJ3JlY29ubmVjdGluZycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdF9mYWlsZWQnLCAoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgd2FybmluZygncmVjb25uZWN0X2ZhaWxlZCcsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1lcmdlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHJlY29ubmVjdGlvbjogdHJ1ZSxcbiAgICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzOiBJbmZpbml0eSxcbiAgICAgIHJlY29ubmVjdGlvbkRlbGF5OiAxICogMTAwMCxcbiAgICAgIHJlY29ubmVjdGlvbkRlbGF5TWF4OiA1ICogMTAwMCxcbiAgICAgIGF1dG9Db25uZWN0OiB0cnVlLFxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZycsICdsb25nLXBvbGxpbmcnXSxcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhpcy5zb2NrZXR9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbil9XG4gICAgICA8L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlcykoU29ja2V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxhbnk+KCdzb2NrZXQnKTtcbiIsImltcG9ydCBTb2NrZXQgZnJvbSAnLi9Tb2NrZXQnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5cbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgaWYgKHdpbmRvdykgd2luZG93LlJlYWN0U29ja2V0SU8gPSB7IFNvY2tldCwgRXZlbnQsIFNvY2tldENvbnRleHQgfTtcbn1cblxuZXhwb3J0IHsgU29ja2V0LCBFdmVudCwgU29ja2V0Q29udGV4dCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCAqL1xuXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3YXJuaW5nID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gIC8vIGRlYnVnIG9uIGRldmVsb3BtZW50IGFuZCBzdGFnaW5nLlxuICBpZiAoY29uZmlnLk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHJldHVybjtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYXJncy5qb2luKCcgJykpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKGNvbmZpZy5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSByZXR1cm47XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGgtdG8tcmVnZXhwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==