import React, { ChangeEvent, useState } from 'react';
import { TextControl } from '../form/Controls';

// Choosing the state structure
// State shouldn't contain redundant or duplicated information.
export function NameForm() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <h2>Let's check you in</h2>
      <form>
        <TextControl
          name="firstName"
          value={firstName}
          label="First name"
          onChange={handleFirstNameChange}
        />
        <TextControl
          name="lastName"
          value={lastName}
          label="Last name"
          onChange={handleLastNameChange}
        />
        <p>YOu ticket will be issued to: <b>{fullName}</b></p>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}
