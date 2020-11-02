const paintFavList = function (event) {
  let click = parseInt(event.currentTarget.id);
  const clickPaint = event.currentTarget;
  for (let i = 0; i < series.length; i++) {
    const poster = series[i].show.image;
    if (click === series[i].show.id) {
      click = series[i].show;
      const favItem = favorites.find((name) => name.id === click.id);

      if (favItem === undefined) {
        clickPaint.classList.add("favoriteSearch");
        favorites.push(click);
        console.log(favorites);
        rePaintFavList();
      }
    }
  }
  setLocalStorage();
};
