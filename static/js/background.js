/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(85);
} else {}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(136)();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js
;

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  var hookCallback;

  function hooks() {
    return hookCallback.apply(null, arguments);
  } // This is done to register the method called with moment()
  // without creating circular dependencies.


  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;

      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          return false;
        }
      }

      return true;
    }
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
    var res = [],
        i;

    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }

    return res;
  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }

    return m._pf;
  }

  var some;

  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function some(fun) {
      var t = Object(this);
      var len = t.length >>> 0;

      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some.call(flags.parsedDateParts, function (i) {
        return i != null;
      });
      var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }

    return m._isValid;
  }

  function createInvalid(flags) {
    var m = createUTC(NaN);

    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  } // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.


  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }

    if (!isUndefined(from._i)) {
      to._i = from._i;
    }

    if (!isUndefined(from._f)) {
      to._f = from._f;
    }

    if (!isUndefined(from._l)) {
      to._l = from._l;
    }

    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }

    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }

    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }

    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }

    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }

    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from[prop];

        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  var updateInProgress = false; // Moment prototype object

  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);

    if (!this.isValid()) {
      this._d = new Date(NaN);
    } // Prevent infinite loop in case updateOffset creates new moment
    // objects.


    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }

  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  } // compare two arrays, return the number of differences


  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;

    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }

    return diffs + lengthDiff;
  }

  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }

  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }

      if (firstTime) {
        var args = [];
        var arg;

        for (var i = 0; i < arguments.length; i++) {
          arg = '';

          if (typeof arguments[i] === 'object') {
            arg += '\n[' + i + '] ';

            for (var key in arguments[0]) {
              arg += key + ': ' + arguments[0][key] + ', ';
            }

            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }

          args.push(arg);
        }

        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
        firstTime = false;
      }

      return fn.apply(this, arguments);
    }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }

    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set(config) {
    var prop, i;

    for (i in config) {
      prop = config[i];

      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }

    this._config = config; // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.

    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
  }

  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
        prop;

    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }

    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }

    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  var keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function keys(obj) {
      var i,
          res = [];

      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }

      return res;
    };
  }

  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };

  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };

  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate() {
    return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };

  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }

  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);

        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    var units = [];

    for (var u in unitsObj) {
      units.push({
        unit: u,
        priority: priorities[u]
      });
    }

    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }

  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {}; // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }

  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;

    if (typeof callback === 'string') {
      func = function func() {
        return this[callback]();
      };
    }

    if (token) {
      formatTokenFunctions[token] = func;
    }

    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }

    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }

    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      var output = '',
          i;

      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }

      return output;
    };
  } // format date using native date object


  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;

    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  var match1 = /\d/; //       0 - 9

  var match2 = /\d\d/; //      00 - 99

  var match3 = /\d{3}/; //     000 - 999

  var match4 = /\d{4}/; //    0000 - 9999

  var match6 = /[+-]?\d{6}/; // -999999 - 999999

  var match1to2 = /\d\d?/; //       0 - 99

  var match3to4 = /\d\d\d\d?/; //     999 - 9999

  var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

  var match1to3 = /\d{1,3}/; //       0 - 999

  var match1to4 = /\d{1,4}/; //       0 - 9999

  var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

  var matchUnsigned = /\d+/; //       0 - inf

  var matchSigned = /[+-]?\d+/; //    -inf - inf

  var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months

  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  var regexes = {};

  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }

  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken(token, callback) {
    var i,
        func = callback;

    if (typeof token === 'string') {
      token = [token];
    }

    if (isNumber(callback)) {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }

    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8; // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

  addUnitAlias('year', 'y'); // PRIORITIES

  addUnitPriority('year', 1); // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  }); // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  } // HOOKS


  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  }; // MOMENTS


  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }

  function get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  } // MOMENTS


  function stringGet(units) {
    units = normalizeUnits(units);

    if (isFunction(this[units])) {
      return this[units]();
    }

    return this;
  }

  function stringSet(units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units);

      for (var i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units](value);
      }
    }

    return this;
  }

  function mod(n, x) {
    return (n % x + x) % x;
  }

  var indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function indexOf(o) {
      // I know
      var i;

      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }

      return -1;
    };
  }

  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }

    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  } // FORMATTING


  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  }); // ALIASES

  addUnitAlias('month', 'M'); // PRIORITY

  addUnitPriority('month', 8); // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  }); // LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months['standalone'];
    }

    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
    }

    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();

    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];

      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    } // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse


    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);

      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }

      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      } // test the regex


      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  } // MOMENTS


  function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

    return mom;
  }

  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }

  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;

  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }

      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }

      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }

  var defaultMonthsRegex = matchWord;

  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }

      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }

      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }

  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;

    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    } // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.


    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }

    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms); // the date constructor remaps years 0-99 to 1900-1999

    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }

    return date;
  }

  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments)); // the Date.UTC function remaps years 0-99 to 1900-1999

    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }

    return date;
  } // start-of-first-week - start-of-year


  function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
    fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }

  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear
    };
  }

  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  } // FORMATTING


  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W'); // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5); // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  }); // HELPERS
  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 6th is the first week of the year.

  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }

  function localeFirstDayOfYear() {
    return this._week.doy;
  } // MOMENTS


  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  } // FORMATTING


  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E'); // PRIORITY

  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11); // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  }); // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);

    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }

    return isNaN(input) ? null : input;
  } // LOCALES


  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

  function localeWeekdays(m, format) {
    if (!m) {
      return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
    }

    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

  function localeWeekdaysShort(m) {
    return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

  function localeWeekdaysMin(m) {
    return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);

      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
      }

      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      } // test the regex


      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  } // MOMENTS


  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }

  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    } // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.


    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }

  var defaultWeekdaysRegex = matchWord;

  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }

      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }

  var defaultWeekdaysShortRegex = matchWord;

  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }

      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }

  var defaultWeekdaysMinRegex = matchWord;

  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }

      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }

  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.


    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  } // FORMATTING


  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });

  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }

  meridiem('a', true);
  meridiem('A', false); // ALIASES

  addUnitAlias('hour', 'h'); // PRIORITY

  addUnitPriority('hour', 13); // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  }); // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  } // MOMENTS
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.


  var getSetHour = makeGetSet('Hours', true);
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  }; // internal storage for locale config files

  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  } // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;

      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));

        if (locale) {
          return locale;
        }

        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }

        j--;
      }

      i++;
    }

    return globalLocale;
  }

  function loadLocale(name) {
    var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

    if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        var aliasedRequire = require;
        !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }

    return locales[name];
  } // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.


  function getSetGlobalLocale(key, values) {
    var data;

    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale(name, config) {
    if (config !== null) {
      var locale,
          parentConfig = baseConfig;
      config.abbr = name;

      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);

          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }

            localeFamilies[config.parentLocale].push({
              name: name,
              config: config
            });
            return null;
          }
        }
      }

      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      } // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.


      getSetGlobalLocale(name);
      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }

  function updateLocale(name, config) {
    if (config != null) {
      var locale,
          tmpLocale,
          parentConfig = baseConfig; // MERGE

      tmpLocale = loadLocale(name);

      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }

      config = mergeConfigs(parentConfig, config);
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale; // backwards compat for now: also set the locale

      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }

    return locales[name];
  } // returns locale data


  function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);

      if (locale) {
        return locale;
      }

      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys(locales);
  }

  function checkOverflow(m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }

      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }

      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  } // Pick the first defined of two or three arguments.


  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }

    if (b != null) {
      return b;
    }

    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());

    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }

    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  } // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]


  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    } //if the day of the year is set, figure out what it is


    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    } // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything


    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    } // Zero out whatever was not defaulted, including time


    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    } // Check for 24:00:00.000


    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.

    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    } // check for mismatching day of week


    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
    w = config._w;

    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).

      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);

      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      var curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;

        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;

        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }

    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  } // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
  ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }

      if (dateFormat == null) {
        config._isValid = false;
        return;
      }

      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }

        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }

      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }

      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }

      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }

    return result;
  }

  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);

    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }

    return year;
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
          weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }

    return true;
  }

  var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };

  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10);
      var m = hm % 100,
          h = (hm - m) / 100;
      return h * 60 + m;
    }
  } // date and time from ref 2822 format


  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));

    if (match) {
      var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);

      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  } // date from iso format or fallback


  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);

    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);

    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    } // Final attempt, use Input Fallback


    hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  }); // constant that refers to the ISO standard

  hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


  hooks.RFC_2822 = function () {}; // date from string and format string


  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }

    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }

    config._a = [];
    getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
      //         'regex', getParseRegexForToken(token, config));

      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));

        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }

        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      } // don't parse if it's not a known token


      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }

        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    } // add remaining unparsed input length to the string


    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    } // clear _12h flag if hour is <= 12


    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }

  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }

    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);

      if (isPm && hour < 12) {
        hour += 12;
      }

      if (!isPm && hour === 12) {
        hour = 0;
      }

      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  } // date from string and array of format strings


  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;

    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);

      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }

      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (!isValid(tempConfig)) {
        continue;
      } // if there is any input that was not parsed add a penalty for that format


      currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;

      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }

  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));

    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || getLocale(config._l);

    if (input === null || format === undefined && input === '') {
      return createInvalid({
        nullInput: true
      });
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    var input = config._i;

    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = undefined;
    } // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423


    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }

  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
    var other = createLocal.apply(null, arguments);

    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
    var other = createLocal.apply(null, arguments);

    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  }); // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.

  function pickBy(fn, moments) {
    var res, i;

    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }

    if (!moments.length) {
      return createLocal();
    }

    res = moments[0];

    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }

    return res;
  } // TODO: Use [].sort instead?


  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }

  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }

  var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
    for (var key in m) {
      if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }

    var unitHasDecimal = false;

    for (var i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }

        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

    this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
    minutes * 6e4 + // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately

    this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.

    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = getLocale();

    this._bubble();
  }

  function isDuration(obj) {
    return obj instanceof Duration;
  }

  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  } // FORMATTING


  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();
      var sign = '+';

      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }

      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
    });
  }

  offset('Z', ':');
  offset('ZZ', ''); // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  }); // HELPERS
  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']

  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
      return null;
    }

    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  } // Return a moment from input, that is local/utc/zone equivalent to model.


  function cloneWithOffset(input, model) {
    var res, diff;

    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

      res._d.setTime(res._d.valueOf() + diff);

      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }

  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  } // HOOKS
  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.


  hooks.updateOffset = function () {}; // MOMENTS
  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.


  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;

    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);

        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }

      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }

      this._offset = input;
      this._isUTC = true;

      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }

      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }

      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }

  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }

  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }

    return this;
  }

  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);

      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }

    return this;
  }

  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }

    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }

  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  } // ASP.NET json date format regex


  var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day

  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
    match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input)) {
      duration = {};

      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');
    return res;
  }

  function momentsDifference(base, other) {
    var res;

    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }

    other = cloneWithOffset(other, base);

    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  } // TODO: remove 'name' arg after deprecation is removed


  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp; //invert the arguments, but complain about it

      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val;
        val = period;
        period = tmp;
      }

      val = typeof val === 'string' ? +val : val;
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }

    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }

    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }

    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  var add = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1(time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone() {
    return new Moment(this);
  }

  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units) || 'millisecond';

    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }

  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units) || 'millisecond';

    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }

  function isBetween(from, to, units, inclusivity) {
    var localFrom = isMoment(from) ? from : createLocal(from),
        localTo = isMoment(to) ? to : createLocal(to);

    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }

    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }

  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units) || 'millisecond';

    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }

  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }

  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }

  function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);

    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;

      case 'month':
        output = monthDiff(this, that);
        break;

      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;

      case 'second':
        output = (this - that) / 1e3;
        break;
      // 1000

      case 'minute':
        output = (this - that) / 6e4;
        break;
      // 1000 * 60

      case 'hour':
        output = (this - that) / 36e5;
        break;
      // 1000 * 60 * 60

      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst

      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst

      default:
        output = this - that;
    }

    return asFloat ? output : absFloor(output);
  }

  function monthDiff(a, b) {
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
    anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

      adjust = (b - anchor) / (anchor2 - anchor);
    } //check for negative zero, return zero if negative zero


    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }

    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;

    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
      }
    }

    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }
  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */


  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }

    var func = 'moment';
    var zone = '';

    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }

    var prefix = '[' + func + '("]';
    var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }

  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }

    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  } // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.


  function locale(key) {
    var newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);

      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }

      return this;
    }
  }

  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });

  function localeData() {
    return this._locale;
  }

  function startOf(units) {
    units = normalizeUnits(units); // the following switch intentionally omits break keywords
    // to utilize falling through the cases.

    switch (units) {
      case 'year':
        this.month(0);

      /* falls through */

      case 'quarter':
      case 'month':
        this.date(1);

      /* falls through */

      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0);

      /* falls through */

      case 'hour':
        this.minutes(0);

      /* falls through */

      case 'minute':
        this.seconds(0);

      /* falls through */

      case 'second':
        this.milliseconds(0);
    } // weeks are a special case


    if (units === 'week') {
      this.weekday(0);
    }

    if (units === 'isoWeek') {
      this.isoWeekday(1);
    } // quarters are also special


    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
  }

  function endOf(units) {
    units = normalizeUnits(units);

    if (units === undefined || units === 'millisecond') {
      return this;
    } // 'date' is an alias for 'day', so it should be considered as such.


    if (units === 'date') {
      units = 'day';
    }

    return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
  }

  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }

  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate() {
    return new Date(this.valueOf());
  }

  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }

  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2() {
    return isValid(this);
  }

  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  } // FORMATTING


  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1); // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  }); // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }

  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;

    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;

    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);

      if (week > weeksTarget) {
        week = weeksTarget;
      }

      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  } // FORMATTING


  addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

  addUnitAlias('quarter', 'Q'); // PRIORITY

  addUnitPriority('quarter', 7); // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  }); // MOMENTS

  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  } // FORMATTING


  addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

  addUnitAlias('date', 'D'); // PRIORITY

  addUnitPriority('date', 9); // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  }); // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

  addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

  addUnitPriority('dayOfYear', 4); // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  }); // HELPERS
  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  } // FORMATTING


  addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

  addUnitAlias('minute', 'm'); // PRIORITY

  addUnitPriority('minute', 14); // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE); // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

  addUnitAlias('second', 's'); // PRIORITY

  addUnitPriority('second', 15); // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND); // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  }); // ALIASES

  addUnitAlias('millisecond', 'ms'); // PRIORITY

  addUnitPriority('millisecond', 16); // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;

  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  } // MOMENTS


  var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix(input) {
    return createLocal(input * 1000);
  }

  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat(string) {
    return string;
  }

  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1(format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];

    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }

    return out;
  } // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)


  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];

    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }

    return out;
  }

  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
          output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  }); // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
  var mathAbs = Math.abs;

  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }

  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  } // supports only 2.0-style add(1, 's') or add(duration)


  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  } // supports only 2.0-style subtract(1, 's') or subtract(duration)


  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166

    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    } // The following code bubbles up values, see the tests for
    // examples of what that means.


    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24); // convert days to months

    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }

  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }

  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }

  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }

    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));

      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;

        case 'day':
          return days + milliseconds / 864e5;

        case 'hour':
          return days * 24 + milliseconds / 36e5;

        case 'minute':
          return days * 1440 + milliseconds / 6e4;

        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here

        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;

        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  } // TODO: Use this.as('ms')?


  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }

    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }

  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');

  function clone$1() {
    return createDuration(this);
  }

  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');

  function weeks() {
    return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year

  }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1(posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  } // This function allows you to set the rounding function for relative time strings


  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }

    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }

    return false;
  } // This function allows you to set a threshold for relative time strings


  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }

    if (limit === undefined) {
      return thresholds[threshold];
    }

    thresholds[threshold] = limit;

    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }

    return true;
  }

  function humanize(withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days = abs$1(this._days);
    var months = abs$1(this._months);
    var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60; // 12 months -> 1 year

    years = absFloor(months / 12);
    months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
    return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
  }

  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang; // Side effect imports
  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf'); // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  }); // Side effect imports

  hooks.version = '2.23.0';
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
    // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',
    // <input type="date" />
    TIME: 'HH:mm',
    // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',
    // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',
    // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW',
    // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />

  };
  return hooks;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(61)(module)))

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isBackgroundScript */
/* unused harmony export isMacOS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createCenteredWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return notifyUserAboutNewTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return calcNextOccurrenceForPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return compareTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return areTabsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ordinalNum; });
/* unused harmony export countConsecutiveSnoozes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getRecentlySnoozedTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getFirstTabToWakeup; });
/* unused harmony export imageUrlToBase64 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IS_BETA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_VERSION; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
var AMAZON_AFFILIATE_ID='tabsnooze-20';function isBackgroundScript(){var hashPath=window.location.hash.substring(1);return hashPath===_paths__WEBPACK_IMPORTED_MODULE_3__[/* BACKGROUND_PATH */ "b"];}function isMacOS(){return navigator.platform.toUpperCase().indexOf('MAC')>=0;}// export function exposeFunctionForDebug(functions: Array<Function>) {
//   if (!Array.isArray(functions)) {
//     functions = [functions];
//   }
//   // expose on window
//   functions.forEach(fn => (window[`tabSnoozeDebug_${fn.name}`] = fn));
// }
/*
    Create tabs and call callback() when they are all created.
*/function createTabs(tabInfos,makeActive){var allTabsCreatedPromise=Promise.all(tabInfos.map(function(tabInfo){return chrome.tabs.create({url:tabInfo.url,// attachAffiliationTag(tabInfo.url),
active:makeActive});}));return allTabsCreatedPromise;}// Attach affiliate tracking ID for amazon product links
function attachAffiliationTag(url){if(!url.includes('amazon.')){return url;// as is
}var parsedUrl=url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(url,true/* parse query too */);parsedUrl.query.tag=AMAZON_AFFILIATE_ID;delete parsedUrl.search;// delete search so 'query' will be used for formatting
return url__WEBPACK_IMPORTED_MODULE_4___default.a.format(parsedUrl);}function createCenteredWindow(_x,_x2,_x3){return _createCenteredWindow.apply(this,arguments);}function _createCenteredWindow(){_createCenteredWindow=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(path,width,height){var newWindow;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return chrome.windows.create({type:'popup',state:'normal',url:_paths__WEBPACK_IMPORTED_MODULE_3__[/* APP_BASE_PATH */ "a"]+path,left:Math.round((window.screen.width-width)/2),top:Math.round((window.screen.height-height)/3),width:width,height:height,focused:true});case 2:newWindow=_context.sent;chrome.windows.update(newWindow.id,{focused:true});case 4:case"end":return _context.stop();}}},_callee,this);}));return _createCenteredWindow.apply(this,arguments);}function createTab(_x4){return _createTab.apply(this,arguments);}/* 
  Show desktop notification for the given tabs,
  and make the jumpToTab active, if notification is clicked.
*/function _createTab(){_createTab=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(path){var newTab;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!path.startsWith('http')){path=_paths__WEBPACK_IMPORTED_MODULE_3__[/* APP_BASE_PATH */ "a"]+path;}_context2.next=3;return chrome.tabs.create({url:path,active:true});case 3:newTab=_context2.sent;chrome.windows.update(newTab.windowId,{focused:true});case 5:case"end":return _context2.stop();}}},_callee2,this);}));return _createTab.apply(this,arguments);}function notifyUserAboutNewTabs(_x5,_x6){return _notifyUserAboutNewTabs.apply(this,arguments);}function _notifyUserAboutNewTabs(){_notifyUserAboutNewTabs=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(tabs,jumpToTab){var message,title,faviconURI,createdNotifId;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:message=tabs.map(function(tab){return tab.title;}).join('\n');title='Tab Snooze woke up '+(tabs.length>1?"".concat(tabs.length," tabs"):'a tab');// plural handling
// Console log
console.log(title);// This section kept throwing a 
// Access to fetch at [iconurl] from origin [tabsnooze] has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// const faviconUrl = tabs[0].favicon;
// let faviconURI;
// if (faviconUrl) {
//   try {
//     faviconURI = await imageUrlToBase64(faviconUrl);
//   } catch (error) {
//     // ignore failed attempts to download image
//   }
// }
// if failed to fetch favicon (CORS is annoying!)
// if (!faviconURI) {
//   faviconURI = 'images/extension_icon_128.png';
// }
faviconURI=chrome.runtime.getURL('images/extension_icon_128.png');// Desktop notification
_context3.next=6;return chrome.notifications.create('',{type:'basic',title:title,message:message,iconUrl:faviconURI});case 6:createdNotifId=_context3.sent;// chrome.windows.update(jumpToTab.windowId, {drawAttention: true});
chrome.notifications.onClicked.addListener(function makeTabActive(notifId){if(notifId===createdNotifId){chrome.tabs.update(jumpToTab.id,{active:true});chrome.windows.update(jumpToTab.windowId,{focused:true});chrome.notifications.clear(createdNotifId);chrome.notifications.onClicked.removeListener(makeTabActive);}});case 8:case"end":return _context3.stop();}}},_callee3,this);}));return _notifyUserAboutNewTabs.apply(this,arguments);}function addMinutes(date,minutes){return new Date(date.getTime()+minutes*60000);}function getActiveTab(){return _getActiveTab.apply(this,arguments);}/*
    e.g. input
    {
        type: 'daily' | 'weekly' | 'monthly' | 'yearly',
        day: 22, OR date: [1, 2] OR days: [0,5,6]
        time: 23 // 11pm
    }
*/function _getActiveTab(){_getActiveTab=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(){var tabs;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return chrome.tabs.query({active:true,currentWindow:true});case 2:tabs=_context4.sent;return _context4.abrupt("return",tabs[0]);case 4:case"end":return _context4.stop();}}},_callee4,this);}));return _getActiveTab.apply(this,arguments);}function calcNextOccurrenceForPeriod(period){var occurrences=[];if(period.type==='daily'){var today=moment__WEBPACK_IMPORTED_MODULE_2___default()();var tomorrow=moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1,'day');occurrences=[today,tomorrow];}if(period.type==='weekly'){// occurences for this week and the next week
for(var weekIndex=0;weekIndex<2;weekIndex++){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=period.days[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var weekdayIndex=_step.value;occurrences.push(moment__WEBPACK_IMPORTED_MODULE_2___default()().add(weekIndex,'week').day(weekdayIndex));}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}}if(period.type==='monthly'){var thisMonth=moment__WEBPACK_IMPORTED_MODULE_2___default()().date(period.day+1);// +1, date() works not by index, by val
var nextMonth=moment__WEBPACK_IMPORTED_MODULE_2___default()(thisMonth).add(1,'month');occurrences=[thisMonth,nextMonth];}if(period.type==='yearly'){var thisYear=moment__WEBPACK_IMPORTED_MODULE_2___default()().month(period.date[0]).date(period.date[1]+1);// +1, date() works not by index, by val
var nextYear=moment__WEBPACK_IMPORTED_MODULE_2___default()(thisYear).add(1,'year');occurrences=[thisYear,nextYear];}// Find the first occurence that is in the future //
// we add 2 mins to 'now', to avoid accidently selecting an
// occurence that has just passed a second ago.
var now=moment__WEBPACK_IMPORTED_MODULE_2___default()().add(2,'minute');// Add specific hour to occurrences
occurrences=occurrences.map(function(occurrence){return momentWithHour(occurrence,period.hour);});var nextFutureOccurrence=occurrences.find(function(occurrence){return occurrence.isAfter(now);});if(!nextFutureOccurrence){throw new Error("Can't find next future occurrence");}return nextFutureOccurrence.toDate();}function momentWithHour(aMoment,hour){var h=Math.floor(hour);var m=Math.floor((hour-h)*60);// 0.5h--> 30m
return aMoment.hours(h).minutes(m).seconds(0);}var compareTabs=function compareTabs(tab1,tab2){return tab1.when===tab2.when?tab1.sleepStart-tab2.sleepStart:tab1.when-tab2.when;};var areTabsEqual=function areTabsEqual(tab1,tab2){return tab1.url===tab2.url&&tab1.when===tab2.when;};function ordinalNum(n){return moment__WEBPACK_IMPORTED_MODULE_2___default.a.localeData().ordinal(n);}/**
 * Returns how many snooze events occured consecutively, with no more
 * than 10s between them.
 */function countConsecutiveSnoozes(snoozedTabs,consecutiveSnoozeTimeout){// Sort tabs by sleep start. Most recently snoozed first.
snoozedTabs.sort(function(tabA,tabB){return tabB.sleepStart-tabA.sleepStart;});for(var i=0;i<snoozedTabs.length;i++){var previousTime=i===0?Date.now():snoozedTabs[i-1].sleepStart;var timeGap=previousTime-snoozedTabs[i].sleepStart;if(timeGap>consecutiveSnoozeTimeout){return i;}}return snoozedTabs.length;}function getRecentlySnoozedTab(snoozedTabs){// Sort tabs by sleep start. Most recently snoozed first.
snoozedTabs.sort(function(tabA,tabB){return tabB.sleepStart-tabA.sleepStart;});return snoozedTabs[0];}function getFirstTabToWakeup(snoozedTabs){// Sort tabs by sleep start. Most recently snoozed first.
snoozedTabs.sort(function(tabA,tabB){return tabA.when-tabB.when;});return snoozedTabs[0];}// export async function imageUrlToBase64(url: string): Promise<string> {
//   return new Promise((resolve, reject) =>
//     base64Img.requestBase64(url, (err, res, body) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(body);
//       }
//     })
//   );
// }
/**
 * We're not allowed to use setTimeout in bg scripts because they might not run.
 * So we use Alarms instead
 */ // export function setAlarmTimeout(
//   alarmName: string,
//   callback: Function,
//   timeout: number
// ) {
//   chrome.alarms.onAlarm.addListener(function listener(alarm) {
//     if (alarm.name === alarmName) {
//       // chrome.alarms.onAlarm.removeListener(listener);
//       callback();
//     }
//   });
//   chrome.alarms.create(alarmName, {
//     when: Date.now() + timeout,
//   });
// }
function imageUrlToBase64(_x7){return _imageUrlToBase.apply(this,arguments);}function _imageUrlToBase(){_imageUrlToBase=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(url){var response,base64,type,dataURI;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!url.startsWith('data:')){_context5.next=2;break;}return _context5.abrupt("return",url);case 2:_context5.next=4;return fetch(url);case 4:response=_context5.sent;if(response.body){_context5.next=7;break;}throw new Error('No body in response');case 7:_context5.next=9;return response.body.getReader().read().then(function(result){return btoa(String.fromCharCode.apply(null,result.value));});case 9:base64=_context5.sent;type=response.headers.get('Content-Type');if(type){_context5.next=13;break;}throw new Error('Failed to get content type');case 13:dataURI='data:'+type+';base64,'+base64;return _context5.abrupt("return",dataURI);case 15:case"end":return _context5.stop();}}},_callee5,this);}));return _imageUrlToBase.apply(this,arguments);}var IS_BETA=Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_VERSION":"0.1.0","REACT_APP_MIXPANEL_TOKEN":"162cc55365e5f12b4d410daecbdc5c97","REACT_APP_BUGSNAG_API_KEY":"fbdf95c93498131a5747c1f568670372"}).REACT_APP_IS_BETA==='true';var APP_VERSION=chrome.runtime.getManifest().version;// function findMinimum<T>(items: Array<T>, getValue: T => number) {
//   let minimumItem = items[0];
//   items.forEach(item => {
//     if (getValue(item) < getValue(minimumItem)) {
//       minimumItem = item;
//     }
//   });
//   return minimumItem;
// }

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return POPUP_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return OPTIONS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SLEEPING_TABS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SETTINGS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TODO_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FIRST_SNOOZE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RATE_TS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BETA_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TUTORIAL_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BACKGROUND_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHROME_SETTINGS_SHORTCUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHROME_WEB_STORE_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ORIGINAL_DEVLOPER_DONATE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CURR_DEVELOPER_DONATE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GITHUB_REPO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SUPPORT_EMAIL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MESSENGER_PROFILE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGELOG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TAB_SNOOZE_FEATURE_VOTE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BETA_INSTRUCTIONS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TS_HOMEPAGE_URL; });
/* unused harmony export SERVER_CONFIG_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getTrackUninstallUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getUpgradeUrl; });
/* harmony import */ var _core_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
// Base app file path
var APP_BASE_PATH='/index.html#';// App routes
var POPUP_PATH='/popup';var OPTIONS_PATH='/options';var SLEEPING_TABS_PATH='/options/sleeping-tabs';var SETTINGS_PATH='/options/settings';var TODO_PATH='/todo';var FIRST_SNOOZE_PATH='/first-snooze';var RATE_TS_PATH='/rate-tab-snooze';var BETA_PATH='/beta';var TUTORIAL_PATH='/tutorial';// A special route that is meant to execute the background.js
// script, and not any GUI rendering.
// **NOTE**: intentionally without a preceding '/'
var BACKGROUND_PATH='background';// External links
// export const CHROME_WEB_STORE_INSTALL_SHARE_LINK = 'https://chromewebstore.google.com/detail/tab-snooze-works-as-of-no/kgnigbfnfjgpfaiaafcbgdkpalapiinb';
var CHROME_SETTINGS_SHORTCUTS='chrome://extensions/shortcuts';// Miscellaneous Section on Settings Page
var CHROME_WEB_STORE_REVIEW='https://chromewebstore.google.com/detail/tab-snooze-works-as-of-no/kgnigbfnfjgpfaiaafcbgdkpalapiinb/reviews';var ORIGINAL_DEVLOPER_DONATE_URL='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=82HLJCDURLVME&currency_code=USD&source=url';var CURR_DEVELOPER_DONATE_URL="https://ko-fi.com/csandapp";var GITHUB_REPO_URL="https://github.com/csandapp/tab-snooze-extension-continued";var SUPPORT_EMAIL_URL="mailto:csandapp@gmail.com";// Links on Beta page
var MESSENGER_PROFILE_URL='https://m.me/tabsnooze';var CHANGELOG_URL='https://headwayapp.co/tab-snooze-changelog';var TAB_SNOOZE_FEATURE_VOTE_URL='https://tab-snooze.nolt.io/';var BETA_INSTRUCTIONS_URL='https://medium.com/@eyalw/tab-snooze-beta-b033d1e3e021';var TS_HOMEPAGE_URL= false?undefined:'https://tabsnooze.com';var SERVER_CONFIG_URL="".concat(TS_HOMEPAGE_URL,"/serverConfig.json");// URLS requires tracking id param:
var UPGRADE_URL="".concat(TS_HOMEPAGE_URL,"/pro");var TRACK_UNINSTALL_URL="".concat(TS_HOMEPAGE_URL,"/uninstalled");var getTrackUninstallUrl=function getTrackUninstallUrl(){return Object(_core_analytics__WEBPACK_IMPORTED_MODULE_0__[/* addTrackingIdToUrl */ "b"])(TRACK_UNINSTALL_URL);};var getUpgradeUrl=function getUpgradeUrl(){return Object(_core_analytics__WEBPACK_IMPORTED_MODULE_0__[/* addTrackingIdToUrl */ "b"])(UPGRADE_URL);};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export STORAGE_KEY_TS_VERSION */
/* unused harmony export STORAGE_KEY_TAB_COUNT */
/* unused harmony export STORAGE_KEY_SNOOZED_TABS */
/* unused harmony export STORAGE_KEY_SERVER_CONFIG */
/* unused harmony export STORAGE_KEY_BACKUPS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSnoozedTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveSnoozedTabs; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _debugStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var _debugStorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_debugStorage__WEBPACK_IMPORTED_MODULE_3__);
var STORAGE_KEY_TS_VERSION='tsVersion';var STORAGE_KEY_TAB_COUNT='tabsCount';var STORAGE_KEY_SNOOZED_TABS='snoozedTabs';var STORAGE_KEY_SERVER_CONFIG='serverConfig';var STORAGE_KEY_BACKUPS='backups';// version 2.0
// export const STORAGE_KEY_TAB_COUNT = 'tabsCount';
// export const STORAGE_KEY_HISTORY = 'history';
/*
    Storage sync has a QUOTA_BYTES_PER_ITEM of 4000, so we save
    each tab in a different key... instead of one big array :( it's sad
*/function getSnoozedTabs(){return _getSnoozedTabs.apply(this,arguments);}function _getSnoozedTabs(){_getSnoozedTabs=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){var _ref,snoozedTabs;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return chrome.storage.local.get(STORAGE_KEY_SNOOZED_TABS);case 2:_ref=_context.sent;snoozedTabs=_ref.snoozedTabs;return _context.abrupt("return",snoozedTabs||[]);case 5:case"end":return _context.stop();}}},_callee,this);}));return _getSnoozedTabs.apply(this,arguments);}function saveSnoozedTabs(snoozedTabs){return chrome.storage.local.set(Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},STORAGE_KEY_SNOOZED_TABS,snoozedTabs));}// export function getSnoozeHistory() {
//   return chrome.storage.local
//     .get()
//     .then(allStorage => allStorage.snoozeHistory || []);
// }
// export async function addTabToHistory(tabInfo) {
//   const history = await getSnoozeHistory();
//   history.push(tabInfo);
//   chrome.storage.local.set({ snoozeHistory: history });
//   return history;
// }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export STORAGE_KEY_SETTINGS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveSettings; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
// import { exposeFunctionForDebug } from './utils';
var STORAGE_KEY_SETTINGS='settings';var DEFAULT_SETTINGS={// General
badge:_badge__WEBPACK_IMPORTED_MODULE_3__[/* BADGE_HIDDEN */ "b"],playSoundEffects:true,playNotificationSound:true,showNotifications:true,// Snooze times
weekStartDay:1,// Sunday(0) or Monday(1)
weekEndDay:6,// Friday (5) or Saturday(6)
workdayStart:8,workdayEnd:19,laterTodayHoursDelta:3,somedayMonthsDelta:3,// general data
version:3,totalSnoozeCount:0,installDate:0,weeklyUsage:{weekNumber:0,usageCount:0}};function getSettings(){return _getSettings.apply(this,arguments);}function _getSettings(){_getSettings=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(){var _ref,settings;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return chrome.storage.local.get(STORAGE_KEY_SETTINGS);case 2:_ref=_context.sent;settings=_ref.settings;return _context.abrupt("return",Object.assign({},DEFAULT_SETTINGS,settings));case 5:case"end":return _context.stop();}}},_callee,this);}));return _getSettings.apply(this,arguments);}function saveSettings(_x){return _saveSettings.apply(this,arguments);}function _saveSettings(){_saveSettings=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(newSettings){var currentSettings;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return getSettings();case 2:currentSettings=_context2.sent;newSettings=Object.assign(currentSettings,newSettings);return _context2.abrupt("return",chrome.storage.local.set(Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},STORAGE_KEY_SETTINGS,newSettings)));case 5:case"end":return _context2.stop();}}},_callee2,this);}));return _saveSettings.apply(this,arguments);}function resetSettings(){return _resetSettings.apply(this,arguments);}function _resetSettings(){_resetSettings=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(){return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:chrome.storage.local.remove(STORAGE_KEY_SETTINGS);case 1:case"end":return _context3.stop();}}},_callee3,this);}));return _resetSettings.apply(this,arguments);}function printSettings(){return _printSettings.apply(this,arguments);}// exposeFunctionForDebug([
//   getSettings,
//   saveSettings,
//   printSettings,
//   resetSettings,
// ]);
function _printSettings(){_printSettings=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(){var settings;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return getSettings();case 2:settings=_context4.sent;console.table(settings);case 4:case"end":return _context4.stop();}}},_callee4,this);}));return _printSettings.apply(this,arguments);}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return trackTabSnooze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addTrackingIdToUrl; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);
var EVENTS={EXT_INSTALLED:'Extension Install',EXT_UPDATED:'Extension Update',EXT_UNINSTALLED:'Extension Uninstall',TAB_SNOOZE:'Tab Snooze',REPEAT_SNOOZE:'Repeat Snooze',NEW_TODO:'New Todo',SLEEPING_TABS_VIEW:'Sleeping Tabs View',SETTINGS_VIEW:'Settings View'};// Init Mixpanel
mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default.a.init("162cc55365e5f12b4d410daecbdc5c97");// identify user
// initUserTracking();
// async function initUserTracking() {
//   const { betaTester } = await chrome.storage.local.get(
//     'betaTester'
//   );
// mixpanel.people.set({ "Plan": "Premium" });
//   if (!betaTester) {
//     // Not registered yet, show welcome page
//     // newCenteredWindow('html/betaWelcome.html');
//   } else {
//     // continue tracking user
//     var userEmail = betaTester.email;
//     mixpanel.identify(userEmail);
//   }
// }
/*
    This function must be called after beta tester idetifies himself 
    so that upcoming future events will attach to a his/her user id.
*/ // export function setupUserTracking(email: string, name: string) {
//   email = email.trim();
//   name = name.trim();
//   // The recommended usage pattern is to call mixpanel.alias when the user signs up,
//   // and mixpanel.identify when they log in
//   mixpanel.identify(email);
//   mixpanel.people.set({
//     $name: name,
//     $email: email,
//     $created: new Date(),
//   });
//   mixpanel.track('Signup');
//   chrome.storage.local.set({
//     betaTester: {
//       email: email,
//       name: name,
//     },
//   });
// }
function trackTabSnooze(_x){return _trackTabSnooze.apply(this,arguments);}function _trackTabSnooze(){_trackTabSnooze=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(snoozedTab){var snoozedTabs,hostname;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(_storage__WEBPACK_IMPORTED_MODULE_4__[/* getSnoozedTabs */ "a"])();case 2:snoozedTabs=_context.sent;console.log('Tracking tab snooze:',snoozedTab);hostname=new URL(snoozedTab.url).hostname;track(EVENTS.TAB_SNOOZE,{'Snooze Type':snoozedTab.type,'Sleeping Tabs':snoozedTabs.length,'Snoozed Domain':hostname});mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default.a.people.increment('tabs snoozed');mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default.a.people.set({'Sleeping Tabs':snoozedTabs.length});case 8:case"end":return _context.stop();}}},_callee,this);}));return _trackTabSnooze.apply(this,arguments);}function track(eventName){var properties=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default.a.track(eventName,Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({'App Version':_utils__WEBPACK_IMPORTED_MODULE_5__[/* APP_VERSION */ "a"]},properties));}/**
 * We pass 'uid' param to tabsnooze.com so we can keep tracking
 * the user there under the same session
 */function addTrackingIdToUrl(url){var tid=mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default.a.get_distinct_id();return"".concat(url,"?").concat(query_string__WEBPACK_IMPORTED_MODULE_6___default.a.stringify({tid:tid}));}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(86);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componentPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _componentPropType__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_componentPropType__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "componentPropType", function() { return _componentPropType__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exactProp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "exactProp", function() { return _exactProp__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_getDisplayName__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return _getDisplayName__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ponyfillGlobal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_3___default.a; });
