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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_12_1/lesson_12_1.js":
/*!****************************************!*\
  !*** ./src/lesson_12_1/lesson_12_1.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_1_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12_1.scss */ "./src/lesson_12_1/lesson_12_1.scss");
/* harmony import */ var _lesson_12_1_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_1_scss__WEBPACK_IMPORTED_MODULE_0__);

var controlButton = document.querySelector(".traffic-lights__control-button");
var red_lamp = document.getElementById("red_lamp");

controlButton.onclick = function () {
  console.log("asdasdas");
};

var lightButtons = document.querySelectorAll(".traffic-lights__lamp");
var redButton = document.querySelector(".traffic-lights__lamp_red");
var yellowButton = document.querySelector(".traffic-lights__lamp_yellow");
var greenButton = document.querySelector(".traffic-lights__lamp_green");

function clearColors() {
  redButton.style.backgroundColor = "rgb(39, 34, 34)";
  yellowButton.style.backgroundColor = "rgb(39, 34, 34)";
  greenButton.style.backgroundColor = "rgb(39, 34, 34)";
}

redButton.setAttribute("data-is-active", true);
yellowButton.setAttribute("data-is-active", true);
greenButton.setAttribute("data-is-active", true);
console.log(redButton.getAttribute("data-is-active"));

redButton.onclick = function () {
  if (redButton.getAttribute("data-is-active")) {
    clearColors();
    redButton.style.backgroundColor = "red";
  }
};

yellowButton.onclick = function () {
  if (yellowButton.getAttribute("data-is-active")) {
    clearColors();
    yellowButton.style.backgroundColor = "yellow";
  }
};

greenButton.onclick = function () {
  if (greenButton.getAttribute("data-is-active")) {
    clearColors();
    greenButton.style.backgroundColor = "green";
  }
};

controlButton.onclick = function () {
  clearColors();
  redButton.removeAttribute("data-is-active", "false");
  yellowButton.removeAttribute("data-is-active", "false");
  greenButton.removeAttribute("data-is-active", "false");
};

/***/ }),

/***/ "./src/lesson_12_1/lesson_12_1.scss":
/*!******************************************!*\
  !*** ./src/lesson_12_1/lesson_12_1.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./src/lesson_12_1/lesson_12_1.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_12_1/lesson_12_1.js */"./src/lesson_12_1/lesson_12_1.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_12_1.js.map