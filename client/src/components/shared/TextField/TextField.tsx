import { TextFieldProps } from './types';
import { ForwardedRef, forwardRef } from 'react';
import './TextField.scss';

const TextField = forwardRef(({
  label,
  type,
  placeholder,
  ...props
}: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {

  return (
    <div className='textfield'>
      <input placeholder='' className='textfield__input' type={type} {...props} ref={ref}/>
      <label className='textfield__label'>{label}</label>
    </div>
  )
});

export default TextField;
