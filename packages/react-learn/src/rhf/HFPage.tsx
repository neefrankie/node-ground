import React from 'react';
import { SimpleForm } from './SimpleForm';
import { IDForm } from './IDForm';
import { MobileForm } from './MobileForm';

export function RHFPage() {
  return (
    <>
      <h2>Plain Form</h2>
      <SimpleForm />
      <h2 className='mt-5'>Mobile Login</h2>
      <MobileForm />
      <h2 className='mt-5'>ID Card</h2>
      <IDForm />
    </>
  );
}
