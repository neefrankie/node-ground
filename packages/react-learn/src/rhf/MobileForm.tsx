import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput } from '../form/Controls';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';

interface IMobileValues {
  mobile: string;
  code: string;
}

const mobileSchema = z.object({
  mobile: z.string(),
  code: z.string(),
})
.required();

export function MobileForm() {
  const { 
    control, handleSubmit, formState, register
  } = useForm<IMobileValues>({
    defaultValues: {
      mobile: '',
      code: '',
    },
    resolver: zodResolver(mobileSchema),
  });

  const { isDirty, isValid, isSubmitting, dirtyFields, errors } = formState;

  const onSubmit: SubmitHandler<IMobileValues> = (data) => {
    console.log(data);
    return sleep(2000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label='Mobile'
        error={dirtyFields.mobile ? errors.mobile?.message : undefined}
        {...register('mobile')}
      />

      <TextInput
        label='Code'
        error={dirtyFields.code ? errors.code?.message : undefined}
        {...register('code')}
      />

      <SubmitButton
        isDirty={isDirty}
        isValid={isValid}
        isSubmitting={isSubmitting}
        text='Login'
      />
    </form>
  )
}

