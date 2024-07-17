import express from 'express';
import asyncHandler from 'express-async-handler';
import { getAllPokemonController } from '../controllers/pokemon-controller';

export const pokemonRouter = express.Router({ mergeParams: true });

pokemonRouter.get('/', asyncHandler(getAllPokemonController));
