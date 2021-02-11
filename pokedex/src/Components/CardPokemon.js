import axios from "axios";
import React, { useEffect, useState } from "react";

import { Navbutton } from "../Styled/Styled";

export default function CardPokemon(props) {
  const [image, setImage] = useState("");

  const getImage = () => {
    axios
      .get(props.url)
      .then((res) => {
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
    <div id={props.id}>
      <h1>Nome: {props.name}</h1>
      <p>{props.id}</p>
      <img src={image} alt={props.name} />
      <Navbutton onClick={props.addPokemon}>Add a Pokedex</Navbutton>
      <Navbutton onClick={props.viewDetail}>ver detalhes</Navbutton>
    </div>
  );
}
