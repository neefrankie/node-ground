import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReactDatePicker from 'react-datepicker';
import Select from 'react-select';
import { TextControl } from '../form/Controls';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';

interface IDValues {
  idNumber: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  age: number;
  gender?: Gender;
}

const idSchema = z.object({
  idNumber: z.string().min(18).max(19),
  firstName: z.string().min(8),
  lastName: z.string(),
  age: z.coerce.number(),
})
.required();

enum Gender {
  Male = 'M',
  Female = 'F',
};

const options = [
  { value: Gender.Male, label: 'Male'},
  { value: Gender.Female, label: 'Female'},
];

export function IDForm() {
  
  const { 
    register, 
    handleSubmit, 
    formState,
    control,
  } = useForm<IDValues>({
    mode: 'onChange',
    defaultValues: {
      idNumber: '',
      firstName: '',
      lastName: '',
      birthday: new Date(),
      age: 0,
      gender: undefined,
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

      <div className='mb-3'>
        <label className='me-3'>
          Birthday
        </label>
        <Controller
          name='birthday'
          control={control}
          render={({ field }) =>
            <ReactDatePicker
              onChange={field.onChange}
              onBlur={field.onBlur}
              selected={field.value}
            />
          }
        />
      </div>

      <Controller
        name='gender'
        control={control}
        render={({ field }) =>
          <Select
            onChange={field.onChange}
            onBlur={field.onBlur}
            options={options}
          />
        }
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



