let favoriteHtml = "";

const paintFavList = function (event) {
  const click = event.currentTarget.id;
  for (const serie of series) {
    const poster = serie.show.image;
    if (click === serie.show.name) {
      favorites.push(serie.show);
      favoriteHtml += `<li>`;
      favoriteHtml += serie.show.name;
      if (poster !== null) {
        favoriteHtml += `<img src="${serie.show.image.medium}" alt="Poster ${serie.show.name}" class="js-poster">`;
      } else if (poster === null) {
        favoriteHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
        text=TV" alt="Poster de ${serie.show.name} class="js-poster">`;
      }
      favoriteHtml += `</li>`;
    }
  }
  favoriteList.innerHTML = favoriteHtml;
  setLocalStorage();
};
