import { useState } from 'react';

function Field(
  props: {
    label: string;
    text: string;
    onChange: (text: string) => void;
  }
) {
  return (
    <div className='mb-3'>
      <label>{props.label}</label>
      <input 
        type='text'
        value={props.text} 
        className='form-control'
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  )
}

export function SwapFields() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let checkbox = (
    <div className='mb-3 form-check'>
      <input 
        type="checkbox" 
        className='form-check-input'
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      <label className='form-check-label'>
        Reverse order
      </label>
    </div>
  );

  if (reverse) {
    return (
      <>
        <Field
          label='Last name'
          text={lastName}
          onChange={setLastName}
        />
        <Field
          label='First name'
          text={firstName}
          onChange={setFirstName}
        />
        {checkbox}
      </>
    );
  }

  return (
    <>
      <Field
        label='First name'
        text={firstName}
        onChange={setFirstName}
      />
      <Field
        label='Last name'
        text={lastName}
        onChange={setLastName}
      />
      {checkbox}
    </>
  );
}
