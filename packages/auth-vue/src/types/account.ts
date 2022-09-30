import { randomString } from '../utils/random';

export type AuthParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  confirmPassword: string;
}

export type UserAccount = {
  id: string;
  email: string;
  userName: string;
  expiresAt: number;
  token: string;
}

export function mockAccount(email: string): UserAccount {
  return {
    id: randomString(),
    email,
    userName: email.split('@')[0],
    expiresAt: (new Date()).getTime() / 1000 + 60 * 60 * 24,
    token: randomString(),
  };
}
