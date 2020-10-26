const removeFavList = function (event) {
  const iconId = event.currentTarget.id;
  for (const favorite of favorites) {
    if (iconId === favorite) {
      console.log("hola");
    }
  }
  // const clicked = favorites.indexOf(parseInt(event.currentTarget.id)) !== -1;
  // console.log(event.currentTarget.id);
  // console.log(clicked);
  // if (clicked === false) {
  //   favorites.splice(clicked, 1);
  // } else {
  //   favorites.splice(clicked, 1);
  // }
};
const listenRemoveFavList = function () {
  const favoritesClick = document.querySelectorAll(".fa-times-circle");
  for (const favClick of favoritesClick) {
    console.log(favorites);
    favClick.addEventListener("click", removeFavList);
  }
};
