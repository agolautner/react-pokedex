import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
    <div className='Pokecard'>
        <h2>{props.name}</h2>
        <img src={link} alt={props.name} />
        <p>Type: {props.type}</p>
        <p>EXP: {props.exp}</p>
    </div>
  );
};

export default Pokecard;
