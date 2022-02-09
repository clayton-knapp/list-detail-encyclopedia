import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from './services/fetch-utils';
import Item from './Item';
import { useHistory, useParams } from 'react-router-dom';

export default function List() {

  const history = useHistory();
  const params = useParams();

  // STATE
  const PER_PAGE = 20;
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(params.page ? parseInt(params.page) : 1);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState(params.search ? params.search : '');


  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchInput);
  }
  
  //USE EFFECT FOR WHEN SEARCH CHANGES - URL UPDATES
  useEffect(() => {
    history.replace(`/${currentPage}/${search}`);
  }, [search, history, currentPage]);
  

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
      <form action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          Search: 
          <input type="text"
            onChange={(e)=> {
              setSearchInput(e.target.value);
            }
            }
          />
        </label>
      </form>
      <div className='list-container'>
        {
          pokemon.map((pokemon, i) => 
            <Item
              key={pokemon.pokemon + i}
              pokemon={pokemon}
              currentPage = {currentPage}
              search = {search}
            />
          )
        }
      </div>
    </div>
  );
}

