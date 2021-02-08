import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsPage, goToPokedexPage } from '../../Routes/Coordinator';

export default function PokemonsList (){
    const history = useHistory();

  return (
      <div>
          <h2>PokemonsList</h2>
          <button onClick={() => goToDetailsPage(history)}>ver detalhes</button>
          <button>Add a Pokedex</button>

      </div>
  )
}