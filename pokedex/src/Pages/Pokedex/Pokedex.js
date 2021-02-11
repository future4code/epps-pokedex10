import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CardPokemonPokedex from "../../Components/CardPokemonPokedex";
import InfoPokemon from "../../context/context";
import { goToDetailsPage } from "../../Routes/Coordinator";


export default function Pokedex() {
  const { states, setters} = useContext(InfoPokemon);
  const history = useHistory();


  const removePokemonFromPokedex = (itemtoRemove) => {

    const index = states.cartPokedex.findIndex(
      (i) => i.name === itemtoRemove.name
    );

    let newPokedex = [...states.cartPokedex];
    newPokedex.splice(index, 1);
    setters.setCartPokedex(newPokedex);
    alert("Removido");


  };


  const PokeLista =
    states.cartPokedex &&
    states.cartPokedex.map((poke) => {
      return (
        <CardPokemonPokedex
          key={poke.url}
          name={poke.name}
          url={poke.url}
          viewDetail={()=>goToDetailsPage(history, poke.name)}
          removePokemonFromPokedex={() => removePokemonFromPokedex(poke)}
        />
      );
    });

  return (
    <div>


      {PokeLista}


    </div>
  );
}
