import React, { useState } from "react";
import axios from "axios";
import { base_URL } from "../constants/constant";
import InfoPokemon from "../context/context";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [cartPokedex, setCartPokedex] = useState([]);
  

  const [images, setImages] = useState({});
  const [stats, setStats] = useState([]);
  const [type, setType] = useState([]);
  const [moves, setMoves] = useState([]);

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
  const getDetail = (name) => {
    axios
      .get(`${base_URL}/${name}`)
      .then((res) => {
        setImages(res.data.sprites);
        setStats(res.data.stats);
        setType(res.data.types);
        setMoves(res.data.moves.splice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const states = { pokemons, cartPokedex,images, stats,type, moves };
  const setters = { setPokemons, setCartPokedex, setImages, setType, setMoves };
  const requests = { getPokemon, getDetail};

  const data = { states, setters, requests };

 
  return (
    <InfoPokemon.Provider value={data}>{props.children}</InfoPokemon.Provider>
  );
};

export default GlobalState;
