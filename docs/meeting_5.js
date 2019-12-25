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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meeting_5/button-dynamic.js":
/*!*****************************************!*\
  !*** ./src/meeting_5/button-dynamic.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btn = document.createElement("button");
console.log(btn);
btn.style.background = "red";
btn.textContent = "Call button!";
var body = document.querySelector("body");
body.appendChild(btn);

/***/ }),

/***/ "./src/meeting_5/meeting_5.js":
/*!************************************!*\
  !*** ./src/meeting_5/meeting_5.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meeting_5_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting_5.scss */ "./src/meeting_5/meeting_5.scss");
/* harmony import */ var _meeting_5_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meeting_5_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-dynamic */ "./src/meeting_5/button-dynamic.js");
/* harmony import */ var _button_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_dynamic__WEBPACK_IMPORTED_MODULE_1__);

 //------------------------------------------------------
//function of creating some quantity of lamps

var createBlock = function createBlock(quantity) {
  for (var i = 0; i < quantity; i++) {
    var div = document.createElement("div");
    div.className = "block";
    document.body.append(div);
  }
}; //function of asking of User: how many lamps he wants to create


var quantityOfElements = function quantityOfElements() {
  return parseInt(prompt("Enter a quantity of the lamps", "0"));
}; //creating needed quantity of lamps


var quantityElem = quantityOfElements();
createBlock(quantityElem);
var lamp = document.querySelectorAll("div.block");
console.log(lamp); //functions of creating random color like rgb(0..255, 0..255, 0..255)

function randomNumber255() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return "rgb(".concat(randomNumber255(), ", ").concat(randomNumber255(), ", ").concat(randomNumber255(), ")");
} //assign a random color to the lamps


var lamp1 = document.querySelectorAll("div.block");

for (var i = 0; i < lamp1.length; i++) {
  var randomColor = getRandomColor();
  console.log(getRandomColor());
  lamp1[i].style.backgroundColor = "randomColor"; //The problem is: the color doesn't assigns to the element.
}

/***/ }),

/***/ "./src/meeting_5/meeting_5.scss":
/*!**************************************!*\
  !*** ./src/meeting_5/meeting_5.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./src/meeting_5/meeting_5.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/meeting_5/meeting_5.js */"./src/meeting_5/meeting_5.js");


/***/ })

/******/ });
//# sourceMappingURL=meeting_5.js.map