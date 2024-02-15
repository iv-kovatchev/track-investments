import { ButtonProps } from './types';
import './Button.scss';
import Spinner from '../Spinner';

const Button = ({
  externalClassname,
  name,
  type = 'button',
  btnType,
  icon,
  onClick,
  disabled = false,
  showLoadingIcon = false
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`button button__${btnType} ${disabled ? 'button__disabled' : ''} ${externalClassname ?? ''}`}
    >
      {showLoadingIcon && <Spinner externalClass='button__loading-icon' />}
      {icon && <i className='button__icon'>{icon}</i>}
      <span>{name}</span>
    </button>
  )
}

export default Button;
