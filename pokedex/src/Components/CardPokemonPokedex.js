import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { base_URL } from "../constants/constant";
import InfoPokemon from "../context/context";
import { goToDetailsPage, goToPokedexPage } from "../Routes/Coordinator";
import { Navbutton } from "../Styled/Styled";

export default function CardPokemonPokedex(props) {
  const history = useHistory();
  const {states, setters, requests} = useContext(InfoPokemon);
  const [image, setImage] = useState([]);
  // const [id, setId] = useState([]);

  const getImage = () => {
    axios
      .get(props.url)
      .then((res) => {
        // setId(res.data.id);
        setImage(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getImage()
  }, []);

  return (
    <div>
      <h1>Nome: {props.name}</h1>
      <img src={image} alt={props.name} />
      <Navbutton onClick={props.removePokemonFromPokedex} >Remover</Navbutton>
      <Navbutton onClick={() => goToDetailsPage(history)}>ver detalhes</Navbutton>
    </div>
  );
}
