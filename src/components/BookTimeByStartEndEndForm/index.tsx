import React, { useState } from 'react';
import { CreateTimeRequestBodyModel } from '../../api/request-body-models';
import api from '../../api/time-tracker-api-v1';
import DateTimePicker from '../DateTimePicker';
import './style.css';

interface BookTimeByStartAndEndFormProps {
  resetCurrentPageNumber: () => void;
  loadTimes: () => void;
}

const BookTimeByStartAndEndForm: React.FC<BookTimeByStartAndEndFormProps> = ({
  loadTimes,
  resetCurrentPageNumber,
}) => {
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestModel: CreateTimeRequestBodyModel = {
      startTime,
      endTime,
      description,
    };

    api.post('/times', requestModel).then(() => {
      resetCurrentPageNumber();

      loadTimes();
    });
  };

  return (
    <form
      className='book-time-by-start-and-end-form'
      onSubmit={handleFormSubmit}
    >
      <div className='book-time-by-start-and-and-form__heading'>
        <h2>Book time without tracker</h2>
      </div>

      <div className='book-time-by-start-and-end-form__date-time-pickers'>
        <DateTimePicker text='Start' setValue={setStartTime} />
        <DateTimePicker text='End' setValue={setEndTime} />
      </div>

      <div className='book-time-by-start-and-end-form__input-and-button'>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'
        />

        <button type='submit'>Book time</button>
      </div>
    </form>
  );
};

export default BookTimeByStartAndEndForm;
