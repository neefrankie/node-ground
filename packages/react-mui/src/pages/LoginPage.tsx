import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ILoginValues, loginSchema } from '../schema/auth';
import { sleep } from '../util/sleep';

export function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isDirty,
      isValid,
      dirtyFields,
    }
  } = useForm<ILoginValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginValues> = (data) => {
    console.log(data);
    return sleep(2000);
  }

  const emailMsg = dirtyFields.email ? 
    errors.email?.message : 
    'The email you created account on our site';

  const pwMsg = dirtyFields.password ?
    errors.password?.message :
    'Please enter your password';

  return (
    <Container maxWidth="sm">
      <Typography variant='h4' align='center'>Login</Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} direction='column'>
          <TextField
            error={!!errors.email}
            id='email'
            type='email'
            label='Email'
            variant='outlined'
            helperText={emailMsg}
            {...register('email')}
          />
          <TextField
            error={!!errors.password}
            id='password'
            type='password'
            label='Password'
            variant='outlined'
            helperText={pwMsg}
            {...register('password')}
          />
          <Button variant='contained' type='submit'>Login</Button>
        </Stack>
      </form>
    </Container>
  )
}
