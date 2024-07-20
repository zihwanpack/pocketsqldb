import express from 'express';
import asyncHandler from 'express-async-handler';
import { getAllPokemonController, getOnePokemonController } from '../controllers/pokemon-controller';
import { deleteOnePokemonController } from '../controllers/pokemon-controller';

export const pokemonRouter = express.Router({ mergeParams: true });

pokemonRouter.get('/', asyncHandler(getAllPokemonController));

pokemonRouter
  .get('/:number', asyncHandler(getOnePokemonController))
  .delete('/:number', asyncHandler(deleteOnePokemonController));
