import { deletePokemonResponseDTO } from '../dtos/pokemon-dto';
import { deletePokemon } from '../models/pokemon-dao';
import { IOnePokemonProps } from '../../types';

const deleteOnePokemon = async (number: IOnePokemonProps): Promise<ReturnType<typeof deletePokemonResponseDTO>> => {
  const pokemon = await deletePokemon(number);
  return deletePokemonResponseDTO(pokemon);
};

export { deleteOnePokemon };
