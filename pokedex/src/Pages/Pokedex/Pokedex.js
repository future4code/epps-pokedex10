import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsPage } from '../../Routes/Coordinator';
import {Navbutton,NameText} from '../../Styled/Styled'

export default function Pokedex (){
  const history = useHistory();
  return (
      <div>
           <h2>Pokedex</h2>
           <Navbutton onClick={() => goToDetailsPage(history)}>Ver detalhes</Navbutton>
           <Navbutton>Remover da Pokedex</Navbutton>
      </div>
     
  )
}