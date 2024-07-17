import { response } from '../../config/response';
import { successStatus } from '../../config/successStatus';

import { getAllPokemon, getOnePokemon } from '../providers/pokemon-provider';

export const getAllPokemonController = async (req, res) => {
  return res.send(response(successStatus.GET_ALL_POSTS_SUCCESS, await getAllPokemon()));
};

export const getPokemonController = async (req, res) => {
  const { number } = req.params;
  return res.send(response(successStatus.GET_ONE_POST_SUCCESS, await getOnePokemon(number)));
};
