export type Credentials = {
  email: string;
  password: string;
};

export type EmailOnly = {
  email: string;
};

export type MobileOnly = {
  mobile: string;
};

export type MobileAuth = {
  mobile: string;
  code: string;
}

export type PasswordReset = {
  token: string;
  password: string;
};

export type Passwords = {
  oldPassword: string;
  password: string;
}
