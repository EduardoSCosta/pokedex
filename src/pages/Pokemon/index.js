import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeStats from '../../components/PokeStats';

const Pokemon = ({match}) => {

  const {params: {pokemonId},} = match;

  const [pokeData, setPokeData] = useState([]);

  const api_call = async () => {

    const pokeRequest = api.get(`pokemon/${pokemonId}`);
    const pokeResponse = await pokeRequest;
    setPokeData(pokeResponse.data);
  }

  useEffect(() => {
    api_call();
  }, []);

  return(
    <div>
      <h1>#{pokemonId} {pokeData.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt="Sprite"/>
      <PokeStats stats={pokeData.stats}/>
    </div>
  );
}

export default Pokemon;

/*
      {pokeData.stats.map((poke) => {
      return (<p 
                key={poke.stat.name}>{poke.stat.name} {poke.base_stat}</p>);
      })}
*/