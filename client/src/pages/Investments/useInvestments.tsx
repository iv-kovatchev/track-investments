import { getInvestmentsByUserId } from '../../services/investmentsService';
import { UseInvestmentsProps } from './types';
import DeleteButton from './DeleteButton';

const useInvestments = ({ currentUser }: UseInvestmentsProps) => {
  const {
    data,
    isLoading,
    isError
  } = getInvestmentsByUserId(currentUser ? currentUser.userId : '');

  if(isError) {
    alert('There is network error')
  }

  const tableData = data?.map(
    (investment) => ({
      name: investment.name,
      type: investment.type,
      value: investment.value,
      status: investment.status,
      date: investment.date,
      deleteButton: <DeleteButton investment={investment} />
    }))

  return {
    isLoading,
    data,
    tableData
  }
}

export default useInvestments;
