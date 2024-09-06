import { useEffect, useState } from 'react';
import { FetchResult } from '../types';

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const abortController = new AbortController();
    console.log(abortController);
    const fetchData = async () => {
      setPending(true);
      try {
        const res = await fetch(url, {
          method: 'GET',
          signal: abortController.signal,
        });
        console.log(res);
        // if (!res.ok)
        const result = await res.json();
        setData(result);
        setPending(false);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
