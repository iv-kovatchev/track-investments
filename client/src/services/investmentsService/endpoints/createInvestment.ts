import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../types';

const useCreateInvestment = () => {
  const queryClient = useQueryClient();

  const { mutate: addInvestment, data, isError, isPending, isSuccess, ...args  } = useMutation({
    mutationKey: ['createInvestment'],
    mutationFn: (investment: Investment) => mutationData<Investment>({
      url: 'investments',
      method: 'POST',
      data: investment
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['investmentsByInvestor'] })
  });

  return {
    addInvestment,
    data,
    isError,
    isPending,
    isSuccess,
    args
  }
}

export default useCreateInvestment;
