import { createInvestment, getInvestmentsByUserId } from '../../services/investmentsService';
import { UseInvestmentsProps } from './types';
import CloseButton from './DeleteButton';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { getRandomType } from '../../utils/randomType';
import { Investment } from '../../services/investmentsService/types';
import { sumInvestmentsFromType } from './config';

const useDashboard = ({ currentUser }: UseInvestmentsProps) => {
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
    }));

    const pieChartData = [
    {
      name: 'Crypto',
      color: '#B7E4C7',
      value: sumInvestmentsFromType( 'Crypto', data)
    },
    {
      name: 'Stocks',
      color: '#40916C',
      value: sumInvestmentsFromType( 'Stocks', data)
    },
    {
      name: 'Land',
      color: '#95D5B2',
      value: sumInvestmentsFromType( 'Land', data)
    },
    {
      name: 'Cash',
      color: '#2D6A4F',
      value: sumInvestmentsFromType( 'Cash', data)
    },
    {
      name: 'Gold',
      color: '#52B788',
      value: sumInvestmentsFromType( 'Gold', data)
    },{
      name: 'Property',
      color: '#95D5B2',
      value: sumInvestmentsFromType( 'Property', data)
    }];

  return {
    isLoadingAllInvestments,
    isPendingCreateInvestment,
    data,
    tableData,
    handleAddInvestment,
    addInvestmentError,
    pieChartData
  }
}

export default useDashboard;
