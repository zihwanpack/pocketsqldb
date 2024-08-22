import { deletePokemon, postPokemon, updatePokemon } from '../models/pokemon-dao';
import { IOnePokemonProps, TPokemonData } from '../../types';
import { postPokemonResponseDTO, updatePokemonResponseDTO, deletePokemonResponseDTO } from '../dtos/pokemon-dto';

const deleteOnePokemon = async (number: IOnePokemonProps): Promise<ReturnType<typeof deletePokemonResponseDTO>> => {
  const pokemon = await deletePokemon(number);
  return deletePokemonResponseDTO(pokemon);
};

const postOnePokemon = async (poketData: TPokemonData): Promise<ReturnType<typeof postPokemonResponseDTO>> => {
  const pokemon = await postPokemon(poketData);
  return postPokemonResponseDTO(pokemon);
};

const updateOnePokemon = async (
  number: IOnePokemonProps,
  poketData: TPokemonData,
): Promise<ReturnType<typeof updatePokemonResponseDTO>> => {
  const pokemon = await updatePokemon(number, poketData);
  return updatePokemonResponseDTO(pokemon);
};

export { deleteOnePokemon, postOnePokemon, updateOnePokemon };
