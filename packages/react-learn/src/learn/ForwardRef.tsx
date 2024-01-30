// forwardRef lets your component expose a DOM node to parent component with a `ref`.
// forwardRef(render: (pros, ref) => JSX.Element)
// `render` is not a react component that you can directly use.
// It must be wrapped inside forwardRef.
// Call `forwardRef()` to let your component receive a ref and forward it to a child component.
// By default, each component's DOm nodes are private.
// Sometimes it's useful to expose a DOM node to the parent.
// Wrap your component definition into `forwardRef`.

import React, { useRef } from 'react';
import { TextInput } from '../form/Controls';

export function FocusForm() {
  const ref = useRef<HTMLInputElement>(null);

  function handleClick() {
    ref.current?.focus();
  }

  return (
    <form>
      <TextInput
        label='Enter your name'
        name='myInput'
        onChange={console.log}
        ref={ref}
      />
      <button type='button' onClick={handleClick} className='btn btn-primary'>
        Edit
      </button>
    </form>
  );
}


