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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meeting_6/creating-lamps.js":
/*!*****************************************!*\
  !*** ./src/meeting_6/creating-lamps.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//function of creating some quantity of lamps
var createBlock = function createBlock(quantity) {
  for (var i = 0; i < quantity; i++) {
    var lamp = document.createElement("button");
    lamp.className = "lamp-element";
    document.body.append(lamp);
  }
}; //function of asking of User: how many lamps he wants to create


var quantityOfElements = function quantityOfElements() {
  return parseInt(prompt("Enter a quantity of the lamps", "0"));
}; //creating needed quantity of lamps


var quantityElem = quantityOfElements();
createBlock(quantityElem);

var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
};

var getRandomColor = function getRandomColor() {
  return "rgb(\n      ".concat(getRandomNumber(255), ", \n      ").concat(getRandomNumber(255), ", \n      ").concat(getRandomNumber(255), ")");
};

var randomColor = getRandomColor(); //creating onclick event on the every lamp

var singleLamp = document.querySelectorAll(".lamp-element");

var _loop = function _loop(i) {
  singleLamp[i].onclick = function () {
    var randomColor = getRandomColor();
    singleLamp[i].style.backgroundColor = randomColor;
    singleLamp[i].style.transition = "all 0.5s";
  };
};

for (var i = 0; i < quantityElem; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/meeting_6/meeting_6.js":
/*!************************************!*\
  !*** ./src/meeting_6/meeting_6.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meeting_6_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting_6.scss */ "./src/meeting_6/meeting_6.scss");
/* harmony import */ var _meeting_6_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meeting_6_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _creating_lamps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creating-lamps */ "./src/meeting_6/creating-lamps.js");
/* harmony import */ var _creating_lamps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_creating_lamps__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/meeting_6/meeting_6.scss":
/*!**************************************!*\
  !*** ./src/meeting_6/meeting_6.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** multi ./src/meeting_6/meeting_6.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/meeting_6/meeting_6.js */"./src/meeting_6/meeting_6.js");


/***/ })

/******/ });
//# sourceMappingURL=meeting_6.js.map