import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getAllPokemonController,
  getOnePokemonController,
  deleteOnePokemonController,
  postPokemonController,
  updatePokemonController,
} from '../controllers/pokemon-controller';

export const pokemonRouter = express.Router({ mergeParams: true });

pokemonRouter.route('/').get(asyncHandler(getAllPokemonController)).post(asyncHandler(postPokemonController));

pokemonRouter
  .route('/:number')
  .get(asyncHandler(getOnePokemonController))
  .delete(asyncHandler(deleteOnePokemonController))
  .put(asyncHandler(updatePokemonController));
