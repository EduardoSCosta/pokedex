import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeStats from '../../components/PokeStats';
import PageHeader from '../../components/PageHeader';
import capitalize from '../../functions/capitalize';

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
  });

  return(
    <>
      <PageHeader/>
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
    </>
  );
}

export default Pokemon;