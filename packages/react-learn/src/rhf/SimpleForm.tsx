import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sleep } from '../util/sleep';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8),
})
.required();

type ILoginValues = {
  email: string;
  password: string;
};

export function SimpleForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid, touchedFields }
  } = useForm<ILoginValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginValues> = (data) => {
    console.log(data)
    return sleep(2000, data);
  };

  console.log(watch('email'));
  console.log(touchedFields);
  console.log(errors);

  const emailValid = !(touchedFields.email && errors.email);
  const pwValid = !(touchedFields.password && errors.password);

  console.log('email valid: ', emailValid);
  console.log('pwValid: ', pwValid);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='mb-3'>
        <label htmlFor="">Email</label>
        <input 
          className={`form-control${emailValid ? '' : ' is-invalid'}`}
          {...register('email')} 
        />
        {
          errors.email &&
          <div className="invalid-feedback">{errors.email.message}</div>
        }
      </div>
      
      <div className='mb-3'>
        <label htmlFor="">Password</label>
        <input
          className={`form-control${pwValid ? '' : ' is-invalid'}`}
          {...register('password')}
        />
        {
          errors.password &&
          <div className="invalid-feedback">{errors.password.message}</div>
        }
      </div>

      <button 
        type='submit'
        className='btn btn-primary'
        disabled={!isDirty || !isValid || isSubmitting}
      >
        {
          isSubmitting ?
          'Submitting...' :
          'Submit'
        }
      </button>
    </form>
  )
}
