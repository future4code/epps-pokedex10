import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { base_URL } from "../constants/constant";
import InfoPokemon from "../context/context";
import { goToDetailsPage } from "../Routes/Coordinator";

export default function CardPokemon() {
  const history = useHistory();
  const pokemon = useContext(InfoPokemon);
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const getImage = () => {
    axios
      .get(`${base_URL}/${pokemon.name}`)
      .then((res) => {
        setId(res.data.id);
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
      <img src={image} alt={pokemon.name} />
      <button onClick={() => goToDetailsPage(history, id)}>ver detalhes</button>
    </div>
  );
}
