import { ChangeEvent, useState } from 'react';

export function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <div>
        <label htmlFor="first-name">First name:</label>
      </div>
      <div>
        <input
          id='first-name'
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>

      <div>
        <label htmlFor="last-name">Last name:</label>
      </div>
      <div>
        <input
          id='last-name'
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <p>Your ticket will be issued to: <b>{fullName}</b></p>
    </>
  )
}
