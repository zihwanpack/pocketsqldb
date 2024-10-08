import { errStatus } from '../../config/errorStatus';
import { errResponse, response } from '../../config/response';
import { successStatus } from '../../config/successStatus';
import { getAllPokemonProvider, getOnePokemonProvider } from '../providers/pokemon-provider';
import { deleteOnePokemon, postOnePokemon, updateOnePokemon } from '../services/pokemon-service';

const getAllPokemonController = async (req, res) => {
  const { limit: strLimit, cursor } = req.query;
  const limit = parseInt(strLimit);
  try {
    return res.send(response(successStatus.GET_ALL_POSTS_SUCCESS, await getAllPokemonProvider(cursor, limit)));
  } catch (err) {
    res.send(errResponse(errStatus.BAD_REQUEST));
  }
};

const getOnePokemonController = async (req, res) => {
  try {
    const { number } = req.params;
    return res.send(response(successStatus.GET_ONE_POST_SUCCESS, await getOnePokemonProvider(number)));
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

const postPokemonController = async (req, res) => {
  try {
    return res.send(response(successStatus.MAKE_POST_SUCCESS, await postOnePokemon(req.body)));
  } catch (err) {
    res.send(errResponse(errStatus.BAD_REQUEST));
  }
};

const updatePokemonController = async (req, res) => {
  try {
    const { number } = req.params;
    return res.send(response(successStatus.UPDATE_POST_SUCCESS, await updateOnePokemon(number, req.body)));
  } catch (err) {
    res.send(errResponse(errStatus.BAD_REQUEST));
  }
};

export {
  getAllPokemonController,
  getOnePokemonController,
  deleteOnePokemonController,
  postPokemonController,
  updatePokemonController,
};
