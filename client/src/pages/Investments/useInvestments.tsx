import { getInvestmentsByUserId } from '../../services/investmentsService';
import { UseInvestmentsProps } from './types';
import Button from '../../components/shared/Button';
import useDeleteInvestment from '../../services/investmentsService/endpoints/deleteInvestment';
import DeleteButton from './DeleteButton';

const useInvestments = ({ currentUser }: UseInvestmentsProps) => {
  const {
    data,
    isLoading,
    isError
  } = getInvestmentsByUserId(currentUser ? currentUser.userId : '');

  if(isError) {
    alert('There is network error')
  }

  const tableData = data?.map(
    ({ name, value, status, type, date, id }) =>
      ({
        name,
        type,
        value,
        status,
        date,
        deleteButton: <DeleteButton investmentId={id} />
      }))

  return {
    isLoading,
    data,
    tableData
  }
}

export default useInvestments;
