import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sleep } from '../util/sleep';
import { z } from 'zod';
import { SubmitButton } from '../form/SubmitButton';

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
  // formState.isDirty only works if you set initial value here.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid, dirtyFields }
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

  const emailErr = dirtyFields.email ? errors.email?.message : undefined;
  const pwErr = dirtyFields.password ? errors.password?.message : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='mb-3'>
        <label htmlFor="">Email</label>
        <input 
          className={`form-control${emailErr ? ' is-invalid' : ''}`}
          {...register('email')} 
        />
        {
          emailErr &&
          <div className="invalid-feedback">{emailErr}</div>
        }
      </div>
      
      <div className='mb-3'>
        <label htmlFor="">Password</label>
        <input
          className={`form-control${pwErr ? ' is-invalid' : ''}`}
          {...register('password')}
        />
        {
          pwErr &&
          <div className="invalid-feedback">{pwErr}</div>
        }
      </div>

      <SubmitButton 
        isDirty={isDirty}
        isValid={isValid}
        isSubmitting={isSubmitting}
        text='Login'
      />

    </form>
  )
}
