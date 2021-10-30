import React, { useCallback, useEffect, useState } from 'react';
import {
  PagedResponseModel,
  TimeResponseModel,
} from '../../api/response-models';
import api from '../../api/time-tracker-api-v1';
import BookedTimeList from '../BookedTimeList';
import BookTimeByStartAndEndForm from '../BookTimeByStartEndEndForm';
import BookTimeByTrackerForm from '../BookTimeByTrackerForm';
import './style.css';

const initialPageNumber = 1;
const pageLength = 5;

const Times = () => {
  const [times, setTimes] = useState<TimeResponseModel[]>();
  const [currentPageNumber, setCurrentPageNumber] = useState(initialPageNumber);
  const [currentFilterText, setCurrentFilterText] = useState('');

  const handlePreviousButtonClick = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber((currentPageNumber) => currentPageNumber - 1);
    }
  };

  const handleNextButtonClick = () => {
    setCurrentPageNumber((currentPageNumber) => currentPageNumber + 1);
  };

  const loadTimes = useCallback(() => {
    api
      .get<PagedResponseModel<TimeResponseModel>>('/times', {
        params: {
          filter: currentFilterText,
          pageNumber: currentPageNumber,
          pageLength,
        },
      })
      .then((value) => setTimes(value.data.data));
  }, [currentFilterText, currentPageNumber]);

  const resetCurrentPageNumber = () => {
    setCurrentPageNumber(initialPageNumber);
  };

  useEffect(() => {
    loadTimes();
  }, [loadTimes]);

  return (
    <div>
      <div className='times__book-time-by-tracker-form'>
        <BookTimeByTrackerForm
          loadTimes={loadTimes}
          resetCurrentPageNumber={resetCurrentPageNumber}
        />
      </div>

      <div className='times__book-time-by-start-and-end-form'>
        <BookTimeByStartAndEndForm
          loadTimes={loadTimes}
          resetCurrentPageNumber={resetCurrentPageNumber}
        />
      </div>

      <div className='times__booked-time-list'>
        {times && (
          <BookedTimeList
            times={times}
            handleNextButtonClick={handleNextButtonClick}
            handlePreviousButtonClick={handlePreviousButtonClick}
            setCurrentFilterText={setCurrentFilterText}
            resetCurrentPageNumber={resetCurrentPageNumber}
            currentPageNumber={currentPageNumber}
          />
        )}
      </div>
    </div>
  );
};

export default Times;
