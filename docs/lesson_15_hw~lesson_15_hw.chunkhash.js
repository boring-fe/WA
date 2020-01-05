(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lesson_15_hw~lesson_15_hw"],{

/***/ "./src/common/garland/garland.js":
/*!***************************************!*\
  !*** ./src/common/garland/garland.js ***!
  \***************************************/
/*! exports provided: Garland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return Garland; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return Garland; });
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lamp */ "./src/common/lamp/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return Garland; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return Garland; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Garland =
/*#__PURE__*/
function () {
  function Garland(mountPoint) {
    var lampsCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

    _classCallCheck(this, Garland);

    this.mountPoint = mountPoint;
    this.lampsCount = lampsCount;
    this.time = time;
  } // render() {}


  _createClass(Garland, [{
    key: "renderLights",
    value: function renderLights() {
      for (var i = 0; i < this.lampsCount; i++) {
        var lamp = new _lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"]_lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"](this.mountPoint);
        lamp.render();
      }
    }
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      this.el.style.background = this.color;
      this.active = true;
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      this.el.style.background = "";
      this.active = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.toggleOff();
      } else {
        this.toggleOn();
      }
    }
  }]);

  return Garland;
}();

/***/ }),

/***/ "./src/common/garland/index.js":
/*!*************************************!*\
  !*** ./src/common/garland/index.js ***!
  \*************************************/
/*! exports provided: Garland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _garland__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garland */ "./src/common/garland/garland.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return _garland__WEBPACK_IMPORTED_MODULE_0__["Garland"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return _garland__WEBPACK_IMPORTED_MODULE_0__["Garland"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return _garland__WEBPACK_IMPORTED_MODULE_0__["Garland"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Garland", function() { return _garland__WEBPACK_IMPORTED_MODULE_0__["Garland"]; });



/***/ }),

/***/ "./src/common/lamp/index.js":
/*!**********************************!*\
  !*** ./src/common/lamp/index.js ***!
  \**********************************/
/*! exports provided: Lamp, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp */ "./src/common/lamp/lamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "./src/common/lamp/lamp.js":
/*!*********************************!*\
  !*** ./src/common/lamp/lamp.js ***!
  \*********************************/
/*! exports provided: Lamp, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp.scss */ "./src/common/lamp/lamp.scss");
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lamp_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/common/utils/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Lamp =
/*#__PURE__*/
function () {
  function Lamp(mountPoint) {
    _classCallCheck(this, Lamp);

    this.mountPoint = mountPoint;
    this.color = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["getRandomColor"])Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["getRandomColor"])();
    this.isActive = false; // console.log(this);
  }

  _createClass(Lamp, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.el = document.createElement("button");
      this.el.classList.add("lamp");
      this.el.addEventListener("click", function () {
        _this.toggle();
      });
      this.mountPoint.appendChild(this.el);
    }
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      this.el.style.background = this.color;
      this.active = true;
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      this.el.style.background = "";
      this.active = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.toggleOff();
      } else {
        this.toggleOn();
      }
    }
  }]);

  return Lamp;
}();
var Button =
/*#__PURE__*/
function () {
  function Button() {
    var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
    var title = arguments.length > 1 ? arguments[1] : undefined;
    var onClick = arguments.length > 2 ? arguments[2] : undefined;
    var type = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Button);

    this.mountPoint = mountPoint;
    this.title = title;
    this.onclick = onclick;
    this.type = type;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.el = document.createElement("button");
      this.el.onclick = this.onclick;
      this.el.textContent = this.title;
      this.el.classList.add("btn");

      if (this.type === "success") {
        this.el.classList.add("btn_success");
      }

      this.mountPoint.appendChild(this.el);
    }
  }]);

  return Button;
}();

/***/ }),

/***/ "./src/common/lamp/lamp.scss":
/*!***********************************!*\
  !*** ./src/common/lamp/lamp.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\common\\lamp\\lamp.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ "./src/common/utils/index.js":
/*!***********************************!*\
  !*** ./src/common/utils/index.js ***!
  \***********************************/
/*! exports provided: getRandomNumber, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
};
var getRandomColor = function getRandomColor() {
  return "rgb(".concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ")");
};

/***/ }),

/***/ "./src/lesson_15_hw/lesson_15_hw.js":
/*!******************************************!*\
  !*** ./src/lesson_15_hw/lesson_15_hw.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_15_hw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_15_hw.scss */ "./src/lesson_15_hw/lesson_15_hw.scss");
/* harmony import */ var _lesson_15_hw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_15_hw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_lamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/lamp */ "./src/common/lamp/index.js");
/* harmony import */ var _common_garland__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/garland */ "./src/common/garland/index.js");



var mp = document.querySelector("body");
var garland = new _common_garland__WEBPACK_IMPORTED_MODULE_2__["Garland"](mp);
garland.renderLights(); // const lamps = [];
// for (let i = 0; i < 50; i++) {
//   const lamp = new Lamp(mp);
//   lamp.render();
//   lamps.push(lamp);
// }
// window.lamps = lamps;

/***/ }),

/***/ "./src/lesson_15_hw/lesson_15_hw.scss":
/*!********************************************!*\
  !*** ./src/lesson_15_hw/lesson_15_hw.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\lesson_15_hw\\lesson_15_hw.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ 18:
/*!************************************************!*\
  !*** multi ./src/lesson_15_hw/lesson_15_hw.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_15_hw/lesson_15_hw.js */"./src/lesson_15_hw/lesson_15_hw.js");


/***/ })

}]);
//# sourceMappingURL=lesson_15_hw~lesson_15_hw.chunkhash.js.map