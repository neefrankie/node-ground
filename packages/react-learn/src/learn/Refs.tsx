import { useEffect, useRef, useState }from 'react';
import { useCountDown } from '../hooks/useDountDown';

// Like state, refs are retained by React between re-renders.
// However, setting state re-renders a component. Change a ref does not.
// You can access t he current value of that ref through the `ref.current` property.
// You can use refs to store timeout IDs, DOM elements, and other objects that
// don't impact the component's rendering output.
export function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick} className='btn btn-primary'>
      Click me!
    </button>
  );
}

export function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number>();

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className='mt-3 mb-3'>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>

      <button className='btn btn-primary'
        onClick={handleStart}
      >
        Start
      </button>
      <button className='btn btn-danger'
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  )
}

export function CountDown() {
  const [count, setCount] = useState(60)
  const [progress, setProgress] = useState(false);
  const intervalRef = useRef(0);

  const handleStart = () => {
    clearInterval(intervalRef.current);
    setProgress(true);
    intervalRef.current = window.setInterval(() => {
      // NOTE: the `count` value here is the one enclosed this 
      // closure is created, that is, when the button is clicked.
      // The updated `count` won't be visible here.   
      setCount((v) => {
        if (v < 1) {
          setProgress(false);
          clearInterval(intervalRef.current);
          return 60;
        } else {
          return v-1;
        }
      });
    }, 1000);
  }

  return (
    <button
      className='btn btn-outline-primary'
      onClick={handleStart}
    >
      {
        progress ? count : 'Start'
      }
    </button>
  )
}

export function CountDownHook() {
  const {
    count,
    running,
    start
  } = useCountDown(60, 1000);

  return (
    <button
      className='btn btn-outline-primary'
      onClick={() => start()}
    >
      {
        running ? count : 'Start'
      }
    </button>
  )
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function OverreactedCounter() {
  const [count, setCount] = useState(0);

  // useEffect captures the first count from the first render. It is equal to 0.
  // We never re-apply the effect so the closure in setInterval always references 
  // the count from the first render, and count + 1 is always 1
  useEffect(() => {
    // setInterval will forever reference the old props and state
    // until you replace it — which you can’t do without resetting the time.
    // We do setInterval(callback1, delay) with callback1 from first render.
    // We have callback2 from next render that closes over fresh props and state.
    // But we can’t replace an already existing interval without resetting the time!
    let id = setInterval(() => {
    // One way to fix it is to replace setCount(count + 1) with the “updater” form 
    // like setCount(c => c + 1). It can always read fresh state for that variable. 
    // But this doesn’t help you read the fresh props, for example.
      setCount(count + 1)
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

// Access the DOM element managed by React.
export function FocusForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        ref={inputRef}
      />
      <button
        onClick={handleClick}
        className='btn btn-outline-secondary'
        type='button'
      >
        Focus the input
      </button>
    </div>
  )
}
