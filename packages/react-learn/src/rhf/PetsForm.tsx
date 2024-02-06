import { OptionHTMLAttributes } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';
import Select from 'react-select';
import ReactDatePicker from 'react-datepicker';

interface IDValues {
  adoptedOn: Date;
  pets?: string | null;
}

const idSchema = z.object({
  adoptedOn: z.date(),
  pets: z.string(),
})
.required();

const petsOpts: OptionHTMLAttributes<HTMLSelectElement>[] = [
  { value: '', label: '--Please choose an option--'},
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'parrot', label: 'Parrot' },
  { value: 'spider', label: 'Spider' },
  { value: 'goldfish', label: 'Goldfish' },
];

export function PetsForm() {
  
  const { 
    handleSubmit, 
    formState,
    control,
    watch,
  } = useForm<IDValues>({
    mode: 'onChange',
    defaultValues: {
      adoptedOn: new Date(),
      pets: '',
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

      <div className='mb-3'>
        <label className='me-3'>
          Adopeted on
        </label>
        <Controller
          name='adoptedOn'
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
        name='pets'
        control={control}
        render={({ field }) => (
          <Select
            options={petsOpts}
            value={petsOpts.find((g) => g.value == field.value)}
            onChange={(val) => field.onChange(val?.value)}
          />
        )}
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



