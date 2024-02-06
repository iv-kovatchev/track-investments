import { Link } from 'react-router-dom';
import {
  deleteInvestment
} from '../../services/investmentsService';
import Table from '../../components/shared/Table';
import { investmentsColumns } from './types';
import useInvestments from './useInvestments';
import { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';

const Investments = (): JSX.Element => {
  const { currentUser } = useContext(UserContext);

  const { data, isLoading, tableData} = useInvestments({ currentUser });

  console.log('re-render ' + data);

  return (
    <>
      <div>Investments page</div>
      <Link to='/settings'>Go to Settings</Link>
      <Link to='/styleguide'>Go to Styleguide</Link>

      {isLoading ?
        <div>Loading...</div>  :
        <Table
          columns={investmentsColumns}
          data={tableData}
        />
      }
    </>
  )
}

export default Investments;
