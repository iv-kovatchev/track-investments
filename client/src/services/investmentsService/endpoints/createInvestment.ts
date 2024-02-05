import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationData } from '../../index';
import { Investment } from '../../types';

const useCreateInvestment = (investment: Investment) => {
  const queryClient = useQueryClient();

  const { mutate: addInvestment, data, isError, isPending, ...args  } = useMutation({
    mutationKey: ['createInvestment'],
    mutationFn: () => mutationData<Investment>({
      url: 'investments',
      method: 'POST',
      data: investment
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['allInvestments'] })
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
