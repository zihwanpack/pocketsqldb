import express from 'express';

import {
  getAllPokemonController,
  getOnePokemonController,
  deleteOnePokemonController,
  postPokemonController,
  updatePokemonController,
} from '../controllers/pokemon-controller';

export const pokemonRouter = express.Router({ mergeParams: true });

pokemonRouter.route('/').get(getAllPokemonController).post(postPokemonController);

pokemonRouter
  .route('/:number')
  .get(getOnePokemonController)
  .delete(deleteOnePokemonController)
  .put(updatePokemonController);
