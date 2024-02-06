import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sleep } from '../util/sleep';
import { z } from 'zod';
import { SubmitButton } from '../form/SubmitButton';
import { toggleInputClass } from '../form/InputSlot';

// A zod schema must include all fields of the form.
// any missing field in the schema will not be submitted.
const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8),
  title: z.string(),
})
.required();

type ILoginValues = {
  email: string;
  password: string;
  title: string;
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
      title: ''
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginValues> = (data) => {
    console.log(data)
    return sleep(2000, data);
  };

  console.log(watch('title'));

  const emailErr = dirtyFields.email ? errors.email?.message : undefined;
  const pwErr = dirtyFields.password ? errors.password?.message : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='mb-3'>
        <label htmlFor="email">Email</label>
        <input 
          className={toggleInputClass(!!emailErr)}
          {...register('email')} 
          id='password'
        />
        {
          emailErr &&
          <div className="invalid-feedback">{emailErr}</div>
        }
      </div>
      
      <div className='mb-3'>
        <label htmlFor="password">Password</label>
        <input
          className={toggleInputClass(!!pwErr)}
          {...register('password')}
          id='password'
        />
        {
          pwErr &&
          <div className="invalid-feedback">{pwErr}</div>
        }
      </div>

      <div className='mb-3'>
        <label htmlFor="title">Choose a your title:</label>

        <select
          id='title'
          className='form-select'
          {...register("title", { required: true })}
        >
          <option value="">--Please choose an option--</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
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
