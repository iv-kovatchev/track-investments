import PieChart from '../../../components/shared/Charts/PieChart';
import Button from '../../../components/shared/Button';
import React, { useContext } from 'react';
import { InvestorContext } from '../../../utils/contexts/InvestorContext';
import useWidgetContext from './useWidgetContext';
import { WidgetContextPros } from '../types';
import './WidgetContext.scss';
import Spinner from '../../../components/shared/Spinner';
import Skeleton from 'react-loading-skeleton';
import InvestmentModal from '../InvestmentModal';
import PieChartTooltip from './PieChartTooltip';
import useWindowSize from '../../../utils/config/useWindowSize';

const WidgetContext = ({ investments, isLoading }: WidgetContextPros) => {
  const { currentInvestor } = useContext(InvestorContext);

  const {
    pieChartData,
    addInvestmentError,
    activeInvestments,
    closedInvestments,
    totalInvestmentsValue,
    handleCreateInvestmentModal,
    isCreateInvestmentModalOpen,
    setIsCreateInvestmentModalOpen
  } = useWidgetContext({ currentInvestor, investments });

  const windowSize = useWindowSize();

  return (
    <section className="dashboard-widget">
      {isCreateInvestmentModalOpen && currentInvestor &&
        <InvestmentModal
          setIsOpen={setIsCreateInvestmentModalOpen}
          currentInvestor={currentInvestor}
          isEdit={false}
        />}

      {isLoading ?
        <div className="dashboard-widget__skeleton">
          <Skeleton height={30}/>
          <Skeleton height={30} className="dashboard-widget__skeleton"/>
        </div> :
        <>
          <p className="dashboard-widget__total-investments">
            Total investments: <strong>{investments?.length}</strong>
          </p>
          <div className="dashboard-widget__status-container">
            <p className="dashboard-widget__status">
              Active: <strong className="dashboard-widget__status--active">{activeInvestments}</strong>
            </p>
            <p className="dashboard-widget__status">
              Closed: <strong className="dashboard-widget__status--closed">{closedInvestments}</strong>
            </p>
          </div>
        </>
      }

      {isLoading ? <div className="dashboard-widget__spinner">
          <Spinner height={400} width={150} color="#2D6A4F"/>
        </div> :
        (investments?.length === 0 ?
            <div className="dashboard-widget__no-data">
              <h2>No data</h2>
            </div> :
            (
              <PieChart
                height={400}
                data={pieChartData}
                radiusProps={{
                  innerRadius: windowSize.width <= 400 ? 70 : (windowSize.width <= 460 ? 80 : 90),
                  outerRadius: windowSize.width <= 400 ? 100 : (windowSize.width <= 460 ? 120 : 150)
                }}
                customTooltip={<PieChartTooltip totalInvestmentsValue={totalInvestmentsValue} />}
              />)
        )
      }

      <div className="dashboard-widget__add-button">
        <Button
          name="Add investment"
          btnType="primary"
          onClick={handleCreateInvestmentModal}/>
        {addInvestmentError &&
          <p className="dashboard__add-button-error">First you need to choose a investor from the sidebar</p>}
      </div>
    </section>
  )
}

export default WidgetContext;
