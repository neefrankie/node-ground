import { ChangeEvent, useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input 
        label="First input" 
        text={text}
        onChange={setText} 
      />
      <Input 
        label="Second input"
        text={text}
        onChange={setText} 
      />
    </>
  );
}

function Input(
  props: {
    label: string;
    text: string;
    onChange: (text: string) => void;
  }
) {
  

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.value);
  }

  return (
    <label>
      {props.label}
      {' '}
      <input
        value={props.text}
        onChange={handleChange}
      />
    </label>
  );
}
