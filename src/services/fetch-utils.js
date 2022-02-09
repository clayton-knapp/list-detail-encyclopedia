import { client, checkError } from './client.js';

export async function fetchPokemon(start, end, search) {

  if (!search) {
    const response = await client
      .from('pokemon')
      .select()
      .range(start, end);

    return checkError(response);
  }

  else {
    const response = await client
      .from('pokemon')
      .select()
      .ilike('pokemon', `%${search}%`);

    return checkError(response);
  }
}

export async function fetchSinglePokemon(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id: id })
    .single();

  return checkError(response);
}