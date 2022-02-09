import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from './services/fetch-utils';
import Item from './Item';
import { useHistory } from 'react-router-dom';

export default function List() {
  // STATE
  const PER_PAGE = 20;
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const history = useHistory();
  
  // ON LOAD AND PAGE CHANGE useEffect
  useEffect(() => {
    
    async function fetchAndSetPokemon() {
      const end = currentPage * PER_PAGE - 1;
      const start = end - PER_PAGE + 1;

      const returnedPokemon = await fetchPokemon(start, end, search);
      setPokemon(returnedPokemon);
    }

    fetchAndSetPokemon();
  }, [currentPage, search]);

  return (
    <div className='list-page'>
      <h2>Pokemon List:</h2>
      <h3>Page: {currentPage}</h3>
      <div className='button-container'>
        <button
          disabled={currentPage === 1 || search}
          onClick={()=> setCurrentPage(currentPage - 1)}
        >Prev Page</button>
        <button
          disabled={pokemon.length < PER_PAGE || search}
          onClick={()=> setCurrentPage(currentPage + 1)}
        >Next Page</button>
      </div>
      <label htmlFor="">
        Search: 
        <input type="text"
          onChange={(e)=> {
            setSearch(e.target.value);
            history.replace(`/${e.target.value}`);
          }
          }
        />
      </label>
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

