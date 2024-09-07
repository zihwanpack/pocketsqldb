import { useEffect, useState } from 'react';
import { FetchResult } from '../types';

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setPending(true);
      try {
        const res = await fetch(url, {
          method: 'GET',
          signal: abortController.signal,
        });
        if (!res.ok) throw new Error('데이터 불러오기 실패');
        const result = await res.json();
        setData(result);
        setPending(false);
      } catch (err) {
        console.log(err);
        setError(err as Error);
      } finally {
        setPending(false);
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
