function removeFavList(event) {
  const remove = parseInt(event.currentTarget.id);
  for (let i = 0; i < favorites.length; i++) {
    if (remove === favorites[i]) {
      console.log("hola");
      favorites.splice(remove, 1);
    }
  }
}

// console.log(icons);
const listenRemoveFavList = function () {
  const icons = document.querySelectorAll(".js-fa-times-circle");
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", removeFavList);
  }
};
const listenFavList = function () {
  const seriesPaint = document.querySelectorAll(".js-serie");
  for (const serie of seriesPaint) {
    serie.addEventListener("click", paintFavList);
  }
};
btnSearch.addEventListener("click", getSerie);
getLocalStorage();
