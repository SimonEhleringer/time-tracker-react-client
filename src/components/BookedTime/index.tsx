import React from 'react';
import { TimeResponseModel } from '../../api/response-models';
import TimeDisplayer from '../TimeDisplayer';
import './style.css';

interface BookedTimeProps {
  time: TimeResponseModel;
}

const BookedTime: React.FC<BookedTimeProps> = ({ time }) => {
  const { id, startTime, endTime, description } = time;

  const startTimeAsDate = new Date(startTime + 'Z');
  const endTimeAsDate = new Date(endTime + 'Z');

  const durationInSeconds = Math.round(
    (endTimeAsDate.getTime() - startTimeAsDate.getTime()) / 1000
  );

  return (
    <div className='booked-time'>
      <div>
        No. <br />
        {id}
      </div>
      <div>
        Start: <br />
        {startTimeAsDate.toLocaleString()}
      </div>
      <div>
        End: <br />
        {endTimeAsDate.toLocaleString()}
      </div>
      <div>
        Duration:
        <TimeDisplayer seconds={durationInSeconds} />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default BookedTime;
