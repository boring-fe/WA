(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clock~clock"],{

/***/ "./src/clock/clock.js":
/*!****************************!*\
  !*** ./src/clock/clock.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock.scss */ "./src/clock/clock.scss");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/clock */ "./src/common/clock/index.js");


var clock = _common_clock__WEBPACK_IMPORTED_MODULE_1__["Clock"].create(document.querySelector(".clock-container"));

/***/ }),

/***/ "./src/clock/clock.scss":
/*!******************************!*\
  !*** ./src/clock/clock.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\clock\\clock.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ "./src/common/clock/clock.js":
/*!***********************************!*\
  !*** ./src/common/clock/clock.js ***!
  \***********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/common/utils/index.js");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.scss */ "./src/common/clock/clock.scss");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MODES = {
  SHORT: 0,
  FULL: 1,
  DATE_SHORT: 2
};
var Clock =
/*#__PURE__*/
function () {
  _createClass(Clock, null, [{
    key: "create",
    value: function create(mp) {
      var clock = new Clock(mp);
      clock.init();
      return clock;
    }
  }]);

  function Clock() {
    var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, Clock);

    this.mp = mp;
    this.mode = MODES.FULL;
  }

  _createClass(Clock, [{
    key: "init",
    value: function init() {
      this.render();
      this.updateContent();
      this.initInterval();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.container = document.createElement("div");
      this.content = document.createElement("div");
      this.container.classList.add("container");
      this.content.classList.add("content");
      this.container.appendChild(this.content);
      this.container.addEventListener("click", function () {
        _this.nextMode();
      });
      this.mp.appendChild(this.container);
      this.changeBg();
    }
  }, {
    key: "changeBg",
    value: function changeBg() {
      this.container.style.backgroundColor = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomColor"])Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomColor"])();
    }
  }, {
    key: "nextMode",
    value: function nextMode() {
      if (this.mode + 1 < Object.keys(MODES).length) {
        this.mode += 1;
      } else {
        this.mode = 0;
      }

      this.changeBg();
      this.updateContent();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var cd = new Date();
      var hour = this.normalizeTime(cd.getHours());
      var minute = this.normalizeTime(cd.getMinutes());
      var second = this.normalizeTime(cd.getSeconds());
      var day = this.normalizeTime(cd.getDay());
      var month = cd.getMonth();
      var year = cd.getFullYear();
      return {
        hour: hour,
        minute: minute,
        second: second,
        day: day,
        month: month,
        year: year
      };
    }
  }, {
    key: "renderFull",
    value: function renderFull() {
      var _this$getDate = this.getDate(),
          hour = _this$getDate.hour,
          minute = _this$getDate.minute,
          second = _this$getDate.second;

      this.content.textContent = "".concat(hour, ":").concat(minute, ":").concat(second);
    }
  }, {
    key: "renderShort",
    value: function renderShort() {
      var _this$getDate2 = this.getDate(),
          hour = _this$getDate2.hour,
          minute = _this$getDate2.minute;

      this.content.textContent = "".concat(hour, ":").concat(minute);
    }
  }, {
    key: "renderDateShort",
    value: function renderDateShort() {
      var _this$getDate3 = this.getDate(),
          day = _this$getDate3.day,
          month = _this$getDate3.month,
          year = _this$getDate3.year;

      this.content.textContent = "".concat(day, "/").concat(month, "/").concat(year);
    }
  }, {
    key: "initInterval",
    value: function initInterval() {
      var _this2 = this;

      setInterval(function () {
        _this2.updateContent();
      }, 1000);
    }
  }, {
    key: "updateContent",
    value: function updateContent() {
      switch (this.mode) {
        case MODES.FULL:
          this.renderFull();
          break;

        case MODES.DATE_SHORT:
          this.renderDateShort();
          break;

        default:
          this.renderShort();
      }
    }
  }, {
    key: "normalizeTime",
    value: function normalizeTime(time) {
      return time < 10 ? "0" + time : time;
    }
  }]);

  return Clock;
}();

/***/ }),

/***/ "./src/common/clock/clock.scss":
/*!*************************************!*\
  !*** ./src/common/clock/clock.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\common\\clock\\clock.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ "./src/common/clock/index.js":
/*!***********************************!*\
  !*** ./src/common/clock/index.js ***!
  \***********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/common/clock/clock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _clock__WEBPACK_IMPORTED_MODULE_0__["Clock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _clock__WEBPACK_IMPORTED_MODULE_0__["Clock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _clock__WEBPACK_IMPORTED_MODULE_0__["Clock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _clock__WEBPACK_IMPORTED_MODULE_0__["Clock"]; });



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

/***/ 22:
/*!**********************************!*\
  !*** multi ./src/clock/clock.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/clock/clock.js */"./src/clock/clock.js");


/***/ })

}]);
//# sourceMappingURL=clock~clock.chunkhash.js.map