import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../index';
import { Investment } from './types';

const useGetInvestment = (investmentId: number) => {
  const { data, error, isLoading, ...args } = useQuery<Investment, Error>({
    queryKey: ['oneInvestment'],
    queryFn: () => fetchData(`investments/${investmentId}`)
  });

  return { data, error, isLoading, args };
}

export default useGetInvestment;
