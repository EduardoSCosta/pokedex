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

  const capitalize = (name) => {
    let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  
    return capitalized;
  }

  useEffect(() => {
    api_call();
  }, []);

  return(
    <div>
      <h1>#{pokemonId} {pokeData.name && capitalize(pokeData.name)}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt="Sprite"/>
      <div className="types-container">
        {pokeData.types && pokeData.types.map((pokeType) => {
        return (<p className={`poke-type ${pokeType.type.name}-type`}
                  key={pokeType.type.name}>{pokeType.type.name}
                </p>);
        })}
      </div>
      <ul>
      <PokeStats stats={pokeData.stats}/>
      </ul>
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