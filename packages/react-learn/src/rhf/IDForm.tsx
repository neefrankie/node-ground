import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { z } from 'zod';
import { TextControl } from '../form/Controls';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';

interface IDValues {
  idNumber: string;
  firstName: string;
  lastName: string;
  age: number;
}

const idSchema = z.object({
  idNumber: z.string().min(18).max(19),
  firstName: z.string().min(8),
  lastName: z.string(),
  age: z.coerce.number(),
})
.required();

export function IDForm() {
  
  const { 
    register, 
    handleSubmit, 
    formState,
  } = useForm<IDValues>({
    mode: 'onChange',
    defaultValues: {
      idNumber: '',
      firstName: '',
      lastName: '',
      age: 0,
    },
    resolver: zodResolver(idSchema),
  });

  const { isDirty, isValid, isSubmitting, dirtyFields, errors } = formState;

  const onSubmit: SubmitHandler<IDValues> = (data) => {
    console.log(data);
    return sleep(2000, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <TextControl
        label='ID Card Number'
        error={dirtyFields.idNumber ? errors.idNumber?.message : undefined}
        {...register('idNumber')}
      />

      <TextControl
        label='First name'
        error={dirtyFields.firstName ? errors.firstName?.message : undefined}
        {...register('firstName')}
      />

      <TextControl
        name='lastName'
        label='Last name'
        error={dirtyFields.lastName ? errors.lastName?.message : undefined}
        {...register}
      />

      <TextControl
        label='Age'
        type='number'
        error={dirtyFields.age ? errors.age?.message : undefined}
        {...register('age')}
      />

      <SubmitButton
        isDirty={isDirty}
        isValid={isValid}
        isSubmitting={isSubmitting}
        text='Save'
      />
    </form>
  )
}


interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: {
    label: string;
    value: string;
  };
}

export function IntegreateNoRef() {
  const { control } = useForm<IFormInput>({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: {}
    }
  });


  return (
    <form>
      <Controller
        name='firstName'
        control={control}
        render={({field}) => <TextControl {...field} />}
      />
    </form>
  )
}

