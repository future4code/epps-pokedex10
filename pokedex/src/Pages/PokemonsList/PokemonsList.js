


import {Navbutton} from '../../Styled/Styled'

import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { goToDetailsPage, goToPokedexPage } from "../../Routes/Coordinator";
import { base_URL } from "../../constants/constant";
import axios from "axios";
import CardPokemon from "../../Components/CardPokemon";
import InfoPokemon from "../../context/context";


export default function PokemonsList() {
  // const history = useHistory();
  // const pokemons = useRequestData(base_URL, []);
  const {states, setters, requests} = useContext(InfoPokemon)
  const history = useHistory()

  useEffect(() =>{
    requests.getPokemon()

  },[requests])

  // const addPokemonPokedex = (newItem) =>{
  //   // const index = states.cartPokedex.findIndex((i) => i.id === newItem.id)
  //   console.log(newItem)
  //   let newPokedex= [...states.cartPokedex]
  //   newPokedex.push({...newItem})

  //   // if(index !== -2){
  //   //   console.log(index)
  //   // }
  //   // else {
  //   //   newPokedex[index].amount += 1
  //   // }

  //   setters.setCartPokedex(newPokedex);
  //   alert(`${newItem.name} foi add`)
  // }

  // console.log(states.pokemons)

  // console.log(states.pokemons)

  const addPokemonPokedex = (newItem) => {
    const index = states.cartPokedex.findIndex((i) => i.name === newItem.name);
    let newPokedex = [...states.cartPokedex];
    console.log(newPokedex)
    if(index === -1){
        newPokedex.push({...states.newPokedex, ammount: 1})
        alert(`${newItem.name} foi add`)
    }else{
        newPokedex[index].ammount += 1
        alert(`${newItem.name} ja faz parte do time`)
    }

    setters.setCartPokedex(newPokedex);
    // console.log(newPokedex)
    // alert(`${newItem.name} foi add`);
  };

  const pokeLista = 
  states.pokemons && states.pokemons.map((item) =>{
    return(
      <CardPokemon
      key={item.url}
      url={item.url}
      name={item.name}
      addPokemon={() => addPokemonPokedex(item)}
      />
    )
  })
 
  return (

    <div>
     <h2>PokemonsList</h2>
     {pokeLista}
      {/* {states.pokemons.map((pokemon) => {
        return (
          // <InfoPokemon.Provider value={pokemon}>
          <>
            <CardPokemon key={pokemon.url}
              url={pokemon.url}
              name={pokemon.name}
            //  image={states.image}
             addPokemon={() => addPokemonPokedex(pokemon)}
            />
            
          </>
          // </InfoPokemon.Provider>
        );
      })} */}
    </div>
  );
}

