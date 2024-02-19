import { useState } from 'react'
import { TextInput } from '../form/TextInput';
import { CheckBox } from '../form/CheckBox';

export function LoginPage() {
  return (
    <>
      <h4 className="text-center">Login</h4>
      <LoginForm/>
    </>
  )
}

type AuthParams = {
  email: string;
  password: string;
}

function LoginForm() {
  const [auth, setAuth] = useState<AuthParams>({
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(true);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    console.log(data);
  }

  return (
    <form method="POST" onSubmit={onSubmit}>
      <TextInput
        name='email'
        value={auth.email}
        type='email'
        label='Email'
        desc="We'll never share your email with anyone else"
        required={true}
        onChange={(e) => {
          setAuth({
            ...auth,
            email: e.target.value,
          })
        }}
      />
      <TextInput
        name='password'
        value={auth.password}
        type='password'
        label='Password'
        required={true}
        onChange={(e) => {
          setAuth({
            ...auth,
            password: e.target.value,
          })
        }}
      />

      <CheckBox
        name='exampleCheck'
        label='Check me out'
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <div className='d-grid'>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>    
  );
}
