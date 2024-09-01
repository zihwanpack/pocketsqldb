interface FetchResult<T> {
  data: T | null;
  isPending: boolean;
  error: Error | null;
}

export type { FetchResult };
