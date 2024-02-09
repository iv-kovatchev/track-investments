import { getInvestmentsByUserId } from '../../services/investmentsService';
import { UseInvestmentsProps } from './types';
import CloseButton from './DeleteButton';

const useDashboard = ({ currentUser }: UseInvestmentsProps) => {
  const {
    data,
    isLoading:isLoadingAllInvestments,
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
      deleteButton: <CloseButton investment={investment} />
    }));

  return {
    isLoadingAllInvestments,
    data,
    tableData
  }
}

export default useDashboard;
