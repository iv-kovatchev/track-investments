import Table from '../../components/shared/Table';
import useDashboard from './useDashboard';
import React, { useContext } from 'react';
import { InvestorContext } from '../../utils/contexts/InvestorContext';
import './Dashboard.scss';
import Widget from '../../components/shared/Widget';
import WidgetContext from './WidgetContent';
import DeleteInvestmentModal from './DeleteInvestmentModal';
import InvestmentModal from './InvestmentModal';

const Dashboard = (): JSX.Element => {
  const { currentInvestor} = useContext(InvestorContext);

  const {
    data,
    isLoadingAllInvestments,
    investmentsColumns,
    tableData,
    deleteModalProps,
    editModalProps,
    setDeleteModalProps,
    setIsOpen
  } = useDashboard({ currentInvestor });
  return (
    <div className="investments">
      {editModalProps.isOpen && currentInvestor &&
        <InvestmentModal
          setIsOpen={setIsOpen}
          currentInvestor={currentInvestor}
          isEdit
          investment={editModalProps.investment}
        />}
      {deleteModalProps.isOpen &&
        <DeleteInvestmentModal
          modalProps={deleteModalProps}
          setModalProps={setDeleteModalProps}
        />}

      <Widget
        externalClass="dashboard__widget"
        children={<WidgetContext
          isLoading={isLoadingAllInvestments}
          investments={data}/>}
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
