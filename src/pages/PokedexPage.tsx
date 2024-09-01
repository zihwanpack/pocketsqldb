import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import Card from '../components/card/Card';
interface Pokemon {
  image: string;
  name: string;
  types: string;
}

interface ApiResponse {
  code: string;
  isSuccess: boolean;
  message: string;
  result: Array<Pokemon>;
}

const PokedexPage: React.FC = () => {
  const url = 'http://localhost:3000';
  const { data, isPending, error } = useFetch<ApiResponse>(url);

  if (error) return <div>에러 발생: {error.message}</div>;
  const res = data?.result;
  return isPending ? (
    <LoadingSpinner />
  ) : (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {res?.map(({ name, image, types }, index) => {
        return <Card id={index} name={name} image={image} types={types} />;
      })}
    </section>
  );
};

export default PokedexPage;
