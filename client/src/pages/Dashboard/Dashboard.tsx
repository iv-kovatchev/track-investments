import Table from '../../components/shared/Table';
import useDashboard from './useDashboard';
import React, { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import './Dashboard.scss';
import Widget from '../../components/shared/Widget';
import WidgetContext from './WidgetContent';
import DeleteInvestmentModal from './DeleteInvestmentModal';

const Dashboard = (): JSX.Element => {
  const { currentUser} = useContext(UserContext);

  const {
    data,
    isLoadingAllInvestments,
    investmentsColumns,
    tableData,
    deleteModalProps,
    setDeleteModalProps
  } = useDashboard({currentUser});
  return (
    <div className="investments">
      {deleteModalProps.isOpen &&
        <DeleteInvestmentModal
          modalProps={deleteModalProps}
          setModalProps={setDeleteModalProps}
        />}

      <Widget
        externalClass="dashboard__widget"
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
