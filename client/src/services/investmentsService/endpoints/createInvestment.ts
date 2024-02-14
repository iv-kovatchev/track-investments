import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useCreateInvestment = () => {
  const queryClient = useQueryClient();

  const { mutate: addInvestment, data, isError, isPending, ...args  } = useMutation({
    mutationKey: ['createInvestment'],
    mutationFn: (investment: Investment) => mutationData<Investment>({
      url: 'investments',
      method: 'POST',
      data: investment
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['investmentsByUser'] })
  });

  return {
    addInvestment,
    data,
    isError,
    isPending,
    args
  }
}

export default useCreateInvestment;
