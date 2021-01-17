import imgFetch from "./fetch.js";
import galleryTemplate from "../templates/gallery.hbs";
import refs from "./refs.js";

let page;

function newRequest(query) {
  page = 1;
  refs.galleryRef.innerHTML = "";
  imgFetch(query, page).then((arr) => {
    refs.galleryRef.insertAdjacentHTML("beforeEnd", galleryTemplate(arr));
    refs.nextPageButton.classList.remove("is-hidden");
  });
}

function nextPageRequest(query) {
  page += 1;
  imgFetch(query, page).then((arr) => {
    refs.galleryRef.insertAdjacentHTML("beforeEnd", galleryTemplate(arr));
    const lastChild = refs.galleryRef.lastElementChild.querySelector('img')

    lastChild.onload = function () {
      console.log(123)
      window.scrollTo({
        top: 300000,
        behavior: "smooth",
      });
    };
  })
}

export {newRequest, nextPageRequest};

// document.documentElement.scrollHeight;
