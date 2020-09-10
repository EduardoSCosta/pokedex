import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const PokeList = ({
  pokemons
}) => {

const getPokeId = (url) => {
  let pokeId = url.replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon-species\//, "");
  return pokeId;
}

const capitalize = (name) => {
  let capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return capitalized;
}

  return (
    <>
      {pokemons.map((poke) => {
      return (<Link 
                className="poke-name" to={`/pokemon/${getPokeId(poke.pokemon_species.url)}`} 
                key={poke.entry_number}>#{poke.entry_number} {capitalize(poke.pokemon_species.name)}
              </Link>);
      })}
    </>
  );
}

export default PokeList;