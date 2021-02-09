export const goToListPage = (history) => {
    history.push("/");
  };

  export const goToDetailsPage = (history, id) => {
    if(id !== null){
      history.push(`/poke-detail/${id}`);
    }
  };  

  export const goToPokedexPage = (history) => {
    history.push("/pokedex");
  };  