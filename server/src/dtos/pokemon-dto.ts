import { TDBItem, TPokemonData } from '../../types';
import { QueryResult } from 'mysql2';
const getPokemonResponseDTO = (data: TDBItem[]): TPokemonData[] => {
  const pokemonData: TPokemonData[] = data.map(item => ({
    name: item.name,
    image: item.imageUrl,
    types: item.types,
  }));
  return pokemonData;
};

const deletePokemonResponseDTO = (data: TDBItem): TPokemonData => {
  const pokemonData: TPokemonData = {
    name: data.name,
    image: data.imageUrl,
    types: data.types,
  };
  return pokemonData;
};

const postPokemonResponseDTO = (data: QueryResult): QueryResult => {
  return data;
};

const updatePokemonResponseDTO = (data: QueryResult): QueryResult => {
  return data;
};

export { getPokemonResponseDTO, deletePokemonResponseDTO, postPokemonResponseDTO, updatePokemonResponseDTO };
