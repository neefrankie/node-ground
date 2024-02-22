import { AuthPage } from '@refinedev/mui';

function AuthTitle() {
  return (
    <h1>Carta Visa CMS</h1>
  );
}

export function Login() {
  return (
    <AuthPage
      title={<AuthTitle />}
      registerLink={false}
    />
  );
}

export function ForgotPassword() {
  return (
    <AuthPage 
      title={<AuthTitle />}
      type="forgotPassword"
    />
  );
}

export function UpdatePassword() {
  return (
    <AuthPage
      title={<AuthTitle />}
      type="updatePassword"
      formProps={{
        onSubmit: (data) => {
          console.log(data);
        }
      }}
    />
  );
}
