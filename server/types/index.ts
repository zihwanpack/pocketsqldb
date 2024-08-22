interface IDatabaseConfig {
  host: string;
  user: string;
  port: number;
  database: string;
  password: string;
  waitForConnections: boolean;
  connectionLimit: number;
  queueLimit: number;
}

// interface PokemonRepository {
//   getAll(): Promise<Pokemon[]>
//   get(id: string): Promise<Pokemon>
//   update(id: string, data: Partial<Pokemon>)
//   delete()
//   create()
// }

// async function getAllPokemonsService(repo: PokemonRepository): Promise<Pokemon[]> {
//   return await repo.getAll()
// }

interface IStatusType {
  status: string;
  isSuccess: boolean;
  code: string;
  message: string;
}

type TPokemonData = {
  name: string;
  image: string;
  types: string[];
  number?: string | number | null;
};

type TDBItem = TPokemonData & {
  imageUrl: string;
};

interface IOnePokemonProps {
  number?: string | number | null;
}

export type { IDatabaseConfig, IOnePokemonProps, TDBItem, TPokemonData, IStatusType };
