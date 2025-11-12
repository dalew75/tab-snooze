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
/******/ 	return __webpack_require__(__webpack_require__.s = 230);
/******/ })
/************************************************************************/
/******/ ({

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
console.log("Offscreen script loaded");// TODO 
// someone make it so that offscreen.html shows up properly
// Add message listener
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){console.log('Received message:',request);console.log('Sender:',sender);if(request.action==='playAudio'){Object(_audio__WEBPACK_IMPORTED_MODULE_0__[/* playAudio */ "d"])(request.sound);sendResponse({success:true});}});

/***/ }),

/***/ 32:
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

/***/ })

/******/ });
//# sourceMappingURL=offscreen.js.map