import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useDeleteInvestment = () => {
  const queryClient = useQueryClient();

  const { mutate: removeInvestment, isError, isPending, isSuccess, ...args  } = useMutation({
    mutationKey: ['deleteInvestment'],
    mutationFn: (id: string) => mutationData<Investment>({
      url: `investments/${id}`,
      method: 'DELETE'
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['investmentsByInvestor'] })
  });

  return {
    removeInvestment,
    isError,
    isPending,
    isSuccess,
    args
  }
}

export default useDeleteInvestment;
