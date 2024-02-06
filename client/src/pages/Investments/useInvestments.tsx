import { getAllInvestments } from '../../services/investmentsService';

const useInvestments = () => {
  const { data, isError , isLoading, isSuccess } = getAllInvestments();

  return {
    isLoading,
    isError,
    data,
    isSuccess
  }
}

export default useInvestments;
