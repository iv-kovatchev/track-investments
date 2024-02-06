import { ButtonProps } from './types';
import './Button.scss';

const Button = ({ name, type, icon, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button button__${type}`}>
      {icon && <i className='button__icon'>{icon}</i>}
      {name}
    </button>
  )
}

export default Button;
