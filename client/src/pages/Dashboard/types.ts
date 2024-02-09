import { CurrentUser } from '../../utils/contexts/UserContext';
import { Investment } from '../../services/investmentsService/types';

export const investmentsColumns = [
  'Name',
  'Type',
  'Value',
  'Status',
  'Date',
  ''
]

export interface UseInvestmentsProps {
  currentUser: CurrentUser | null
}

export interface DeleteButtonProps {
  investment: Investment;
}