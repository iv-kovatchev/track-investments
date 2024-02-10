import { getInvestmentsByUserId } from '../../services/investmentsService';
import { UseInvestmentsProps } from './types';
import CloseButton from './DeleteButton';
import { Investment } from '../../services/investmentsService/types';
import { MdDeleteSweep } from 'react-icons/md';

const useDashboard = ({ currentUser }: UseInvestmentsProps) => {
  const {
    data,
    isLoading:isLoadingAllInvestments,
    isError
  } = getInvestmentsByUserId(currentUser ? currentUser.userId : '');

  if(isError) {
    alert('There is network error')
  }

  const investmentName = (investmentId: string) => {
    const handleDeleteInvestment = () => {
      console.log(investmentId);
    }

    return (
      <div className="dashboard__table-delete-icon">
        <MdDeleteSweep onClick={handleDeleteInvestment}/>
      </div>
    )
  }

  const tableData = data?.map (
    (investment) => ({
      name: investment.name,
      type: investment.type,
      value: investment.value,
      status: investment.status,
      date: investment.date,
      closeButton: <CloseButton investment={investment} />,
      deleteButton: investmentName(investment.id),
    }));

  return {
    isLoadingAllInvestments,
    data,
    tableData
  }
}

export default useDashboard;
