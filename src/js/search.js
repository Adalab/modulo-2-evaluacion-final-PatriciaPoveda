"use strict";

const btnSearch = document.querySelector(".js-btnSearch");
const seriesList = document.querySelector(".js-seriesList");
const favoriteList = document.querySelector(".js-favoriteList");

let series = [];
let favorites = [
  // { score: 123, show: {...} }
];

function getSerie() {
  const query = document.querySelector(".js-inputSearch").value;
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      // series = data;
      paintList();
      listenFavList();
    });
}
function paintList() {
  let seriesHtml = "";
  for (let i = 0; i < series.length; i++) {
    const poster = series[i].show.image;
    seriesHtml += `<li class="js-serie" id="${series[i].show.name}">`;
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
const paintFavList = function (event) {
  const click = event.currentTarget.id;
  favorites.push(click);
  let favoriteHtml = "";
  for (const serie of series) {
    const poster = serie.show.image;
    if (click === serie.show.name) {
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
  favoriteList.innerHTML += favoriteHtml;
};
const listenFavList = function () {
  const series = document.querySelectorAll(".js-serie");
  for (const serie of series) {
    serie.addEventListener("click", paintFavList);
  }
};
btnSearch.addEventListener("click", getSerie);
