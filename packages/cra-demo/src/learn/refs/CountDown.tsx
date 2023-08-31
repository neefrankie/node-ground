import { useRef, useState } from 'react';

export function CountDown(
  props: {
    start: number;
  }
) {
  const [counting, setCounting] = useState(false);
  const [now, setNow] = useState(props.start);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  function handleStart() {
    setCounting(true);
    setNow(props.start);
    
    // Capture the initial start time and then mutate it.
    let startFrom = props.start;

    intervalRef && clearInterval(intervalRef.current);

    // Note: state variables used cannot be updated here.
    intervalRef.current = setInterval(() => {

      if (startFrom <= 0) {
        handleStop();
        return;
      }

      setNow(startFrom--);
    }, 1000);
  }

  function handleStop() {
    intervalRef && clearInterval(intervalRef.current);
    setCounting(false);
  }

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
