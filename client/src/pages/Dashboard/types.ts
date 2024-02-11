import { CurrentUser } from '../../utils/contexts/UserContext';
import { Investment } from '../../services/investmentsService/types';

export interface UseInvestmentsProps {
  currentUser: CurrentUser | null
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