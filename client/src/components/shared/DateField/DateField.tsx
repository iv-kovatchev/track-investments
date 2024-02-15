import DatePicker from 'react-datepicker';
import { DateFieldProps } from './types';
import './DateField.scss';

const DateField = ({ placeholder, selectedDate, onChange }: DateFieldProps) => {
  return (
    <div className='datefield'>
      <DatePicker
        placeholderText={placeholder}
        enableTabLoop={false}
        onChange={onChange}
        selected={selectedDate}
        showPopperArrow={false}
        popperClassName='datefield__popper'
        wrapperClassName="datefield__wrapper"
      />
    </div>
  )
}

export default DateField;
