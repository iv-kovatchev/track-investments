import { Link } from 'react-router-dom';
import {
  deleteInvestment
} from '../../services/investmentsService';
import Table from '../../components/shared/Table';
import { investmentsColumns } from './types';
import useInvestments from './useInvestments';
import { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import Button from '../../components/shared/Button';
import './Investments.scss';

const Investments = (): JSX.Element => {
  const { currentUser } = useContext(UserContext);

  const { data, isLoading, tableData} = useInvestments({ currentUser });

  console.log('re-render ' + data);

  return (
    <div className='investments'>
      <div className="investments__add-button">
        <Button name='Add investment' type='primary'/>
      </div>

      <Table
        columns={investmentsColumns}
        data={tableData}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Investments;
