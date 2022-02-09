import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSinglePokemon } from './services/fetch-utils';
import { firstLetterToUpperCase } from './services/utils';

export default function Detail() {
  //STATE
  const [currentPokemon, setCurrentPokemon] = useState('');

  const params = useParams();

  //ON LOAD AND ID CHANGE Use Effect
  useEffect(() => {

    async function fetchAndSetSinglePokemon() {
      const pokemon = await fetchSinglePokemon(params.id);
      setCurrentPokemon(pokemon);
    }

    fetchAndSetSinglePokemon();

  }, [params.id]);

  console.log(currentPokemon);


  return (
    <div className='detail-page'>
      <Link to='/'>Go Home</Link>
      <div className='details-container'
        onClick={()=> window.open(currentPokemon.pokedex)}
      >
        <h1>{firstLetterToUpperCase(currentPokemon.pokemon)}</h1>
        <h2>Type: {firstLetterToUpperCase(currentPokemon.type_1)}</h2>
        <img src={currentPokemon.url_image} alt="" />
        <h3>Attack: {currentPokemon.attack}</h3>
        <h3>Defense: {currentPokemon.defense}</h3>
        <h3>Speed: {currentPokemon.speed}</h3>
      </div>
    </div>
  );
}
