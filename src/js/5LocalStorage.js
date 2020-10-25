function setLocalStorage() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

const localFav = JSON.parse(localStorage.getItem("favorites"));

function getLocalStorage() {
  if (localFav !== null) {
    favorites = localFav;
    console.log(favorites);
    rePaintFavList();
    listenFavList();
  }
}
