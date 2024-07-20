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
};

type TDBItem = TPokemonData & {
  imageUrl: string;
};

interface IOnePokemonProps {
  number?: string | number | null;
}

export type { IDatabaseConfig, IOnePokemonProps, TDBItem, TPokemonData, IStatusType };
