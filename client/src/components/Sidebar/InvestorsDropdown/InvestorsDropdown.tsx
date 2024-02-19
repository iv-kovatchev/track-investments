import Select from '../../shared/Select';
import useInvestorsDropdown from './useInvestorsDropdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const InvestorsDropdown = () => {
  const { isLoading, investorOptions, selectedInvestor, handleSelectedInvestor } = useInvestorsDropdown();

  return (
    <div className='sidebar__investors-dropdown'>
      {isLoading ?
        <Skeleton height={38} /> :
        <Select
          onChange={handleSelectedInvestor}
          selectedValue={selectedInvestor}
          placeholder={'Select investor...'}
          options={investorOptions}/>}
    </div>
  )
}

export default InvestorsDropdown;
