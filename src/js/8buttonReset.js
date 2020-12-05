function clickButtonReset() {
  favorites = [];
  rePaintFavList();
  paintList();
  setLocalStorage();
  listenFavList();
}
