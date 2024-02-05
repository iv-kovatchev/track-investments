import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../index';
import { Investment } from './types';

const useGetAllInvestments = () => {
  const { data, error, isLoading, ...args } = useQuery<Investment[], Error>({
    queryKey: ['allInvestments'],
    queryFn: () => fetchData('investments')
  });

  return { data, error, isLoading, args };
}

export default useGetAllInvestments;
