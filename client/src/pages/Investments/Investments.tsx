import { Link } from 'react-router-dom';
import {
  useCreateInvestment,
  useGetAllInvestments,
  useGetInvestment,
  useUpdateInvestment,
  useDeleteInvestment
} from '../../services/investmentsService';
import { currentDate } from '../../utils/config/currentDate';
import Table from '../../components/shared/Table';
import { investmentsColumns } from './types';
import { Investment } from '../../services/investmentsService/types';
import useInvestments from './useInvestments';

const Investments = (): JSX.Element => {
  const { data, isLoading, isSuccess } = useInvestments();

  console.log('re-render ' + data);

 // const { data, isError, isLoading, args } = useGetAllInvestments();
 // const { data: data2, error: error2, isLoading: isLoading2 } = useGetInvestment(3);
  const { addInvestment, data: data3, isError, isPending } = useCreateInvestment({
    name: 'test create',
    value: 2222.22,
    status: 'ACTIVE',
    date: currentDate(),
    type: 'Cash'
  });
  const {
    editInvestment,
    data: data4,
    isError: error4,
    isPending: isPending2
  } = useUpdateInvestment('1', {
    name: 'updated2',
    value: 2222.22,
    status: 'ACTIVE',
    date: currentDate(),
    type: 'Crypto'
  });
  const { deleteInvestment, data: data5, isError: isError3, isPending: isPending5 } = useDeleteInvestment('ee4f');

  const handleSubmitInvestment = () => {
    addInvestment();
  }

  const handleUpdateInvestment = () => editInvestment();
  const handleDeleteInvestment = () => deleteInvestment();

 // console.log(data);

  return (
    <>
      <div>Investments page</div>
      <Link to='/settings'>Go to Settings</Link>
      <Link to='/styleguide'>Go to Styleguide</Link>

      <button onClick={handleSubmitInvestment}>Create investment</button>
      <button onClick={handleUpdateInvestment}>Update investment</button>
      <button onClick={handleDeleteInvestment}>Delete investment</button>

      {isLoading &&
        <div>Loading...</div>}

      {isSuccess &&
        <Table
          columns={investmentsColumns}
          data={
          data?.map(({ name, type, value, status, date }) =>
            ({ name, type, value, status, date }))
        }
        />
      }

    </>
  )
}

export default Investments;
