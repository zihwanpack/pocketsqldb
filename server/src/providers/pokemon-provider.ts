import { getPokemonResponseDTO } from '../dtos/pokemon-dto';
import { getPokemon } from '../models/pokemon-dao';
import { IOnePokemonProps } from '../../types';

const getAllPokemon = async (): Promise<ReturnType<typeof getPokemonResponseDTO>> => {
  const pokemons = await getPokemon();
  return getPokemonResponseDTO(pokemons);
};

const getOnePokemon = async (number: IOnePokemonProps): Promise<ReturnType<typeof getPokemonResponseDTO>> => {
  const pokemon = await getPokemon(number);
  return getPokemonResponseDTO(pokemon);
};

export { getAllPokemon, getOnePokemon };
