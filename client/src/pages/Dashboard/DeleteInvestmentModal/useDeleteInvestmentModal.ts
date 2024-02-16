import { deleteInvestment } from '../../../services/investmentsService';
import { UseDeleteInvestmentModalProps } from './types';
import { useEffect } from 'react';

const useDeleteInvestmentModal = ({
  modalProps,
  setModalProps }: UseDeleteInvestmentModalProps) => {

  const { removeInvestment, isSuccess, isError, isPending } = deleteInvestment();

  const handleDeleteInvestment = () => removeInvestment(modalProps.investmentId);

  if(isError) {
    alert('There is network error');
  }

  useEffect (() => {
    if(isSuccess) {
      setModalProps({ ...modalProps, isOpen: false });
    }
  }, [isSuccess, modalProps, setModalProps]);

  const handleCloseDeleteModal = () => setModalProps({ ...modalProps, isOpen: false })

  return {
    handleDeleteInvestment,
    handleCloseDeleteModal,
    isPending
  }
}

export default useDeleteInvestmentModal;
