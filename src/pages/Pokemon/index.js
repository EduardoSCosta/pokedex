import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeStats from '../../components/PokeStats';
import PageHeader from '../../components/PageHeader';
import capitalize from '../../functions/capitalize';
import PokeType from '../../components/PokeType';
import pokeEntry from '../../functions/pokeEntry';

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
      <div className="poke-description">
        <h1 className="poke-number-name">#{pokeEntry(pokemonId)} {pokeData.name && capitalize(pokeData.name)}</h1>
        <img className="poke-pic" src={`https://www.serebii.net/pokemon/art/${pokeEntry(pokemonId)}.png`} alt="Sprite"/>
        <PokeType types={pokeData.types}/>
        <ul className="stats-list">
          <PokeStats stats={pokeData.stats}/>
        </ul>
      </div>
    </>
  );
}

export default Pokemon;