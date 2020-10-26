let favoriteHtml = "";
console.log(favorites);
const paintFavList = function (event) {
  let click = parseInt(event.currentTarget.id);
  const clickPaint = event.currentTarget;
  for (const serie of series) {
    const poster = serie.show.image;
    if (click === serie.show.id) {
      click = serie.show;
      if (favorites.indexOf(click) === -1) {
        clickPaint.classList.add("favoriteSearch");
        favorites.push(click);

        favoriteHtml += `<li class="favoritesList__item">`;
        favoriteHtml += serie.show.name;
        if (poster !== null) {
          favoriteHtml += `<img src="${serie.show.image.medium}" alt="Poster ${serie.show.name}" class="js-poster favoritesList__item--img">`;
        } else if (poster === null) {
          favoriteHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
        text=TV" alt="Poster de ${serie.show.name} class="js-poster favoritesList__item--img">`;
        }
        favoriteHtml += `</li>`;
      }
      // else {
      //   favorites.splice(click, 1);
      //   favoriteHtml = "";
      // }
    }
  }
  favoriteList.innerHTML = favoriteHtml;
  setLocalStorage();
};
