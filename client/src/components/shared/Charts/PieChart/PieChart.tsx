import { Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts';
import React, { useCallback, useState } from 'react';
import { PieChartProps } from './types';

const PieChartComponent = ({
  data,
  customTooltip,
  height,
  radiusProps
}: PieChartProps) => {
  console.log(data);

  const [activeIndex, setActiveIndex] = useState (0);

  const onPieEnter = useCallback ((_: any, index: number) => setActiveIndex (index), [setActiveIndex]);

  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      payload,
    } = props;

    console.log (data);

    return (
      <g>
        <text fontSize={32} fontFamily='var(--font-family)' x={cx} y={cy} dy={8} textAnchor='middle' fill={payload.color}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={payload.color}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={payload.color}
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer width='100%' height={height}>
      <PieChart width={400} >
        <Pie
          style={{ backgroundColor: 'red' }}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          innerRadius={radiusProps.innerRadius}
          outerRadius={radiusProps.outerRadius}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data?.map ((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              style={{outline: 'none'}}
            />
          ))}
        </Pie>
        <Tooltip active content={customTooltip} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent;
