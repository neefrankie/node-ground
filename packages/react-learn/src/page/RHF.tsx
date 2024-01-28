import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRquired: string;
};

function RHForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRquired")} />

      {errors.exampleRquired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export function RHFPage() {
  return (
    <div className='container md-3'>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-xl-6'>
          <RHForm />
        </div>
      </div>
    </div>
  )
}
