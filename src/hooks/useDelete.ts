import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

function useDelete<T>(url: string, id: number) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const deleteData = async () => {
      try {
        setPending(true);
        const res = await axios.delete(`${url}/${id}`);
        setData(res.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setPending(false);
      }
    };

    deleteData();
    return () => {
      setData(null);
      setError(null);
    };
  }, [url, id]);

  return { data, isPending, error };
}

export default useDelete;
