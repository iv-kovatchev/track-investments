import { CurrentInvestor } from '../../utils/contexts/InvestorContext';
import { Investment } from '../../services/investmentsService/types';

export interface UseInvestmentsProps {
  currentInvestor: CurrentInvestor | null
}

export interface WidgetContextPros {
  investments?: Investment[];
  isLoading: boolean;
}

export interface UseWidgetContextProps extends
  UseInvestmentsProps, Pick<WidgetContextPros, 'investments'> {}

export interface DeleteButtonProps {
  investment: Investment;
}

export interface StateDeleteModalProps {
  isOpen: boolean;
  investmentId: string;
}

export interface StateEditModalProps extends
  Pick<StateDeleteModalProps, 'isOpen'> {
  investment?: Investment;
}