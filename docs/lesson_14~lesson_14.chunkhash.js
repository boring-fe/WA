(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lesson_14~lesson_14"],{

/***/ "./src/common/accordion/accordion.js":
/*!*******************************************!*\
  !*** ./src/common/accordion/accordion.js ***!
  \*******************************************/
/*! exports provided: accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
var sections = [{
  title: "Section 1",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}, {
  title: "Section 2",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}, {
  title: "Section 3",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}, {
  title: "Section 4",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}, {
  title: "Section 5",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}, {
  title: "Section 6",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}, {
  title: "Section 7",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
}];

var renderElement = function renderElement(i, item) {
  var accordion__header = document.createElement("button");
  var accordion__container = document.createElement("div");
  var accordion__content = document.createElement("p");
  accordion__header.classList.add("accordion");
  accordion__container.classList.add("panel");
  document.body.append(accordion__header);
  document.body.appendChild(accordion__container);
  accordion__container.appendChild(accordion__content);
  var sectionString = "Section ";
  var sectionItem = i + 1;
  var content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!";
  accordion__header.innerHTML = sectionString + sectionItem;
  accordion__content.innerHTML = content + content + content;
};

var createElements = function createElements(numberOfElements) {
  for (var _i = 0; _i < numberOfElements; _i++) {
    renderElement(_i);
  }

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};

var accordion = function accordion(mountPoint) {
  createElements(7);
};

/***/ }),

/***/ "./src/common/accordion/index.js":
/*!***************************************!*\
  !*** ./src/common/accordion/index.js ***!
  \***************************************/
/*! exports provided: accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./src/common/accordion/accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["accordion"]; });



/***/ }),

/***/ "./src/common/myCoolMetric/index.js":
/*!******************************************!*\
  !*** ./src/common/myCoolMetric/index.js ***!
  \******************************************/
/*! exports provided: analize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myCoolMetric */ "./src/common/myCoolMetric/myCoolMetric.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__["analize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__["analize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__["analize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__["analize"]; });



/***/ }),

/***/ "./src/common/myCoolMetric/myCoolMetric.js":
/*!*************************************************!*\
  !*** ./src/common/myCoolMetric/myCoolMetric.js ***!
  \*************************************************/
/*! exports provided: analize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return analize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return analize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return analize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return analize; });
var analize = function analize() {
  var totalClicks = 0;

  window.getTotalClicks = function () {
    return totalClicks;
  };

  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      totalClicks += 1;
    });
  });
};

/***/ }),

/***/ "./src/common/slideshow/index.js":
/*!***************************************!*\
  !*** ./src/common/slideshow/index.js ***!
  \***************************************/
/*! exports provided: slideShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow */ "./src/common/slideshow/slideshow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return _slideshow__WEBPACK_IMPORTED_MODULE_0__["slideShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return _slideshow__WEBPACK_IMPORTED_MODULE_0__["slideShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return _slideshow__WEBPACK_IMPORTED_MODULE_0__["slideShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return _slideshow__WEBPACK_IMPORTED_MODULE_0__["slideShow"]; });



/***/ }),

/***/ "./src/common/slideshow/slideshow.js":
/*!*******************************************!*\
  !*** ./src/common/slideshow/slideshow.js ***!
  \*******************************************/
/*! exports provided: slideShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return slideShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return slideShow; });
/* harmony import */ var _slideshow_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow.scss */ "./src/common/slideshow/slideshow.scss");
/* harmony import */ var _slideshow_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slideshow_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return slideShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return slideShow; });

var images = [{
  title: "Fantastic beasts and where to find them",
  description: "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.",
  rating: "4.7",
  preview: {
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg",
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199506/movies/bitmap_wixqtd.jpg"
  },
  genre: "fantasy"
}, {
  title: "Justice League",
  description: "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
  rating: "3.9",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
  },
  genre: "comics"
}, {
  title: "Beauty and the beast",
  description: "",
  rating: "2.4",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
  },
  genre: "fairytail"
}, {
  title: "Fantastic beasts and where to find them",
  description: "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.",
  rating: "4.7",
  preview: {
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg",
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199506/movies/bitmap_wixqtd.jpg"
  },
  genre: "fantasy"
}, {
  title: "Justice League",
  description: "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
  rating: "3.3",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
  },
  genre: "comics"
}, {
  title: "Beauty and the beast",
  description: "",
  rating: "3.0",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
  },
  genre: "fairytail"
}];

