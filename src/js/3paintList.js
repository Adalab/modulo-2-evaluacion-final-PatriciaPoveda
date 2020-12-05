function paintList() {
  let seriesHtml = "";
  for (let i = 0; i < series.length; i++) {
    const poster = series[i].show.image;
    seriesHtml += `<li class="js-serie seriesList__item" id="${series[i].show.id}">`;
    seriesHtml += `<p class="seriesList__item--titleSerie">`;
    seriesHtml += series[i].show.name;
    seriesHtml += `</p>`;
    if (poster !== null) {
      seriesHtml += `<img src="${series[i].show.image.medium}" alt="Poster ${series[i].show.name}" class="js-poster seriesList__item--poster">`;
    } else if (poster === null) {
      seriesHtml += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="Poster de ${series[i].show.name}" class="js-poster seriesList__item--poster">`;
    }
    seriesHtml += `<p class="seriesList__item--statusSerie">`;
    seriesHtml += series[i].show.status;
    seriesHtml += `</p>`;
    seriesHtml += `</li>`;
  }
  seriesList.innerHTML = seriesHtml;
}
