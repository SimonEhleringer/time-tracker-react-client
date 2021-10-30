import React from 'react';
import { TimeResponseModel } from '../../api/response-models';
import './style.css';

interface BookedTimeProps {
  time: TimeResponseModel;
}

const BookedTime: React.FC<BookedTimeProps> = ({ time }) => {
  const { id, startTime, endTime, description } = time;

  const startTimeAsDate = new Date(startTime);
  const endTimeAsDate = new Date(endTime);

  return (
    <div className='booked-time'>
      <div>{id}</div>
      <div>{startTimeAsDate.toLocaleString()}</div>
      <div>{endTimeAsDate.toLocaleString()}</div>
      <div>{description}</div>
    </div>
  );
};

export default BookedTime;
