import { useState } from 'react';
import { createInvestment } from '../../../services/investmentsService';
import { faker } from '@faker-js/faker';
import { getRandomType } from '../../../utils/randomType';
import { UseWidgetContextProps } from '../types';
import { Investment } from '../../../services/investmentsService/types';

const useWidgetContext = ({ currentUser, investments }: UseWidgetContextProps) => {
  const [addInvestmentError, setAddInvestmentError] = useState(false);

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

  if(isErrorCreateInvestment) {
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
  }

  const sumInvestmentsFromType = (type: string, investments?: Investment[]) =>
    (Number(investments?.filter((investment) => investment.type === type)
    .reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
    .toFixed(2)));

  const pieChartData = [
    {
      name: 'Crypto',
      color: '#B7E4C7',
      value: sumInvestmentsFromType( 'Crypto', investments)
    },
    {
      name: 'Stocks',
      color: '#40916C',
      value: sumInvestmentsFromType( 'Stocks', investments)
    },
    {
      name: 'Land',
      color: '#95D5B2',
      value: sumInvestmentsFromType( 'Land', investments)
    },
    {
      name: 'Cash',
      color: '#2D6A4F',
      value: sumInvestmentsFromType( 'Cash', investments)
    },
    {
      name: 'Gold',
      color: '#52B788',
      value: sumInvestmentsFromType( 'Gold', investments)
    },{
      name: 'Property',
      color: '#95D5B2',
      value: sumInvestmentsFromType( 'Property', investments)
    }];

  const activeInvestments = investments?.filter((investment) => investment.status === 'Active').length;
  const closedInvestments = investments?.filter((investment) => investment.status === 'Closed').length;

  return {
    isPendingCreateInvestment,
    handleAddInvestment,
    addInvestmentError,
    pieChartData,
    activeInvestments,
    closedInvestments
  }
}

export default useWidgetContext;