var renderSlide = function renderSlide(item, i) {
  var expand = false;
  var slide = document.createElement("div");
  var label = document.createElement("div");
  var description = document.createElement("p");
  label.textContent = item.rating;
  description.innerHTML = showText();
  label.classList.add("slide__rating");
  slide.classList.add("slide");
  description.classList.add("slide__description");
  slide.style.transform = "translateX(-".concat(i * 100, "%)");
  var img = document.createElement("img");
  img.src = item.preview.high;
  img.classList.add("slide__image");
  slide.appendChild(img);
  slide.appendChild(label);
  slide.appendChild(description);

  function showText() {
    return "<b>".concat(item.description.slice(0, 20), "</b>").concat(expand ? item.description.slice(20) : "...");
  }

  function toggleExpand() {
    expand = !expand;
    description.innerHTML = showText();
  }

  description.addEventListener("click", toggleExpand);
  return slide;
};

var renderSlides = function renderSlides(mountPoint) {
  var slides = [];
  images.forEach(function (item, i, arr) {
    var slide = renderSlide(item, i);
    item = images[i];
    slides.push(slide);
    mountPoint.appendChild(slide);
  });
  return slides;
};

var renderControl = function renderControl() {
  var control = document.createElement("button");
  control.classList.add("control");
  return control;
};

var renderContainer = function renderContainer() {
  var container = document.createElement("div");
  container.classList.add("slideshow");
  return container;
};

var slideShow = function slideShow(mountPoint) {
  var activeSlideIndex = 0;
  var container = renderContainer();
  var slides = renderSlides(container);
  var next = renderControl();
  var prev = renderControl();
  var intervalId;
  setActive();

  function startInterval() {
    intervalId = setInterval(function () {
      nextSlide();
    }, 2000);
  }

  function setActive() {
    slides[activeSlideIndex].classList.add("active");
  }

  function toggleOff() {
    slides[activeSlideIndex].classList.remove("active");
  }

  function nextSlide() {
    toggleOff();

    if (activeSlideIndex + 1 < slides.length) {
      activeSlideIndex += 1;
    } else {
      activeSlideIndex = 0;
    }

    setActive();
  }

  function prevSlide() {
    toggleOff();

    if (activeSlideIndex - 1 >= 0) {
      activeSlideIndex -= 1;
    } else {
      activeSlideIndex = slides.length - 1;
    }

    setActive();
  }

  function handleEvents() {
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
    container.addEventListener("mouseenter", function () {
      clearInterval(intervalId);
    });
    container.addEventListener("mouseleave", function () {
      clearInterval(startInterval);
    });

    container.onmouseleave = function () {
      startInterval();
    };
  } //   console.log(slides);


  function render() {
    container.appendChild(prev);
    container.appendChild(next);
    mountPoint.appendChild(container);
  }

  function init() {
    handleEvents();
    render();
    startInterval();
  }

  init();
};

/***/ }),

/***/ "./src/common/slideshow/slideshow.scss":
/*!*********************************************!*\
  !*** ./src/common/slideshow/slideshow.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\common\\slideshow\\slideshow.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ "./src/lesson_14/lesson_14.js":
/*!************************************!*\
  !*** ./src/lesson_14/lesson_14.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_14.scss */ "./src/lesson_14/lesson_14.scss");
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/slideshow */ "./src/common/slideshow/index.js");
/* harmony import */ var _common_myCoolMetric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/myCoolMetric */ "./src/common/myCoolMetric/index.js");
/* harmony import */ var _common_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/accordion */ "./src/common/accordion/index.js");




var body = document.querySelector("body");
Object(_common_slideshow__WEBPACK_IMPORTED_MODULE_1__["slideShow"])(body);
Object(_common_myCoolMetric__WEBPACK_IMPORTED_MODULE_2__["analize"])();
Object(_common_accordion__WEBPACK_IMPORTED_MODULE_3__["accordion"])(body);

/***/ }),

/***/ "./src/lesson_14/lesson_14.scss":
/*!**************************************!*\
  !*** ./src/lesson_14/lesson_14.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\src\\lesson_14\\lesson_14.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:84:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:306:11\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:630:14\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:627:30\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1325:35\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1316:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1311:36\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1307:32\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compiler.js:624:17\n    at eval (eval at create (C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1095:12\n    at C:\\Users\\tol89\\Documents\\Learning\\Web-Academy\\group_2910\\static-builder-master\\static-builder-master\\node_modules\\webpack\\lib\\Compilation.js:1007:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ 12:
/*!******************************************!*\
  !*** multi ./src/lesson_14/lesson_14.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_14/lesson_14.js */"./src/lesson_14/lesson_14.js");


/***/ })

}]);
//# sourceMappingURL=lesson_14~lesson_14.chunkhash.js.map