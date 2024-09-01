import { useEffect, useState } from 'react';
import { FetchResult } from '../types';

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
        setPending(false);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