/** @license Material-UI v3.0.0-alpha.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (false) {}

module.exports = warning;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _toCss = __webpack_require__(50);

var _toCss2 = _interopRequireDefault(_toCss);

var _toCssValue = __webpack_require__(41);

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;
    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',

    /**
     * Get or set a style property.
     */
    value: function prop(name, value) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      if (this.style[name] === value) return this;
      value = this.options.jss.plugins.onChangeValue(value, name, this);
      var isEmpty = value == null || value === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = value; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) {
        (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
      }

      return this;
    }
    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();

      for (var prop in json) {
        this.renderer.setProperty(renderable, prop, json[prop]);
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      if (!this.renderable) return;
      var hasChanged = this.renderer.setSelector(this.renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged && this.renderable) {
        var renderable = this.renderer.replaceRule(this.renderable, this);
        if (renderable) this.renderable = renderable;
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteSnoozedTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return wakeupTabs; });
/* unused harmony export handleScheduledWakeup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scheduleWakeupAlarm; });
/* unused harmony export cancelWakeupAlarm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerEventListeners; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _snooze__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _backgroundMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55);
// import bugsnag from '../bugsnag';
var WAKEUP_TABS_ALARM_NAME='WAKEUP_TABS_ALARM';/*
    This timestamp prevents several alarms from going off at the same
    time and cause tabs to be woken up more than once because of a 
    asynchrouneous nature of storage.get/set.
    when alarm goes off, it sets this timestamp to a minute from now, to
    mark that it handles waking up tabs in the next minute.
*/var wakeupThreshold=new Date(0);/*
    Delete tabs from storage
*/function deleteSnoozedTabs(_x){return _deleteSnoozedTabs.apply(this,arguments);}/*
    Create tabs, notify user, and delete from storage
*/function _deleteSnoozedTabs(){_deleteSnoozedTabs=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(tabsToDelete){var snoozedTabs,shouldDeleteTab,newSnoozedTabs;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 2:snoozedTabs=_context2.sent;// Is given tab marked for deletion?
shouldDeleteTab=function shouldDeleteTab(tab){return tabsToDelete.find(function(tabToDelete){return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* areTabsEqual */ "d"])(tabToDelete,tab);})!=null;};newSnoozedTabs=snoozedTabs.filter(function(tab){return!shouldDeleteTab(tab);});_context2.next=7;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* saveSnoozedTabs */ "b"])(newSnoozedTabs);case 7:_context2.next=9;return scheduleWakeupAlarm('auto');case 9:case"end":return _context2.stop();}}},_callee2,this);}));return _deleteSnoozedTabs.apply(this,arguments);}function wakeupTabs(_x2,_x3){return _wakeupTabs.apply(this,arguments);}function _wakeupTabs(){_wakeupTabs=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(tabsToWakeUp,makeActive){var periodicTabs,_iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,tab,createdTabs;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log("Waking up ".concat(tabsToWakeUp.length," tabs"));// delete waking tabs from storage
_context3.next=3;return deleteSnoozedTabs(tabsToWakeUp);case 3:// Reschedule repeated tabs, if any
periodicTabs=tabsToWakeUp.filter(function(tab){return tab.period;});_iteratorNormalCompletion=true;_didIteratorError=false;_iteratorError=undefined;_context3.prev=7;_iterator=periodicTabs[Symbol.iterator]();case 9:if(_iteratorNormalCompletion=(_step=_iterator.next()).done){_context3.next=16;break;}tab=_step.value;_context3.next=13;return Object(_snooze__WEBPACK_IMPORTED_MODULE_6__[/* resnoozePeriodicTab */ "b"])(tab);case 13:_iteratorNormalCompletion=true;_context3.next=9;break;case 16:_context3.next=22;break;case 18:_context3.prev=18;_context3.t0=_context3["catch"](7);_didIteratorError=true;_iteratorError=_context3.t0;case 22:_context3.prev=22;_context3.prev=23;if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}case 25:_context3.prev=25;if(!_didIteratorError){_context3.next=28;break;}throw _iteratorError;case 28:return _context3.finish(25);case 29:return _context3.finish(22);case 30:_context3.next=32;return scheduleWakeupAlarm('auto');case 32:_context3.next=34;return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* createTabs */ "i"])(tabsToWakeUp,makeActive);case 34:createdTabs=_context3.sent;return _context3.abrupt("return",createdTabs);case 36:case"end":return _context3.stop();}}},_callee3,this,[[7,18,22,30],[23,,25,29]]);}));return _wakeupTabs.apply(this,arguments);}function handleScheduledWakeup(){return _handleScheduledWakeup.apply(this,arguments);}/*
    Clear all existing alarms and reschedule new alarms
    based on current snoozedTabs array.
*/function _handleScheduledWakeup(){_handleScheduledWakeup=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(){var settings,snoozedTabs,now,readySleepingTabs,createdTabs;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return Object(_settings__WEBPACK_IMPORTED_MODULE_4__[/* getSettings */ "b"])();case 2:settings=_context4.sent;_context4.next=5;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 5:snoozedTabs=_context4.sent;now=new Date();// check if tabs for right now already awoken by other alarm.
if(!(now<=wakeupThreshold)){_context4.next=9;break;}return _context4.abrupt("return");case 9:// ****** Fixing a bug in production ***** //
// ****** THIS SHOULD NOT HAPPEN ***** //
// ****** THIS SHOULD NOT HAPPEN ***** //
// ****** THIS SHOULD NOT HAPPEN ***** //
if(snoozedTabs.findIndex(function(tab){return!tab;})!==-1){console.error('Found null in snoozedTabs');// Notify bugsnag about this error
// bugsnag.notify(new Error('Found null in snoozedTabs'), {
//   metaData: {
//     storage: {
//       snoozedTabs,
//     },
//   },
// });
// TEMP FIX, remove null tabs
snoozedTabs=snoozedTabs.filter(function(tab){return tab;});}// set wakeupThreshold to a minute in the future to include
// nearby snoozed tabs.
wakeupThreshold=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* addMinutes */ "c"])(now,1);readySleepingTabs=snoozedTabs.filter(function(snoozedTab){return new Date(snoozedTab.when)<=wakeupThreshold;});if(!(readySleepingTabs.length>0)){_context4.next=23;break;}_context4.next=15;return wakeupTabs(readySleepingTabs,false);case 15:createdTabs=_context4.sent;// Notify user
if(settings.showNotifications){// Show desktop notification
Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* notifyUserAboutNewTabs */ "m"])(readySleepingTabs,createdTabs[0]);}if(!settings.playNotificationSound){_context4.next=23;break;}console.log('Playing sound in background script');// Note: handleScheduledWakeup() is ONLY called in background script
// ensure offscreen document is created
_context4.next=21;return Object(_backgroundMain__WEBPACK_IMPORTED_MODULE_7__["ensureOffscreenDocument"])();case 21:_context4.next=23;return chrome.runtime.sendMessage({action:'playAudio',sound:_audio__WEBPACK_IMPORTED_MODULE_5__[/* SOUND_WAKEUP */ "b"]});case 23:case"end":return _context4.stop();}}},_callee4,this);}));return _handleScheduledWakeup.apply(this,arguments);}function scheduleWakeupAlarm(_x4){return _scheduleWakeupAlarm.apply(this,arguments);}function _scheduleWakeupAlarm(){_scheduleWakeupAlarm=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(when){var snoozedTabs,alarmTime,nextTabToWakeup;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return cancelWakeupAlarm();case 2:_context5.next=4;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 4:snoozedTabs=_context5.sent;alarmTime=0;if(!(snoozedTabs.length===0)){_context5.next=8;break;}return _context5.abrupt("return");case 8:if(when==='auto'){// Automatically find earliest tab ready to wake up
nextTabToWakeup=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getFirstTabToWakeup */ "k"])(snoozedTabs);alarmTime=nextTabToWakeup.when;}else{// when === '1min'
alarmTime=Date.now()+1000*60;}chrome.alarms.create(WAKEUP_TABS_ALARM_NAME,{when:alarmTime});case 10:case"end":return _context5.stop();}}},_callee5,this);}));return _scheduleWakeupAlarm.apply(this,arguments);}function cancelWakeupAlarm(){return chrome.alarms.clear(WAKEUP_TABS_ALARM_NAME);}/**
 * Init the automatic wake up methods
 */function registerEventListeners(){// Note: registerEventListeners is only called in background script
// Wake up tabs on scheduled dates
chrome.alarms.onAlarm.addListener(/*#__PURE__*/function(){var _ref=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(alarm){return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(alarm.name===WAKEUP_TABS_ALARM_NAME)){_context.next=6;break;}console.log('Alarm fired - waking up ready tabs');// wake up ready tabs, if any
_context.next=4;return handleScheduledWakeup();case 4:_context.next=6;return scheduleWakeupAlarm('auto');case 6:case"end":return _context.stop();}}},_callee,this);}));return function(_x5){return _ref.apply(this,arguments);};}());/*
    After computer sleeps and then wakes, for some reason
    the alarms are not called, so we use idle detection to
    get the callback when system wakes up.
  */chrome.idle.onStateChanged.addListener(function(newState){if(newState==='active'){console.log('System active after idle time');// Give 1 mintue for Wifi to connect after login,
// otherwise created tabs will fail to connect and break
scheduleWakeupAlarm('1min');}else{// To avoid waking up a tab during sleep, or immedietly on computer
// wake up from sleep (active state), we turn off alarms, so that
// chrome will have time to sync data before waking up a tab twice excidently.
console.log('System idle - Turning off all alarms.');cancelWakeupAlarm();}});// onStorage
// chrome.storage.onChanged.addListener(() =>
//   scheduleWakeupAlarm('auto')
// );
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Config = {
  DEBUG: false,
  LIB_VERSION: '2.25.0'
}; // since es6 imports are static and we run unit tests from the console, window won't be defined when importing this file

var window$1;

if (typeof window === 'undefined') {
  var loc = {
    hostname: ''
  };
  window$1 = {
    navigator: {
      userAgent: ''
    },
    document: {
      location: loc,
      referrer: ''
    },
    screen: {
      width: 0,
      height: 0
    },
    location: loc
  };
} else {
  window$1 = window;
}
/*
 * Saved references to long variable names, so that closure compiler can
 * minimize file size.
 */


var ArrayProto = Array.prototype;
var FuncProto = Function.prototype;
var ObjProto = Object.prototype;
var slice = ArrayProto.slice;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
var windowConsole = window$1.console;
var navigator$1 = window$1.navigator;
var document$1 = window$1.document;
var windowOpera = window$1.opera;
var screen = window$1.screen;
var userAgent = navigator$1.userAgent;
var nativeBind = FuncProto.bind;
var nativeForEach = ArrayProto.forEach;
var nativeIndexOf = ArrayProto.indexOf;
var nativeIsArray = Array.isArray;
var breaker = {};
var _ = {
  trim: function trim(str) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
}; // Console override

var console$1 = {
  /** @type {function(...*)} */
  log: function log() {
    if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
      try {
        windowConsole.log.apply(windowConsole, arguments);
      } catch (err) {
        _.each(arguments, function (arg) {
          windowConsole.log(arg);
        });
      }
    }
  },

  /** @type {function(...*)} */
  error: function error() {
    if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
      var args = ['Mixpanel error:'].concat(_.toArray(arguments));

      try {
        windowConsole.error.apply(windowConsole, args);
      } catch (err) {
        _.each(args, function (arg) {
          windowConsole.error(arg);
        });
      }
    }
  },

  /** @type {function(...*)} */
  critical: function critical() {
    if (!_.isUndefined(windowConsole) && windowConsole) {
      var args = ['Mixpanel error:'].concat(_.toArray(arguments));

      try {
        windowConsole.error.apply(windowConsole, args);
      } catch (err) {
        _.each(args, function (arg) {
          windowConsole.error(arg);
        });
      }
    }
  }
}; // UNDERSCORE
// Embed part of the Underscore Library

_.bind = function (func, context) {
  var args, _bound;

  if (nativeBind && func.bind === nativeBind) {
    return nativeBind.apply(func, slice.call(arguments, 1));
  }

  if (!_.isFunction(func)) {
    throw new TypeError();
  }

  args = slice.call(arguments, 2);

  _bound = function bound() {
    if (!(this instanceof _bound)) {
      return func.apply(context, args.concat(slice.call(arguments)));
    }

    var ctor = {};
    ctor.prototype = func.prototype;
    var self = new ctor();
    ctor.prototype = null;
    var result = func.apply(self, args.concat(slice.call(arguments)));

    if (Object(result) === result) {
      return result;
    }

    return self;
  };

  return _bound;
};

_.bind_instance_methods = function (obj) {
  for (var func in obj) {
    if (typeof obj[func] === 'function') {
      obj[func] = _.bind(obj[func], obj);
    }
  }
};
/**
 * @param {*=} obj
 * @param {function(...*)=} iterator
 * @param {Object=} context
 */


_.each = function (obj, iterator, context) {
  if (obj === null || obj === undefined) {
    return;
  }

  if (nativeForEach && obj.forEach === nativeForEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
        return;
      }
    }
  } else {
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        if (iterator.call(context, obj[key], key, obj) === breaker) {
          return;
        }
      }
    }
  }
};

_.escapeHTML = function (s) {
  var escaped = s;

  if (escaped && _.isString(escaped)) {
    escaped = escaped.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  return escaped;
};

_.extend = function (obj) {
  _.each(slice.call(arguments, 1), function (source) {
    for (var prop in source) {
      if (source[prop] !== void 0) {
        obj[prop] = source[prop];
      }
    }
  });

  return obj;
};

_.isArray = nativeIsArray || function (obj) {
  return toString.call(obj) === '[object Array]';
}; // from a comment on http://dbj.org/dbj/?p=286
// fails on only one very rare and deliberate custom object:
// var bomb = { toString : undefined, valueOf: function(o) { return "function BOMBA!"; }};


_.isFunction = function (f) {
  try {
    return /^\s*\bfunction\b/.test(f);
  } catch (x) {
    return false;
  }
};

_.isArguments = function (obj) {
  return !!(obj && hasOwnProperty.call(obj, 'callee'));
};

_.toArray = function (iterable) {
  if (!iterable) {
    return [];
  }

  if (iterable.toArray) {
    return iterable.toArray();
  }

  if (_.isArray(iterable)) {
    return slice.call(iterable);
  }

  if (_.isArguments(iterable)) {
    return slice.call(iterable);
  }

  return _.values(iterable);
};

_.keys = function (obj) {
  var results = [];

  if (obj === null) {
    return results;
  }

  _.each(obj, function (value, key) {
    results[results.length] = key;
  });

  return results;
};

_.values = function (obj) {
  var results = [];

  if (obj === null) {
    return results;
  }

  _.each(obj, function (value) {
    results[results.length] = value;
  });

  return results;
};

_.identity = function (value) {
  return value;
};

_.include = function (obj, target) {
  var found = false;

  if (obj === null) {
    return found;
  }

  if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
    return obj.indexOf(target) != -1;
  }

  _.each(obj, function (value) {
    if (found || (found = value === target)) {
      return breaker;
    }
  });

  return found;
};

_.includes = function (str, needle) {
  return str.indexOf(needle) !== -1;
}; // Underscore Addons


_.inherit = function (subclass, superclass) {
  subclass.prototype = new superclass();
  subclass.prototype.constructor = subclass;
  subclass.superclass = superclass.prototype;
  return subclass;
};

_.isObject = function (obj) {
  return obj === Object(obj) && !_.isArray(obj);
};

_.isEmptyObject = function (obj) {
  if (_.isObject(obj)) {
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        return false;
      }
    }

    return true;
  }

  return false;
};

_.isUndefined = function (obj) {
  return obj === void 0;
};

_.isString = function (obj) {
  return toString.call(obj) == '[object String]';
};

_.isDate = function (obj) {
  return toString.call(obj) == '[object Date]';
};

_.isNumber = function (obj) {
  return toString.call(obj) == '[object Number]';
};

_.isElement = function (obj) {
  return !!(obj && obj.nodeType === 1);
};

_.encodeDates = function (obj) {
  _.each(obj, function (v, k) {
    if (_.isDate(v)) {
      obj[k] = _.formatDate(v);
    } else if (_.isObject(v)) {
      obj[k] = _.encodeDates(v); // recurse
    }
  });

  return obj;
};

_.timestamp = function () {
  Date.now = Date.now || function () {
    return +new Date();
  };

  return Date.now();
};

_.formatDate = function (d) {
  // YYYY-MM-DDTHH:MM:SS in UTC
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
};

_.safewrap = function (f) {
  return function () {
    try {
      return f.apply(this, arguments);
    } catch (e) {
      console$1.critical('Implementation error. Please turn on debug and contact support@mixpanel.com.');

      if (Config.DEBUG) {
        console$1.critical(e);
      }
    }
  };
};

_.safewrap_class = function (klass, functions) {
  for (var i = 0; i < functions.length; i++) {
    klass.prototype[functions[i]] = _.safewrap(klass.prototype[functions[i]]);
  }
};

_.safewrap_instance_methods = function (obj) {
  for (var func in obj) {
    if (typeof obj[func] === 'function') {
      obj[func] = _.safewrap(obj[func]);
    }
  }
};

_.strip_empty_properties = function (p) {
  var ret = {};

  _.each(p, function (v, k) {
    if (_.isString(v) && v.length > 0) {
      ret[k] = v;
    }
  });

  return ret;
};
/*
 * this function returns a copy of object after truncating it.  If
 * passed an Array or Object it will iterate through obj and
 * truncate all the values recursively.
 */


_.truncate = function (obj, length) {
  var ret;

  if (typeof obj === 'string') {
    ret = obj.slice(0, length);
  } else if (_.isArray(obj)) {
    ret = [];

    _.each(obj, function (val) {
      ret.push(_.truncate(val, length));
    });
  } else if (_.isObject(obj)) {
    ret = {};

    _.each(obj, function (val, key) {
      ret[key] = _.truncate(val, length);
    });
  } else {
    ret = obj;
  }

  return ret;
};

_.JSONEncode = function () {
  return function (mixed_val) {
    var value = mixed_val;

    var quote = function quote(string) {
      var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; // eslint-disable-line no-control-regex

      var meta = {
        // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
      };
      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c : "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
    };

    var str = function str(key, holder) {
      var gap = '';
      var indent = '    ';
      var i = 0; // The loop counter.

      var k = ''; // The member key.

      var v = ''; // The member value.

      var length = 0;
      var mind = gap;
      var partial = [];
      var value = holder[key]; // If the value has a toJSON method, call it to obtain a replacement value.

      if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
        value = value.toJSON(key);
      } // What happens next depends on the value's type.


      switch (typeof value) {
        case 'string':
          return quote(value);

        case 'number':
          // JSON numbers must be finite. Encode non-finite numbers as null.
          return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
          // If the value is a boolean or null, convert it to a string. Note:
          // typeof null does not produce 'null'. The case is included here in
          // the remote chance that this gets fixed someday.
          return String(value);

        case 'object':
          // If the type is 'object', we might be dealing with an object or an array or
          // null.
          // Due to a specification blunder in ECMAScript, typeof null is 'object',
          // so watch out for that case.
          if (!value) {
            return 'null';
          } // Make an array to hold the partial results of stringifying this object value.


          gap += indent;
          partial = []; // Is the value an array?

          if (toString.apply(value) === '[object Array]') {
            // The value is an array. Stringify every element. Use null as a placeholder
            // for non-JSON values.
            length = value.length;

            for (i = 0; i < length; i += 1) {
              partial[i] = str(i, value) || 'null';
            } // Join all of the elements together, separated with commas, and wrap them in
            // brackets.


            v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
            gap = mind;
            return v;
          } // Iterate through all of the keys in the object.


          for (k in value) {
            if (hasOwnProperty.call(value, k)) {
              v = str(k, value);

              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          } // Join all of the member texts together, separated with commas,
          // and wrap them in braces.


          v = partial.length === 0 ? '{}' : gap ? '{' + partial.join(',') + '' + mind + '}' : '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
    }; // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.


    return str('', {
      '': value
    });
  };
}();
/**
 * From https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
 * Slightly modified to throw a real Error rather than a POJO
 */


_.JSONDecode = function () {
  var at,
      // The index of the current character
  ch,
      // The current character
  escapee = {
    '"': '"',
    '\\': '\\',
    '/': '/',
    'b': '\b',
    'f': '\f',
    'n': '\n',
    'r': '\r',
    't': '\t'
  },
      text,
      error = function error(m) {
    var e = new SyntaxError(m);
    e.at = at;
    e.text = text;
    throw e;
  },
      next = function next(c) {
    // If a c parameter is provided, verify that it matches the current character.
    if (c && c !== ch) {
      error('Expected \'' + c + '\' instead of \'' + ch + '\'');
    } // Get the next character. When there are no more characters,
    // return the empty string.


    ch = text.charAt(at);
    at += 1;
    return ch;
  },
      number = function number() {
    // Parse a number value.
    var number,
        string = '';

    if (ch === '-') {
      string = '-';
      next('-');
    }

    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }

    if (ch === '.') {
      string += '.';

      while (next() && ch >= '0' && ch <= '9') {
        string += ch;
      }
    }

    if (ch === 'e' || ch === 'E') {
      string += ch;
      next();

      if (ch === '-' || ch === '+') {
        string += ch;
        next();
      }

      while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
      }
    }

    number = +string;

    if (!isFinite(number)) {
      error('Bad number');
    } else {
      return number;
    }
  },
      string = function string() {
    // Parse a string value.
    var hex,
        i,
        string = '',
        uffff; // When parsing for string values, we must look for " and \ characters.

    if (ch === '"') {
      while (next()) {
        if (ch === '"') {
          next();
          return string;
        }

        if (ch === '\\') {
          next();

          if (ch === 'u') {
            uffff = 0;

            for (i = 0; i < 4; i += 1) {
              hex = parseInt(next(), 16);

              if (!isFinite(hex)) {
                break;
              }

              uffff = uffff * 16 + hex;
            }

            string += String.fromCharCode(uffff);
          } else if (typeof escapee[ch] === 'string') {
            string += escapee[ch];
          } else {
            break;
          }
        } else {
          string += ch;
        }
      }
    }

    error('Bad string');
  },
      white = function white() {
    // Skip whitespace.
    while (ch && ch <= ' ') {
      next();
    }
  },
      word = function word() {
    // true, false, or null.
    switch (ch) {
      case 't':
        next('t');
        next('r');
        next('u');
        next('e');
        return true;

      case 'f':
        next('f');
        next('a');
        next('l');
        next('s');
        next('e');
        return false;

      case 'n':
        next('n');
        next('u');
        next('l');
        next('l');
        return null;
    }

    error('Unexpected "' + ch + '"');
  },
      value,
      // Placeholder for the value function.
  array = function array() {
    // Parse an array value.
    var array = [];

    if (ch === '[') {
      next('[');
      white();

      if (ch === ']') {
        next(']');
        return array; // empty array
      }

      while (ch) {
        array.push(value());
        white();

        if (ch === ']') {
          next(']');
          return array;
        }

        next(',');
        white();
      }
    }

    error('Bad array');
  },
      object = function object() {
    // Parse an object value.
    var key,
        object = {};

    if (ch === '{') {
      next('{');
      white();

      if (ch === '}') {
        next('}');
        return object; // empty object
      }

      while (ch) {
        key = string();
        white();
        next(':');

        if (Object.hasOwnProperty.call(object, key)) {
          error('Duplicate key "' + key + '"');
        }

        object[key] = value();
        white();

        if (ch === '}') {
          next('}');
          return object;
        }

        next(',');
        white();
      }
    }

    error('Bad object');
  };

  value = function value() {
    // Parse a JSON value. It could be an object, an array, a string,
    // a number, or a word.
    white();

    switch (ch) {
      case '{':
        return object();

      case '[':
        return array();

      case '"':
        return string();

      case '-':
        return number();

      default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
  }; // Return the json_parse function. It will have access to all of the
  // above functions and variables.


  return function (source) {
    var result;
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();

    if (ch) {
      error('Syntax error');
    }

    return result;
  };
}();

_.base64Encode = function (data) {
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1,
      o2,
      o3,
      h1,
      h2,
      h3,
      h4,
      bits,
      i = 0,
      ac = 0,
      enc = '',
      tmp_arr = [];

  if (!data) {
    return data;
  }

  data = _.utf8Encode(data);

  do {
    // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);
    bits = o1 << 16 | o2 << 8 | o3;
    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f; // use hexets to index into b64, and append result to encoded string

    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  switch (data.length % 3) {
    case 1:
      enc = enc.slice(0, -2) + '==';
      break;

    case 2:
      enc = enc.slice(0, -1) + '=';
      break;
  }

  return enc;
};

_.utf8Encode = function (string) {
  string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  var utftext = '',
      start,
      end;
  var stringl = 0,
      n;
  start = end = 0;
  stringl = string.length;

  for (n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }

    if (enc !== null) {
      if (end > start) {
        utftext += string.substring(start, end);
      }

      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.substring(start, string.length);
  }

  return utftext;
};

_.UUID = function () {
  // Time/ticks information
  // 1*new Date() is a cross browser version of Date.now()
  var T = function T() {
    var d = 1 * new Date(),
        i = 0; // this while loop figures how many browser ticks go by
    // before 1*new Date() returns a new number, ie the amount
    // of ticks that go by per millisecond

    while (d == 1 * new Date()) {
      i++;
    }

    return d.toString(16) + i.toString(16);
  }; // Math.Random entropy


  var R = function R() {
    return Math.random().toString(16).replace('.', '');
  }; // User agent entropy
  // This function takes the user agent string, and then xors
  // together each sequence of 8 bytes.  This produces a final
  // sequence of 8 bytes which it returns as hex.


  var UA = function UA() {
    var ua = userAgent,
        i,
        ch,
        buffer = [],
        ret = 0;

    function xor(result, byte_array) {
      var j,
          tmp = 0;

      for (j = 0; j < byte_array.length; j++) {
        tmp |= buffer[j] << j * 8;
      }

      return result ^ tmp;
    }

    for (i = 0; i < ua.length; i++) {
      ch = ua.charCodeAt(i);
      buffer.unshift(ch & 0xFF);

      if (buffer.length >= 4) {
        ret = xor(ret, buffer);
        buffer = [];
      }
    }

    if (buffer.length > 0) {
      ret = xor(ret, buffer);
    }

    return ret.toString(16);
  };

  return function () {
    var se = (screen.height * screen.width).toString(16);
    return T() + '-' + R() + '-' + UA() + '-' + se + '-' + T();
  };
}(); // _.isBlockedUA()
// This is to block various web spiders from executing our JS and
// sending false tracking data


_.isBlockedUA = function (ua) {
  if (/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(ua)) {
    return true;
  }

  return false;
};
/**
 * @param {Object=} formdata
 * @param {string=} arg_separator
 */


_.HTTPBuildQuery = function (formdata, arg_separator) {
  var use_val,
      use_key,
      tmp_arr = [];

  if (_.isUndefined(arg_separator)) {
    arg_separator = '&';
  }

  _.each(formdata, function (val, key) {
    use_val = encodeURIComponent(val.toString());
    use_key = encodeURIComponent(key);
    tmp_arr[tmp_arr.length] = use_key + '=' + use_val;
  });

  return tmp_arr.join(arg_separator);
};

_.getQueryParam = function (url, param) {
  // Expects a raw URL
  param = param.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  var regexS = '[\\?&]' + param + '=([^&#]*)',
      regex = new RegExp(regexS),
      results = regex.exec(url);

  if (results === null || results && typeof results[1] !== 'string' && results[1].length) {
    return '';
  } else {
    return decodeURIComponent(results[1]).replace(/\+/g, ' ');
  }
};

_.getHashParam = function (hash, param) {
  var matches = hash.match(new RegExp(param + '=([^&]*)'));
  return matches ? matches[1] : null;
}; // _.cookie
// Methods partially borrowed from quirksmode.org/js/cookies.html


_.cookie = {
  get: function get(name) {
    var nameEQ = name + '=';
    var ca = document$1.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }

    return null;
  },
  parse: function parse(name) {
    var cookie;

    try {
      cookie = _.JSONDecode(_.cookie.get(name)) || {};
    } catch (err) {// noop
    }

    return cookie;
  },
  set_seconds: function set_seconds(name, value, seconds, cross_subdomain, is_secure) {
    var cdomain = '',
        expires = '',
        secure = '';

    if (cross_subdomain) {
      var matches = document$1.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
          domain = matches ? matches[0] : '';
      cdomain = domain ? '; domain=.' + domain : '';
    }

    if (seconds) {
      var date = new Date();
      date.setTime(date.getTime() + seconds * 1000);
      expires = '; expires=' + date.toGMTString();
    }

    if (is_secure) {
      secure = '; secure';
    }

    document$1.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
  },
  set: function set(name, value, days, cross_subdomain, is_secure) {
    var cdomain = '',
        expires = '',
        secure = '';

    if (cross_subdomain) {
      var matches = document$1.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
          domain = matches ? matches[0] : '';
      cdomain = domain ? '; domain=.' + domain : '';
    }

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    }

    if (is_secure) {
      secure = '; secure';
    }

    var new_cookie_val = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
    document$1.cookie = new_cookie_val;
    return new_cookie_val;
  },
  remove: function remove(name, cross_subdomain) {
    _.cookie.set(name, '', -1, cross_subdomain);
  }
}; // _.localStorage

var _localStorage_supported = null;
_.localStorage = {
  is_supported: function is_supported() {
    if (_localStorage_supported !== null) {
      return _localStorage_supported;
    }

    var supported = true;

    try {
      var key = '__mplssupport__',
          val = 'xyz';

      _.localStorage.set(key, val);

      if (_.localStorage.get(key) !== val) {
        supported = false;
      }

      _.localStorage.remove(key);
    } catch (err) {
      supported = false;
    }

    if (!supported) {
      console$1.error('localStorage unsupported; falling back to cookie store');
    }

    _localStorage_supported = supported;
    return supported;
  },
  error: function error(msg) {
    console$1.error('localStorage error: ' + msg);
  },
  get: function get(name) {
    try {
      return window.localStorage.getItem(name);
    } catch (err) {
      _.localStorage.error(err);
    }

    return null;
  },
  parse: function parse(name) {
    try {
      return _.JSONDecode(_.localStorage.get(name)) || {};
    } catch (err) {// noop
    }

    return null;
  },
  set: function set(name, value) {
    try {
      window.localStorage.setItem(name, value);
    } catch (err) {
      _.localStorage.error(err);
    }
  },
  remove: function remove(name) {
    try {
      window.localStorage.removeItem(name);
    } catch (err) {
      _.localStorage.error(err);
    }
  }
};

_.register_event = function () {
  // written by Dean Edwards, 2005
  // with input from Tino Zijdel - crisp@xs4all.nl
  // with input from Carl Sverre - mail@carlsverre.com
  // with input from Mixpanel
  // http://dean.edwards.name/weblog/2005/10/add-event/
  // https://gist.github.com/1930440

  /**
   * @param {Object} element
   * @param {string} type
   * @param {function(...*)} handler
   * @param {boolean=} oldSchool
   * @param {boolean=} useCapture
   */
  var register_event = function register_event(element, type, handler, oldSchool, useCapture) {
    if (!element) {
      console$1.error('No valid element provided to register_event');
      return;
    }

    if (element.addEventListener && !oldSchool) {
      element.addEventListener(type, handler, !!useCapture);
    } else {
      var ontype = 'on' + type;
      var old_handler = element[ontype]; // can be undefined

      element[ontype] = makeHandler(element, handler, old_handler);
    }
  };

  function makeHandler(element, new_handler, old_handlers) {
    var handler = function handler(event) {
      event = event || fixEvent(window.event); // this basically happens in firefox whenever another script
      // overwrites the onload callback and doesn't pass the event
      // object to previously defined callbacks.  All the browsers
      // that don't define window.event implement addEventListener
      // so the dom_loaded handler will still be fired as usual.

      if (!event) {
        return undefined;
      }

      var ret = true;
      var old_result, new_result;

      if (_.isFunction(old_handlers)) {
        old_result = old_handlers(event);
      }

      new_result = new_handler.call(element, event);

      if (false === old_result || false === new_result) {
        ret = false;
      }

      return ret;
    };

    return handler;
  }

  function fixEvent(event) {
    if (event) {
      event.preventDefault = fixEvent.preventDefault;
      event.stopPropagation = fixEvent.stopPropagation;
    }

    return event;
  }

  fixEvent.preventDefault = function () {
    this.returnValue = false;
  };

  fixEvent.stopPropagation = function () {
    this.cancelBubble = true;
  };

  return register_event;
}();

_.dom_query = function () {
  /* document.getElementsBySelector(selector)
  - returns an array of element objects from the current document
  matching the CSS selector. Selectors can contain element names,
  class names and ids and can be nested. For example:
   elements = document.getElementsBySelector('div#main p a.external')
   Will return an array of all 'a' elements with 'external' in their
  class attribute that are contained inside 'p' elements that are
  contained inside the 'div' element which has id="main"
   New in version 0.4: Support for CSS2 and CSS3 attribute selectors:
  See http://www.w3.org/TR/css3-selectors/#attribute-selectors
   Version 0.4 - Simon Willison, March 25th 2003
  -- Works in Phoenix 0.5, Mozilla 1.3, Opera 7, Internet Explorer 6, Internet Explorer 5 on Windows
  -- Opera 7 fails
   Version 0.5 - Carl Sverre, Jan 7th 2013
  -- Now uses jQuery-esque `hasClass` for testing class name
  equality.  This fixes a bug related to '-' characters being
  considered not part of a 'word' in regex.
  */
  function getAllChildren(e) {
    // Returns all children of element. Workaround required for IE5/Windows. Ugh.
    return e.all ? e.all : e.getElementsByTagName('*');
  }

  var bad_whitespace = /[\t\r\n]/g;

  function hasClass(elem, selector) {
    var className = ' ' + selector + ' ';
    return (' ' + elem.className + ' ').replace(bad_whitespace, ' ').indexOf(className) >= 0;
  }

  function getElementsBySelector(selector) {
    // Attempt to fail gracefully in lesser browsers
    if (!document$1.getElementsByTagName) {
      return [];
    } // Split selector in to tokens


    var tokens = selector.split(' ');
    var token, bits, tagName, found, foundCount, i, j, k, elements, currentContextIndex;
    var currentContext = [document$1];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i].replace(/^\s+/, '').replace(/\s+$/, '');

      if (token.indexOf('#') > -1) {
        // Token is an ID selector
        bits = token.split('#');
        tagName = bits[0];
        var id = bits[1];
        var element = document$1.getElementById(id);

        if (!element || tagName && element.nodeName.toLowerCase() != tagName) {
          // element not found or tag with that ID not found, return false
          return [];
        } // Set currentContext to contain just this element


        currentContext = [element];
        continue; // Skip to next token
      }

      if (token.indexOf('.') > -1) {
        // Token contains a class selector
        bits = token.split('.');
        tagName = bits[0];
        var className = bits[1];

        if (!tagName) {
          tagName = '*';
        } // Get elements matching tag, filter them for class selector


        found = [];
        foundCount = 0;

        for (j = 0; j < currentContext.length; j++) {
          if (tagName == '*') {
            elements = getAllChildren(currentContext[j]);
          } else {
            elements = currentContext[j].getElementsByTagName(tagName);
          }

          for (k = 0; k < elements.length; k++) {
            found[foundCount++] = elements[k];
          }
        }

        currentContext = [];
        currentContextIndex = 0;

        for (j = 0; j < found.length; j++) {
          if (found[j].className && _.isString(found[j].className) && // some SVG elements have classNames which are not strings
          hasClass(found[j], className)) {
            currentContext[currentContextIndex++] = found[j];
          }
        }

        continue; // Skip to next token
      } // Code to deal with attribute selectors


      var token_match = token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/);

      if (token_match) {
        tagName = token_match[1];
        var attrName = token_match[2];
        var attrOperator = token_match[3];
        var attrValue = token_match[4];

        if (!tagName) {
          tagName = '*';
        } // Grab all of the tagName elements within current context


        found = [];
        foundCount = 0;

        for (j = 0; j < currentContext.length; j++) {
          if (tagName == '*') {
            elements = getAllChildren(currentContext[j]);
          } else {
            elements = currentContext[j].getElementsByTagName(tagName);
          }

          for (k = 0; k < elements.length; k++) {
            found[foundCount++] = elements[k];
          }
        }

        currentContext = [];
        currentContextIndex = 0;
        var checkFunction; // This function will be used to filter the elements

        switch (attrOperator) {
          case '=':
            // Equality
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName) == attrValue;
            };

            break;

          case '~':
            // Match one of space seperated words
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName).match(new RegExp('\\b' + attrValue + '\\b'));
            };

            break;

          case '|':
            // Match start with value followed by optional hyphen
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName).match(new RegExp('^' + attrValue + '-?'));
            };

            break;

          case '^':
            // Match starts with value
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName).indexOf(attrValue) === 0;
            };

            break;

          case '$':
            // Match ends with value - fails with "Warning" in Opera 7
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length;
            };

            break;

          case '*':
            // Match ends with value
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName).indexOf(attrValue) > -1;
            };

            break;

          default:
            // Just test for existence of attribute
            checkFunction = function checkFunction(e) {
              return e.getAttribute(attrName);
            };

        }

        currentContext = [];
        currentContextIndex = 0;

        for (j = 0; j < found.length; j++) {
          if (checkFunction(found[j])) {
            currentContext[currentContextIndex++] = found[j];
          }
        } // alert('Attribute Selector: '+tagName+' '+attrName+' '+attrOperator+' '+attrValue);


        continue; // Skip to next token
      } // If we get here, token is JUST an element (not a class or ID selector)


      tagName = token;
      found = [];
      foundCount = 0;

      for (j = 0; j < currentContext.length; j++) {
        elements = currentContext[j].getElementsByTagName(tagName);

        for (k = 0; k < elements.length; k++) {
          found[foundCount++] = elements[k];
        }
      }

      currentContext = found;
    }

    return currentContext;
  }

  return function (query) {
    if (_.isElement(query)) {
      return [query];
    } else if (_.isObject(query) && !_.isUndefined(query.length)) {
      return query;
    } else {
      return getElementsBySelector.call(this, query);
    }
  };
}();

