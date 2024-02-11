import { getInvestmentsByUserId } from '../../services/investmentsService';
import { StateDeleteModalProps, UseInvestmentsProps } from './types';
import CloseButton from './CloseButton';
import { MdDeleteSweep } from 'react-icons/md';
import { useState } from 'react';

const useDashboard = ({currentUser}: UseInvestmentsProps) => {
  const [deleteModalProps, setDeleteModalProps] = useState<StateDeleteModalProps> ({
    investmentId: '',
    isOpen: false
  });

  const {
    data,
    isLoading: isLoadingAllInvestments,
    isError
  } = getInvestmentsByUserId (currentUser ? currentUser.userId : '');

  if (isError) {
    alert ('There is network error');
  }

  const deleteInvestment = (investmentId: string) => {
    const handleDeleteInvestment = () => {
      setDeleteModalProps ({
        investmentId,
        isOpen: true
      });
    }

    return (
      <div className="dashboard__table-delete-icon">
        <MdDeleteSweep onClick={handleDeleteInvestment}/>
      </div>
    )
  }

  let investmentsColumns = [
    'Name',
    'Type',
    'Value',
    'Status',
    'Date',
    ''];

  if(currentUser) {
    investmentsColumns = [...investmentsColumns, ''];
  }

  const tableData = data?.map (
    (investment) => {
      const investmentData = {
        name: investment.name,
        type: investment.type,
        value: investment.value,
        status: investment.status,
        date: investment.date,
        closeButton: <CloseButton investment={investment}/>,
      }

      if (currentUser)
        return { ...investmentData, deleteButton: deleteInvestment(investment.id) };

      return investmentData;
    });

  return {
    isLoadingAllInvestments,
    data,
    investmentsColumns,
    tableData,
    deleteModalProps,
    setDeleteModalProps
  }
}

export default useDashboard;
