import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useUpdateInvestment = (investment: Investment) => {
  const queryClient = useQueryClient();

  const { mutate: editInvestment, data, isError, isPending, ...args  } = useMutation({
    mutationKey: ['editInvestment'],
    mutationFn: () => mutationData<Investment>({
      url: `investments/${investment.id}`,
      method: 'PUT',
      data: investment
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['investmentsByUser'] })
  });

  return {
    editInvestment,
    data,
    isError,
    isPending,
    args
  }
}

export default useUpdateInvestment;
