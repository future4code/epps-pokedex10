import React, { useState } from "react";
import axios from "axios";
import { useRequestData } from "../hooks/useRequestData";
import { base_URL } from "../constants/constant";
import InfoPokemon from "../context/context";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [cartPokedex, setCartPokedex] = useState([]);
  const [image, setImage] = useState([]);

  const getPokemon = () => {
    axios
      .get(`${base_URL}`)
      .then((res) => {
        setPokemons(res.data.results);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const removePokemonFromPokedex = (item) => {
  //   console.log(item);
  //   const index = cartPokedex.findIndex((i) => i.name === item.name);
  //   let newPokedex = [...states.cartPokedex];
  //   newPokedex.splice(index, 1);
  //   //    if(newPokedex[index].amount === 1){
  //   //    }else{
  //   //        newPokedex[index].amount -= 1
  //   //    }
  //   setCartPokedex(newPokedex);
  // };

  const states = { pokemons, cartPokedex,image };
  const setters = { setPokemons, setCartPokedex, setImage };
  const requests = { getPokemon };

  const data = { states, setters, requests };

 
  return (
    <InfoPokemon.Provider value={data}>{props.children}</InfoPokemon.Provider>
  );
};

export default GlobalState;
