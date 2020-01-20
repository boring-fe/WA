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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ajax/ajax.js":
/*!**************************!*\
  !*** ./src/ajax/ajax.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/feed */ "./src/common/feed/index.js");
/* harmony import */ var _ajax_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax.scss */ "./src/ajax/ajax.scss");
/* harmony import */ var _ajax_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ajax_scss__WEBPACK_IMPORTED_MODULE_1__);


new _common_feed__WEBPACK_IMPORTED_MODULE_0__["Feed"]();

/***/ }),

/***/ "./src/ajax/ajax.scss":
/*!****************************!*\
  !*** ./src/ajax/ajax.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/feed/feed.js":
/*!*********************************!*\
  !*** ./src/common/feed/feed.js ***!
  \*********************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony import */ var _feed_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.scss */ "./src/common/feed/feed.scss");
/* harmony import */ var _feed_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_feed_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/common/feed/post.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Feed =
/*#__PURE__*/
function () {
  function Feed() {
    var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, Feed);

    this.mountPoint = mountPoint;
    this.posts = [];
    this.init();
  }

  _createClass(Feed, [{
    key: "init",
    value: function init() {
      this.render();
      this.fetchPosts();
    }
  }, {
    key: "render",
    value: function render() {
      this.wrapper = document.createElement("div");
      this.wrapper.classList.add("feed");
      this.wrapper.textContent = "Loading...";
      this.mountPoint.appendChild(this.wrapper);
    }
  }, {
    key: "renderPosts",
    value: function renderPosts() {
      var _this = this;

      this.posts.forEach(function (post) {
        console.log(post);
        new _post__WEBPACK_IMPORTED_MODULE_1__["Post"](_this.wrapper, post);
      });
    }
  }, {
    key: "fetchPosts",
    value: function fetchPosts() {
      var _this2 = this;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:3000/posts");
      xhr.send();

      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log("Loaded");
          _this2.posts = JSON.parse(xhr.response);
          console.log(_this2.posts);

          _this2.renderPosts(); // const resp = JSON.parse(xhr.response);
          // resp.forEach(item => {
          //   console.log(item);
          //   const div = document.createElement("div");
          //   div.textContent = item.title;
          //   body.appendChild(div);
          // });

        }
      };
    }
  }]);

  return Feed;
}();

/***/ }),

/***/ "./src/common/feed/feed.scss":
/*!***********************************!*\
  !*** ./src/common/feed/feed.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/feed/index.js":
/*!**********************************!*\
  !*** ./src/common/feed/index.js ***!
  \**********************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed */ "./src/common/feed/feed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return _feed__WEBPACK_IMPORTED_MODULE_0__["Feed"]; });



/***/ }),

/***/ "./src/common/feed/post.js":
/*!*********************************!*\
  !*** ./src/common/feed/post.js ***!
  \*********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.scss */ "./src/common/feed/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Post =
/*#__PURE__*/
function () {
  function Post(mp, data) {
    _classCallCheck(this, Post);

    this.mountPoint = mp;
    this.data = data;
    this.render();
  }

  _createClass(Post, [{
    key: "render",
    value: function render() {
      this.wrapper = document.createElement("div");
      this.wrapper.classList.add("post");
      this.img = document.createElement("img");
      this.img.src = this.data.img;
      this.likes = document.createElement("div");
      this.likes.textContent = this.data.likes;
      this.h2 = document.createElement("h2");
      this.h2.textContent = this.data.title;
      this.wrapper.appendChild(this.img);
      this.wrapper.appendChild(this.h2);
      this.wrapper.appendChild(this.likes);
      this.mountPoint.appendChild(this.wrapper);
    }
  }]);

  return Post;
}();

/***/ }),

/***/ "./src/common/feed/post.scss":
/*!***********************************!*\
  !*** ./src/common/feed/post.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/*!********************************!*\
  !*** multi ./src/ajax/ajax.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/ajax/ajax.js */"./src/ajax/ajax.js");


/***/ })

/******/ });
//# sourceMappingURL=ajax.js.map