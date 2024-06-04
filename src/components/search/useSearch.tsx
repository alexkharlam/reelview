import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { searchContent } from '../../services/apiTmdb.ts';

const useSearch = (value: string) => {
  const {
    data: searchData,
    refetch,
    isFetching,
    error,
  } = useQuery(['searchContent', value], () => searchContent(value), {
    enabled: false,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!(value.length > 0)) {
        return;
      }
      refetch();
    }, 1000);

    return () => clearTimeout(identifier);
  }, [value, refetch]);

  return { searchData, isFetching, error };
};

export default useSearch;
