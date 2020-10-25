const listenFavList = function () {
  const series = document.querySelectorAll(".js-serie");
  for (const serie of series) {
    serie.addEventListener("click", paintFavList);
  }
};
btnSearch.addEventListener("click", getSerie);
getLocalStorage();
