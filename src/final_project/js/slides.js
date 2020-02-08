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

const renderSlides = mountPoint => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
  );
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      const slides = [];
      for (let item of resp.list) {
        const movie = document.createElement("div");
        movie.classList.add("movie");

        const product = document.createElement("div");
        product.classList.add("product");
        movie.appendChild(product);

        const productImg = document.createElement("img");
        productImg.src = item.preview.high;
        productImg.classList.add("product__img");
        product.appendChild(productImg);

        const productDescriptionGenre = document.createElement("div");
        productDescriptionGenre.classList.add("product__description-genre");
        product.appendChild(productDescriptionGenre);

        const productDescriptionGenreWrapper = document.createElement("div");
        productDescriptionGenreWrapper.classList.add(
          "product__description-genre-wrapper"
        );
        productDescriptionGenre.appendChild(productDescriptionGenreWrapper);

        const productDescription = document.createElement("div");
        productDescription.classList.add("product__description");
        productDescription.innerHTML = item.title;
        productDescription.setAttribute("data-title", item.title);
        productDescriptionGenreWrapper.appendChild(productDescription);

        const productGenre = document.createElement("div");
        productGenre.classList.add("product__genre");
        productGenre.innerHTML = item.genre;
        productDescriptionGenreWrapper.appendChild(productGenre);

        const productQuantityOfStars = document.createElement("div");
        productQuantityOfStars.classList.add("product__quantity-of-stars");
        productDescriptionGenre.appendChild(productQuantityOfStars);

        const productQuantityOfStarsNumber = document.createElement("p");
        productQuantityOfStarsNumber.classList.add(
          "product__quantity-of-stars_number"
        );
        productQuantityOfStarsNumber.innerHTML = item.rating;
        productQuantityOfStars.appendChild(productQuantityOfStarsNumber);

        slides.push(movie);
        mountPoint.appendChild(movie);
      }
      return slides;
    }
    console.log(resp);
  };
};

const renderHeadSlide = mountPoint => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
  );
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      const headerImage = document.createElement("div");
      headerImage.classList.add("header_image");
      headerImage.innerHTML = resp.featured.preview.high;
      mountPoint.appendChild(headerImage);
    }
  };
};

const renderHeadName = mountPoint => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
  );
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      const headerMovieName = document.createElement("p");
      headerMovieName.classList.add("header__movie-name");
      headerMovieName.innerHTML = resp.featured.title;
      mountPoint.appendChild(headerMovieName);
    }
  };
};

const renderHeadGenre = mountPoint => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
  );
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      const headerMovieGenre = document.createElement("span");
      headerMovieGenre.classList.add("header__movie-genre");
      headerMovieGenre.innerHTML = resp.featured.genre;
      mountPoint.appendChild(headerMovieGenre);
    }
  };
};

const renderHeadRating = mountPoint => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
  );
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      var resp = JSON.parse(xhr.response);
      const headerMovieRating = document.createElement("span");
      headerMovieRating.classList.add("header__stars-quantity_number");
      const currentMovieRating = resp.featured.rating;
      headerMovieRating.innerHTML = currentMovieRating;
      mountPoint.appendChild(headerMovieRating);
    }
  };
};

export const slideshow = mountPoint => {
  const container = document.createElement("div");
  container.classList.add("movies");
  const slide = renderSlides(container);
  mountPoint.appendChild(container);
};

export const headerView = mountPoint => {
  const headContainer = document.createElement("div");
  headContainer.classList.add("header");
  const headerSlide = renderHeadSlide(headContainer);
  mountPoint.appendChild(headContainer);

  const parentHeaderMovieName = document.querySelector(
    ".header_movie-name-wrapper"
  );
  const movieName = renderHeadName(parentHeaderMovieName);

  const parentheaderMovieGenre = document.querySelector(
    ".header__movie-genre-wrapper"
  );
  const movieGenre = renderHeadGenre(parentheaderMovieGenre);

  const parentheaderMovieRating = document.querySelector(
    ".header__stars-quantity"
  );
  const movieRating = renderHeadRating(parentheaderMovieRating);
};
