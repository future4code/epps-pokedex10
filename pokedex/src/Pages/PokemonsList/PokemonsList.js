import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsPage, goToPokedexPage } from '../../Routes/Coordinator';
import {Navbutton} from '../../Styled/Styled'

export default function PokemonsList (){
    const history = useHistory();

  return (
      <div>
          <h2>PokemonsList</h2>
          <Navbutton onClick={() => goToDetailsPage(history)}>ver detalhes</Navbutton>
          <Navbutton>Add a Pokedex</Navbutton>

      </div>
  )
}