_.info = {
  campaignParams: function campaignParams() {
    var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
        kw = '',
        params = {};

    _.each(campaign_keywords, function (kwkey) {
      kw = _.getQueryParam(document$1.URL, kwkey);

      if (kw.length) {
        params[kwkey] = kw;
      }
    });

    return params;
  },
  searchEngine: function searchEngine(referrer) {
    if (referrer.search('https?://(.*)google.([^/?]*)') === 0) {
      return 'google';
    } else if (referrer.search('https?://(.*)bing.com') === 0) {
      return 'bing';
    } else if (referrer.search('https?://(.*)yahoo.com') === 0) {
      return 'yahoo';
    } else if (referrer.search('https?://(.*)duckduckgo.com') === 0) {
      return 'duckduckgo';
    } else {
      return null;
    }
  },
  searchInfo: function searchInfo(referrer) {
    var search = _.info.searchEngine(referrer),
        param = search != 'yahoo' ? 'q' : 'p',
        ret = {};

    if (search !== null) {
      ret['$search_engine'] = search;

      var keyword = _.getQueryParam(referrer, param);

      if (keyword.length) {
        ret['mp_keyword'] = keyword;
      }
    }

    return ret;
  },

  /**
   * This function detects which browser is running this script.
   * The order of the checks are important since many user agents
   * include key words used in later checks.
   */
  browser: function browser(user_agent, vendor, opera) {
    vendor = vendor || ''; // vendor is undefined for at least IE9

    if (opera || _.includes(user_agent, ' OPR/')) {
      if (_.includes(user_agent, 'Mini')) {
        return 'Opera Mini';
      }

      return 'Opera';
    } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
      return 'BlackBerry';
    } else if (_.includes(user_agent, 'IEMobile') || _.includes(user_agent, 'WPDesktop')) {
      return 'Internet Explorer Mobile';
    } else if (_.includes(user_agent, 'Edge')) {
      return 'Microsoft Edge';
    } else if (_.includes(user_agent, 'FBIOS')) {
      return 'Facebook Mobile';
    } else if (_.includes(user_agent, 'Chrome')) {
      return 'Chrome';
    } else if (_.includes(user_agent, 'CriOS')) {
      return 'Chrome iOS';
    } else if (_.includes(user_agent, 'UCWEB') || _.includes(user_agent, 'UCBrowser')) {
      return 'UC Browser';
    } else if (_.includes(user_agent, 'FxiOS')) {
      return 'Firefox iOS';
    } else if (_.includes(vendor, 'Apple')) {
      if (_.includes(user_agent, 'Mobile')) {
        return 'Mobile Safari';
      }

      return 'Safari';
    } else if (_.includes(user_agent, 'Android')) {
      return 'Android Mobile';
    } else if (_.includes(user_agent, 'Konqueror')) {
      return 'Konqueror';
    } else if (_.includes(user_agent, 'Firefox')) {
      return 'Firefox';
    } else if (_.includes(user_agent, 'MSIE') || _.includes(user_agent, 'Trident/')) {
      return 'Internet Explorer';
    } else if (_.includes(user_agent, 'Gecko')) {
      return 'Mozilla';
    } else {
      return '';
    }
  },

  /**
   * This function detects which browser version is running this script,
   * parsing major and minor version (e.g., 42.1). User agent strings from:
   * http://www.useragentstring.com/pages/useragentstring.php
   */
  browserVersion: function browserVersion(userAgent, vendor, opera) {
    var browser = _.info.browser(userAgent, vendor, opera);

    var versionRegexs = {
      'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
      'Microsoft Edge': /Edge\/(\d+(\.\d+)?)/,
      'Chrome': /Chrome\/(\d+(\.\d+)?)/,
      'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
      'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
      'Safari': /Version\/(\d+(\.\d+)?)/,
      'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
      'Opera': /(Opera|OPR)\/(\d+(\.\d+)?)/,
      'Firefox': /Firefox\/(\d+(\.\d+)?)/,
      'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
      'Konqueror': /Konqueror:(\d+(\.\d+)?)/,
      'BlackBerry': /BlackBerry (\d+(\.\d+)?)/,
      'Android Mobile': /android\s(\d+(\.\d+)?)/,
      'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
      'Mozilla': /rv:(\d+(\.\d+)?)/
    };
    var regex = versionRegexs[browser];

    if (regex === undefined) {
      return null;
    }

    var matches = userAgent.match(regex);

    if (!matches) {
      return null;
    }

    return parseFloat(matches[matches.length - 2]);
  },
  os: function os() {
    var a = userAgent;

    if (/Windows/i.test(a)) {
      if (/Phone/.test(a) || /WPDesktop/.test(a)) {
        return 'Windows Phone';
      }

      return 'Windows';
    } else if (/(iPhone|iPad|iPod)/.test(a)) {
      return 'iOS';
    } else if (/Android/.test(a)) {
      return 'Android';
    } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
      return 'BlackBerry';
    } else if (/Mac/i.test(a)) {
      return 'Mac OS X';
    } else if (/Linux/.test(a)) {
      return 'Linux';
    } else if (/CrOS/.test(a)) {
      return 'Chrome OS';
    } else {
      return '';
    }
  },
  device: function device(user_agent) {
    if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) {
      return 'Windows Phone';
    } else if (/iPad/.test(user_agent)) {
      return 'iPad';
    } else if (/iPod/.test(user_agent)) {
      return 'iPod Touch';
    } else if (/iPhone/.test(user_agent)) {
      return 'iPhone';
    } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
      return 'BlackBerry';
    } else if (/Android/.test(user_agent)) {
      return 'Android';
    } else {
      return '';
    }
  },
  referringDomain: function referringDomain(referrer) {
    var split = referrer.split('/');

    if (split.length >= 3) {
      return split[2];
    }

    return '';
  },
  properties: function properties() {
    return _.extend(_.strip_empty_properties({
      '$os': _.info.os(),
      '$browser': _.info.browser(userAgent, navigator$1.vendor, windowOpera),
      '$referrer': document$1.referrer,
      '$referring_domain': _.info.referringDomain(document$1.referrer),
      '$device': _.info.device(userAgent)
    }), {
      '$current_url': window$1.location.href,
      '$browser_version': _.info.browserVersion(userAgent, navigator$1.vendor, windowOpera),
      '$screen_height': screen.height,
      '$screen_width': screen.width,
      'mp_lib': 'web',
      '$lib_version': Config.LIB_VERSION,
      'time': _.timestamp() / 1000 // epoch time in seconds

    });
  },
  people_properties: function people_properties() {
    return _.extend(_.strip_empty_properties({
      '$os': _.info.os(),
      '$browser': _.info.browser(userAgent, navigator$1.vendor, windowOpera)
    }), {
      '$browser_version': _.info.browserVersion(userAgent, navigator$1.vendor, windowOpera)
    });
  },
  pageviewInfo: function pageviewInfo(page) {
    return _.strip_empty_properties({
      'mp_page': page,
      'mp_referrer': document$1.referrer,
      'mp_browser': _.info.browser(userAgent, navigator$1.vendor, windowOpera),
      'mp_platform': _.info.os()
    });
  }
}; // EXPORTS (for closure compiler)

_['toArray'] = _.toArray;
_['isObject'] = _.isObject;
_['JSONEncode'] = _.JSONEncode;
_['JSONDecode'] = _.JSONDecode;
_['isBlockedUA'] = _.isBlockedUA;
_['isEmptyObject'] = _.isEmptyObject;
_['info'] = _.info;
_['info']['device'] = _.info.device;
_['info']['browser'] = _.info.browser;
_['info']['properties'] = _.info.properties;
/*
 * Get the className of an element, accounting for edge cases where element.className is an object
 * @param {Element} el - element to get the className of
 * @returns {string} the element's class
 */

function getClassName(el) {
  switch (typeof el.className) {
    case 'string':
      return el.className;

    case 'object':
      // handle cases where className might be SVGAnimatedString or some other type
      return el.className.baseVal || el.getAttribute('class') || '';

    default:
      // future proof
      return '';
  }
}
/*
 * Get the direct text content of an element, protecting against sensitive data collection.
 * Concats textContent of each of the element's text node children; this avoids potential
 * collection of sensitive data that could happen if we used element.textContent and the
 * element had sensitive child elements, since element.textContent includes child content.
 * Scrubs values that look like they could be sensitive (i.e. cc or ssn number).
 * @param {Element} el - element to get the text of
 * @returns {string} the element's direct text content
 */


function getSafeText(el) {
  var elText = '';

  if (shouldTrackElement(el) && el.childNodes && el.childNodes.length) {
    _.each(el.childNodes, function (child) {
      if (isTextNode(child) && child.textContent) {
        elText += _.trim(child.textContent) // scrub potentially sensitive values
        .split(/(\s+)/).filter(shouldTrackValue).join('') // normalize whitespace
        .replace(/[\r\n]/g, ' ').replace(/[ ]+/g, ' ') // truncate
        .substring(0, 255);
      }
    });
  }

  return _.trim(elText);
}
/*
 * Check whether an element has nodeType Node.ELEMENT_NODE
 * @param {Element} el - element to check
 * @returns {boolean} whether el is of the correct nodeType
 */


function isElementNode(el) {
  return el && el.nodeType === 1; // Node.ELEMENT_NODE - use integer constant for browser portability
}
/*
 * Check whether an element is of a given tag type.
 * Due to potential reference discrepancies (such as the webcomponents.js polyfill),
 * we want to match tagNames instead of specific references because something like
 * element === document.body won't always work because element might not be a native
 * element.
 * @param {Element} el - element to check
 * @param {string} tag - tag name (e.g., "div")
 * @returns {boolean} whether el is of the given tag type
 */


function isTag(el, tag) {
  return el && el.tagName && el.tagName.toLowerCase() === tag.toLowerCase();
}
/*
 * Check whether an element has nodeType Node.TEXT_NODE
 * @param {Element} el - element to check
 * @returns {boolean} whether el is of the correct nodeType
 */


function isTextNode(el) {
  return el && el.nodeType === 3; // Node.TEXT_NODE - use integer constant for browser portability
}
/*
 * Check whether a DOM event should be "tracked" or if it may contain sentitive data
 * using a variety of heuristics.
 * @param {Element} el - element to check
 * @param {Event} event - event to check
 * @returns {boolean} whether the event should be tracked
 */


function shouldTrackDomEvent(el, event) {
  if (!el || isTag(el, 'html') || !isElementNode(el)) {
    return false;
  }

  var tag = el.tagName.toLowerCase();

  switch (tag) {
    case 'html':
      return false;

    case 'form':
      return event.type === 'submit';

    case 'input':
      if (['button', 'submit'].indexOf(el.getAttribute('type')) === -1) {
        return event.type === 'change';
      } else {
        return event.type === 'click';
      }

    case 'select':
    case 'textarea':
      return event.type === 'change';

    default:
      return event.type === 'click';
  }
}
/*
 * Check whether a DOM element should be "tracked" or if it may contain sentitive data
 * using a variety of heuristics.
 * @param {Element} el - element to check
 * @returns {boolean} whether the element should be tracked
 */


function shouldTrackElement(el) {
  for (var curEl = el; curEl.parentNode && !isTag(curEl, 'body'); curEl = curEl.parentNode) {
    var classes = getClassName(curEl).split(' ');

    if (_.includes(classes, 'mp-sensitive') || _.includes(classes, 'mp-no-track')) {
      return false;
    }
  }

  if (_.includes(getClassName(el).split(' '), 'mp-include')) {
    return true;
  } // don't send data from inputs or similar elements since there will always be
  // a risk of clientside javascript placing sensitive data in attributes


  if (isTag(el, 'input') || isTag(el, 'select') || isTag(el, 'textarea') || el.getAttribute('contenteditable') === 'true') {
    return false;
  } // don't include hidden or password fields


  var type = el.type || '';

  if (typeof type === 'string') {
    // it's possible for el.type to be a DOM element if el is a form with a child input[name="type"]
    switch (type.toLowerCase()) {
      case 'hidden':
        return false;

      case 'password':
        return false;
    }
  } // filter out data from fields that look like sensitive fields


  var name = el.name || el.id || '';

  if (typeof name === 'string') {
    // it's possible for el.name or el.id to be a DOM element if el is a form with a child input[name="name"]
    var sensitiveNameRegex = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;

    if (sensitiveNameRegex.test(name.replace(/[^a-zA-Z0-9]/g, ''))) {
      return false;
    }
  }

  return true;
}
/*
 * Check whether a string value should be "tracked" or if it may contain sentitive data
 * using a variety of heuristics.
 * @param {string} value - string value to check
 * @returns {boolean} whether the element should be tracked
 */


function shouldTrackValue(value) {
  if (value === null || _.isUndefined(value)) {
    return false;
  }

  if (typeof value === 'string') {
    value = _.trim(value); // check to see if input value looks like a credit card number
    // see: https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html

    var ccRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    if (ccRegex.test((value || '').replace(/[\- ]/g, ''))) {
      return false;
    } // check to see if input value looks like a social security number


    var ssnRegex = /(^\d{3}-?\d{2}-?\d{4}$)/;

    if (ssnRegex.test(value)) {
      return false;
    }
  }

  return true;
}

var autotrack = {
  _initializedTokens: [],
  _previousElementSibling: function _previousElementSibling(el) {
    if (el.previousElementSibling) {
      return el.previousElementSibling;
    } else {
      do {
        el = el.previousSibling;
      } while (el && !isElementNode(el));

      return el;
    }
  },
  _loadScript: function _loadScript(scriptUrlToLoad, callback) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = scriptUrlToLoad;
    scriptTag.onload = callback;
    var scripts = document.getElementsByTagName('script');

    if (scripts.length > 0) {
      scripts[0].parentNode.insertBefore(scriptTag, scripts[0]);
    } else {
      document.body.appendChild(scriptTag);
    }
  },
  _getPropertiesFromElement: function _getPropertiesFromElement(elem) {
    var props = {
      'classes': getClassName(elem).split(' '),
      'tag_name': elem.tagName.toLowerCase()
    };

    if (shouldTrackElement(elem)) {
      _.each(elem.attributes, function (attr) {
        if (shouldTrackValue(attr.value)) {
          props['attr__' + attr.name] = attr.value;
        }
      });
    }

    var nthChild = 1;
    var nthOfType = 1;
    var currentElem = elem;

    while (currentElem = this._previousElementSibling(currentElem)) {
      // eslint-disable-line no-cond-assign
      nthChild++;

      if (currentElem.tagName === elem.tagName) {
        nthOfType++;
      }
    }

    props['nth_child'] = nthChild;
    props['nth_of_type'] = nthOfType;
    return props;
  },
  _getDefaultProperties: function _getDefaultProperties(eventType) {
    return {
      '$event_type': eventType,
      '$ce_version': 1,
      '$host': window.location.host,
      '$pathname': window.location.pathname
    };
  },
  _extractCustomPropertyValue: function _extractCustomPropertyValue(customProperty) {
    var propValues = [];

    _.each(document.querySelectorAll(customProperty['css_selector']), function (matchedElem) {
      var value;

      if (['input', 'select'].indexOf(matchedElem.tagName.toLowerCase()) > -1) {
        value = matchedElem['value'];
      } else if (matchedElem['textContent']) {
        value = matchedElem['textContent'];
      }

      if (shouldTrackValue(value)) {
        propValues.push(value);
      }
    });

    return propValues.join(', ');
  },
  _getCustomProperties: function _getCustomProperties(targetElementList) {
    var props = {};

    _.each(this._customProperties, function (customProperty) {
      _.each(customProperty['event_selectors'], function (eventSelector) {
        var eventElements = document.querySelectorAll(eventSelector);

        _.each(eventElements, function (eventElement) {
          if (_.includes(targetElementList, eventElement) && shouldTrackElement(eventElement)) {
            props[customProperty['name']] = this._extractCustomPropertyValue(customProperty);
          }
        }, this);
      }, this);
    }, this);

    return props;
  },
  _getEventTarget: function _getEventTarget(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/target#Compatibility_notes
    if (typeof e.target === 'undefined') {
      return e.srcElement;
    } else {
      return e.target;
    }
  },
  _trackEvent: function _trackEvent(e, instance) {
    /*** Don't mess with this code without running IE8 tests on it ***/
    var target = this._getEventTarget(e);

    if (isTextNode(target)) {
      // defeat Safari bug (see: http://www.quirksmode.org/js/events_properties.html)
      target = target.parentNode;
    }

    if (shouldTrackDomEvent(target, e)) {
      var targetElementList = [target];
      var curEl = target;

      while (curEl.parentNode && !isTag(curEl, 'body')) {
        targetElementList.push(curEl.parentNode);
        curEl = curEl.parentNode;
      }

      var elementsJson = [];
      var href,
          explicitNoTrack = false;

      _.each(targetElementList, function (el) {
        var shouldTrackEl = shouldTrackElement(el); // if the element or a parent element is an anchor tag
        // include the href as a property

        if (el.tagName.toLowerCase() === 'a') {
          href = el.getAttribute('href');
          href = shouldTrackEl && shouldTrackValue(href) && href;
        } // allow users to programatically prevent tracking of elements by adding class 'mp-no-track'


        var classes = getClassName(el).split(' ');

        if (_.includes(classes, 'mp-no-track')) {
          explicitNoTrack = true;
        }

        elementsJson.push(this._getPropertiesFromElement(el));
      }, this);

      if (explicitNoTrack) {
        return false;
      } // only populate text content from target element (not parents)
      // to prevent text within a sensitive element from being collected
      // as part of a parent's el.textContent


      var elementText;
      var safeElementText = getSafeText(target);

      if (safeElementText && safeElementText.length) {
        elementText = safeElementText;
      }

      var props = _.extend(this._getDefaultProperties(e.type), {
        '$elements': elementsJson,
        '$el_attr__href': href,
        '$el_text': elementText
      }, this._getCustomProperties(targetElementList));

      instance.track('$web_event', props);
      return true;
    }
  },
  // only reason is to stub for unit tests
  // since you can't override window.location props
  _navigate: function _navigate(href) {
    window.location.href = href;
  },
  _addDomEventHandlers: function _addDomEventHandlers(instance) {
    var handler = _.bind(function (e) {
      e = e || window.event;

      this._trackEvent(e, instance);
    }, this);

    _.register_event(document, 'submit', handler, false, true);

    _.register_event(document, 'change', handler, false, true);

    _.register_event(document, 'click', handler, false, true);
  },
  _customProperties: {},
  init: function init(instance) {
    if (!(document && document.body)) {
      console.log('document not ready yet, trying again in 500 milliseconds...');
      var that = this;
      setTimeout(function () {
        that.init(instance);
      }, 500);
      return;
    }

    var token = instance.get_config('token');

    if (this._initializedTokens.indexOf(token) > -1) {
      console.log('autotrack already initialized for token "' + token + '"');
      return;
    }

    this._initializedTokens.push(token);

    if (!this._maybeLoadEditor(instance)) {
      // don't autotrack actions when the editor is enabled
      var parseDecideResponse = _.bind(function (response) {
        if (response && response['config'] && response['config']['enable_collect_everything'] === true) {
          if (response['custom_properties']) {
            this._customProperties = response['custom_properties'];
          }

          instance.track('$web_event', _.extend({
            '$title': document.title
          }, this._getDefaultProperties('pageview')));

          this._addDomEventHandlers(instance);
        } else {
          instance['__autotrack_enabled'] = false;
        }
      }, this);

      instance._send_request(instance.get_config('api_host') + '/decide/', {
        'verbose': true,
        'version': '1',
        'lib': 'web',
        'token': token
      }, instance._prepare_callback(parseDecideResponse));
    }
  },
  _editorParamsFromHash: function _editorParamsFromHash(instance, hash) {
    var editorParams;

    try {
      var state = _.getHashParam(hash, 'state');

      state = JSON.parse(decodeURIComponent(state));

      var expiresInSeconds = _.getHashParam(hash, 'expires_in');

      editorParams = {
        'accessToken': _.getHashParam(hash, 'access_token'),
        'accessTokenExpiresAt': new Date().getTime() + Number(expiresInSeconds) * 1000,
        'bookmarkletMode': !!state['bookmarkletMode'],
        'projectId': state['projectId'],
        'projectOwnerId': state['projectOwnerId'],
        'projectToken': state['token'],
        'readOnly': state['readOnly'],
        'userFlags': state['userFlags'],
        'userId': state['userId']
      };
      window.sessionStorage.setItem('editorParams', JSON.stringify(editorParams));

      if (state['desiredHash']) {
        window.location.hash = state['desiredHash'];
      } else if (window.history) {
        history.replaceState('', document.title, window.location.pathname + window.location.search); // completely remove hash
      } else {
        window.location.hash = ''; // clear hash (but leaves # unfortunately)
      }
    } catch (e) {
      console.error('Unable to parse data from hash', e);
    }

    return editorParams;
  },

  /**
   * To load the visual editor, we need an access token and other state. That state comes from one of three places:
   * 1. In the URL hash params if the customer is using an old snippet
   * 2. From session storage under the key `_mpcehash` if the snippet already parsed the hash
   * 3. From session storage under the key `editorParams` if the editor was initialized on a previous page
   */
  _maybeLoadEditor: function _maybeLoadEditor(instance) {
    try {
      var parseFromUrl = false;

      if (_.getHashParam(window.location.hash, 'state')) {
        var state = _.getHashParam(window.location.hash, 'state');

        state = JSON.parse(decodeURIComponent(state));
        parseFromUrl = state['action'] === 'mpeditor';
      }

      var parseFromStorage = !!window.sessionStorage.getItem('_mpcehash');
      var editorParams;

      if (parseFromUrl) {
        // happens if they are initializing the editor using an old snippet
        editorParams = this._editorParamsFromHash(instance, window.location.hash);
      } else if (parseFromStorage) {
        // happens if they are initialized the editor and using the new snippet
        editorParams = this._editorParamsFromHash(instance, window.sessionStorage.getItem('_mpcehash'));
        window.sessionStorage.removeItem('_mpcehash');
      } else {
        // get credentials from sessionStorage from a previous initialzation
        editorParams = JSON.parse(window.sessionStorage.getItem('editorParams') || '{}');
      }

      if (editorParams['projectToken'] && instance.get_config('token') === editorParams['projectToken']) {
        this._loadEditor(instance, editorParams);

        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },
  _loadEditor: function _loadEditor(instance, editorParams) {
    if (!window['_mpEditorLoaded']) {
      // only load the codeless event editor once, even if there are multiple instances of MixpanelLib
      window['_mpEditorLoaded'] = true;
      var editorUrl = instance.get_config('app_host') + '/js-bundle/reports/collect-everything/editor.js?_ts=' + new Date().getTime();

      this._loadScript(editorUrl, function () {
        window['mp_load_editor'](editorParams);
      });

      return true;
    }

    return false;
  },
  // this is a mechanism to ramp up CE with no server-side interaction.
  // when CE is active, every page load results in a decide request. we
  // need to gently ramp this up so we don't overload decide. this decides
  // deterministically if CE is enabled for this project by modding the char
  // value of the project token.
  enabledForProject: function enabledForProject(token, numBuckets, numEnabledBuckets) {
    numBuckets = !_.isUndefined(numBuckets) ? numBuckets : 10;
    numEnabledBuckets = !_.isUndefined(numEnabledBuckets) ? numEnabledBuckets : 10;
    var charCodeSum = 0;

    for (var i = 0; i < token.length; i++) {
      charCodeSum += token.charCodeAt(i);
    }

    return charCodeSum % numBuckets < numEnabledBuckets;
  },
  isBrowserSupported: function isBrowserSupported() {
    return _.isFunction(document.querySelectorAll);
  }
};

_.bind_instance_methods(autotrack);

_.safewrap_instance_methods(autotrack);
/**
 * A function used to track a Mixpanel event (e.g. MixpanelLib.track)
 * @callback trackFunction
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 */

/** Public **/


var GDPR_DEFAULT_PERSISTENCE_PREFIX = '__mp_opt_in_out_';
/**
 * Opt the user in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */

function optIn(token, options) {
  _optInOut(true, token, options);
}
/**
 * Opt the user out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-out cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-out cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-out cookie is set as secure or not
 */


function optOut(token, options) {
  _optInOut(false, token, options);
}
/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} whether the user has opted in to the given opt type
 */


function hasOptedIn(token, options) {
  return _getStorageValue(token, options) === '1';
}
/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} whether the user has opted out of the given opt type
 */


function hasOptedOut(token, options) {
  if (_hasDoNotTrackFlagOn()) {
    return true;
  }

  return _getStorageValue(token, options) === '0';
}
/**
 * Wrap a MixpanelLib method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */


function addOptOutCheckMixpanelLib(method) {
  return _addOptOutCheck(method, function (name) {
    return this.get_config(name);
  });
}
/**
 * Wrap a MixpanelPeople method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */


function addOptOutCheckMixpanelPeople(method) {
  return _addOptOutCheck(method, function (name) {
    return this._get_config(name);
  });
}
/**
 * Wrap a MixpanelGroup method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */


function addOptOutCheckMixpanelGroup(method) {
  return _addOptOutCheck(method, function (name) {
    return this._get_config(name);
  });
}
/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */


function clearOptInOut(token, options) {
  options = options || {};

  _getStorage(options).remove(_getStorageKey(token, options), !!options.crossSubdomainCookie);
}
/** Private **/

/**
 * Get storage util
 * @param {Object} [options]
 * @param {string} [options.persistenceType]
 * @returns {object} either _.cookie or _.localstorage
 */


function _getStorage(options) {
  options = options || {};
  return options.persistenceType === 'localStorage' ? _.localStorage : _.cookie;
}
/**
 * Get the name of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the name of the cookie for the given opt type
 */


function _getStorageKey(token, options) {
  options = options || {};
  return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
}
/**
 * Get the value of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the value of the cookie for the given opt type
 */


function _getStorageValue(token, options) {
  return _getStorage(options).get(_getStorageKey(token, options));
}
/**
 * Check whether the user has set the DNT/doNotTrack setting to true in their browser
 * @returns {boolean} whether the DNT setting is true
 */


function _hasDoNotTrackFlagOn() {
  return !!(window$1.navigator && window$1.navigator.doNotTrack === '1');
}
/**
 * Set cookie/localstorage for the user indicating that they are opted in or out for the given opt type
 * @param {boolean} optValue - whether to opt the user in or out for the given opt type
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */


function _optInOut(optValue, token, options) {
  if (!_.isString(token) || !token.length) {
    console.error('gdpr.' + (optValue ? 'optIn' : 'optOut') + ' called with an invalid token');
    return;
  }

  options = options || {};

  _getStorage(options).set(_getStorageKey(token, options), optValue ? 1 : 0, _.isNumber(options.cookieExpiration) ? options.cookieExpiration : null, !!options.crossSubdomainCookie, !!options.secureCookie);

  if (options.track && optValue) {
    // only track event if opting in (optValue=true)
    options.track(options.trackEventName || '$opt_in', options.trackProperties);
  }
}
/**
 * Wrap a method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @param {function} getConfigValue - getter function for the Mixpanel API token and other options to be used with opt-out check
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */


function _addOptOutCheck(method, getConfigValue) {
  return function () {
    var optedOut = false;

    try {
      var token = getConfigValue.call(this, 'token');
      var persistenceType = getConfigValue.call(this, 'opt_out_tracking_persistence_type');
      var persistencePrefix = getConfigValue.call(this, 'opt_out_tracking_cookie_prefix');

      if (token) {
        // if there was an issue getting the token, continue method execution as normal
        optedOut = hasOptedOut(token, {
          persistenceType: persistenceType,
          persistencePrefix: persistencePrefix
        });
      }
    } catch (err) {
      console.error('Unexpected error when checking tracking opt-out status: ' + err);
    }

    if (!optedOut) {
      return method.apply(this, arguments);
    }

    var callback = arguments[arguments.length - 1];

    if (typeof callback === 'function') {
      callback(0);
    }

    return;
  };
}
/** @const */


var SET_ACTION = '$set';
/** @const */

var SET_ONCE_ACTION = '$set_once';
/** @const */

var UNSET_ACTION = '$unset';
/** @const */

var ADD_ACTION = '$add';
/** @const */

var APPEND_ACTION = '$append';
/** @const */

var UNION_ACTION = '$union';
/** @const */

var REMOVE_ACTION = '$remove';
/** @const */

var DELETE_ACTION = '$delete'; // Common internal methods for mixpanel.people and mixpanel.group APIs.
// These methods shouldn't involve network I/O.

var apiActions = {
  set_action: function set_action(prop, to) {
    var data = {};
    var $set = {};

    if (_.isObject(prop)) {
      _.each(prop, function (v, k) {
        if (!this._is_reserved_property(k)) {
          $set[k] = v;
        }
      }, this);
    } else {
      $set[prop] = to;
    }

    data[SET_ACTION] = $set;
    return data;
  },
  unset_action: function unset_action(prop) {
    var data = {};
    var $unset = [];

    if (!_.isArray(prop)) {
      prop = [prop];
    }

    _.each(prop, function (k) {
      if (!this._is_reserved_property(k)) {
        $unset.push(k);
      }
    }, this);

    data[UNSET_ACTION] = $unset;
    return data;
  },
  set_once_action: function set_once_action(prop, to) {
    var data = {};
    var $set_once = {};

    if (_.isObject(prop)) {
      _.each(prop, function (v, k) {
        if (!this._is_reserved_property(k)) {
          $set_once[k] = v;
        }
      }, this);
    } else {
      $set_once[prop] = to;
    }

    data[SET_ONCE_ACTION] = $set_once;
    return data;
  },
  union_action: function union_action(list_name, values) {
    var data = {};
    var $union = {};

    if (_.isObject(list_name)) {
      _.each(list_name, function (v, k) {
        if (!this._is_reserved_property(k)) {
          $union[k] = _.isArray(v) ? v : [v];
        }
      }, this);
    } else {
      $union[list_name] = _.isArray(values) ? values : [values];
    }

    data[UNION_ACTION] = $union;
    return data;
  },
  append_action: function append_action(list_name, value) {
    var data = {};
    var $append = {};

    if (_.isObject(list_name)) {
      _.each(list_name, function (v, k) {
        if (!this._is_reserved_property(k)) {
          $append[k] = v;
        }
      }, this);
    } else {
      $append[list_name] = value;
    }

    data[APPEND_ACTION] = $append;
    return data;
  },
  remove_action: function remove_action(list_name, value) {
    var data = {};
    var $remove = {};

    if (_.isObject(list_name)) {
      _.each(list_name, function (v, k) {
        if (!this._is_reserved_property(k)) {
          $remove[k] = v;
        }
      }, this);
    } else {
      $remove[list_name] = value;
    }

    data[REMOVE_ACTION] = $remove;
    return data;
  },
  delete_action: function delete_action() {
    var data = {};
    data[DELETE_ACTION] = '';
    return data;
  }
};
/**
 * Mixpanel Group Object
 * @constructor
 */

var MixpanelGroup = function MixpanelGroup() {};

_.extend(MixpanelGroup.prototype, apiActions);

MixpanelGroup.prototype._init = function (mixpanel_instance, group_key, group_id) {
  this._mixpanel = mixpanel_instance;
  this._group_key = group_key;
  this._group_id = group_id;
};
/**
 * Set properties on a group.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, dates, or lists
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */


MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function (prop, to, callback) {
  var data = this.set_action(prop, to);

  if (_.isObject(prop)) {
    callback = to;
  }

  return this._send_request(data, callback);
});
/**
 * Set properties on a group, only if they do not yet exist.
 * This will not overwrite previous group property values, unlike
 * group.set().
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set_once('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set_once({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, lists or dates
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(function (prop, to, callback) {
  var data = this.set_once_action(prop, to);

  if (_.isObject(prop)) {
    callback = to;
  }

  return this._send_request(data, callback);
});
/**
 * Unset properties on a group permanently.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').unset('Founded');
 *
 * @param {String} prop The name of the property.
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function (prop, callback) {
  var data = this.unset_action(prop);
  return this._send_request(data, callback);
});
/**
 * Merge a given list with a list-valued group property, excluding duplicate values.
 *
 * ### Usage:
 *
 *     // merge a value to a list, creating it if needed
 *     mixpanel.get_group('company', 'mixpanel').union('Location', ['San Francisco', 'London']);
 *
 * @param {String} list_name Name of the property.
 * @param {Array} values Values to merge with the given property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function (list_name, values, callback) {
  if (_.isObject(list_name)) {
    callback = values;
  }

  var data = this.union_action(list_name, values);
  return this._send_request(data, callback);
});
/**
 * Permanently delete a group.
 *
 * ### Usage:
 *     mixpanel.get_group('company', 'mixpanel').delete();
 */

MixpanelGroup.prototype['delete'] = addOptOutCheckMixpanelGroup(function (callback) {
  var data = this.delete_action();
  return this._send_request(data, callback);
});
/**
 * Remove a property from a group. The value will be ignored if doesn't exist.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').remove('Location', 'London');
 *
 * @param {String} list_name Name of the property.
 * @param {Object} value Value to remove from the given group property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function (list_name, value, callback) {
  var data = this.remove_action(list_name, value);
  return this._send_request(data, callback);
});

MixpanelGroup.prototype._send_request = function (data, callback) {
  data['$group_key'] = this._group_key;
  data['$group_id'] = this._group_id;
  data['$token'] = this._get_config('token');

  var date_encoded_data = _.encodeDates(data);

  var truncated_data = _.truncate(date_encoded_data, 255);

  var json_data = _.JSONEncode(date_encoded_data);

  var encoded_data = _.base64Encode(json_data);

  console.log(data);

  this._mixpanel._send_request(this._mixpanel.get_config('api_host') + '/groups/', {
    'data': encoded_data
  }, this._mixpanel._prepare_callback(callback, truncated_data));

  return truncated_data;
};

MixpanelGroup.prototype._is_reserved_property = function (prop) {
  return prop === '$group_key' || prop === '$group_id';
};

MixpanelGroup.prototype._get_config = function (conf) {
  return this._mixpanel.get_config(conf);
};

MixpanelGroup.prototype.toString = function () {
  return this._mixpanel.toString() + '.group.' + this._group_key + '.' + this._group_id;
}; // MixpanelGroup Exports


MixpanelGroup.prototype['remove'] = MixpanelGroup.prototype.remove;
MixpanelGroup.prototype['set'] = MixpanelGroup.prototype.set;
MixpanelGroup.prototype['set_once'] = MixpanelGroup.prototype.set_once;
MixpanelGroup.prototype['union'] = MixpanelGroup.prototype.union;
MixpanelGroup.prototype['unset'] = MixpanelGroup.prototype.unset;
MixpanelGroup.prototype['toString'] = MixpanelGroup.prototype.toString;
/*
 * Mixpanel JS Library
 *
 * Copyright 2012, Mixpanel, Inc. All Rights Reserved
 * http://mixpanel.com/
 *
 * Includes portions of Underscore.js
 * http://documentcloud.github.com/underscore/
 * (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
 * Released under the MIT License.
 */
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name mixpanel-2.8.min.js
// ==/ClosureCompiler==

/*
SIMPLE STYLE GUIDE:

this.x === public function
this._x === internal - only use within this file
this.__x === private - only use within the class

Globals should be all caps
*/

var init_type; // MODULE or SNIPPET loader

var mixpanel_master; // main mixpanel instance / object

var INIT_MODULE = 0;
var INIT_SNIPPET = 1;
/*
 * Constants
 */

/** @const */

var PRIMARY_INSTANCE_NAME = 'mixpanel';
/** @const */

var SET_QUEUE_KEY = '__mps';
/** @const */

var SET_ONCE_QUEUE_KEY = '__mpso';
/** @const */

var UNSET_QUEUE_KEY = '__mpus';
/** @const */

var ADD_QUEUE_KEY = '__mpa';
/** @const */

var APPEND_QUEUE_KEY = '__mpap';
/** @const */

var REMOVE_QUEUE_KEY = '__mpr';
/** @const */

var UNION_QUEUE_KEY = '__mpu'; // This key is deprecated, but we want to check for it to see whether aliasing is allowed.

/** @const */

var PEOPLE_DISTINCT_ID_KEY = '$people_distinct_id';
/** @const */

var ALIAS_ID_KEY = '__alias';
/** @const */

var CAMPAIGN_IDS_KEY = '__cmpns';
/** @const */

var EVENT_TIMERS_KEY = '__timers';
/** @const */

var RESERVED_PROPERTIES = [SET_QUEUE_KEY, SET_ONCE_QUEUE_KEY, UNSET_QUEUE_KEY, ADD_QUEUE_KEY, APPEND_QUEUE_KEY, REMOVE_QUEUE_KEY, UNION_QUEUE_KEY, PEOPLE_DISTINCT_ID_KEY, ALIAS_ID_KEY, CAMPAIGN_IDS_KEY, EVENT_TIMERS_KEY];
/*
 * Dynamic... constants? Is that an oxymoron?
 */
// http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
// https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#withCredentials

var USE_XHR = window$1.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(); // IE<10 does not support cross-origin XHR's but script tags
// with defer won't block window.onload; ENQUEUE_REQUESTS
// should only be true for Opera<12

var ENQUEUE_REQUESTS = !USE_XHR && userAgent.indexOf('MSIE') === -1 && userAgent.indexOf('Mozilla') === -1;
/*
 * Module-level globals
 */

var DEFAULT_CONFIG = {
  'api_host': 'https://api.mixpanel.com',
  'app_host': 'https://mixpanel.com',
  'autotrack': true,
  'cdn': 'https://cdn.mxpnl.com',
  'cross_subdomain_cookie': true,
  'persistence': 'cookie',
  'persistence_name': '',
  'cookie_name': '',
  'loaded': function loaded() {},
  'store_google': true,
  'save_referrer': true,
  'test': false,
  'verbose': false,
  'img': false,
  'track_pageview': true,
  'debug': false,
  'track_links_timeout': 300,
  'cookie_expiration': 365,
  'upgrade': false,
  'disable_persistence': false,
  'disable_cookie': false,
  'secure_cookie': false,
  'ip': true,
  'opt_out_tracking_by_default': false,
  'opt_out_persistence_by_default': false,
  'opt_out_tracking_persistence_type': 'localStorage',
  'opt_out_tracking_cookie_prefix': null,
  'property_blacklist': [],
  'xhr_headers': {} // { header: value, header2: value }

};
var DOM_LOADED = false;
/**
 * DomTracker Object
 * @constructor
 */

