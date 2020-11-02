function removeFavList(event) {
  const remove = parseInt(event.currentTarget.id);
  console.log(remove);
  for (let i = 0; i < favorites.length; i++) {
    const favId = favorites[i].id;
    if (favId === remove) {
      const favIndex = favorites.findIndex((name) => name === favorites[i]);
      console.log(favIndex);
      favorites.splice(favIndex, 1);
      rePaintFavList();
    }
  }
  setLocalStorage();
}
