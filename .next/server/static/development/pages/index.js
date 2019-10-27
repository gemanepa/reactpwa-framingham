module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
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

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
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


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

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
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

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

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Link */ "@material-ui/icons/Link");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../src/Header */ "./src/Header/index.js");
/* harmony import */ var _src_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../src/Navbar */ "./src/Navbar/index.js");
/* harmony import */ var _src_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../src/Form */ "./src/Form/index.js");
/* harmony import */ var _src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/FraminghamCalculator */ "./src/FraminghamCalculator/index.js");
/* harmony import */ var _src_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../src/Footer */ "./src/Footer/index.js");
/* harmony import */ var _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../src/i18n/head.json */ "./src/i18n/head.json");
var _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../src/i18n/head.json */ "./src/i18n/head.json", 1);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2.5)
  }
}));
function Index() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  let [translations, setTranslations] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});
  let language;
  router.query.lang ? language = router.query.lang : language = 'en';
  __webpack_require__("./src/i18n lazy recursive ^\\.\\/.*\\.json$")(`./${language}.json`).then(strings => {
    setTranslations(strings.default);
  });
  const classes = useStyles();
  const [results, setResults] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const resultsEl = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null); // Handles data submitted in Form componented when Calculate button is pressed

  function datasubmittedHandler(data) {
    const calculation = Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_10__["default"])(data, translations);
    setResults(calculation);
    resultsEl.current.focus();
    window.innerWidth < 1200 && resultsEl.current.scrollIntoView();
  }

  function resetResults() {
    setResults(false);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_12__[language].title), __jsx("meta", {
    name: "application-name",
    content: _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_12__[language].appname,
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_12__[language].description,
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_12__[language].keywords,
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navbar_title: translations.navbar_title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3965082120" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, translations.framingham_risk_score_calculator), __jsx("h5", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, translations.using_guidelines, __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    resetResults: resetResults,
    translations: translations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), __jsx("section", {
    ref: resultsEl,
    "aria-live": "assertive",
    className: "jsx-3965082120" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, !results && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), __jsx("a", {
    href: "https://play.google.com/store/apps/details?id=com.gemanepa.framingham",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("img", {
    alt: "Google Play Android App",
    src: `https://play.google.com/intl/en_us/badges/static/images/badges/${language}_badge_web_generic.png`,
    className: "jsx-3965082120" + " " + "gplay-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, translations.results), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, translations.score, ": ", results.score), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, translations.cvd, ": ", results.cvd), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, translations.heartage, ": ", results.heartage), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, translations.risk, ": ", results.risklevel), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, translations.treatment, ": ", results.needstreatment)))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3965082120",
    __self: this
  }, "p.jsx-3965082120{font-family:Lato;}body.jsx-3965082120{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-3965082120{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-3965082120:visited{color:#4689C8;}main.jsx-3965082120{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-3965082120{width:61%;}section.formsection.jsx-3965082120 h2.jsx-3965082120{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-3965082120 h5.jsx-3965082120{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-3965082120{width:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media (min-width:1200px){section.aboutsection.jsx-3965082120 a.jsx-3965082120{margin-left:45%;}}.gplay-img.jsx-3965082120{height:auto;margin:0 auto;width:16vw;}.gplay-img.jsx-3965082120:hover{-webkit-filter:invert(100%) drop-shadow(8px 8px 10px gray);filter:invert(100%) drop-shadow(8px 8px 10px gray);}@media (max-width:1199px){main.jsx-3965082120{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-3965082120{margin-bottom:30px;}section.formsection.jsx-3965082120,section.aboutsection.jsx-3965082120{width:100%;}.gplay-img.jsx-3965082120{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQUs2QixBQUczQixBQUt1QyxBQUt2QyxBQU9TLEFBR1IsQUFJQSxVQTlDZixBQWVlLEFBa0JHLENBMUNGLEFBb0RkLEFBSUEsQ0E5RWtCLEFBc0RKLEVBcENoQixBQWdCb0IsQ0FNRixDQVV3QixDQXREMUMsRUEyRUUsS0FOd0IsQ0ExQ1gsQ0FnQ0YsR0E5Q0csQUFnQ00sQ0F4Q0gsRUFrQ1IsS0FxQlgsSUFwQkEsRUExQmtCLElBUkosQUF3Q2QsWUF2Q1csQUFRRSxTQVBELEVBUU8sUUFQUixNQTBDYSxHQXpDeEIsQUFPYyxZQUNkLEFBVXFCLEdBMENNLFFBUDNCLG9EQVhBLE1BdkIrQixpQ0EwQzdCLDBGQXpDZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBMaW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL3NyYy9IZWFkZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vLi4vc3JjL05hdmJhcidcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vc3JjL0Zvcm0nXG5pbXBvcnQgRnJhbWluZ2hhbUNhbGN1bGF0b3IgZnJvbSAnLi4vc3JjL0ZyYW1pbmdoYW1DYWxjdWxhdG9yJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL3NyYy9Gb290ZXInXG5pbXBvcnQgaGVhZExhbmcgZnJvbSAnLi8uLi9zcmMvaTE4bi9oZWFkLmpzb24nXG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMi41KSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgW3RyYW5zbGF0aW9ucywgc2V0VHJhbnNsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICBsZXQgbGFuZ3VhZ2U7IHJvdXRlci5xdWVyeS5sYW5nID8gbGFuZ3VhZ2UgPSByb3V0ZXIucXVlcnkubGFuZyA6IGxhbmd1YWdlID0gJ2VuJ1xuXG4gIGltcG9ydChgLi8uLi9zcmMvaTE4bi8ke2xhbmd1YWdlfS5qc29uYCkudGhlbihzdHJpbmdzID0+IHtcbiAgICBzZXRUcmFuc2xhdGlvbnMoc3RyaW5ncy5kZWZhdWx0KVxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVzdWx0c0VsID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIC8vIEhhbmRsZXMgZGF0YSBzdWJtaXR0ZWQgaW4gRm9ybSBjb21wb25lbnRlZCB3aGVuIENhbGN1bGF0ZSBidXR0b24gaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBkYXRhc3VibWl0dGVkSGFuZGxlcihkYXRhKXtcbiAgICBjb25zdCBjYWxjdWxhdGlvbiA9IEZyYW1pbmdoYW1DYWxjdWxhdG9yKGRhdGEsIHRyYW5zbGF0aW9ucyk7XG4gICAgc2V0UmVzdWx0cyhjYWxjdWxhdGlvbik7XG4gICAgcmVzdWx0c0VsLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiYgcmVzdWx0c0VsLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0UmVzdWx0cygpe1xuICAgIHNldFJlc3VsdHMoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57aGVhZExhbmdbbGFuZ3VhZ2VdLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD17aGVhZExhbmdbbGFuZ3VhZ2VdLmFwcG5hbWV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2hlYWRMYW5nW2xhbmd1YWdlXS5kZXNjcmlwdGlvbn0vPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtoZWFkTGFuZ1tsYW5ndWFnZV0ua2V5d29yZHN9IC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZWFkZXIgbmF2YmFyX3RpdGxlPXt0cmFuc2xhdGlvbnMubmF2YmFyX3RpdGxlfSAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zZWN0aW9uXCI+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxoMj57dHJhbnNsYXRpb25zLmZyYW1pbmdoYW1fcmlza19zY29yZV9jYWxjdWxhdG9yfTwvaDI+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jY3MuY2EvaW1hZ2VzL0d1aWRlbGluZXMvVG9vbHNfYW5kX0NhbGN1bGF0b3JzX0VuL0ZSU19lbmdfMjAxN19mbmwxLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy51c2luZ19ndWlkZWxpbmVzfVxuICAgICAgICAgICAgICA8TGlua0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8Rm9ybSBkYXRhc3VibWl0dGVkSGFuZGxlcj17ZGF0YXN1Ym1pdHRlZEhhbmRsZXJ9IHJlc2V0UmVzdWx0cz17cmVzZXRSZXN1bHRzfSB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc30gLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gcmVmPXtyZXN1bHRzRWx9IGNsYXNzTmFtZT1cImFib3V0c2VjdGlvblwiIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJz5cbiAgICAgICAgICB7IXJlc3VsdHMgJiYgPD5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgRnJhbWluZ2hhbSBTY2FsZSBhbGxvd3MgdG8gZGV0ZXJtaW5lIHRoZSByaXNrIG9mIHN1ZmZlcmluZyBhbnkgY2FyZGlvdmFzY3VsYXIgZXZlbnQgaW4gMTAgeWVhcnMsIGFzc2Vzc2luZyBmYWN0b3JzIHN1Y2ggYXMgYWdlLCBzZXgsIGJsb29kIHByZXNzdXJlLCBkaWFiZXRlcywgYW5kIHNtb2tpbmcsIGFzc2lnbmluZyBhIHNjb3JlIHRvIGVhY2ggb2YgdGhlbSBhbmQgc3RyYXRpZnlpbmcgdGhlIHBhdGllbnQgaW4gbG93LCBtZWRpdW0sIGFuZCBoaWdoIGNhcmRpb3Zhc2N1bGFyIHJpc2suIEl0IGFsc28gYWxsb3dzIHRvIGNhbGN1bGF0ZSB0aGUgdmFzY3VsYXIgYWdlLCB3aGljaCBnaXZlcyBhbiBlc3RpbWF0ZSBvZiB0aGUgdmFzY3VsYXIgZGFtYWdlIG9mIHRoZSBwYXRpZW50IHRocm91Z2ggdGhlIHZhcmlhdGlvbiBvZiB5ZWFycyBiZXR3ZWVuIGl0IGFuZCBpdHMgY2hyb25vbG9naWNhbCBhZ2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nZW1hbmVwYS5mcmFtaW5naGFtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncGxheS1pbWdcIlxuICAgICAgICAgICAgICBhbHQ9XCJHb29nbGUgUGxheSBBbmRyb2lkIEFwcFwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcGxheS5nb29nbGUuY29tL2ludGwvZW5fdXMvYmFkZ2VzL3N0YXRpYy9pbWFnZXMvYmFkZ2VzLyR7bGFuZ3VhZ2V9X2JhZGdlX3dlYl9nZW5lcmljLnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgICB7cmVzdWx0cyAmJiA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9ID5cbiAgICAgICAgICA8aDM+e3RyYW5zbGF0aW9ucy5yZXN1bHRzfTwvaDM+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnNjb3JlfToge3Jlc3VsdHMuc2NvcmV9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5jdmR9OiB7cmVzdWx0cy5jdmR9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5oZWFydGFnZX06IHtyZXN1bHRzLmhlYXJ0YWdlfTwvcD5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMucmlza306IHtyZXN1bHRzLnJpc2tsZXZlbH08L3A+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnRyZWF0bWVudH06IHtyZXN1bHRzLm5lZWRzdHJlYXRtZW50fTwvcD5cbiAgICAgICAgICA8L1BhcGVyPn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPCBGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgICAgI3Jvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogIzQ2ODlDOFxuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWluLWhlaWdodDogNzZ2aDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA2MSU7XG4gICAgICB9XG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGgyIHtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIHNlY3Rpb24uYWJvdXRzZWN0aW9uIGEge21hcmdpbi1sZWZ0OiA0NSU7fVxuICAgICAgfVxuICAgICAgLmdwbGF5LWltZyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAxNnZ3O1xuICAgICAgfVxuICAgICAgLmdwbGF5LWltZzpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIGRyb3Atc2hhZG93KDhweCA4cHggMTBweCBncmF5KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24sIHNlY3Rpb24uYWJvdXRzZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncGxheS1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ }),

/***/ "./public/logos/applogo.png":
/*!**********************************!*\
  !*** ./public/logos/applogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/applogo-e618d9b2e2703fa34c7367a945f70d44.png";

/***/ }),

/***/ "./src/Footer/index.js":
/*!*****************************!*\
  !*** ./src/Footer/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_logos_developerlogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../static/logos/developerlogo.png */ "./static/logos/developerlogo.png");
/* harmony import */ var _static_logos_developerlogo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_logos_developerlogo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("footer", {
    className: "jsx-2164224879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: "https://gemanepa.com",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Developed by gemanepa.com",
    className: "jsx-2164224879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_developerlogo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "gemanepa",
    className: "jsx-2164224879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2164224879",
    __self: this
  }, "footer.jsx-2164224879{height:30px;background-color:#3f51b5;margin:auto;text-align:center;overflow:hidden;}footer.jsx-2164224879 a.jsx-2164224879 img.jsx-2164224879{margin-top:3px;height:25px;width:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvb3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHdUIsQUFRRyxZQVBVLEdBUWIsWUFDRCxVQVJDLENBU2QsV0FSb0Isa0JBQ0YsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvb3Rlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGV2ZWxvcGVybG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9kZXZlbG9wZXJsb2dvLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dlbWFuZXBhLmNvbVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRGV2ZWxvcGVkIGJ5IGdlbWFuZXBhLmNvbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2RldmVsb3BlcmxvZ299IGFsdD1cImdlbWFuZXBhXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZvb3RlciB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Footer/index.js */"));
}

