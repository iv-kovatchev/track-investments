import { createInvestment, getInvestmentsByUserId } from '../../services/investmentsService';
import { UseInvestmentsProps } from './types';
import CloseButton from './DeleteButton';
import useDeleteInvestment from '../../services/investmentsService/endpoints/deleteInvestment';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { getRandomType } from '../../utils/randomType';

const useInvestments = ({ currentUser }: UseInvestmentsProps) => {
  const [addInvestmentError, setAddInvestmentError] = useState(false);

  const {
    data,
    isLoading:isLoadingAllInvestments,
    isError
  } = getInvestmentsByUserId(currentUser ? currentUser.userId : '');

  const {
    isError: isErrorCreateInvestment,
    isPending: isPendingCreateInvestment,
    addInvestment
  } = createInvestment({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    status: 'Active',
    value: faker.number.float({ min: 1, max: 500000, fractionDigits: 2 }),
    date: new Date().toLocaleDateString(),
    type: getRandomType(),
    userId: currentUser?.userId
  });

  if(isError || isErrorCreateInvestment) {
    alert('There is network error')
  }

  const handleAddInvestment = () => {
    //For now it's working like this
    if(!currentUser) {
      setAddInvestmentError(true);
    }
    else {
      setAddInvestmentError(false);
      addInvestment();
    }

    console.log('Add investment');
  }

  const tableData = data?.map(
    (investment) => ({
      name: investment.name,
      type: investment.type,
      value: investment.value,
      status: investment.status,
      date: investment.date,
      deleteButton: <CloseButton investment={investment} />
    }))

  return {
    isLoadingAllInvestments,
    isPendingCreateInvestment,
    data,
    tableData,
    handleAddInvestment,
    addInvestmentError
  }
}

export default useInvestments;
