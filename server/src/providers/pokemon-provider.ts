import { getPokemonResponseDTO, getOnePokemonResponseDTO } from '../dtos/pokemon-dto';
import { getPokemon, getOnePokemon } from '../models/pokemon-dao';
import { IOnePokemonProps } from '../../types';

const getAllPokemonProvider = async (
  number: number,
  limit: number,
): Promise<ReturnType<typeof getPokemonResponseDTO>> => {
  const pokemons = await getPokemon(number, limit);
  return getPokemonResponseDTO(pokemons);
};

const getOnePokemonProvider = async (
  number: IOnePokemonProps,
): Promise<ReturnType<typeof getOnePokemonResponseDTO>> => {
  const pokemon = await getOnePokemon(number);
  return getOnePokemonResponseDTO(pokemon);
};

export { getAllPokemonProvider, getOnePokemonProvider };
