import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from './services/fetch-utils';
import Item from './Item';

export default function List() {
  // STATE
  const PER_PAGE = 10;
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  
  
  // ON LOAD AND PAGE CHANGE useEffect
  useEffect(() => {
    
    async function fetchAndSetPokemon() {
      const end = currentPage * PER_PAGE - 1;
      const start = end - PER_PAGE + 1;

      const returnedPokemon = await fetchPokemon(start, end);
      setPokemon(returnedPokemon);
    }

    fetchAndSetPokemon();
  }, [currentPage]);

  return (
    <div className='list-page'>
      <h2>Pokemon List:</h2>
      <h3>Page: {currentPage}</h3>
      <div className='button-container'>
        <button
          disabled={currentPage === 1}
          onClick={()=> setCurrentPage(currentPage - 1)}
        >Prev Page</button>
        <button
          disabled={pokemon.length < PER_PAGE}
          onClick={()=> setCurrentPage(currentPage + 1)}
        >Next Page</button>
      </div>
      <div className='list-container'>
        {
          pokemon.map((pokemon, i) => 
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

