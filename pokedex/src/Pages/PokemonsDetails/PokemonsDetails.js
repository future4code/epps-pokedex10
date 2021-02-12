import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import InfoPokemon from "../../context/context";
import {DetailContainer,Imag,NavDetail1, NavDetail2,NavDetail3,Name,Name1,Name2} from '../../Styled/styledDetalhes';

export default function PokemonsDetails() {
  const pathParams = useParams();
  const { states, requests } = useContext(InfoPokemon);

  useEffect(() => {
    requests.getDetail(pathParams.name);
  }, []);

  const pokeStats =
    states.stats &&
    states.stats.map((status) => {
      return (
        <div>
          <span>{status.stat.name}:</span>
          <span>{status.base_stat}</span>
        </div>
      );
    });

  const pokeType =
    states.type &&
    states.type.map((type) => {
      return (
        <div>
          <span>{type.type.name}</span>
        </div>
      );
    });

  const pokeMoves =
    states.moves &&
    states.moves.map((move) => {
      return (
        <div>
          <p>{move.move.name}</p>
        </div>
      );
    });

  return (
    
  <DetailContainer>
      <Imag>
      <img src={states.images.front_default} />
      <img src={states.images.back_default} />
    </Imag>
    <NavDetail1>
      <h2>Poderes</h2>
      <Name>{pokeStats}</Name>
    </NavDetail1>
    <NavDetail2>
      <h2>Tipo</h2>
      <Name1>{pokeType}</Name1>
      </NavDetail2>
      <NavDetail3>
      <h2>Ataques</h2>
      <Name2>{pokeMoves}</Name2>
      </NavDetail3>
  </DetailContainer>
    
  );
}
