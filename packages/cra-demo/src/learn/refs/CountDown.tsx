import { useRef, useState } from 'react';

export function CountDown(
  props: {
    start: number;
  }
) {
  const [counting, setCounting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const [elapsed, setElapsed] = useState(0);

  function handleStart() {
    setCounting(true);
    setElapsed(0);

    intervalRef && clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {

      if (elapsed >= props.start) {
        handleStop();
        return;
      }

      setElapsed(elapsed+1);
    }, 1000);
  }

  function handleStop() {
    intervalRef && clearInterval(intervalRef.current);
    setCounting(false);
  }

  let now = props.start - elapsed;

  if (counting) {
    return (
      <button disabled className='btn btn-outline-primary'>
        {now} s
      </button>
    );
  }

  return (
    <button onClick={handleStart} className='btn btn-outline-primary'>
      Start
    </button>
  );
}
