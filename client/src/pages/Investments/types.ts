import { CurrentUser } from '../../utils/contexts/UserContext';

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
  investmentId: string;
}