var DomTracker = function DomTracker() {}; // interface


DomTracker.prototype.create_properties = function () {};

DomTracker.prototype.event_handler = function () {};

DomTracker.prototype.after_track_handler = function () {};

DomTracker.prototype.init = function (mixpanel_instance) {
  this.mp = mixpanel_instance;
  return this;
};
/**
 * @param {Object|string} query
 * @param {string} event_name
 * @param {Object=} properties
 * @param {function(...[*])=} user_callback
 */


DomTracker.prototype.track = function (query, event_name, properties, user_callback) {
  var that = this;

  var elements = _.dom_query(query);

  if (elements.length === 0) {
    console$1.error('The DOM query (' + query + ') returned 0 elements');
    return;
  }

  _.each(elements, function (element) {
    _.register_event(element, this.override_event, function (e) {
      var options = {};
      var props = that.create_properties(properties, this);
      var timeout = that.mp.get_config('track_links_timeout');
      that.event_handler(e, this, options); // in case the mixpanel servers don't get back to us in time

      window$1.setTimeout(that.track_callback(user_callback, props, options, true), timeout); // fire the tracking event

      that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
    });
  }, this);

  return true;
};
/**
 * @param {function(...[*])} user_callback
 * @param {Object} props
 * @param {boolean=} timeout_occured
 */


DomTracker.prototype.track_callback = function (user_callback, props, options, timeout_occured) {
  timeout_occured = timeout_occured || false;
  var that = this;
  return function () {
    // options is referenced from both callbacks, so we can have
    // a 'lock' of sorts to ensure only one fires
    if (options.callback_fired) {
      return;
    }

    options.callback_fired = true;

    if (user_callback && user_callback(timeout_occured, props) === false) {
      // user can prevent the default functionality by
      // returning false from their callback
      return;
    }

    that.after_track_handler(props, options, timeout_occured);
  };
};

DomTracker.prototype.create_properties = function (properties, element) {
  var props;

  if (typeof properties === 'function') {
    props = properties(element);
  } else {
    props = _.extend({}, properties);
  }

  return props;
};
/**
 * LinkTracker Object
 * @constructor
 * @extends DomTracker
 */


var LinkTracker = function LinkTracker() {
  this.override_event = 'click';
};

_.inherit(LinkTracker, DomTracker);

LinkTracker.prototype.create_properties = function (properties, element) {
  var props = LinkTracker.superclass.create_properties.apply(this, arguments);

  if (element.href) {
    props['url'] = element.href;
  }

  return props;
};

LinkTracker.prototype.event_handler = function (evt, element, options) {
  options.new_tab = evt.which === 2 || evt.metaKey || evt.ctrlKey || element.target === '_blank';
  options.href = element.href;

  if (!options.new_tab) {
    evt.preventDefault();
  }
};

LinkTracker.prototype.after_track_handler = function (props, options) {
  if (options.new_tab) {
    return;
  }

  setTimeout(function () {
    window$1.location = options.href;
  }, 0);
};
/**
 * FormTracker Object
 * @constructor
 * @extends DomTracker
 */


var FormTracker = function FormTracker() {
  this.override_event = 'submit';
};

_.inherit(FormTracker, DomTracker);

FormTracker.prototype.event_handler = function (evt, element, options) {
  options.element = element;
  evt.preventDefault();
};

FormTracker.prototype.after_track_handler = function (props, options) {
  setTimeout(function () {
    options.element.submit();
  }, 0);
};
/**
 * Mixpanel Persistence Object
 * @constructor
 */


var MixpanelPersistence = function MixpanelPersistence(config) {
  this['props'] = {};
  this.campaign_params_saved = false;

  if (config['persistence_name']) {
    this.name = 'mp_' + config['persistence_name'];
  } else {
    this.name = 'mp_' + config['token'] + '_mixpanel';
  }

  var storage_type = config['persistence'];

  if (storage_type !== 'cookie' && storage_type !== 'localStorage') {
    console$1.critical('Unknown persistence type ' + storage_type + '; falling back to cookie');
    storage_type = config['persistence'] = 'cookie';
  }

  if (storage_type === 'localStorage' && _.localStorage.is_supported()) {
    this.storage = _.localStorage;
  } else {
    this.storage = _.cookie;
  }

  this.load();
  this.update_config(config);
  this.upgrade(config);
  this.save();
};

MixpanelPersistence.prototype.properties = function () {
  var p = {}; // Filter out reserved properties

  _.each(this['props'], function (v, k) {
    if (!_.include(RESERVED_PROPERTIES, k)) {
      p[k] = v;
    }
  });

  return p;
};

MixpanelPersistence.prototype.load = function () {
  if (this.disabled) {
    return;
  }

  var entry = this.storage.parse(this.name);

  if (entry) {
    this['props'] = _.extend({}, entry);
  }
};

MixpanelPersistence.prototype.upgrade = function (config) {
  var upgrade_from_old_lib = config['upgrade'],
      old_cookie_name,
      old_cookie;

  if (upgrade_from_old_lib) {
    old_cookie_name = 'mp_super_properties'; // Case where they had a custom cookie name before.

    if (typeof upgrade_from_old_lib === 'string') {
      old_cookie_name = upgrade_from_old_lib;
    }

    old_cookie = this.storage.parse(old_cookie_name); // remove the cookie

    this.storage.remove(old_cookie_name);
    this.storage.remove(old_cookie_name, true);

    if (old_cookie) {
      this['props'] = _.extend(this['props'], old_cookie['all'], old_cookie['events']);
    }
  }

  if (!config['cookie_name'] && config['name'] !== 'mixpanel') {
    // special case to handle people with cookies of the form
    // mp_TOKEN_INSTANCENAME from the first release of this library
    old_cookie_name = 'mp_' + config['token'] + '_' + config['name'];
    old_cookie = this.storage.parse(old_cookie_name);

    if (old_cookie) {
      this.storage.remove(old_cookie_name);
      this.storage.remove(old_cookie_name, true); // Save the prop values that were in the cookie from before -
      // this should only happen once as we delete the old one.

      this.register_once(old_cookie);
    }
  }

  if (this.storage === _.localStorage) {
    old_cookie = _.cookie.parse(this.name);

    _.cookie.remove(this.name);

    _.cookie.remove(this.name, true);

    if (old_cookie) {
      this.register_once(old_cookie);
    }
  }
};

MixpanelPersistence.prototype.save = function () {
  if (this.disabled) {
    return;
  }

  this._expire_notification_campaigns();

  this.storage.set(this.name, _.JSONEncode(this['props']), this.expire_days, this.cross_subdomain, this.secure);
};

MixpanelPersistence.prototype.remove = function () {
  // remove both domain and subdomain cookies
  this.storage.remove(this.name, false);
  this.storage.remove(this.name, true);
}; // removes the storage entry and deletes all loaded data
// forced name for tests


MixpanelPersistence.prototype.clear = function () {
  this.remove();
  this['props'] = {};
};
/**
 * @param {Object} props
 * @param {*=} default_value
 * @param {number=} days
 */


MixpanelPersistence.prototype.register_once = function (props, default_value, days) {
  if (_.isObject(props)) {
    if (typeof default_value === 'undefined') {
      default_value = 'None';
    }

    this.expire_days = typeof days === 'undefined' ? this.default_expiry : days;

    _.each(props, function (val, prop) {
      if (!this['props'].hasOwnProperty(prop) || this['props'][prop] === default_value) {
        this['props'][prop] = val;
      }
    }, this);

    this.save();
    return true;
  }

  return false;
};
/**
 * @param {Object} props
 * @param {number=} days
 */


MixpanelPersistence.prototype.register = function (props, days) {
  if (_.isObject(props)) {
    this.expire_days = typeof days === 'undefined' ? this.default_expiry : days;

    _.extend(this['props'], props);

    this.save();
    return true;
  }

  return false;
};

MixpanelPersistence.prototype.unregister = function (prop) {
  if (prop in this['props']) {
    delete this['props'][prop];
    this.save();
  }
};

MixpanelPersistence.prototype._expire_notification_campaigns = _.safewrap(function () {
  var campaigns_shown = this['props'][CAMPAIGN_IDS_KEY],
      EXPIRY_TIME = Config.DEBUG ? 60 * 1000 : 60 * 60 * 1000; // 1 minute (Config.DEBUG) / 1 hour (PDXN)

  if (!campaigns_shown) {
    return;
  }

  for (var campaign_id in campaigns_shown) {
    if (1 * new Date() - campaigns_shown[campaign_id] > EXPIRY_TIME) {
      delete campaigns_shown[campaign_id];
    }
  }

  if (_.isEmptyObject(campaigns_shown)) {
    delete this['props'][CAMPAIGN_IDS_KEY];
  }
});

MixpanelPersistence.prototype.update_campaign_params = function () {
  if (!this.campaign_params_saved) {
    this.register_once(_.info.campaignParams());
    this.campaign_params_saved = true;
  }
};

MixpanelPersistence.prototype.update_search_keyword = function (referrer) {
  this.register(_.info.searchInfo(referrer));
}; // EXPORTED METHOD, we test this directly.


MixpanelPersistence.prototype.update_referrer_info = function (referrer) {
  // If referrer doesn't exist, we want to note the fact that it was type-in traffic.
  this.register_once({
    '$initial_referrer': referrer || '$direct',
    '$initial_referring_domain': _.info.referringDomain(referrer) || '$direct'
  }, '');
};

MixpanelPersistence.prototype.get_referrer_info = function () {
  return _.strip_empty_properties({
    '$initial_referrer': this['props']['$initial_referrer'],
    '$initial_referring_domain': this['props']['$initial_referring_domain']
  });
}; // safely fills the passed in object with stored properties,
// does not override any properties defined in both
// returns the passed in object


MixpanelPersistence.prototype.safe_merge = function (props) {
  _.each(this['props'], function (val, prop) {
    if (!(prop in props)) {
      props[prop] = val;
    }
  });

  return props;
};

MixpanelPersistence.prototype.update_config = function (config) {
  this.default_expiry = this.expire_days = config['cookie_expiration'];
  this.set_disabled(config['disable_persistence']);
  this.set_cross_subdomain(config['cross_subdomain_cookie']);
  this.set_secure(config['secure_cookie']);
};

MixpanelPersistence.prototype.set_disabled = function (disabled) {
  this.disabled = disabled;

  if (this.disabled) {
    this.remove();
  } else {
    this.save();
  }
};

MixpanelPersistence.prototype.set_cross_subdomain = function (cross_subdomain) {
  if (cross_subdomain !== this.cross_subdomain) {
    this.cross_subdomain = cross_subdomain;
    this.remove();
    this.save();
  }
};

MixpanelPersistence.prototype.get_cross_subdomain = function () {
  return this.cross_subdomain;
};

MixpanelPersistence.prototype.set_secure = function (secure) {
  if (secure !== this.secure) {
    this.secure = secure ? true : false;
    this.remove();
    this.save();
  }
};

MixpanelPersistence.prototype._add_to_people_queue = function (queue, data) {
  var q_key = this._get_queue_key(queue),
      q_data = data[queue],
      set_q = this._get_or_create_queue(SET_ACTION),
      set_once_q = this._get_or_create_queue(SET_ONCE_ACTION),
      unset_q = this._get_or_create_queue(UNSET_ACTION),
      add_q = this._get_or_create_queue(ADD_ACTION),
      union_q = this._get_or_create_queue(UNION_ACTION),
      remove_q = this._get_or_create_queue(REMOVE_ACTION, []),
      append_q = this._get_or_create_queue(APPEND_ACTION, []);

  if (q_key === SET_QUEUE_KEY) {
    // Update the set queue - we can override any existing values
    _.extend(set_q, q_data); // if there was a pending increment, override it
    // with the set.


    this._pop_from_people_queue(ADD_ACTION, q_data); // if there was a pending union, override it
    // with the set.


    this._pop_from_people_queue(UNION_ACTION, q_data);

    this._pop_from_people_queue(UNSET_ACTION, q_data);
  } else if (q_key === SET_ONCE_QUEUE_KEY) {
    // only queue the data if there is not already a set_once call for it.
    _.each(q_data, function (v, k) {
      if (!(k in set_once_q)) {
        set_once_q[k] = v;
      }
    });

    this._pop_from_people_queue(UNSET_ACTION, q_data);
  } else if (q_key === UNSET_QUEUE_KEY) {
    _.each(q_data, function (prop) {
      // undo previously-queued actions on this key
      _.each([set_q, set_once_q, add_q, union_q], function (enqueued_obj) {
        if (prop in enqueued_obj) {
          delete enqueued_obj[prop];
        }
      });

      _.each(append_q, function (append_obj) {
        if (prop in append_obj) {
          delete append_obj[prop];
        }
      });

      unset_q[prop] = true;
    });
  } else if (q_key === ADD_QUEUE_KEY) {
    _.each(q_data, function (v, k) {
      // If it exists in the set queue, increment
      // the value
      if (k in set_q) {
        set_q[k] += v;
      } else {
        // If it doesn't exist, update the add
        // queue
        if (!(k in add_q)) {
          add_q[k] = 0;
        }

        add_q[k] += v;
      }
    }, this);

    this._pop_from_people_queue(UNSET_ACTION, q_data);
  } else if (q_key === UNION_QUEUE_KEY) {
    _.each(q_data, function (v, k) {
      if (_.isArray(v)) {
        if (!(k in union_q)) {
          union_q[k] = [];
        } // We may send duplicates, the server will dedup them.


        union_q[k] = union_q[k].concat(v);
      }
    });

    this._pop_from_people_queue(UNSET_ACTION, q_data);
  } else if (q_key === REMOVE_QUEUE_KEY) {
    remove_q.push(q_data);

    this._pop_from_people_queue(APPEND_ACTION, q_data);
  } else if (q_key === APPEND_QUEUE_KEY) {
    append_q.push(q_data);

    this._pop_from_people_queue(UNSET_ACTION, q_data);
  }

  console$1.log('MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):');
  console$1.log(data);
  this.save();
};

MixpanelPersistence.prototype._pop_from_people_queue = function (queue, data) {
  var q = this._get_queue(queue);

  if (!_.isUndefined(q)) {
    _.each(data, function (v, k) {
      if (queue === APPEND_ACTION || queue === REMOVE_ACTION) {
        // list actions: only remove if both k+v match
        // e.g. remove should not override append in a case like
        // append({foo: 'bar'}); remove({foo: 'qux'})
        _.each(q, function (queued_action) {
          if (queued_action[k] === v) {
            delete queued_action[k];
          }
        });
      } else {
        delete q[k];
      }
    }, this);

    this.save();
  }
};

MixpanelPersistence.prototype._get_queue_key = function (queue) {
  if (queue === SET_ACTION) {
    return SET_QUEUE_KEY;
  } else if (queue === SET_ONCE_ACTION) {
    return SET_ONCE_QUEUE_KEY;
  } else if (queue === UNSET_ACTION) {
    return UNSET_QUEUE_KEY;
  } else if (queue === ADD_ACTION) {
    return ADD_QUEUE_KEY;
  } else if (queue === APPEND_ACTION) {
    return APPEND_QUEUE_KEY;
  } else if (queue === REMOVE_ACTION) {
    return REMOVE_QUEUE_KEY;
  } else if (queue === UNION_ACTION) {
    return UNION_QUEUE_KEY;
  } else {
    console$1.error('Invalid queue:', queue);
  }
};

MixpanelPersistence.prototype._get_queue = function (queue) {
  return this['props'][this._get_queue_key(queue)];
};

MixpanelPersistence.prototype._get_or_create_queue = function (queue, default_val) {
  var key = this._get_queue_key(queue);

  default_val = _.isUndefined(default_val) ? {} : default_val;
  return this['props'][key] || (this['props'][key] = default_val);
};

MixpanelPersistence.prototype.set_event_timer = function (event_name, timestamp) {
  var timers = this['props'][EVENT_TIMERS_KEY] || {};
  timers[event_name] = timestamp;
  this['props'][EVENT_TIMERS_KEY] = timers;
  this.save();
};

MixpanelPersistence.prototype.remove_event_timer = function (event_name) {
  var timers = this['props'][EVENT_TIMERS_KEY] || {};
  var timestamp = timers[event_name];

  if (!_.isUndefined(timestamp)) {
    delete this['props'][EVENT_TIMERS_KEY][event_name];
    this.save();
  }

  return timestamp;
};
/**
 * Mixpanel Library Object
 * @constructor
 */


var MixpanelLib = function MixpanelLib() {};
/**
 * Mixpanel People Object
 * @constructor
 */


var MixpanelPeople = function MixpanelPeople() {};

var MPNotif;

_.extend(MixpanelPeople.prototype, apiActions);
/**
 * create_mplib(token:string, config:object, name:string)
 *
 * This function is used by the init method of MixpanelLib objects
 * as well as the main initializer at the end of the JSLib (that
 * initializes document.mixpanel as well as any additional instances
 * declared before this file has loaded).
 */


var create_mplib = function create_mplib(token, config, name) {
  var instance,
      target = name === PRIMARY_INSTANCE_NAME ? mixpanel_master : mixpanel_master[name];

  if (target && init_type === INIT_MODULE) {
    instance = target;
  } else {
    if (target && !_.isArray(target)) {
      console$1.error('You have already initialized ' + name);
      return;
    }

    instance = new MixpanelLib();
  }

  instance._init(token, config, name);

  instance['people'] = new MixpanelPeople();

  instance['people']._init(instance);

  instance._cached_groups = {}; // cache groups in a pool
  // if any instance on the page has debug = true, we set the
  // global debug to be true

  Config.DEBUG = Config.DEBUG || instance.get_config('debug');
  instance['__autotrack_enabled'] = instance.get_config('autotrack');

  if (instance.get_config('autotrack')) {
    var num_buckets = 100;
    var num_enabled_buckets = 100;

    if (!autotrack.enabledForProject(instance.get_config('token'), num_buckets, num_enabled_buckets)) {
      instance['__autotrack_enabled'] = false;
      console$1.log('Not in active bucket: disabling Automatic Event Collection.');
    } else if (!autotrack.isBrowserSupported()) {
      instance['__autotrack_enabled'] = false;
      console$1.log('Disabling Automatic Event Collection because this browser is not supported');
    } else {
      autotrack.init(instance);
    }
  } // if target is not defined, we called init after the lib already
  // loaded, so there won't be an array of things to execute


  if (!_.isUndefined(target) && _.isArray(target)) {
    // Crunch through the people queue first - we queue this data up &
    // flush on identify, so it's better to do all these operations first
    instance._execute_array.call(instance['people'], target['people']);

    instance._execute_array(target);
  }

  return instance;
}; // Initialization methods

/**
 * This function initializes a new instance of the Mixpanel tracking object.
 * All new instances are added to the main mixpanel object as sub properties (such as
 * mixpanel.library_name) and also returned by this function. To define a
 * second instance on the page, you would call:
 *
 *     mixpanel.init('new token', { your: 'config' }, 'library_name');
 *
 * and use it like so:
 *
 *     mixpanel.library_name.track(...);
 *
 * @param {String} token   Your Mixpanel API token
 * @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110">See a list of default config options</a>.
 * @param {String} [name]    The name for the new mixpanel instance that you want created
 */


MixpanelLib.prototype.init = function (token, config, name) {
  if (_.isUndefined(name)) {
    console$1.error('You must name your new library: init(token, config, name)');
    return;
  }

  if (name === PRIMARY_INSTANCE_NAME) {
    console$1.error('You must initialize the main mixpanel object right after you include the Mixpanel js snippet');
    return;
  }

  var instance = create_mplib(token, config, name);
  mixpanel_master[name] = instance;

  instance._loaded();

  return instance;
}; // mixpanel._init(token:string, config:object, name:string)
//
// This function sets up the current instance of the mixpanel
// library.  The difference between this method and the init(...)
// method is this one initializes the actual instance, whereas the
// init(...) method sets up a new library and calls _init on it.
//


MixpanelLib.prototype._init = function (token, config, name) {
  this['__loaded'] = true;
  this['config'] = {};
  this.set_config(_.extend({}, DEFAULT_CONFIG, config, {
    'name': name,
    'token': token,
    'callback_fn': (name === PRIMARY_INSTANCE_NAME ? name : PRIMARY_INSTANCE_NAME + '.' + name) + '._jsc'
  }));

  this['_jsc'] = function () {};

  this.__dom_loaded_queue = [];
  this.__request_queue = [];
  this.__disabled_events = [];
  this._flags = {
    'disable_all_events': false,
    'identify_called': false
  };
  this['persistence'] = this['cookie'] = new MixpanelPersistence(this['config']);

  this._gdpr_init();

  var uuid = _.UUID();

  if (!this.get_distinct_id()) {
    // There is no need to set the distinct id
    // or the device id if something was already stored
    // in the persitence
    this.register_once({
      'distinct_id': uuid,
      '$device_id': uuid
    }, '');
  }
}; // Private methods


MixpanelLib.prototype._loaded = function () {
  this.get_config('loaded')(this); // this happens after so a user can call identify/name_tag in
  // the loaded callback

  if (this.get_config('track_pageview')) {
    this.track_pageview();
  }
};

MixpanelLib.prototype._dom_loaded = function () {
  _.each(this.__dom_loaded_queue, function (item) {
    this._track_dom.apply(this, item);
  }, this);

  if (!this.has_opted_out_tracking()) {
    _.each(this.__request_queue, function (item) {
      this._send_request.apply(this, item);
    }, this);
  }

  delete this.__dom_loaded_queue;
  delete this.__request_queue;
};

MixpanelLib.prototype._track_dom = function (DomClass, args) {
  if (this.get_config('img')) {
    console$1.error('You can\'t use DOM tracking functions with img = true.');
    return false;
  }

  if (!DOM_LOADED) {
    this.__dom_loaded_queue.push([DomClass, args]);

    return false;
  }

  var dt = new DomClass().init(this);
  return dt.track.apply(dt, args);
};
/**
 * _prepare_callback() should be called by callers of _send_request for use
 * as the callback argument.
 *
 * If there is no callback, this returns null.
 * If we are going to make XHR/XDR requests, this returns a function.
 * If we are going to use script tags, this returns a string to use as the
 * callback GET param.
 */


MixpanelLib.prototype._prepare_callback = function (callback, data) {
  if (_.isUndefined(callback)) {
    return null;
  }

  if (USE_XHR) {
    var callback_function = function callback_function(response) {
      callback(response, data);
    };

    return callback_function;
  } else {
    // if the user gives us a callback, we store as a random
    // property on this instances jsc function and update our
    // callback string to reflect that.
    var jsc = this['_jsc'];
    var randomized_cb = '' + Math.floor(Math.random() * 100000000);
    var callback_string = this.get_config('callback_fn') + '[' + randomized_cb + ']';

    jsc[randomized_cb] = function (response) {
      delete jsc[randomized_cb];
      callback(response, data);
    };

    return callback_string;
  }
};

MixpanelLib.prototype._send_request = function (url, data, callback) {
  if (ENQUEUE_REQUESTS) {
    this.__request_queue.push(arguments);

    return;
  } // needed to correctly format responses


  var verbose_mode = this.get_config('verbose');

  if (data['verbose']) {
    verbose_mode = true;
  }

  if (this.get_config('test')) {
    data['test'] = 1;
  }

  if (verbose_mode) {
    data['verbose'] = 1;
  }

  if (this.get_config('img')) {
    data['img'] = 1;
  }

  if (!USE_XHR) {
    if (callback) {
      data['callback'] = callback;
    } else if (verbose_mode || this.get_config('test')) {
      // Verbose output (from verbose mode, or an error in test mode) is a json blob,
      // which by itself is not valid javascript. Without a callback, this verbose output will
      // cause an error when returned via jsonp, so we force a no-op callback param.
      // See the ECMA script spec: http://www.ecma-international.org/ecma-262/5.1/#sec-12.4
      data['callback'] = '(function(){})';
    }
  }

  data['ip'] = this.get_config('ip') ? 1 : 0;
  data['_'] = new Date().getTime().toString();
  url += '?' + _.HTTPBuildQuery(data);

  if ('img' in data) {
    var img = document$1.createElement('img');
    img.src = url;
    document$1.body.appendChild(img);
  } else if (USE_XHR) {
    try {
      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      var headers = this.get_config('xhr_headers');

      _.each(headers, function (headerValue, headerName) {
        req.setRequestHeader(headerName, headerValue);
      }); // send the mp_optout cookie
      // withCredentials cannot be modified until after calling .open on Android and Mobile Safari


      req.withCredentials = true;

      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          // XMLHttpRequest.DONE == 4, except in safari 4
          if (req.status === 200) {
            if (callback) {
              if (verbose_mode) {
                var response;

                try {
                  response = _.JSONDecode(req.responseText);
                } catch (e) {
                  console$1.error(e);
                  return;
                }

                callback(response);
              } else {
                callback(Number(req.responseText));
              }
            }
          } else {
            var error = 'Bad HTTP status: ' + req.status + ' ' + req.statusText;
            console$1.error(error);

            if (callback) {
              if (verbose_mode) {
                callback({
                  status: 0,
                  error: error
                });
              } else {
                callback(0);
              }
            }
          }
        }
      };

      req.send(null);
    } catch (e) {
      console$1.error(e);
    }
  } else {
    var script = document$1.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = url;
    var s = document$1.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
  }
};
/**
 * _execute_array() deals with processing any mixpanel function
 * calls that were called before the Mixpanel library were loaded
 * (and are thus stored in an array so they can be called later)
 *
 * Note: we fire off all the mixpanel function calls && user defined
 * functions BEFORE we fire off mixpanel tracking calls. This is so
 * identify/register/set_config calls can properly modify early
 * tracking calls.
 *
 * @param {Array} array
 */


MixpanelLib.prototype._execute_array = function (array) {
  var fn_name,
      alias_calls = [],
      other_calls = [],
      tracking_calls = [];

  _.each(array, function (item) {
    if (item) {
      fn_name = item[0];

      if (_.isArray(fn_name)) {
        tracking_calls.push(item); // chained call e.g. mixpanel.get_group().set()
      } else if (typeof item === 'function') {
        item.call(this);
      } else if (_.isArray(item) && fn_name === 'alias') {
        alias_calls.push(item);
      } else if (_.isArray(item) && fn_name.indexOf('track') !== -1 && typeof this[fn_name] === 'function') {
        tracking_calls.push(item);
      } else {
        other_calls.push(item);
      }
    }
  }, this);

  var execute = function execute(calls, context) {
    _.each(calls, function (item) {
      if (_.isArray(item[0])) {
        // chained call
        var caller = context;

        _.each(item, function (call) {
          caller = caller[call[0]].apply(caller, call.slice(1));
        });
      } else {
        this[item[0]].apply(this, item.slice(1));
      }
    }, context);
  };

  execute(alias_calls, this);
  execute(other_calls, this);
  execute(tracking_calls, this);
};
/**
 * push() keeps the standard async-array-push
 * behavior around after the lib is loaded.
 * This is only useful for external integrations that
 * do not wish to rely on our convenience methods
 * (created in the snippet).
 *
 * ### Usage:
 *     mixpanel.push(['register', { a: 'b' }]);
 *
 * @param {Array} item A [function_name, args...] array to be executed
 */


MixpanelLib.prototype.push = function (item) {
  this._execute_array([item]);
};
/**
 * Disable events on the Mixpanel object. If passed no arguments,
 * this function disables tracking of any event. If passed an
 * array of event names, those events will be disabled, but other
 * events will continue to be tracked.
 *
 * Note: this function does not stop other mixpanel functions from
 * firing, such as register() or people.set().
 *
 * @param {Array} [events] An array of event names to disable
 */


MixpanelLib.prototype.disable = function (events) {
  if (typeof events === 'undefined') {
    this._flags.disable_all_events = true;
  } else {
    this.__disabled_events = this.__disabled_events.concat(events);
  }
};
/**
 * Track an event. This is the most important and
 * frequently used Mixpanel function.
 *
 * ### Usage:
 *
 *     // track an event named 'Registered'
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 * To track link clicks or form submissions, see track_links() or track_forms().
 *
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 */


MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function (event_name, properties, callback) {
  if (typeof callback !== 'function') {
    callback = function callback() {};
  }

  if (_.isUndefined(event_name)) {
    console$1.error('No event name provided to mixpanel.track');
    return;
  }

  if (this._event_is_disabled(event_name)) {
    callback(0);
    return;
  } // set defaults


  properties = properties || {};
  properties['token'] = this.get_config('token'); // set $duration if time_event was previously called for this event

  var start_timestamp = this['persistence'].remove_event_timer(event_name);

  if (!_.isUndefined(start_timestamp)) {
    var duration_in_ms = new Date().getTime() - start_timestamp;
    properties['$duration'] = parseFloat((duration_in_ms / 1000).toFixed(3));
  } // update persistence


  this['persistence'].update_search_keyword(document$1.referrer);

  if (this.get_config('store_google')) {
    this['persistence'].update_campaign_params();
  }

  if (this.get_config('save_referrer')) {
    this['persistence'].update_referrer_info(document$1.referrer);
  } // note: extend writes to the first object, so lets make sure we
  // don't write to the persistence properties object and info
  // properties object by passing in a new object
  // update properties with pageview info and super-properties


  properties = _.extend({}, _.info.properties(), this['persistence'].properties(), properties);
  var property_blacklist = this.get_config('property_blacklist');

  if (_.isArray(property_blacklist)) {
    _.each(property_blacklist, function (blacklisted_prop) {
      delete properties[blacklisted_prop];
    });
  } else {
    console$1.error('Invalid value for property_blacklist config: ' + property_blacklist);
  }

  var data = {
    'event': event_name,
    'properties': properties
  };

  var truncated_data = _.truncate(data, 255);

  var json_data = _.JSONEncode(truncated_data);

  var encoded_data = _.base64Encode(json_data);

  console$1.log('MIXPANEL REQUEST:');
  console$1.log(truncated_data);

  this._send_request(this.get_config('api_host') + '/track/', {
    'data': encoded_data
  }, this._prepare_callback(callback, truncated_data));

  return truncated_data;
});
/**
 * Register the current user into one/many groups.
 *
 * Usage:
 *      mixpanel.set_group('company', ['mixpanel', 'google']) # an array of IDs
 *      mixpanel.set_group('company', 'mixpanel')
 *      mixpanel.set_group('company', 128746312)
 *
 * @param {String} group_key Group key
 * @param {Array|String|Number} group_ids An array of group IDs, or a singular group ID
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 *
 */

MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function (group_key, group_ids, callback) {
  if (!_.isArray(group_ids)) {
    group_ids = [group_ids];
  }

  var prop = {};
  prop[group_key] = group_ids;
  this.register(prop);
  return this['people'].set(group_key, group_ids, callback);
});
/**
 * Add a new group for this user.
 * Usage:
 *      mixpanel.add_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function (group_key, group_id, callback) {
  var old_values = this.get_property(group_key);

  if (old_values === undefined) {
    var prop = {};
    prop[group_key] = [group_id];
    this.register(prop);
  } else {
    if (old_values.indexOf(group_id) === -1) {
      old_values.push(group_id);
      this.register(prop);
    }
  }

  return this['people'].union(group_key, group_id, callback);
});
/**
 * Remove a group from this user.
 * Usage:
 *      mixpanel.remove_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(function (group_key, group_id, callback) {
  var old_value = this.get_property(group_key); // if the value doesn't exist, the persistent store is unchanged

  if (old_value !== undefined) {
    var idx = old_value.indexOf(group_id);

    if (idx > -1) {
      old_value.splice(idx, 1);
      this.register({
        group_key: old_value
      });
    }

    if (old_value.length === 0) {
      this.unregister(group_key);
    }
  }

  return this['people'].remove(group_key, group_id, callback);
});
/**
 * Track an event with specific groups.
 * Usage:
 *      mixpanel.track_with_groups('purchase', {'product': 'iphone'}, {'University': ['UCB', 'UCLA']})
 * @param {Object|String} query
 * @param {String} event_name
 * @param {Object=} properties
 * @param {Object=} groups
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(function (event_name, properties, groups, callback) {
  var tracking_props = _.extend({}, properties || {});

  _.each(groups, function (v, k) {
    if (v !== null && v !== undefined) {
      tracking_props[k] = v;
    }
  });

  return this.track(event_name, tracking_props, callback);
});

MixpanelLib.prototype._create_map_key = function (group_key, group_id) {
  return group_key + '_' + JSON.stringify(group_id);
};

MixpanelLib.prototype._remove_group_from_cache = function (group_key, group_id) {
  delete this._cached_groups[this._create_map_key(group_key, group_id)];
};
/**
 * Look up reference to a Mixpanel group
 * Usage:
 *       mixpanel.get_group(group_key, group_id)
 *
 * @param {String} group_key Group key
 * @param {Object} group_id A valid Mixpanel property type
 * @returns {Object} A MixpanelGroup identifier
 */


MixpanelLib.prototype.get_group = function (group_key, group_id) {
  var map_key = this._create_map_key(group_key, group_id);

  var group = this._cached_groups[map_key];

  if (group === undefined || group._group_key !== group_key || group._group_id !== group_id) {
    group = new MixpanelGroup();

    group._init(this, group_key, group_id);

    this._cached_groups[map_key] = group;
  }

  return group;
};
/**
 * Track a page view event, which is currently ignored by the server.
 * This function is called by default on page load unless the
 * track_pageview configuration variable is false.
 *
 * @param {String} [page] The url of the page to record. If you don't include this, it defaults to the current url.
 * @api private
 */


MixpanelLib.prototype.track_pageview = function (page) {
  if (_.isUndefined(page)) {
    page = document$1.location.href;
  }

  this.track('mp_page_view', _.info.pageviewInfo(page));
};
/**
 * Track clicks on a set of document elements. Selector must be a
 * valid query. Elements must exist on the page at the time track_links is called.
 *
 * ### Usage:
 *
 *     // track click for link id #nav
 *     mixpanel.track_links('#nav', 'Clicked Nav Link');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the Mixpanel
 * servers to respond. If they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] A properties object or function that returns a dictionary of properties when passed a DOMElement
 */


MixpanelLib.prototype.track_links = function () {
  return this._track_dom.call(this, LinkTracker, arguments);
};
/**
 * Track form submissions. Selector must be a valid query.
 *
 * ### Usage:
 *
 *     // track submission for form id 'register'
 *     mixpanel.track_forms('#register', 'Created Account');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the mixpanel
 * servers to respond, if they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
 */


MixpanelLib.prototype.track_forms = function () {
  return this._track_dom.call(this, FormTracker, arguments);
};
/**
 * Time an event by including the time between this call and a
 * later 'track' call for the same event in the properties sent
 * with the event.
 *
 * ### Usage:
 *
 *     // time an event named 'Registered'
 *     mixpanel.time_event('Registered');
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 * When called for a particular event name, the next track call for that event
 * name will include the elapsed time between the 'time_event' and 'track'
 * calls. This value is stored as seconds in the '$duration' property.
 *
 * @param {String} event_name The name of the event.
 */


MixpanelLib.prototype.time_event = function (event_name) {
  if (_.isUndefined(event_name)) {
    console$1.error('No event name provided to mixpanel.time_event');
    return;
  }

  if (this._event_is_disabled(event_name)) {
    return;
  }

  this['persistence'].set_event_timer(event_name, new Date().getTime());
};
/**
 * Register a set of super properties, which are included with all
 * events. This will overwrite previous super property values.
 *
 * ### Usage:
 *
 *     // register 'Gender' as a super property
 *     mixpanel.register({'Gender': 'Female'});
 *
 *     // register several super properties when a user signs up
 *     mixpanel.register({
 *         'Email': 'jdoe@example.com',
 *         'Account Type': 'Free'
 *     });
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {Number} [days] How many days since the user's last visit to store the super properties
 */


MixpanelLib.prototype.register = function (props, days) {
  this['persistence'].register(props, days);
};
/**
 * Register a set of super properties only once. This will not
 * overwrite previous super property values, unlike register().
 *
 * ### Usage:
 *
 *     // register a super property for the first time only
 *     mixpanel.register_once({
 *         'First Login Date': new Date().toISOString()
 *     });
 *
 * ### Notes:
 *
 * If default_value is specified, current super properties
 * with that value will be overwritten.
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
 * @param {Number} [days] How many days since the users last visit to store the super properties
 */


MixpanelLib.prototype.register_once = function (props, default_value, days) {
  this['persistence'].register_once(props, default_value, days);
};
/**
 * Delete a super property stored with the current user.
 *
 * @param {String} property The name of the super property to remove
 */


MixpanelLib.prototype.unregister = function (property) {
  this['persistence'].unregister(property);
};

MixpanelLib.prototype._register_single = function (prop, value) {
  var props = {};
  props[prop] = value;
  this.register(props);
};
/**
 * Identify a user with a unique ID instead of a Mixpanel
 * randomly generated distinct_id. If the method is never called,
 * then unique visitors will be identified by a UUID generated
 * the first time they visit the site.
 *
 * ### Notes:
 *
 * You can call this function to overwrite a previously set
 * unique ID for the current user. Mixpanel cannot translate
 * between IDs at this time, so when you change a user's ID
 * they will appear to be a new user.
 *
 * When used alone, mixpanel.identify will change the user's
 * distinct_id to the unique ID provided. When used in tandem
 * with mixpanel.alias, it will allow you to identify based on
 * unique ID and map that back to the original, anonymous
 * distinct_id given to the user upon her first arrival to your
 * site (thus connecting anonymous pre-signup activity to
 * post-signup activity). Though the two work together, do not
 * call identify() at the same time as alias(). Calling the two
 * at the same time can cause a race condition, so it is best
 * practice to call identify on the original, anonymous ID
 * right after you've aliased it.
 * <a href="https://mixpanel.com/help/questions/articles/how-should-i-handle-my-user-identity-with-the-mixpanel-javascript-library">Learn more about how mixpanel.identify and mixpanel.alias can be used</a>.
 *
 * @param {String} [unique_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
 */


