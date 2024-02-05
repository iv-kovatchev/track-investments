import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../index';
import { Investment } from '../types';

const useGetAllInvestments = () => {
  const { data, isError, isLoading, isSuccess, ...args } = useQuery<Investment[], Error>({
    queryKey: ['allInvestments'],
    queryFn: () => fetchData('investments')
  });

  return {
    data,
    isError,
    isLoading,
    isSuccess,
    args };
}

export default useGetAllInvestments;
