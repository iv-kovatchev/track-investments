import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useDeleteInvestment = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteInvestment, data, isError, isPending, ...args  } = useMutation({
    mutationKey: ['deleteInvestment'],
    mutationFn: () => mutationData<Investment>({
      url: `investments/${id}`,
      method: 'DELETE'
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['allInvestments'] })
  });

  return {
    deleteInvestment,
    data,
    isError,
    isPending,
    args
  }
}

export default useDeleteInvestment;
