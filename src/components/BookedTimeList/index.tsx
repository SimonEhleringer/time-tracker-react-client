import React from 'react';
import { TimeResponseModel } from '../../api/response-models';
import BookedTime from '../BookedTime';
import './style.css';

interface BookedTimeListProps {
  times: TimeResponseModel[];
  handlePreviousButtonClick: () => void;
  handleNextButtonClick: () => void;
  setCurrentFilterText: (newFilter: string) => void;
  resetCurrentPageNumber: () => void;
  currentPageNumber: number;
}

const BookedTimeList: React.FC<BookedTimeListProps> = ({
  times,
  handleNextButtonClick,
  handlePreviousButtonClick,
  setCurrentFilterText,
  resetCurrentPageNumber,
  currentPageNumber,
}) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetCurrentPageNumber();

    setCurrentFilterText(e.target.value);
  };

  return (
    <div className='booked-time-list'>
      <div className='booked-time-list__input'>
        <input onChange={handleSearchInputChange} placeholder='Search' />
      </div>

      {times.map((time) => {
        return (
          <div className='booked-time-list__booked-time'>
            <BookedTime time={time} />
          </div>
        );
      })}

      <div className='booked-time-list__bottom'>
        <button onClick={handlePreviousButtonClick}>Previous</button>
        <button onClick={handleNextButtonClick}>Next</button>
      </div>

      <div className='booked-time-list__page-number'>
        Page: {currentPageNumber}
      </div>
    </div>
  );
};

export default BookedTimeList;
