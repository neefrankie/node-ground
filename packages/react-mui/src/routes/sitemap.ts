export interface ILink {
  href: string;
  name: string;
  children?: ILink[]
}

export const sitePath = {
  hookForm: 'hook-form',
  auth: 'auth',
  login: 'login',
  forgotPassword: 'forgot-password',
  passwordReset: 'password-reset',
  settings: 'settings',
};


export const navItems: ILink[] = [
  {
    name: 'React Hook Form',
    href: `/${sitePath.hookForm}`,
  },
  {
    name: 'Login',
    href: `/${sitePath.auth}/${sitePath.login}`,
  },
];

export function passwordResetUrl(baseUrl: string): string {
  return `${baseUrl}/reader${sitePath.passwordReset}`;
}
