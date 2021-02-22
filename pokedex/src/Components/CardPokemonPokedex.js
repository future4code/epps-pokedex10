import axios from "axios";
import React, {useEffect, useState } from "react";

import { Navbutton } from "../Styled/StyledCardPokemon";
import {NavCardpoke,NameCard, PhotoCard} from '../Styled/styleCardPokedex';

export default function CardPokemonPokedex(props) {


  const [image, setImage] = useState([]);


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
    getImage()
  }, []);

  return (
    
      <NavCardpoke>
      <NameCard> {props.name}</NameCard>
      <PhotoCard src={image} alt={props.name} />
      <Navbutton onClick={props.removePokemonFromPokedex} >Remover</Navbutton>
      <Navbutton onClick={props.viewDetail}>ver detalhes</Navbutton>
      </NavCardpoke>
  );
}
