import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import pokeEntry from '../../functions/pokeEntry';
import capitalize from '../../functions/capitalize';

const PokeList = ({
  pokemons
}) => {

const getPokeId = (url) => {
  let pokeId = url.replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/|\//g, "");
  return pokeId;
}

  return (
    <div className="poke-list">
      {pokemons.map((poke) => {
      return (<Link 
                className="poke-name" to={`/pokemon/${getPokeId(poke.pokemon_species.url)}`} 
                key={poke.entry_number}>
                  <span className="poke-name-text"> {pokeEntry(poke.entry_number)} {capitalize(poke.pokemon_species.name)}</span>
              </Link>);
      })}
    </div>
  );
}

export default PokeList;