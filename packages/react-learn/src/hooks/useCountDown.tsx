import { useState, useRef } from 'react';

export function useCountDown(dur: number, timeout?: number | undefined) {
  const [count, setCount] = useState(dur)
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(0);

  const start = () => {
    clearInterval(intervalRef.current);
    setRunning(true);

    intervalRef.current = window.setInterval(() => {
      // NOTE: the `count` value here is the one enclosed this 
      // closure is created, that is, when the button is clicked.
      // The updated `count` won't be visible here.   
      setCount((v) => {
        if (v < 1) {
          setRunning(false);
          clearInterval(intervalRef.current);
          return 60;
        } else {
          return v-1;
        }
      });
    }, timeout);
  }

  return {
    count,
    running,
    start,
  };
}
