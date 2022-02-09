import { client, checkError } from './client.js';

export async function fetchAllPokemon(start, end) {
  const response = await client
    .from('pokemon')
    .select()
    .range(start, end);

  return checkError(response);
}