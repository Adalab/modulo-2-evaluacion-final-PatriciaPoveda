function setLocalStorage() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
  console.log(favorites);
}

function getLocalStorage() {
  const localFav = JSON.parse(localStorage.getItem("favorites"));
  if (localFav !== null) {
    favorites = localFav;
    rePaintFavList();
  }
}