MixpanelLib.prototype.identify = function (unique_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
  // Optional Parameters
  //  _set_callback:function  A callback to be run if and when the People set queue is flushed
  //  _add_callback:function  A callback to be run if and when the People add queue is flushed
  //  _append_callback:function  A callback to be run if and when the People append queue is flushed
  //  _set_once_callback:function  A callback to be run if and when the People set_once queue is flushed
  //  _union_callback:function  A callback to be run if and when the People union queue is flushed
  //  _unset_callback:function  A callback to be run if and when the People unset queue is flushed
  // identify only changes the distinct id if it doesn't match either the existing or the alias;
  // if it's new, blow away the alias as well.
  var distinct_id = this.get_distinct_id();
  this.register({
    '$user_id': unique_id
  });

  if (unique_id !== distinct_id && unique_id !== this.get_property(ALIAS_ID_KEY)) {
    this.unregister(ALIAS_ID_KEY);
    this.register({
      'distinct_id': unique_id
    });
  }

  this._check_and_handle_notifications(this.get_distinct_id());

  this._flags.identify_called = true; // Flush any queued up people requests

  this['people']._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback);
};
/**
 * Clears super properties and generates a new random distinct_id for this instance.
 * Useful for clearing data when a user logs out.
 */


MixpanelLib.prototype.reset = function () {
  this['persistence'].clear();
  this._flags.identify_called = false;

  var uuid = _.UUID();

  this.register_once({
    'distinct_id': uuid,
    '$device_id': uuid
  }, '');
};
/**
 * Returns the current distinct id of the user. This is either the id automatically
 * generated by the library or the id that has been passed by a call to identify().
 *
 * ### Notes:
 *
 * get_distinct_id() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // set distinct_id after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             distinct_id = mixpanel.get_distinct_id();
 *         }
 *     });
 */


MixpanelLib.prototype.get_distinct_id = function () {
  return this.get_property('distinct_id');
};
/**
 * Create an alias, which Mixpanel will use to link two distinct_ids going forward (not retroactively).
 * Multiple aliases can map to the same original ID, but not vice-versa. Aliases can also be chained - the
 * following is a valid scenario:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     ...
 *     mixpanel.alias('newer_id', 'new_id');
 *
 * If the original ID is not passed in, we will use the current distinct_id - probably the auto-generated GUID.
 *
 * ### Notes:
 *
 * The best practice is to call alias() when a unique ID is first created for a user
 * (e.g., when a user first registers for an account and provides an email address).
 * alias() should never be called more than once for a given user, except to
 * chain a newer ID to a previously new ID, as described above.
 *
 * @param {String} alias A unique identifier that you want to use for this user in the future.
 * @param {String} [original] The current identifier being used for this user.
 */


MixpanelLib.prototype.alias = function (alias, original) {
  // If the $people_distinct_id key exists in persistence, there has been a previous
  // mixpanel.people.identify() call made for this user. It is VERY BAD to make an alias with
  // this ID, as it will duplicate users.
  if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
    console$1.critical('Attempting to create alias for existing People user - aborting.');
    return -2;
  }

  var _this = this;

  if (_.isUndefined(original)) {
    original = this.get_distinct_id();
  }

  if (alias !== original) {
    this._register_single(ALIAS_ID_KEY, alias);

    return this.track('$create_alias', {
      'alias': alias,
      'distinct_id': original
    }, function () {
      // Flush the people queue
      _this.identify(alias);
    });
  } else {
    console$1.error('alias matches current distinct_id - skipping api call.');
    this.identify(alias);
    return -1;
  }
};
/**
 * Provide a string to recognize the user by. The string passed to
 * this method will appear in the Mixpanel Streams product rather
 * than an automatically generated name. Name tags do not have to
 * be unique.
 *
 * This value will only be included in Streams data.
 *
 * @param {String} name_tag A human readable name for the user
 * @api private
 */


MixpanelLib.prototype.name_tag = function (name_tag) {
  this._register_single('mp_name_tag', name_tag);
};
/**
 * Update the configuration of a mixpanel library instance.
 *
 * The default config is:
 *
 *     {
 *       // super properties cookie expiration (in days)
 *       cookie_expiration: 365
 *
 *       // super properties span subdomains
 *       cross_subdomain_cookie: true
 *
 *       // debug mode
 *       debug: false
 *
 *       // if this is true, the mixpanel cookie or localStorage entry
 *       // will be deleted, and no user persistence will take place
 *       disable_persistence: false
 *
 *       // if this is true, Mixpanel will automatically determine
 *       // City, Region and Country data using the IP address of
 *       //the client
 *       ip: true
 *
 *       // opt users out of tracking by this Mixpanel instance by default
 *       opt_out_tracking_by_default: false
 *
 *       // opt users out of browser data storage by this Mixpanel instance by default
 *       opt_out_persistence_by_default: false
 *
 *       // persistence mechanism used by opt-in/opt-out methods - cookie
 *       // or localStorage - falls back to cookie if localStorage is unavailable
 *       opt_out_tracking_persistence_type: 'localStorage'
 *
 *       // customize the name of cookie/localStorage set by opt-in/opt-out methods
 *       opt_out_tracking_cookie_prefix: null
 *
 *       // type of persistent store for super properties (cookie/
 *       // localStorage) if set to 'localStorage', any existing
 *       // mixpanel cookie value with the same persistence_name
 *       // will be transferred to localStorage and deleted
 *       persistence: 'cookie'
 *
 *       // name for super properties persistent store
 *       persistence_name: ''
 *
 *       // names of properties/superproperties which should never
 *       // be sent with track() calls
 *       property_blacklist: []
 *
 *       // if this is true, mixpanel cookies will be marked as
 *       // secure, meaning they will only be transmitted over https
 *       secure_cookie: false
 *
 *       // the amount of time track_links will
 *       // wait for Mixpanel's servers to respond
 *       track_links_timeout: 300
 *
 *       // should we track a page view on page load
 *       track_pageview: true
 *
 *       // if you set upgrade to be true, the library will check for
 *       // a cookie from our old js library and import super
 *       // properties from it, then the old cookie is deleted
 *       // The upgrade config option only works in the initialization,
 *       // so make sure you set it when you create the library.
 *       upgrade: false
 *
 *       // extra HTTP request headers to set for each API request, in
 *       // the format {'Header-Name': value}
 *       xhr_headers: {}
 *     }
 *
 *
 * @param {Object} config A dictionary of new configuration values to update
 */


MixpanelLib.prototype.set_config = function (config) {
  if (_.isObject(config)) {
    _.extend(this['config'], config);

    if (!this.get_config('persistence_name')) {
      this['config']['persistence_name'] = this['config']['cookie_name'];
    }

    if (!this.get_config('disable_persistence')) {
      this['config']['disable_persistence'] = this['config']['disable_cookie'];
    }

    if (this['persistence']) {
      this['persistence'].update_config(this['config']);
    }

    Config.DEBUG = Config.DEBUG || this.get_config('debug');
  }
};
/**
 * returns the current config object for the library.
 */


MixpanelLib.prototype.get_config = function (prop_name) {
  return this['config'][prop_name];
};
/**
 * Returns the value of the super property named property_name. If no such
 * property is set, get_property() will return the undefined value.
 *
 * ### Notes:
 *
 * get_property() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // grab value for 'user_id' after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             user_id = mixpanel.get_property('user_id');
 *         }
 *     });
 *
 * @param {String} property_name The name of the super property you want to retrieve
 */


MixpanelLib.prototype.get_property = function (property_name) {
  return this['persistence']['props'][property_name];
};

MixpanelLib.prototype.toString = function () {
  var name = this.get_config('name');

  if (name !== PRIMARY_INSTANCE_NAME) {
    name = PRIMARY_INSTANCE_NAME + '.' + name;
  }

  return name;
};

MixpanelLib.prototype._event_is_disabled = function (event_name) {
  return _.isBlockedUA(userAgent) || this._flags.disable_all_events || _.include(this.__disabled_events, event_name);
};

MixpanelLib.prototype._check_and_handle_notifications = addOptOutCheckMixpanelLib(function (distinct_id) {
  if (!distinct_id || this._flags.identify_called || this.get_config('disable_notifications')) {
    return;
  }

  console$1.log('MIXPANEL NOTIFICATION CHECK');
  var data = {
    'verbose': true,
    'version': '2',
    'lib': 'web',
    'token': this.get_config('token'),
    'distinct_id': distinct_id
  };
  var self = this;

  this._send_request(this.get_config('api_host') + '/decide/', data, this._prepare_callback(function (r) {
    if (r['notifications'] && r['notifications'].length > 0) {
      self._show_notification.call(self, r['notifications'][0]);
    }
  }));
});

MixpanelLib.prototype._show_notification = function (notification_data) {
  var notification = new MPNotif(notification_data, this);
  notification.show();
}; // perform some housekeeping around GDPR opt-in/out state


MixpanelLib.prototype._gdpr_init = function () {
  var is_localStorage_requested = this.get_config('opt_out_tracking_persistence_type') === 'localStorage'; // try to convert opt-in/out cookies to localStorage if possible

  if (is_localStorage_requested && _.localStorage.is_supported()) {
    if (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
      'persistence_type': 'cookie'
    })) {
      this.opt_in_tracking({
        'enable_persistence': false
      });
    }

    if (!this.has_opted_out_tracking() && this.has_opted_out_tracking({
      'persistence_type': 'cookie'
    })) {
      this.opt_out_tracking({
        'clear_persistence': false
      });
    }

    this.clear_opt_in_out_tracking({
      'persistence_type': 'cookie',
      'enable_persistence': false
    });
  } // check whether the user has already opted out - if so, clear & disable persistence


  if (this.has_opted_out_tracking()) {
    this._gdpr_update_persistence({
      'clear_persistence': true
    }); // check whether we should opt out by default
    // note: we don't clear persistence here by default since opt-out default state is often
    //       used as an initial state while GDPR information is being collected

  } else if (!this.has_opted_in_tracking() && (this.get_config('opt_out_tracking_by_default') || _.cookie.get('mp_optout'))) {
    _.cookie.remove('mp_optout');

    this.opt_out_tracking({
      'clear_persistence': this.get_config('opt_out_persistence_by_default')
    });
  }
};
/**
 * Enable or disable persistence based on options
 * only enable/disable if persistence is not already in this state
 * @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
 * @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
 */


MixpanelLib.prototype._gdpr_update_persistence = function (options) {
  var disabled;

  if (options && options['clear_persistence']) {
    disabled = true;
  } else if (options && options['enable_persistence']) {
    disabled = false;
  } else {
    return;
  }

  if (!this.get_config('disable_persistence') && this['persistence'].disabled !== disabled) {
    this['persistence'].set_disabled(disabled);
  }
}; // call a base gdpr function after constructing the appropriate token and options args


MixpanelLib.prototype._gdpr_call_func = function (func, options) {
  options = _.extend({
    'track': _.bind(this.track, this),
    'persistence_type': this.get_config('opt_out_tracking_persistence_type'),
    'cookie_prefix': this.get_config('opt_out_tracking_cookie_prefix'),
    'cookie_expiration': this.get_config('cookie_expiration'),
    'cross_subdomain_cookie': this.get_config('cross_subdomain_cookie'),
    'secure_cookie': this.get_config('secure_cookie')
  }, options); // check if localStorage can be used for recording opt out status, fall back to cookie if not

  if (!_.localStorage.is_supported()) {
    options['persistence_type'] = 'cookie';
  }

  return func(this.get_config('token'), {
    track: options['track'],
    trackEventName: options['track_event_name'],
    trackProperties: options['track_properties'],
    persistenceType: options['persistence_type'],
    persistencePrefix: options['cookie_prefix'],
    cookieExpiration: options['cookie_expiration'],
    crossSubdomainCookie: options['cross_subdomain_cookie'],
    secureCookie: options['secure_cookie']
  });
};
/**
 * Opt the user in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user in
 *     mixpanel.opt_in_tracking();
 *
 *     // opt user in with specific event name, properties, cookie configuration
 *     mixpanel.opt_in_tracking({
 *         track_event_name: 'User opted in',
 *         track_event_properties: {
 *             'Email': 'jdoe@example.com'
 *         },
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {function} [options.track] Function used for tracking a Mixpanel event to record the opt-in action (default is this Mixpanel instance's track method)
 * @param {string} [options.track_event_name=$opt_in] Event name to be used for tracking the opt-in action
 * @param {Object} [options.track_properties] Set of properties to be tracked along with the opt-in action
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */


MixpanelLib.prototype.opt_in_tracking = function (options) {
  options = _.extend({
    'enable_persistence': true
  }, options);

  this._gdpr_call_func(optIn, options);

  this._gdpr_update_persistence(options);
};
/**
 * Opt the user out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user out
 *     mixpanel.opt_out_tracking();
 *
 *     // opt user out with different cookie configuration from Mixpanel instance
 *     mixpanel.opt_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.delete_user=true] If true, will delete the currently identified user's profile and clear all charges after opting the user out
 * @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */


MixpanelLib.prototype.opt_out_tracking = function (options) {
  options = _.extend({
    'clear_persistence': true,
    'delete_user': true
  }, options); // delete use and clear charges since these methods may be disabled by opt-out

  if (options['delete_user'] && this['people'] && this['people']._identify_called()) {
    this['people'].delete_user();
    this['people'].clear_charges();
  }

  this._gdpr_call_func(optOut, options);

  this._gdpr_update_persistence(options);
};
/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_in = mixpanel.has_opted_in_tracking();
 *     // use has_opted_in value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-in status
 */


MixpanelLib.prototype.has_opted_in_tracking = function (options) {
  return this._gdpr_call_func(hasOptedIn, options);
};
/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_out = mixpanel.has_opted_out_tracking();
 *     // use has_opted_out value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-out status
 */


MixpanelLib.prototype.has_opted_out_tracking = function (options) {
  return this._gdpr_call_func(hasOptedOut, options);
};
/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // clear user's opt-in/out status
 *     mixpanel.clear_opt_in_out_tracking();
 *
 *     // clear user's opt-in/out status with specific cookie configuration - should match
 *     // configuration used when opt_in_tracking/opt_out_tracking methods were called.
 *     mixpanel.clear_opt_in_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */


MixpanelLib.prototype.clear_opt_in_out_tracking = function (options) {
  options = _.extend({
    'enable_persistence': true
  }, options);

  this._gdpr_call_func(clearOptInOut, options);

  this._gdpr_update_persistence(options);
};

MixpanelPeople.prototype._init = function (mixpanel_instance) {
  this._mixpanel = mixpanel_instance;
};
/*
 * Set properties on a user record.
 *
 * ### Usage:
 *
 *     mixpanel.people.set('gender', 'm');
 *
 *     // or set multiple properties at once
 *     mixpanel.people.set({
 *         'Company': 'Acme',
 *         'Plan': 'Premium',
 *         'Upgrade date': new Date()
 *     });
 *     // properties can be strings, integers, dates, or lists
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */


MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function (prop, to, callback) {
  var data = this.set_action(prop, to);

  if (_.isObject(prop)) {
    callback = to;
  } // make sure that the referrer info has been updated and saved


  if (this._get_config('save_referrer')) {
    this._mixpanel['persistence'].update_referrer_info(document$1.referrer);
  } // update $set object with default people properties


  data[SET_ACTION] = _.extend({}, _.info.people_properties(), this._mixpanel['persistence'].get_referrer_info(), data[SET_ACTION]);
  return this._send_request(data, callback);
});
/*
 * Set properties on a user record, only if they do not yet exist.
 * This will not overwrite previous people property values, unlike
 * people.set().
 *
 * ### Usage:
 *
 *     mixpanel.people.set_once('First Login Date', new Date());
 *
 *     // or set multiple properties at once
 *     mixpanel.people.set_once({
 *         'First Login Date': new Date(),
 *         'Starting Plan': 'Premium'
 *     });
 *
 *     // properties can be strings, integers or dates
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(function (prop, to, callback) {
  var data = this.set_once_action(prop, to);

  if (_.isObject(prop)) {
    callback = to;
  }

  return this._send_request(data, callback);
});
/*
 * Unset properties on a user record (permanently removes the properties and their values from a profile).
 *
 * ### Usage:
 *
 *     mixpanel.people.unset('gender');
 *
 *     // or unset multiple properties at once
 *     mixpanel.people.unset(['gender', 'Company']);
 *
 * @param {Array|String} prop If a string, this is the name of the property. If an array, this is a list of property names.
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(function (prop, callback) {
  var data = this.unset_action(prop);
  return this._send_request(data, callback);
});
/*
 * Increment/decrement numeric people analytics properties.
 *
 * ### Usage:
 *
 *     mixpanel.people.increment('page_views', 1);
 *
 *     // or, for convenience, if you're just incrementing a counter by
 *     // 1, you can simply do
 *     mixpanel.people.increment('page_views');
 *
 *     // to decrement a counter, pass a negative number
 *     mixpanel.people.increment('credits_left', -1);
 *
 *     // like mixpanel.people.set(), you can increment multiple
 *     // properties at once:
 *     mixpanel.people.increment({
 *         counter1: 1,
 *         counter2: 6
 *     });
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and numeric values.
 * @param {Number} [by] An amount to increment the given property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(function (prop, by, callback) {
  var data = {};
  var $add = {};

  if (_.isObject(prop)) {
    _.each(prop, function (v, k) {
      if (!this._is_reserved_property(k)) {
        if (isNaN(parseFloat(v))) {
          console$1.error('Invalid increment value passed to mixpanel.people.increment - must be a number');
          return;
        } else {
          $add[k] = v;
        }
      }
    }, this);

    callback = by;
  } else {
    // convenience: mixpanel.people.increment('property'); will
    // increment 'property' by 1
    if (_.isUndefined(by)) {
      by = 1;
    }

    $add[prop] = by;
  }

  data[ADD_ACTION] = $add;
  return this._send_request(data, callback);
});
/*
 * Append a value to a list-valued people analytics property.
 *
 * ### Usage:
 *
 *     // append a value to a list, creating it if needed
 *     mixpanel.people.append('pages_visited', 'homepage');
 *
 *     // like mixpanel.people.set(), you can append multiple
 *     // properties at once:
 *     mixpanel.people.append({
 *         list1: 'bob',
 *         list2: 123
 *     });
 *
 * @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [value] value An item to append to the list
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(function (list_name, value, callback) {
  if (_.isObject(list_name)) {
    callback = value;
  }

  var data = this.append_action(list_name, value);
  return this._send_request(data, callback);
});
/*
 * Remove a value from a list-valued people analytics property.
 *
 * ### Usage:
 *
 *     mixpanel.people.remove('School', 'UCB');
 *
 * @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [value] value Item to remove from the list
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(function (list_name, value, callback) {
  if (_.isObject(list_name)) {
    callback = value;
  }

  var data = this.remove_action(list_name, value);
  return this._send_request(data, callback);
});
/*
 * Merge a given list with a list-valued people analytics property,
 * excluding duplicate values.
 *
 * ### Usage:
 *
 *     // merge a value to a list, creating it if needed
 *     mixpanel.people.union('pages_visited', 'homepage');
 *
 *     // like mixpanel.people.set(), you can append multiple
 *     // properties at once:
 *     mixpanel.people.union({
 *         list1: 'bob',
 *         list2: 123
 *     });
 *
 *     // like mixpanel.people.append(), you can append multiple
 *     // values to the same list:
 *     mixpanel.people.union({
 *         list1: ['bob', 'billy']
 *     });
 *
 * @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [value] Value / values to merge with the given property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(function (list_name, values, callback) {
  if (_.isObject(list_name)) {
    callback = values;
  }

  var data = this.union_action(list_name, values);
  return this._send_request(data, callback);
});
/*
 * Record that you have charged the current user a certain amount
 * of money. Charges recorded with track_charge() will appear in the
 * Mixpanel revenue report.
 *
 * ### Usage:
 *
 *     // charge a user $50
 *     mixpanel.people.track_charge(50);
 *
 *     // charge a user $30.50 on the 2nd of january
 *     mixpanel.people.track_charge(30.50, {
 *         '$time': new Date('jan 1 2012')
 *     });
 *
 * @param {Number} amount The amount of money charged to the current user
 * @param {Object} [properties] An associative array of properties associated with the charge
 * @param {Function} [callback] If provided, the callback will be called when the server responds
 */

MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(function (amount, properties, callback) {
  if (!_.isNumber(amount)) {
    amount = parseFloat(amount);

    if (isNaN(amount)) {
      console$1.error('Invalid value passed to mixpanel.people.track_charge - must be a number');
      return;
    }
  }

  return this.append('$transactions', _.extend({
    '$amount': amount
  }, properties), callback);
});
/*
 * Permanently clear all revenue report transactions from the
 * current user's people analytics profile.
 *
 * ### Usage:
 *
 *     mixpanel.people.clear_charges();
 *
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */

MixpanelPeople.prototype.clear_charges = function (callback) {
  return this.set('$transactions', [], callback);
};
/*
 * Permanently deletes the current people analytics profile from
 * Mixpanel (using the current distinct_id).
 *
 * ### Usage:
 *
 *     // remove the all data you have stored about the current user
 *     mixpanel.people.delete_user();
 *
 */


MixpanelPeople.prototype.delete_user = function () {
  if (!this._identify_called()) {
    console$1.error('mixpanel.people.delete_user() requires you to call identify() first');
    return;
  }

  var data = {
    '$delete': this._mixpanel.get_distinct_id()
  };
  return this._send_request(data);
};

MixpanelPeople.prototype.toString = function () {
  return this._mixpanel.toString() + '.people';
};

MixpanelPeople.prototype._send_request = function (data, callback) {
  data['$token'] = this._get_config('token');
  data['$distinct_id'] = this._mixpanel.get_distinct_id();

  var device_id = this._mixpanel.get_property('$device_id');

  var user_id = this._mixpanel.get_property('$user_id');

  if (device_id) {
    data['$device_id'] = device_id;
  }

  if (user_id) {
    data['$user_id'] = user_id;
  }

  var date_encoded_data = _.encodeDates(data);

  var truncated_data = _.truncate(date_encoded_data, 255);

  var json_data = _.JSONEncode(date_encoded_data);

  var encoded_data = _.base64Encode(json_data);

  if (!this._identify_called()) {
    this._enqueue(data);

    if (!_.isUndefined(callback)) {
      if (this._get_config('verbose')) {
        callback({
          status: -1,
          error: null
        });
      } else {
        callback(-1);
      }
    }

    return truncated_data;
  }

  console$1.log('MIXPANEL PEOPLE REQUEST:');
  console$1.log(truncated_data);

  this._mixpanel._send_request(this._get_config('api_host') + '/engage/', {
    'data': encoded_data
  }, this._mixpanel._prepare_callback(callback, truncated_data));

  return truncated_data;
};

MixpanelPeople.prototype._get_config = function (conf_var) {
  return this._mixpanel.get_config(conf_var);
};

MixpanelPeople.prototype._identify_called = function () {
  return this._mixpanel._flags.identify_called === true;
}; // Queue up engage operations if identify hasn't been called yet.


MixpanelPeople.prototype._enqueue = function (data) {
  if (SET_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(SET_ACTION, data);
  } else if (SET_ONCE_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(SET_ONCE_ACTION, data);
  } else if (UNSET_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(UNSET_ACTION, data);
  } else if (ADD_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(ADD_ACTION, data);
  } else if (APPEND_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, data);
  } else if (REMOVE_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(REMOVE_ACTION, data);
  } else if (UNION_ACTION in data) {
    this._mixpanel['persistence']._add_to_people_queue(UNION_ACTION, data);
  } else {
    console$1.error('Invalid call to _enqueue():', data);
  }
};

MixpanelPeople.prototype._flush_one_queue = function (action, action_method, callback, queue_to_params_fn) {
  var _this = this;

  var queued_data = _.extend({}, this._mixpanel['persistence']._get_queue(action));

  var action_params = queued_data;

  if (!_.isUndefined(queued_data) && _.isObject(queued_data) && !_.isEmptyObject(queued_data)) {
    _this._mixpanel['persistence']._pop_from_people_queue(action, queued_data);

    if (queue_to_params_fn) {
      action_params = queue_to_params_fn(queued_data);
    }

    action_method.call(_this, action_params, function (response, data) {
      // on bad response, we want to add it back to the queue
      if (response === 0) {
        _this._mixpanel['persistence']._add_to_people_queue(action, queued_data);
      }

      if (!_.isUndefined(callback)) {
        callback(response, data);
      }
    });
  }
}; // Flush queued engage operations - order does not matter,
// and there are network level race conditions anyway


MixpanelPeople.prototype._flush = function (_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
  var _this = this;

  var $append_queue = this._mixpanel['persistence']._get_queue(APPEND_ACTION);

  var $remove_queue = this._mixpanel['persistence']._get_queue(REMOVE_ACTION);

  this._flush_one_queue(SET_ACTION, this.set, _set_callback);

  this._flush_one_queue(SET_ONCE_ACTION, this.set_once, _set_once_callback);

  this._flush_one_queue(UNSET_ACTION, this.unset, _unset_callback, function (queue) {
    return _.keys(queue);
  });

  this._flush_one_queue(ADD_ACTION, this.increment, _add_callback);

  this._flush_one_queue(UNION_ACTION, this.union, _union_callback); // we have to fire off each $append individually since there is
  // no concat method server side


  if (!_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
    var $append_item;

    var append_callback = function append_callback(response, data) {
      if (response === 0) {
        _this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, $append_item);
      }

      if (!_.isUndefined(_append_callback)) {
        _append_callback(response, data);
      }
    };

    for (var i = $append_queue.length - 1; i >= 0; i--) {
      $append_item = $append_queue.pop();

      if (!_.isEmptyObject($append_item)) {
        _this.append($append_item, append_callback);
      }
    } // Save the shortened append queue


    _this._mixpanel['persistence'].save();
  } // same for $remove


  if (!_.isUndefined($remove_queue) && _.isArray($remove_queue) && $remove_queue.length) {
    var $remove_item;

    var remove_callback = function remove_callback(response, data) {
      if (response === 0) {
        _this._mixpanel['persistence']._add_to_people_queue(REMOVE_ACTION, $remove_item);
      }

      if (!_.isUndefined(_remove_callback)) {
        _remove_callback(response, data);
      }
    };

    for (var j = $remove_queue.length - 1; j >= 0; j--) {
      $remove_item = $remove_queue.pop();

      if (!_.isEmptyObject($remove_item)) {
        _this.remove($remove_item, remove_callback);
      }
    }

    _this._mixpanel['persistence'].save();
  }
};

MixpanelPeople.prototype._is_reserved_property = function (prop) {
  return prop === '$distinct_id' || prop === '$token' || prop === '$device_id' || prop === '$user_id';
}; // Internal class for notification display


MixpanelLib._Notification = function (notif_data, mixpanel_instance) {
  _.bind_instance_methods(this);

  this.mixpanel = mixpanel_instance;
  this.persistence = this.mixpanel['persistence'];
  this.campaign_id = _.escapeHTML(notif_data['id']);
  this.message_id = _.escapeHTML(notif_data['message_id']);
  this.body = (_.escapeHTML(notif_data['body']) || '').replace(/\n/g, '<br/>');
  this.cta = _.escapeHTML(notif_data['cta']) || 'Close';
  this.notif_type = _.escapeHTML(notif_data['type']) || 'takeover';
  this.style = _.escapeHTML(notif_data['style']) || 'light';
  this.title = _.escapeHTML(notif_data['title']) || '';
  this.video_width = MPNotif.VIDEO_WIDTH;
  this.video_height = MPNotif.VIDEO_HEIGHT; // These fields are url-sanitized in the backend already.

  this.dest_url = notif_data['cta_url'] || null;
  this.image_url = notif_data['image_url'] || null;
  this.thumb_image_url = notif_data['thumb_image_url'] || null;
  this.video_url = notif_data['video_url'] || null;
  this.clickthrough = true;

  if (!this.dest_url) {
    this.dest_url = '#dismiss';
    this.clickthrough = false;
  }

  this.mini = this.notif_type === 'mini';

  if (!this.mini) {
    this.notif_type = 'takeover';
  }

  this.notif_width = !this.mini ? MPNotif.NOTIF_WIDTH : MPNotif.NOTIF_WIDTH_MINI;

  this._set_client_config();

  this.imgs_to_preload = this._init_image_html();

  this._init_video();
};

MPNotif = MixpanelLib._Notification;
MPNotif.ANIM_TIME = 200;
MPNotif.MARKUP_PREFIX = 'mixpanel-notification';
MPNotif.BG_OPACITY = 0.6;
MPNotif.NOTIF_TOP = 25;
MPNotif.NOTIF_START_TOP = 200;
MPNotif.NOTIF_WIDTH = 388;
MPNotif.NOTIF_WIDTH_MINI = 420;
MPNotif.NOTIF_HEIGHT_MINI = 85;
MPNotif.THUMB_BORDER_SIZE = 5;
MPNotif.THUMB_IMG_SIZE = 60;
MPNotif.THUMB_OFFSET = Math.round(MPNotif.THUMB_IMG_SIZE / 2);
MPNotif.VIDEO_WIDTH = 595;
MPNotif.VIDEO_HEIGHT = 334;

MPNotif.prototype.show = function () {
  var self = this;

  this._set_client_config(); // don't display until HTML body exists


  if (!this.body_el) {
    setTimeout(function () {
      self.show();
    }, 300);
    return;
  }

  this._init_styles();

  this._init_notification_el(); // wait for any images to load before showing notification


  this._preload_images(this._attach_and_animate);
};

MPNotif.prototype.dismiss = _.safewrap(function () {
  if (!this.marked_as_shown) {
    // unexpected condition: user interacted with notif even though we didn't consider it
    // visible (see _mark_as_shown()); send tracking signals to mark delivery
    this._mark_delivery({
      'invisible': true
    });
  }

  var exiting_el = this.showing_video ? this._get_el('video') : this._get_notification_display_el();

  if (this.use_transitions) {
    this._remove_class('bg', 'visible');

    this._add_class(exiting_el, 'exiting');

    setTimeout(this._remove_notification_el, MPNotif.ANIM_TIME);
  } else {
    var notif_attr, notif_start, notif_goal;

    if (this.mini) {
      notif_attr = 'right';
      notif_start = 20;
      notif_goal = -100;
    } else {
      notif_attr = 'top';
      notif_start = MPNotif.NOTIF_TOP;
      notif_goal = MPNotif.NOTIF_START_TOP + MPNotif.NOTIF_TOP;
    }

    this._animate_els([{
      el: this._get_el('bg'),
      attr: 'opacity',
      start: MPNotif.BG_OPACITY,
      goal: 0.0
    }, {
      el: exiting_el,
      attr: 'opacity',
      start: 1.0,
      goal: 0.0
    }, {
      el: exiting_el,
      attr: notif_attr,
      start: notif_start,
      goal: notif_goal
    }], MPNotif.ANIM_TIME, this._remove_notification_el);
  }
});
MPNotif.prototype._add_class = _.safewrap(function (el, class_name) {
  class_name = MPNotif.MARKUP_PREFIX + '-' + class_name;

  if (typeof el === 'string') {
    el = this._get_el(el);
  }

  if (!el.className) {
    el.className = class_name;
  } else if (!~(' ' + el.className + ' ').indexOf(' ' + class_name + ' ')) {
    el.className += ' ' + class_name;
  }
});
MPNotif.prototype._remove_class = _.safewrap(function (el, class_name) {
  class_name = MPNotif.MARKUP_PREFIX + '-' + class_name;

  if (typeof el === 'string') {
    el = this._get_el(el);
  }

  if (el.className) {
    el.className = (' ' + el.className + ' ').replace(' ' + class_name + ' ', '').replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
  }
});
MPNotif.prototype._animate_els = _.safewrap(function (anims, mss, done_cb, start_time) {
  var self = this,
      in_progress = false,
      ai,
      anim,
      cur_time = 1 * new Date(),
      time_diff;
  start_time = start_time || cur_time;
  time_diff = cur_time - start_time;

  for (ai = 0; ai < anims.length; ai++) {
    anim = anims[ai];

    if (typeof anim.val === 'undefined') {
      anim.val = anim.start;
    }

    if (anim.val !== anim.goal) {
      in_progress = true;
      var anim_diff = anim.goal - anim.start,
          anim_dir = anim.goal >= anim.start ? 1 : -1;
      anim.val = anim.start + anim_diff * time_diff / mss;

      if (anim.attr !== 'opacity') {
        anim.val = Math.round(anim.val);
      }

      if (anim_dir > 0 && anim.val >= anim.goal || anim_dir < 0 && anim.val <= anim.goal) {
        anim.val = anim.goal;
      }
    }
  }

  if (!in_progress) {
    if (done_cb) {
      done_cb();
    }

    return;
  }

  for (ai = 0; ai < anims.length; ai++) {
    anim = anims[ai];

    if (anim.el) {
      var suffix = anim.attr === 'opacity' ? '' : 'px';
      anim.el.style[anim.attr] = String(anim.val) + suffix;
    }
  }

  setTimeout(function () {
    self._animate_els(anims, mss, done_cb, start_time);
  }, 10);
});
MPNotif.prototype._attach_and_animate = _.safewrap(function () {
  var self = this; // no possibility to double-display

  if (this.shown || this._get_shown_campaigns()[this.campaign_id]) {
    return;
  }

  this.shown = true;
  this.body_el.appendChild(this.notification_el);
  setTimeout(function () {
    var notif_el = self._get_notification_display_el();

    if (self.use_transitions) {
      if (!self.mini) {
        self._add_class('bg', 'visible');
      }

      self._add_class(notif_el, 'visible');

      self._mark_as_shown();
    } else {
      var notif_attr, notif_start, notif_goal;

      if (self.mini) {
        notif_attr = 'right';
        notif_start = -100;
        notif_goal = 20;
      } else {
        notif_attr = 'top';
        notif_start = MPNotif.NOTIF_START_TOP + MPNotif.NOTIF_TOP;
        notif_goal = MPNotif.NOTIF_TOP;
      }

      self._animate_els([{
        el: self._get_el('bg'),
        attr: 'opacity',
        start: 0.0,
        goal: MPNotif.BG_OPACITY
      }, {
        el: notif_el,
        attr: 'opacity',
        start: 0.0,
        goal: 1.0
      }, {
        el: notif_el,
        attr: notif_attr,
        start: notif_start,
        goal: notif_goal
      }], MPNotif.ANIM_TIME, self._mark_as_shown);
    }
  }, 100);

  _.register_event(self._get_el('cancel'), 'click', function (e) {
    e.preventDefault();
    self.dismiss();
  });

  var click_el = self._get_el('button') || self._get_el('mini-content');

  _.register_event(click_el, 'click', function (e) {
    e.preventDefault();

    if (self.show_video) {
      self._track_event('$campaign_open', {
        '$resource_type': 'video'
      });

      self._switch_to_video();
    } else {
      self.dismiss();

      if (self.clickthrough) {
        self._track_event('$campaign_open', {
          '$resource_type': 'link'
        }, function () {
          window$1.location.href = self.dest_url;
        });
      }
    }
  });
});

MPNotif.prototype._get_el = function (id) {
  return document$1.getElementById(MPNotif.MARKUP_PREFIX + '-' + id);
};

MPNotif.prototype._get_notification_display_el = function () {
  return this._get_el(this.notif_type);
};

MPNotif.prototype._get_shown_campaigns = function () {
  return this.persistence['props'][CAMPAIGN_IDS_KEY] || (this.persistence['props'][CAMPAIGN_IDS_KEY] = {});
};

MPNotif.prototype._browser_lte = function (browser, version) {
  return this.browser_versions[browser] && this.browser_versions[browser] <= version;
};

MPNotif.prototype._init_image_html = function () {
  var imgs_to_preload = [];

  if (!this.mini) {
    if (this.image_url) {
      imgs_to_preload.push(this.image_url);
      this.img_html = '<img id="img" src="' + this.image_url + '"/>';
    } else {
      this.img_html = '';
    }

    if (this.thumb_image_url) {
      imgs_to_preload.push(this.thumb_image_url);
      this.thumb_img_html = '<div id="thumbborder-wrapper"><div id="thumbborder"></div></div>' + '<img id="thumbnail"' + ' src="' + this.thumb_image_url + '"' + ' width="' + MPNotif.THUMB_IMG_SIZE + '"' + ' height="' + MPNotif.THUMB_IMG_SIZE + '"' + '/>' + '<div id="thumbspacer"></div>';
    } else {
      this.thumb_img_html = '';
    }
  } else {
    this.thumb_image_url = this.thumb_image_url || '//cdn.mxpnl.com/site_media/images/icons/notifications/mini-news-dark.png';
    imgs_to_preload.push(this.thumb_image_url);
  }

  return imgs_to_preload;
};

