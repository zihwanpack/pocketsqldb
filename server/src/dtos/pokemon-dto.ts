import { TDBItem, TPokemonData } from '../../types';

export const pokemonResponseDTO = (data: TDBItem[]): { pokemonData: TPokemonData[] } => {
  const pokemonData: TPokemonData[] = data.map(item => ({
    name: item.name,
    image: item.imageUrl,
    types: item.types,
  }));
  return { pokemonData };
};
