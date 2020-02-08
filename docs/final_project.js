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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/final_project/final_project.js":
/*!********************************************!*\
  !*** ./src/final_project/final_project.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _final_project_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final_project.scss */ "./src/final_project/final_project.scss");
/* harmony import */ var _final_project_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_final_project_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_slides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slides */ "./src/final_project/js/slides.js");



toggle.addEventListener("click", function () {
  turn.classList.toggle("page-nav_expand");
});
var main = document.querySelector(".main");
Object(_js_slides__WEBPACK_IMPORTED_MODULE_1__["slideshow"])(main);
var afterheader = document.querySelector(".header");
Object(_js_slides__WEBPACK_IMPORTED_MODULE_1__["headerView"])(afterheader);

/***/ }),

/***/ "./src/final_project/final_project.scss":
/*!**********************************************!*\
  !*** ./src/final_project/final_project.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final_project/js/slides.js":
/*!****************************************!*\
  !*** ./src/final_project/js/slides.js ***!
  \****************************************/
/*! exports provided: slideshow, headerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideshow", function() { return slideshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerView", function() { return headerView; });
// const images = {
//   featured: {
//     title: "Wrath of the Titans",
//     description:
//       "Wrath of the Titans is a 2012 3D fantasy action-adventure film that is a sequel to the 2010 film Clash of the Titans. The film stars Sam Worthington, Rosamund Pike, Bill Nighy, Édgar Ramírez, Toby Kebbell, Danny Huston, Ralph Fiennes, and Liam Neeson, with Jonathan Liebesman directing a screenplay by Dan Mazeau and David Leslie Johnson. Wrath of the Titans takes place a decade after the events of the preceding film as the gods lose control over the imprisoned Titans (thanks to humanity's lack of prayers which also is draining their immortality) and Perseus is called, this time to rescue his father Zeus, overthrow the Titans, and save mankind.",
//     rating: "4.9",
//     preview: {
//       high:
//         "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199499/movies/featured-image-header_hyhys6.jpg"
//     },
//     genre: "fantasy"
//   }
//   list: [
//     {
//       title: "Fantastic beasts and where to find them",
//       description:
//         "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.",
//       rating: "4.7",
//       preview: {
//         high:
//           "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg",
//         low:
//           "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199506/movies/bitmap_wixqtd.jpg"
//       },
//       genre: "fantasy"
//     },
//     {
//       title: "Justice League",
//       description:
//         "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
//       rating: "3.9",
//       preview: {
//         low:
//           "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
//         high:
//           "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
//       },
//       genre: "comics"
//     },
//     {
//       title: "Beauty and the beast",
//       description: "",
//       rating: "3.9",
//       preview: {
//         low:
//           "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
//         high:
//           "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
//       },
//       genre: "fairytail"
//     }
//   ]
// };
var renderSlides = function renderSlides(mountPoint) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      var slides = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = resp.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var movie = document.createElement("div");
          movie.classList.add("movie");
          var product = document.createElement("div");
          product.classList.add("product");
          movie.appendChild(product);
          var productImg = document.createElement("img");
          productImg.src = item.preview.high;
          productImg.classList.add("product__img");
          product.appendChild(productImg);
          var productDescriptionGenre = document.createElement("div");
          productDescriptionGenre.classList.add("product__description-genre");
          product.appendChild(productDescriptionGenre);
          var productDescriptionGenreWrapper = document.createElement("div");
          productDescriptionGenreWrapper.classList.add("product__description-genre-wrapper");
          productDescriptionGenre.appendChild(productDescriptionGenreWrapper);
          var productDescription = document.createElement("div");
          productDescription.classList.add("product__description");
          productDescription.innerHTML = item.title;
          productDescription.setAttribute("data-title", item.title);
          productDescriptionGenreWrapper.appendChild(productDescription);
          var productGenre = document.createElement("div");
          productGenre.classList.add("product__genre");
          productGenre.innerHTML = item.genre;
          productDescriptionGenreWrapper.appendChild(productGenre);
          var productQuantityOfStars = document.createElement("div");
          productQuantityOfStars.classList.add("product__quantity-of-stars");
          productDescriptionGenre.appendChild(productQuantityOfStars);
          var productQuantityOfStarsNumber = document.createElement("p");
          productQuantityOfStarsNumber.classList.add("product__quantity-of-stars_number");
          productQuantityOfStarsNumber.innerHTML = item.rating;
          productQuantityOfStars.appendChild(productQuantityOfStarsNumber);
          slides.push(movie);
          mountPoint.appendChild(movie);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return slides;
    }

    console.log(resp);
  };
};

var renderHeadSlide = function renderHeadSlide(mountPoint) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      var headerImage = document.createElement("div");
      headerImage.classList.add("header_image");
      headerImage.innerHTML = resp.featured.preview.high;
      mountPoint.appendChild(headerImage);
    }
  };
};

var renderHeadName = function renderHeadName(mountPoint) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      var headerMovieName = document.createElement("p");
      headerMovieName.classList.add("header__movie-name");
      headerMovieName.innerHTML = resp.featured.title;
      mountPoint.appendChild(headerMovieName);
    }
  };
};

var renderHeadGenre = function renderHeadGenre(mountPoint) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      var headerMovieGenre = document.createElement("span");
      headerMovieGenre.classList.add("header__movie-genre");
      headerMovieGenre.innerHTML = resp.featured.genre;
      mountPoint.appendChild(headerMovieGenre);
    }
  };
};

var renderHeadRating = function renderHeadRating(mountPoint) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      var headerMovieRating = document.createElement("span");
      headerMovieRating.classList.add("header__stars-quantity_number");
      var currentMovieRating = resp.featured.rating;
      headerMovieRating.innerHTML = currentMovieRating;
      mountPoint.appendChild(headerMovieRating);
    }
  };
};

var slideshow = function slideshow(mountPoint) {
  var container = document.createElement("div");
  container.classList.add("movies");
  var slide = renderSlides(container);
  mountPoint.appendChild(container);
};
var headerView = function headerView(mountPoint) {
  var headContainer = document.createElement("div");
  headContainer.classList.add("header");
  var headerSlide = renderHeadSlide(headContainer);
  mountPoint.appendChild(headContainer);
  var parentHeaderMovieName = document.querySelector(".header_movie-name-wrapper");
  var movieName = renderHeadName(parentHeaderMovieName);
  var parentheaderMovieGenre = document.querySelector(".header__movie-genre-wrapper");
  var movieGenre = renderHeadGenre(parentheaderMovieGenre);
  var parentheaderMovieRating = document.querySelector(".header__stars-quantity");
  var movieRating = renderHeadRating(parentheaderMovieRating);
};

/***/ }),

/***/ 17:
/*!**************************************************!*\
  !*** multi ./src/final_project/final_project.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/final_project/final_project.js */"./src/final_project/final_project.js");


/***/ })

/******/ });
//# sourceMappingURL=final_project.js.map