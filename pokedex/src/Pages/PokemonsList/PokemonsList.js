


import {Navbutton} from '../../Styled/Styled'

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { goToDetailsPage, goToPokedexPage } from "../../Routes/Coordinator";
import { base_URL } from "../../constants/constant";
import axios from "axios";
import CardPokemon from "../../Components/CardPokemon";
import InfoPokemon from "../../context/context";


export default function PokemonsList() {
  const history = useHistory();
  const pokemons = useRequestData(base_URL, []);
  // console.log(pokemons[0])

  // const [imagePokemon, setImagePokemon] = useState('')

  // const getImage = () =>{
  //   axios.get(`${base_URL}/${pokemons.name}`)
  //   .then((res) =>{
  //     console.log(res)
  //   })
  //   .catch((err) =>{
  //     console.log(err)
  //   })
  // }

  // useEffect(() =>{
  //   getImage()
  // }, [])

  

  const pokemon = {
    name: pokemons.name,
    img: "https://pokeapi.co/api/v2/pokemon/1"
  }
 

  return (

    <div>
     <h2>PokemonsList</h2>
      {pokemons.map((pokemon) => {
        return (
          <InfoPokemon.Provider value={pokemon}>
            {/* <h1>{pokemon.name}</h1>
            <h1>{pokemon.url}</h1> */}

            <CardPokemon />

            <Navbutton onClick={() => goToDetailsPage(history)}>ver detalhes</Navbutton>

            <Navbutton>Add a Pokedex</Navbutton>
          </InfoPokemon.Provider>
        );
      })}
    </div>
  );
}

