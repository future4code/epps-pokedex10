import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsPage } from '../../Routes/Coordinator';

export default function Pokedex (){
  const history = useHistory();
  return (
      <div>
           <h2>Pokedex</h2>
           <button onClick={() => goToDetailsPage(history)}>Ver detalhes</button>
           <button>Remover da Pokedex</button>
      </div>
     
  )
}