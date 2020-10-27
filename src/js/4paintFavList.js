let favoriteHtml = "";
const paintFavList = function (event) {
  let click = parseInt(event.currentTarget.id);
  const clickPaint = event.currentTarget;
  for (let i = 0; i < series.length; i++) {
    const poster = series[i].show.image;
    if (click === series[i].show.id) {
      click = series[i].show;
      if (favorites.indexOf(click) === -1) {
        clickPaint.classList.add("favoriteSearch");
        favorites.push(click);
        favoriteHtml += `<li class="favoritesList__item">`;
        favoriteHtml += series[i].show.name;
        if (poster !== null) {
          favoriteHtml += `<img src="${series[i].show.image.medium}" alt="Poster ${series[i].show.name}" class="js-poster favoritesList__item--img">`;
        } else if (poster === null) {
          favoriteHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
        text=TV" alt="Poster de ${series[i].show.name} class="js-poster favoritesList__item--img">`;
        }
        favoriteHtml += `<i class="fa fa-times-circle js-fa-times-circle" aria-hidden="true" id="${i}"></i>`;
        favoriteHtml += `</li>`;
      }
    }
  }
  favoriteList.innerHTML = favoriteHtml;
  setLocalStorage();
  listenRemoveFavList();
};