/***/ }),

/***/ "./src/Form/data.js":
/*!**************************!*\
  !*** ./src/Form/data.js ***!
  \**************************/
/*! exports provided: selects, checkboxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selects", function() { return selects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxes", function() { return checkboxes; });
const selects = [{
  label: 'age',
  name: 'age',
  values: ["30 - 34", "35 - 39", "40 - 44", "45 - 49", "50 - 54", "55 - 59", "60 - 64", "65 - 69", "70 - 74", "75+"]
}, {
  label: 'colesterol_hdl',
  name: 'hdl',
  values: ["< 35.0", "35.0 - 45.9", "46.0 - 49.9", "50.0 - 61.9", "> 62.0"],
  helper: 'mg/dl'
}, {
  label: 'colesterol_ldl',
  name: 'ldl',
  values: ["< 80.0", "80.0 - 135.0", "> 135.0"],
  helper: 'mg/dl'
}, {
  label: 'colesterol_total',
  name: 'totaldl',
  values: ["< 158", "158 - 200", "201 - 239", "240 - 278", "> 278"],
  helper: 'mg/dl'
}, {
  label: 'arterial_pression',
  name: 'ta',
  values: ["< 120", "120 - 129", "130 - 139", "140 - 149", "150 - 159", "160+"],
  helper: 'mmHg'
}, {
  label: 'waist_circumference',
  name: 'wt',
  values: {
    male: ["< 102 (40)", "> 102 (40)", "Unknown"],
    female: ["< 88 (35)", "> 88 (35)", "Unknown"]
  },
  helper: 'cms (inches)'
}];
const checkboxes = [{
  checkboxKey: "smoking"
}, {
  checkboxKey: "diabetes"
}, {
  checkboxKey: "hypertension_in_treatment"
}];

/***/ }),

