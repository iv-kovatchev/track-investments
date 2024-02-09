interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  outerRadius: number;
  midAngle: number;
}

const renderActiveShape = ({
  cx,
  cy,
  outerRadius,
  midAngle
}: RenderActiveShapeProps) => {
  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 15) * cos;
  const sy = cy + (outerRadius + 15) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1: -1) * 22;
  const ey = my;
  const textAnchor  = cos >= 0 ? 'start' : 'end';

  return {
    sx,
    sy,
    mx,
    my,
    ex,
    ey,
    textAnchor
  }
}

export default renderActiveShape;
