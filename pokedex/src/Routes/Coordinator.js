export const goToListPage = (history) => {
    history.push("/");
  };

  export const goToDetailsPage = (history, name) => {
    if(name !== null){
      history.push(`/poke-detail/${name}`);
    }
  };  

  export const goToPokedexPage = (history) => {
    history.push(`/pokedex`);
  };  