import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { base_URL } from '../../constants/constant';
import InfoPokemon from '../../context/context';

export default function PokemonsDetails (){
  const pathParams = useParams()
  const [frontImage, setFrontImage] = useState('')
  const [backImage, setBackImage] = useState('')
  const [statName, setStatName] = useState([])
  const pokemon = useContext(InfoPokemon)

  // console.log(pathParams)

  const getDetail = () =>{
    axios.get(`${base_URL}/${pathParams.id}`).then((res) =>{
      setFrontImage(res.data.sprites.front_default)
      setBackImage(res.data.sprites.back_default)
      setStatName(res.data.stats)
      console.log(res.data.stats)
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  useEffect(() =>{
    getDetail() 
  }, [])

  
  console.log(statName[0])
  return (
      <div>

        <img src={frontImage}/>
        <img src={backImage} />
        <h1>Poderes</h1>
        {/* {statName.map((r) => {
          return(
            <div>

            <p>Teste {r}</p>
            </div>
          )
        })} */}

      </div>

  )
}