MPNotif.prototype._init_notification_el = function () {
  var notification_html = '';
  var video_src = '';
  var video_html = '';
  var cancel_html = '<div id="cancel">' + '<div id="cancel-icon"></div>' + '</div>';
  this.notification_el = document$1.createElement('div');
  this.notification_el.id = MPNotif.MARKUP_PREFIX + '-wrapper';

  if (!this.mini) {
    // TAKEOVER notification
    var close_html = this.clickthrough || this.show_video ? '' : '<div id="button-close"></div>',
        play_html = this.show_video ? '<div id="button-play"></div>' : '';

    if (this._browser_lte('ie', 7)) {
      close_html = '';
      play_html = '';
    }

    notification_html = '<div id="takeover">' + this.thumb_img_html + '<div id="mainbox">' + cancel_html + '<div id="content">' + this.img_html + '<div id="title">' + this.title + '</div>' + '<div id="body">' + this.body + '</div>' + '<div id="tagline">' + '<a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a>' + '</div>' + '</div>' + '<div id="button">' + close_html + '<a id="button-link" href="' + this.dest_url + '">' + this.cta + '</a>' + play_html + '</div>' + '</div>' + '</div>';
  } else {
    // MINI notification
    notification_html = '<div id="mini">' + '<div id="mainbox">' + cancel_html + '<div id="mini-content">' + '<div id="mini-icon">' + '<div id="mini-icon-img"></div>' + '</div>' + '<div id="body">' + '<div id="body-text"><div>' + this.body + '</div></div>' + '</div>' + '</div>' + '</div>' + '<div id="mini-border"></div>' + '</div>';
  }

  if (this.youtube_video) {
    video_src = '//www.youtube.com/embed/' + this.youtube_video + '?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080';

    if (this.yt_custom) {
      video_src += '&enablejsapi=1&html5=1&controls=0';
      video_html = '<div id="video-controls">' + '<div id="video-progress" class="video-progress-el">' + '<div id="video-progress-total" class="video-progress-el"></div>' + '<div id="video-elapsed" class="video-progress-el"></div>' + '</div>' + '<div id="video-time" class="video-progress-el"></div>' + '</div>';
    }
  } else if (this.vimeo_video) {
    video_src = '//player.vimeo.com/video/' + this.vimeo_video + '?autoplay=1&title=0&byline=0&portrait=0';
  }

  if (this.show_video) {
    this.video_iframe = '<iframe id="' + MPNotif.MARKUP_PREFIX + '-video-frame" ' + 'width="' + this.video_width + '" height="' + this.video_height + '" ' + ' src="' + video_src + '"' + ' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"' + '></iframe>';
    video_html = '<div id="video-' + (this.flip_animate ? '' : 'no') + 'flip">' + '<div id="video">' + '<div id="video-holder"></div>' + video_html + '</div>' + '</div>';
  }

  var main_html = video_html + notification_html;

  if (this.flip_animate) {
    main_html = (this.mini ? notification_html : '') + '<div id="flipcontainer"><div id="flipper">' + (this.mini ? video_html : main_html) + '</div></div>';
  }

  this.notification_el.innerHTML = ('<div id="overlay" class="' + this.notif_type + '">' + '<div id="campaignid-' + this.campaign_id + '">' + '<div id="bgwrapper">' + '<div id="bg"></div>' + main_html + '</div>' + '</div>' + '</div>').replace(/class=\"/g, 'class="' + MPNotif.MARKUP_PREFIX + '-').replace(/id=\"/g, 'id="' + MPNotif.MARKUP_PREFIX + '-');
};

MPNotif.prototype._init_styles = function () {
  if (this.style === 'dark') {
    this.style_vals = {
      bg: '#1d1f25',
      bg_actions: '#282b32',
      bg_hover: '#3a4147',
      bg_light: '#4a5157',
      border_gray: '#32353c',
      cancel_opacity: '0.4',
      mini_hover: '#2a3137',
      text_title: '#fff',
      text_main: '#9498a3',
      text_tagline: '#464851',
      text_hover: '#ddd'
    };
  } else {
    this.style_vals = {
      bg: '#fff',
      bg_actions: '#e7eaee',
      bg_hover: '#eceff3',
      bg_light: '#f5f5f5',
      border_gray: '#e4ecf2',
      cancel_opacity: '1.0',
      mini_hover: '#fafafa',
      text_title: '#5c6578',
      text_main: '#8b949b',
      text_tagline: '#ced9e6',
      text_hover: '#7c8598'
    };
  }

  var shadow = '0px 0px 35px 0px rgba(45, 49, 56, 0.7)',
      video_shadow = shadow,
      mini_shadow = shadow,
      thumb_total_size = MPNotif.THUMB_IMG_SIZE + MPNotif.THUMB_BORDER_SIZE * 2,
      anim_seconds = MPNotif.ANIM_TIME / 1000 + 's';

  if (this.mini) {
    shadow = 'none';
  } // don't display on small viewports


  var notif_media_queries = {},
      min_width = MPNotif.NOTIF_WIDTH_MINI + 20;
  notif_media_queries['@media only screen and (max-width: ' + (min_width - 1) + 'px)'] = {
    '#overlay': {
      'display': 'none'
    }
  };
  var notif_styles = {
    '.flipped': {
      'transform': 'rotateY(180deg)'
    },
    '#overlay': {
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'overflow': 'auto',
      'text-align': 'center',
      'z-index': '10000',
      'font-family': '"Helvetica", "Arial", sans-serif',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    },
    '#overlay.mini': {
      'height': '0',
      'overflow': 'visible'
    },
    '#overlay a': {
      'width': 'initial',
      'padding': '0',
      'text-decoration': 'none',
      'text-transform': 'none',
      'color': 'inherit'
    },
    '#bgwrapper': {
      'position': 'relative',
      'width': '100%',
      'height': '100%'
    },
    '#bg': {
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'min-width': this.doc_width * 4 + 'px',
      'min-height': this.doc_height * 4 + 'px',
      'background-color': 'black',
      'opacity': '0.0',
      '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)',
      // IE8
      'filter': 'alpha(opacity=60)',
      // IE5-7
      'transition': 'opacity ' + anim_seconds
    },
    '#bg.visible': {
      'opacity': MPNotif.BG_OPACITY
    },
    '.mini #bg': {
      'width': '0',
      'height': '0',
      'min-width': '0'
    },
    '#flipcontainer': {
      'perspective': '1000px',
      'position': 'absolute',
      'width': '100%'
    },
    '#flipper': {
      'position': 'relative',
      'transform-style': 'preserve-3d',
      'transition': '0.3s'
    },
    '#takeover': {
      'position': 'absolute',
      'left': '50%',
      'width': MPNotif.NOTIF_WIDTH + 'px',
      'margin-left': Math.round(-MPNotif.NOTIF_WIDTH / 2) + 'px',
      'backface-visibility': 'hidden',
      'transform': 'rotateY(0deg)',
      'opacity': '0.0',
      'top': MPNotif.NOTIF_START_TOP + 'px',
      'transition': 'opacity ' + anim_seconds + ', top ' + anim_seconds
    },
    '#takeover.visible': {
      'opacity': '1.0',
      'top': MPNotif.NOTIF_TOP + 'px'
    },
    '#takeover.exiting': {
      'opacity': '0.0',
      'top': MPNotif.NOTIF_START_TOP + 'px'
    },
    '#thumbspacer': {
      'height': MPNotif.THUMB_OFFSET + 'px'
    },
    '#thumbborder-wrapper': {
      'position': 'absolute',
      'top': -MPNotif.THUMB_BORDER_SIZE + 'px',
      'left': MPNotif.NOTIF_WIDTH / 2 - MPNotif.THUMB_OFFSET - MPNotif.THUMB_BORDER_SIZE + 'px',
      'width': thumb_total_size + 'px',
      'height': thumb_total_size / 2 + 'px',
      'overflow': 'hidden'
    },
    '#thumbborder': {
      'position': 'absolute',
      'width': thumb_total_size + 'px',
      'height': thumb_total_size + 'px',
      'border-radius': thumb_total_size + 'px',
      'background-color': this.style_vals.bg_actions,
      'opacity': '0.5'
    },
    '#thumbnail': {
      'position': 'absolute',
      'top': '0px',
      'left': MPNotif.NOTIF_WIDTH / 2 - MPNotif.THUMB_OFFSET + 'px',
      'width': MPNotif.THUMB_IMG_SIZE + 'px',
      'height': MPNotif.THUMB_IMG_SIZE + 'px',
      'overflow': 'hidden',
      'z-index': '100',
      'border-radius': MPNotif.THUMB_IMG_SIZE + 'px'
    },
    '#mini': {
      'position': 'absolute',
      'right': '20px',
      'top': MPNotif.NOTIF_TOP + 'px',
      'width': this.notif_width + 'px',
      'height': MPNotif.NOTIF_HEIGHT_MINI * 2 + 'px',
      'margin-top': 20 - MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'backface-visibility': 'hidden',
      'opacity': '0.0',
      'transform': 'rotateX(90deg)',
      'transition': 'opacity 0.3s, transform 0.3s, right 0.3s'
    },
    '#mini.visible': {
      'opacity': '1.0',
      'transform': 'rotateX(0deg)'
    },
    '#mini.exiting': {
      'opacity': '0.0',
      'right': '-150px'
    },
    '#mainbox': {
      'border-radius': '4px',
      'box-shadow': shadow,
      'text-align': 'center',
      'background-color': this.style_vals.bg,
      'font-size': '14px',
      'color': this.style_vals.text_main
    },
    '#mini #mainbox': {
      'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'margin-top': MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'border-radius': '3px',
      'transition': 'background-color ' + anim_seconds
    },
    '#mini-border': {
      'height': MPNotif.NOTIF_HEIGHT_MINI + 6 + 'px',
      'width': MPNotif.NOTIF_WIDTH_MINI + 6 + 'px',
      'position': 'absolute',
      'top': '-3px',
      'left': '-3px',
      'margin-top': MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'border-radius': '6px',
      'opacity': '0.25',
      'background-color': '#fff',
      'z-index': '-1',
      'box-shadow': mini_shadow
    },
    '#mini-icon': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '75px',
      'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'border-radius': '3px 0 0 3px',
      'background-color': this.style_vals.bg_actions,
      'background': 'linear-gradient(135deg, ' + this.style_vals.bg_light + ' 0%, ' + this.style_vals.bg_actions + ' 100%)',
      'transition': 'background-color ' + anim_seconds
    },
    '#mini:hover #mini-icon': {
      'background-color': this.style_vals.mini_hover
    },
    '#mini:hover #mainbox': {
      'background-color': this.style_vals.mini_hover
    },
    '#mini-icon-img': {
      'position': 'absolute',
      'background-image': 'url(' + this.thumb_image_url + ')',
      'width': '48px',
      'height': '48px',
      'top': '20px',
      'left': '12px'
    },
    '#content': {
      'padding': '30px 20px 0px 20px'
    },
    '#mini-content': {
      'text-align': 'left',
      'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'cursor': 'pointer'
    },
    '#img': {
      'width': '328px',
      'margin-top': '30px',
      'border-radius': '5px'
    },
    '#title': {
      'max-height': '600px',
      'overflow': 'hidden',
      'word-wrap': 'break-word',
      'padding': '25px 0px 20px 0px',
      'font-size': '19px',
      'font-weight': 'bold',
      'color': this.style_vals.text_title
    },
    '#body': {
      'max-height': '600px',
      'margin-bottom': '25px',
      'overflow': 'hidden',
      'word-wrap': 'break-word',
      'line-height': '21px',
      'font-size': '15px',
      'font-weight': 'normal',
      'text-align': 'left'
    },
    '#mini #body': {
      'display': 'inline-block',
      'max-width': '250px',
      'margin': '0 0 0 30px',
      'height': MPNotif.NOTIF_HEIGHT_MINI + 'px',
      'font-size': '16px',
      'letter-spacing': '0.8px',
      'color': this.style_vals.text_title
    },
    '#mini #body-text': {
      'display': 'table',
      'height': MPNotif.NOTIF_HEIGHT_MINI + 'px'
    },
    '#mini #body-text div': {
      'display': 'table-cell',
      'vertical-align': 'middle'
    },
    '#tagline': {
      'margin-bottom': '15px',
      'font-size': '10px',
      'font-weight': '600',
      'letter-spacing': '0.8px',
      'color': '#ccd7e0',
      'text-align': 'left'
    },
    '#tagline a': {
      'color': this.style_vals.text_tagline,
      'transition': 'color ' + anim_seconds
    },
    '#tagline a:hover': {
      'color': this.style_vals.text_hover
    },
    '#cancel': {
      'position': 'absolute',
      'right': '0',
      'width': '8px',
      'height': '8px',
      'padding': '10px',
      'border-radius': '20px',
      'margin': '12px 12px 0 0',
      'box-sizing': 'content-box',
      'cursor': 'pointer',
      'transition': 'background-color ' + anim_seconds
    },
    '#mini #cancel': {
      'margin': '7px 7px 0 0'
    },
    '#cancel-icon': {
      'width': '8px',
      'height': '8px',
      'overflow': 'hidden',
      'background-image': 'url(//cdn.mxpnl.com/site_media/images/icons/notifications/cancel-x.png)',
      'opacity': this.style_vals.cancel_opacity
    },
    '#cancel:hover': {
      'background-color': this.style_vals.bg_hover
    },
    '#button': {
      'display': 'block',
      'height': '60px',
      'line-height': '60px',
      'text-align': 'center',
      'background-color': this.style_vals.bg_actions,
      'border-radius': '0 0 4px 4px',
      'overflow': 'hidden',
      'cursor': 'pointer',
      'transition': 'background-color ' + anim_seconds
    },
    '#button-close': {
      'display': 'inline-block',
      'width': '9px',
      'height': '60px',
      'margin-right': '8px',
      'vertical-align': 'top',
      'background-image': 'url(//cdn.mxpnl.com/site_media/images/icons/notifications/close-x-' + this.style + '.png)',
      'background-repeat': 'no-repeat',
      'background-position': '0px 25px'
    },
    '#button-play': {
      'display': 'inline-block',
      'width': '30px',
      'height': '60px',
      'margin-left': '15px',
      'background-image': 'url(//cdn.mxpnl.com/site_media/images/icons/notifications/play-' + this.style + '-small.png)',
      'background-repeat': 'no-repeat',
      'background-position': '0px 15px'
    },
    'a#button-link': {
      'display': 'inline-block',
      'vertical-align': 'top',
      'text-align': 'center',
      'font-size': '17px',
      'font-weight': 'bold',
      'overflow': 'hidden',
      'word-wrap': 'break-word',
      'color': this.style_vals.text_title,
      'transition': 'color ' + anim_seconds
    },
    '#button:hover': {
      'background-color': this.style_vals.bg_hover,
      'color': this.style_vals.text_hover
    },
    '#button:hover a': {
      'color': this.style_vals.text_hover
    },
    '#video-noflip': {
      'position': 'relative',
      'top': -this.video_height * 2 + 'px'
    },
    '#video-flip': {
      'backface-visibility': 'hidden',
      'transform': 'rotateY(180deg)'
    },
    '#video': {
      'position': 'absolute',
      'width': this.video_width - 1 + 'px',
      'height': this.video_height + 'px',
      'top': MPNotif.NOTIF_TOP + 'px',
      'margin-top': '100px',
      'left': '50%',
      'margin-left': Math.round(-this.video_width / 2) + 'px',
      'overflow': 'hidden',
      'border-radius': '5px',
      'box-shadow': video_shadow,
      'transform': 'translateZ(1px)',
      // webkit rendering bug http://stackoverflow.com/questions/18167981/clickable-link-area-unexpectedly-smaller-after-css-transform
      'transition': 'opacity ' + anim_seconds + ', top ' + anim_seconds
    },
    '#video.exiting': {
      'opacity': '0.0',
      'top': this.video_height + 'px'
    },
    '#video-holder': {
      'position': 'absolute',
      'width': this.video_width - 1 + 'px',
      'height': this.video_height + 'px',
      'overflow': 'hidden',
      'border-radius': '5px'
    },
    '#video-frame': {
      'margin-left': '-1px',
      'width': this.video_width + 'px'
    },
    '#video-controls': {
      'opacity': '0',
      'transition': 'opacity 0.5s'
    },
    '#video:hover #video-controls': {
      'opacity': '1.0'
    },
    '#video .video-progress-el': {
      'position': 'absolute',
      'bottom': '0',
      'height': '25px',
      'border-radius': '0 0 0 5px'
    },
    '#video-progress': {
      'width': '90%'
    },
    '#video-progress-total': {
      'width': '100%',
      'background-color': this.style_vals.bg,
      'opacity': '0.7'
    },
    '#video-elapsed': {
      'width': '0',
      'background-color': '#6cb6f5',
      'opacity': '0.9'
    },
    '#video #video-time': {
      'width': '10%',
      'right': '0',
      'font-size': '11px',
      'line-height': '25px',
      'color': this.style_vals.text_main,
      'background-color': '#666',
      'border-radius': '0 0 5px 0'
    }
  }; // IE hacks

  if (this._browser_lte('ie', 8)) {
    _.extend(notif_styles, {
      '* html #overlay': {
        'position': 'absolute'
      },
      '* html #bg': {
        'position': 'absolute'
      },
      'html, body': {
        'height': '100%'
      }
    });
  }

  if (this._browser_lte('ie', 7)) {
    _.extend(notif_styles, {
      '#mini #body': {
        'display': 'inline',
        'zoom': '1',
        'border': '1px solid ' + this.style_vals.bg_hover
      },
      '#mini #body-text': {
        'padding': '20px'
      },
      '#mini #mini-icon': {
        'display': 'none'
      }
    });
  } // add vendor-prefixed style rules


  var VENDOR_STYLES = ['backface-visibility', 'border-radius', 'box-shadow', 'opacity', 'perspective', 'transform', 'transform-style', 'transition'],
      VENDOR_PREFIXES = ['khtml', 'moz', 'ms', 'o', 'webkit'];

  for (var selector in notif_styles) {
    for (var si = 0; si < VENDOR_STYLES.length; si++) {
      var prop = VENDOR_STYLES[si];

      if (prop in notif_styles[selector]) {
        var val = notif_styles[selector][prop];

        for (var pi = 0; pi < VENDOR_PREFIXES.length; pi++) {
          notif_styles[selector]['-' + VENDOR_PREFIXES[pi] + '-' + prop] = val;
        }
      }
    }
  }

  var inject_styles = function inject_styles(styles, media_queries) {
    var create_style_text = function create_style_text(style_defs) {
      var st = '';

      for (var selector in style_defs) {
        var mp_selector = selector.replace(/#/g, '#' + MPNotif.MARKUP_PREFIX + '-').replace(/\./g, '.' + MPNotif.MARKUP_PREFIX + '-');
        st += '\n' + mp_selector + ' {';
        var props = style_defs[selector];

        for (var k in props) {
          st += k + ':' + props[k] + ';';
        }

        st += '}';
      }

      return st;
    };

    var create_media_query_text = function create_media_query_text(mq_defs) {
      var mqt = '';

      for (var mq in mq_defs) {
        mqt += '\n' + mq + ' {' + create_style_text(mq_defs[mq]) + '\n}';
      }

      return mqt;
    };

    var style_text = create_style_text(styles) + create_media_query_text(media_queries),
        head_el = document$1.head || document$1.getElementsByTagName('head')[0] || document$1.documentElement,
        style_el = document$1.createElement('style');
    head_el.appendChild(style_el);
    style_el.setAttribute('type', 'text/css');

    if (style_el.styleSheet) {
      // IE
      style_el.styleSheet.cssText = style_text;
    } else {
      style_el.textContent = style_text;
    }
  };

  inject_styles(notif_styles, notif_media_queries);
};

MPNotif.prototype._init_video = _.safewrap(function () {
  if (!this.video_url) {
    return;
  }

  var self = this; // Youtube iframe API compatibility

  self.yt_custom = 'postMessage' in window$1;
  self.dest_url = self.video_url;
  var youtube_match = self.video_url.match( // http://stackoverflow.com/questions/2936467/parse-youtube-video-id-using-preg-match
  /(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),
      vimeo_match = self.video_url.match(/vimeo\.com\/.*?(\d+)/i);

  if (youtube_match) {
    self.show_video = true;
    self.youtube_video = youtube_match[1];

    if (self.yt_custom) {
      window$1['onYouTubeIframeAPIReady'] = function () {
        if (self._get_el('video-frame')) {
          self._yt_video_ready();
        }
      }; // load Youtube iframe API; see https://developers.google.com/youtube/iframe_api_reference


      var tag = document$1.createElement('script');
      tag.src = '//www.youtube.com/iframe_api';
      var firstScriptTag = document$1.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  } else if (vimeo_match) {
    self.show_video = true;
    self.vimeo_video = vimeo_match[1];
  } // IE <= 7, FF <= 3: fall through to video link rather than embedded player


  if (self._browser_lte('ie', 7) || self._browser_lte('firefox', 3)) {
    self.show_video = false;
    self.clickthrough = true;
  }
});
MPNotif.prototype._mark_as_shown = _.safewrap(function () {
  // click on background to dismiss
  var self = this;

  _.register_event(self._get_el('bg'), 'click', function () {
    self.dismiss();
  });

  var get_style = function get_style(el, style_name) {
    var styles = {};

    if (document$1.defaultView && document$1.defaultView.getComputedStyle) {
      styles = document$1.defaultView.getComputedStyle(el, null); // FF3 requires both args
    } else if (el.currentStyle) {
      // IE
      styles = el.currentStyle;
    }

    return styles[style_name];
  };

  if (this.campaign_id) {
    var notif_el = this._get_el('overlay');

    if (notif_el && get_style(notif_el, 'visibility') !== 'hidden' && get_style(notif_el, 'display') !== 'none') {
      this._mark_delivery();
    }
  }
});
MPNotif.prototype._mark_delivery = _.safewrap(function (extra_props) {
  if (!this.marked_as_shown) {
    this.marked_as_shown = true;

    if (this.campaign_id) {
      // mark notification shown (local cache)
      this._get_shown_campaigns()[this.campaign_id] = 1 * new Date();
      this.persistence.save();
    } // track delivery


    this._track_event('$campaign_delivery', extra_props); // mark notification shown (mixpanel property)


    this.mixpanel['people']['append']({
      '$campaigns': this.campaign_id,
      '$notifications': {
        'campaign_id': this.campaign_id,
        'message_id': this.message_id,
        'type': 'web',
        'time': new Date()
      }
    });
  }
});

MPNotif.prototype._preload_images = function (all_loaded_cb) {
  var self = this;

  if (this.imgs_to_preload.length === 0) {
    all_loaded_cb();
    return;
  }

  var preloaded_imgs = 0;
  var img_objs = [];

  var onload = function onload() {
    preloaded_imgs++;

    if (preloaded_imgs === self.imgs_to_preload.length && all_loaded_cb) {
      all_loaded_cb();
      all_loaded_cb = null;
    }
  };

  for (var i = 0; i < this.imgs_to_preload.length; i++) {
    var img = new Image();
    img.onload = onload;
    img.src = this.imgs_to_preload[i];

    if (img.complete) {
      onload();
    }

    img_objs.push(img);
  } // IE6/7 doesn't fire onload reliably


  if (this._browser_lte('ie', 7)) {
    setTimeout(function () {
      var imgs_loaded = true;

      for (i = 0; i < img_objs.length; i++) {
        if (!img_objs[i].complete) {
          imgs_loaded = false;
        }
      }

      if (imgs_loaded && all_loaded_cb) {
        all_loaded_cb();
        all_loaded_cb = null;
      }
    }, 500);
  }
};

MPNotif.prototype._remove_notification_el = _.safewrap(function () {
  window$1.clearInterval(this._video_progress_checker);
  this.notification_el.style.visibility = 'hidden';
  this.body_el.removeChild(this.notification_el);
});

MPNotif.prototype._set_client_config = function () {
  var get_browser_version = function get_browser_version(browser_ex) {
    var match = navigator.userAgent.match(browser_ex);
    return match && match[1];
  };

  this.browser_versions = {};
  this.browser_versions['chrome'] = get_browser_version(/Chrome\/(\d+)/);
  this.browser_versions['firefox'] = get_browser_version(/Firefox\/(\d+)/);
  this.browser_versions['ie'] = get_browser_version(/MSIE (\d+).+/);

  if (!this.browser_versions['ie'] && !window$1.ActiveXObject && 'ActiveXObject' in window$1) {
    this.browser_versions['ie'] = 11;
  }

  this.body_el = document$1.body || document$1.getElementsByTagName('body')[0];

  if (this.body_el) {
    this.doc_width = Math.max(this.body_el.scrollWidth, document$1.documentElement.scrollWidth, this.body_el.offsetWidth, document$1.documentElement.offsetWidth, this.body_el.clientWidth, document$1.documentElement.clientWidth);
    this.doc_height = Math.max(this.body_el.scrollHeight, document$1.documentElement.scrollHeight, this.body_el.offsetHeight, document$1.documentElement.offsetHeight, this.body_el.clientHeight, document$1.documentElement.clientHeight);
  } // detect CSS compatibility


  var ie_ver = this.browser_versions['ie'];

  var sample_styles = document$1.createElement('div').style,
      is_css_compatible = function is_css_compatible(rule) {
    if (rule in sample_styles) {
      return true;
    }

    if (!ie_ver) {
      rule = rule[0].toUpperCase() + rule.slice(1);
      var props = ['O' + rule, 'Webkit' + rule, 'Moz' + rule];

      for (var i = 0; i < props.length; i++) {
        if (props[i] in sample_styles) {
          return true;
        }
      }
    }

    return false;
  };

  this.use_transitions = this.body_el && is_css_compatible('transition') && is_css_compatible('transform');
  this.flip_animate = (this.browser_versions['chrome'] >= 33 || this.browser_versions['firefox'] >= 15) && this.body_el && is_css_compatible('backfaceVisibility') && is_css_compatible('perspective') && is_css_compatible('transform');
};

MPNotif.prototype._switch_to_video = _.safewrap(function () {
  var self = this,
      anims = [{
    el: self._get_notification_display_el(),
    attr: 'opacity',
    start: 1.0,
    goal: 0.0
  }, {
    el: self._get_notification_display_el(),
    attr: 'top',
    start: MPNotif.NOTIF_TOP,
    goal: -500
  }, {
    el: self._get_el('video-noflip'),
    attr: 'opacity',
    start: 0.0,
    goal: 1.0
  }, {
    el: self._get_el('video-noflip'),
    attr: 'top',
    start: -self.video_height * 2,
    goal: 0
  }];

  if (self.mini) {
    var bg = self._get_el('bg'),
        overlay = self._get_el('overlay');

    bg.style.width = '100%';
    bg.style.height = '100%';
    overlay.style.width = '100%';

    self._add_class(self._get_notification_display_el(), 'exiting');

    self._add_class(bg, 'visible');

    anims.push({
      el: self._get_el('bg'),
      attr: 'opacity',
      start: 0.0,
      goal: MPNotif.BG_OPACITY
    });
  }

  var video_el = self._get_el('video-holder');

  video_el.innerHTML = self.video_iframe;

  var video_ready = function video_ready() {
    if (window$1['YT'] && window$1['YT']['loaded']) {
      self._yt_video_ready();
    }

    self.showing_video = true;
    self._get_notification_display_el().style.visibility = 'hidden';
  };

  if (self.flip_animate) {
    self._add_class('flipper', 'flipped');

    setTimeout(video_ready, MPNotif.ANIM_TIME);
  } else {
    self._animate_els(anims, MPNotif.ANIM_TIME, video_ready);
  }
});

MPNotif.prototype._track_event = function (event_name, properties, cb) {
  if (this.campaign_id) {
    properties = properties || {};
    properties = _.extend(properties, {
      'campaign_id': this.campaign_id,
      'message_id': this.message_id,
      'message_type': 'web_inapp',
      'message_subtype': this.notif_type
    });
    this.mixpanel['track'](event_name, properties, cb);
  } else if (cb) {
    cb.call();
  }
};

MPNotif.prototype._yt_video_ready = _.safewrap(function () {
  var self = this;

  if (self.video_inited) {
    return;
  }

  self.video_inited = true;

  var progress_bar = self._get_el('video-elapsed'),
      progress_time = self._get_el('video-time'),
      progress_el = self._get_el('video-progress');

  new window$1['YT']['Player'](MPNotif.MARKUP_PREFIX + '-video-frame', {
    'events': {
      'onReady': function onReady(event) {
        var ytplayer = event['target'],
            video_duration = ytplayer['getDuration'](),
            pad = function pad(i) {
          return ('00' + i).slice(-2);
        },
            update_video_time = function update_video_time(current_time) {
          var secs = Math.round(video_duration - current_time),
              mins = Math.floor(secs / 60),
              hours = Math.floor(mins / 60);
          secs -= mins * 60;
          mins -= hours * 60;
          progress_time.innerHTML = '-' + (hours ? hours + ':' : '') + pad(mins) + ':' + pad(secs);
        };

        update_video_time(0);
        self._video_progress_checker = window$1.setInterval(function () {
          var current_time = ytplayer['getCurrentTime']();
          progress_bar.style.width = current_time / video_duration * 100 + '%';
          update_video_time(current_time);
        }, 250);

        _.register_event(progress_el, 'click', function (e) {
          var clickx = Math.max(0, e.pageX - progress_el.getBoundingClientRect().left);
          ytplayer['seekTo'](video_duration * clickx / progress_el.clientWidth, true);
        });
      }
    }
  });
}); // EXPORTS (for closure compiler)
// MixpanelLib Exports

MixpanelLib.prototype['init'] = MixpanelLib.prototype.init;
MixpanelLib.prototype['reset'] = MixpanelLib.prototype.reset;
MixpanelLib.prototype['disable'] = MixpanelLib.prototype.disable;
MixpanelLib.prototype['time_event'] = MixpanelLib.prototype.time_event;
MixpanelLib.prototype['track'] = MixpanelLib.prototype.track;
MixpanelLib.prototype['track_links'] = MixpanelLib.prototype.track_links;
MixpanelLib.prototype['track_forms'] = MixpanelLib.prototype.track_forms;
MixpanelLib.prototype['track_pageview'] = MixpanelLib.prototype.track_pageview;
MixpanelLib.prototype['register'] = MixpanelLib.prototype.register;
MixpanelLib.prototype['register_once'] = MixpanelLib.prototype.register_once;
MixpanelLib.prototype['unregister'] = MixpanelLib.prototype.unregister;
MixpanelLib.prototype['identify'] = MixpanelLib.prototype.identify;
MixpanelLib.prototype['alias'] = MixpanelLib.prototype.alias;
MixpanelLib.prototype['name_tag'] = MixpanelLib.prototype.name_tag;
MixpanelLib.prototype['set_config'] = MixpanelLib.prototype.set_config;
MixpanelLib.prototype['get_config'] = MixpanelLib.prototype.get_config;
MixpanelLib.prototype['get_property'] = MixpanelLib.prototype.get_property;
MixpanelLib.prototype['get_distinct_id'] = MixpanelLib.prototype.get_distinct_id;
MixpanelLib.prototype['toString'] = MixpanelLib.prototype.toString;
MixpanelLib.prototype['_check_and_handle_notifications'] = MixpanelLib.prototype._check_and_handle_notifications;
MixpanelLib.prototype['_show_notification'] = MixpanelLib.prototype._show_notification;
MixpanelLib.prototype['opt_out_tracking'] = MixpanelLib.prototype.opt_out_tracking;
MixpanelLib.prototype['opt_in_tracking'] = MixpanelLib.prototype.opt_in_tracking;
MixpanelLib.prototype['has_opted_out_tracking'] = MixpanelLib.prototype.has_opted_out_tracking;
MixpanelLib.prototype['has_opted_in_tracking'] = MixpanelLib.prototype.has_opted_in_tracking;
MixpanelLib.prototype['clear_opt_in_out_tracking'] = MixpanelLib.prototype.clear_opt_in_out_tracking;
MixpanelLib.prototype['get_group'] = MixpanelLib.prototype.get_group;
MixpanelLib.prototype['set_group'] = MixpanelLib.prototype.set_group;
MixpanelLib.prototype['add_group'] = MixpanelLib.prototype.add_group;
MixpanelLib.prototype['remove_group'] = MixpanelLib.prototype.remove_group;
MixpanelLib.prototype['track_with_groups'] = MixpanelLib.prototype.track_with_groups; // MixpanelPersistence Exports

MixpanelPersistence.prototype['properties'] = MixpanelPersistence.prototype.properties;
MixpanelPersistence.prototype['update_search_keyword'] = MixpanelPersistence.prototype.update_search_keyword;
MixpanelPersistence.prototype['update_referrer_info'] = MixpanelPersistence.prototype.update_referrer_info;
MixpanelPersistence.prototype['get_cross_subdomain'] = MixpanelPersistence.prototype.get_cross_subdomain;
MixpanelPersistence.prototype['clear'] = MixpanelPersistence.prototype.clear; // MixpanelPeople Exports

MixpanelPeople.prototype['set'] = MixpanelPeople.prototype.set;
MixpanelPeople.prototype['set_once'] = MixpanelPeople.prototype.set_once;
MixpanelPeople.prototype['unset'] = MixpanelPeople.prototype.unset;
MixpanelPeople.prototype['increment'] = MixpanelPeople.prototype.increment;
MixpanelPeople.prototype['append'] = MixpanelPeople.prototype.append;
MixpanelPeople.prototype['remove'] = MixpanelPeople.prototype.remove;
MixpanelPeople.prototype['union'] = MixpanelPeople.prototype.union;
MixpanelPeople.prototype['track_charge'] = MixpanelPeople.prototype.track_charge;
MixpanelPeople.prototype['clear_charges'] = MixpanelPeople.prototype.clear_charges;
MixpanelPeople.prototype['delete_user'] = MixpanelPeople.prototype.delete_user;
MixpanelPeople.prototype['toString'] = MixpanelPeople.prototype.toString;

_.safewrap_class(MixpanelLib, ['identify', '_check_and_handle_notifications', '_show_notification']);

var instances = {};

var extend_mp = function extend_mp() {
  // add all the sub mixpanel instances
  _.each(instances, function (instance, name) {
    if (name !== PRIMARY_INSTANCE_NAME) {
      mixpanel_master[name] = instance;
    }
  }); // add private functions as _


  mixpanel_master['_'] = _;
};

var override_mp_init_func = function override_mp_init_func() {
  // we override the snippets init function to handle the case where a
  // user initializes the mixpanel library after the script loads & runs
  mixpanel_master['init'] = function (token, config, name) {
    if (name) {
      // initialize a sub library
      if (!mixpanel_master[name]) {
        mixpanel_master[name] = instances[name] = create_mplib(token, config, name);

        mixpanel_master[name]._loaded();
      }

      return mixpanel_master[name];
    } else {
      var instance = mixpanel_master;

      if (instances[PRIMARY_INSTANCE_NAME]) {
        // main mixpanel lib already initialized
        instance = instances[PRIMARY_INSTANCE_NAME];
      } else if (token) {
        // intialize the main mixpanel lib
        instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);

        instance._loaded();

        instances[PRIMARY_INSTANCE_NAME] = instance;
      }

      mixpanel_master = instance;

      if (init_type === INIT_SNIPPET) {
        window$1[PRIMARY_INSTANCE_NAME] = mixpanel_master;
      }

      extend_mp();
    }
  };
};

var add_dom_loaded_handler = function add_dom_loaded_handler() {
  // Cross browser DOM Loaded support
  function dom_loaded_handler() {
    // function flag since we only want to execute this once
    if (dom_loaded_handler.done) {
      return;
    }

    dom_loaded_handler.done = true;
    DOM_LOADED = true;
    ENQUEUE_REQUESTS = false;

    _.each(instances, function (inst) {
      inst._dom_loaded();
    });
  }

  function do_scroll_check() {
    try {
      document$1.documentElement.doScroll('left');
    } catch (e) {
      setTimeout(do_scroll_check, 1);
      return;
    }

    dom_loaded_handler();
  }

  if (document$1.addEventListener) {
    if (document$1.readyState === 'complete') {
      // safari 4 can fire the DOMContentLoaded event before loading all
      // external JS (including this file). you will see some copypasta
      // on the internet that checks for 'complete' and 'loaded', but
      // 'loaded' is an IE thing
      dom_loaded_handler();
    } else {
      document$1.addEventListener('DOMContentLoaded', dom_loaded_handler, false);
    }
  } else if (document$1.attachEvent) {
    // IE
    document$1.attachEvent('onreadystatechange', dom_loaded_handler); // check to make sure we arn't in a frame

    var toplevel = false;

    try {
      toplevel = window$1.frameElement === null;
    } catch (e) {// noop
    }

    if (document$1.documentElement.doScroll && toplevel) {
      do_scroll_check();
    }
  } // fallback handler, always will work


  _.register_event(window$1, 'load', dom_loaded_handler, true);
};

function init_as_module() {
  init_type = INIT_MODULE;
  mixpanel_master = new MixpanelLib();
  override_mp_init_func();
  mixpanel_master['init']();
  add_dom_loaded_handler();
  return mixpanel_master;
}

var mixpanel = init_as_module();
module.exports = mixpanel;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _createRule = __webpack_require__(42);

var _createRule2 = _interopRequireDefault(_createRule);

var _linkRule = __webpack_require__(71);

var _linkRule2 = _interopRequireDefault(_linkRule);

var _StyleRule = __webpack_require__(25);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _escape = __webpack_require__(108);

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */


var RuleList = function () {
  // Original styles object.
  function RuleList(options) {
    var _this = this;

    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.update = function (name, data) {
      var _options = _this.options,
          plugins = _options.jss.plugins,
          sheet = _options.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, _this.get(name), sheet);
      } else {
        for (var index = 0; index < _this.index.length; index++) {
          plugins.onUpdate(name, _this.index[index], sheet);
        }
      }
    };

    this.options = options;
    this.classes = options.classes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */
  // Used to ensure correct rules order.
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options2 = this.options,
          parent = _options2.parent,
          sheet = _options2.sheet,
          jss = _options2.jss,
          Renderer = _options2.Renderer,
          generateClassName = _options2.generateClassName;
      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;
      var rule = (0, _createRule2['default'])(name, decl, options);
      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }
    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;

      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }
    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }
    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'link',

    /**
     * Link renderable rules with CSSRuleList.
     */
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];

        var _key = this.options.sheet.renderer.getKey(cssRule);

        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }
    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export snoozeTab */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return snoozeActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return repeatLastSnooze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resnoozePeriodicTab; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _wakeup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _license__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);
