import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';

const Pokemon = ({match}) => {

  const {params: {pokemonId},} = match;

  const [pokeData, setPokeData] = useState([]);

  const api_call = async () => {

    const pokeRequest = api.get(`pokemon/${pokemonId}`);
    const pokeResponse = await pokeRequest;
    console.log(pokeResponse.data);
    setPokeData(pokeResponse.data);
  }

  useEffect(() => {
    api_call();
  }, []);


  return(
    <div>
      <h1>#{pokemonId}</h1>
      <h1>{pokeData.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt="Sprite"/>
    </div>
  );
}

export default Pokemon;