/***/ "./src/Form/index.js":
/*!***************************!*\
  !*** ./src/Form/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data.js */ "./src/Form/data.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  calcButton: {
    margin: theme.spacing(1),
    width: '40%'
  },
  resetButton: {
    margin: theme.spacing(1)
  }
}));
function Form(props) {
  let {
    translations
  } = props;
  const classes = useStyles(); // Validations

  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    gender: false,
    age: false,
    hdl: false,
    ldl: false,
    totaldl: false,
    ta: false,
    wt: false
  }); //Radio logic

  const [radioVal, setRadioVal] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('');

  function handleRadioChange(event) {
    setErrors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, errors, {
      gender: false
    }));
    setRadioVal(event.target.value);
  } //Selects logic


  const [selectsVals, setSelectsVals] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({});

  const handleSelectChange = event => {
    setErrors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, errors, {
      [event.target.name]: false
    }));
    setSelectsVals(oldValues => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldValues, {
      [event.target.name]: event.target.value
    }));
  }; // Checkbox Logic


  const [checkboxVals, setCheckboxState] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    smoking: false,
    diabetes: false,
    hypertension_in_treatment: false
  });

  const handleCheckboxChange = name => event => {
    setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, checkboxVals, {
      [name]: event.target.checked
    }));
  };

  function validateSubmittedData(data) {
    let failedVal = {
      gender: false,
      age: false,
      hdl: false,
      ldl: false,
      totaldl: false,
      ta: false,
      wt: false
    };

    if (!data.gender) {
      failedVal.gender = true;
    }

    if (!data.age) {
      failedVal.age = true;
    }

    if (!data.hdl) {
      failedVal.hdl = true;
    }

    if (!data.ldl) {
      failedVal.ldl = true;
    }

    if (!data.totaldl) {
      failedVal.totaldl = true;
    }

    if (!data.ta) {
      failedVal.ta = true;
    }

    if (!data.wt) {
      failedVal.wt = true;
    }

    if (!data.gender || !data.age || !data.hdl || !data.ldl || !data.totaldl || !data.ta || !data.wt) {
      setErrors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, failedVal));
      return false;
    } else if (data.diabetes == undefined || data.smoking == undefined || data.treatment == undefined) {
      alert('???');
      return false;
    }

    return true;
  }

  function resetButtonHandler() {
    setRadioVal('');
    setSelectsVals({});
    setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, checkboxVals, {
      smoking: false,
      diabetes: false,
      hypertension_in_treatment: false
    }));
    setErrors({
      gender: false,
      age: false,
      hdl: false,
      ldl: false,
      totald: false,
      ta: false,
      wt: false
    });
    props.resetResults();
  }

  function calcButtonHandler() {
    const data = {
      gender: radioVal,
      age: selectsVals.age,
      hdl: selectsVals.hdl,
      ldl: selectsVals.ldl,
      totaldl: selectsVals.totaldl,
      ta: selectsVals.ta,
      wt: selectsVals.wt,
      diabetes: checkboxVals.diabetes,
      smoking: checkboxVals.smoking,
      treatment: checkboxVals.hypertension_in_treatment
    };

    if (validateSubmittedData(data)) {
      props.datasubmittedHandler(data);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    autoComplete: "off",
    className: "jsx-1873314957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    component: "fieldset",
    className: classes.formControl,
    error: errors.gender,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, translations.gender), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "gender",
    name: "gender",
    value: radioVal,
    onChange: event => handleRadioChange(event),
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1873314957" + " " + ((errors.gender ? 'error' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }),
    label: translations.woman,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }),
    label: translations.man,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })))), _data_js__WEBPACK_IMPORTED_MODULE_15__["selects"].map(select => __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.formControl,
    error: errors[select.name],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    htmlFor: select.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, translations[select.label]), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: selectsVals[select.name],
    onChange: handleSelectChange,
    inputProps: {
      name: select.name,
      id: select.name
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, select.name !== 'wt' && select.values.map(val => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: val,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, val)), select.name == 'wt' && !radioVal && __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Gender required"), select.name == 'wt' && radioVal && select.values[radioVal].map(val => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: val,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, val))), select.helper && __jsx(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, select.helper)), (select.name === 'age' || select.name === 'totaldl' || select.name === 'wt') && __jsx("br", {
    className: "jsx-1873314957" + " " + "desktopOnly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
    row: true,
    className: "checkboxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_15__["checkboxes"].map(checkbox => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onChange: handleCheckboxChange(checkbox.checkboxKey),
      checked: checkboxVals[checkbox.checkboxKey],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }),
    label: translations[checkbox.checkboxKey],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }))), __jsx("br", {
    className: "jsx-1873314957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1873314957" + " " + "formbuttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default.a, {
    onClick: resetButtonHandler,
    variant: "contained",
    color: "secondary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })),  false && false,  false && false)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1873314957",
    __self: this
  }, ".checkboxes.jsx-1873314957{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 auto;}.formbuttons.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.error.jsx-1873314957{color:#ff1744;}@media (min-width:1200px){.mobileOnly.jsx-1873314957{display:none;}}@media (max-width:1199px){.desktopOnly.jsx-1873314957{display:none;}form.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.jsx-1873314957 div.jsx-1873314957{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.checkboxes.jsx-1873314957{margin:0 auto;}.formbuttons.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (max-width:499){.checkboxes.jsx-1873314957{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvcm0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc05nQixBQUd3QyxBQUloQixBQU1ELEFBS0MsQUFLQSxBQUdELEFBTVcsQUFJVCxBQUlELEFBT1MsYUE1QnhCLEFBS0EsQ0FWRixBQXVCRSw0REE3QnFCLEFBbUJHLEFBY1EsSUFPakIscUJBZmYsd0JBN0JnQixjQUNoQixNQUkrQixTQW1CTixBQXFCSSx3QkFQN0IsMkVBYkEsTUFxQkEsU0F4Q0YiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvRm9ybS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xuXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgeyBjaGVja2JveGVzLCBzZWxlY3RzIH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWluV2lkdGg6IDIyMCxcbiAgfSxcbiAgc2VsZWN0RW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGNhbGNCdXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgd2lkdGg6ICc0MCUnXG4gIH0sXG4gIHJlc2V0QnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9XG59KSk7XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgbGV0IHsgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vIFZhbGlkYXRpb25zXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgZ2VuZGVyOiBmYWxzZSxcbiAgICBhZ2U6IGZhbHNlLFxuICAgIGhkbDogZmFsc2UsXG4gICAgbGRsOiBmYWxzZSxcbiAgICB0b3RhbGRsOiBmYWxzZSxcbiAgICB0YTogZmFsc2UsXG4gICAgd3Q6IGZhbHNlXG4gIH0pXG5cbiAgLy9SYWRpbyBsb2dpY1xuICBjb25zdCBbcmFkaW9WYWwsIHNldFJhZGlvVmFsXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgZnVuY3Rpb24gaGFuZGxlUmFkaW9DaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRFcnJvcnMoey4uLmVycm9ycywgZ2VuZGVyOiBmYWxzZX0pXG4gICAgc2V0UmFkaW9WYWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgLy9TZWxlY3RzIGxvZ2ljXG4gIGNvbnN0IFtzZWxlY3RzVmFscywgc2V0U2VsZWN0c1ZhbHNdID0gUmVhY3QudXNlU3RhdGUoeyB9KTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHNldEVycm9ycyh7Li4uZXJyb3JzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBmYWxzZX0pXG4gICAgc2V0U2VsZWN0c1ZhbHMob2xkVmFsdWVzID0+ICh7XG4gICAgICAuLi5vbGRWYWx1ZXMsXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIC8vIENoZWNrYm94IExvZ2ljXG4gIGNvbnN0IFtjaGVja2JveFZhbHMsIHNldENoZWNrYm94U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHNtb2tpbmc6IGZhbHNlLFxuICAgIGRpYWJldGVzOiBmYWxzZSxcbiAgICBoeXBlcnRlbnNpb25faW5fdHJlYXRtZW50OiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gbmFtZSA9PiBldmVudCA9PiB7XG4gICAgc2V0Q2hlY2tib3hTdGF0ZSh7IC4uLmNoZWNrYm94VmFscywgW25hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZVN1Ym1pdHRlZERhdGEoZGF0YSkge1xuICAgIGxldCBmYWlsZWRWYWwgPSB7XG4gICAgICBnZW5kZXI6IGZhbHNlLFxuICAgICAgYWdlOiBmYWxzZSxcbiAgICAgIGhkbDogZmFsc2UsXG4gICAgICBsZGw6IGZhbHNlLFxuICAgICAgdG90YWxkbDogZmFsc2UsXG4gICAgICB0YTogZmFsc2UsXG4gICAgICB3dDogZmFsc2UgIFxuICAgIH1cbiAgICBpZighZGF0YS5nZW5kZXIpIHtmYWlsZWRWYWwuZ2VuZGVyID0gdHJ1ZX1cbiAgICBpZighZGF0YS5hZ2UpIHtmYWlsZWRWYWwuYWdlID0gdHJ1ZX1cbiAgICBpZighZGF0YS5oZGwpIHtmYWlsZWRWYWwuaGRsID0gdHJ1ZX1cbiAgICBpZighZGF0YS5sZGwpIHtmYWlsZWRWYWwubGRsID0gdHJ1ZX1cbiAgICBpZighZGF0YS50b3RhbGRsKSB7ZmFpbGVkVmFsLnRvdGFsZGwgPSB0cnVlfVxuICAgIGlmKCFkYXRhLnRhKSB7ZmFpbGVkVmFsLnRhID0gdHJ1ZX1cbiAgICBpZighZGF0YS53dCkge2ZhaWxlZFZhbC53dCA9IHRydWV9XG5cbiAgICBpZighZGF0YS5nZW5kZXIgfHwgIWRhdGEuYWdlIHx8ICFkYXRhLmhkbCB8fCAhZGF0YS5sZGwgfHwgIWRhdGEudG90YWxkbCB8fCAhZGF0YS50YSB8fCAhZGF0YS53dCkge1xuICAgICAgc2V0RXJyb3JzKHsuLi5mYWlsZWRWYWx9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChkYXRhLmRpYWJldGVzID09IHVuZGVmaW5lZCB8fCBkYXRhLnNtb2tpbmcgPT0gdW5kZWZpbmVkIHx8IGRhdGEudHJlYXRtZW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgYWxlcnQoJz8/PycpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBmdW5jdGlvbiByZXNldEJ1dHRvbkhhbmRsZXIoKSB7XG4gICAgICBzZXRSYWRpb1ZhbCgnJyk7XG4gICAgICBzZXRTZWxlY3RzVmFscyh7IH0pO1xuICAgICAgc2V0Q2hlY2tib3hTdGF0ZSh7IC4uLmNoZWNrYm94VmFscywgc21va2luZzogZmFsc2UsIGRpYWJldGVzOiBmYWxzZSwgaHlwZXJ0ZW5zaW9uX2luX3RyZWF0bWVudDogZmFsc2UgfSk7XG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICBnZW5kZXI6IGZhbHNlLFxuICAgICAgICBhZ2U6IGZhbHNlLFxuICAgICAgICBoZGw6IGZhbHNlLFxuICAgICAgICBsZGw6IGZhbHNlLFxuICAgICAgICB0b3RhbGQ6IGZhbHNlLFxuICAgICAgICB0YTogZmFsc2UsXG4gICAgICAgIHd0OiBmYWxzZSAgXG4gICAgICB9KVxuICAgICAgcHJvcHMucmVzZXRSZXN1bHRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQnV0dG9uSGFuZGxlcigpe1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBnZW5kZXI6IHJhZGlvVmFsLFxuICAgICAgYWdlOiBzZWxlY3RzVmFscy5hZ2UsXG4gICAgICBoZGw6IHNlbGVjdHNWYWxzLmhkbCxcbiAgICAgIGxkbDogc2VsZWN0c1ZhbHMubGRsLFxuICAgICAgdG90YWxkbDogc2VsZWN0c1ZhbHMudG90YWxkbCxcbiAgICAgIHRhOiBzZWxlY3RzVmFscy50YSxcbiAgICAgIHd0OiBzZWxlY3RzVmFscy53dCxcbiAgICAgIGRpYWJldGVzOiBjaGVja2JveFZhbHMuZGlhYmV0ZXMsXG4gICAgICBzbW9raW5nOiBjaGVja2JveFZhbHMuc21va2luZyxcbiAgICAgIHRyZWF0bWVudDogY2hlY2tib3hWYWxzLmh5cGVydGVuc2lvbl9pbl90cmVhdG1lbnRcbiAgICB9XG4gICAgaWYodmFsaWRhdGVTdWJtaXR0ZWREYXRhKGRhdGEpKSB7IHByb3BzLmRhdGFzdWJtaXR0ZWRIYW5kbGVyKGRhdGEpIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICBcbiAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0gZXJyb3I9e2Vycm9ycy5nZW5kZXJ9ID5cbiAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj57dHJhbnNsYXRpb25zLmdlbmRlcn08L0Zvcm1MYWJlbD5cbiAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT17cmFkaW9WYWx9IG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVSYWRpb0NoYW5nZShldmVudCl9IHJvdz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXJyb3JzLmdlbmRlciA/ICdlcnJvcicgOiAnJ30+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmZW1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPXt0cmFuc2xhdGlvbnMud29tYW59IC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtYWxlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD17dHJhbnNsYXRpb25zLm1hbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAge3NlbGVjdHMubWFwKHNlbGVjdCA9PlxuICAgICAgICA8PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IGVycm9yPXtlcnJvcnNbc2VsZWN0Lm5hbWVdfT5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9e3NlbGVjdC5uYW1lfT57dHJhbnNsYXRpb25zW3NlbGVjdC5sYWJlbF19PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0c1ZhbHNbc2VsZWN0Lm5hbWVdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgbmFtZTogc2VsZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdC5uYW1lLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICB7c2VsZWN0Lm5hbWUgIT09ICd3dCcgJiYgc2VsZWN0LnZhbHVlcy5tYXAodmFsID0+IFxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e3ZhbH0+e3ZhbH08L01lbnVJdGVtPlxuICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICB7KHNlbGVjdC5uYW1lID09ICd3dCcgJiYgIXJhZGlvVmFsKSAmJiBcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPScnPkdlbmRlciByZXF1aXJlZDwvTWVudUl0ZW0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KHNlbGVjdC5uYW1lID09ICd3dCcgJiYgcmFkaW9WYWwpICYmIHNlbGVjdC52YWx1ZXNbcmFkaW9WYWxdLm1hcCh2YWwgPT4gXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dmFsfT57dmFsfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAge3NlbGVjdC5oZWxwZXIgJiYgPEZvcm1IZWxwZXJUZXh0PntzZWxlY3QuaGVscGVyfTwvRm9ybUhlbHBlclRleHQ+fVxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgXG4gICAgICAgICAgeyhzZWxlY3QubmFtZSA9PT0gJ2FnZScgfHwgc2VsZWN0Lm5hbWUgPT09ICd0b3RhbGRsJyB8fCBzZWxlY3QubmFtZSA9PT0gJ3d0JykgJiYgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3BPbmx5XCIvPn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8Rm9ybUdyb3VwIHJvdyBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICB7Y2hlY2tib3hlcy5tYXAoY2hlY2tib3ggPT5cbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2UoY2hlY2tib3guY2hlY2tib3hLZXkpfSBjaGVja2VkPXtjaGVja2JveFZhbHNbY2hlY2tib3guY2hlY2tib3hLZXldfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2NoZWNrYm94LmNoZWNrYm94S2V5XX1cbiAgICAgICAgLz4pfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYnV0dG9uc1wiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0QnV0dG9uSGFuZGxlcn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0QnV0dG9ufSA+XG4gICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgeyh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiZcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjYWxjQnV0dG9uSGFuZGxlcn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNldEJ1dHRvbn0+XG4gICAgICAgICAgPFNlbmRJY29uLz5cbiAgICAgICAgPC9CdXR0b24+KX1cblxuICAgICAgICB7KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoID4gMTE5OSAmJlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbGNCdXR0b25IYW5kbGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGNCdXR0b259PlxuICAgICAgICAgIDxTZW5kSWNvbi8+XG4gICAgICAgICAgPC9CdXR0b24+KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2hlY2tib3hlcyB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH07XG4gICAgICAuZm9ybWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6ICNmZjE3NDQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAubW9iaWxlT25seSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuZGVza3RvcE9ubHkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIGRpdiB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3hlcyB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk5KSB7XG4gICAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js */"));
}