function snoozeTab(_x,_x2){return _snoozeTab.apply(this,arguments);}function _snoozeTab(){_snoozeTab=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tab,config){var wakeupTime,period,type,_config$closeTab,closeTab,nextOccurrenceDate,snoozedTab,snoozedTabs,_ref,totalSnoozeCount;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:wakeupTime=config.wakeupTime,period=config.period,type=config.type,_config$closeTab=config.closeTab,closeTab=_config$closeTab===void 0?true:_config$closeTab;if(period){nextOccurrenceDate=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* calcNextOccurrenceForPeriod */ "e"])(period);wakeupTime=nextOccurrenceDate.getTime();}if(wakeupTime){_context.next=4;break;}throw new Error('No wakeup date and no period given');case 4:// Uncomment for debugging only:
// wakeupTime = Date.now() + 1000 * 10;
console.log('Snoozing tab until '+new Date(wakeupTime).toString());// The info to store about this tab
snoozedTab={url:tab.url,title:tab.title,favicon:tab.favIconUrl,type:type,sleepStart:Date.now(),period:period,when:wakeupTime// convert to number since storage can't handle Date
};// Store & persist snoozed tab for later
_context.next=8;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 8:snoozedTabs=_context.sent;snoozedTabs.push(snoozedTab);_context.next=12;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* saveSnoozedTabs */ "b"])(snoozedTabs);case 12:_context.next=14;return Object(_wakeup__WEBPACK_IMPORTED_MODULE_6__[/* scheduleWakeupAlarm */ "c"])('auto');case 14:// usage tracking
Object(_analytics__WEBPACK_IMPORTED_MODULE_4__[/* trackTabSnooze */ "d"])(snoozedTab);_context.next=17;return Object(_settings__WEBPACK_IMPORTED_MODULE_5__[/* getSettings */ "b"])();case 17:_ref=_context.sent;totalSnoozeCount=_ref.totalSnoozeCount;totalSnoozeCount++;_context.next=22;return Object(_settings__WEBPACK_IMPORTED_MODULE_5__[/* saveSettings */ "c"])({totalSnoozeCount:totalSnoozeCount});case 22:_context.next=24;return Object(_license__WEBPACK_IMPORTED_MODULE_8__[/* incrementWeeklyUsage */ "b"])();case 24:// open share / rate dialog
if(totalSnoozeCount===1){Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* createCenteredWindow */ "g"])(_paths__WEBPACK_IMPORTED_MODULE_7__[/* FIRST_SNOOZE_PATH */ "i"],830,485);}if(totalSnoozeCount===10){Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* createCenteredWindow */ "g"])(_paths__WEBPACK_IMPORTED_MODULE_7__[/* RATE_TS_PATH */ "o"],500,540);}// ORDER MATTERS!  Closing a tab will close the snooze popup, and might terminate
// the flow of this code before finish. so close tab at the end.
if(closeTab){chrome.tabs.remove(tab.id);}// Add tab to history
//   addTabToHistory(snoozedTabInfo, onAddedToHistory);
case 27:case"end":return _context.stop();}}},_callee,this);}));return _snoozeTab.apply(this,arguments);}function snoozeActiveTab(_x3){return _snoozeActiveTab.apply(this,arguments);}function _snoozeActiveTab(){_snoozeActiveTab=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(config){var activeTab;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getActiveTab */ "j"])();case 2:activeTab=_context2.sent;return _context2.abrupt("return",snoozeTab(activeTab,config));case 4:case"end":return _context2.stop();}}},_callee2,this);}));return _snoozeActiveTab.apply(this,arguments);}function repeatLastSnooze(){return _repeatLastSnooze.apply(this,arguments);}function _repeatLastSnooze(){_repeatLastSnooze=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(){var snoozedTabs,lastSnooze;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 2:snoozedTabs=_context3.sent;lastSnooze=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getRecentlySnoozedTab */ "l"])(snoozedTabs);// ignore "Repeat snooze" if no last snooze,
// or last snooze was more than 10 minutes ago
if(!(!lastSnooze||Date.now()-lastSnooze.sleepStart>1000*60*10)){_context3.next=6;break;}return _context3.abrupt("return");case 6:Object(_analytics__WEBPACK_IMPORTED_MODULE_4__[/* track */ "c"])(_analytics__WEBPACK_IMPORTED_MODULE_4__[/* EVENTS */ "a"].REPEAT_SNOOZE);return _context3.abrupt("return",snoozeActiveTab({wakeupTime:lastSnooze.period?undefined:lastSnooze.when,period:lastSnooze.period,type:lastSnooze.type}));case 8:case"end":return _context3.stop();}}},_callee3,this);}));return _repeatLastSnooze.apply(this,arguments);}function resnoozePeriodicTab(_x4){return _resnoozePeriodicTab.apply(this,arguments);}function _resnoozePeriodicTab(){_resnoozePeriodicTab=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(snoozedTab){var newWakeupDate,snoozedTabs;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(snoozedTab.period){_context4.next=2;break;}throw new Error('resnoozePeriodicTab received a tab without a period');case 2:// Update sleep end for the next date
newWakeupDate=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* calcNextOccurrenceForPeriod */ "e"])(snoozedTab.period);console.log('Re-snoozing tab until '+newWakeupDate.toString());snoozedTab.when=newWakeupDate.getTime();// Store & persist snoozed tab info for later
// Add our new tab
_context4.next=7;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 7:snoozedTabs=_context4.sent;snoozedTabs.push(snoozedTab);_context4.next=11;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* saveSnoozedTabs */ "b"])(snoozedTabs);case 11:_context4.next=13;return Object(_wakeup__WEBPACK_IMPORTED_MODULE_6__[/* scheduleWakeupAlarm */ "c"])('auto');case 13:case"end":return _context4.stop();}}},_callee4,this);}));return _resnoozePeriodicTab.apply(this,arguments);}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BADGE_HIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BADGE_DUE_TODAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BADGE_TOTAL_SNOOZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateBadge; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var BADGE_HIDDEN='hidden';var BADGE_DUE_TODAY='due_today';var BADGE_TOTAL_SNOOZED='total_snoozed';function registerEventListeners(){// Update badge (visible/hidden + count) on any storage change (tabs snoozed/awoken)
chrome.storage.onChanged.addListener(updateBadge);// in case badge is BADGE_DUE_TODAY, make sure to update the badge
// from time to time when days pass, but storage does not change
chrome.idle.onStateChanged.addListener(updateBadge);}/*
    Update the Browser Action button badge count of snoozed tabs
*/function updateBadge(){return _updateBadge.apply(this,arguments);}function _updateBadge(){_updateBadge=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){var snoozedTabs,_ref,badge,snoozedCount;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(_storage__WEBPACK_IMPORTED_MODULE_2__[/* getSnoozedTabs */ "a"])();case 2:snoozedTabs=_context.sent;_context.next=5;return Object(_settings__WEBPACK_IMPORTED_MODULE_4__[/* getSettings */ "b"])();case 5:_ref=_context.sent;badge=_ref.badge;if(badge===BADGE_HIDDEN){snoozedCount='';}else if(badge===BADGE_DUE_TODAY){snoozedCount=snoozedTabs.filter(function(tab){return moment__WEBPACK_IMPORTED_MODULE_5___default()(tab.when)<moment__WEBPACK_IMPORTED_MODULE_5___default()().endOf('day');}).length;}else{snoozedCount=snoozedTabs.length;}// if count is 0, show no badge
if(snoozedCount===0){snoozedCount='';}chrome.action.setBadgeBackgroundColor({color:_theme__WEBPACK_IMPORTED_MODULE_3__[/* styledComponentsTheme */ "b"].primary});chrome.action.setBadgeText({text:''+snoozedCount});case 11:case"end":return _context.stop();}}},_callee,this);}));return _updateBadge.apply(this,arguments);}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOUND_SNOOZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SOUND_WAKEUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return playAudio; });
// import bugsnag from '../bugsnag';
// export const SOUND_TAB_SNOOZE1 = 'sounds/snooze1.mp3';
// export const SOUND_TAB_SNOOZE2 = 'sounds/snooze2.mp3';
// export const SOUND_TAB_SNOOZE3 = 'sounds/snooze3.mp3';
var SOUND_SNOOZE='sounds/snooze.m4a';var SOUND_WAKEUP='sounds/wakeup_notification.mp3';function loadAudio(sound){var audio=new window.Audio();audio.src=sound;audio.preload='auto';// lower volume to we don't annoy user
audio.volume=0.5;return audio;}function playAudio(sound){try{loadAudio(sound).play();}catch(err){console.error('Error playing snooze sound:',err);// bugsnag.notify(err);
}}

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FREE_WEEKLY_SNOOZE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isProUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isInPaywallTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return incrementWeeklyUsage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isOverFreeWeeklyQuota; });
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
// export const IS_PRO_PRODUCT_VISIBLE = true;
var FREE_WEEKLY_SNOOZE_COUNT=20;function isProUser(){return _isProUser.apply(this,arguments);}// async function isInProProductTest(
//   installDate: number
// ): Promise<boolean> {
//   return true;
// }
function _isProUser(){_isProUser=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",true);case 1:case"end":return _context.stop();}}},_callee,this);}));return _isProUser.apply(this,arguments);}function isInPaywallTest(){return _isInPaywallTest.apply(this,arguments);}function _isInPaywallTest(){_isInPaywallTest=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(){return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",false);case 1:case"end":return _context2.stop();}}},_callee2,this);}));return _isInPaywallTest.apply(this,arguments);}function incrementWeeklyUsage(){return _incrementWeeklyUsage.apply(this,arguments);}function _incrementWeeklyUsage(){_incrementWeeklyUsage=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(){var _ref,weeklyUsage,weeklyUsageCount;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return Object(_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSettings */ "b"])();case 2:_ref=_context3.sent;weeklyUsage=_ref.weeklyUsage;weeklyUsageCount=weeklyUsage.usageCount;if(weeklyUsage.weekNumber!==moment__WEBPACK_IMPORTED_MODULE_3___default()().week()){weeklyUsageCount=0;}weeklyUsageCount++;return _context3.abrupt("return",Object(_settings__WEBPACK_IMPORTED_MODULE_2__[/* saveSettings */ "c"])({weeklyUsage:{weekNumber:moment__WEBPACK_IMPORTED_MODULE_3___default()().week(),usageCount:weeklyUsageCount}}));case 8:case"end":return _context3.stop();}}},_callee3,this);}));return _incrementWeeklyUsage.apply(this,arguments);}function isOverFreeWeeklyQuota(){return _isOverFreeWeeklyQuota.apply(this,arguments);}function _isOverFreeWeeklyQuota(){_isOverFreeWeeklyQuota=Object(_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/_Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(){var _ref2,weeklyUsage,weeklyUsageCount,isInPaywallTestResult;return _Users_work_Desktop_Extension_Projects_Work_tabsnooze_working_tab_snooze_extension_continued_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return Object(_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSettings */ "b"])();case 2:_ref2=_context4.sent;weeklyUsage=_ref2.weeklyUsage;weeklyUsageCount=weeklyUsage.usageCount;_context4.next=7;return isInPaywallTest();case 7:isInPaywallTestResult=_context4.sent;if(isInPaywallTestResult){_context4.next=10;break;}return _context4.abrupt("return",false);case 10:if(weeklyUsage.weekNumber!==moment__WEBPACK_IMPORTED_MODULE_3___default()().week()){weeklyUsageCount=0;}return _context4.abrupt("return",weeklyUsageCount>=FREE_WEEKLY_SNOOZE_COUNT);case 12:case"end":return _context4.stop();}}},_callee4,this);}));return _isOverFreeWeeklyQuota.apply(this,arguments);}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(47);

var assertThisInitialized = __webpack_require__(83);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(135);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };

  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }

  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }

  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }

  function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
      Object.keys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }

    Object.keys(source).forEach(function (key) {
      if (!options.isMergeableObject(source[key]) || !target[key]) {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      } else {
        destination[key] = deepmerge(target[key], source[key], options);
      }
    });
    return destination;
  }

  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }

  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };

  var deepmerge_1 = deepmerge;
  return deepmerge_1;
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _StyleRule = __webpack_require__(25);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _cloneStyle = __webpack_require__(106);

var _cloneStyle2 = _interopRequireDefault(_cloneStyle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Create a rule instance.
 */


function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;
  var declCopy = (0, _cloneStyle2['default'])(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(98);
} else {}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styledComponentsTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return muiTheme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
// Styled Components theme (passed via context to prop.theme)
// export const styledComponentsTheme = {
// dark: true,
//   // colors
//   primary: '#4DCAF2',
//   black: '#4A4A4A',
//   gray: '#7F7F7F',
//   beta: '#FF5939',
//   // ui
//   border: '#DADADA',
//   lightBorder: '#ECECEC',
//   // font
//   fontFamily: `"Roboto", "Helvetica Neue", Arial, sans-serif`,
//   // snooze panel
//   snoozePanel: {
//     bgColor: '#373533',
//     border: '#4B4947',
//     hoverColor: '#403E3C',
//     footerTextColor: '#f0f0f0',
//     buttonTextColor: '#f4f4f4',
//     countBadgeColor: '#f0f0f0',
//     whiteIcons: true,
//   },
// };
var styledComponentsTheme={dark:false,// colors
primary:'#4DCAF2',black:'#4A4A4A',gray:'#7F7F7F',beta:'#FF5939',// ui
border:'#DADADA',lightBorder:'#ECECEC',// font
fontFamily:"\"Roboto\", \"Helvetica Neue\", Arial, sans-serif",// snooze panel
snoozePanel:{bgColor:'#fff',border:'#e5e9e9',hoverColor:'#f5f8f8',footerTextColor:'#888888',//  / '#929292',
buttonTextColor:'#788284',countBadgeColor:'#929292',whiteIcons:false}};// Material UI Theme
var muiTheme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({palette:{primary:{main:'#21c1f4'}// styledComponentsTheme.primary
// secondary: green,
},ripple:{color:'#fff'},typography:{useNextVariants:true,// Tell Material-UI what's the font-size on the html element is.
htmlFontSize:10},overrides:{// ripple: {
//   color: '#fff',
// },
// Name of the component ⚛️ / style sheet
MuiToolbar:{root:{height:68}},MuiButton:{root:{color:'white'}}}});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(22));

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15));

var _deepmerge = _interopRequireDefault(__webpack_require__(40));

var _isPlainObject = _interopRequireDefault(__webpack_require__(87));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _createBreakpoints = _interopRequireDefault(__webpack_require__(89));

var _createMixins = _interopRequireDefault(__webpack_require__(90));

var _createPalette = _interopRequireDefault(__webpack_require__(91));

var _createTypography = _interopRequireDefault(__webpack_require__(97));

var _shadows = _interopRequireDefault(__webpack_require__(99));

var _shape = _interopRequireDefault(__webpack_require__(100));

var _spacing = _interopRequireDefault(__webpack_require__(101));

var _transitions = _interopRequireDefault(__webpack_require__(59));

var _zIndex = _interopRequireDefault(__webpack_require__(102)); // < 1kb payload overhead when lodash/merge is > 3kb.


function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      shadowsInput = options.shadows,
      _options$spacing = options.spacing,
      spacingInput = _options$spacing === void 0 ? {} : _options$spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0, _objectWithoutProperties2.default)(options, ["breakpoints", "mixins", "palette", "shadows", "spacing", "typography"]);
  var palette = (0, _createPalette.default)(paletteInput);
  var breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
  var spacing = (0, _extends2.default)({}, _spacing.default, spacingInput);
  var muiTheme = (0, _extends2.default)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0, _createMixins.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Inject custom properties
    shadows: shadowsInput || _shadows.default,
    typography: (0, _createTypography.default)(palette, typographyInput)
  }, (0, _deepmerge.default)({
    shape: _shape.default,
    spacing: spacing,
    transitions: _transitions.default,
    zIndex: _zIndex.default
  }, other, {
    isMergeableObject: _isPlainObject.default
  }));

  if (false) { var traverse, statesWarning; }

   false ? undefined : void 0;
  return muiTheme;
}

var _default = createMuiTheme;
exports.default = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;

var _toCssValue = __webpack_require__(41);

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */


function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = '';
  if (!style) return result;
  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result;
  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);
  return result;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SheetsRegistry = __webpack_require__(69);

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */


exports['default'] = new _SheetsRegistry2['default']();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__(43);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var js = '';
/**
 * Export javascript style and css style vendor prefixes.
 * Based on "transform" support test.
 */

var css = ''; // We should not do anything if required serverside.

if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */


exports['default'] = {
  js: js,
  css: css
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CHANNEL = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(22)); // Same value used by react-jss


var CHANNEL = '__THEMING__';
exports.CHANNEL = CHANNEL;
var themeListener = {
  contextTypes: (0, _defineProperty2.default)({}, CHANNEL, function () {}),
  initial: function initial(context) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].getState();
  },
  subscribe: function subscribe(context, cb) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].subscribe(cb);
  },
  unsubscribe: function unsubscribe(context, subscriptionId) {
    if (context[CHANNEL]) {
      context[CHANNEL].unsubscribe(subscriptionId);
    }
  }
};
var _default = themeListener;
exports.default = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


var punycode = __webpack_require__(154);

var util = __webpack_require__(155);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
} // Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = __webpack_require__(156);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  } // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916


  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);
  var rest = url; // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"

  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);

    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];

      if (simplePath[2]) {
        this.search = simplePath[2];

        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }

      return this;
    }
  }

  var proto = protocolPattern.exec(rest);

  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  } // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.


  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';

    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c
    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.
    // find the first instance of any hostEndingChars
    var hostEnd = -1;

    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.


    var auth, atSign;

    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    } // Now we have a portion which is definitely the auth.
    // Pull that off.


    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    } // the host is the remaining to the left of the first non-host char


    hostEnd = -1;

    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // if we still have not hit it, then the entire thing is a host.


    if (hostEnd === -1) hostEnd = rest.length;
    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd); // pull out port.

    this.parseHost(); // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.

    this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.

    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);

      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;

        if (!part.match(hostnamePartPattern)) {
          var newpart = '';

          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          } // we test again with ASCII char only


          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);

            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }

            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }

            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host; // strip [ and ] from the hostname
    // the host field still retains them, though

    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);

      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  } // now rest is set to the post-host stuff.
  // chop off any delim chars.


  if (!unsafeProtocol[lowerProto]) {
    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);

      if (esc === ae) {
        esc = escape(ae);
      }

      rest = rest.split(ae).join(esc);
    }
  } // chop off from the tail first.


  var hash = rest.indexOf('#');

  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }

  var qm = rest.indexOf('?');

  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);

    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }

    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }

  if (rest) this.pathname = rest;

  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  } //to support http.request


  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  } // finally, reconstruct the href based on what has been validated.


  this.href = this.format();
  return this;
}; // format a parsed object into a url string


function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');

    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':'; // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.

  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');
  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);

  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  } // hash is always overridden, no matter what.
  // even href="" will remove it.


  result.hash = relative.hash; // if the relative url is empty, then there's nothing left to do here.

  if (relative.href === '') {
    result.href = result.format();
    return result;
  } // hrefs like //foo/bar always cut to the protocol.


  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);

    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    } //urlParse appends trailing / to urls like http://www.example.com


    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);

      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }

      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;

    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');

      while (relPath.length && !(relative.host = relPath.shift())) {
        ;
      }

      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }

    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port; // to support http.request

    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }

    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol]; // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.

  if (psychotic) {
    result.hostname = '';
    result.port = null;

    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }

    result.host = '';

    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;

      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }

      relative.host = null;
    }

    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath; // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift(); //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    result.search = relative.search;
    result.query = relative.query; //to support http.request

    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }

    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null; //to support http.request

    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }

    result.href = result.format();
    return result;
  } // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.


  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === ''; // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0

  var up = 0;

  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];

    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/'; // put the host back

  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : ''; //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  } //to support request.http


  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }

  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);

  if (port) {
    port = port[0];

    if (port !== ':') {
      this.port = port.substr(1);
    }

    host = host.substr(0, host.length - port.length);
  }

  if (host) this.hostname = host;
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/snooze.js
var snooze = __webpack_require__(30);

// EXTERNAL MODULE: ./src/core/wakeup.js
var wakeup = __webpack_require__(27);

// EXTERNAL MODULE: ./src/paths.js
var paths = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/commands.js
var COMMAND_SNOOZE_ACTIVE_TAB='_execute_browser_action';var COMMAND_REPEAT_LAST_SNOOZE='repeat_last_snooze';var COMMAND_NEW_TODO='new_todo_page';var COMMAND_OPEN_SLEEPING_TABS='open_snoozed_list';
// EXTERNAL MODULE: ./src/core/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/core/analytics.js
var analytics = __webpack_require__(14);

// EXTERNAL MODULE: ./src/core/badge.js
var badge = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/settings.js
var settings = __webpack_require__(12);

// CONCATENATED MODULE: ./src/core/backgroundMain.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runBackgroundScript", function() { return runBackgroundScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureOffscreenDocument", function() { return ensureOffscreenDocument; });
/**
 * This script is executed only as a Chrome Extensions
 * Background Page - a page that opens in the background
 * without a view.
 *//**
 * runBackgroundScript() is called by index.js on the main thread of a Chrome Extension
 * Background script. In a Chrome Extension 'backgroud.js' script, all we are allowed to do is
 * register chrome API Event Listeners **synchroneously**, and *NO other logic*.
 * So no "await (X) and then chrome.register()". This function should be entirely sync,
 * and do no work besides registering event listeners (no storage reading etc.).
 *
 * If you wanna write a "main()" function for the extension, that runs real business logic, it
 * oddly enough should either be called in chrome.runtime.onInstall handler (which includes both extension
 * install and update), OR chrome.runtime.onStartup handler (which is ran on Chrome startup/update only.)
 * So the main logic should be ran on both of these triggers, and always only one of them is ran
 * and not the other, depends on the case... THANK YOU CHROME for making it hard on us.
 */function runBackgroundScript(){// Make the main function run on Chrome startup
chrome.runtime.onStartup.addListener(extensionMain);// [1] Register more background events by the wakeup module (synchroneously)
Object(wakeup["b" /* registerEventListeners */])();// Make badge module listen to storage changes and update badge
Object(badge["d" /* registerEventListeners */])();// Show CHANGELOG doc when extension updates
chrome.runtime.onInstalled.addListener(/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(_ref){var reason,previousVersion;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:reason=_ref.reason,previousVersion=_ref.previousVersion;_context.next=3;return extensionMain();case 3:chrome.runtime.setUninstallURL(Object(paths["w" /* getTrackUninstallUrl */])());if(!(reason==='install')){_context.next=9;break;}Object(analytics["c" /* track */])(analytics["a" /* EVENTS */].EXT_INSTALLED);// Save install date for new users.
// Old users will have a 0 install date
_context.next=8;return Object(settings["c" /* saveSettings */])({installDate:Date.now()});case 8:Object(utils["h" /* createTab */])(paths["v" /* TUTORIAL_PATH */]);case 9:if(reason==='update'){Object(analytics["c" /* track */])(analytics["a" /* EVENTS */].EXT_UPDATED);// Open the changelog every version update for beta testers
if(utils["b" /* IS_BETA */]){notifyAboutNewBetaVersion();}}case 10:case"end":return _context.stop();}}},_callee,this);}));return function(_x){return _ref2.apply(this,arguments);};}());chrome.commands.onCommand.addListener(function(command){// create a new todo window!, and focus on it
if(command===COMMAND_NEW_TODO){Object(utils["h" /* createTab */])(paths["t" /* TODO_PATH */]);}if(command===COMMAND_REPEAT_LAST_SNOOZE){Object(snooze["a" /* repeatLastSnooze */])();}if(command===COMMAND_OPEN_SLEEPING_TABS){Object(utils["h" /* createTab */])(paths["q" /* SLEEPING_TABS_PATH */]);}if(command==='snooze_all_tabs'){Object(utils["h" /* createTab */])('/snooze-all');}});}function ensureOffscreenDocument(){return _ensureOffscreenDocument.apply(this,arguments);}function _ensureOffscreenDocument(){_ensureOffscreenDocument=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var offscreenUrl,existingContexts;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:console.log("Ensuring offscreen document is created...");// Check if offscreen document actually exists
offscreenUrl=chrome.runtime.getURL('offscreen.html');_context2.next=4;return chrome.runtime.getContexts({contextTypes:['OFFSCREEN_DOCUMENT'],documentUrls:[offscreenUrl]});case 4:existingContexts=_context2.sent;if(!(existingContexts.length===0)){_context2.next=11;break;}_context2.next=8;return chrome.offscreen.createDocument({url:'offscreen.html',reasons:['AUDIO_PLAYBACK'],justification:'Play notification and alert sounds'});case 8:console.log("Offscreen document created");_context2.next=12;break;case 11:console.log("Offscreen document already exists");case 12:case"end":return _context2.stop();}}},_callee2,this);}));return _ensureOffscreenDocument.apply(this,arguments);}function extensionMain(){return _extensionMain.apply(this,arguments);}function _extensionMain(){_extensionMain=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return Object(wakeup["c" /* scheduleWakeupAlarm */])('1min');case 2:_context3.next=4;return Object(badge["e" /* updateBadge */])();case 4:case"end":return _context3.stop();}}},_callee3,this);}));return _extensionMain.apply(this,arguments);}function notifyAboutNewBetaVersion(){return _notifyAboutNewBetaVersion.apply(this,arguments);}function _notifyAboutNewBetaVersion(){_notifyAboutNewBetaVersion=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(){var notificationId;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return chrome.notifications.create('',{type:'basic',title:"Tab Snooze ".concat(utils["a" /* APP_VERSION */]," installed"),message:'Click to open the changelog',iconUrl:'/images/beta_extension_icon_128.png',requireInteraction:true});case 2:notificationId=_context5.sent;// If notification clicked, open changelog
chrome.notifications.onClicked.addListener(/*#__PURE__*/function(){var _makeTabActive=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(notifId){return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(notifId===notificationId){Object(utils["h" /* createTab */])(paths["e" /* CHANGELOG_URL */]);chrome.notifications.clear(notificationId);chrome.notifications.onClicked.removeListener(makeTabActive);}case 1:case"end":return _context4.stop();}}},_callee4,this);}));function makeTabActive(_x2){return _makeTabActive.apply(this,arguments);}return makeTabActive;}());case 4:case"end":return _context5.stop();}}},_callee5,this);}));return _notifyAboutNewBetaVersion.apply(this,arguments);}runBackgroundScript();

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sheetsManager = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(22));

var _extends3 = _interopRequireDefault(__webpack_require__(13));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(35));

var _createClass2 = _interopRequireDefault(__webpack_require__(36));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(37));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(38));

var _inherits2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(60));

var _utils = __webpack_require__(23);

var _jss = __webpack_require__(68);

var _reactJssContext = _interopRequireDefault(__webpack_require__(140));

var _jssPreset = _interopRequireDefault(__webpack_require__(67));

var _mergeClasses = _interopRequireDefault(__webpack_require__(141));

var _multiKeyStore = _interopRequireDefault(__webpack_require__(142));

var _createMuiTheme = _interopRequireDefault(__webpack_require__(49));

var _themeListener = _interopRequireDefault(__webpack_require__(53));

var _createGenerateClassName = _interopRequireDefault(__webpack_require__(62));

var _getStylesCreator = _interopRequireDefault(__webpack_require__(143));

var _getThemeProps = _interopRequireDefault(__webpack_require__(144));
/* eslint-disable no-underscore-dangle */
// Default JSS instance.


var jss = (0, _jss.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = (0, _createGenerateClassName.default)(); // Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any childs styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.

var indexCounter = -10e10; // Exported for test purposes

var sheetsManager = new Map(); // We use the same empty object to ref count the styles that don't need a theme object.

exports.sheetsManager = sheetsManager;
var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

var defaultTheme = (0, _createMuiTheme.default)({
  typography: {
    suppressWarning: true
  }
}); // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStylesOld = function withStylesOld(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _extends2;

    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$flip = options.flip,
        flip = _options$flip === void 0 ? null : _options$flip,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties2.default)(options, ["withTheme", "flip", "name"]);
    var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || typeof name === 'string' || withTheme;
    indexCounter += 1;
    stylesCreator.options.index = indexCounter;
     false ? undefined : void 0;

    var WithStyles =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithStyles, _React$Component);

      function WithStyles(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithStyles);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
        _this.jss = context[_reactJssContext.default.jss] || jss;
        _this.sheetsManager = sheetsManager;
        _this.unsubscribeId = null;
        var muiThemeProviderOptions = context.muiThemeProviderOptions;

        if (muiThemeProviderOptions) {
          if (muiThemeProviderOptions.sheetsManager) {
            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
          }

          _this.sheetsCache = muiThemeProviderOptions.sheetsCache;
          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
        } // Attach the stylesCreator to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, context[_reactJssContext.default.sheetOptions]); // We use || as the function call is lazy evaluated.

        _this.theme = listenToTheme ? _themeListener.default.initial(context) || defaultTheme : noopTheme;

        _this.attach(_this.theme);

        _this.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
        return _this;
      }

      (0, _createClass2.default)(WithStyles, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;

            _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
            // By theme update we mean receiving and applying the new class names.


            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          // react-hot-loader specific logic
          if (this.stylesCreatorSaved === stylesCreator || "production" === 'production') {
            return;
          }

          this.detach(this.theme);
          this.stylesCreatorSaved = stylesCreator;
          this.attach(this.theme);
          this.forceUpdate();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "getClasses",
        value: function getClasses() {
          if (this.disableStylesGeneration) {
            return this.props.classes || {};
          } // Tracks if either the rendered classes or classes prop has changed,
          // requiring the generation of a new finalized classes object.


          var generate = false;

          var sheetManager = _multiKeyStore.default.get(this.sheetsManager, this.stylesCreatorSaved, this.theme);

          if (sheetManager.sheet.classes !== this.cacheClasses.lastJSS) {
            this.cacheClasses.lastJSS = sheetManager.sheet.classes;
            generate = true;
          }

          if (this.props.classes !== this.cacheClasses.lastProp) {
            this.cacheClasses.lastProp = this.props.classes;
            generate = true;
          }

          if (generate) {
            this.cacheClasses.value = (0, _mergeClasses.default)({
              baseClasses: this.cacheClasses.lastJSS,
              newClasses: this.props.classes,
              Component: Component
            });
          }

          return this.cacheClasses.value;
        }
      }, {
        key: "attach",
        value: function attach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;

          var sheetManager = _multiKeyStore.default.get(this.sheetsManager, stylesCreatorSaved, theme);

          if (!sheetManager) {
            sheetManager = {
              refs: 0,
              sheet: null
            };

            _multiKeyStore.default.set(this.sheetsManager, stylesCreatorSaved, theme, sheetManager);
          }

          if (sheetManager.refs === 0) {
            var sheet;

            if (this.sheetsCache) {
              sheet = _multiKeyStore.default.get(this.sheetsCache, stylesCreatorSaved, theme);
            }

            if (!sheet) {
              sheet = this.createSheet(theme);
              sheet.attach();

              if (this.sheetsCache) {
                _multiKeyStore.default.set(this.sheetsCache, stylesCreatorSaved, theme, sheet);
              }
            }

            sheetManager.sheet = sheet;
            var sheetsRegistry = this.context[_reactJssContext.default.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManager.refs += 1;
        }
      }, {
        key: "createSheet",
        value: function createSheet(theme) {
          var styles = this.stylesCreatorSaved.create(theme, name);
          var meta = name;

          if (false) {}

          var sheet = this.jss.createStyleSheet(styles, (0, _extends3.default)({
            meta: meta,
            classNamePrefix: meta,
            flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
            link: false
          }, this.sheetOptions, this.stylesCreatorSaved.options, {
            name: name || Component.displayName
          }, styleSheetOptions));
          return sheet;
        }
      }, {
        key: "detach",
        value: function detach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var sheetManager = _multiKeyStore.default.get(this.sheetsManager, this.stylesCreatorSaved, theme);

          sheetManager.refs -= 1;

          if (sheetManager.refs === 0) {
            _multiKeyStore.default.delete(this.sheetsManager, this.stylesCreatorSaved, theme);

            this.jss.removeStyleSheet(sheetManager.sheet);
            var sheetsRegistry = this.context[_reactJssContext.default.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManager.sheet);
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              classes = _this$props.classes,
              innerRef = _this$props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "innerRef"]);
          var more = (0, _getThemeProps.default)({
            theme: this.theme,
            name: name,
            props: other
          }); // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.

          if (withTheme && !more.theme) {
            more.theme = this.theme;
          }

          return _react.default.createElement(Component, (0, _extends3.default)({}, more, {
            classes: this.getClasses(),
            ref: innerRef
          }));
        }
      }]);
      return WithStyles;
    }(_react.default.Component);

     false ? undefined : void 0;
    WithStyles.contextTypes = (0, _extends3.default)((_extends2 = {
      muiThemeProviderOptions: _propTypes.default.object
    }, (0, _defineProperty2.default)(_extends2, _reactJssContext.default.jss, _propTypes.default.object), (0, _defineProperty2.default)(_extends2, _reactJssContext.default.sheetOptions, _propTypes.default.object), (0, _defineProperty2.default)(_extends2, _reactJssContext.default.sheetsRegistry, _propTypes.default.object), _extends2), listenToTheme ? _themeListener.default.contextTypes : {});

    if (false) {}

    (0, _hoistNonReactStatics.default)(WithStyles, Component);

    if (false) {}

    return WithStyles;
  };
};
/* istanbul ignore if */


if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
  _utils.ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!_utils.ponyfillGlobal.__MUI_STYLES__.withStyles) {
  _utils.ponyfillGlobal.__MUI_STYLES__.withStyles = withStylesOld;
}

var _default = function _default(styles, options) {
  return _utils.ponyfillGlobal.__MUI_STYLES__.withStyles(styles, (0, _extends3.default)({
    defaultTheme: defaultTheme
  }, options));
};

exports.default = _default;

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createGenerateClassName", {
  enumerable: true,
  get: function get() {
    return _createGenerateClassName.default;
  }
});
Object.defineProperty(exports, "createMuiTheme", {
  enumerable: true,
  get: function get() {
    return _createMuiTheme.default;
  }
});
Object.defineProperty(exports, "jssPreset", {
  enumerable: true,
  get: function get() {
    return _jssPreset.default;
  }
});
Object.defineProperty(exports, "MuiThemeProvider", {
  enumerable: true,
  get: function get() {
    return _MuiThemeProvider.default;
  }
});
Object.defineProperty(exports, "createStyles", {
  enumerable: true,
  get: function get() {
    return _createStyles.default;
  }
});
Object.defineProperty(exports, "withStyles", {
  enumerable: true,
  get: function get() {
    return _withStyles.default;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme.default;
  }
});

var _createGenerateClassName = _interopRequireDefault(__webpack_require__(62));

var _createMuiTheme = _interopRequireDefault(__webpack_require__(49));

var _jssPreset = _interopRequireDefault(__webpack_require__(67));

var _MuiThemeProvider = _interopRequireDefault(__webpack_require__(74));

var _createStyles = _interopRequireDefault(__webpack_require__(139));

var _withStyles = _interopRequireDefault(__webpack_require__(56));

var _withTheme = _interopRequireDefault(__webpack_require__(77));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15));

var _warning = _interopRequireDefault(__webpack_require__(11));
/* eslint-disable no-restricted-globals */
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.


var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

exports.easing = easing;
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
exports.duration = duration;

var formatMs = function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
};

exports.formatMs = formatMs;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;

var isNumber = function isNumber(value) {
  return !isNaN(parseFloat(value));
};
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


exports.isNumber = isNumber;
var _default = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0, _objectWithoutProperties2.default)(options, ["duration", "easing", "delay"]);
     false ? undefined : void 0;
     false ? undefined : void 0;
     false ? undefined : void 0;
     false ? undefined : void 0;
     false ? undefined : void 0;
    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
exports.default = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var ReactIs = __webpack_require__(44);

var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
    var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = _interopRequireDefault(__webpack_require__(11));

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;

function safePrefix(classNamePrefix) {
  var prefix = String(classNamePrefix);
   false ? undefined : void 0; // Sanitize the string as will be used to prefix the generated class name.

  return prefix.replace(escapeRegex, '-');
} // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js


function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var ruleCounter = 0;
  return function (rule, styleSheet) {
    ruleCounter += 1;
     false ? undefined : void 0;

    if (dangerouslyUseGlobalCSS && styleSheet && styleSheet.options.name) {
      return "".concat(safePrefix(styleSheet.options.name), "-").concat(rule.key);
    }

    if (true) {
      return "".concat(productionPrefix).concat(seed).concat(ruleCounter);
    } // Help with debuggability.


    if (styleSheet && styleSheet.options.classNamePrefix) {
      return "".concat(safePrefix(styleSheet.options.classNamePrefix), "-").concat(rule.key, "-").concat(seed).concat(ruleCounter);
    }

    return "".concat(rule.key, "-").concat(seed).concat(ruleCounter);
  };
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(47));

var ReactIs = __webpack_require__(44);
/**
 * A factory that returns a propTypes validator that only accepts values that
 * are also accepted by React.createElement
 * e.g. "div", functional, class components, forwardRef etc.
 *
 * @param {boolean} isRequired If `true` returns a validator
 *                             that will throw if nullish values are passed
 */


function createComponentProp(isRequired) {
  /* istanbul ignore if */
  if (true) {
    return function () {
      return null;
    };
  }

  return function componentPropType(props, key, componentName, location, propFullName) {
    var prop = props[key];
    var propName = propFullName || key;
    var message;

    if (prop == null) {
      if (isRequired) {
        message = "The ".concat(location, " `").concat(propName, "` is marked as required in `").concat(componentName, "`, ") + "but its value is `".concat((0, _typeof2.default)(prop), "`.");
      }
    } else if (!ReactIs.isValidElementType(prop)) {
      var preciseType = (0, _typeof2.default)(prop);
      message = "Invalid ".concat(location, " `").concat(propName, "` of type `").concat(preciseType, "` ") + "supplied to `".concat(componentName, "`, expected a component.");
    }

    if (message != null) {
      // change error message slightly on every check to prevent caching when testing
      // which would not trigger console errors on subsequent fails
      return new Error("".concat(message).concat( false ? undefined : ''));
    }

    return null;
  };
}

var componentPropType = createComponentProp(false);
componentPropType.isRequired = createComponentProp(true);
var _default = componentPropType;
exports.default = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.specialProperty = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(22));

var _extends3 = _interopRequireDefault(__webpack_require__(13)); // This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.


var specialProperty = "exact-prop: \u200B";
exports.specialProperty = specialProperty;

function exactProp(propTypes) {
  /* istanbul ignore if */
  if (true) {
    return propTypes;
  }

  return (0, _extends3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following properties are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

var _default = exactProp;
exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFunctionName = getFunctionName;
exports.default = void 0; // Fork of recompose/getDisplayName with added IE 11 support
// Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}

function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || getFunctionName(Component) || 'Component';
}

var _default = getDisplayName;
exports.default = _default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

var _default = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jssGlobal = _interopRequireDefault(__webpack_require__(103));

var _jssNested = _interopRequireDefault(__webpack_require__(122));

var _jssCamelCase = _interopRequireDefault(__webpack_require__(124));

var _jssDefaultUnit = _interopRequireDefault(__webpack_require__(126));

var _jssVendorPrefixer = _interopRequireDefault(__webpack_require__(128));

var _jssPropsSort = _interopRequireDefault(__webpack_require__(133)); // Subset of jss-preset-default with only the plugins the Material-UI components are using.


function jssPreset() {
  return {
    plugins: [(0, _jssGlobal.default)(), (0, _jssNested.default)(), (0, _jssCamelCase.default)(), (0, _jssDefaultUnit.default)(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : (0, _jssVendorPrefixer.default)(), (0, _jssPropsSort.default)()]
  };
}

var _default = jssPreset;
exports.default = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;

var _getDynamicStyles = __webpack_require__(104);

Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getDynamicStyles)['default'];
  }
});

