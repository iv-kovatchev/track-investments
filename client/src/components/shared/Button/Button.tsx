import { ButtonProps } from './types';
import './Button.scss';
import Spinner from '../Spinner';

const Button = ({
  name,
  type,
  icon,
  onClick,
  disabled = false,
  showLoadingIcon = false
}: ButtonProps) => {

  console.log(showLoadingIcon);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button button__${type} ${disabled ? 'button__disabled' : ''}`}
    >
      {showLoadingIcon && <Spinner externalClass='button__loading-icon' />}
      {icon && <i className='button__icon'>{icon}</i>}
      <span>{name}</span>
    </button>
  )
}

export default Button;