/***/ }),

/***/ "./src/FraminghamCalculator/age-points-calc.js":
/*!*****************************************************!*\
  !*** ./src/FraminghamCalculator/age-points-calc.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAgePoints; });
function getAgePoints(age, gender) {
  if (gender === 'male') {
    return calculateMenAgePoints(age);
  } else {
    return calculateWomenAgePoints(age);
  }
}

function calculateMenAgePoints(ageRangeSelected) {
  let agePoints = 0;

  switch (ageRangeSelected) {
    case "30 - 34":
      agePoints = 0;
      break;

    case "35 - 39":
      agePoints = 2;
      break;

    case "40 - 44":
      agePoints = 5;
      break;

    case "45 - 49":
      agePoints = 7;
      break;

    case "50 - 54":
      agePoints = 8;
      break;

    case "55 - 59":
      agePoints = 10;
      break;

    case "60 - 64":
      agePoints = 11;
      break;

    case "65 - 69":
      agePoints = 12;
      break;

    case "70 - 74":
      agePoints = 14;
      break;

    case "75+":
      agePoints = 15;
      break;
  }

  return agePoints;
}

function calculateWomenAgePoints(ageRangeSelected) {
  let agePoints = 0;

  switch (ageRangeSelected) {
    case "30 - 34":
      agePoints = 0;
      break;

    case "35 - 39":
      agePoints = 2;
      break;

    case "40 - 44":
      agePoints = 4;
      break;

    case "45 - 49":
      agePoints = 5;
      break;

    case "50 - 54":
      agePoints = 7;
      break;

    case "55 - 59":
      agePoints = 8;
      break;

    case "60 - 64":
      agePoints = 9;
      break;

    case "65 - 69":
      agePoints = 10;
      break;

    case "70 - 74":
      agePoints = 11;
      break;

    case "75+":
      agePoints = 12;
      break;
  }

  return agePoints;
}

/***/ }),

