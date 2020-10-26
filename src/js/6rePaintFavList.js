const rePaintFavList = function () {
  for (const favorite of favorites) {
    favoriteHtml += `<li class="favoritesList__item" id="${favorite.id}">`;
    favoriteHtml += favorite.name;
    if (favorite.image !== null) {
      favoriteHtml += `<img src="${favorite.image.medium}" alt="Poster ${favorite.name}" class="js-poster favoritesList__item--img">`;
    } else if (favorite.image === null) {
      favoriteHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV" alt="Poster de ${favorite.name} class="js-poster favoritesList__item--img">`;
    }
    favoriteHtml += `<i class="fa fa-times-circle" id="${favorite.id}" aria-hidden="true"></i>`;
    favoriteHtml += `</li>`;
  }
  favoriteList.innerHTML = favoriteHtml;
  // setLocalStorage();
  listenRemoveFavList();
  listenFavList();
};
