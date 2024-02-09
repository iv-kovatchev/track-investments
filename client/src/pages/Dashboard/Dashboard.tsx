import Table from '../../components/shared/Table';
import { investmentsColumns } from './types';
import useDashboard from './useDashboard';
import React, { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import './Dashboard.scss';
import Widget from '../../components/shared/Widget';
import WidgetContext from './WidgetContent';

const Dashboard = (): JSX.Element => {
  const {currentUser} = useContext (UserContext);

  const {
    data,
    isLoadingAllInvestments,
    tableData
  } = useDashboard({currentUser});

  return (
    <div className="investments">
      <Widget
        externalClass="investments__widget"
        children={<WidgetContext isLoading={isLoadingAllInvestments} investments={data}/>}
      />

      <Table
        columns={investmentsColumns}
        data={tableData}
        isLoading={isLoadingAllInvestments}
      />
    </div>
  )
}

export default Dashboard;
