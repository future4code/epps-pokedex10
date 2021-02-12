import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { goToDetailsPage } from "../../Routes/Coordinator";

import CardPokemon from "../../Components/CardPokemon";
import InfoPokemon from "../../context/context";
import {NavList} from '../../Styled/styledList';

export default function PokemonsList() {
  const { states, setters, requests } = useContext(InfoPokemon);
  const history = useHistory();

  useEffect(() => {
    requests.getPokemon();
  }, []);

  const addPokemonPokedex = (newItem) => {
    const index = states.cartPokedex.findIndex((i) => i.name === newItem.name);
    const indexList = states.pokemons.findIndex((i) => i.name === newItem.name);

    console.log(index);

    let newPokedex = [...states.cartPokedex];
    let newPokemon = [...states.pokemons];

    if (index === -1) {
      newPokedex.push(newItem);
      newPokemon.splice(indexList, 1);
      alert(`${newItem.name} foi add`);
    } else {
      newPokedex[index].ammount += 1;
      alert(`${newItem.name} ja faz parte do time`);
    }

    setters.setCartPokedex(newPokedex);
    setters.setPokemons(newPokemon);

    console.log(newPokedex);
  };

  const pokeLista =
    states.pokemons &&
    states.pokemons.map((item) => {
      return (
        <CardPokemon
          key={item.url}
          url={item.url}
          name={item.name}
          viewDetail={() => goToDetailsPage(history, item.name)}
          addPokemon={() => addPokemonPokedex(item)}
        />
      );
    });

  return (
    <div>
      <NavList>PokemonsList</NavList>
      {pokeLista}
    </div>
  );
}
