import React from 'react';
import pokemons from '../data.jsx';
import Pokecard from './Pokecard';

import './Pokedex.css';


const Pokedex = () => {
  return (
    <div className='Pokedex'>
        <h1 className='Pokedex-heading'>Pokedex</h1>
        <div className='Pokedex-cards-area'>
          {pokemons.map((pokemon, idx) => <Pokecard key={idx} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />)}
        </div>
    </div>
  );
};

export default Pokedex;