/***/ "./src/FraminghamCalculator/cvd-calc.js":
/*!**********************************************!*\
  !*** ./src/FraminghamCalculator/cvd-calc.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateCVD; });
function calculateCVD(score, gender) {
  if (gender === 'male') {
    return calculateMenCVD(score);
  } else {
    return calculateWomenCVD(score);
  }
}

function calculateMenCVD(Score) {
  let cvd = "0%";

  switch (Score) {
    case -5:
      cvd = "< 1%";
      break;

    case -4:
      cvd = "< 1%";
      break;

    case -3:
      cvd = "< 1%";
      break;

    case -2:
      cvd = "1.1%";
      break;

    case -1:
      cvd = "1.4%";
      break;

    case 0:
      cvd = "1.6%";
      break;

    case 1:
      cvd = "1.9%";
      break;

    case 2:
      cvd = "2.3%";
      break;

    case 3:
      cvd = "2.8%";
      break;

    case 4:
      cvd = "3.3%";
      break;

    case 5:
      cvd = "3.9%";
      break;

    case 6:
      cvd = "4.7%";
      break;

    case 7:
      cvd = "5.6%";
      break;

    case 8:
      cvd = "6.7%";
      break;

    case 9:
      cvd = "7.9%";
      break;

    case 10:
      cvd = "9.4%";
      break;

    case 11:
      cvd = "11.2%";
      break;

    case 12:
      cvd = "13.3%";
      break;

    case 13:
      cvd = "15.6%";
      break;

    case 14:
      cvd = "18.4%";
      break;

    case 15:
      cvd = "21.6%";
      break;

    case 16:
      cvd = "25.3%";
      break;

    case 17:
      cvd = "29.4%";
      break;

    case 18:
      cvd = "> 30%";
      break;

    case 19:
      cvd = "> 30%";
      break;

    case 20:
      cvd = "> 30%";
      break;

    case 21:
      cvd = "> 30%";
      break;

    case 22:
      cvd = "> 30%";
      break;

    case 23:
      cvd = "> 30%";
      break;

    case 24:
      cvd = "> 30%";
      break;

    case 25:
      cvd = "> 30%";
      break;

    case 26:
      cvd = "> 30%";
      break;
  }

  return cvd;
}

function calculateWomenCVD(Score) {
  let cvd = "0%";

  switch (Score) {
    case -5:
      cvd = "< 1%";
      break;

    case -4:
      cvd = "< 1%";
      break;

    case -3:
      cvd = "< 1%";
      break;

    case -2:
      cvd = "< 1%";
      break;

    case -1:
      cvd = "1.0%";
      break;

    case 0:
      cvd = "1.2%";
      break;

    case 1:
      cvd = "1.5%";
      break;

    case 2:
      cvd = "1.7%";
      break;

    case 3:
      cvd = "2.0%";
      break;

    case 4:
      cvd = "2.4%";
      break;

    case 5:
      cvd = "2.8%";
      break;

    case 6:
      cvd = "3.3%";
      break;

    case 7:
      cvd = "3.9%";
      break;

    case 8:
      cvd = "4.5%";
      break;

    case 9:
      cvd = "5.3%";
      break;

    case 10:
      cvd = "6.3%";
      break;

    case 11:
      cvd = "7.3%";
      break;

    case 12:
      cvd = "8.6%";
      break;

    case 13:
      cvd = "10.0%";
      break;

    case 14:
      cvd = "11.7%";
      break;

    case 15:
      cvd = "13.7%";
      break;

    case 16:
      cvd = "15.9%";
      break;

    case 17:
      cvd = "18.51%";
      break;

    case 18:
      cvd = "21.5%";
      break;

    case 19:
      cvd = "24.8%";
      break;

    case 20:
      cvd = "27.5%";
      break;

    case 21:
      cvd = "> 30%";
      break;

    case 22:
      cvd = "> 30%";
      break;

    case 23:
      cvd = "> 30%";
      break;

    case 24:
      cvd = "> 30%";
      break;

    case 25:
      cvd = "> 30%";
      break;

    case 26:
      cvd = "> 30%";
      break;
  }

  return cvd;
}

/***/ }),

/***/ "./src/FraminghamCalculator/hdl-points-calc.js":
/*!*****************************************************!*\
  !*** ./src/FraminghamCalculator/hdl-points-calc.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHDLPoints; });
function getHDLPoints(hdl, gender) {
  if (gender === 'male') {
    return calculateMenHDLPoints(hdl);
  } else {
    return calculateWomenHDLPoints(hdl);
  }
}

function calculateMenHDLPoints(hdlRangeSelected) {
  let hdlPoints = 0;

  switch (hdlRangeSelected) {
    case "< 35.0":
      hdlPoints = 2;
      break;

    case "35.0 - 45.9":
      hdlPoints = 1;
      break;

    case "46.0 - 49.9":
      hdlPoints = 0;
      break;

    case "50.0 - 61.9":
      hdlPoints = -1;
      break;

    case "> 62.0":
      hdlPoints = -2;
      break;
  }

  return hdlPoints;
}

function calculateWomenHDLPoints(hdlRangeSelected) {
  let hdlPoints = 0;

  switch (hdlRangeSelected) {
    case "< 35.0":
      hdlPoints = 2;
      break;

    case "35.0 - 45.9":
      hdlPoints = 1;
      break;

    case "46.0 - 49.9":
      hdlPoints = 0;
      break;

    case "50.0 - 61.9":
      hdlPoints = -1;
      break;

    case "> 62.0":
      hdlPoints = -2;
      break;
  }

  return hdlPoints;
}

/***/ }),

/***/ "./src/FraminghamCalculator/heartage-calc.js":
/*!***************************************************!*\
  !*** ./src/FraminghamCalculator/heartage-calc.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateHeartAge; });
function calculateHeartAge(score, gender) {
  if (gender === 'male') {
    return calculateMenHeartAge(score);
  } else {
    return calculateWomenHeartAge(score);
  }
}

function calculateMenHeartAge(Score) {
  let heartage = '0%';

  switch (Score) {
    case -5:
      heartage = "< 30";
      break;

    case -4:
      heartage = "< 30";
      break;

    case -3:
      heartage = "< 30";
      break;

    case -2:
      heartage = "< 30";
      break;

    case -1:
      heartage = "< 30";
      break;

    case 0:
      heartage = "30";
      break;

    case 1:
      heartage = "31";
      break;

    case 2:
      heartage = "34";
      break;

    case 3:
      heartage = "36";
      break;

    case 4:
      heartage = "38";
      break;

    case 5:
      heartage = "40";
      break;

    case 6:
      heartage = "42";
      break;

    case 7:
      heartage = "45";
      break;

    case 8:
      heartage = "48";
      break;

    case 9:
      heartage = "51";
      break;

    case 10:
      heartage = "54";
      break;

    case 11:
      heartage = "57";
      break;

    case 12:
      heartage = "60";
      break;

    case 13:
      heartage = "64";
      break;

    case 14:
      heartage = "68";
      break;

    case 15:
      heartage = "72";
      break;

    case 16:
      heartage = "76";
      break;

    case 17:
      heartage = "> 80";
      break;

    case 18:
      heartage = "> 80";
      break;

    case 19:
      heartage = "> 80";
      break;

    case 20:
      heartage = "> 80";
      break;

    case 21:
      heartage = "> 80";
      break;

    case 22:
      heartage = "> 80";
      break;

    case 23:
      heartage = "> 80";
      break;

    case 24:
      heartage = "> 80";
      break;

    case 25:
      heartage = "> 80";
      break;

    case 26:
      heartage = "> 80";
      break;
  }

  return heartage;
}

function calculateWomenHeartAge(Score) {
  let heartage = "0%";

  switch (Score) {
    case -5:
      heartage = "< 30";
      break;

    case -4:
      heartage = "< 30";
      break;

    case -3:
      heartage = "< 30";
      break;

    case -2:
      heartage = "< 30";
      break;

    case -1:
      heartage = "< 30";
      break;

    case 0:
      heartage = "< 30";
      break;

    case 1:
      heartage = "31";
      break;

    case 2:
      heartage = "34";
      break;

    case 3:
      heartage = "36";
      break;

    case 4:
      heartage = "39";
      break;

    case 5:
      heartage = "42";
      break;

    case 6:
      heartage = "45";
      break;

    case 7:
      heartage = "48";
      break;

    case 8:
      heartage = "51";
      break;

    case 9:
      heartage = "55";
      break;

    case 10:
      heartage = "59";
      break;

    case 11:
      heartage = "64";
      break;

    case 12:
      heartage = "68";
      break;

    case 13:
      heartage = "73";
      break;

    case 14:
      heartage = "79";
      break;

    case 15:
      heartage = "> 80";
      break;

    case 16:
      heartage = "> 80";
      break;

    case 17:
      heartage = "> 80";
      break;

    case 18:
      heartage = "> 80";
      break;

    case 19:
      heartage = "> 80";
      break;

    case 20:
      heartage = "> 80";
      break;

    case 21:
      heartage = "> 80";
      break;

    case 22:
      heartage = "> 80";
      break;

    case 23:
      heartage = "> 80";
      break;

    case 24:
      heartage = "> 80";
      break;

    case 25:
      heartage = "> 80";
      break;

    case 26:
      heartage = "> 80";
      break;
  }

  return heartage;
}

/***/ }),

