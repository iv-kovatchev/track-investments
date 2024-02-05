import { Link } from 'react-router-dom';
import { getAllInvestments, getInvestment } from '../../services/investmentsService';

const Investments = (): JSX.Element => {

  const { data, error, isLoading } = getAllInvestments();
  const { data: data2, error: error2, isLoading: isLoading2 } = getInvestment(2);

  console.log(data);
  console.log(data2);
  console.log('re-render Investments')

  return (
    <>
      <div>Investments page</div>
      <Link to='/settings'>Go to Settings</Link>
      <Link to='/styleguide'>Go to Styleguide</Link>


    </>
  )
}

export default Investments;
