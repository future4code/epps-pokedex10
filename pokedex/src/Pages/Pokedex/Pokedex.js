import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardPokemonPokedex from '../../Components/CardPokemonPokedex';
import InfoPokemon from '../../context/context';
import { goToDetailsPage } from '../../Routes/Coordinator';
import {Navbutton,NameText} from '../../Styled/Styled'

export default function Pokedex (){
  const {states, setters, requests} = useContext(InfoPokemon)
  const history = useHistory();
  
  useEffect(() =>{
    // console.log(states.cartPokedex)
  },[])

  // const pokeList = states.cartPokedex.map((item) =>{
  //   return(
  //     <CardPokemonPokedex name={item.name}/>
  //   )
  // })
  // const removePokemonFromPokedex = (itemtoRemove) =>{
  //   const pokedex = states.cartPokedex
  //   // console.log(item)
  //   const index = pokedex.findIndex((i) => i.name === itemtoRemove.name)
    
    
  //   let newPokedex = [...states.cartPokedex]
  //   if(newPokedex[index].amount === 1){
  //     newPokedex.splice(index,1)
  //     console.log(newPokedex)
      
  //   }else{
  //     newPokedex[index].amount -= 1
  //     console.log(newPokedex)
  //   }

  //   setters.setCartPokedex(newPokedex)
  //   alert('Removido')

  // }  
  // const addPokemonPokedex = (newItem) => {
  //   console.log(newItem)
  //   const index = cartPokedex.findIndex((i) => i.name === newItem.name);
  //   let newPokedex = [...cartPokedex];
  //   if(index === -1){
  //       newPokedex.push({...newPokedex, ammount: 1})
  //       alert(`${newPokedex.name} foi add`)
  //   }else{
  //       alert(`${newPokedex} ja faz parte do time`)
  //   }

  //   setCartPokedex(newPokedex);
  //   // alert(`${newItem.name} foi add`);
  // };


  // console.log(states)
  const PokeLista = states.cartPokedex.map((item) =>{
    return(
      <CardPokemonPokedex
        name={item.name}
        url={item.image}
        // removePokemonFromPokedex={() => removePokemonFromPokedex(item)}
      />
    )
  })

  console.log(PokeLista)
  return (
      <div>
           {/* <h2>Pokedex</h2>
           {states.cartPokedex.map((item)=>{
             return(
              <CardPokemonPokedex name={item.name}
              // image={item.image} 
              removePokemon={() =>removePokemonFromPokedex(item)}/>
             )
           })} */}

           {PokeLista}
           
           {/* <Navbutton onClick={() => goToDetailsPage(history)}>Ver detalhes</Navbutton>
           <Navbutton>Remover da Pokedex</Navbutton> */}
      </div>
     
  )
}