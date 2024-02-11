import { deleteInvestment } from '../../../services/investmentsService';
import { UseDeleteInvestmentModalProps } from './types';

const useDeleteInvestmentModal = ({
  modalProps,
  setModalProps }: UseDeleteInvestmentModalProps) => {

  const { removeInvestment, isSuccess, isError, isPending } = deleteInvestment(modalProps.investmentId);

  const handleDeleteInvestment = () => removeInvestment();

  if(isError) {
    alert('There is network error');
  }

  if(isSuccess) {
    setModalProps({ ...modalProps, isOpen: false });
  }

  return {
    handleDeleteInvestment,
    isPending
  }
}

export default useDeleteInvestmentModal;
