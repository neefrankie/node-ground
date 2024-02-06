import { OptionHTMLAttributes } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput } from '../form/TextInput';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';
import { Select } from '../form/Select';

interface IDValues {
  idNumber: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  gender?: Gender | null;
}

const idSchema = z.object({
  idNumber: z.string().min(18).max(19),
  firstName: z.string().min(8),
  lastName: z.string(),
  gender: z.string(),
})
.required();

enum Gender {
  Male = 'M',
  Female = 'F',
};

const genderOpts: OptionHTMLAttributes<HTMLSelectElement>[] = [
  { value: Gender.Male, label: 'Male'},
  { value: Gender.Female, label: 'Female'},
];

export function IDForm() {
  
  const { 
    register, 
    handleSubmit, 
    formState,
    watch,
  } = useForm<IDValues>({
    mode: 'onChange',
    defaultValues: {
      idNumber: '',
      firstName: '',
      lastName: '',
      birthday: new Date(),
      gender: Gender.Female,
    },
    resolver: zodResolver(idSchema),
  });

  const { isDirty, isValid, isSubmitting, dirtyFields, errors } = formState;

  const onSubmit: SubmitHandler<IDValues> = (data) => {
    console.log(data);
    return sleep(2000, data);
  };

  console.log(watch('gender'));
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <TextInput
        label='ID Card Number'
        error={dirtyFields.idNumber ? errors.idNumber?.message : undefined}
        {...register('idNumber')}
      />

      <TextInput
        label='First name'
        error={dirtyFields.firstName ? errors.firstName?.message : undefined}
        {...register('firstName')}
      />

      <TextInput
        label='Last name'
        error={dirtyFields.lastName ? errors.lastName?.message : undefined}
        {...register('lastName')}
      />

      <Select
        label='Gender'
        error={dirtyFields.gender ? errors.gender?.message : undefined}
        {...register('gender')}
        options={genderOpts}
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



