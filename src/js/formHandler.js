import refs from "./refs";
import { newRequest, nextPageRequest } from "./galleryHandler.js";

refs.imageSearchRef.addEventListener("submit", (e) => {
  e.preventDefault();
  newRequest(refs.imageSearchInputRef.value);
});
refs.nextPageButton.addEventListener("click", (e) => {
  e.preventDefault();
  nextPageRequest(refs.imageSearchInputRef.value);
});
