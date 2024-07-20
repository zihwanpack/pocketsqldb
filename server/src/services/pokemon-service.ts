import { deletePokemonResponseDTO } from '../dtos/pokemon-dto';
import { deletePokemon, postPokemon } from '../models/pokemon-dao';
import { IOnePokemonProps, TPokemonData } from '../../types';

import { postPokemonResponseDTO } from '../dtos/pokemon-dto';

const deleteOnePokemon = async (number: IOnePokemonProps): Promise<ReturnType<typeof deletePokemonResponseDTO>> => {
  const pokemon = await deletePokemon(number);
  return deletePokemonResponseDTO(pokemon);
};

const postOnePokemon = async (poketData: TPokemonData): Promise<ReturnType<typeof postPokemonResponseDTO>> => {
  const pokemon = await postPokemon(poketData);
  return postPokemonResponseDTO(pokemon);
};

const updateOnePokemon = async (number: TPokemonData): Promise<ReturnType<typeof postPokemonResponseDTO>> => {
  const pokemon = await postPokemon(poketData);
  return postPokemonResponseDTO(pokemon);
};

export { deleteOnePokemon, postOnePokemon, updateOnePokemon };
