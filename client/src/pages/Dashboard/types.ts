import { CurrentUser } from '../../utils/contexts/UserContext';
import { Investment } from '../../services/investmentsService/types';

export const investmentsColumns = [
  'Name',
  'Type',
  'Value',
  'Status',
  'Date',
  '',
  ''
]

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