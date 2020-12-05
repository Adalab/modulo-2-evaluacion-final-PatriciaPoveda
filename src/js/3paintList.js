function paintList() {
  seriesList.innerHTML = "";
  for (let i = 0; i < series.length; i++) {
    const poster = series[i].show.image;
    const newItem = document.createElement("li");
    newItem.setAttribute("class", "js-serie seriesList__item");
    newItem.setAttribute("id", `${series[i].show.id}`);
    const newTitle = document.createElement("p");
    newTitle.setAttribute("class", "seriesList__item--titleSerie");
    const newTitleContent = document.createTextNode(`${series[i].show.name}`);
    const newImg = document.createElement("img");
    newImg.setAttribute("class", "js-poster seriesList__item--poster");
    const newStatus = document.createElement("p");
    newStatus.setAttribute("class", "seriesList__item--statusSerie");
    const newStatusContent = document.createTextNode(
      `${series[i].show.status}`
    );
    newTitle.appendChild(newTitleContent);
    newItem.appendChild(newTitle);
    newItem.appendChild(newImg);
    newStatus.appendChild(newStatusContent);
    newItem.appendChild(newStatus);
    seriesList.appendChild(newItem);
    if (poster !== null) {
      newImg.setAttribute("src", `${series[i].show.image.medium}`);
      newImg.setAttribute("alt", "Poster ${series[i].show.name}");
    } else if (poster === null) {
      newImg.setAttribute(
        "src",
        "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
      );
      newImg.setAttribute("alt", "Poster no encontrado");
    }
    for (let j = 0; j < favorites.length; j++) {
      if (parseInt(newItem.id) === favorites[j].id) {
        newItem.setAttribute(
          "class",
          "js-serie seriesList__item favoriteSearch"
        );
      }
    }
  }
}
