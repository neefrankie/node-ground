import { useEffect, useRef, useState } from 'react';

export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (!savedCallback.current) {
        return;
      }
      savedCallback.current();
    }
    if (delay !== null) {
      let id = window.setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}

export function CounterButton(
  props: {
    from: number;
    onFinish: () => void;
  }
) {

  const [count, setCount] = useState(props.from);
  const [isRunning, setIsRunnnig] = useState(true);

  useInterval(() => {
    console.log(`Counting ${count}`);
    setCount(count - 1);
    if (count <= 1) {
      setIsRunnnig(false);
      props.onFinish();
    }
  }, isRunning ? 1000 : null);

  return (
    <button
      className='btn btn-outline-secondary'
      type="button"
      disabled={true}
    >
      {count}s
    </button>
  );
}
