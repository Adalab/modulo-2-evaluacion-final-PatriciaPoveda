const listenFavList = function () {
  const seriesPaint = document.querySelectorAll(".js-serie");
  for (const serie of seriesPaint) {
    serie.addEventListener("click", paintFavList);
  }
};
btnSearch.addEventListener("click", getSerie);
getLocalStorage();
