import Table from '../../components/shared/Table';
import { investmentsColumns } from './types';
import useDashboard from './useDashboard';
import React, { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import Button from '../../components/shared/Button';
import './Dashboard.scss';
import Widget from '../../components/shared/Widget';
import PieChart from '../../components/shared/Charts/PieChart';

const Dashboard = (): JSX.Element => {
  const { currentUser } = useContext(UserContext);

  const {
    data,
    isLoadingAllInvestments,
    isPendingCreateInvestment,
    tableData,
    handleAddInvestment,
    addInvestmentError,
    pieChartData
  } = useDashboard({ currentUser });

  return (
    <div className='investments'>
      <div className='investments__add-button'>
        <Button
          name='Add investment'
          type='primary'
          disabled={isPendingCreateInvestment}
          showLoadingIcon={isPendingCreateInvestment}
          onClick={handleAddInvestment} />
        {addInvestmentError && <p className='investments__add-button-error'>First you need to choose a user from the sidebar</p>}
      </div>

      <div className='investments__content'>
        <div className='investments__table-container'>
          <Table
            columns={investmentsColumns}
            data={tableData}
            isLoading={isLoadingAllInvestments}
          />
        </div>
        <div className='investments__widgets-container'>
          <Widget title='Information' externalClass='investments__info-widget' />
          <Widget
            title='Portfolio'
            externalClass='investments__portfolio-widget'
            children={isLoadingAllInvestments ? <div>Loading...</div> : (<PieChart height={400} data={pieChartData}
            radiusProps={{
              innerRadius: 90,
              outerRadius: 150
            }}
            />)}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
