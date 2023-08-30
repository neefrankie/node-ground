import { ChangeEvent, useState } from 'react';

function Form() {

  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  return (
    <>
      <label>
        First name:
        <input 
          value={firstNameProps.value} 
          onChange={firstNameProps.onChange} 
        />
      </label>
      <label>
        Last name:
        <input 
          value={lastNameProps.value} 
          onChange={lastNameProps.onChange} 
        />
      </label>

      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  )
}

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
