import { ButtonProps } from './types';
import './Button.scss';

const Button = ({ name, type, icon }: ButtonProps) => {
  return (
    <button className={`button button__${type}`}>
      {icon && <i className='button__icon'>{icon}</i>}
      {name}
    </button>
  )
}

export default Button;
