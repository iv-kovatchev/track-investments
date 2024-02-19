import './PieChartTooltip.scss'
import React from 'react';

const PieChartTooltip = ({ totalInvestmentsValue, payload, active }: any) => {
  if(!active || !payload || !payload.length) return null;

  const percent = ((payload[0].value / totalInvestmentsValue) * 100);
  const factor = Math.pow(10, percent > 1 ? 1 : 2);
  const finalResult = Math.round(percent * factor) / factor;

  return (
    <div className='pie-chart-tooltip'>
      <h3 className="label">
        {finalResult}% from all investments</h3>
    </div>
  )
}

export default PieChartTooltip;
