(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lesson_16~lesson_16"],{

/***/ "./src/common/button/button.js":
/*!*************************************!*\
  !*** ./src/common/button/button.js ***!
  \*************************************/
/*! exports provided: createButton, Button, RoundButton, LinkButton, FakeRoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return RoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return RoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return FakeRoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return FakeRoundButton; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/common/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return RoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return RoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return FakeRoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return FakeRoundButton; });
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var createButton = function createButton() {
  var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var title = arguments.length > 1 ? arguments[1] : undefined;
  var onClick = arguments.length > 2 ? arguments[2] : undefined;
  var color = arguments.length > 3 ? arguments[3] : undefined;
  var button = document.createElement("button");
  button.onclick = onClick;
  button.textContent = title;
  button.classList.add("btn");

  if (color === "success") {
    button.classList.add("btn_success");
  }

  mountPoint.appendChild(button);
};

var Button =
/*#__PURE__*/
function () {
  function Button() {
    var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
    var title = arguments.length > 1 ? arguments[1] : undefined;
    var onClick = arguments.length > 2 ? arguments[2] : undefined;
    var color = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Button);

    this.mountPoint = mountPoint;
    this.title = title;
    this.onClick = onClick;
    this.color = color;
    this.el = document.createElement("button");
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.el.onclick = this.onClick;
      this.el.textContent = this.title;
      this.el.classList.add("btn");
      this.el.style.backgroundColor = this.color;
      this.mountPoint.appendChild(this.el);
    }
  }]);

  return Button;
}();

var LinkButton =
/*#__PURE__*/
function (_Button) {
  _inherits(LinkButton, _Button);

  function LinkButton() {
    var _this;

    var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
    var title = arguments.length > 1 ? arguments[1] : undefined;
    var onClick = arguments.length > 2 ? arguments[2] : undefined;
    var color = arguments.length > 3 ? arguments[3] : undefined;
    var href = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, LinkButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkButton).call(this, mountPoint, title, onClick, color));
    _this.href = href;
    _this.el = document.createElement("a");
    return _this;
  }

  return LinkButton;
}(Button);

var RoundButton =
/*#__PURE__*/
function (_Button2) {
  _inherits(RoundButton, _Button2);

  function RoundButton() {
    _classCallCheck(this, RoundButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundButton).apply(this, arguments));
  }

  _createClass(RoundButton, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(RoundButton.prototype), "render", this).call(this);

      this.el.classList.add("btn_rounded");
      console.log(this.el);
    }
  }]);

  return RoundButton;
}(Button);

var FakeRoundButton =
/*#__PURE__*/
function (_RoundButton) {
  _inherits(FakeRoundButton, _RoundButton);

  function FakeRoundButton() {
    _classCallCheck(this, FakeRoundButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(FakeRoundButton).apply(this, arguments));
  }

  _createClass(FakeRoundButton, [{
    key: "hello",
    value: function hello() {
      console.log("Hello!");
    }
  }]);

  return FakeRoundButton;
}(RoundButton);



/***/ }),

/***/ "./src/common/button/button.scss":
/*!***************************************!*\
  !*** ./src/common/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\common\\button\\button.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ "./src/common/button/index.js":
/*!************************************!*\
  !*** ./src/common/button/index.js ***!
  \************************************/
/*! exports provided: createButton, Button, RoundButton, LinkButton, FakeRoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/common/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["createButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["RoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["LinkButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["FakeRoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["createButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["RoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["LinkButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["FakeRoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["createButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["RoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["LinkButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["FakeRoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["createButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["RoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["LinkButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["FakeRoundButton"]; });



/***/ }),

/***/ "./src/lesson_16/lesson_16.js":
/*!************************************!*\
  !*** ./src/lesson_16/lesson_16.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16.scss */ "./src/lesson_16/lesson_16.scss");
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/button */ "./src/common/button/index.js");


var loginButton = new _common_button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector("body"), "Log in", function () {
  prompt("Enter username");
}, "success");
var cancelButton = new _common_button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector("body"), "Log in", function () {
  prompt("Enter username");
}, "danger");

/***/ }),

/***/ "./src/lesson_16/lesson_16.scss":
/*!**************************************!*\
  !*** ./src/lesson_16/lesson_16.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\lesson_16\\lesson_16.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ 18:
/*!******************************************!*\
  !*** multi ./src/lesson_16/lesson_16.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16/lesson_16.js */"./src/lesson_16/lesson_16.js");


/***/ })

}]);
//# sourceMappingURL=lesson_16~lesson_16.chunkhash.js.map