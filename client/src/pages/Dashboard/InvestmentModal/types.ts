import { CurrentInvestor } from '../../../utils/contexts/InvestorContext';
import { SelectOption } from '../../../components/shared/Select/types';
import { Investment } from '../../../services/investmentsService/types';

export interface InvestmentModalProps {
  setIsOpen: (isOpen: boolean, investment?: Investment) => void;
  currentInvestor: CurrentInvestor,
  isEdit: boolean;
  investment?: Investment;
}

export interface UseInvestmentModalProps extends InvestmentModalProps {}

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