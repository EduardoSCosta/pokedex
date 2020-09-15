import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeList from '../../components/PokeList';
import PageHeader from '../../components/PageHeader';
import RegionSelect from '../../components/RegionSelect';
import lensIcon from '../../assets/icons/wide_lens_gray.png'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [regionDex, setRegionDex] = useState(1);
  const [search, setSearch] = useState("");
  const [pokeFiltered, setPokeFiltered] = useState([]);

  const api_call = async () => {
    const pokeRequest = api.get(`pokedex/${regionDex}/`);
    const pokeResponse = await pokeRequest;
    setPokemons(pokeResponse.data.pokemon_entries);
  }

  useEffect(() => {
    api_call();
  }, [regionDex]);

  useEffect(() => {
    setPokeFiltered(pokemons.filter(pokemon => pokemon.pokemon_species.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, pokemons]);

  return(
    <>
      <PageHeader/>
      <RegionSelect regValue={regionDex} regionChange={e => {setRegionDex(e.target.value)}}/>
      <div className="search-container">
        <div className="search-wrapper">
          <img className="search-icon" src={lensIcon} alt="Search Icon"/>
          <input className="search-input" type="text" placeholder="Pokesearch" onChange={e => {setSearch(e.target.value)}}/>
        </div>
      </div>
      <PokeList pokemons={pokeFiltered}/>
    </>
  );
}

export default Pokedex;