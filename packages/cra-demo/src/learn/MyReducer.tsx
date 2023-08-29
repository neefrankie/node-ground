import { useState } from 'react';

function useReducer<S, A>(reduer: (s: S, a: A) => S, initialState: S) {
  const [state, setState] = useState(initialState);

  const dispatch = (action: A) => {
    const nextState = reduer(state, action);
    setState(nextState);
  };

  return [state, dispatch];
}
