import { createInvestment } from '../../../services/investmentsService';
import { useEffect } from 'react';
import { UseCreateInvestmentModalProps } from './types';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schema';
import { Investment } from '../../../services/investmentsService/types';
import { faker } from '@faker-js/faker';

const useCreateInvestmentModal = ({
  setIsCreateInvestmentModalOpen,
  currentUser
}: UseCreateInvestmentModalProps) => {
  const { addInvestment, isPending, isError, isSuccess,  } = createInvestment();

  useEffect(() => {
    if(isSuccess) {
      setIsCreateInvestmentModalOpen(false);
    }
  }, [isSuccess, setIsCreateInvestmentModalOpen]);

  if(isError) {
    alert('There is network error')
  }

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    const investment: Investment = {
      id: faker.string.uuid(),
      name: data.name,
      value: data.value,
      date: data.date.toLocaleDateString(),
      type: data.type.value,
      status: 'Active',
      userId: currentUser.userId
    }

    console.log(investment);

    addInvestment(investment);
  }

  const handleClick = () => setIsCreateInvestmentModalOpen(false);

  return {
    onSubmit,
    handleClick,
    isPending
  }
}

export default useCreateInvestmentModal;
