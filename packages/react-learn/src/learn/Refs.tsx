import { useRef }from 'react';

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
