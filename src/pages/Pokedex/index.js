import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeList from '../../components/PokeList';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);

  const api_call = async () => {

    const pokeRequest = api.get('pokedex/1/');
    const pokeResponse = await pokeRequest;
    setPokemons(pokeResponse.data.pokemon_entries);
  }

  useEffect(() => {
    api_call();
  }, []);

  return(
    <div>
        <PokeList pokemons={pokemons}/>
    </div>
  );
}

export default Pokedex;