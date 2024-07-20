import { TDBItem, TPokemonData } from '../../types';

const getPokemonResponseDTO = (data: TDBItem[]): { pokemonData: TPokemonData[] } => {
  const pokemonData: TPokemonData[] = data.map(item => ({
    name: item.name,
    image: item.imageUrl,
    types: item.types,
  }));
  return { pokemonData };
};

const deletePokemonResponseDTO = (data: TDBItem): { pokemonData: TPokemonData } => {
  const pokemonData: TPokemonData = {
    name: data.name,
    image: data.imageUrl,
    types: data.types,
  };
  return { pokemonData };
};

const postPokemonResponseDTO = (data: any): { pokemonData: TPokemonData } => {
  return data;
};

export { getPokemonResponseDTO, deletePokemonResponseDTO, postPokemonResponseDTO };
