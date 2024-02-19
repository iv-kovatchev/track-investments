import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../index';
import { Investor } from '../types';

const useGetAllInvestors = () => {
  const { data, isLoading, isError, ...args } = useQuery<Investor[], Error>({
    queryKey: ['allInvestors'],
    queryFn: () => fetchData('investors')
  });

  return {
    data,
    isLoading,
    isError,
    args
  }
};

export default useGetAllInvestors;
