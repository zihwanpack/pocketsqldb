import { errStatus } from '../../config/errorStatus';
import { errResponse, response } from '../../config/response';
import { successStatus } from '../../config/successStatus';
import { getAllPokemon, getOnePokemon } from '../providers/pokemon-provider';
import { deleteOnePokemon } from '../services/pokemon-service';

const getAllPokemonController = async (req, res) => {
  try {
    return res.send(response(successStatus.GET_ALL_POSTS_SUCCESS, await getAllPokemon()));
  } catch (err) {
    res.send(errResponse(errStatus.BAD_REQUEST));
  }
};

const getOnePokemonController = async (req, res) => {
  try {
    const { number } = req.params;
    return res.send(response(successStatus.GET_ONE_POST_SUCCESS, await getOnePokemon(number)));
  } catch (err) {
    res.send(errResponse(errStatus.BAD_REQUEST));
  }
};

const deleteOnePokemonController = async (req, res) => {
  try {
    const { number } = req.params;
    return res.send(response(successStatus.DELETE_POST_SUCCESS, await deleteOnePokemon(number)));
  } catch (err) {
    res.send(errResponse(errStatus.BAD_REQUEST));
  }
};

export { getAllPokemonController, getOnePokemonController, deleteOnePokemonController };
