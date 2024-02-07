import Table from '../../components/shared/Table';
import { investmentsColumns } from './types';
import useInvestments from './useInvestments';
import { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import Button from '../../components/shared/Button';
import './Investments.scss';
import Spinner from '../../components/shared/Spinner';

const Investments = (): JSX.Element => {
  const { currentUser } = useContext(UserContext);

  const {
    data,
    isLoadingAllInvestments,
    isPendingCreateInvestment,
    tableData,
    handleAddInvestment,
    addInvestmentError
  } = useInvestments({ currentUser });

  return (
    <div className='investments'>
      <div className='investments__add-button'>
        <Button
          name='Add investment'
          type='primary'
          disabled={isPendingCreateInvestment}
          showLoadingIcon={isPendingCreateInvestment}
          onClick={handleAddInvestment} />
        {addInvestmentError && <p className='investments__add-button-error'>First you need to choose a user</p>}
      </div>

      <Table
        columns={investmentsColumns}
        data={tableData}
        isLoading={isLoadingAllInvestments}
      />
    </div>
  )
}

export default Investments;
