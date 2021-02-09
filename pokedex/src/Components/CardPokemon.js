import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_URL } from "../constants/constant";
import InfoPokemon from "../context/context";

export default function CardPokemon() {
  const pokemon = useContext(InfoPokemon);
  const [image, setImage] = useState('')

  const getImage = () => {
    axios
      .get(`${base_URL}/${pokemon.name}`)
      .then((res) => {
        console.log(res.data.sprites.front_default);
        setImage(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <h1>Nome: {pokemon.name}</h1>
      <img src={image} />
    </div>
  );
}