var _toCssValue = __webpack_require__(41);

Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCssValue)['default'];
  }
});

var _SheetsRegistry = __webpack_require__(69);

Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsRegistry)['default'];
  }
});

var _SheetsManager = __webpack_require__(105);

Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsManager)['default'];
  }
});

var _RuleList = __webpack_require__(29);

Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RuleList)['default'];
  }
});

var _sheets = __webpack_require__(51);

Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sheets)['default'];
  }
});

var _createGenerateClassName = __webpack_require__(72);

Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createGenerateClassName)['default'];
  }
});

var _Jss = __webpack_require__(110);

var _Jss2 = _interopRequireDefault(_Jss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Creates a new instance of Jss.
 */


var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};
/**
 * A global Jss instance.
 */


exports['default'] = create();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Sheets registry to access them all at one place.
 */


var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',

    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = __webpack_require__(107);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */

function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _StyleSheet = __webpack_require__(73);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _moduleId = __webpack_require__(109);

var _moduleId2 = _interopRequireDefault(_moduleId);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var maxRules = 1e10;
var env = "production";
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _linkRule = __webpack_require__(71);

var _linkRule2 = _interopRequireDefault(_linkRule);

var _RuleList = __webpack_require__(29);

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable-next-line no-use-before-define */


var StyleSheet = function () {
  function StyleSheet(styles, options) {
    var _this = this;

    _classCallCheck(this, StyleSheet);

    this.update = function (name, data) {
      if (typeof name === 'string') {
        _this.rules.update(name, data);
      } else {
        _this.rules.update(name);
      }

      return _this;
    };

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var _name in styles) {
      this.rules.add(_name, styles[_name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }
    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];

      for (var _name2 in styles) {
        added.push(this.addRule(_name2, styles[_name2], options));
      }

      return added;
    }
    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);
      if (!rule) return false;
      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules(); // Is undefined when VirtualRenderer is used.

      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'toString',

    /**
     * Convert rules to a CSS string.
     */
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(134);

var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MuiThemeProviderOld = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(22));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(35));

var _createClass2 = _interopRequireDefault(__webpack_require__(36));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(37));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(38));

var _inherits2 = _interopRequireDefault(__webpack_require__(39));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _brcast = _interopRequireDefault(__webpack_require__(138));

var _utils = __webpack_require__(23);

var _themeListener = _interopRequireWildcard(__webpack_require__(53));
/* eslint-disable no-underscore-dangle */

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


var MuiThemeProviderOld =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MuiThemeProviderOld, _React$Component); // We are not using the React state in order to avoid unnecessary rerender.

  function MuiThemeProviderOld(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MuiThemeProviderOld);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MuiThemeProviderOld).call(this)); // Get the outer theme from the context, can be null

    _this.broadcast = (0, _brcast.default)();
    _this.outerTheme = _themeListener.default.initial(context); // Propagate the theme so it can be accessed by the children

    _this.broadcast.setState(_this.mergeOuterLocalTheme(props.theme));

    return _this;
  }

  (0, _createClass2.default)(MuiThemeProviderOld, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var _this$props = this.props,
          disableStylesGeneration = _this$props.disableStylesGeneration,
          sheetsCache = _this$props.sheetsCache,
          sheetsManager = _this$props.sheetsManager;
      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      if (sheetsCache !== undefined) {
        muiThemeProviderOptions.sheetsCache = sheetsCache;
      }

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      return _ref = {}, (0, _defineProperty2.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty2.default)(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Subscribe on the outer theme, if present


      this.unsubscribeId = _themeListener.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
      }
    } // Simple merge between the outer theme and the local theme

  }, {
    key: "mergeOuterLocalTheme",
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
         false ? undefined : void 0;
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return (0, _extends2.default)({}, this.outerTheme, localTheme);
    }
  }, {
    key: "render",
    value: function render() {
      // TODO move the sheetsManager property to a different component.
      // warning(
      //   typeof window !== 'undefined' || this.props.sheetsManager,
      //   [
      //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
      //       'when rendering on the server.',
      //     'If you do not, you might experience a memory leak',
      //   ].join('\n'),
      // );
      return this.props.children;
    }
  }]);
  return MuiThemeProviderOld;
}(_react.default.Component);

exports.MuiThemeProviderOld = MuiThemeProviderOld;
 false ? undefined : void 0;

if (false) {}

MuiThemeProviderOld.childContextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
MuiThemeProviderOld.contextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
/* istanbul ignore if */

if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
  _utils.ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!_utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider) {
  _utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider = MuiThemeProviderOld;
}

var _default = _utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider;
exports.default = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(148);

var strictUriEncode = __webpack_require__(152);

var decodeComponent = __webpack_require__(153);

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return function (key, value, index) {
        return value === null ? [encode(key, options), '[', index, ']'].join('') : [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('');
      };

    case 'bracket':
      return function (key, value) {
        return value === null ? [encode(key, options), '[]'].join('') : [encode(key, options), '[]=', encode(value, options)].join('');
      };

    default:
      return function (key, value) {
        return value === null ? encode(key, options) : [encode(key, options), '=', encode(value, options)].join('');
      };
  }
}

function parserForArrayFormat(options) {
  var result;

  switch (options.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

function extract(input) {
  var queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parse(input, options) {
  options = Object.assign({
    decode: true,
    arrayFormat: 'none'
  }, options);
  var formatter = parserForArrayFormat(options); // Create an object with no prototype

  var ret = Object.create(null);

  if (typeof input !== 'string') {
    return ret;
  }

  input = input.trim().replace(/^[?#&]/, '');

  if (!input) {
    return ret;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = input.split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var param = _step.value;

      var _param$replace$split = param.replace(/\+/g, ' ').split('='),
          _param$replace$split2 = _slicedToArray(_param$replace$split, 2),
          key = _param$replace$split2[0],
          value = _param$replace$split2[1]; // Missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters


      value = value === undefined ? null : decode(value, options);
      formatter(decode(key, options), value, ret);
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

  return Object.keys(ret).sort().reduce(function (result, key) {
    var value = ret[key];

    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, options) {
  if (!obj) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none'
  }, options);
  var formatter = encoderForArrayFormat(options);
  var keys = Object.keys(obj);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(function (key) {
    var value = obj[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      var result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value.slice()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var value2 = _step2.value;

          if (value2 === undefined) {
            continue;
          }

          result.push(formatter(key, value2, result.length));
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

      return result.join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&');
};

exports.parseUrl = function (input, options) {
  var hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return {
    url: input.split('?')[0] || '',
    query: parse(extract(input), options)
  };
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(35));

var _createClass2 = _interopRequireDefault(__webpack_require__(36));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(37));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(38));

var _inherits2 = _interopRequireDefault(__webpack_require__(39));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(60));

var _utils = __webpack_require__(23);

var _createMuiTheme = _interopRequireDefault(__webpack_require__(49));

var _themeListener = _interopRequireDefault(__webpack_require__(53));
/* eslint-disable no-underscore-dangle */


var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)({
    typography: {
      suppressWarning: true
    }
  });
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withThemeOld = function withThemeOld() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTheme).call(this));
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: _themeListener.default.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["innerRef"]);
          return _react.default.createElement(Component, (0, _extends2.default)({
            theme: this.state.theme,
            ref: innerRef
          }, other));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

     false ? undefined : void 0;
    WithTheme.contextTypes = _themeListener.default.contextTypes;

    if (false) {}

    (0, _hoistNonReactStatics.default)(WithTheme, Component);

    if (false) {}

    return WithTheme;
  };
};
/* istanbul ignore if */


if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
  _utils.ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!_utils.ponyfillGlobal.__MUI_STYLES__.withTheme) {
  _utils.ponyfillGlobal.__MUI_STYLES__.withTheme = withThemeOld;
}

var _default = _utils.ponyfillGlobal.__MUI_STYLES__.withTheme;
exports.default = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

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
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHexToRGB = convertHexToRGB;
exports.rgbToHex = rgbToHex;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = _interopRequireDefault(__webpack_require__(11));
/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */


function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
   false ? undefined : void 0;

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function convertHexToRGB(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Pass hex straight through
  if (color.indexOf('#') === 0) {
    return color;
  }

  function intToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0".concat(hex) : hex;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  values = values.map(function (n) {
    return intToHex(n);
  });
  return "#".concat(values.join(''));
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  if (false) {}

  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */


function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  }

  if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(color.type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */


function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */


function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') !== -1) {
    var rgb = decomposedColor.values.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } // else if (decomposedColor.type.indexOf('hsl') !== -1)


  return decomposedColor.values[2] / 100;
}
/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function fade(color, value) {
   false ? undefined : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function darken(color, coefficient) {
   false ? undefined : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function lighten(color, coefficient) {
   false ? undefined : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var k = __webpack_require__(78),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    A = n ? Symbol.for("react.memo") : 60115,
    B = n ? Symbol.for("react.lazy") : 60116,
    C = "function" === typeof Symbol && Symbol.iterator;

function aa(a, b, e, c, d, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [e, c, d, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function D(a) {
  for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }

  aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
}

var E = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    F = {};

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

G.prototype.isReactComponent = {};

G.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? D("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

G.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function H() {}

H.prototype = G.prototype;

function I(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

var J = I.prototype = new H();
J.constructor = I;
k(J, G.prototype);
J.isPureReactComponent = !0;
var K = {
  current: null,
  currentDispatcher: null
},
    L = Object.prototype.hasOwnProperty,
    M = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function N(a, b, e) {
  var c = void 0,
      d = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = b[c]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }

    d.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: d,
    _owner: K.current
  };
}

function ba(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, e, c) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = e;
    d.context = c;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: e,
    context: c,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, e, c) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return e(c, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    d = a[h];
    var f = b + U(d, h);
    g += T(d, f, e, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, h++), g += T(d, f, e, c);
  } else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
  return g;
}

function V(a, b, e) {
  return null == a ? 0 : T(a, "", b, e);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ca(a, b) {
  a.func.call(a.context, b, a.count++);
}

function da(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? W(a, c, e, function (a) {
    return a;
  }) : null != a && (O(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), c.push(a));
}

function W(a, b, e, c, d) {
  var g = "";
  null != e && (g = ("" + e).replace(P, "$&/") + "/");
  b = R(b, g, c, d);
  V(a, da, b);
  S(b);
}

var X = {
  Children: {
    map: function map(a, b, e) {
      if (null == a) return a;
      var c = [];
      W(a, c, null, b, e);
      return c;
    },
    forEach: function forEach(a, b, e) {
      if (null == a) return a;
      b = R(null, null, b, e);
      V(a, ca, b);
      S(b);
    },
    count: function count(a) {
      return V(a, function () {
        return null;
      }, null);
    },
    toArray: function toArray(a) {
      var b = [];
      W(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function only(a) {
      O(a) ? void 0 : D("143");
      return a;
    }
  },
  createRef: function createRef() {
    return {
      current: null
    };
  },
  Component: G,
  PureComponent: I,
  createContext: function createContext(a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function forwardRef(a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function lazy(a) {
    return {
      $$typeof: B,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function memo(a, b) {
    return {
      $$typeof: A,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: N,
  cloneElement: function cloneElement(a, b, e) {
    null === a || void 0 === a ? D("267", a) : void 0;
    var c = void 0,
        d = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = K.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) {
        L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }

    c = arguments.length - 2;
    if (1 === c) d.children = e;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }

      d.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: d,
      _owner: f
    };
  },
  createFactory: function createFactory(a) {
    var b = N.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: O,
  version: "16.7.0",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: K,
    assign: k
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */


var isObject = __webpack_require__(88);

function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (typeof ctor !== 'function') return false; // If has modified prototype

  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */


module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBreakpoints;
exports.keys = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15)); // Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.


var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

exports.keys = keys;

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0, _objectWithoutProperties2.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return (0, _extends2.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMixins;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(22));

var _extends3 = _interopRequireDefault(__webpack_require__(13));

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0, _extends3.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _extends3.default)({
        paddingLeft: spacing.unit * 2,
        paddingRight: spacing.unit * 2
      }, styles, (0, _defineProperty2.default)({}, breakpoints.up('sm'), (0, _extends3.default)({
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0, _defineProperty2.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0, _defineProperty2.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPalette;
exports.dark = exports.light = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _deepmerge = _interopRequireDefault(__webpack_require__(40));

var _indigo = _interopRequireDefault(__webpack_require__(92));

var _pink = _interopRequireDefault(__webpack_require__(93));

var _grey = _interopRequireDefault(__webpack_require__(94));

var _red = _interopRequireDefault(__webpack_require__(95));

var _common = _interopRequireDefault(__webpack_require__(96));

var _colorManipulator = __webpack_require__(84); // < 1kb payload overhead when lodash/merge is > 3kb.


var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _common.default.white,
    default: _grey.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};
exports.light = light;
var dark = {
  text: {
    primary: _common.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _grey.default[800],
    default: '#303030'
  },
  action: {
    active: _common.default.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};
exports.dark = dark;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, _colorManipulator.lighten)(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = (0, _colorManipulator.darken)(intent.main, tonalOffset * 1.5);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _indigo.default[300],
    main: _indigo.default[500],
    dark: _indigo.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _pink.default.A200,
    main: _pink.default.A400,
    dark: _pink.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _red.default[300],
    main: _red.default[500],
    dark: _red.default[700]
  } : _palette$error,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0, _objectWithoutProperties2.default)(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);

  function getContrastText(background) {
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    var contrastText = (0, _colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (false) { var contrast; }

    return contrastText;
  }

  function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (false) {}

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  }

  augmentColor(primary);
  augmentColor(secondary, 'A400', 'A200', 'A700');
  augmentColor(error);
  var types = {
    dark: dark,
    light: light
  };
   false ? undefined : void 0;
  var paletteOutput = (0, _deepmerge.default)((0, _extends2.default)({
    // A collection of common colors.
    common: _common.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: primary,
    // The colors used to represent secondary interface elements for a user.
    secondary: secondary,
    // The colors used to represent interface elements that the user should be made aware of.
    error: error,
    // The grey colors.
    grey: _grey.default,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: contrastThreshold,
    // Take a background color and return the color of the text to maximize the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other, {
    clone: false // No need to clone deep

  });
  return paletteOutput;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var _default = indigo;
exports.default = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
var _default = pink;
exports.default = _default;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypography;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(15));

var _deepmerge = _interopRequireDefault(__webpack_require__(40));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _utils = __webpack_require__(23); // < 1kb payload overhead when lodash/merge is > 3kb.


function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      _ref$useNextVariants = _ref.useNextVariants,
      useNextVariants = _ref$useNextVariants === void 0 ? Boolean(_utils.ponyfillGlobal.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__) : _ref$useNextVariants,
      _ref$suppressWarning = _ref.suppressWarning,
      suppressWarning = _ref$suppressWarning === void 0 ? false : _ref$suppressWarning,
      allVariants = _ref.allVariants,
      other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize", "useNextVariants", "suppressWarning", "allVariants"]);

   false ? undefined : void 0;
  var coef = fontSize / 14;

  var pxToRem = function pxToRem(size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0, _extends2.default)({
      color: palette.text.primary,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var nextVariants = {
    h1: buildVariant(fontWeightLight, 96, 1, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.04, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.17, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1Next: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2Next: buildVariant(fontWeightRegular, 14, 1.5, 0.15),
    buttonNext: buildVariant(fontWeightMedium, 14, 1.5, 0.4, caseAllCaps),
    captionNext: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  }; // To remove in v4

  var oldVariants = {
    display4: (0, _extends2.default)({
      fontSize: pxToRem(112),
      fontWeight: fontWeightLight,
      fontFamily: fontFamily,
      letterSpacing: '-.04em',
      lineHeight: "".concat(round(128 / 112), "em"),
      marginLeft: '-.04em',
      color: palette.text.secondary
    }, allVariants),
    display3: (0, _extends2.default)({
      fontSize: pxToRem(56),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      letterSpacing: '-.02em',
      lineHeight: "".concat(round(73 / 56), "em"),
      marginLeft: '-.02em',
      color: palette.text.secondary
    }, allVariants),
    display2: (0, _extends2.default)({
      fontSize: pxToRem(45),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(51 / 45), "em"),
      marginLeft: '-.02em',
      color: palette.text.secondary
    }, allVariants),
    display1: (0, _extends2.default)({
      fontSize: pxToRem(34),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(41 / 34), "em"),
      color: palette.text.secondary
    }, allVariants),
    headline: (0, _extends2.default)({
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(32.5 / 24), "em"),
      color: palette.text.primary
    }, allVariants),
    title: (0, _extends2.default)({
      fontSize: pxToRem(21),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24.5 / 21), "em"),
      color: palette.text.primary
    }, allVariants),
    subheading: (0, _extends2.default)({
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24 / 16), "em"),
      color: palette.text.primary
    }, allVariants),
    body2: (0, _extends2.default)({
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24 / 14), "em"),
      color: palette.text.primary
    }, allVariants),
    body1: (0, _extends2.default)({
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(20.5 / 14), "em"),
      color: palette.text.primary
    }, allVariants),
    caption: (0, _extends2.default)({
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(16.5 / 12), "em"),
      color: palette.text.secondary
    }, allVariants),
    button: (0, _extends2.default)({
      fontSize: pxToRem(14),
      textTransform: 'uppercase',
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      color: palette.text.primary
    }, allVariants)
  };
  return (0, _deepmerge.default)((0, _extends2.default)({
    pxToRem: pxToRem,
    round: round,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium
  }, oldVariants, nextVariants, useNextVariants ? {
    body1: nextVariants.body1Next,
    body2: nextVariants.body2Next,
    button: nextVariants.buttonNext,
    caption: nextVariants.captionNext
  } : {}, {
    useNextVariants: useNextVariants
  }), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.memo") : 60115,
    r = b ? Symbol.for("react.lazy") : 60116;

function t(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case h:
                return a;

              default:
                return u;
            }

        }

      case r:
      case q:
      case d:
        return u;
    }
  }
}

function v(a) {
  return t(a) === m;
}

exports.typeOf = t;
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = r;
exports.Memo = q;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === typeof a && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
};

exports.isAsyncMode = function (a) {
  return v(a) || t(a) === l;
};

exports.isConcurrentMode = v;

exports.isContextConsumer = function (a) {
  return t(a) === k;
};

exports.isContextProvider = function (a) {
  return t(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return t(a) === n;
};

exports.isFragment = function (a) {
  return t(a) === e;
};

exports.isLazy = function (a) {
  return t(a) === r;
};

exports.isMemo = function (a) {
  return t(a) === q;
};

exports.isPortal = function (a) {
  return t(a) === d;
};

exports.isProfiler = function (a) {
  return t(a) === g;
};

exports.isStrictMode = function (a) {
  return t(a) === f;
};

exports.isSuspense = function (a) {
  return t(a) === p;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
}

var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _default = shadows;
exports.default = _default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shape = {
  borderRadius: 4
};
var _default = shape;
exports.default = _default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var spacing = {
  // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/design/layout/understanding-layout.html#pixel-density
  unit: 8
};
var _default = spacing;
exports.default = _default;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0; // We need to centralize the zIndex definitions as they work
// like global values in the browser.

var zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var _default = zIndex;
exports.default = _default;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

exports['default'] = jssGlobal;

var _jss = __webpack_require__(68);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';
    this.key = key;
    this.options = options;
    this.rules = new _jss.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], {
        selector: selector
      });
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style[propKey];
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;
    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;
    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports['default'] = getDynamicStyles;
/**
 * Extracts a styles object with only props that contain function values.
 */

function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */


var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;
      var index = sheets.indexOf(sheet);
      if (index !== -1) return index;
      sheets.push(sheet);
      refs.push(0);
      keys.push(key);
      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);

      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
        return;
      }

      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports['default'] = cloneStyle;

var _isObservable = __webpack_require__(70);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var isArray = Array.isArray;

function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style; // Support string value for SimpleRule.

  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  } // Support array for FontFaceRule.


  if (isArray(style)) return style.map(cloneStyle); // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.

  if ((0, _isObservable2['default'])(style)) return style;
  var newStyle = {};

  for (var name in style) {
    var value = style[name];

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }

    newStyle[name] = value;
  }

  return newStyle;
}

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof globalThis !== 'undefined') {
  root = globalThis;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(79)(module)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = globalThis.CSS;
var env = "production";
var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

exports['default'] = globalThis[ns]++;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _isInBrowser = __webpack_require__(43);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _StyleSheet = __webpack_require__(73);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _PluginsRegistry = __webpack_require__(111);

var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

var _rules = __webpack_require__(112);

var _rules2 = _interopRequireDefault(_rules);

var _observables = __webpack_require__(118);

var _observables2 = _interopRequireDefault(_observables);

var _functions = __webpack_require__(119);

var _functions2 = _interopRequireDefault(_functions);

var _sheets = __webpack_require__(51);

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__(25);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createGenerateClassName = __webpack_require__(72);

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _createRule2 = __webpack_require__(42);

var _createRule3 = _interopRequireDefault(_createRule2);

var _DomRenderer = __webpack_require__(120);

var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

var _VirtualRenderer = __webpack_require__(121);

var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.8.7";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])(); // eslint-disable-next-line prefer-spread

    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName; // $FlowFixMe

        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = options.index;

      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }

      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();

      _sheets2['default'].remove(sheet);

      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}; // Enable rule without name for inline styles.

      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      } // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow


      var ruleOptions = options;
      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        // Avoids applying same plugin twice, at least based on ref.
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);

          _this.plugins.use(plugin);
        }
      });
      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */

    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      } // $FlowFixMe


      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet); // $FlowFixMe

        rule.style = nextStyle;
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleRule = __webpack_require__(113);

var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

var _KeyframesRule = __webpack_require__(114);

var _KeyframesRule2 = _interopRequireDefault(_KeyframesRule);

var _ConditionalRule = __webpack_require__(115);

var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

var _FontFaceRule = __webpack_require__(116);

var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

var _ViewportRule = __webpack_require__(117);

var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']
  /**
   * Generate plugins which will register all rules.
   */

};
var plugins = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var RuleClass = classes[key];

  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new RuleClass(name, decl, options) : null;
  };

  return {
    onCreateRule: onCreateRule
  };
});
exports['default'] = plugins;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _RuleList = __webpack_require__(29);

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Rule for @keyframes
 */


var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        indent: 1
      };
      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _RuleList = __webpack_require__(29);

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Conditional rule for @media, @supports
 */


var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        indent: 1
      };
      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _toCss = __webpack_require__(50);

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _toCss = __webpack_require__(50);

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleRule = __webpack_require__(25);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__(42);

var _createRule2 = _interopRequireDefault(_createRule);

var _isObservable = __webpack_require__(70);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

    var style$ = decl;
    var rule = (0, _createRule2['default'])(name, {}, options); // TODO
    // Call `stream.subscribe()` returns a subscription, which should be explicitly
    // unsubscribed from when we know this sheet is no longer needed.

    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });
    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleList = __webpack_require__(29);

var _RuleList2 = _interopRequireDefault(_RuleList);

var _StyleRule = __webpack_require__(25);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__(42);

var _createRule2 = _interopRequireDefault(_createRule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
} // A symbol replacement.


var now = Date.now();
var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;
exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};

    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[prop] = value;
    }

    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    // It is a rules container like for e.g. ConditionalRule.
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }

    if (!(rule instanceof _StyleRule2['default'])) return;
    rule = rule; // If we have a fn values map, it is a rule with function values.

    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;
    var fnStyle = rule[fnStyleNs]; // If we have a style function, the entire rule is dynamic and style object
    // will be returned from that function.

    if (fnStyle) {
      var style = fnStyle(data);

      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _sheets = __webpack_require__(51);

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__(25);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _toCssValue = __webpack_require__(41);

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Cache the value from the first time a function is called.
 */


var memoize = function memoize(fn) {
  var value = void 0;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    cssRule.style.removeProperty(prop);
  } catch (err) {
    (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
  }
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7
  /**
   * Get the CSS Rule key.
   */

};

var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;

    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;
      if (name) return '@keyframes ' + name; // There is no rule.name in the following browsers:
      // - IE 9
      // - Safari 7.1.8
      // - Mobile Safari 9.0.0

      var cssText = cssRule.cssText;
      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    } // Conditionals.


    return extractKey(cssRule.cssText);
  };
}();
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 */


var getHead = memoize(function () {
  return document.head || document.getElementsByTagName('head')[0];
});
/**
 * Gets a map of rule keys, where the property is an unescaped key and value
 * is a potentially escaped one.
 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
 * and so CSS rule's `selectorText` won't match JSS rule selector.
 *
 * https://www.w3.org/International/questions/qa-escapes#cssescapes
 */

var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;
  return function (rules) {
    var map = {}; // https://github.com/facebook/flow/issues/2696

    if (!style) style = document.createElement('style');

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector; // Only unescape selector over CSSOM if it contains a back slash.

      if (selector && selector.indexOf('\\') !== -1) {
        // Lazilly attach when needed.
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }

        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;
          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }

    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }

    return map;
  };
}();
/**
 * Find attached sheet with an index higher than the passed one.
 */


function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = _sheets2['default'].registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element; // Otherwise insert after the last attached.

    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling; // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.

    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;
    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;
    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false; // There is no sheet when the renderer is used from a standalone StyleRule.

    if (sheet) _sheets2['default'].add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return; // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.

      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }
    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }
    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }
    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;
      var str = rule.toString();
      if (!index) index = cssRules.length;
      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }

      this.hasInsertedRules = true;
      return cssRules[index];
    }
    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }

      return -1;
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     */

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }
    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */


var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setProperty',
    value: function setProperty() {
      return true;
    }
  }, {
    key: 'getPropertyValue',
    value: function getPropertyValue() {
      return '';
    }
  }, {
    key: 'removeProperty',
    value: function removeProperty() {}
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
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

exports.default = jssNested;

var _warning = __webpack_require__(123);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, {
      index: options.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;
    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;

    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.
        );
        if (!replaceRef) replaceRef = getReplaceRef(container // Replace all $refs.
        );
        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        container // Place conditional right after the parent rule to ensure right ordering.
        .addRule(prop, null, options).addRule(rule.key, style[prop], {
          selector: rule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (false) {}

module.exports = warning;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelCase;

var _hyphenateStyleName = __webpack_require__(125);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */


function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
  return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports['default'] = defaultUnit;

var _defaultUnits = __webpack_require__(127);

var _defaultUnits2 = _interopRequireDefault(_defaultUnits);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Clones the object and adds a camel cased property version.
 */


function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }

  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);
/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */

function iterate(prop, value, options) {
  if (!value) return value;
  var convertedValue = value;
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }

        break;
      }

      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }

      break;

    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }

      break;

    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }

      break;

    default:
      break;
  }

  return convertedValue;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generated jss-default-unit CSS property units
 *
 * @type object
 */

exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',
  // Not existing properties.
  // Used to avoid issues with jss-expand intergration.
  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;

var _cssVendor = __webpack_require__(129);

var vendor = _interopRequireWildcard(_cssVendor);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}
/**
 * Add vendor prefix to a property name when needed.
 *
 * @param {Rule} rule
 * @api public
 */


function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];
      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

var _prefix = __webpack_require__(52);

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__(130);

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__(132);

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
};
/**
 * CSS Vendor prefix detection and property feature testing.
 *
 * @copyright Oleg Slobodskoi 2015
 * @website https://github.com/jsstyles/css-vendor
 * @license MIT
 */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__(43);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__(52);

var _prefix2 = _interopRequireDefault(_prefix);

var _camelize = __webpack_require__(131);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');
  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop) {
  // For server-side rendering.
  if (!el) return prop; // We have not tested this prop yet, lets do the test.

  if (cache[prop] != null) return cache[prop]; // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.

  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  } // Test if property is supported with vendor prefix.
  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;
/**
 * Convert dash separated strings to camel cased.
 *
 * @param {String} str
 * @return {String}
 */

function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__(43);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__(52);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var cache = {};
var el = void 0;
if (_isInBrowser2['default']) el = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.

  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;
  var cacheKey = property + value;
  if (cache[cacheKey] != null) return cache[cacheKey]; // IE can even throw an error in some cases, for e.g. style.content = 'bar'

  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  } // Value is supported as it is.


  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    // Test value with vendor prefix.
    value = _prefix2['default'].css + value; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (value === '-ms-flex') value = '-ms-flexbox';
    el.style[property] = value; // Value is supported with vendor prefix.

    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false; // Reset style value.

  el.style[property] = '';
  return cache[cacheKey];
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;
/**
 * Sort props by length.
 */

function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var newStyle = {};
    var props = Object.keys(style).sort(sort);

    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }

    return newStyle;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(137);

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };
  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createBroadcast(initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState() {
    return _state;
  }

  function setState(state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;

    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) {
        listeners[keys[i]](state);
      }
    }
  } // subscribe to changes and return the subscriptionId


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.');
    }

    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId;
  } // remove subscription by removing the listener function


  function unsubscribe(id) {
    listeners[id] = undefined;
  }

  return {
    getState: getState,
    setState: setState,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createBroadcast);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

function createStyles(styles) {
  return styles;
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0; // Share the same values than in
// https://github.com/cssinjs/jss/blob/master/packages/react-jss/src/ns.js

var ns = {
  jss: '64a55d578f856d258dc345b094a2a2b3',
  sheetsRegistry: 'd4bd0baacbc52bbd48bbb9eb24344ecd',
  sheetOptions: '6fc570d6bd61383819d0f9e7407c452d'
};
var _default = ns;
exports.default = _default;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _utils = __webpack_require__(23);

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = (0, _extends2.default)({}, baseClasses);
  Object.keys(newClasses).forEach(function (key) {
    if (Component) {
       false ? undefined : void 0;
       false ? undefined : void 0;
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

var _default = mergeClasses;
exports.default = _default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0; // Used https://github.com/thinkloop/multi-key-cache as inspiration

var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
var _default = multiKeyStore;
exports.default = _default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _typeof2 = _interopRequireDefault(__webpack_require__(47));

var _warning = _interopRequireDefault(__webpack_require__(11));

var _deepmerge = _interopRequireDefault(__webpack_require__(40)); // < 1kb payload overhead when lodash/merge is > 3kb.
// Support for the jss-expand plugin.


function arrayMerge(destination, source) {
  return source;
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';
   false ? undefined : void 0;

  function create(theme, name) {
    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

    if (!name || !theme.overrides || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _extends2.default)({}, styles);
    Object.keys(overrides).forEach(function (key) {
       false ? undefined : void 0;
      stylesWithOverrides[key] = (0, _deepmerge.default)(stylesWithOverrides[key], overrides[key], {
        arrayMerge: arrayMerge
      });
    });
    return stylesWithOverrides;
  }

  return {
    create: create,
    options: {},
    themingEnabled: themingEnabled
  };
}

var _default = getStylesCreator;
exports.default = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* eslint-disable no-restricted-syntax */

function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme.props || !name || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

var _default = getThemeProps;
exports.default = _default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this || typeof self === "object" && self;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(146);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
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


  runtime.awrap = function (arg) {
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

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
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

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
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
        if (delegate.iterator.return) {
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

  runtime.keys = function (object) {
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

  runtime.values = values;

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
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || typeof self === "object" && self;
}() || Function("return this")());

/***/ }),
/* 147 */
/***/ (function(module, exports) {

// // 
// import { getSnoozedTabs, STORAGE_KEY_BACKUPS } from './storage';
// window.tabSnoozeDebug_printTabs = async function() {
//   const tabs = await getSnoozedTabs();
//   console.log('## Snoozed Tabs ##');
//   tabs.forEach((tab, index) =>
//     console.log(
//       `${index}.\t${tab.title}\n\t${new Date(tab.when).toString()}`
//     )
//   );
// };
// // For debugging, backing up whole storage
// window.tabSnoozeDebug_createStorageBackup = async function(
//   backupName: string
// ) {
//   const localStorageCopy = await chrome.storage.local.get();
//   const syncStorageCopy = await chrome.storage.sync.get();
//   // get current backups
//   const backups = localStorageCopy[STORAGE_KEY_BACKUPS] || {};
//   // don't backup the backups
//   delete localStorageCopy[STORAGE_KEY_BACKUPS];
//   // Add storageToBackup to backups
//   backups[backupName] = {
//     local: localStorageCopy,
//     sync: syncStorageCopy,
//   };
//   await chrome.storage.local.set({ [STORAGE_KEY_BACKUPS]: backups });
//   console.log(`Backup complete to "${backupName}"`);
// };
// window.tabSnoozeDebug_restoreStorageBackup = async function(
//   backupName: string
// ) {
//   // restore an exact snapshot of the backup as it was,
//   // so reset whatever is there right now, before restoring
//   await resetStorage();
//   const { backups } = await chrome.storage.local.get(
//     STORAGE_KEY_BACKUPS
//   );
//   const requestedBackup = backups[backupName];
//   if (!requestedBackup) {
//     throw new Error('Couldnt find a backup with that name');
//   }
//   await chrome.storage.local.set(requestedBackup.local);
//   await chrome.storage.sync.set(requestedBackup.sync);
//   console.log(`Backup "${backupName}" restored`);
// };
// async function resetStorage() {
//   // pull backups to the side
//   const { backups } = await chrome.storage.local.get(
//     STORAGE_KEY_BACKUPS
//   );
//   // wipe out storage
//   await chrome.storage.local.clear();
//   await chrome.storage.sync.clear();
//   // push backups back
//   await chrome.storage.local.set({ [STORAGE_KEY_BACKUPS]: backups });
//   console.log('Storage was reset');
// }
// window.tabSnoozeDebug_resetStorage = resetStorage;
// window.tabSnoozeDebug_deleteAllBackups = async function() {
//   await chrome.storage.local.remove(STORAGE_KEY_BACKUPS);
//   console.log('Backups deleted');
// };
// window.tabSnoozeDebug_printStorage = async function() {
//   const localStorage = await chrome.storage.local.get();
//   const syncStorage = await chrome.storage.sync.get();
//   console.log('localStorage: ', localStorage);
//   console.log('syncStorage: ', syncStorage);
// };

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(149);

var iterableToArrayLimit = __webpack_require__(150);

var nonIterableRest = __webpack_require__(151);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 150 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
    return "%".concat(x.charCodeAt(0).toString(16).toUpperCase());
  });
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return decodeURIComponent(components.join(''));
  } catch (err) {// Do nothing
  }

  if (components.length === 1) {
    return components;
  }

  split = split || 1; // Split the array in 2 parts

  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher);

    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher);
    }

    return input;
  }
}

function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  var replaceMap = {
    '%FE%FF': "\uFFFD\uFFFD",
    '%FF%FE': "\uFFFD\uFFFD"
  };
  var match = multiMatcher.exec(input);

  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);

      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }

    match = multiMatcher.exec(input);
  } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


  replaceMap['%C2'] = "\uFFFD";
  var entries = Object.keys(replaceMap);

  for (var i = 0; i < entries.length; i++) {
    // Replace all decoded components
    var key = entries[i];
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }

  return input;
}

module.exports = function (encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
  }

  try {
    encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

    return decodeURIComponent(encodedURI);
  } catch (err) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;

(function (root) {
  /** Detect free variables */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule = typeof module == 'object' && module && !module.nodeType && module;
  var freeGlobal = typeof globalThis == 'object' && globalThis;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */


  var punycode,

  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647,
      // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      // 0x80
  delimiter = '-',
      // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },

  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,

  /** Temporary variable */
  key;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var length = array.length;
    var result = [];

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;

    while (counter < length) {
      value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';

      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }

      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }

    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }

    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }

    return base;
  }
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (;
    /* no initialization */
    delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,

    /** Cached calculation results */
    baseMinusT; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;)
    /* no final expression */
    {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base;;
      /* no condition */
      k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output

      output.splice(i++, 0, n);
    }

    return ucs2encode(output);
  }
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],

    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,

    /** Cached calculation results */
    handledCPCountPlusOne,
        baseMinusT,
        qMinusT; // Convert the input in UCS-2 to Unicode

    input = ucs2decode(input); // Cache the length

    inputLength = input.length; // Initialize the state

    n = initialN;
    delta = 0;
    bias = initialBias; // Handle the basic code points

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow


      handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base;;
          /* no condition */
          k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

            if (q < t) {
              break;
            }

            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  }
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.4.1',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return punycode;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(61)(module)))

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(157);
exports.encode = exports.stringify = __webpack_require__(158);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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
 // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

/***/ })
/******/ ]);
// [dev-reload] fork: auto-reload when loaded unpacked and dev-reload.txt changes.
// Written by scripts/reload.sh (also run by the git post-commit hook).
// Inert for store installs (installType !== 'development').
;(function(){var DEV_RELOAD_ALARM='DEV_RELOAD_ALARM';var STAMP_KEY='devReloadStamp';
function checkStamp(){return fetch(chrome.runtime.getURL('dev-reload.txt'),{cache:'no-store'}).then(function(r){return r.ok?r.text():null;}).then(function(stamp){if(stamp==null)return;return chrome.storage.session.get(STAMP_KEY).then(function(o){var prev=o[STAMP_KEY];if(prev==null){return chrome.storage.session.set({[STAMP_KEY]:stamp});}if(prev!==stamp){console.log('[dev-reload] change detected, reloading extension');return chrome.storage.session.set({[STAMP_KEY]:stamp}).then(function(){chrome.runtime.reload();});}});}).catch(function(){});}
chrome.alarms.onAlarm.addListener(function(alarm){if(alarm.name===DEV_RELOAD_ALARM)checkStamp();});
chrome.management.getSelf().then(function(self){if(self.installType!=='development'){chrome.alarms.clear(DEV_RELOAD_ALARM);return;}chrome.alarms.get(DEV_RELOAD_ALARM).then(function(a){if(!a)chrome.alarms.create(DEV_RELOAD_ALARM,{periodInMinutes:0.05});});checkStamp();}).catch(function(){});})();
//# sourceMappingURL=background.js.map
