import { useState } from 'react';
import { AxiosError } from 'axios';
import { axiosInstance } from '../api/axios';

interface DeleteResponse {
  success: boolean;
  message: string;
}

function useDelete(id: number) {
  const [data, setData] = useState<DeleteResponse | null>(null);
  const [isPending, setPending] = useState<boolean | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const deleteData = async () => {
    setPending(true);
    try {
      const res = await axiosInstance.delete(`/${id}`);
      setData(res.data);
      setPending(false);
    } catch (err) {
      setError(err as AxiosError);
    }
  };
  return { data, isPending, error, deleteData };
}

export default useDelete;
