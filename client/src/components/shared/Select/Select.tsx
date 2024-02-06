import './Select.scss';
import { SelectProps } from './types';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const Select = ({ onChange, selectedValue, options, placeholder }: SelectProps) => {
  console.log('render Select');

  const [ isOpen, setIsOpen ] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleSelectedOption = (value: string) => {
    setIsOpen(!isOpen);
    onChange(value)
  }

  return (
    <div className='select'>
      <div className='select__main' onClick={handleOpenMenu}>
        <p>{selectedValue ?? placeholder}</p>
        <i
          className={`select__arrow-icon ${isOpen ? 'select__arrow-icon--is-open' : ''}`}>
          <IoIosArrowDown/>
        </i>
      </div>
      <div className='select__options-menu'>
        {
          isOpen && options.map((option, index) => { return (
            <div
              onClick={() => handleSelectedOption(option.value)}
              key={index}
              className='select__option'>
              <p>{option.label}</p>
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default Select;
