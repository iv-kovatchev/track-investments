import { TextFieldProps } from './types';
import { ForwardedRef, forwardRef } from 'react';
import './TextField.scss';

const TextField = forwardRef(({
  label,
  type,
  placeholder,
  value,
  ...props
}: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {

  return (
    <div className='textfield'>
      <input placeholder='' className='textfield__input' type={type} step={.01} {...props} ref={ref} value={value}/>
      <label className='textfield__label'>{label}</label>
    </div>
  )
});

export default TextField;
