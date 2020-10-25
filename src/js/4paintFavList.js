let favoriteHtml = "";

const paintFavList = function (event) {
  const click = event.currentTarget.id;
  const clickPaint = event.currentTarget;
  console.log(clickPaint);
  clickPaint.classList.add("favoriteSearch");
  for (const serie of series) {
    const poster = serie.show.image;
    if (click === serie.show.name) {
      favorites.push(serie.show);
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
  }
  favoriteList.innerHTML = favoriteHtml;
  setLocalStorage();
};
