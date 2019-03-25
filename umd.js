(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lit-element-test", [], factory);
	else if(typeof exports === 'object')
		exports["lit-element-test"] = factory();
	else
		root["lit-element-test"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult =
/*#__PURE__*/
function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  _createClass(CSSResult, [{
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }, {
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
        // is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }]);

  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */


var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, query, queryAll, eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

var standardCustomElement = function standardCustomElement(tagName, descriptor) {
  var kind = descriptor.kind,
      elements = descriptor.elements;
  return {
    kind: kind,
    elements: elements,
    // This callback is called once the class is otherwise fully defined
    finisher: function finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */


var customElement = function customElement(tagName) {
  return function (classOrDescriptor) {
    return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
};

var standardProperty = function standardProperty(options, element) {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign({}, element, {
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      // tslint:disable-next-line:no-any decorator
      initializer: function initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};

var legacyProperty = function legacyProperty(options, proto, name) {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */

function query(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */

function queryAll(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelectorAll(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

var legacyQuery = function legacyQuery(descriptor, proto, name) {
  Object.defineProperty(proto, name, descriptor);
};

var standardQuery = function standardQuery(descriptor, element) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor: descriptor
  };
};

var standardEventOptions = function standardEventOptions(options, element) {
  return Object.assign({}, element, {
    finisher: function finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }
  });
};

var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options, proto, name) {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */


var eventOptions = function eventOptions(options) {
  return (// Return value typed as any to prevent TypeScript from complaining that
    // standard decorator function signature does not match TypeScript decorator
    // signature
    // TODO(kschaaf): unclear why it was only failing on this decorator and not
    // the others
    function (protoOrDescriptor, name) {
      return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
    }
  );
};

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var microtaskPromise = Promise.resolve(true);
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */

var UpdatingElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  function UpdatingElement() {
    var _this;

    _classCallCheck(this, UpdatingElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdatingElement).call(this));
    _this._updateState = 0;
    _this._instanceProperties = undefined;
    _this._updatePromise = microtaskPromise;
    _this._hasConnectedResolver = undefined;
    /**
     * Map with keys for any properties that have changed since the last
     * update cycle with previous values.
     */

    _this._changedProperties = new Map();
    /**
     * Map with keys of properties that should be reflected when updated.
     */

    _this._reflectingProperties = undefined;

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      this._saveInstanceProperties(); // ensures first update will be caught by an early access of `updateComplete`


      this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this2 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this2.hasOwnProperty(p)) {
          var value = _this2[p];
          delete _this2[p];

          if (!_this2._instanceProperties) {
            _this2._instanceProperties = new Map();
          }

          _this2._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this3[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure first connection completes an update. Updates cannot complete before
      // connection and if one is pending connection the `_hasConnectionResolver`
      // will exist. If so, resolve it to complete the update, otherwise
      // requestUpdate.

      if (this._hasConnectedResolver) {
        this._hasConnectedResolver();

        this._hasConnectedResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor;

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "_requestUpdate",
    value: function _requestUpdate(name, oldValue) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this._requestUpdate(name, oldValue);

      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this4 = this;

        var resolve, reject, previousUpdatePromise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Mark state updating...
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                previousUpdatePromise = this._updatePromise;
                this._updatePromise = new Promise(function (res, rej) {
                  resolve = res;
                  reject = rej;
                });
                _context.prev = 3;
                _context.next = 6;
                return previousUpdatePromise;

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);

              case 10:
                if (this._hasConnected) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return new Promise(function (res) {
                  return _this4._hasConnectedResolver = res;
                });

              case 13:
                _context.prev = 13;
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return result;

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](13);
                reject(_context.t1);

              case 23:
                resolve(!this._hasRequestedUpdate);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8], [13, 20]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "performUpdate",

    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    value: function performUpdate() {
      // Mixin instance properties once, if they exist.
      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false;
        throw e;
      } finally {
        // Ensure element can accept additional updates after an exception.
        this._markUpdated();
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "shouldUpdate",

    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

        this._reflectingProperties = undefined;
      }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }, {
    key: "_hasConnected",
    get: function get() {
      return this._updateState & STATE_HAS_CONNECTED;
    }
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._updatePromise;
    }
  }], [{
    key: "_ensureClassProperties",

    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */
    value: function _ensureClassProperties() {
      var _this6 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this6._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      Object.defineProperty(this.prototype, name, {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          // tslint:disable-next-line:no-any no symbol in index
          var oldValue = this[name]; // tslint:disable-next-line:no-any no symbol in index

          this[key] = value;

          this._requestUpdate(name, oldValue);
        },
        configurable: true,
        enumerable: true
      });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
        return;
      } // finalize any superclasses


      var superCtor = Object.getPrototypeOf(this);

      if (typeof superCtor.finalize === 'function') {
        superCtor.finalize();
      }

      this.finalized = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this7 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this7._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this7._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
  }]);

  return UpdatingElement;
}(_wrapNativeSuper(HTMLElement));
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement.finalized = true;

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: html, svg, TemplateResult, SVGTemplateResult, LitElement, defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */







 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.0.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */

function arrayFlat(styles) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var i = 0, length = styles.length; i < length; i++) {
    var value = styles[i];

    if (Array.isArray(value)) {
      arrayFlat(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
}
/** Deeply flattens styles array. Uses native flat if available. */


var flattenStyles = function flattenStyles(styles) {
  return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
};

var LitElement =
/*#__PURE__*/
function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
  }

  _createClass(LitElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open'
      });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it.
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);

      var templateResult = this.render();

      if (templateResult instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */

  }, {
    key: "render",
    value: function render() {}
  }], [{
    key: "finalize",

    /** @nocollapse */
    value: function finalize() {
      _get(_getPrototypeOf(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
      // is built from user provided `styles` or is inherited from the superclass.


      this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Take care not to call `this.styles` multiple times since this generates
      // new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.
      var userStyles = this.styles;
      var styles = [];

      if (Array.isArray(userStyles)) {
        var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
        // occur especially when composing via subclassing, de-duplicate styles
        // preserving the last item in the list. The last item is kept to
        // try to preserve cascade order with the assumption that it's most
        // important that last added styles override previous styles.

        var styleSet = flatStyles.reduceRight(function (set, s) {
          set.add(s); // on IE set.add does not return the set.

          return set;
        }, new Set()); // Array.from does not work on Set in IE

        styleSet.forEach(function (v) {
          return styles.unshift(v);
        });
      } else if (userStyles) {
        styles.push(userStyles);
      }

      return styles;
    }
  }]);

  return LitElement;
}(_lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */

LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */

LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__["render"];

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

var DefaultTemplateProcessor =
/*#__PURE__*/
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);

        return _comitter.parts;
      }

      if (prefix === '@') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
      }

      var comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
      return comitter.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var node = start;

  while (node !== end) {
    var n = node.nextSibling;
    container.insertBefore(node, before);
    node = n;
  }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */

var removeNodes = function removeNodes(container, startNode) {
  var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var node = startNode;

  while (node !== endNode) {
    var n = node.nextSibling;
    container.removeChild(node);
    node = n;
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module shady-render
 */

var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */






var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */

var AttributeCommitter =
/*#__PURE__*/
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];

        if (part !== undefined) {
          var v = part.value;

          if (v != null && (Array.isArray(v) || // tslint:disable-next-line:no-any
          typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            text += typeof v === 'string' ? v : String(v);
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
var AttributePart =
/*#__PURE__*/
function () {
  function AttributePart(comitter) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = comitter;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
        var directive = this.value;
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
var NodePart =
/*#__PURE__*/
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this._pendingValue = undefined;
    this.options = options;
  }
  /**
   * Inserts this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
      this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      part._insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      var value = this._pendingValue;

      if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this._commitText(value);
        }
      } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
        this._commitTemplateResult(value);
      } else if (value instanceof Node) {
        this._commitNode(value);
      } else if (Array.isArray(value) || // tslint:disable-next-line:no-any
      value[Symbol.iterator]) {
        this._commitIterable(value);
      } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
        this.clear();
      } else {
        // Fallback, will render the string representation
        this._commitText(value);
      }
    }
  }, {
    key: "_insert",
    value: function _insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "_commitNode",
    value: function _commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this._insert(value);

      this.value = value;
    }
  }, {
    key: "_commitText",
    value: function _commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value;

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = value;
        } else {
        this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
      }

      this.value = value;
    }
  }, {
    key: "_commitTemplateResult",
    value: function _commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this._commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "_commitIterable",
    value: function _commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart =
/*#__PURE__*/
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this._pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var value = !!this._pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }
      }

      this.value = value;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter =
/*#__PURE__*/
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // tslint:disable-next-line:no-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
/*#__PURE__*/
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false;

try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart =
/*#__PURE__*/
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this._pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this._boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var newListener = this._pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
      }

      if (shouldAddListener) {
        this._options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
      }

      this.value = newListener;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */



var parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







 // Get a key to lookup in `templateCaches`.

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected." + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and" + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_6__["marker"]);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new _template_js__WEBPACK_IMPORTED_MODULE_6__["Template"](result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};

var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
  shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work

  if (styles.length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < styles.length; i++) {
    var style = styles[i];
    style.parentNode.removeChild(style);
    condensedStyle.textContent += style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, template.element.content.firstChild); // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).

  window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);

  if (window.ShadyCSS.nativeShadow) {
    // When in native Shadow DOM, re-add styling to rendered content using
    // the style ShadyCSS produced.
    var _style = template.element.content.querySelector('style');

    renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
  } else {
    // When not in native Shadow DOM, at this point ShadyCSS will have
    // removed the style from the lit template and parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render = function render(result, container, options) {
  var scopeName = options.scopeName;
  var hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
  var needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_5__["TemplateResult"]; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);

    if (part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"]) {
      prepareTemplateStyles(renderContainer, part.value.template, scopeName);
    }

    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    container.appendChild(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance =
/*#__PURE__*/
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this._parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var _this = this;

      // When using the Custom Elements polyfill, clone the node, rather than
      // importing it, to keep the fragment in the template's document. This
      // leaves the fragment inert so custom elements won't upgrade and
      // potentially modify their contents by creating a polyfilled ShadowRoot
      // while we traverse the tree.
      var fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var parts = this.template.parts;
      var partIndex = 0;
      var nodeIndex = 0;

      var _prepareInstance = function _prepareInstance(fragment) {
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length && node !== null) {
          var part = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
          // multiple bound attributes on an element. So each iteration we either
          // increment the nodeIndex, if we aren't on a node with a part, or the
          // partIndex if we are. By not incrementing the nodeIndex when we find a
          // part, we allow for the next part to be associated with the current
          // node if neccessasry.

          if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
            _this._parts.push(undefined);

            partIndex++;
          } else if (nodeIndex === part.index) {
            if (part.type === 'node') {
              var _part2 = _this.processor.handleTextExpression(_this.options);

              _part2.insertAfterNode(node.previousSibling);

              _this._parts.push(_part2);
            } else {
              var _this$_parts;

              (_this$_parts = _this._parts).push.apply(_this$_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
            }

            partIndex++;
          } else {
            nodeIndex++;

            if (node.nodeName === 'TEMPLATE') {
              _prepareInstance(node.content);
            }

            node = walker.nextNode();
          }
        }
      };

      _prepareInstance(fragment);

      if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var endIndex = this.strings.length - 1;
      var html = '';

      for (var i = 0; i < endIndex; i++) {
        var s = this.strings[i]; // This exec() call does two things:
        // 1) Appends a suffix to the bound attribute name to opt out of special
        // attribute value parsing that IE11 and Edge do, like for style and
        // many SVG attributes. The Template class also appends the same suffix
        // when looking up attributes to create Parts.
        // 2) Adds an unquoted-attribute-safe marker for the first expression in
        // an attribute. Subsequent attribute expressions will use node markers,
        // and this is safe since attributes with multiple expressions are
        // guaranteed to be quoted.

        var match = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

        if (match) {
          // We're starting a new bound attribute.
          // Add the safe attribute suffix, and use unquoted-attribute-safe
          // marker.
          html += s.substr(0, match.index) + match[1] + match[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + match[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
        } else {
          // We're either in a bound node, or trailing bound attribute.
          // Either way, nodeMarker is safe to use.
          html += s + _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"];
        }
      }

      return html + this.strings[endIndex];
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

var SVGTemplateResult =
/*#__PURE__*/
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  var _this = this;

  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var index = -1;
  var partIndex = 0;
  var nodesToRemove = [];

  var _prepareTemplate = function _prepareTemplate(template) {
    var content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
    // null

    var walker = document.createTreeWalker(content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;

    while (walker.nextNode()) {
      index++;
      var node = walker.currentNode;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondance between part index and attribute index.

            var count = 0;

            for (var i = 0; i < attributes.length; i++) {
              if (attributes[i].value.indexOf(marker) >= 0) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = result.strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              var strings = attributeValue.split(markerRegex);

              _this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: strings
              });

              node.removeAttribute(attributeLookupName);
              partIndex += strings.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            _prepareTemplate(node);
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);

              _this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;

            _this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.


            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              _this.parts.push({
                type: 'node',
                index: -1
              });
            }
          }
        }
    }
  };

  _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker


  var _arr = nodesToRemove;

  for (var _i3 = 0; _i3 < _arr.length; _i3++) {
    var n = _arr[_i3];
    n.parentNode.removeChild(n);
  }
};
var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

var svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: MyElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyElement", function() { return MyElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["<p>", "</p>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */

var MyElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('my-element')], function (_initialize, _LitElement) {
  var MyElement =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MyElement, _LitElement2);

    function MyElement() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MyElement);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyElement)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MyElement;
  }(_LitElement);

  return {
    F: MyElement,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: String
      })],
      key: "foo",
      value: function value() {
        return 'foo';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Create an observed property. Triggers update on change.
       */

      /**
       * Implement `render` to define a template for your element.
       */
      function render() {
        /**
         * Use JavaScript expressions to include property values in
         * the element template.
         */
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.foo);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXQtZWxlbWVudC10ZXN0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9saXQtZWxlbWVudC10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL2Nzcy10YWcudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL3VwZGF0aW5nLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC9zcmMvbGl0LWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi4vc3JjL2xpYi9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL2RvbS50cyIsIndlYnBhY2s6Ly9saXQtZWxlbWVudC10ZXN0Ly4uL3NyYy9saWIvbW9kaWZ5LXRlbXBsYXRlLnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi4vc3JjL2xpYi9wYXJ0cy50cyIsIndlYnBhY2s6Ly9saXQtZWxlbWVudC10ZXN0Ly4uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi4vc3JjL2xpYi9zaGFkeS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL3RlbXBsYXRlLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi4vc3JjL2xpYi90ZW1wbGF0ZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vbGl0LWVsZW1lbnQtdGVzdC8uLi9zcmMvbGliL3RlbXBsYXRlLnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3Qvc3JjL2xpdC1odG1sLnRzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL2xpdC1lbGVtZW50LXRlc3QvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJydW50aW1lIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJkb25lIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwidG9TdHJpbmciLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJrZXkiLCJyZXZlcnNlIiwibGVuZ3RoIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImwiLCJNeUVsZW1lbnQiLCJjdXN0b21FbGVtZW50IiwicHJvcGVydHkiLCJTdHJpbmciLCJodG1sIiwiZm9vIiwiTGl0RWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtB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QUFNLENBQUM4SSxlQUFQLEdBQXlCLENBQXpCO0FBQ0E7O0FBQ0QsU0FBTzlJLE1BQVA7QUFDQSxDQXJCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUlBO0FBSUE7Ozs7O0FBS08sSUFBTXNKLFNBQWIsY0FEQ0MsaUVBQWEsQ0FBQyxZQUFELENBQ2Q7QUFBQSxNQUFhRCxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLE9BQWFBLFNBQWI7QUFBQTtBQUFBO0FBQUEsbUJBS0tFLDREQUFRLENBQUM7QUFBQ3JILFlBQUksRUFBRXNIO0FBQVAsT0FBRCxDQUxiO0FBQUE7QUFBQTtBQUFBLGVBTVUsS0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSTs7OztBQU1BOzs7QUFHQSx3QkFBUztBQUNMOzs7O0FBSUEsZUFBT0Msd0RBQVAsb0JBQWlCLEtBQUtDLEdBQXRCO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLEdBQStCQyxzREFBL0IsRSIsImZpbGUiOiJ1bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImxpdC1lbGVtZW50LXRlc3RcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGl0LWVsZW1lbnQtdGVzdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsaXQtZWxlbWVudC10ZXN0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTkgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyA9XG4gICAgKCdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSkgJiZcbiAgICAoJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlKTtcblxuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcblxuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gIF9zdHlsZVNoZWV0PzogQ1NTU3R5bGVTaGVldHxudWxsO1xuXG4gIHJlYWRvbmx5IGNzc1RleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjc3NUZXh0OiBzdHJpbmcsIHNhZmVUb2tlbjogc3ltYm9sKSB7XG4gICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgfVxuXG4gIC8vIE5vdGUsIHRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zXG4gIC8vIHN0eWxlc2hlZXRzIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICBnZXQgc3R5bGVTaGVldCgpOiBDU1NTdHlsZVNoZWV0fG51bGwge1xuICAgIGlmICh0aGlzLl9zdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vdGUsIGlmIGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIHN1cHBvcnRlZCB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0XG4gICAgICAvLyBpcyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldC5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICB9XG59XG5cbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEgY3NzIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWU6IHVua25vd24pID0+IHtcbiAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcblxuY29uc3QgdGV4dEZyb21DU1NSZXN1bHQgPSAodmFsdWU6IENTU1Jlc3VsdCkgPT4ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDU1NSZXN1bHQpIHtcbiAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogJHtcbiAgICAgICAgICAgIHZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXRcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUZW1wbGF0ZSB0YWcgd2hpY2ggd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3MgYHN0eWxlYCBwcm9wZXJ0eSB0b1xuICogc2V0IGVsZW1lbnQgc3R5bGVzLiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsIHN0cmluZyB2YWx1ZXMgbWF5IGJlXG4gKiB1c2VkLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMgYHVuc2FmZUNTU2AgbWF5IGJlIHVzZWQgaW5zaWRlIGFcbiAqIHRlbXBsYXRlIHN0cmluZyBwYXJ0LlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IENTU1Jlc3VsdFtdKSA9PiB7XG4gIGNvbnN0IGNzc1RleHQgPSB2YWx1ZXMucmVkdWNlKFxuICAgICAgKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sXG4gICAgICBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoY3NzVGV4dCwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtMaXRFbGVtZW50fSBmcm9tICcuLi9saXQtZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7UHJvcGVydHlEZWNsYXJhdGlvbiwgVXBkYXRpbmdFbGVtZW50fSBmcm9tICcuL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuXG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IHtcbiAgbmV3ICguLi5hcmdzOiB1bmtub3duW10pOiBUXG59O1xuXG4vLyBGcm9tIHRoZSBUQzM5IERlY29yYXRvcnMgcHJvcG9zYWxcbmludGVyZmFjZSBDbGFzc0Rlc2NyaXB0b3Ige1xuICBraW5kOiAnY2xhc3MnO1xuICBlbGVtZW50czogQ2xhc3NFbGVtZW50W107XG4gIGZpbmlzaGVyPzogPFQ+KGNsYXp6OiBDb25zdHJ1Y3RvcjxUPikgPT4gdW5kZWZpbmVkIHwgQ29uc3RydWN0b3I8VD47XG59XG5cbi8vIEZyb20gdGhlIFRDMzkgRGVjb3JhdG9ycyBwcm9wb3NhbFxuaW50ZXJmYWNlIENsYXNzRWxlbWVudCB7XG4gIGtpbmQ6ICdmaWVsZCd8J21ldGhvZCc7XG4gIGtleTogUHJvcGVydHlLZXk7XG4gIHBsYWNlbWVudDogJ3N0YXRpYyd8J3Byb3RvdHlwZSd8J293bic7XG4gIGluaXRpYWxpemVyPzogRnVuY3Rpb247XG4gIGV4dHJhcz86IENsYXNzRWxlbWVudFtdO1xuICBmaW5pc2hlcj86IDxUPihjbGF6ejogQ29uc3RydWN0b3I8VD4pID0+IHVuZGVmaW5lZCB8IENvbnN0cnVjdG9yPFQ+O1xuICBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yO1xufVxuXG5jb25zdCBsZWdhY3lDdXN0b21FbGVtZW50ID1cbiAgICAodGFnTmFtZTogc3RyaW5nLCBjbGF6ejogQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAgIC8vIENhc3QgYXMgYW55IGJlY2F1c2UgVFMgZG9lc24ndCByZWNvZ25pemUgdGhlIHJldHVybiB0eXBlIGFzIGJlaW5nIGFcbiAgICAgIC8vIHN1YnR5cGUgb2YgdGhlIGRlY29yYXRlZCBjbGFzcyB3aGVuIGNsYXp6IGlzIHR5cGVkIGFzXG4gICAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBpcyBoZWxwZnVsIHRvIG1ha2Ugc3VyZSB0aGUgZGVjb3JhdG9yIGlzXG4gICAgICAvLyBhcHBsaWVkIHRvIGVsZW1lbnRzIGhvd2V2ZXIuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICByZXR1cm4gY2xhenogYXMgYW55O1xuICAgIH07XG5cbmNvbnN0IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCA9XG4gICAgKHRhZ05hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogQ2xhc3NEZXNjcmlwdG9yKSA9PiB7XG4gICAgICBjb25zdCB7a2luZCwgZWxlbWVudHN9ID0gZGVzY3JpcHRvcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQsXG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAvLyBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmNlIHRoZSBjbGFzcyBpcyBvdGhlcndpc2UgZnVsbHkgZGVmaW5lZFxuICAgICAgICBmaW5pc2hlcihjbGF6ejogQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+KSB7XG4gICAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lIHRoZSBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmVcbiAqL1xuZXhwb3J0IGNvbnN0IGN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZTogc3RyaW5nKSA9PlxuICAgIChjbGFzc09yRGVzY3JpcHRvcjogQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+fENsYXNzRGVzY3JpcHRvcikgPT5cbiAgICAgICAgKHR5cGVvZiBjbGFzc09yRGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgIGxlZ2FjeUN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpIDpcbiAgICBzdGFuZGFyZEN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpO1xuXG5jb25zdCBzdGFuZGFyZFByb3BlcnR5ID1cbiAgICAob3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiwgZWxlbWVudDogQ2xhc3NFbGVtZW50KSA9PiB7XG4gICAgICAvLyBXaGVuIGRlY29yYXRpbmcgYW4gYWNjZXNzb3IsIHBhc3MgaXQgdGhyb3VnaCBhbmQgYWRkIHByb3BlcnR5IG1ldGFkYXRhLlxuICAgICAgLy8gTm90ZSwgdGhlIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaW4gYGNyZWF0ZVByb3BlcnR5YCBlbnN1cmVzIHdlIGRvbid0XG4gICAgICAvLyBzdG9tcCBvdmVyIHRoZSB1c2VyJ3MgYWNjZXNzb3IuXG4gICAgICBpZiAoZWxlbWVudC5raW5kID09PSAnbWV0aG9kJyAmJiBlbGVtZW50LmRlc2NyaXB0b3IgJiZcbiAgICAgICAgICAhKCd2YWx1ZScgaW4gZWxlbWVudC5kZXNjcmlwdG9yKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgZmluaXNoZXIoY2xheno6IHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAga2V5OiBTeW1ib2woKSxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgIGRlc2NyaXB0b3I6IHt9LFxuICAgICAgICAgIC8vIFdoZW4gQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1kZWNvcmF0b3JzIGltcGxlbWVudHMgaW5pdGlhbGl6ZXJzLFxuICAgICAgICAgIC8vIGRvIHRoaXMgaW5zdGVhZCBvZiB0aGUgaW5pdGlhbGl6ZXIgYmVsb3cuIFNlZTpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzkyNjAgZXh0cmFzOiBbXG4gICAgICAgICAgLy8gICB7XG4gICAgICAgICAgLy8gICAgIGtpbmQ6ICdpbml0aWFsaXplcicsXG4gICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgLy8gICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgICBpbml0aWFsaXplcih0aGlzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5pbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzW2VsZW1lbnQua2V5XSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpbmlzaGVyKGNsYXp6OiB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID1cbiAgICAob3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiwgcHJvdG86IE9iamVjdCwgbmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIChwcm90by5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KVxuICAgICAgICAgIC5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICB9O1xuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSBMaXRFbGVtZW50IHByb3BlcnR5IHdoaWNoIHJlZmxlY3RzIGFcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBBIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCBtYXkgb3B0aW9uYWxseSBiZVxuICogc3VwcGxpZWQgdG8gY29uZmlndXJlIHByb3BlcnR5IGZlYXR1cmVzLlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvcjogT2JqZWN0fENsYXNzRWxlbWVudCwgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+XG4gICAgICAgICAgICAgKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgbGVnYWN5UHJvcGVydHkob3B0aW9ucyEsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgc3RhbmRhcmRQcm9wZXJ0eShvcHRpb25zISwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbn1cblxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgICAgICAgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IExpdEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlclxuICogdGhhdCBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3JBbGwgb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgICAgICAgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IExpdEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbiAgfTtcbn1cblxuY29uc3QgbGVnYWN5UXVlcnkgPVxuICAgIChkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIHByb3RvOiBPYmplY3QsIG5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH07XG5cbmNvbnN0IHN0YW5kYXJkUXVlcnkgPSAoZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLCBlbGVtZW50OiBDbGFzc0VsZW1lbnQpID0+XG4gICAgKHtcbiAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgIH0pO1xuXG5jb25zdCBzdGFuZGFyZEV2ZW50T3B0aW9ucyA9XG4gICAgKG9wdGlvbnM6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLCBlbGVtZW50OiBDbGFzc0VsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6OiB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgY2xhenoucHJvdG90eXBlW2VsZW1lbnQua2V5IGFzIGtleW9mIFVwZGF0aW5nRWxlbWVudF0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbmNvbnN0IGxlZ2FjeUV2ZW50T3B0aW9ucyA9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBsZWdhY3kgZGVjb3JhdG9yXG4gICAgKG9wdGlvbnM6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLCBwcm90bzogYW55LCBuYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihwcm90b1tuYW1lXSwgb3B0aW9ucyk7XG4gICAgfTtcblxuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgdG8gYSBtZXRob2QgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lciBpbiBhXG4gKiBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgdGhhdCBzcGVjaWZpcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQge1xuICpcbiAqICAgICAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqXG4gKiAgICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPSR7dGhpcy5fb25DbGlja31gPjxidXR0b24+PC9idXR0b24+PC9kaXY+YDtcbiAqICAgICAgIH1cbiAqXG4gKiAgICAgICBAZXZlbnRPcHRpb25zKHtjYXB0dXJlOiB0cnVlfSlcbiAqICAgICAgIF9vbkNsaWNrKGUpIHtcbiAqICAgICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKi9cbmV4cG9ydCBjb25zdCBldmVudE9wdGlvbnMgPSAob3B0aW9uczogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpID0+XG4gICAgLy8gUmV0dXJuIHZhbHVlIHR5cGVkIGFzIGFueSB0byBwcmV2ZW50IFR5cGVTY3JpcHQgZnJvbSBjb21wbGFpbmluZyB0aGF0XG4gICAgLy8gc3RhbmRhcmQgZGVjb3JhdG9yIGZ1bmN0aW9uIHNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCBUeXBlU2NyaXB0IGRlY29yYXRvclxuICAgIC8vIHNpZ25hdHVyZVxuICAgIC8vIFRPRE8oa3NjaGFhZik6IHVuY2xlYXIgd2h5IGl0IHdhcyBvbmx5IGZhaWxpbmcgb24gdGhpcyBkZWNvcmF0b3IgYW5kIG5vdFxuICAgIC8vIHRoZSBvdGhlcnNcbiAgICAoKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LCBuYW1lPzogc3RyaW5nKSA9PlxuICAgICAgICAgKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgbGVnYWN5RXZlbnRPcHRpb25zKG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgICAgc3RhbmRhcmRFdmVudE9wdGlvbnMob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KSkgYXNcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgYW55O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPVxuICAgIDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KHByb3A6IFAsIF9vYmo6IHVua25vd24pOiBQID0+IHByb3A7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHk6IDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KFxuICAgICAgcHJvcDogUCwgX29iajogdW5rbm93bikgPT4gUDtcblxuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5OiB0eXBlb2YgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIHByb3BlcnR5IHZhbHVlcyB0byBhbmQgZnJvbSBhdHRyaWJ1dGUgdmFsdWVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGNvbnZlcnQgYW4gYXR0cmlidXRlIHZhbHVlIHRvIGEgcHJvcGVydHlcbiAgICogdmFsdWUuXG4gICAqL1xuICBmcm9tQXR0cmlidXRlPyh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU/OiBUeXBlSGludCk6IFR5cGU7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB0byBjb252ZXJ0IGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBJdCByZXR1cm5zIHVua25vd24gaW5zdGVhZCBvZiBzdHJpbmcsIHRvIGJlIGNvbXBhdGlibGUgd2l0aFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy90cnVzdGVkLXR5cGVzIChhbmQgc2ltaWxhciBlZmZvcnRzKS5cbiAgICovXG4gIHRvQXR0cmlidXRlPyh2YWx1ZTogVHlwZSwgdHlwZT86IFR5cGVIaW50KTogdW5rbm93bjtcbn1cblxudHlwZSBBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4gPVxuICAgIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZT58KCh2YWx1ZTogc3RyaW5nLCB0eXBlPzogVHlwZUhpbnQpID0+IFR5cGUpO1xuXG4vKipcbiAqIERlZmluZXMgb3B0aW9ucyBmb3IgYSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eURlY2xhcmF0aW9uPFR5cGUgPSB1bmtub3duLCBUeXBlSGludCA9IHVua25vd24+IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyBob3cgYW5kIHdoZXRoZXIgdGhlIHByb3BlcnR5IGJlY29tZXMgYW4gb2JzZXJ2ZWQgYXR0cmlidXRlLlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYGZhbHNlYCwgdGhlIHByb3BlcnR5IGlzIG5vdCBhZGRlZCB0byBgb2JzZXJ2ZWRBdHRyaWJ1dGVzYC5cbiAgICogSWYgdHJ1ZSBvciBhYnNlbnQsIHRoZSBsb3dlcmNhc2VkIHByb3BlcnR5IG5hbWUgaXMgb2JzZXJ2ZWQgKGUuZy4gYGZvb0JhcmBcbiAgICogYmVjb21lcyBgZm9vYmFyYCkuIElmIGEgc3RyaW5nLCB0aGUgc3RyaW5nIHZhbHVlIGlzIG9ic2VydmVkIChlLmdcbiAgICogYGF0dHJpYnV0ZTogJ2Zvby1iYXInYCkuXG4gICAqL1xuICByZWFkb25seSBhdHRyaWJ1dGU/OiBib29sZWFufHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eS4gVGhpcyBpcyB1c2VkIG9ubHkgYXMgYSBoaW50IGZvciB0aGVcbiAgICogYGNvbnZlcnRlcmAgdG8gZGV0ZXJtaW5lIGhvdyB0byBjb252ZXJ0IHRoZSBhdHRyaWJ1dGVcbiAgICogdG8vZnJvbSBhIHByb3BlcnR5LlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZT86IFR5cGVIaW50O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaG93IHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZSB0by9mcm9tIGEgcHJvcGVydHkuIElmIHRoaXMgdmFsdWVcbiAgICogaXMgYSBmdW5jdGlvbiwgaXQgaXMgdXNlZCB0byBjb252ZXJ0IHRoZSBhdHRyaWJ1dGUgdmFsdWUgYSB0aGUgcHJvcGVydHlcbiAgICogdmFsdWUuIElmIGl0J3MgYW4gb2JqZWN0LCBpdCBjYW4gaGF2ZSBrZXlzIGZvciBgZnJvbUF0dHJpYnV0ZWAgYW5kXG4gICAqIGB0b0F0dHJpYnV0ZWAuIElmIG5vIGB0b0F0dHJpYnV0ZWAgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYW5kXG4gICAqIGByZWZsZWN0YCBpcyBzZXQgdG8gYHRydWVgLCB0aGUgcHJvcGVydHkgdmFsdWUgaXMgc2V0IGRpcmVjdGx5IHRvIHRoZVxuICAgKiBhdHRyaWJ1dGUuIEEgZGVmYXVsdCBgY29udmVydGVyYCBpcyB1c2VkIGlmIG5vbmUgaXMgcHJvdmlkZWQ7IGl0IHN1cHBvcnRzXG4gICAqIGBCb29sZWFuYCwgYFN0cmluZ2AsIGBOdW1iZXJgLCBgT2JqZWN0YCwgYW5kIGBBcnJheWAuIE5vdGUsXG4gICAqIHdoZW4gYSBwcm9wZXJ0eSBjaGFuZ2VzIGFuZCB0aGUgY29udmVydGVyIGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBhdHRyaWJ1dGUsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyBuZXZlciB1cGRhdGVkIGFnYWluIGFzIGEgcmVzdWx0IG9mIHRoZSBhdHRyaWJ1dGUgY2hhbmdpbmcsXG4gICAqIGFuZCB2aWNlIHZlcnNhLlxuICAgKi9cbiAgcmVhZG9ubHkgY29udmVydGVyPzogQXR0cmlidXRlQ29udmVydGVyPFR5cGUsIFR5cGVIaW50PjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgcmVmbGVjdCB0byBhbiBhdHRyaWJ1dGUuXG4gICAqIElmIGB0cnVlYCwgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0LCB0aGUgYXR0cmlidXRlIGlzIHNldCB1c2luZyB0aGVcbiAgICogYXR0cmlidXRlIG5hbWUgZGV0ZXJtaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIGZvciB0aGUgYGF0dHJpYnV0ZWBcbiAgICogcHJvcGVydHkgb3B0aW9uIGFuZCB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGNvbnZlcnRlZCB1c2luZyB0aGUgcnVsZXNcbiAgICogZnJvbSB0aGUgYGNvbnZlcnRlcmAgcHJvcGVydHkgb3B0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgcmVmbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBpbmRpY2F0ZXMgaWYgYSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCBjaGFuZ2VkIHdoZW5cbiAgICogaXQgaXMgc2V0LiBUaGUgZnVuY3Rpb24gc2hvdWxkIHRha2UgdGhlIGBuZXdWYWx1ZWAgYW5kIGBvbGRWYWx1ZWAgYW5kXG4gICAqIHJldHVybiBgdHJ1ZWAgaWYgYW4gdXBkYXRlIHNob3VsZCBiZSByZXF1ZXN0ZWQuXG4gICAqL1xuICBoYXNDaGFuZ2VkPyh2YWx1ZTogVHlwZSwgb2xkVmFsdWU6IFR5cGUpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbiBhY2Nlc3NvciB3aWxsIGJlIGNyZWF0ZWQgZm9yIHRoaXMgcHJvcGVydHkuIEJ5XG4gICAqIGRlZmF1bHQsIGFuIGFjY2Vzc29yIHdpbGwgYmUgZ2VuZXJhdGVkIGZvciB0aGlzIHByb3BlcnR5IHRoYXQgcmVxdWVzdHMgYW5cbiAgICogdXBkYXRlIHdoZW4gc2V0LiBJZiB0aGlzIGZsYWcgaXMgYHRydWVgLCBubyBhY2Nlc3NvciB3aWxsIGJlIGNyZWF0ZWQsIGFuZFxuICAgKiBpdCB3aWxsIGJlIHRoZSB1c2VyJ3MgcmVzcG9uc2liaWxpdHkgdG8gY2FsbFxuICAgKiBgdGhpcy5yZXF1ZXN0VXBkYXRlKHByb3BlcnR5TmFtZSwgb2xkVmFsdWUpYCB0byByZXF1ZXN0IGFuIHVwZGF0ZSB3aGVuXG4gICAqIHRoZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgbm9BY2Nlc3Nvcj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogTWFwIG9mIHByb3BlcnRpZXMgdG8gUHJvcGVydHlEZWNsYXJhdGlvbiBvcHRpb25zLiBGb3IgZWFjaCBwcm9wZXJ0eSBhblxuICogYWNjZXNzb3IgaXMgbWFkZSwgYW5kIHRoZSBwcm9wZXJ0eSBpcyBwcm9jZXNzZWQgYWNjb3JkaW5nIHRvIHRoZVxuICogUHJvcGVydHlEZWNsYXJhdGlvbiBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgcmVhZG9ubHkgW2tleTogc3RyaW5nXTogUHJvcGVydHlEZWNsYXJhdGlvbjtcbn1cblxudHlwZSBQcm9wZXJ0eURlY2xhcmF0aW9uTWFwID0gTWFwPFByb3BlcnR5S2V5LCBQcm9wZXJ0eURlY2xhcmF0aW9uPjtcblxudHlwZSBBdHRyaWJ1dGVNYXAgPSBNYXA8c3RyaW5nLCBQcm9wZXJ0eUtleT47XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5VmFsdWVzID0gTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb252ZXJ0ZXI6IENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXIgPSB7XG5cbiAgdG9BdHRyaWJ1dGUodmFsdWU6IHVua25vd24sIHR5cGU/OiB1bmtub3duKTogdW5rbm93biB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICcnIDogbnVsbDtcbiAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCBwYXNzIHRoaXMgdGhyb3VnaFxuICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBmcm9tQXR0cmlidXRlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZT86IHVua25vd24pIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsO1xuICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpO1xuICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICBjYXNlIEFycmF5OlxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufTtcblxuZXhwb3J0IGludGVyZmFjZSBIYXNDaGFuZ2VkIHtcbiAgKHZhbHVlOiB1bmtub3duLCBvbGQ6IHVua25vd24pOiBib29sZWFuO1xufVxuXG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWw6IEhhc0NoYW5nZWQgPSAodmFsdWU6IHVua25vd24sIG9sZDogdW5rbm93bik6IGJvb2xlYW4gPT4ge1xuICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICByZXR1cm4gb2xkICE9PSB2YWx1ZSAmJiAob2xkID09PSBvbGQgfHwgdmFsdWUgPT09IHZhbHVlKTtcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICBhdHRyaWJ1dGU6IHRydWUsXG4gIHR5cGU6IFN0cmluZyxcbiAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICByZWZsZWN0OiBmYWxzZSxcbiAgaGFzQ2hhbmdlZDogbm90RXF1YWxcbn07XG5cbmNvbnN0IG1pY3JvdGFza1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG5cbmNvbnN0IFNUQVRFX0hBU19VUERBVEVEID0gMTtcbmNvbnN0IFNUQVRFX1VQREFURV9SRVFVRVNURUQgPSAxIDw8IDI7XG5jb25zdCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSA9IDEgPDwgMztcbmNvbnN0IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkgPSAxIDw8IDQ7XG5jb25zdCBTVEFURV9IQVNfQ09OTkVDVEVEID0gMSA8PCA1O1xudHlwZSBVcGRhdGVTdGF0ZSA9IHR5cGVvZiBTVEFURV9IQVNfVVBEQVRFRHx0eXBlb2YgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRHxcbiAgICB0eXBlb2YgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEV8XG4gICAgdHlwZW9mIFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFl8dHlwZW9mIFNUQVRFX0hBU19DT05ORUNURUQ7XG5cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHdoaWNoIG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLiBXaGVuXG4gKiBwcm9wZXJ0aWVzIGNoYW5nZSwgdGhlIGB1cGRhdGVgIG1ldGhvZCBpcyBhc3luY2hyb25vdXNseSBjYWxsZWQuIFRoaXMgbWV0aG9kXG4gKiBzaG91bGQgYmUgc3VwcGxpZWQgYnkgc3ViY2xhc3NlcnMgdG8gcmVuZGVyIHVwZGF0ZXMgYXMgZGVzaXJlZC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVwZGF0aW5nRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgLypcbiAgICogRHVlIHRvIGNsb3N1cmUgY29tcGlsZXIgRVM2IGNvbXBpbGF0aW9uIGJ1Z3MsIEBub2NvbGxhcHNlIGlzIHJlcXVpcmVkIG9uXG4gICAqIGFsbCBzdGF0aWMgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB3aXRoIGluaXRpYWxpemVycy4gIFJlZmVyZW5jZTpcbiAgICogLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvaXNzdWVzLzE3NzZcbiAgICovXG5cbiAgLyoqXG4gICAqIE1hcHMgYXR0cmlidXRlIG5hbWVzIHRvIHByb3BlcnRpZXM7IGZvciBleGFtcGxlIGBmb29iYXJgIGF0dHJpYnV0ZSB0b1xuICAgKiBgZm9vQmFyYCBwcm9wZXJ0eS4gQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGVcbiAgICogY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcDogQXR0cmlidXRlTWFwO1xuXG4gIC8qKlxuICAgKiBNYXJrcyBjbGFzcyBhcyBoYXZpbmcgZmluaXNoZWQgY3JlYXRpbmcgcHJvcGVydGllcy5cbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemVkID0gdHJ1ZTtcblxuICAvKipcbiAgICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgY2xhc3MgcHJvcGVydGllcywgaW5jbHVkaW5nIGFueSBzdXBlcmNsYXNzIHByb3BlcnRpZXMuXG4gICAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2NsYXNzUHJvcGVydGllcz86IFByb3BlcnR5RGVjbGFyYXRpb25NYXA7XG5cbiAgLyoqXG4gICAqIFVzZXItc3VwcGxpZWQgb2JqZWN0IHRoYXQgbWFwcyBwcm9wZXJ0eSBuYW1lcyB0byBgUHJvcGVydHlEZWNsYXJhdGlvbmBcbiAgICogb2JqZWN0cyBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBwcm9wZXJ0eS5cbiAgICovXG4gIHN0YXRpYyBwcm9wZXJ0aWVzOiBQcm9wZXJ0eURlY2xhcmF0aW9ucztcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgY29uc3QgYXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcbiAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzIS5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhlIHByaXZhdGUgYF9jbGFzc1Byb3BlcnRpZXNgIHByb3BlcnR5IG1ldGFkYXRhIGlzIGNyZWF0ZWQuXG4gICAqIEluIGFkZGl0aW9uIHRvIGBmaW5hbGl6ZWAgdGhpcyBpcyBhbHNvIGNhbGxlZCBpbiBgY3JlYXRlUHJvcGVydHlgIHRvXG4gICAqIGVuc3VyZSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGNhbiBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAqL1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpIHtcbiAgICAvLyBlbnN1cmUgcHJpdmF0ZSBzdG9yYWdlIGZvciBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMuXG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KFxuICAgICAgICAgICAgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX2NsYXNzUHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgLy8gTk9URTogV29ya2Fyb3VuZCBJRTExIG5vdCBzdXBwb3J0aW5nIE1hcCBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAgICAgIGNvbnN0IHN1cGVyUHJvcGVydGllczogUHJvcGVydHlEZWNsYXJhdGlvbk1hcCA9XG4gICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9jbGFzc1Byb3BlcnRpZXM7XG4gICAgICBpZiAoc3VwZXJQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXJQcm9wZXJ0aWVzLmZvckVhY2goXG4gICAgICAgICAgICAodjogUHJvcGVydHlEZWNsYXJhdGlvbiwgazogUHJvcGVydHlLZXkpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzIS5zZXQoaywgdikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHJvcGVydHkgYWNjZXNzb3Igb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlIGlmIG9uZSBkb2VzIG5vdCBleGlzdC5cbiAgICogVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgcHJvcGVydHkgb3B0aW9uXG4gICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICogYW4gdXBkYXRlLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIHN0b3JhZ2UgZXhpc3RzIGZvciBwcm9wZXJ0eVxuICAgIC8vIG1ldGFkYXRhLlxuICAgIHRoaXMuX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpO1xuICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcyEuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgIGlmIChvcHRpb25zLm5vQWNjZXNzb3IgfHwgdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgbm8gc3ltYm9sIGluIGluZGV4XG4gICAgICBnZXQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQodGhpczogVXBkYXRpbmdFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IG5vIHN5bWJvbCBpbiBpbmRleFxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9ICh0aGlzIGFzIGFueSlbbmFtZV07XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgbm8gc3ltYm9sIGluIGluZGV4XG4gICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcyBhbmQgZW5zdXJlc1xuICAgKiBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZmluYWxpemVkJywgdGhpcykpICYmXG4gICAgICAgIHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBzdXBlckN0b3IuZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgIH1cbiAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCk7XG4gICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgIC8vIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gdGhlIHN1cGVyQ2xhc3MsIGFuZCBmaW5hbGl6YXRpb24gZW5zdXJlc1xuICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgIC4uLih0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcykgOlxuICAgICAgICAgICAgW11cbiAgICAgIF07XG4gICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU3JpcHQgbGFjayBvZiBzdXBwb3J0IGZvciBzeW1ib2wgaW5cbiAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eShwLCAocHJvcHMgYXMgYW55KVtwXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShcbiAgICAgIG5hbWU6IFByb3BlcnR5S2V5LCBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2UgP1xuICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgIGF0dHJpYnV0ZSA6XG4gICAgICAgICAgICAgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyA/IG5hbWUudG9Mb3dlckNhc2UoKSA6IHVuZGVmaW5lZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIHByb3BlcnR5IHNob3VsZCByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICogQ2FsbGVkIHdoZW4gYSBwcm9wZXJ0eSB2YWx1ZSBpcyBzZXQgYW5kIHVzZXMgdGhlIGBoYXNDaGFuZ2VkYFxuICAgKiBvcHRpb24gZm9yIHRoZSBwcm9wZXJ0eSBpZiBwcmVzZW50IG9yIGEgc3RyaWN0IGlkZW50aXR5IGNoZWNrLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX3ZhbHVlSGFzQ2hhbmdlZChcbiAgICAgIHZhbHVlOiB1bmtub3duLCBvbGQ6IHVua25vd24sIGhhc0NoYW5nZWQ6IEhhc0NoYW5nZWQgPSBub3RFcXVhbCkge1xuICAgIHJldHVybiBoYXNDaGFuZ2VkKHZhbHVlLCBvbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIHZhbHVlLlxuICAgKiBDYWxsZWQgdmlhIHRoZSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCBhbmQgdXNlcyB0aGUgcHJvcGVydHknc1xuICAgKiBgY29udmVydGVyYCBvciBgY29udmVydGVyLmZyb21BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbi5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9wcm9wZXJ0eVZhbHVlRnJvbUF0dHJpYnV0ZShcbiAgICAgIHZhbHVlOiBzdHJpbmd8bnVsbCwgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXIgfHwgZGVmYXVsdENvbnZlcnRlcjtcbiAgICBjb25zdCBmcm9tQXR0cmlidXRlID1cbiAgICAgICAgKHR5cGVvZiBjb252ZXJ0ZXIgPT09ICdmdW5jdGlvbicgPyBjb252ZXJ0ZXIgOiBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSk7XG4gICAgcmV0dXJuIGZyb21BdHRyaWJ1dGUgPyBmcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKSA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlLiBJZiB0aGlzXG4gICAqIHJldHVybnMgdW5kZWZpbmVkLCB0aGUgcHJvcGVydHkgd2lsbCAqbm90KiBiZSByZWZsZWN0ZWQgdG8gYW4gYXR0cmlidXRlLlxuICAgKiBJZiB0aGlzIHJldHVybnMgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQsIG90aGVyd2lzZSB0aGVcbiAgICogYXR0cmlidXRlIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZS5cbiAgICogVGhpcyB1c2VzIHRoZSBwcm9wZXJ0eSdzIGByZWZsZWN0YCBhbmQgYHR5cGUudG9BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbnMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKFxuICAgICAgdmFsdWU6IHVua25vd24sIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlcjtcbiAgICBjb25zdCB0b0F0dHJpYnV0ZSA9XG4gICAgICAgIGNvbnZlcnRlciAmJiAoY29udmVydGVyIGFzIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXIpLnRvQXR0cmlidXRlIHx8XG4gICAgICAgIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgcmV0dXJuIHRvQXR0cmlidXRlISh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZTogVXBkYXRlU3RhdGUgPSAwO1xuICBwcml2YXRlIF9pbnN0YW5jZVByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx1bmtub3duPiA9IG1pY3JvdGFza1Byb21pc2U7XG4gIHByaXZhdGUgX2hhc0Nvbm5lY3RlZFJlc29sdmVyOiAoKCkgPT4gdm9pZCl8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBNYXAgd2l0aCBrZXlzIGZvciBhbnkgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdFxuICAgKiB1cGRhdGUgY3ljbGUgd2l0aCBwcmV2aW91cyB2YWx1ZXMuXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIE1hcCB3aXRoIGtleXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgd2hlbiB1cGRhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmbGVjdGluZ1Byb3BlcnRpZXM6IE1hcDxQcm9wZXJ0eUtleSwgUHJvcGVydHlEZWNsYXJhdGlvbj58XG4gICAgICB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBCeSBkZWZhdWx0IGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3JcbiAgICogcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZiBgdXBkYXRlQ29tcGxldGVgXG4gICAgdGhpcy5fcmVxdWVzdFVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAqL1xuICBwcml2YXRlIF9zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KVxuICAgICAgICAuX2NsYXNzUHJvcGVydGllcyEuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW3AgYXMga2V5b2YgdGhpc107XG4gICAgICAgICAgICBkZWxldGUgdGhpc1twIGFzIGtleW9mIHRoaXNdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHByZXZpb3VzbHkgc2F2ZWQgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICovXG4gIHByaXZhdGUgX2FwcGx5SW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzIS5mb3JFYWNoKCh2LCBwKSA9PiAodGhpcyBhcyBhbnkpW3BdID0gdik7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0hBU19DT05ORUNURUQ7XG4gICAgLy8gRW5zdXJlIGZpcnN0IGNvbm5lY3Rpb24gY29tcGxldGVzIGFuIHVwZGF0ZS4gVXBkYXRlcyBjYW5ub3QgY29tcGxldGUgYmVmb3JlXG4gICAgLy8gY29ubmVjdGlvbiBhbmQgaWYgb25lIGlzIHBlbmRpbmcgY29ubmVjdGlvbiB0aGUgYF9oYXNDb25uZWN0aW9uUmVzb2x2ZXJgXG4gICAgLy8gd2lsbCBleGlzdC4gSWYgc28sIHJlc29sdmUgaXQgdG8gY29tcGxldGUgdGhlIHVwZGF0ZSwgb3RoZXJ3aXNlXG4gICAgLy8gcmVxdWVzdFVwZGF0ZS5cbiAgICBpZiAodGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIpIHtcbiAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyKCk7XG4gICAgICB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIGZvciBgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgaW4gZXh0ZW5zaW9ucyB3aGlsZVxuICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZDogc3RyaW5nfG51bGwsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wcm9wZXJ0eVRvQXR0cmlidXRlKFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksIHZhbHVlOiB1bmtub3duLFxuICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgY3RvciA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpO1xuICAgIGNvbnN0IGF0dHIgPSBjdG9yLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYXR0clZhbHVlID0gY3Rvci5fcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIC8vIGFuIHVuZGVmaW5lZCB2YWx1ZSBkb2VzIG5vdCBjaGFuZ2UgdGhlIGF0dHJpYnV0ZS5cbiAgICAgIGlmIChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIGRlc2VyaWFsaXppbmcgYXR0cmlidXRlIHZhbHVlIGlmIGl0IHdhc1xuICAgIC8vIGp1c3Qgc2V0IGZyb20gYSBwcm9wZXJ0eSBzZXR0ZXIuXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3RvciA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpO1xuICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5nZXQobmFtZSk7XG4gICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPVxuICAgICAgICAgIGN0b3IuX2NsYXNzUHJvcGVydGllcyEuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFk7XG4gICAgICB0aGlzW3Byb3BOYW1lIGFzIGtleW9mIHRoaXNdID1cbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgY3Rvci5fcHJvcGVydHlWYWx1ZUZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpIGFzIGFueTtcbiAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBwcml2YXRlIHZlcnNpb24gb2YgYHJlcXVlc3RVcGRhdGVgIGRvZXMgbm90IGFjY2VzcyBvciByZXR1cm4gdGhlXG4gICAqIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS4gVGhpcyBwcm9taXNlIGNhbiBiZSBvdmVycmlkZGVuIGFuZCBpcyB0aGVyZWZvcmVcbiAgICogbm90IGZyZWUgdG8gYWNjZXNzLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVxdWVzdFVwZGF0ZShuYW1lPzogUHJvcGVydHlLZXksIG9sZFZhbHVlPzogdW5rbm93bikge1xuICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50O1xuICAgICAgY29uc3Qgb3B0aW9ucyA9XG4gICAgICAgICAgY3Rvci5fY2xhc3NQcm9wZXJ0aWVzIS5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgICBpZiAoY3Rvci5fdmFsdWVIYXNDaGFuZ2VkKFxuICAgICAgICAgICAgICB0aGlzW25hbWUgYXMga2V5b2YgdGhpc10sIG9sZFZhbHVlLCBvcHRpb25zLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX2hhc1JlcXVlc3RlZFVwZGF0ZSAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICB0aGlzLl9lbnF1ZXVlVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkXG4gICAqIGJlIGNhbGxlZCB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWRcbiAgICogYnkgc2V0dGluZyBhIHByb3BlcnR5LiBJbiB0aGlzIGNhc2UsIHBhc3Mgbm8gYXJndW1lbnRzLiBJdCBzaG91bGQgYWxzbyBiZVxuICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAqIG9wdGlvbnMgYXJlIGhvbm9yZWQuIFJldHVybnMgdGhlIGB1cGRhdGVDb21wbGV0ZWAgUHJvbWlzZSB3aGljaCBpcyByZXNvbHZlZFxuICAgKiB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSB7UHJvcGVydHlLZXl9IChvcHRpb25hbCkgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAqIEBwYXJhbSBvbGRWYWx1ZSB7YW55fSAob3B0aW9uYWwpIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBBIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgKi9cbiAgcmVxdWVzdFVwZGF0ZShuYW1lPzogUHJvcGVydHlLZXksIG9sZFZhbHVlPzogdW5rbm93bikge1xuICAgIHRoaXMuX3JlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAvLyBNYXJrIHN0YXRlIHVwZGF0aW5nLi4uXG4gICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX1VQREFURV9SRVFVRVNURUQ7XG4gICAgbGV0IHJlc29sdmUhOiAocjogYm9vbGVhbikgPT4gdm9pZDtcbiAgICBsZXQgcmVqZWN0ITogKGU6IEVycm9yKSA9PiB2b2lkO1xuICAgIGNvbnN0IHByZXZpb3VzVXBkYXRlUHJvbWlzZSA9IHRoaXMuX3VwZGF0ZVByb21pc2U7XG4gICAgdGhpcy5fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgYXdhaXQgcHJldmlvdXNVcGRhdGVQcm9taXNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElnbm9yZSBhbnkgcHJldmlvdXMgZXJyb3JzLiBXZSBvbmx5IGNhcmUgdGhhdCB0aGUgcHJldmlvdXMgY3ljbGUgaXNcbiAgICAgIC8vIGRvbmUuIEFueSBlcnJvciBzaG91bGQgaGF2ZSBiZWVuIGhhbmRsZWQgaW4gdGhlIHByZXZpb3VzIHVwZGF0ZS5cbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGhhcyBjb25uZWN0ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgIGlmICghdGhpcy5faGFzQ29ubmVjdGVkKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHJlcyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgIC8vIElmIGBwZXJmb3JtVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgIC8vIGNoZWNrZWQgdG8gYXZvaWQgZGVsYXlpbmcgYW4gYWRkaXRpb25hbCBtaWNyb3Rhc2sgdW5sZXNzIHdlIG5lZWQgdG8uXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gICAgcmVzb2x2ZSghdGhpcy5faGFzUmVxdWVzdGVkVXBkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9oYXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19DT05ORUNURUQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2hhc1JlcXVlc3RlZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhhc1VwZGF0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbiBlbGVtZW50IHVwZGF0ZS4gTm90ZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlXG4gICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAqXG4gICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSB0aW1pbmcgb2YgdXBkYXRlcy4gSWYgdGhpc1xuICAgKiBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnBlcmZvcm1VcGRhdGUoKWAgbXVzdCBiZSBjYWxsZWQuXG4gICAqXG4gICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICpcbiAgICogYGBgXG4gICAqIHByb3RlY3RlZCBhc3luYyBwZXJmb3JtVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAqICAgc3VwZXIucGVyZm9ybVVwZGF0ZSgpO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgcHJvdGVjdGVkIHBlcmZvcm1VcGRhdGUoKTogdm9pZHxQcm9taXNlPHVua25vd24+IHtcbiAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgdGhpcy5fYXBwbHlJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICB9XG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fY2hhbmdlZFByb3BlcnRpZXM7XG4gICAgdHJ5IHtcbiAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICB0aGlzLl9tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICBpZiAoISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKSkge1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSEFTX1VQREFURUQ7XG4gICAgICAgIHRoaXMuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya1VwZGF0ZWQoKSB7XG4gICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9VUERBVEVfUkVRVUVTVEVEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuIFRoaXMgZ2V0dGVyIGNhbiBiZSBpbXBsZW1lbnRlZCB0b1xuICAgKiBhd2FpdCBhZGRpdGlvbmFsIHN0YXRlLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhXG4gICAqIHJlbmRlcmVkIGVsZW1lbnQgYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgKiBgc3VwZXIudXBkYXRlQ29tcGxldGVgIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGVcbiAgICogdXBkYXRlIHJlc29sdmVkIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICovXG4gIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlUHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAqXG4gICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXMuXG4gICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgKiBhbm90aGVyIHVwZGF0ZS5cbiAgICpcbiAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5zaXplID4gMCkge1xuICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5mb3JFYWNoKFxuICAgICAgICAgICh2LCBrKSA9PiB0aGlzLl9wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNbayBhcyBrZXlvZiB0aGlzXSwgdikpO1xuICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm1cbiAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgKlxuICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICogd29yayBvbiB0aGUgZWxlbWVudCBhZnRlciB1cGRhdGUuXG4gICAqXG4gICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAqXG4gICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdsaXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzJztcblxuaW1wb3J0IHtQcm9wZXJ0eVZhbHVlcywgVXBkYXRpbmdFbGVtZW50fSBmcm9tICcuL2xpYi91cGRhdGluZy1lbGVtZW50LmpzJztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvdXBkYXRpbmctZWxlbWVudC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9kZWNvcmF0b3JzLmpzJztcbmV4cG9ydCB7aHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdCwgU1ZHVGVtcGxhdGVSZXN1bHR9IGZyb20gJ2xpdC1odG1sL2xpdC1odG1sLmpzJztcbmltcG9ydCB7c3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLCBDU1NSZXN1bHR9IGZyb20gJy4vbGliL2Nzcy10YWcuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY3NzLXRhZy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGl0RWxlbWVudFZlcnNpb25zOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0RWxlbWVudFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0RWxlbWVudFZlcnNpb25zJ10gPSBbXSkpXG4gICAgLnB1c2goJzIuMC4xJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1NTUmVzdWx0QXJyYXkgZXh0ZW5kcyBBcnJheTxDU1NSZXN1bHR8Q1NTUmVzdWx0QXJyYXk+IHt9XG5cbi8qKlxuICogTWluaW1hbCBpbXBsZW1lbnRhdGlvbiBvZiBBcnJheS5wcm90b3R5cGUuZmxhdFxuICogQHBhcmFtIGFyciB0aGUgYXJyYXkgdG8gZmxhdHRlblxuICogQHBhcmFtIHJlc3VsdCB0aGUgYWNjdW1sYXRlZCByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXJyYXlGbGF0KFxuICAgIHN0eWxlczogQ1NTUmVzdWx0QXJyYXksIHJlc3VsdDogQ1NTUmVzdWx0W10gPSBbXSk6IENTU1Jlc3VsdFtdIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN0eWxlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgYXJyYXlGbGF0KHZhbHVlLCByZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBEZWVwbHkgZmxhdHRlbnMgc3R5bGVzIGFycmF5LiBVc2VzIG5hdGl2ZSBmbGF0IGlmIGF2YWlsYWJsZS4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZXMgPSAoc3R5bGVzOiBDU1NSZXN1bHRBcnJheSk6IENTU1Jlc3VsdFtdID0+XG4gICAgc3R5bGVzLmZsYXQgPyBzdHlsZXMuZmxhdChJbmZpbml0eSkgOiBhcnJheUZsYXQoc3R5bGVzKTtcblxuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICAvKipcbiAgICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICAgKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBmaW5hbGl6ZWQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgbWV0aG9kIHVzZWQgdG8gcmVuZGVyIHRoZSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCB0byB0aGUgZWxlbWVudCdzXG4gICAqIERPTS5cbiAgICogQHBhcmFtIHtUZW1wbGF0ZVJlc3VsdH0gVGVtcGxhdGUgdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gTm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IEVsZW1lbnQgbmFtZS5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHN0YXRpYyByZW5kZXIgPSByZW5kZXI7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC4gVGhlIHN0eWxlcyBzaG91bGQgYmUgZGVmaW5lZFxuICAgKiB1c2luZyB0aGUgYGNzc2AgdGFnIGZ1bmN0aW9uLlxuICAgKi9cbiAgc3RhdGljIHN0eWxlcz86IENTU1Jlc3VsdHxDU1NSZXN1bHRBcnJheTtcblxuICBwcml2YXRlIHN0YXRpYyBfc3R5bGVzOiBDU1NSZXN1bHRbXXx1bmRlZmluZWQ7XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgc3VwZXIuZmluYWxpemUoKTtcbiAgICAvLyBQcmVwYXJlIHN0eWxpbmcgdGhhdCBpcyBzdGFtcGVkIGF0IGZpcnN0IHJlbmRlciB0aW1lLiBTdHlsaW5nXG4gICAgLy8gaXMgYnVpbHQgZnJvbSB1c2VyIHByb3ZpZGVkIGBzdHlsZXNgIG9yIGlzIGluaGVyaXRlZCBmcm9tIHRoZSBzdXBlcmNsYXNzLlxuICAgIHRoaXMuX3N0eWxlcyA9XG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnc3R5bGVzJywgdGhpcykpID9cbiAgICAgICAgdGhpcy5fZ2V0VW5pcXVlU3R5bGVzKCkgOlxuICAgICAgICB0aGlzLl9zdHlsZXMgfHwgW107XG4gIH1cblxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2dldFVuaXF1ZVN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgLy8gVGFrZSBjYXJlIG5vdCB0byBjYWxsIGB0aGlzLnN0eWxlc2AgbXVsdGlwbGUgdGltZXMgc2luY2UgdGhpcyBnZW5lcmF0ZXNcbiAgICAvLyBuZXcgQ1NTUmVzdWx0cyBlYWNoIHRpbWUuXG4gICAgLy8gVE9ETyhzb3J2ZWxsKTogU2luY2Ugd2UgZG8gbm90IGNhY2hlIENTU1Jlc3VsdHMgYnkgaW5wdXQsIGFueVxuICAgIC8vIHNoYXJlZCBzdHlsZXMgd2lsbCBnZW5lcmF0ZSBuZXcgc3R5bGVzaGVldCBvYmplY3RzLCB3aGljaCBpcyB3YXN0ZWZ1bC5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBhZGRyZXNzZWQgd2hlbiBhIGJyb3dzZXIgc2hpcHMgY29uc3RydWN0YWJsZVxuICAgIC8vIHN0eWxlc2hlZXRzLlxuICAgIGNvbnN0IHVzZXJTdHlsZXMgPSB0aGlzLnN0eWxlcztcbiAgICBjb25zdCBzdHlsZXM6IENTU1Jlc3VsdFtdID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclN0eWxlcykpIHtcbiAgICAgIGNvbnN0IGZsYXRTdHlsZXMgPSBmbGF0dGVuU3R5bGVzKHVzZXJTdHlsZXMpO1xuICAgICAgLy8gQXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsaW5nIHRoYXQgY2FuXG4gICAgICAvLyBvY2N1ciBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZywgZGUtZHVwbGljYXRlIHN0eWxlc1xuICAgICAgLy8gcHJlc2VydmluZyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LiBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG9cbiAgICAgIC8vIHRyeSB0byBwcmVzZXJ2ZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3RcbiAgICAgIC8vIGltcG9ydGFudCB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlIHByZXZpb3VzIHN0eWxlcy5cbiAgICAgIGNvbnN0IHN0eWxlU2V0ID0gZmxhdFN0eWxlcy5yZWR1Y2VSaWdodCgoc2V0LCBzKSA9PiB7XG4gICAgICAgIHNldC5hZGQocyk7XG4gICAgICAgIC8vIG9uIElFIHNldC5hZGQgZG9lcyBub3QgcmV0dXJuIHRoZSBzZXQuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgICB9LCBuZXcgU2V0PENTU1Jlc3VsdD4oKSk7XG4gICAgICAvLyBBcnJheS5mcm9tIGRvZXMgbm90IHdvcmsgb24gU2V0IGluIElFXG4gICAgICBzdHlsZVNldC5mb3JFYWNoKCh2KSA9PiBzdHlsZXMudW5zaGlmdCh2KSk7XG4gICAgfSBlbHNlIGlmICh1c2VyU3R5bGVzKSB7XG4gICAgICBzdHlsZXMucHVzaCh1c2VyU3R5bGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHByaXZhdGUgX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE5vZGUgb3IgU2hhZG93Um9vdCBpbnRvIHdoaWNoIGVsZW1lbnQgRE9NIHNob3VsZCBiZSByZW5kZXJlZC4gRGVmYXVsdHNcbiAgICogdG8gYW4gb3BlbiBzaGFkb3dSb290LlxuICAgKi9cbiAgcmVhZG9ubHkgcmVuZGVyUm9vdCE6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudDtcblxuICAvKipcbiAgICogUGVyZm9ybXMgZWxlbWVudCBpbml0aWFsaXphdGlvbi4gQnkgZGVmYXVsdCB0aGlzIGNhbGxzIGBjcmVhdGVSZW5kZXJSb290YFxuICAgKiB0byBjcmVhdGUgdGhlIGVsZW1lbnQgYHJlbmRlclJvb3RgIG5vZGUgYW5kIGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3JcbiAgICogcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICh0aGlzIGFzIHtyZW5kZXJSb290OiBFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0pLnJlbmRlclJvb3QgPVxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAvLyBOb3RlLCBpZiByZW5kZXJSb290IGlzIG5vdCBhIHNoYWRvd1Jvb3QsIHN0eWxlcyB3b3VsZC9jb3VsZCBhcHBseSB0byB0aGVcbiAgICAvLyBlbGVtZW50J3MgZ2V0Um9vdE5vZGUoKS4gV2hpbGUgdGhpcyBjb3VsZCBiZSBkb25lLCB3ZSdyZSBjaG9vc2luZyBub3QgdG9cbiAgICAvLyBzdXBwb3J0IHRoaXMgbm93IHNpbmNlIGl0IHdvdWxkIHJlcXVpcmUgZGlmZmVyZW50IGxvZ2ljIGFyb3VuZCBkZS1kdXBpbmcuXG4gICAgaWYgKHdpbmRvdy5TaGFkb3dSb290ICYmIHRoaXMucmVuZGVyUm9vdCBpbnN0YW5jZW9mIHdpbmRvdy5TaGFkb3dSb290KSB7XG4gICAgICB0aGlzLmFkb3B0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCk6IEVsZW1lbnR8U2hhZG93Um9vdCB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHN0eWxpbmcgdG8gdGhlIGVsZW1lbnQgc2hhZG93Um9vdCB1c2luZyB0aGUgYHN0YXRpYyBnZXQgc3R5bGVzYFxuICAgKiBwcm9wZXJ0eS4gU3R5bGluZyB3aWxsIGFwcGx5IHVzaW5nIGBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0c2Agd2hlcmVcbiAgICogYXZhaWxhYmxlIGFuZCB3aWxsIGZhbGxiYWNrIG90aGVyd2lzZS4gV2hlbiBTaGFkb3cgRE9NIGlzIHBvbHlmaWxsZWQsXG4gICAqIFNoYWR5Q1NTIHNjb3BlcyBzdHlsZXMgYW5kIGFkZHMgdGhlbSB0byB0aGUgZG9jdW1lbnQuIFdoZW4gU2hhZG93IERPTVxuICAgKiBpcyBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAgICogZW5kIG9mIHRoZSBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWNcbiAgICogYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRvcHRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpLl9zdHlsZXMhO1xuICAgIGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRoZXJlIGFyZSB0aHJlZSBzZXBhcmF0ZSBjYXNlcyBoZXJlIGJhc2VkIG9uIFNoYWRvdyBET00gc3VwcG9ydC5cbiAgICAvLyAoMSkgc2hhZG93Um9vdCBwb2x5ZmlsbGVkOiB1c2UgU2hhZHlDU1NcbiAgICAvLyAoMikgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgYXZhaWxhYmxlOiB1c2UgaXQuXG4gICAgLy8gKDMpIHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzIHBvbHlmaWxsZWQ6IGFwcGVuZCBzdHlsZXMgYWZ0ZXJcbiAgICAvLyByZW5kZXJpbmdcbiAgICBpZiAod2luZG93LlNoYWR5Q1NTICE9PSB1bmRlZmluZWQgJiYgIXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpIHtcbiAgICAgIHdpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbS5wcmVwYXJlQWRvcHRlZENzc1RleHQoXG4gICAgICAgICAgc3R5bGVzLm1hcCgocykgPT4gcy5jc3NUZXh0KSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgIH0gZWxzZSBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAodGhpcy5yZW5kZXJSb290IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cyA9XG4gICAgICAgICAgc3R5bGVzLm1hcCgocykgPT4gcy5zdHlsZVNoZWV0ISk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgbXVzdCBiZSBkb25lIGFmdGVyIHJlbmRlcmluZyBzbyB0aGUgYWN0dWFsIHN0eWxlIGluc2VydGlvbiBpcyBkb25lXG4gICAgICAvLyBpbiBgdXBkYXRlYC5cbiAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyBOb3RlLCBmaXJzdCB1cGRhdGUvcmVuZGVyIGhhbmRsZXMgc3R5bGVFbGVtZW50IHNvIHdlIG9ubHkgY2FsbCB0aGlzIGlmXG4gICAgLy8gY29ubmVjdGVkIGFmdGVyIGZpcnN0IHVwZGF0ZS5cbiAgICBpZiAodGhpcy5oYXNVcGRhdGVkICYmIHdpbmRvdy5TaGFkeUNTUyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlc1xuICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlc3VsdCA9IHRoaXMucmVuZGVyKCkgYXMgdW5rbm93bjtcbiAgICBpZiAodGVtcGxhdGVSZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpXG4gICAgICAgICAgLnJlbmRlcihcbiAgICAgICAgICAgICAgdGVtcGxhdGVSZXN1bHQsXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCxcbiAgICAgICAgICAgICAge3Njb3BlTmFtZTogdGhpcy5sb2NhbE5hbWUsIGV2ZW50Q29udGV4dDogdGhpc30pO1xuICAgIH1cbiAgICAvLyBXaGVuIG5hdGl2ZSBTaGFkb3cgRE9NIGlzIHVzZWQgYnV0IGFkb3B0ZWRTdHlsZXMgYXJlIG5vdCBzdXBwb3J0ZWQsXG4gICAgLy8gaW5zZXJ0IHN0eWxpbmcgYWZ0ZXIgcmVuZGVyaW5nIHRvIGVuc3VyZSBhZG9wdGVkU3R5bGVzIGhhdmUgaGlnaGVzdFxuICAgIC8vIHByaW9yaXR5LlxuICAgIGlmICh0aGlzLl9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IGZhbHNlO1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpLl9zdHlsZXMhLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgdGhpcy5yZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtdXN0IHJldHVyblxuICAgKiBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCpcbiAgICogdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0fHZvaWQge1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXJ9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIFBhcnRzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgaW1wbGVtZW50cyBUZW1wbGF0ZVByb2Nlc3NvciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZyBsaXRlcmFscy4gVGhlcmUgYXJlIGFsd2F5cyBhdCBsZWFzdCB0d28gc3RyaW5ncyxcbiAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAqL1xuICBoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10sXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKTogUGFydFtdIHtcbiAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgY29uc3QgY29taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICByZXR1cm4gY29taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgIH1cbiAgICBjb25zdCBjb21pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAqL1xuICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcDxvYmplY3QsIHRydWU+KCk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZhY3RvcnkgPSAoLi4uYXJnczogYW55W10pID0+IG9iamVjdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRm4gPSAocGFydDogUGFydCkgPT4gdm9pZDtcblxuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbCB0aGUgZnVuY3Rpb25cbiAqIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxGIGV4dGVuZHMgRGlyZWN0aXZlRmFjdG9yeT4oZjogRik6IEYgPT5cbiAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pIGFzIEY7XG5cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvOiB1bmtub3duKTogbyBpcyBEaXJlY3RpdmVGbiA9PiB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmludGVyZmFjZSBNYXliZVBvbHlmaWxsZWRDZSBleHRlbmRzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG4gIHBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgKHdpbmRvdy5jdXN0b21FbGVtZW50cyBhcyBNYXliZVBvbHlmaWxsZWRDZSkucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmVcbiAqIGBiZWZvcmVOb2RlYC4gSWYgYGJlZm9yZU5vZGVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZVxuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSxcbiAgICAgc3RhcnQ6IE5vZGV8bnVsbCxcbiAgICAgZW5kOiBOb2RlfG51bGwgPSBudWxsLFxuICAgICBiZWZvcmU6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlIS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlISwgYmVmb3JlIGFzIE5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgZnJvbSBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydE5vZGU6IE5vZGV8bnVsbCwgZW5kTm9kZTogTm9kZXxudWxsID0gbnVsbCk6XG4gICAgICAgIHZvaWQgPT4ge1xuICAgICAgICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgIHdoaWxlIChub2RlICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gbm9kZSEubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9kZSEpO1xuICAgICAgICAgICAgbm9kZSA9IG47XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKi9cblxuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmNvbnN0IHdhbGtlck5vZGVGaWx0ZXIgPSAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi87XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGlzdCBvZiBub2RlcyBmcm9tIGEgVGVtcGxhdGUgc2FmZWx5LiBJbiBhZGRpdGlvbiB0byByZW1vdmluZ1xuICogbm9kZXMgZnJvbSB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZSBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2hcbiAqIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqXG4gKiBBcyB0aGUgdGVtcGxhdGUgaXMgd2Fsa2VkIHRoZSByZW1vdmFsIHN0YXRlIGlzIHRyYWNrZWQgYW5kXG4gKiBwYXJ0IGluZGljZXMgYXJlIGFkanVzdGVkIGFzIG5lZWRlZC5cbiAqXG4gKiBkaXZcbiAqICAgZGl2IzEgKHJlbW92ZSkgPC0tIHN0YXJ0IHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIGRpdiMxKVxuICogICAgIGRpdlxuICogICAgICAgZGl2IzIgKHJlbW92ZSkgIDwtLSBjb250aW51ZSByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBzdGlsbCBkaXYjMSlcbiAqICAgICAgICAgZGl2XG4gKiBkaXYgPC0tIHN0b3AgcmVtb3Zpbmcgc2luY2UgcHJldmlvdXMgc2libGluZyBpcyB0aGUgcmVtb3Zpbmcgbm9kZSAoZGl2IzEsXG4gKiByZW1vdmVkIDQgbm9kZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZShcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIG5vZGVzVG9SZW1vdmU6IFNldDxOb2RlPikge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgY29uc3Qgd2Fsa2VyID1cbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgbGV0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gIGxldCByZW1vdmVDb3VudCA9IDA7XG4gIGNvbnN0IG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlID0gW107XG4gIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlOiBOb2RlfG51bGwgPSBudWxsO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBub2RlSW5kZXgrKztcbiAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgLy8gRW5kIHJlbW92YWwgaWYgc3RlcHBlZCBwYXN0IHRoZSByZW1vdmluZyBub2RlXG4gICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBjdXJyZW50UmVtb3ZpbmdOb2RlKSB7XG4gICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gQSBub2RlIHRvIHJlbW92ZSB3YXMgZm91bmQgaW4gdGhlIHRlbXBsYXRlXG4gICAgaWYgKG5vZGVzVG9SZW1vdmUuaGFzKG5vZGUpKSB7XG4gICAgICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5wdXNoKG5vZGUpO1xuICAgICAgLy8gVHJhY2sgbm9kZSB3ZSdyZSByZW1vdmluZ1xuICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICB9XG4gICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICAvLyBnbyB0byB0aGUgbmV4dCBhY3RpdmUgcGFydC5cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgIH1cbiAgfVxuICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5mb3JFYWNoKChuKSA9PiBuLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG4pKTtcbn1cblxuY29uc3QgY291bnROb2RlcyA9IChub2RlOiBOb2RlKSA9PiB7XG4gIGxldCBjb3VudCA9IChub2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pID8gMCA6IDE7XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyA9XG4gICAgKHBhcnRzOiBUZW1wbGF0ZVBhcnRbXSwgc3RhcnRJbmRleDogbnVtYmVyID0gLTEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4vKipcbiAqIEluc2VydHMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIG9wdGlvbmFsbHkgYmVmb3JlIHRoZSBnaXZlblxuICogcmVmTm9kZS4gSW4gYWRkaXRpb24gdG8gaW5zZXJ0aW5nIHRoZSBub2RlIGludG8gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGVcbiAqIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaCB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZTogTm9kZSwgcmVmTm9kZTogTm9kZXxudWxsID0gbnVsbCkge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gIGlmIChyZWZOb2RlID09PSBudWxsIHx8IHJlZk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHdhbGtlciA9XG4gICAgICBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gIGxldCBpbnNlcnRDb3VudCA9IDA7XG4gIGxldCB3YWxrZXJJbmRleCA9IC0xO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICB3YWxrZXJJbmRleCsrO1xuICAgIGNvbnN0IHdhbGtlck5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICBpZiAod2Fsa2VyTm9kZSA9PT0gcmVmTm9kZSkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgcmVmTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgfVxuICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xICYmIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggPT09IHdhbGtlckluZGV4KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBpbnNlcnRlZCB0aGUgbm9kZSwgc2ltcGx5IGFkanVzdCBhbGwgc3Vic2VxdWVudCBwYXJ0c1xuICAgICAgaWYgKGluc2VydENvdW50ID4gMCkge1xuICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggKz0gaW5zZXJ0Q291bnQ7XG4gICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuLyoqXG4gKiBUaGUgUGFydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBvZiBhIHRlbXBsYXRlIGluc3RhbmNlIHJlbmRlcmVkXG4gKiBieSBsaXQtaHRtbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgdmFsdWU6IHVua25vd247XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgYnV0IGRvZXMgbm90IHdyaXRlIGl0IHRvIHRoZSBET00uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIGNvbW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZDtcblxuICAvKipcbiAgICogQ29tbWl0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBjYXVzZSBpdCB0byBhY3R1YWxseSBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gICAqL1xuICBjb21taXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlOiBvYmplY3QgPSB7fTtcblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIE5vZGVQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IHt9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVvZi1vcGVyYXRvclxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlID0gbnVsbHx1bmRlZmluZWR8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfFN5bWJvbHxiaWdpbnQ7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBQcmltaXRpdmUgPT4ge1xuICByZXR1cm4gKFxuICAgICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBBdHRyaWJ1dGVQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RyaW5nczogc3RyaW5nW107XG4gIHBhcnRzOiBBdHRyaWJ1dGVQYXJ0W107XG4gIGRpcnR5ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHRoaXMucGFydHNbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogQXR0cmlidXRlUGFydCB7XG4gICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRWYWx1ZSgpOiB1bmtub3duIHtcbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IHRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgIGlmICh2ICE9IG51bGwgJiZcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHYpIHx8XG4gICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgIHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiAodiBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYgYXMgSXRlcmFibGU8dW5rbm93bj4pIHtcbiAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBjb21taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcjtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoY29taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcikge1xuICAgIHRoaXMuY29tbWl0dGVyID0gY29taXR0ZXI7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHN0YXJ0Tm9kZSE6IE5vZGU7XG4gIGVuZE5vZGUhOiBOb2RlO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG8oY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0IHNpYmxpbmcuIEJvdGggYHJlZmAgYW5kXG4gICAqIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXMgc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhclxuICAgKiBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyTm9kZShyZWY6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmchO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvUGFydChwYXJ0OiBOb2RlUGFydCkge1xuICAgIHBhcnQuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICBwYXJ0Ll9pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGFmdGVyIGByZWZgXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZjogTm9kZVBhcnQpIHtcbiAgICByZWYuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICB0aGlzLl9jb21taXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICh2YWx1ZSBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlIGFzIEl0ZXJhYmxlPHVua25vd24+KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbm90aGluZztcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luc2VydChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0Tm9kZSh2YWx1ZTogTm9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgKG5vZGUgYXMgVGV4dCkuZGF0YSA9IHZhbHVlIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tbWl0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpKSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRJdGVyYWJsZSh2YWx1ZTogSXRlcmFibGU8dW5rbm93bj4pOiB2b2lkIHtcbiAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG5cbiAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAvLyBpdGVyYWJsZSBhbmQgX3ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgLy8gcmVuZGVyLiBJZiBfdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlIGFzIE5vZGVQYXJ0W107XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IGl0ZW1QYXJ0OiBOb2RlUGFydHx1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuXG4gICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtUGFydC5pbnNlcnRBZnRlclBhcnQoaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgIHBhcnRJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydCEuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pIHtcbiAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgIChzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJiBzdHJpbmdzWzBdID09PSAnJyAmJiBzdHJpbmdzWzFdID09PSAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogUHJvcGVydHlQYXJ0IHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydCh0aGlzKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaW5nbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnRzWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gIH1cblxuICBjb21taXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICh0aGlzLmVsZW1lbnQgYXMgYW55KVt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge31cblxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhyaWRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xufSBjYXRjaCAoX2UpIHtcbn1cblxuXG50eXBlIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID1cbiAgICBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0JlBhcnRpYWw8QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM+O1xuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQ7XG4gIHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIF9vcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG4gIF9wZW5kaW5nVmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgX2JvdW5kSGFuZGxlRXZlbnQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPVxuICAgICAgICBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcblxuICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX29wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLnZhbHVlIGFzIEV2ZW50TGlzdGVuZXJPYmplY3QpLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN8dW5kZWZpbmVkKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgICB7Y2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZX0gOlxuICAgICAgICAgby5jYXB0dXJlIGFzIEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtOb2RlUGFydH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwPE5vZGUsIE5vZGVQYXJ0PigpO1xuXG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9ucz86IFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4pID0+IHtcbiAgICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgdG8gYWRkIHNoYWR5IERPTS9zaGFkeSBDU1MgcG9seWZpbGwgc3VwcG9ydCB0byBsaXQtaHRtbCB0ZW1wbGF0ZVxuICogcmVuZGVyaW5nLiBTZWUgdGhlIFtbcmVuZGVyXV0gbWV0aG9kIGZvciBkZXRhaWxzLlxuICpcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtpbnNlcnROb2RlSW50b1RlbXBsYXRlLCByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZX0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7cGFydHMsIHJlbmRlciBhcyBsaXRSZW5kZXJ9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7dGVtcGxhdGVDYWNoZXN9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuZXhwb3J0IHtodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8vIEdldCBhIGtleSB0byBsb29rdXAgaW4gYHRlbXBsYXRlQ2FjaGVzYC5cbmNvbnN0IGdldFRlbXBsYXRlQ2FjaGVLZXkgPSAodHlwZTogc3RyaW5nLCBzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICBgJHt0eXBlfS0tJHtzY29wZU5hbWV9YDtcblxubGV0IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSB0cnVlO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IGZhbHNlO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgICAgYEluY29tcGF0aWJsZSBTaGFkeUNTUyB2ZXJzaW9uIGRldGVjdGVkLmAgK1xuICAgICAgYFBsZWFzZSB1cGRhdGUgdG8gYXQgbGVhc3QgQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzQDIuMC4yIGFuZGAgK1xuICAgICAgYEB3ZWJjb21wb25lbnRzL3NoYWR5Y3NzQDEuMy4xLmApO1xuICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59XG5cbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpLFxuICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAoY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbikge1xuICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUyEucHJlcGFyZVRlbXBsYXRlRG9tKGVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCBlbGVtZW50KTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfTtcblxuY29uc3QgVEVNUExBVEVfVFlQRVMgPSBbJ2h0bWwnLCAnc3ZnJ107XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmNvbnN0IHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMgPSAoc2NvcGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlQ2FjaGVzLmdldChnZXRUZW1wbGF0ZUNhY2hlS2V5KHR5cGUsIHNjb3BlTmFtZSkpO1xuICAgIGlmICh0ZW1wbGF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGVtcGxhdGVzLmtleVN0cmluZy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9fSA9IHRlbXBsYXRlO1xuICAgICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtIFNldCBjb25zdHJ1Y3RvclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG4gICAgICAgIEFycmF5LmZyb20oY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKS5mb3JFYWNoKChzOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgc3R5bGVzLmFkZChzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNoYWR5UmVuZGVyU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLCBlbnN1cmVzIHRoYXQgU2hhZHlDU1Mgc3R5bGUgc2NvcGluZyBpcyBwZXJmb3JtZWQuXG4gKiBUaGlzIGlzIGRvbmUganVzdCBvbmNlIHBlciBzY29wZSBuYW1lIHNvIHRoZSBmcmFnbWVudCBhbmQgdGVtcGxhdGUgY2Fubm90XG4gKiBiZSBtb2RpZmllZC5cbiAqICgxKSBleHRyYWN0cyBzdHlsZXMgZnJvbSB0aGUgcmVuZGVyZWQgZnJhZ21lbnQgYW5kIGhhbmRzIHRoZW0gdG8gU2hhZHlDU1NcbiAqIHRvIGJlIHNjb3BlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50XG4gKiAoMikgcmVtb3ZlcyBzdHlsZSBlbGVtZW50cyBmcm9tIGFsbCBsaXQtaHRtbCBUZW1wbGF0ZXMgZm9yIHRoaXMgc2NvcGUgbmFtZS5cbiAqXG4gKiBOb3RlLCA8c3R5bGU+IGVsZW1lbnRzIGNhbiBvbmx5IGJlIHBsYWNlZCBpbnRvIHRlbXBsYXRlcyBmb3IgdGhlXG4gKiBpbml0aWFsIHJlbmRlcmluZyBvZiB0aGUgc2NvcGUuIElmIDxzdHlsZT4gZWxlbWVudHMgYXJlIGluY2x1ZGVkIGluIHRlbXBsYXRlc1xuICogZHluYW1pY2FsbHkgcmVuZGVyZWQgdG8gdGhlIHNjb3BlIChhZnRlciB0aGUgZmlyc3Qgc2NvcGUgcmVuZGVyKSwgdGhleSB3aWxsXG4gKiBub3QgYmUgc2NvcGVkIGFuZCB0aGUgPHN0eWxlPiB3aWxsIGJlIGxlZnQgaW4gdGhlIHRlbXBsYXRlIGFuZCByZW5kZXJlZFxuICogb3V0cHV0LlxuICovXG5jb25zdCBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgPVxuICAgIChyZW5kZXJlZERPTTogRG9jdW1lbnRGcmFnbWVudCwgdGVtcGxhdGU6IFRlbXBsYXRlLCBzY29wZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgc2hhZHlSZW5kZXJTZXQuYWRkKHNjb3BlTmFtZSk7XG4gICAgICAvLyBNb3ZlIHN0eWxlcyBvdXQgb2YgcmVuZGVyZWQgRE9NIGFuZCBzdG9yZS5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHJlbmRlcmVkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc3R5bGVzLCBza2lwIHVubmVjZXNzYXJ5IHdvcmtcbiAgICAgIGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEVuc3VyZSBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgaXMgY2FsbGVkIHRvIHN1cHBvcnQgYWRkaW5nXG4gICAgICAgIC8vIHN0eWxlcyB2aWEgYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGAgc2luY2UgdGhhdCByZXF1aXJlcyB0aGF0XG4gICAgICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGlzIGNhbGxlZC5cbiAgICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGUuZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uZGVuc2VkU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gQ29sbGVjdCBzdHlsZXMgaW50byBhIHNpbmdsZSBzdHlsZS4gVGhpcyBoZWxwcyB1cyBtYWtlIHN1cmUgU2hhZHlDU1NcbiAgICAgIC8vIG1hbmlwdWxhdGlvbnMgd2lsbCBub3QgcHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gZml4IHVwIHRlbXBsYXRlXG4gICAgICAvLyBwYXJ0IGluZGljZXMuXG4gICAgICAvLyBOT1RFOiBjb2xsZWN0aW5nIHN0eWxlcyBpcyBpbmVmZmljaWVudCBmb3IgYnJvd3NlcnMgYnV0IFNoYWR5Q1NTXG4gICAgICAvLyBjdXJyZW50bHkgZG9lcyB0aGlzIGFueXdheS4gV2hlbiBpdCBkb2VzIG5vdCwgdGhpcyBzaG91bGQgYmUgY2hhbmdlZC5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICBzdHlsZS5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIGNvbmRlbnNlZFN0eWxlLnRleHRDb250ZW50ISArPSBzdHlsZS50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBzdHlsZXMgZnJvbSBuZXN0ZWQgdGVtcGxhdGVzIGluIHRoaXMgc2NvcGUuXG4gICAgICByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZSk7XG4gICAgICAvLyBBbmQgdGhlbiBwdXQgdGhlIGNvbmRlbnNlZCBzdHlsZSBpbnRvIHRoZSBcInJvb3RcIiB0ZW1wbGF0ZSBwYXNzZWQgaW4gYXNcbiAgICAgIC8vIGB0ZW1wbGF0ZWAuXG4gICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgICAgICAgIHRlbXBsYXRlLCBjb25kZW5zZWRTdHlsZSwgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBTaGFkeUNTUyBnZXRzIHRoZSB0ZW1wbGF0ZSB0aGF0IGBsaXQtaHRtbGBcbiAgICAgIC8vIHdpbGwgYWN0dWFsbHkgcmVuZGVyIHNvIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgc3R5bGUgaW5zaWRlIHdoZW5cbiAgICAgIC8vIG5lZWRlZCAoZS5nLiBAYXBwbHkgbmF0aXZlIFNoYWRvdyBET00gY2FzZSkuXG4gICAgICB3aW5kb3cuU2hhZHlDU1MhLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZS5lbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUyEubmF0aXZlU2hhZG93KSB7XG4gICAgICAgIC8vIFdoZW4gaW4gbmF0aXZlIFNoYWRvdyBET00sIHJlLWFkZCBzdHlsaW5nIHRvIHJlbmRlcmVkIGNvbnRlbnQgdXNpbmdcbiAgICAgICAgLy8gdGhlIHN0eWxlIFNoYWR5Q1NTIHByb2R1Y2VkLlxuICAgICAgICBjb25zdCBzdHlsZSA9IHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpITtcbiAgICAgICAgcmVuZGVyZWRET00uaW5zZXJ0QmVmb3JlKHN0eWxlLmNsb25lTm9kZSh0cnVlKSwgcmVuZGVyZWRET00uZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIG5vdCBpbiBuYXRpdmUgU2hhZG93IERPTSwgYXQgdGhpcyBwb2ludCBTaGFkeUNTUyB3aWxsIGhhdmVcbiAgICAgICAgLy8gcmVtb3ZlZCB0aGUgc3R5bGUgZnJvbSB0aGUgbGl0IHRlbXBsYXRlIGFuZCBwYXJ0cyB3aWxsIGJlIGJyb2tlbiBhcyBhXG4gICAgICAgIC8vIHJlc3VsdC4gVG8gZml4IHRoaXMsIHdlIHB1dCBiYWNrIHRoZSBzdHlsZSBub2RlIFNoYWR5Q1NTIHJlbW92ZWRcbiAgICAgICAgLy8gYW5kIHRoZW4gdGVsbCBsaXQgdG8gcmVtb3ZlIHRoYXQgbm9kZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gTk9URSwgU2hhZHlDU1MgY3JlYXRlcyBpdHMgb3duIHN0eWxlIHNvIHdlIGNhbiBzYWZlbHkgYWRkL3JlbW92ZVxuICAgICAgICAvLyBgY29uZGVuc2VkU3R5bGVgIGhlcmUuXG4gICAgICAgIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBjb25kZW5zZWRTdHlsZSwgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zdCByZW1vdmVzID0gbmV3IFNldCgpO1xuICAgICAgICByZW1vdmVzLmFkZChjb25kZW5zZWRTdHlsZSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCByZW1vdmVzKTtcbiAgICAgIH1cbiAgICB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoYWR5UmVuZGVyT3B0aW9ucyBleHRlbmRzIFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4ge1xuICBzY29wZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBFeHRlbnNpb24gdG8gdGhlIHN0YW5kYXJkIGByZW5kZXJgIG1ldGhvZCB3aGljaCBzdXBwb3J0cyByZW5kZXJpbmdcbiAqIHRvIFNoYWRvd1Jvb3RzIHdoZW4gdGhlIFNoYWR5RE9NIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWRvbSlcbiAqIGFuZCBTaGFkeUNTUyAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MpIHBvbHlmaWxscyBhcmUgdXNlZFxuICogb3Igd2hlbiB0aGUgd2ViY29tcG9uZW50c2pzXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzKSBwb2x5ZmlsbCBpcyB1c2VkLlxuICpcbiAqIEFkZHMgYSBgc2NvcGVOYW1lYCBvcHRpb24gd2hpY2ggaXMgdXNlZCB0byBzY29wZSBlbGVtZW50IERPTSBhbmQgc3R5bGVzaGVldHNcbiAqIHdoZW4gbmF0aXZlIFNoYWRvd0RPTSBpcyB1bmF2YWlsYWJsZS4gVGhlIGBzY29wZU5hbWVgIHdpbGwgYmUgYWRkZWQgdG9cbiAqIHRoZSBjbGFzcyBhdHRyaWJ1dGUgb2YgYWxsIHJlbmRlcmVkIERPTS4gSW4gYWRkaXRpb24sIGFueSBzdHlsZSBlbGVtZW50cyB3aWxsXG4gKiBiZSBhdXRvbWF0aWNhbGx5IHJlLXdyaXR0ZW4gd2l0aCB0aGlzIGBzY29wZU5hbWVgIHNlbGVjdG9yIGFuZCBtb3ZlZCBvdXRcbiAqIG9mIHRoZSByZW5kZXJlZCBET00gYW5kIGludG8gdGhlIGRvY3VtZW50IGA8aGVhZD5gLlxuICpcbiAqIEl0IGlzIGNvbW1vbiB0byB1c2UgdGhpcyByZW5kZXIgbWV0aG9kIGluIGNvbmp1bmN0aW9uIHdpdGggYSBjdXN0b20gZWxlbWVudFxuICogd2hpY2ggcmVuZGVycyBhIHNoYWRvd1Jvb3QuIFdoZW4gdGhpcyBpcyBkb25lLCB0eXBpY2FsbHkgdGhlIGVsZW1lbnQnc1xuICogYGxvY2FsTmFtZWAgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGBzY29wZU5hbWVgLlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIERPTSBzY29waW5nLCBTaGFkeUNTUyBhbHNvIHN1cHBvcnRzIGEgYmFzaWMgc2hpbSBmb3IgY3NzXG4gKiBjdXN0b20gcHJvcGVydGllcyAobmVlZGVkIG9ubHkgb24gb2xkZXIgYnJvd3NlcnMgbGlrZSBJRTExKSBhbmQgYSBzaGltIGZvclxuICogYSBkZXByZWNhdGVkIGZlYXR1cmUgY2FsbGVkIGBAYXBwbHlgIHRoYXQgc3VwcG9ydHMgYXBwbHlpbmcgYSBzZXQgb2YgY3NzXG4gKiBjdXN0b20gcHJvcGVydGllcyB0byBhIGdpdmVuIGxvY2F0aW9uLlxuICpcbiAqIFVzYWdlIGNvbnNpZGVyYXRpb25zOlxuICpcbiAqICogUGFydCB2YWx1ZXMgaW4gYDxzdHlsZT5gIGVsZW1lbnRzIGFyZSBvbmx5IGFwcGxpZWQgdGhlIGZpcnN0IHRpbWUgYSBnaXZlblxuICogYHNjb3BlTmFtZWAgcmVuZGVycy4gU3Vic2VxdWVudCBjaGFuZ2VzIHRvIHBhcnRzIGluIHN0eWxlIGVsZW1lbnRzIHdpbGwgaGF2ZVxuICogbm8gZWZmZWN0LiBCZWNhdXNlIG9mIHRoaXMsIHBhcnRzIGluIHN0eWxlIGVsZW1lbnRzIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yXG4gKiB2YWx1ZXMgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSwgZm9yIGV4YW1wbGUgcGFydHMgdGhhdCBzZXQgc2NvcGUtd2lkZSB0aGVtZVxuICogdmFsdWVzIG9yIHBhcnRzIHdoaWNoIHJlbmRlciBzaGFyZWQgc3R5bGUgZWxlbWVudHMuXG4gKlxuICogKiBOb3RlLCBkdWUgdG8gYSBsaW1pdGF0aW9uIG9mIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgcmVuZGVyaW5nIGluIGFcbiAqIGN1c3RvbSBlbGVtZW50J3MgYGNvbnN0cnVjdG9yYCBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkIHJlbmRlcmluZyBzaG91bGRcbiAqIGVpdGhlciBkb25lIGFzeW5jaHJvbm91c2x5LCBmb3IgZXhhbXBsZSBhdCBtaWNyb3Rhc2sgdGltaW5nIChmb3IgZXhhbXBsZVxuICogYFByb21pc2UucmVzb2x2ZSgpYCksIG9yIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBlbGVtZW50J3NcbiAqIGBjb25uZWN0ZWRDYWxsYmFja2AgcnVucy5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9ucyB3aGVuIHVzaW5nIHNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgb3IgYEBhcHBseWA6XG4gKlxuICogKiBXaGVuZXZlciBhbnkgZHluYW1pYyBjaGFuZ2VzIGFyZSBtYWRlIHdoaWNoIGFmZmVjdFxuICogY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCBgU2hhZHlDU1Muc3R5bGVFbGVtZW50KGVsZW1lbnQpYCBtdXN0IGJlIGNhbGxlZFxuICogdG8gdXBkYXRlIHRoZSBlbGVtZW50LiBUaGVyZSBhcmUgdHdvIGNhc2VzIHdoZW4gdGhpcyBpcyBuZWVkZWQ6XG4gKiAoMSkgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIGEgbmV3IHBhcmVudCwgKDIpIGEgY2xhc3MgaXMgYWRkZWQgdG8gdGhlXG4gKiBlbGVtZW50IHRoYXQgY2F1c2VzIGl0IHRvIG1hdGNoIGRpZmZlcmVudCBjdXN0b20gcHJvcGVydGllcy5cbiAqIFRvIGFkZHJlc3MgdGhlIGZpcnN0IGNhc2Ugd2hlbiByZW5kZXJpbmcgYSBjdXN0b20gZWxlbWVudCwgYHN0eWxlRWxlbWVudGBcbiAqIHNob3VsZCBiZSBjYWxsZWQgaW4gdGhlIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgLlxuICpcbiAqICogU2hpbW1lZCBjdXN0b20gcHJvcGVydGllcyBtYXkgb25seSBiZSBkZWZpbmVkIGVpdGhlciBmb3IgYW4gZW50aXJlXG4gKiBzaGFkb3dSb290IChmb3IgZXhhbXBsZSwgaW4gYSBgOmhvc3RgIHJ1bGUpIG9yIHZpYSBhIHJ1bGUgdGhhdCBkaXJlY3RseVxuICogbWF0Y2hlcyBhbiBlbGVtZW50IHdpdGggYSBzaGFkb3dSb290LiBJbiBvdGhlciB3b3JkcywgaW5zdGVhZCBvZiBmbG93aW5nIGZyb21cbiAqIHBhcmVudCB0byBjaGlsZCBhcyBkbyBuYXRpdmUgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzXG4gKiBmbG93IG9ubHkgZnJvbSBzaGFkb3dSb290cyB0byBuZXN0ZWQgc2hhZG93Um9vdHMuXG4gKlxuICogKiBXaGVuIHVzaW5nIGBAYXBwbHlgIG1peGluZyBjc3Mgc2hvcnRoYW5kIHByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIG5vbi1zaG9ydGhhbmQgbmFtZXMgKGZvciBleGFtcGxlIGBib3JkZXJgIGFuZCBgYm9yZGVyLXdpZHRoYCkgaXMgbm90XG4gKiBzdXBwb3J0ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9uczogU2hhZHlSZW5kZXJPcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBzY29wZU5hbWUgPSBvcHRpb25zLnNjb3BlTmFtZTtcbiAgICAgIGNvbnN0IGhhc1JlbmRlcmVkID0gcGFydHMuaGFzKGNvbnRhaW5lcik7XG4gICAgICBjb25zdCBuZWVkc1Njb3BpbmcgPSBjb250YWluZXIgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmXG4gICAgICAgICAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiAmJiByZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdDtcbiAgICAgIC8vIEhhbmRsZSBmaXJzdCByZW5kZXIgdG8gYSBzY29wZSBzcGVjaWFsbHkuLi5cbiAgICAgIGNvbnN0IGZpcnN0U2NvcGVSZW5kZXIgPSBuZWVkc1Njb3BpbmcgJiYgIXNoYWR5UmVuZGVyU2V0LmhhcyhzY29wZU5hbWUpO1xuICAgICAgLy8gT24gZmlyc3Qgc2NvcGUgcmVuZGVyLCByZW5kZXIgaW50byBhIGZyYWdtZW50OyB0aGlzIGNhbm5vdCBiZSBhIHNpbmdsZVxuICAgICAgLy8gZnJhZ21lbnQgdGhhdCBpcyByZXVzZWQgc2luY2UgbmVzdGVkIHJlbmRlcnMgY2FuIG9jY3VyIHN5bmNocm9ub3VzbHkuXG4gICAgICBjb25zdCByZW5kZXJDb250YWluZXIgPVxuICAgICAgICAgIGZpcnN0U2NvcGVSZW5kZXIgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBjb250YWluZXI7XG4gICAgICBsaXRSZW5kZXIoXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIHJlbmRlckNvbnRhaW5lcixcbiAgICAgICAgICB7dGVtcGxhdGVGYWN0b3J5OiBzaGFkeVRlbXBsYXRlRmFjdG9yeShzY29wZU5hbWUpLCAuLi5vcHRpb25zfSBhc1xuICAgICAgICAgICAgICBSZW5kZXJPcHRpb25zKTtcbiAgICAgIC8vIFdoZW4gcGVyZm9ybWluZyBmaXJzdCBzY29wZSByZW5kZXIsXG4gICAgICAvLyAoMSkgV2UndmUgcmVuZGVyZWQgaW50byBhIGZyYWdtZW50IHNvIHRoYXQgdGhlcmUncyBhIGNoYW5jZSB0b1xuICAgICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgYmVmb3JlIHN1Yi1lbGVtZW50cyBoaXQgdGhlIERPTVxuICAgICAgLy8gKHdoaWNoIG1pZ2h0IGNhdXNlIHRoZW0gdG8gcmVuZGVyIGJhc2VkIG9uIGEgY29tbW9uIHBhdHRlcm4gb2ZcbiAgICAgIC8vIHJlbmRlcmluZyBpbiBhIGN1c3RvbSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYCk7XG4gICAgICAvLyAoMikgU2NvcGUgdGhlIHRlbXBsYXRlIHdpdGggU2hhZHlDU1Mgb25lIHRpbWUgb25seSBmb3IgdGhpcyBzY29wZS5cbiAgICAgIC8vICgzKSBSZW5kZXIgdGhlIGZyYWdtZW50IGludG8gdGhlIGNvbnRhaW5lciBhbmQgbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gY29udGFpbmVyIGtub3dzIGl0cyBgcGFydGAgaXMgdGhlIG9uZSB3ZSBqdXN0IHJlbmRlcmVkLiBUaGlzIGVuc3VyZXNcbiAgICAgIC8vIERPTSB3aWxsIGJlIHJlLXVzZWQgb24gc3Vic2VxdWVudCByZW5kZXJzLlxuICAgICAgaWYgKGZpcnN0U2NvcGVSZW5kZXIpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzLmdldChyZW5kZXJDb250YWluZXIpITtcbiAgICAgICAgcGFydHMuZGVsZXRlKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIGlmIChwYXJ0LnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgICAgIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyhcbiAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyIGFzIERvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgICAgICAgIHBhcnQudmFsdWUudGVtcGxhdGUsXG4gICAgICAgICAgICAgIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJDb250YWluZXIpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0KTtcbiAgICAgIH1cbiAgICAgIC8vIEFmdGVyIGVsZW1lbnRzIGhhdmUgaGl0IHRoZSBET00sIHVwZGF0ZSBzdHlsaW5nIGlmIHRoaXMgaXMgdGhlXG4gICAgICAvLyBpbml0aWFsIHJlbmRlciB0byB0aGlzIGNvbnRhaW5lci5cbiAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHdoZW5ldmVyIGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSBzbyBpdCB3b3VsZCBiZVxuICAgICAgLy8gc2FmZXN0IHRvIGRvIGV2ZXJ5IHJlbmRlcjsgaG93ZXZlciwgdGhpcyB3b3VsZCByZWdyZXNzIHBlcmZvcm1hbmNlXG4gICAgICAvLyBzbyB3ZSBsZWF2ZSBpdCB1cCB0byB0aGUgdXNlciB0byBjYWxsIGBTaGFkeUNTU1Muc3R5bGVFbGVtZW50YFxuICAgICAgLy8gZm9yIGR5bmFtaWMgY2hhbmdlcy5cbiAgICAgIGlmICghaGFzUmVuZGVyZWQgJiYgbmVlZHNTY29waW5nKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUyEuc3R5bGVFbGVtZW50KChjb250YWluZXIgYXMgU2hhZG93Um9vdCkuaG9zdCk7XG4gICAgICB9XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHR5cGUgdGhhdCBjcmVhdGVzIGEgVGVtcGxhdGUgZnJvbSBhIFRlbXBsYXRlUmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgYSBob29rIGludG8gdGhlIHRlbXBsYXRlLWNyZWF0aW9uIHByb2Nlc3MgZm9yIHJlbmRlcmluZyB0aGF0XG4gKiByZXF1aXJlcyBzb21lIG1vZGlmaWNhdGlvbiBvZiB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkncmUgdXNlZCwgbGlrZSBTaGFkeUNTUyxcbiAqIHdoaWNoIG11c3QgYWRkIGNsYXNzZXMgdG8gZWxlbWVudHMgYW5kIHJlbW92ZSBzdHlsZXMuXG4gKlxuICogVGVtcGxhdGVzIHNob3VsZCBiZSBjYWNoZWQgYXMgYWdncmVzc2l2ZWx5IGFzIHBvc3NpYmxlLCBzbyB0aGF0IG1hbnlcbiAqIFRlbXBsYXRlUmVzdWx0cyBwcm9kdWNlZCBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gb25seSBkbyB0aGUgd29yayBvZlxuICogY3JlYXRpbmcgdGhlIFRlbXBsYXRlIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIFRlbXBsYXRlcyBhcmUgdXN1YWxseSBjYWNoZWQgYnkgVGVtcGxhdGVSZXN1bHQuc3RyaW5ncyBhbmRcbiAqIFRlbXBsYXRlUmVzdWx0LnR5cGUsIGJ1dCBtYXkgYmUgY2FjaGVkIGJ5IG90aGVyIGtleXMgaWYgdGhpcyBmdW5jdGlvblxuICogbW9kaWZpZXMgdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCBjdXJyZW50bHkgVGVtcGxhdGVGYWN0b3JpZXMgbXVzdCBub3QgYWRkLCByZW1vdmUsIG9yIHJlb3JkZXJcbiAqIGV4cHJlc3Npb25zLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBkZXNjcmliZSBzdWNoIGEgbW9kaWZpY2F0aW9uXG4gKiB0byByZW5kZXIoKSBzbyB0aGF0IHZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIHRvIHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZVxuICogdGVtcGxhdGUgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUZhY3RvcnkgPSAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4gVGVtcGxhdGU7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSB7XG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgfTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICB9XG5cbiAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEpTIHRlbXBsYXRlIHRhZ3MgcmV0YWluIGlkZW50aXR5IGFjcm9zcyBtdWx0aXBsZVxuICogY2FsbHMgdG8gYSB0YWcgZm9yIHRoZSBzYW1lIGxpdGVyYWwsIHNvIHdlIGNhbiBjYWNoZSB3b3JrIGRvbmUgcGVyIGxpdGVyYWxcbiAqIGluIGEgTWFwLlxuICpcbiAqIFNhZmFyaSBjdXJyZW50bHkgaGFzIGEgYnVnIHdoaWNoIG9jY2FzaW9uYWxseSBicmVha3MgdGhpcyBiZWhhdmlvdXIsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCB0eXBlIHRlbXBsYXRlQ2FjaGUgPSB7XG4gIHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+O1xuICBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXA8c3RyaW5nLCB0ZW1wbGF0ZUNhY2hlPigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzQ0VQb2x5ZmlsbH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7aXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gIF9wYXJ0czogQXJyYXk8UGFydHx1bmRlZmluZWQ+ID0gW107XG4gIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcixcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXM6IHVua25vd25bXSkge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gV2hlbiB1c2luZyB0aGUgQ3VzdG9tIEVsZW1lbnRzIHBvbHlmaWxsLCBjbG9uZSB0aGUgbm9kZSwgcmF0aGVyIHRoYW5cbiAgICAvLyBpbXBvcnRpbmcgaXQsIHRvIGtlZXAgdGhlIGZyYWdtZW50IGluIHRoZSB0ZW1wbGF0ZSdzIGRvY3VtZW50LiBUaGlzXG4gICAgLy8gbGVhdmVzIHRoZSBmcmFnbWVudCBpbmVydCBzbyBjdXN0b20gZWxlbWVudHMgd29uJ3QgdXBncmFkZSBhbmRcbiAgICAvLyBwb3RlbnRpYWxseSBtb2RpZnkgdGhlaXIgY29udGVudHMgYnkgY3JlYXRpbmcgYSBwb2x5ZmlsbGVkIFNoYWRvd1Jvb3RcbiAgICAvLyB3aGlsZSB3ZSB0cmF2ZXJzZSB0aGUgdHJlZS5cbiAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudEZyYWdtZW50IDpcbiAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgY29uc3QgX3ByZXBhcmVJbnN0YW5jZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgLy8gbnVsbFxuICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGggJiYgbm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgLy8gQ29uc2VjdXRpdmUgUGFydHMgbWF5IGhhdmUgdGhlIHNhbWUgbm9kZSBpbmRleCwgaW4gdGhlIGNhc2Ugb2ZcbiAgICAgICAgLy8gbXVsdGlwbGUgYm91bmQgYXR0cmlidXRlcyBvbiBhbiBlbGVtZW50LiBTbyBlYWNoIGl0ZXJhdGlvbiB3ZSBlaXRoZXJcbiAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBub2RlSW5kZXgsIGlmIHdlIGFyZW4ndCBvbiBhIG5vZGUgd2l0aCBhIHBhcnQsIG9yIHRoZVxuICAgICAgICAvLyBwYXJ0SW5kZXggaWYgd2UgYXJlLiBCeSBub3QgaW5jcmVtZW50aW5nIHRoZSBub2RlSW5kZXggd2hlbiB3ZSBmaW5kIGFcbiAgICAgICAgLy8gcGFydCwgd2UgYWxsb3cgZm9yIHRoZSBuZXh0IHBhcnQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgIC8vIG5vZGUgaWYgbmVjY2Vzc2FzcnkuXG4gICAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZUluZGV4ID09PSBwYXJ0LmluZGV4KSB7XG4gICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUucHJldmlvdXNTaWJsaW5nISk7XG4gICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgICAgICAgICAgIG5vZGUgYXMgRWxlbWVudCwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgX3ByZXBhcmVJbnN0YW5jZSgobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5jb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBfcHJlcGFyZUluc3RhbmNlKGZyYWdtZW50KTtcbiAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlcGFyZW50Tm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7Ym91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xuICB2YWx1ZXM6IHVua25vd25bXTtcbiAgdHlwZTogc3RyaW5nO1xuICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHZhbHVlczogdW5rbm93bltdLCB0eXBlOiBzdHJpbmcsXG4gICAgICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAvLyBUaGlzIGV4ZWMoKSBjYWxsIGRvZXMgdHdvIHRoaW5nczpcbiAgICAgIC8vIDEpIEFwcGVuZHMgYSBzdWZmaXggdG8gdGhlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbFxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIHBhcnNpbmcgdGhhdCBJRTExIGFuZCBFZGdlIGRvLCBsaWtlIGZvciBzdHlsZSBhbmRcbiAgICAgIC8vIG1hbnkgU1ZHIGF0dHJpYnV0ZXMuIFRoZSBUZW1wbGF0ZSBjbGFzcyBhbHNvIGFwcGVuZHMgdGhlIHNhbWUgc3VmZml4XG4gICAgICAvLyB3aGVuIGxvb2tpbmcgdXAgYXR0cmlidXRlcyB0byBjcmVhdGUgUGFydHMuXG4gICAgICAvLyAyKSBBZGRzIGFuIHVucXVvdGVkLWF0dHJpYnV0ZS1zYWZlIG1hcmtlciBmb3IgdGhlIGZpcnN0IGV4cHJlc3Npb24gaW5cbiAgICAgIC8vIGFuIGF0dHJpYnV0ZS4gU3Vic2VxdWVudCBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMgd2lsbCB1c2Ugbm9kZSBtYXJrZXJzLFxuICAgICAgLy8gYW5kIHRoaXMgaXMgc2FmZSBzaW5jZSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZXhwcmVzc2lvbnMgYXJlXG4gICAgICAvLyBndWFyYW50ZWVkIHRvIGJlIHF1b3RlZC5cbiAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIC8vIFdlJ3JlIHN0YXJ0aW5nIGEgbmV3IGJvdW5kIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gQWRkIHRoZSBzYWZlIGF0dHJpYnV0ZSBzdWZmaXgsIGFuZCB1c2UgdW5xdW90ZWQtYXR0cmlidXRlLXNhZmVcbiAgICAgICAgLy8gbWFya2VyLlxuICAgICAgICBodG1sICs9IHMuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSArIG1hdGNoWzFdICsgbWF0Y2hbMl0gK1xuICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggKyBtYXRjaFszXSArIG1hcmtlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlJ3JlIGVpdGhlciBpbiBhIGJvdW5kIG5vZGUsIG9yIHRyYWlsaW5nIGJvdW5kIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gRWl0aGVyIHdheSwgbm9kZU1hcmtlciBpcyBzYWZlIHRvIHVzZS5cbiAgICAgICAgaHRtbCArPSBzICsgbm9kZU1hcmtlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWwgKyB0aGlzLnN0cmluZ3NbZW5kSW5kZXhdO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZCE7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcblxuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcblxuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcblxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBjb25zdCBub2Rlc1RvUmVtb3ZlOiBOb2RlW10gPSBbXTtcbiAgICBjb25zdCBfcHJlcGFyZVRlbXBsYXRlID0gKHRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgIC8vIG51bGxcbiAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbGFzdCBpbmRleCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0LiBXZSB0cnkgdG8gZGVsZXRlXG4gICAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAgIC8vIHRvIHRoZSBzYW1lIGluZGV4LiBUaGV5IG11c3QgaGF2ZSBhIGNvbnN0YW50IG5vZGUgYmV0d2Vlbi5cbiAgICAgIGxldCBsYXN0UGFydEluZGV4ID0gMDtcbiAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQgfCBDb21tZW50IHwgVGV4dDtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gKG5vZGUgYXMgRWxlbWVudCkuYXR0cmlidXRlcztcbiAgICAgICAgICAgIC8vIFBlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgICAgLy8gSW4gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAgIC8vIGFzc3VtZSBhIGNvcnJlc3BvbmRhbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgLy8gQWxsIGJvdW5kIGF0dHJpYnV0ZXMgaGF2ZSBoYWQgYSBzdWZmaXggYWRkZWQgaW5cbiAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgICAvLyB0aGUgc3VmZml4LlxuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5nc30pO1xuICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgIHBhcnRJbmRleCArPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgobm9kZSBhcyBFbGVtZW50KS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICBfcHJlcGFyZVRlbXBsYXRlKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gKG5vZGUgYXMgVGV4dCkuZGF0YSE7XG4gICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gZGF0YS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAoc3RyaW5nc1tpXSA9PT0gJycpID8gY3JlYXRlTWFya2VyKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbaV0pLFxuICAgICAgICAgICAgICAgICAgbm9kZSk7XG4gICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogKytpbmRleH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgIGlmIChzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8pIHtcbiAgICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgLy8gICogVGhlIHByZXZpb3VzU2libGluZyBpcyBhbHJlYWR5IHRoZSBzdGFydCBvZiBhIHByZXZpb3VzIHBhcnRcbiAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleH0pO1xuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiByZW1vdmUgaXQgdG8gc2F2ZSBmdXR1cmUgY29zdHMuXG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICgoaSA9IChub2RlIGFzIENvbW1lbnQpLmRhdGEhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PVxuICAgICAgICAgICAgICAgICAgIC0xKSB7XG4gICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4OiAtMX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3ByZXBhcmVUZW1wbGF0ZShlbGVtZW50KTtcbiAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgIG4ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHR5cGU6ICdub2RlJyxcbiAgaW5kZXg6IG51bWJlclxufXx7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW119O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMFxuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSBjb250cm9sIGNoYXJhY3Rlciwgc3BhY2UgY2hhcmFjdGVyLCAoJyksXG4gKiAgICAoXCIpLCBcIj5cIiwgXCI9XCIsIG9yIFwiL1wiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5leHBvcnQgY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9XG4gICAgLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKlxuICogTWFpbiBsaXQtaHRtbCBtb2R1bGUuXG4gKlxuICogTWFpbiBleHBvcnRzOlxuICpcbiAqIC0gIFtbaHRtbF1dXG4gKiAtICBbW3N2Z11dXG4gKiAtICBbW3JlbmRlcl1dXG4gKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7ZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuZXhwb3J0IHtEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtkaXJlY3RpdmUsIERpcmVjdGl2ZUZuLCBpc0RpcmVjdGl2ZX0gZnJvbSAnLi9saWIvZGlyZWN0aXZlLmpzJztcbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBsaW5lIHdoZW4gd2UgZ2V0IE5vZGVQYXJ0IG1vdmluZyBtZXRob2RzXG5leHBvcnQge3JlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzfSBmcm9tICcuL2xpYi9kb20uanMnO1xuZXhwb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQXR0cmlidXRlUGFydCwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgaXNQcmltaXRpdmUsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciwgUHJvcGVydHlQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0cy5qcyc7XG5leHBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vbGliL3JlbmRlci1vcHRpb25zLmpzJztcbmV4cG9ydCB7cGFydHMsIHJlbmRlcn0gZnJvbSAnLi9saWIvcmVuZGVyLmpzJztcbmV4cG9ydCB7dGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7Y3JlYXRlTWFya2VyLCBpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGV9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsaXRIdG1sVmVyc2lvbnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMC4wJyk7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnaHRtbCcsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pID0+XG4gICAgbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qKlxyXG4gKiBJbXBvcnQgTGl0RWxlbWVudCBiYXNlIGNsYXNzLCBodG1sIGhlbHBlciBmdW5jdGlvbixcclxuICogYW5kIFR5cGVTY3JpcHQgZGVjb3JhdG9yc1xyXG4gKiovXHJcbmltcG9ydCB7XHJcbiAgICBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eVxyXG59IGZyb20gJ2xpdC1lbGVtZW50JztcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhlIGN1c3RvbUVsZW1lbnQgZGVjb3JhdG9yIHRvIGRlZmluZSB5b3VyIGNsYXNzIGFzXHJcbiAqIGEgY3VzdG9tIGVsZW1lbnQuIFJlZ2lzdGVycyA8bXktZWxlbWVudD4gYXMgYW4gSFRNTCB0YWcuXHJcbiAqL1xyXG5AY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXHJcbmV4cG9ydCBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBvYnNlcnZlZCBwcm9wZXJ0eS4gVHJpZ2dlcnMgdXBkYXRlIG9uIGNoYW5nZS5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KVxyXG4gICAgZm9vID0gJ2Zvbyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnQgYHJlbmRlcmAgdG8gZGVmaW5lIGEgdGVtcGxhdGUgZm9yIHlvdXIgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVzZSBKYXZhU2NyaXB0IGV4cHJlc3Npb25zIHRvIGluY2x1ZGUgcHJvcGVydHkgdmFsdWVzIGluXHJcbiAgICAgICAgICogdGhlIGVsZW1lbnQgdGVtcGxhdGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIGh0bWxgPHA+JHt0aGlzLmZvb308L3A+YDtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==