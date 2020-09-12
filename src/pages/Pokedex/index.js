import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeList from '../../components/PokeList';
import PageHeader from '../../components/PageHeader';
import RegionSelect from '../../components/RegionSelect';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [regionDex, setRegionDex] = useState(1);

  const api_call = async () => {

    const pokeRequest = api.get(`pokedex/${regionDex}/`);
    const pokeResponse = await pokeRequest;
    setPokemons(pokeResponse.data.pokemon_entries);
  }

  useEffect(() => {
    api_call();
  }, [regionDex]);

  return(
    <>
      <PageHeader/>
      <RegionSelect regValue={regionDex} regionChange={e => {setRegionDex(e.target.value)}}/>
      <PokeList pokemons={pokemons}/>
    </>
  );
}

export default Pokedex;