const paintFavList = function (event) {
  let click = parseInt(event.currentTarget.id);
  console.log(click);
  const clickPaint = event.currentTarget;
  for (let i = 0; i < series.length; i++) {
    if (click === series[i].show.id) {
      click = series[i].show;
      const favItem = favorites.find((name) => name.id === click.id);

      if (favItem === undefined) {
        console.log(favItem);
        clickPaint.classList.add("favoriteSearch");
        favorites.push(click);
        rePaintFavList();
      } else {
        console.log(favItem);
        clickPaint.classList.remove("favoriteSearch");
        const favIndex = favorites.findIndex(
          (name) => name.id === series[i].show.id
        );
        console.log(favIndex);
        favorites.splice(favIndex, 1);
        rePaintFavList();
      }
    }
  }
  setLocalStorage();
};
