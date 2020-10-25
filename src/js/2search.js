function getSerie() {
  const query = document.querySelector(".js-inputSearch").value;
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      series = data;
      paintList();
      listenFavList();
    });
}
