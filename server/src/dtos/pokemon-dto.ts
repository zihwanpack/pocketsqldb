type TPokemonData = {
  name: string;
  image: string;
  types: string[];
};

export const pokemonResponseDTO = (data: any[]): { pokemonData: TPokemonData[] } => {
  const pokemonData: TPokemonData[] = data.map(item => ({
    name: item.name,
    image: item.imageUrl,
    types: item.types,
  }));
  return { pokemonData };
};
