function getSerie() {
  const query = document.querySelector(".js-inputSearch").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      series = data;
      paintList();
      listenFavList();
    });
}
