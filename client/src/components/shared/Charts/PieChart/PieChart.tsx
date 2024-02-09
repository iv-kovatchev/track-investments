import { Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts';
import React, { useCallback, useState } from 'react';
import { PieChartProps } from './types';

const PieChartComponent = ({
  data,
  customTooltip,
  height,
  radiusProps
}: PieChartProps) => {
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
          startAngle={(endAngle - startAngle) > 2 ? startAngle + 2 : startAngle}
          endAngle={(endAngle - startAngle) > 2 ? endAngle - 2 : endAngle}
          fill={payload.color}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={(endAngle - startAngle) > 2 ? startAngle + 2 : startAngle}
          endAngle={(endAngle - startAngle) > 2 ? endAngle - 2 : endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={payload.color}
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer width='100%' height={height}>
      <PieChart>
        <Pie
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
