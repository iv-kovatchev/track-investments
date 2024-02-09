import { WidgetProps } from './types';
import './Widget.scss';

const Widget = ({ title, children, externalClass }: WidgetProps) => {
  return  (
    <div className={`widget ${externalClass}`}>
      {title && <h2 className='widget__title'>{title}</h2>}

      {children &&
        <div className='widget__content'>
          {children}
        </div>}
    </div>
  )
}

export default Widget;
