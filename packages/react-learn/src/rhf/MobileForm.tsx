import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput } from '../form/TextInput';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';
import { SpinButton } from '../component/Button';
import { useState } from 'react';
import { InputGroup } from '../form/InputGroup';

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
  const [ requestingCode, setRequestCode ] = useState(false);
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

  const onRequestCode = () => {
    setRequestCode(!requestingCode);
    sleep(2000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label='Mobile'
        error={dirtyFields.mobile ? errors.mobile?.message : undefined}
        {...register('mobile')}
      />

      <InputGroup
        label='Code'
        error={dirtyFields.code ? errors.code?.message : undefined}
        endAddOn={
          <SpinButton
            text='Send'
            progress={requestingCode}
            disabled={requestingCode}
            variant='outline-secondary'
            onClick={onRequestCode}
          />
        }
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

