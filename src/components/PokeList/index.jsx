import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const PokeList = ({
  pokemons
}) => {

  return (
    <>
      {pokemons.map((poke) => {
      return (<Link 
                className="poke-name" to={`/pokemon/${poke.entry_number}`} 
                key={poke.entry_number}>#{poke.entry_number} {poke.pokemon_species.name}
              </Link>);
      })}
    </>
  );
}

export default PokeList;