/***/ "./src/FraminghamCalculator/index.js":
/*!*******************************************!*\
  !*** ./src/FraminghamCalculator/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FraminghamCalculator; });
/* harmony import */ var _age_points_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./age-points-calc */ "./src/FraminghamCalculator/age-points-calc.js");
/* harmony import */ var _hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hdl-points-calc */ "./src/FraminghamCalculator/hdl-points-calc.js");
/* harmony import */ var _totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totaldl-points-calc */ "./src/FraminghamCalculator/totaldl-points-calc.js");
/* harmony import */ var _ta_points_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ta-points-calc */ "./src/FraminghamCalculator/ta-points-calc.js");
/* harmony import */ var _smoking_points_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smoking-points-calc */ "./src/FraminghamCalculator/smoking-points-calc.js");
/* harmony import */ var _cvd_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cvd-calc */ "./src/FraminghamCalculator/cvd-calc.js");
/* harmony import */ var _heartage_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heartage-calc */ "./src/FraminghamCalculator/heartage-calc.js");
/* harmony import */ var _risk_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./risk-calc */ "./src/FraminghamCalculator/risk-calc.js");
/* harmony import */ var _needstreatment_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./needstreatment-calc */ "./src/FraminghamCalculator/needstreatment-calc.js");









function FraminghamCalculator(data, translations) {
  const {
    age,
    diabetes,
    gender,
    hdl,
    ldl,
    smoking,
    ta,
    totaldl,
    treatment,
    wt
  } = data; //Points Calculation

  const agePoints = Object(_age_points_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(age, gender);
  const hdlPoints = Object(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__["default"])(hdl, gender);
  const dlPoints = Object(_totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(totaldl, gender);
  const taPoints = Object(_ta_points_calc__WEBPACK_IMPORTED_MODULE_3__["default"])(ta, treatment, gender);
  const smokingPoints = Object(_smoking_points_calc__WEBPACK_IMPORTED_MODULE_4__["default"])(smoking, gender);
  const score = agePoints + hdlPoints + dlPoints + taPoints + smokingPoints; // Framingham Score Calculations

  const cvd = Object(_cvd_calc__WEBPACK_IMPORTED_MODULE_5__["default"])(score, gender);
  const heartage = Object(_heartage_calc__WEBPACK_IMPORTED_MODULE_6__["default"])(score, gender);
  const risklevel = Object(_risk_calc__WEBPACK_IMPORTED_MODULE_7__["default"])(score, gender);
  const needstreatment = Object(_needstreatment_calc__WEBPACK_IMPORTED_MODULE_8__["default"])(gender, diabetes, smoking, ldl, wt, agePoints, hdlPoints, smokingPoints, risklevel, translations);
  console.log('==================================');
  console.log('agePoints');
  console.log(agePoints);
  console.log('hdlPoints');
  console.log(hdlPoints);
  console.log('totalDLPoints');
  console.log(dlPoints);
  console.log('taPoints');
  console.log(taPoints);
  console.log('smokingPoints');
  console.log(smokingPoints);
  console.log('...');
  console.log('cvd');
  console.log(cvd);
  console.log('heartage');
  console.log(heartage);
  console.log('risklevel');
  console.log(risklevel);
  console.log('needstreatment');
  console.log(needstreatment);
  return {
    score: score,
    cvd: cvd,
    heartage: heartage,
    risklevel: translations[risklevel],
    needstreatment: translations[needstreatment]
  };
}

/***/ }),

/***/ "./src/FraminghamCalculator/needstreatment-calc.js":
/*!*********************************************************!*\
  !*** ./src/FraminghamCalculator/needstreatment-calc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return needsTreatment; });
function needsTreatment(gender, diabetes, smoking, ldl, wt, agePoints, hdlPoints, smokingPoints, risklevel) {
  const risklevels = {
    low: risklevelLow(gender, diabetes, agePoints),
    intermediate: risklevelIntermediate(gender, ldl, diabetes, wt, agePoints, hdlPoints, smokingPoints),
    high: risklevelHigh()
  };

  if (risklevel) {
    return risklevels[risklevel];
  }

  return 'unknown';
}

function risklevelLow(gender, diabetes, agePoints) {
  const maleConditional = gender === 'male' && agePoints >= 5 && diabetes;
  const femaleConditional = gender === 'female' && agePoints >= 4 && diabetes;

  if (maleConditional || femaleConditional) {
    return 'treatment_low_diabetes';
  } else {
    return 'patient_not_requires_treatment';
  }
}

function risklevelIntermediate(gender, ldl, diabetes, wt, agePoints, hdlPoints, smokingPoints) {
  const hdl = hdlPoints == 2;
  const smoking = smokingPoints > 1;
  const waist = wt.includes('> 102') || wt.includes('> 88');
  const lowdl = ldl.includes('> 135');
  const maleConditional = gender === 'male' && agePoints >= 8 && (hdl || smoking || diabetes || waist);
  const femaleConditional = gender === 'female' && agePoints >= 9 && (hdl || smoking || diabetes || waist);

  if (maleConditional || femaleConditional) {
    return 'treatment_intermediate_hasfactors';
  } else if (lowdl) {
    return 'treatment_intermediate_ldl';
  } else {
    return 'treatment_intermediate_norisks';
  }
}

function risklevelHigh() {
  return 'patient_highly_requires_treatment';
}

/***/ }),

/***/ "./src/FraminghamCalculator/risk-calc.js":
/*!***********************************************!*\
  !*** ./src/FraminghamCalculator/risk-calc.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateRiskLevel; });
function calculateRiskLevel(score, gender) {
  if (gender === 'male') {
    return calculateMenRiskLevel(score);
  } else {
    return calculateWomenRiskLevel(score);
  }
}

function calculateMenRiskLevel(Score) {
  let risklevel = 'unknown';

  if (Score <= 10) {
    risklevel = 'low';
  } else if (Score >= 11 && Score <= 14) {
    risklevel = 'intermediate';
  } else if (Score >= 15) {
    risklevel = 'high';
  }

  return risklevel;
}

function calculateWomenRiskLevel(Score) {
  let risklevel = 'unknown';

  if (Score <= 12) {
    risklevel = 'low';
  } else if (Score >= 13 && Score <= 17) {
    risklevel = 'intermediate';
  } else if (Score >= 18) {
    risklevel = 'high';
  }

  return risklevel;
}

/***/ }),

/***/ "./src/FraminghamCalculator/smoking-points-calc.js":
/*!*********************************************************!*\
  !*** ./src/FraminghamCalculator/smoking-points-calc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSmokingPoints; });
function getSmokingPoints(smoking, gender) {
  if (!smoking) {
    return 0;
  } else if (smoking && gender === 'male') {
    return 4;
  } else if (smoking && gender === 'female') {
    return 3;
  }
}

/***/ }),

