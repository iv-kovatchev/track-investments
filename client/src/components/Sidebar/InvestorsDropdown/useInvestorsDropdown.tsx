import { getAllInvestors } from '../../../services/investorsService';
import { useContext, useState } from 'react';
import { SelectOption } from '../../shared/Select/types';
import { InvestorContext } from '../../../utils/contexts/InvestorContext';

const useInvestorsDropdown = () => {
  const { data, isLoading, isError  } = getAllInvestors();

  const { setCurrentInvestor } = useContext(InvestorContext);

  const [selectedInvestor, setSelectedInvestor] = useState<SelectOption | null>(null);

  const investorOptions: SelectOption[] = data?.map((
    { first_name, last_name, id }) =>
    ({ label: `${first_name} ${last_name}`, value: `${id}` })) ?? [];

  if(isError) {
    alert('Error!');
  }

  const handleSelectedInvestor = (option: SelectOption) => {
    setSelectedInvestor(option);
    setCurrentInvestor({
      investorId: option.value,
      name: option.label
    })
  }

  return {
    isLoading,
    investorOptions,
    selectedInvestor,
    handleSelectedInvestor
  }
}

export default useInvestorsDropdown;
