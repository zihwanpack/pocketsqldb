import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import Card from '../components/card/Card';
import { useState, useCallback, useMemo } from 'react';
interface Pokemon {
  image: string;
  name: string;
  types: string;
  number: number;
}

interface ApiResponse {
  code: string;
  isSuccess: boolean;
  message: string;
  result: Array<Pokemon>;
}

const PokedexPage: React.FC = () => {
  const [deletedIds, setDeletedIds] = useState<number[]>([]);
  const handleDelete = useCallback((id: number) => {
    setDeletedIds(prevIds => [...prevIds, id]);
  }, []);

  const baseUrl = 'http://localhost:3000';
  const { data, isPending, error } = useFetch<ApiResponse>(baseUrl, 40, 20);
  const filteredPokemons = useMemo(() => {
    return data?.result.filter(pokemon => !deletedIds.includes(pokemon.number)) || [];
  }, [data?.result, deletedIds]);

  if (error) return <div>에러 발생: {error.message}</div>;
  return isPending ? (
    <LoadingSpinner />
  ) : (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {filteredPokemons?.map(({ name, image, types, number }) => {
        return (
          <Card
            key={number}
            id={number}
            name={name}
            image={image}
            types={types}
            onDelete={() => handleDelete(number)}
          />
        );
      })}
    </section>
  );
};

export default PokedexPage;
