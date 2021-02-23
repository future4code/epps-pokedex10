import axios from "axios";
import React, { useEffect, useState } from "react";

import { Navbutton,Navimg,Navstyle,Name,Title} from "../Styled/StyledCardPokemon";

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
    <Navstyle>
    <Title id={props.id}>
      <Name> {props.name}</Name>
      <Name>{props.id}</Name>
    </Title>
      <Navimg src={image} alt={props.name}></Navimg>
      <Navbutton onClick={props.addPokemon}>Add a Pokedex</Navbutton>
      <Navbutton onClick={props.viewDetail}>Ver detalhes</Navbutton>
    
    </Navstyle>
  );
}
