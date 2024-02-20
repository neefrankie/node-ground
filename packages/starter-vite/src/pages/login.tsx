import { useLogin } from '@refinedev/core';
import { AuthPage } from '@refinedev/antd';

export const Login = () => {
  const { mutate, isLoading } = useLogin();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    mutate(data);
  };

  return (
    <AuthPage
      type='login'
      formProps={{
        initialValues: {
          email: 'demo@demo.com',
          password: 'demodemo'
        }
      }}
    />
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={onSubmit}>
    //     <label htmlFor="email">Email</label>
    //     <input 
    //       type="text"
    //       id='email'
    //       name='email'
    //       defaultValue="demo@demo.com"
    //     />

    //     <label htmlFor='password'>Password</label>
    //     <input 
    //       type="text" 
    //       id='password'
    //       name='password'
    //       defaultValue='demodemo'
    //     />

    //     {isLoading && <span>loading...</span>}
    //     <button
    //       type='submit'
    //       disabled={isLoading}
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
}
