import { SimpleForm } from './SimpleForm';
import { IDForm } from './IDForm';
import { MobileForm } from './MobileForm';
import { PetsForm } from './PetsForm';
import { DateForm } from './DateForm';

export function RHFPage() {
  return (
    <>
      <h2>Plain Form</h2>
      <SimpleForm />
      <h2 className='mt-5'>Mobile Login</h2>
      <MobileForm />
      <h2 className='mt-5'>ID Card</h2>
      <IDForm />
      <h2 className='mt-5'>Register your pets</h2>
      <PetsForm />
      <h2 className='mt-5'>Date Time</h2>
      <DateForm />
    </>
  );
}
