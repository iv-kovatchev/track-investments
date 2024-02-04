import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <>
      <div>Settings page</div>
      <Link to='/investments'>Go to Investments</Link>
      <Link to='/styleguide'>Go to Styleguide</Link>
    </>
  )
}

export default Settings;
