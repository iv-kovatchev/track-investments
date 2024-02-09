export interface PieChartData {
  name: string;
  value: string | number;
  color: string;
}

interface PieChartRadius {
  innerRadius: number;
  outerRadius: number;
}

export interface PieChartProps {
  data: PieChartData[];
  customTooltip?: JSX.Element;
  height: number;
  radiusProps: PieChartRadius
}