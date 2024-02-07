import { GridProps } from './types';
import './Grid.scss';

const Grid = ({ title, child }: GridProps) => {
  return (
    <div className='gird'>
      <h1 className='grid__title'>{title}</h1>
      <div>
        {child}
      </div>
    </div>
  )
}

export default Grid;
