import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../index';
import { Investment } from '../types';

const useGetInvestmentsByUserId = (userId?: string) => {
  const { data, isLoading, isError, ...args } = useQuery<Investment[], Error>({
    queryKey: ['investmentsByUser', userId],
    queryFn: () => fetchData(`investments?userId=${userId}`)
  })

  return {
    data,
    isLoading,
    isError,
    args
  }
}

export default useGetInvestmentsByUserId;
