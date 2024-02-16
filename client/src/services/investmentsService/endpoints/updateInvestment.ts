import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useUpdateInvestment = () => {
  const queryClient = useQueryClient();

  const { mutate: editInvestment, isError, isPending, isSuccess, ...args  } = useMutation({
    mutationKey: ['editInvestment'],
    mutationFn: (investment: Investment) => mutationData<Investment>({
      url: `investments/${investment.id}`,
      method: 'PUT',
      data: investment
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['investmentsByUser'] })
  });

  return {
    editInvestment,
    isError,
    isPending,
    isSuccess,
    args
  }
}

export default useUpdateInvestment;
