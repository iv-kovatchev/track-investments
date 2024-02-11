import { StateDeleteModalProps } from '../types';

export interface DeleteInvestmentModalProps {
  modalProps: StateDeleteModalProps;
  setModalProps: (props: StateDeleteModalProps) => void;
}

export interface UseDeleteInvestmentModalProps extends DeleteInvestmentModalProps {}
