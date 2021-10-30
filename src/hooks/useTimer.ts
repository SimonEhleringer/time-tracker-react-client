import { useState } from 'react';

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timeout, setTimeout] = useState<NodeJS.Timeout>();

  const startTimer = () => {
    const localTimeout = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    setTimeout(localTimeout);
  };

  const stopTimer = () => {
    if (timeout) {
      clearInterval(timeout);
    }

    setSeconds(0);
  };

  return {
    seconds,
    startTimer,
    stopTimer,
  };
};

export default useTimer;
