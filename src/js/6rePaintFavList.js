const rePaintFavList = function () {
  let favoriteHtml = "";
  for (let i = 0; i < favorites.length; i++) {
    favoriteHtml += `<li class="favoritesList__item">`;
    favoriteHtml += favorites[i].name;
    if (favorites[i].image !== null) {
      favoriteHtml += `<img src="${favorites[i].image.medium}" alt="Poster ${favorites[i].name}" class="js-poster favoritesList__item--img">`;
    } else if (favorites[i].image === null) {
      favoriteHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV" alt="Poster de ${favorites[i].name} class="js-poster favoritesList__item--img">`;
    }
    favoriteHtml += `<i class="fa fa-times-circle js-fa-times-circle" aria-hidden="true" id="${favorites[i].id}"></i>`;
    favoriteHtml += `</li>`;
  }
  favoriteList.innerHTML = favoriteHtml;
  listenRemoveFavList();
};
