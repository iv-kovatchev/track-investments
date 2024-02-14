import './Select.scss';
import { SelectOption, SelectProps } from './types';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const Select = ({ onChange, selectedValue, options, placeholder }: SelectProps) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }

  console.log(selectedValue);

  const handleSelectedOption = (option: SelectOption) => {
    setIsOpen(!isOpen);
    onChange(option)
  }

  return (
    <div className='select'>
      <div className='select__main' onClick={handleOpenMenu}>
        <p>{selectedValue ? selectedValue.label : placeholder}</p>
        <i
          className={`select__arrow-icon ${isOpen ? 'select__arrow-icon--is-open' : ''}`}>
          <IoIosArrowDown/>
        </i>
      </div>
      <div className='select__options-menu'>
        {
          isOpen && options.map((option, index) => { return (
            <div
              onClick={() => handleSelectedOption(option)}
              key={option.value}
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
