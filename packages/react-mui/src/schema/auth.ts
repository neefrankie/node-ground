import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8),
  rememberMe: z.boolean()
})
.required();

export type ILoginValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type Account = {
  id: string;
  email: string;
  password: string;
}

class AccountStore {
  private db: Account[] = [];
  private idIndex = new Map<string, number>();
  private emailIndex = new Map<string, number>();

  create(a: Account) {
    const index = this.emailIndex.get(a.email);
    if (index === undefined) {
      this.db.push(a);
      this.idIndex.set(a.id, this.db.length - 1);
      this.emailIndex.set(a.email, this.db.length - 1);
    } else {
      throw new Error(`${a.email} already registered`)
    }
  }

  findByEmail(email: string) {
    const index = this.emailIndex.get(email);
    if (index === undefined) {
      throw new Error('Not found');
    } else {
      return this.db[index];
    }
  }
}

export const accountStore = new AccountStore();
