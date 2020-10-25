function paintList() {
  let seriesHtml = "";
  for (let i = 0; i < series.length; i++) {
    const poster = series[i].show.image;
    seriesHtml += `<li class="js-serie seriesList__item" id="${series[i].show.name}">`;
    seriesHtml += series[i].show.name;
    if (poster !== null) {
      seriesHtml += `<img src="${series[i].show.image.medium}" alt="Poster ${series[i].show.name}" class="js-poster">`;
    } else if (poster === null) {
      seriesHtml += `<img src=" https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV" alt="Poster de ${series[i].show.name} class="js-poster">`;
    }
    seriesHtml += `</li>`;
  }
  seriesList.innerHTML = seriesHtml;
}
