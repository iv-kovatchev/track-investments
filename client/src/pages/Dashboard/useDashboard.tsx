import { getInvestmentsByUserId } from '../../services/investmentsService';
import { StateDeleteModalProps, StateEditModalProps, UseInvestmentsProps } from './types';
import CloseButton from './CloseButton';
import { MdDeleteSweep } from 'react-icons/md';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Investment } from '../../services/investmentsService/types';

const useDashboard = ({currentUser}: UseInvestmentsProps) => {
  const [deleteModalProps, setDeleteModalProps] = useState<StateDeleteModalProps> ({
    investmentId: '',
    isOpen: false
  });

  const [editModalProps, setEditModalProps] = useState<StateEditModalProps> ({ isOpen: false });

  const {
    data,
    isLoading: isLoadingAllInvestments,
    isError
  } = getInvestmentsByUserId (currentUser ? currentUser.userId : '');

  if (isError) {
    alert ('There is network error');
  }

  const editDeleteInvestment = (investment: Investment) => {
    const handleDeleteInvestment = () => {
      setDeleteModalProps ({
        investmentId: investment.id,
        isOpen: true
      });
    }

    const handleEditInvestment = () => {
      setEditModalProps({
        investment,
        isOpen: true
      })
    }

    return (
      <div key={investment.id} className="dashboard__table-delete-edit-icons">
        <FaEdit onClick={handleEditInvestment}/>
        <MdDeleteSweep onClick={handleDeleteInvestment}/>
      </div>
    )
  }

  let investmentsColumns = [
    'Name',
    'Type',
    'Value',
    'Status',
    'Date'];

  if(currentUser) {
    investmentsColumns = [...investmentsColumns, '', ''];
  }

  const tableData = data?.map (
    (investment) => {
      const investmentData = {
        name: investment.name,
        type: investment.type,
        value: investment.value,
        status: investment.status,
        date: investment.date
      }

      if (currentUser) {
        return { ...investmentData,
          closeButton: <CloseButton key={investment.id} investment={investment}/>,
          editAndDeleteButtons: editDeleteInvestment(investment)
        };
      }

      return investmentData;
    });

  const setIsOpen = (isOpen: boolean, investment?: Investment) => {
    setEditModalProps({ isOpen, investment });
  }

  return {
    isLoadingAllInvestments,
    data,
    investmentsColumns,
    tableData,
    deleteModalProps,
    editModalProps,
    setDeleteModalProps,
    setIsOpen
  }
}

export default useDashboard;
