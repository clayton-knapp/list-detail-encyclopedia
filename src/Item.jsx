import React from 'react';

export default function Item({ pokemon }) {
  return (
    <div className='item' style={{ backgroundColor: pokemon.color_1 }}>
      <h2>{pokemon.pokemon.charAt(0).toUpperCase() + pokemon.pokemon.slice(1)}</h2>
      <h3>Type: {pokemon.type_1.charAt(0).toUpperCase() + pokemon.type_1.slice(1)}</h3>
      <img src={pokemon.url_image} alt="" />
    </div>
  );
}
