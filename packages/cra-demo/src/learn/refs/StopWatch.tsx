import { useRef, useState } from 'react';

export function StopWatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef && clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      // You cannot use any state variables here.
      // The won't be updated.
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button
        onClick={handleStart}
      >
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
