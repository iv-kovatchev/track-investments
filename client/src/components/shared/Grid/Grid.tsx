import { GridProps } from './types';

const Grid = ({ title, child }: GridProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {child}
      </div>
    </div>
  )
}

export default Grid;
