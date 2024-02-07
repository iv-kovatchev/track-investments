import { DeleteButtonProps } from '../types';
import Button from '../../../components/shared/Button';
import './DeleteButton.scss';
import useUpdateInvestment from '../../../services/investmentsService/endpoints/updateInvestment';

const DeleteButton = ({ investment }: DeleteButtonProps) => {
  const { editInvestment  } = useUpdateInvestment({...investment, status: 'Closed'});

  const handleUpdateInvestment = () => editInvestment();

  return (
    <div className='investments-table__delete-button'>
      <Button name='Close' type='primary' onClick={handleUpdateInvestment} />
    </div>
  )
}

export default DeleteButton;
