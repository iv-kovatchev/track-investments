import { useState } from 'react';
import { UseWidgetContextProps } from '../types';
import { Investment } from '../../../services/investmentsService/types';

const useWidgetContext = ({ currentUser, investments }: UseWidgetContextProps) => {
  const [addInvestmentError, setAddInvestmentError] = useState(false);
  const [isCreateInvestmentModalOpen, setIsCreateInvestmentModalOpen] = useState<boolean>(false);

  const handleCreateInvestmentModal = () => {
    if(!currentUser) {
      setAddInvestmentError(true);
      setIsCreateInvestmentModalOpen(false);
    }
    else {
      setAddInvestmentError(false);
      setIsCreateInvestmentModalOpen(true);
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
    },
    {
      name: 'Property',
      color: '#1B4332',
      value: sumInvestmentsFromType( 'Property', investments)
    }].filter((invs) => invs.value > 0);

  const activeInvestments = investments?.filter((investment) => investment.status === 'Active').length;
  const closedInvestments = investments?.filter((investment) => investment.status === 'Closed').length;

  return {
    addInvestmentError,
    pieChartData,
    activeInvestments,
    closedInvestments,
    handleCreateInvestmentModal,
    isCreateInvestmentModalOpen,
    setIsCreateInvestmentModalOpen
  }
}

export default useWidgetContext;
