import React from 'react';
import './style.css';

interface DateTimePickerProps {
  text: string;
  setValue: (value: string) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ text, setValue }) => {
  return (
    <div className='date-time-picker'>
      <div>{text}</div>
      <input type='datetime-local' onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default DateTimePicker;