/***/ "./src/FraminghamCalculator/ta-points-calc.js":
/*!****************************************************!*\
  !*** ./src/FraminghamCalculator/ta-points-calc.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTAPoints; });
function getTAPoints(ta, treatment, gender) {
  if (gender === 'male') {
    return calculateMenTAPoints(ta, treatment);
  } else {
    return calculateWomenTAPoints(ta, treatment);
  }
}

function calculateMenTAPoints(taRangeSelected, isOnTreatment) {
  let taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (!isOnTreatment) {
        taPoints = -2;
      }

      if (isOnTreatment) {
        taPoints = 0;
      }

      break;

    case "120 - 129":
      if (!isOnTreatment) {
        taPoints = 0;
      }

      if (isOnTreatment) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (!isOnTreatment) {
        taPoints = 1;
      }

      if (isOnTreatment) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 4;
      }

      break;

    case "150 - 159":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 4;
      }

      break;

    case "160+":
      if (!isOnTreatment) {
        taPoints = 3;
      }

      if (isOnTreatment) {
        taPoints = 5;
      }

      break;
  }

  return taPoints;
}

function calculateWomenTAPoints(taRangeSelected, isOnTreatment) {
  let taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (!isOnTreatment) {
        taPoints = -3;
      }

      if (isOnTreatment) {
        taPoints = -1;
      }

      break;

    case "120 - 129":
      if (!isOnTreatment) {
        taPoints = 0;
      }

      if (isOnTreatment) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (!isOnTreatment) {
        taPoints = 1;
      }

      if (isOnTreatment) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 5;
      }

      break;

    case "150 - 159":
      if (!isOnTreatment) {
        taPoints = 4;
      }

      if (isOnTreatment) {
        taPoints = 6;
      }

      break;

    case "160+":
      if (!isOnTreatment) {
        taPoints = 5;
      }

      if (isOnTreatment) {
        taPoints = 7;
      }

      break;
  }

  return taPoints;
}

/***/ }),

/***/ "./src/FraminghamCalculator/totaldl-points-calc.js":
/*!*********************************************************!*\
  !*** ./src/FraminghamCalculator/totaldl-points-calc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTotalDLPoints; });
function getTotalDLPoints(totaldl, gender) {
  if (gender === 'male') {
    return calculateMenTotalDLPoints(totaldl);
  } else {
    return calculateWomenTotalDLPoints(totaldl);
  }
}

function calculateMenTotalDLPoints(totaldlRangeSelected) {
  let totaldlPoints = 0;

  switch (totaldlRangeSelected) {
    case "< 158":
      totaldlPoints = 0;
      break;

    case "158 - 200":
      totaldlPoints = 1;
      break;

    case "201 - 239":
      totaldlPoints = 2;
      break;

    case "240 - 278":
      totaldlPoints = 3;
      break;

    case "> 278":
      totaldlPoints = 4;
      break;
  }

  return totaldlPoints;
}

function calculateWomenTotalDLPoints(totaldlRangeSelected) {
  let totaldlPoints = 0;

  switch (totaldlRangeSelected) {
    case "< 158":
      totaldlPoints = 0;
      break;

    case "158 - 200":
      totaldlPoints = 1;
      break;

    case "201 - 239":
      totaldlPoints = 3;
      break;

    case "240 - 278":
      totaldlPoints = 4;
      break;

    case "> 278":
      totaldlPoints = 5;
      break;
  }

  return totaldlPoints;
}

/***/ }),

/***/ "./src/Header/index.js":
/*!*****************************!*\
  !*** ./src/Header/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_logos_applogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../public/logos/applogo.png */ "./public/logos/applogo.png");
/* harmony import */ var _public_logos_applogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_logos_applogo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-123233432" + " " + "appHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: _public_logos_applogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "CR Framingham",
    className: "jsx-123233432" + " " + "navlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-123233432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.navbar_title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "123233432",
    __self: this
  }, "@media (max-width:1199px){.navlogo.jsx-123233432{height:85px;width:85px;margin:0 auto;z-index:999;}.appHeader.jsx-123233432{margin-top:-45px;}}@media (min-width:1200px){.navlogo.jsx-123233432{min-height:85px;height:85px;width:85px;margin:0 auto;z-index:999;}.appHeader.jsx-123233432{margin-top:-7vh;}}.navlogo.jsx-123233432:hover{-webkit-filter:brightness(110%);filter:brightness(110%);}h1.jsx-123233432{margin-top:0;font-family:Lato;}.appHeader.jsx-123233432{text-align:center;color:#4689C8;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0hlYWRlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFJdUIsQUFNSyxBQUtELEFBUUEsQUFJTSxBQUdYLEFBSU8sWUE3QlAsQ0EwQkksR0FmSCxBQVFkLENBYkEsQ0F3QmdCLEtBN0JBLEtBV0gsRUFlZixFQUlvQixLQTdCSixFQVdFLFNBbUJoQixDQTdCQSxJQVdjLEdBU2hCLFNBUkUiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvSGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBsb2dvIGZyb20gJy4vLi4vLi4vcHVibGljL2xvZ29zL2FwcGxvZ28ucG5nJzsgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpe1xuICByZXR1cm4oXG4gIDw+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJhcHBIZWFkZXJcIj5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG4gICAgICA8aDE+e3Byb3BzLm5hdmJhcl90aXRsZX08L2gxPlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIH1cbiAgICAgICAgLmFwcEhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC5uYXZsb2dvIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA4NXB4O1xuICAgICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXBwSGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3ZoO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLm5hdmxvZ286aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfTtcbiAgICAgIC5hcHBIZWFkZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9O1xuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Header/index.js */"));
}

/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-has-content */






const NextComposed = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function NextComposed(props, ref) {
  const {
    as,
    href,
    prefetch
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["as", "href", "prefetch"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: href,
    prefetch: prefetch,
    as: as,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
});
NextComposed.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
}; // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["activeClassName", "className", "innerRef", "naked"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const className = clsx__WEBPACK_IMPORTED_MODULE_4___default()(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName
  });

  if (naked) {
    return __jsx(NextComposed, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: className,
      ref: innerRef
    }, other, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }));
  }

  return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: NextComposed,
    className: className,
    ref: innerRef
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
}

Link.propTypes = {
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  naked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef((props, ref) => __jsx(Link, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  innerRef: ref,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}))));

/***/ }),

/***/ "./src/Navbar/index.js":
/*!*****************************!*\
  !*** ./src/Navbar/index.js ***!
  \*****************************/
