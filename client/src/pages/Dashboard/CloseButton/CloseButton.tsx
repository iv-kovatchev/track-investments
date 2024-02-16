import { DeleteButtonProps } from '../types';
import Button from '../../../components/shared/Button';
import './CloseButton.scss';
import useUpdateInvestment from '../../../services/investmentsService/endpoints/updateInvestment';

const CloseButton = ({ investment }: DeleteButtonProps) => {
  const { editInvestment, isPending  } = useUpdateInvestment();

  const handleUpdateInvestment = () => editInvestment({...investment, status: 'Closed'});

  return (
    <div className='investments-table__delete-button'>
      <Button
        name='Close'
        btnType='primary'
        onClick={handleUpdateInvestment}
        disabled={investment.status === 'Closed' || isPending}
        showLoadingIcon={isPending}
      />
    </div>
  )
}

export default CloseButton;
