import { createInvestment, updateInvestment } from '../../../services/investmentsService';
import { useEffect } from 'react';
import { UseInvestmentModalProps } from './types';
import { FieldValues } from 'react-hook-form';
import { Investment } from '../../../services/investmentsService/types';
import { faker } from '@faker-js/faker';

const useInvestmentModal = ({
  setIsOpen,
  currentInvestor,
  isEdit,
  investment
}: UseInvestmentModalProps) => {
  const { addInvestment, isPending, isError, isSuccess,  } = createInvestment();
  const { editInvestment,
    isPending: isEditPending,
    isError: isEditError,
    isSuccess: isEditSuccess
  } = updateInvestment();

  useEffect(() => {
    if(isSuccess || isEditSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess, isEditSuccess, setIsOpen]);

  if(isError || isEditError) {
    alert('There is network error')
  }

  const onSubmit = (data: FieldValues) => {
    const investmentData: Investment = {
      id: faker.string.uuid(),
      name: data.name,
      value: data.value,
      date: data.date.toLocaleDateString(),
      type: data.type.value,
      status: 'Active',
      investorId: currentInvestor.investorId
    }

    if(isEdit && investment) {
      editInvestment({ ...investmentData, id: investment.id });
    }
    else {
      addInvestment(investmentData);
    }
  }

  const handleClick = () => setIsOpen(false);

  return {
    onSubmit,
    handleClick,
    isPending,
    isEditPending
  }
}

export default useInvestmentModal;
