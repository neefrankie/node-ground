import { Credentials } from '../model/form-data';
import { v4 as uuidV4} from "uuid";
import { hash, compare } from 'bcrypt';

const saltRounds = 10;

export class User {
  id: string;
  mobile: string;
  wechatId: string;
  email: string;
  password: string; // Should be removed in JSOn output.
  emailVerified: boolean;

  constructor() {
    this.id = uuidV4();
  }

  withMobile(m: string): User {
    this.mobile = m;
    return this;
  }

  withEmail(e: string): User {
    this.email = e;
    return this;
  }

  async withCredentials(c: Credentials): Promise<User> {
    this.email = c.email;
    this.password = await hash(c.password, saltRounds);

    return this;
  }

  async isPasswordMatched(pw: string): Promise<boolean> {
    const ok = await compare(pw, this.password);
    return ok;
  }
}
