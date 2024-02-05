import { useGetAllInvestments } from '../../services/investmentsService';

const useInvestments = () => {
  const { data, isError , isLoading, isSuccess } = useGetAllInvestments();

  return {
    isLoading,
    data,
    isSuccess
  }
}

export default useInvestments;
