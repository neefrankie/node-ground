import { User } from '../entity/User';

class UserStore {
  private users = new Map<string, User>();
  private emailIndex = new Map<string, string>();

  add(u: User) {
    this.users.set(u.id, u);
    this.emailIndex.set(u.email, u.id);
  }

  findById(id: string): User | undefined {
    return this.users.get(id);
  }
  
  findByEmail(e: string): User | undefined {
    const id = this.emailIndex.get(e);
    if (!id) {
      return undefined;
    }

    return this.users.get(id);
  }

  remove(u: User) {
    this.users.delete(u.id);
    this.emailIndex.delete(u.email);
  }
}

export const userStore = new UserStore();
