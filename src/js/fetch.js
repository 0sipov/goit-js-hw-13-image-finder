async function imgFetch(query, page) {
  const key = "19872241-52e2ff9de1363a0f3b5becb90";
  const perPage = 6;
  return await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${key}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      return obj.hits;
    })
    .catch("ошибка запроса");
}
export default imgFetch;
