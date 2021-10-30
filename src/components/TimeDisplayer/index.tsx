import React from 'react';

const getNumberAsStringWithLeadingZero = (number: number) => {
  let result = number.toString();

  while (result.length < 2) {
    result = '0' + result;
  }

  return result;
};

interface TimeDisplayerProps {
  seconds: number;
}

const TimeDisplayer: React.FC<TimeDisplayerProps> = ({ seconds }) => {
  let displaySeconds = seconds + 60 - Math.ceil(seconds / 60) * 60;

  if (displaySeconds === 60) {
    displaySeconds = 0;
  }

  const displaySecondsString = getNumberAsStringWithLeadingZero(displaySeconds);

  const displayMinutes = Math.floor(seconds / 60);
  const displayMinutesString = getNumberAsStringWithLeadingZero(displayMinutes);

  const displayHours = Math.floor(seconds / 60 / 60);
  const displayHoursString = getNumberAsStringWithLeadingZero(displayHours);

  return (
    <div>
      {displayHoursString}:{displayMinutesString}:{displaySecondsString}
    </div>
  );
};

export default TimeDisplayer;
