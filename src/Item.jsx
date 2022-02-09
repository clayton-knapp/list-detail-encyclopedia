import React from 'react';
import { Link } from 'react-router-dom';
import { firstLetterToUpperCase } from './services/utils';

export default function Item({ pokemon }) {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <div className='item' style={{ backgroundColor: pokemon.color_1 }}>
        <h2>{firstLetterToUpperCase(pokemon.pokemon)}</h2>
        <h3>Type: {firstLetterToUpperCase(pokemon.type_1)}</h3>
        <img src={pokemon.url_image} alt="" />
      </div>
    </Link>
  );
}
