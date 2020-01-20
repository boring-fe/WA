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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meeting_7_hw/meeting_7_hw.js":
/*!******************************************!*\
  !*** ./src/meeting_7_hw/meeting_7_hw.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meeting_7_hw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting_7_hw.scss */ "./src/meeting_7_hw/meeting_7_hw.scss");
/* harmony import */ var _meeting_7_hw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meeting_7_hw_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var myDropDown =
/*#__PURE__*/
function () {
  function myDropDown() {
    var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, myDropDown);

    this.mp = mp;
    this.arr = arr;
  }

  _createClass(myDropDown, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.container = document.createElement("div");
      this.container.classList.add("dropdown");
      this.mp.appendChild(this.container);
      this.button = document.createElement("button");
      this.button.classList.add("dropbtn");
      this.button.innerHTML = "Title of dropdown";
      this.container.appendChild(this.button);
      this.container_2 = document.createElement("ul");
      this.container_2.classList.add("dropdown-content");
      this.container.appendChild(this.container_2);

      for (var i = 0; i < arr.length; i++) {
        this.renderItems(arr, i);
      }

      this.button.addEventListener("click", function () {
        _this.container_2.classList.toggle("show");
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems(arr, i) {
      var _this2 = this;

      var currentElement = arr[i];
      this.currentElement = document.createElement("li");
      this.currentElement.innerHTML = currentElement;
      this.container_2.appendChild(this.currentElement);
      this.currentElement.addEventListener("click", function () {
        _this2.button.innerHTML = currentElement;
      });
    }
  }]);

  return myDropDown;
}();

var newDropDown = new myDropDown();
var arr = ["Home", "About", "Contact", "Career", "Customer support", "Our projects"];
newDropDown.render(arr);

/***/ }),

/***/ "./src/meeting_7_hw/meeting_7_hw.scss":
/*!********************************************!*\
  !*** ./src/meeting_7_hw/meeting_7_hw.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!************************************************!*\
  !*** multi ./src/meeting_7_hw/meeting_7_hw.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/meeting_7_hw/meeting_7_hw.js */"./src/meeting_7_hw/meeting_7_hw.js");


/***/ })

/******/ });
//# sourceMappingURL=meeting_7_hw.js.map