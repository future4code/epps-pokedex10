import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import InfoPokemon from "../../context/context";

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
          <span>{status.stat.name}</span>
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
    <div>
      <img src={states.images.front_default} />
      <img src={states.images.back_default} />
      <h1>Poderes</h1>
      {pokeStats}
      <h1>Tipo</h1>
      {pokeType}
      <h1>Ataques</h1>
      {pokeMoves}
    </div>
  );
}
