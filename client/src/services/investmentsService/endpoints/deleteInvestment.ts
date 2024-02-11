import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useDeleteInvestment = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate: removeInvestment, isError, isPending, isSuccess, ...args  } = useMutation({
    mutationKey: ['deleteInvestment'],
    mutationFn: () => mutationData<Investment>({
      url: `investments/${id}`,
      method: 'DELETE'
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['investmentsByUser'] })
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
