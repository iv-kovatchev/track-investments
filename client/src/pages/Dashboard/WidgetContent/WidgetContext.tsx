import PieChart from '../../../components/shared/Charts/PieChart';
import Button from '../../../components/shared/Button';
import React, { useContext } from 'react';
import { UserContext } from '../../../utils/contexts/UserContext';
import useWidgetContext from './useWidgetContext';
import { WidgetContextPros } from '../types';
import './WidgetContext.scss';
import Spinner from '../../../components/shared/Spinner';
import Skeleton from 'react-loading-skeleton';

const WidgetContext = ({investments, isLoading}: WidgetContextPros) => {
  const {currentUser} = useContext (UserContext);

  const {
    pieChartData,
    handleAddInvestment,
    addInvestmentError,
    isPendingCreateInvestment,
    activeInvestments,
    closedInvestments
  } = useWidgetContext ({currentUser, investments});

  console.log (investments?.length);

  return (
    <section className="dashboard-widget">
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
                  innerRadius: 90,
                  outerRadius: 150
                }}
              />)
        )
      }

      <div className="dashboard-widget__add-button">
        <Button
          name="Add investment"
          type="primary"
          disabled={isPendingCreateInvestment || isLoading}
          showLoadingIcon={isPendingCreateInvestment || isLoading}
          onClick={handleAddInvestment}/>
        {addInvestmentError &&
          <p className="dashboard__add-button-error">First you need to choose a user from the sidebar</p>}
      </div>
    </section>
  )
}

export default WidgetContext;
