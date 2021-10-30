import React, { useState } from 'react';
import { CreateTimeRequestBodyModel } from '../../api/request-body-models';
import api from '../../api/time-tracker-api-v1';
import useTimer from '../../hooks/useTimer';
import TimeDisplayer from '../TimeDisplayer';
import './style.css';

interface BookTimeByTrackerFormProps {
  resetCurrentPageNumber: () => void;
  loadTimes: () => void;
}

const BookTimeByTrackerForm: React.FC<BookTimeByTrackerFormProps> = ({
  loadTimes,
  resetCurrentPageNumber,
}) => {
  const [startTime, setStartTime] = useState('');
  const [description, setDescription] = useState('');

  const { seconds, startTimer, stopTimer } = useTimer();

  const handleStartButtonClick = () => {
    setStartTime(new Date().toISOString());

    startTimer();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    stopTimer();

    const endTime = new Date().toISOString();

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
    <div className='book-time-by-tracker-form'>
      <button onClick={handleStartButtonClick}>Start tracker</button>
      <form
        onSubmit={handleFormSubmit}
        className='book-time-by-tracker-form__form'
      >
        <div className='book-time-by-tracker-form__timer'>
          <TimeDisplayer seconds={seconds} />
        </div>

        <div className='book-time-by-tracker-form__input-and-button'>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          />

          <button type='submit'>Book time</button>
        </div>
      </form>
    </div>
  );
};

export default BookTimeByTrackerForm;
