import { CurrentUser } from '../../../utils/contexts/UserContext';
import { SelectOption } from '../../../components/shared/Select/types';

export interface CreateInvestmentModalProps {
  setIsCreateInvestmentModalOpen: (isOpen: boolean) => void;
  currentUser: CurrentUser
}

export interface UseCreateInvestmentModalProps extends CreateInvestmentModalProps {}

export const types: SelectOption[] = [
  {
    label: 'Cash',
    value: 'Cash'
  },
  {
    label: 'Crypto',
    value: 'Crypto'
  },
  {
    label: 'Stocks',
    value: 'Stocks'
  },
  {
    label: 'Gold',
    value: 'Gold'
  },
  {
    label: 'Property',
    value: 'Property'
  },
  {
    label: 'Land',
    value: 'Land'
  }
];