import { Link } from 'react-router-dom';

const Investments = () => {
  console.log('ko stava ve');

  return (
    <>
      <div>Investments page</div>
      <Link to='/settings'>Go to Settings</Link>
      <Link to='/styleguide'>Go to Styleguide</Link>
    </>
  )
}

export default Investments;
