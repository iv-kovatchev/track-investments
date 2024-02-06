import { DeleteButtonProps } from '../types';
import useDeleteInvestment from '../../../services/investmentsService/endpoints/deleteInvestment';
import Button from '../../../components/shared/Button';
import './DeleteButton.scss';

const DeleteButton = ({ investmentId }: DeleteButtonProps) => {
  const { removeInvestment,  } = useDeleteInvestment(investmentId);

  const handleDelete = () => removeInvestment();

  return (
    <div className='investments-table__delete-button'>
      <Button name='Delete' type='primary' onClick={handleDelete} />
    </div>
  )
}

export default DeleteButton;
