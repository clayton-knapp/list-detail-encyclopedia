import React from 'react';
import { useState, useEffect } from 'react';
import { fetchAllPokemon } from './services/fetch-utils';
import Item from './Item';

export default function List() {
  // STATE
  const PER_PAGE = 10;
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);



  // ON LOAD useEffect
  useEffect(() => {
    
    async function fetchAndSetPokemon() {
      const end = currentPage * PER_PAGE - 1;
      const start = end - PER_PAGE;

      const returnedPokemon = await fetchAllPokemon(start, end);
      setAllPokemon(returnedPokemon);
    }

    fetchAndSetPokemon();
  }, []);


  return (
    <div className='list-page'>
      <h2>Pokemon List:</h2>
      <div className='list-container'>
        {
          allPokemon.map((pokemon, i) => 
            <Item
              key={pokemon.pokemon + i}
              pokemon={pokemon}
            />
          )
        }
      </div>
    </div>
  );
}

