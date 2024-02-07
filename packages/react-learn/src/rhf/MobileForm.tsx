import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput } from '../form/TextInput';
import { sleep } from '../util/sleep';
import { SubmitButton } from '../form/SubmitButton';
import { Button, SpinButton } from '../component/Button';
import { useState } from 'react';
import { InputGroup } from '../form/InputGroup';
import { useCountDown } from '../hooks/useCountDown';

interface IMobileValues {
  mobile: string;
  code: string;
}

const mobileSchema = z.object({
  mobile: z.string().length(11),
  code: z.string().length(6),
})
.required();

export function MobileForm() {
  const [ requestingCode, setRequestCode ] = useState(false);

  const {
    count,
    running,
    start
  } = useCountDown(60, 1000);

  const { 
    handleSubmit, 
    formState, 
    register,
    getValues,
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
    setRequestCode(true);
    console.log('Rquesting SMS code for ', getValues('mobile'));
    sleep(2000)
      .then(() => {
        start();
      });
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
          running ?
          <Button
            disabled={running || isSubmitting}
            variant='outline-primary'
          >
            {count}
          </Button> :
          <SpinButton
            text='Send'
            progress={requestingCode}
            disabled={!(dirtyFields.mobile && !errors.mobile) || requestingCode || isSubmitting}
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

