import { Sector } from 'recharts';
import renderActiveShape from '../../../../../utils/charts/renderActiveShape';

const ActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const {
    sx,
    sy,
    ex,
    ey,
    mx,
    my,
    textAnchor
  } = renderActiveShape({ cx, cy, midAngle, outerRadius });

  return (
    <g>
      <text x={cx}  y={cy} dy={8} textAnchor='middle' fill={payload.color}>
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
      <path
        d={`M${sx},${sy}L,${mx},${my},${ex},${ey}`}
        stroke={payload.color}
        fill="none"
      />
      <circle cx={ex}  cy={ey} r={2} fill={payload.color} stroke='none' />
      <text>
        Testing text
      </text>
    </g>
  )
}

export default ActiveShape;
