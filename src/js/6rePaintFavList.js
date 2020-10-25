const rePaintFavList = function () {
  3;
  for (const favorite of favorites) {
    favoriteHtml += `<li>`;
    favoriteHtml += favorite.name;
    if (favorite.image !== null) {
      favoriteHtml += `<img src="${favorite.image.medium}" alt="Poster ${favorite.name}" class="js-poster">`;
    } else if (favorite.image === null) {
      favoriteHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV" alt="Poster de ${favorite.name} class="js-poster">`;
    }
    favoriteHtml += `</li>`;
  }

  favoriteList.innerHTML += favoriteHtml;
  setLocalStorage();
};
