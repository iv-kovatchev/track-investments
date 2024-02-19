import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../index';
import { Investment } from '../types';

const useGetInvestmentsByInvestorId = (investorId?: string) => {
  const { data, isLoading, isError, ...args } = useQuery<Investment[], Error>({
    queryKey: ['investmentsByInvestor', investorId],
    queryFn: () => fetchData(`investments?investorId=${investorId}`)
  })

  return {
    data,
    isLoading,
    isError,
    args
  }
}

export default useGetInvestmentsByInvestorId;
