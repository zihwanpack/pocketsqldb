import { pokemonResponseDTO } from '../dtos/pokemon-dto';
import { getPokemon } from '../models/pokemon-dao';
export const getAllPokemon = async () => {
  return pokemonResponseDTO(await getPokemon());
};

export const getOnePokemon = async number => {
  return pokemonResponseDTO(await getPokemon(number));
};