/*! exports provided: CustomizedMenus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizedMenus", function() { return CustomizedMenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link.js */ "./src/Link.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../static/flags/en-flag.png */ "./static/flags/en-flag.png");
/* harmony import */ var _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../static/flags/es-flag.png */ "./static/flags/es-flag.png");
/* harmony import */ var _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../static/logos/fhslogo.png */ "./static/logos/fhslogo.png");
/* harmony import */ var _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../static/logos/nihlogo.png */ "./static/logos/nihlogo.png");
/* harmony import */ var _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../static/logos/wikipedialogo3.png */ "./static/logos/wikipedialogo3.png");
/* harmony import */ var _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_icons_languages_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../static/icons/languages.png */ "./static/icons/languages.png");
/* harmony import */ var _static_icons_languages_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_icons_languages_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_icons_external_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../static/icons/external.png */ "./static/icons/external.png");
/* harmony import */ var _static_icons_external_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_icons_external_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  langmenuButton: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    boxShadow: 'none'
  }
}));
const StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  elevation: 0,
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  }
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
})));
const StyledMenuItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a);
function CustomizedMenus(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return __jsx("div", {
    className: "jsx-3012982892",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: props.type === 'language' ? "Cambiar idioma" : "Links externos",
    "aria-controls": "customized-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    onClick: handleClick,
    className: classes.langmenuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("img", {
    src: props.type === 'language' ? _static_icons_languages_png__WEBPACK_IMPORTED_MODULE_14___default.a : _static_icons_external_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "",
    className: "jsx-3012982892" + " " + ((props.type === 'language' ? "langmenuimg" : "elinksgmenuimg") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, props.type === 'language' ? __jsx("div", {
    className: "jsx-3012982892",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/?lang=en",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    className: "jsx-3012982892" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19___default.a, {
    primary: "English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))), __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/?lang=es",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    className: "jsx-3012982892" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19___default.a, {
    primary: "Espa\xF1ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })))) : __jsx("div", {
    className: "jsx-3012982892",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.framinghamheartstudy.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Framingham Heart Study",
    className: "jsx-3012982892",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    className: "jsx-3012982892" + " " + "fshlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19___default.a, {
    primary: "FHS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "National Institutes of Health",
    className: "jsx-3012982892",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    className: "jsx-3012982892" + " " + "nihlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19___default.a, {
    primary: "NIH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }))), __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Framingham_Heart_Study",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Wikipedia",
    className: "jsx-3012982892",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    className: "jsx-3012982892" + " " + "wikilogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_19___default.a, {
    primary: "Wikipedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3012982892",
    __self: this
  }, ".langmenuimg.jsx-3012982892:hover,.elinksgmenuimg.jsx-3012982892:hover{-webkit-filter:brightness(120%);filter:brightness(120%);}.fshlogo.jsx-3012982892{height:40px;width:auto;}.nihlogo.jsx-3012982892{height:30px;width:auto;margin-bottom:5px;}.wikilogo.jsx-3012982892{height:31px;width:auto;margin-bottom:3px;}@media (max-width:1199px){.langmenuimg.jsx-3012982892{height:50px;width:auto;}.elinksgmenuimg.jsx-3012982892{height:45px;width:auto;}.navflagsimgs.jsx-3012982892{height:40px;width:auto;}}@media (min-width:1200px){.langmenuimg.jsx-3012982892{height:10vh;min-height:65px;width:auto;}.elinksgmenuimg.jsx-3012982892{height:7vh;width:auto;}.navflagsimgs.jsx-3012982892{height:5.5vh;min-height:35px;margin-top:-0.5vh;width:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySmtCLEFBR21DLEFBR1osQUFLQSxBQU1BLEFBTUUsQUFJQSxBQUlBLEFBTUEsQUFLRCxBQUlFLFdBSEYsQ0FwQ0YsQUFLQSxBQU1BLEFBTUUsQUFJQSxBQUlBLEFBTUssQ0FTQSxTQUhsQixDQXBDRixBQUtvQixBQU1BLEFBTWxCLEFBSUEsQUFJQSxLQU1hLENBU08sVUFScEIsRUExQkYsQUFNQSxNQTZCZSxTQTdDZixFQThDRSIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9OYXZiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rLmpzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgZW5GbGFnIGZyb20gJy4vLi4vLi4vc3RhdGljL2ZsYWdzL2VuLWZsYWcucG5nJztcbmltcG9ydCBlc0ZsYWcgZnJvbSAnLi8uLi8uLi9zdGF0aWMvZmxhZ3MvZXMtZmxhZy5wbmcnO1xuaW1wb3J0IGZoc0xvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvZmhzbG9nby5wbmcnO1xuaW1wb3J0IG5paExvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvbmlobG9nby5wbmcnO1xuaW1wb3J0IHdpa2lwZWRpYUxvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3Mvd2lraXBlZGlhbG9nbzMucG5nJztcbmltcG9ydCBsYW5ndWFnZXNJY29uIGZyb20gJy4vLi4vLi4vc3RhdGljL2ljb25zL2xhbmd1YWdlcy5wbmcnO1xuaW1wb3J0IGV4dGVybmFsSWNvbiBmcm9tICcuLy4uLy4uL3N0YXRpYy9pY29ucy9leHRlcm5hbC5wbmcnXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbGFuZ21lbnVCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3hTaGFkb3c6ICdub25lJ1xuICB9XG59KSk7XG5cbmNvbnN0IFN0eWxlZE1lbnUgPSB3aXRoU3R5bGVzKHtcbiAgcGFwZXI6IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2QzZDRkNScsXG4gIH0sXG59KShwcm9wcyA9PiAoXG4gIDxNZW51XG4gICAgZWxldmF0aW9uPXswfVxuICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cbiAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuXG5jb25zdCBTdHlsZWRNZW51SXRlbSA9IHdpdGhTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmOmZvY3VzJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICcmIC5NdWlMaXN0SXRlbUljb24tcm9vdCwgJiAuTXVpTGlzdEl0ZW1UZXh0LXByaW1hcnknOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKShNZW51SXRlbSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21pemVkTWVudXMocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIHRpdGxlPXtwcm9wcy50eXBlID09PSAnbGFuZ3VhZ2UnID8gXCJDYW1iaWFyIGlkaW9tYVwiIDogXCJMaW5rcyBleHRlcm5vc1wifVxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nbWVudUJ1dHRvbn0+XG4gICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHNyYz17cHJvcHMudHlwZSA9PT0gJ2xhbmd1YWdlJyA/IGxhbmd1YWdlc0ljb24gOiBleHRlcm5hbEljb259XG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy50eXBlID09PSAnbGFuZ3VhZ2UnID8gXCJsYW5nbWVudWltZ1wiIDogXCJlbGlua3NnbWVudWltZ1wifVxuICAgICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICB7IHByb3BzLnR5cGUgPT09ICdsYW5ndWFnZScgP1xuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVuJyBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPFN0eWxlZE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZW5GbGFnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuYXZmbGFnc2ltZ3NcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZXMnIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFc3Bhw7FvbFwiIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJhbWluZ2hhbWhlYXJ0c3R1ZHkub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIkZyYW1pbmdoYW0gSGVhcnQgU3R1ZHlcIj5cbiAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIGNsYXNzTmFtZT1cImZzaGxvZ29cIiAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGSFNcIiAvPlxuICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxTdHlsZWRNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmlobG9nb1wiIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk5JSFwiIC8+XG4gICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxTdHlsZWRNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17d2lraXBlZGlhTG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPVwid2lraWxvZ29cIiAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJXaWtpcGVkaWFcIiAvPlxuICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYW5nbWVudWltZzpob3ZlciwgLmVsaW5rc2dtZW51aW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmZzaGxvZ28ge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uaWhsb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndpa2lsb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAubGFuZ21lbnVpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbGlua3NnbWVudWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmZsYWdzaW1ncyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIC5sYW5nbWVudWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbGlua3NnbWVudWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDd2aDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICAgIGhlaWdodDogNS41dmg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuNXZoO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuZnVuY3Rpb24gTW9iaWxlQmFyKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDdXN0b21pemVkTWVudXMgdHlwZT1cImxhbmd1YWdlXCIvPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuICAgICAgPEN1c3RvbWl6ZWRNZW51cyB0eXBlPVwiZWxpbmtzXCIvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPVwidG9vbGJhclwiPlxuICAgICAgICAgIDxNb2JpbGVCYXIgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function MobileBar() {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(CustomizedMenus, {
    type: "language",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx(CustomizedMenus, {
    type: "elinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }));
}

function NavBar() {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(MobileBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/i18n lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./src/i18n lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": [
		"./src/i18n/en.json",
		0
	],
	"./es.json": [
		"./src/i18n/es.json",
		1
	],
	"./head.json": [
		"./src/i18n/head.json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/i18n lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/i18n/head.json":
/*!****************************!*\
  !*** ./src/i18n/head.json ***!
  \****************************/
/*! exports provided: en, es, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"appname\":\"Framingham CardioRisk\",\"description\":\"Framingham CR calculates the risk of suffering cardiovascular events in 10 years\",\"keywords\":\"framingham, calculator, risk, score, heart, cardiovascular, coronary, disease, study, calculation\",\"title\":\"Framingham CardioVascular Risk Score Calculator\"},\"es\":{\"appname\":\"CardioRiesgo Framingham\",\"description\":\"La Escala de Framingham permite determinar el riesgo de padecer cualquier evento cardiovascular en 10 años\",\"keywords\":\"framingham, calculadora, riesgo, corazon, coronario, enfermedad, cardiovascular, calculo\",\"title\":\"Framingham Calculadora Riesgo CardioVascular\"}}");

/***/ }),

/***/ "./static/flags/en-flag.png":
/*!**********************************!*\
  !*** ./static/flags/en-flag.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/en-flag-e5fbe0047ec3e9964d4b9392abd3ecaa.png";

/***/ }),

/***/ "./static/flags/es-flag.png":
/*!**********************************!*\
  !*** ./static/flags/es-flag.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/es-flag-78cf618501c4ffc5e46113d83f4cc9e1.png";

/***/ }),

/***/ "./static/icons/external.png":
/*!***********************************!*\
  !*** ./static/icons/external.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/icons/languages.png":
/*!************************************!*\
  !*** ./static/icons/languages.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/languages-73e3ab59751b8dd4bf5c6c8be3335e21.png";

/***/ }),

/***/ "./static/logos/developerlogo.png":
/*!****************************************!*\
  !*** ./static/logos/developerlogo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/developerlogo-e7cfdc36f20b6fb3975b90c2f18e9c37.png";

/***/ }),

/***/ "./static/logos/fhslogo.png":
/*!**********************************!*\
  !*** ./static/logos/fhslogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fhslogo-24475f4e99e754583910b3cc94c2ca59.png";

/***/ }),

/***/ "./static/logos/nihlogo.png":
/*!**********************************!*\
  !*** ./static/logos/nihlogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/logos/wikipedialogo3.png":
/*!*****************************************!*\
  !*** ./static/logos/wikipedialogo3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wikipedialogo3-9b29d7ca430a73d6fb352dec32f4e61f.png";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Link":
/*!******************************************!*\
  !*** external "@material-ui/icons/Link" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Link");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map