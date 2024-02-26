import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ILoginValues, loginSchema } from '../../schema/auth';
import { Link as RouteLink } from 'react-router-dom';

import { useAuth } from './useAuth';
import { SubmitButton } from '../../components/Buttons';

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
      email: 'joe@example.org',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  });

  const {
    onSubmit,
  } = useAuth();

  const emailMsg = dirtyFields.email ? 
    errors.email?.message : 
    'The email you created account on our site';

  const pwMsg = dirtyFields.password ?
    errors.password?.message :
    'Please enter your password';

  return (
    <Container component='main' maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            fullWidth
            error={!!errors.email}
            id='email'
            type='email'
            label='Email'
            variant='outlined'
            helperText={emailMsg}
            autoComplete='email'
            autoFocus
            {...register('email')}
          />
          <TextField
            margin='normal'
            fullWidth
            error={!!errors.password}
            id='password'
            type='password'
            label='Password'
            variant='outlined'
            helperText={pwMsg}
            autoComplete='current-password'
            {...register('password')}
          />
          
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <FormControlLabel
              control={
                <Checkbox  
                  color='primary'
                  {...register('rememberMe')}
                />
              }
              label='Remember me'
            />

            <Link component={RouteLink} to='/forgot-password' variant='body2'>
              Forgot password?
            </Link>
          </Box>
          <SubmitButton
            isDirty={isDirty}
            isValid={isValid}
            fullWidth
            isSubmitting={isSubmitting}
          >
            Submit
          </SubmitButton>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Link component={RouteLink} to='/signup' variant='body2'>
              Sign Up
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
