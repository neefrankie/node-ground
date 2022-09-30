import { UserAccount } from '../types/account';

class AuthService {

  account?: UserAccount;
  redirectTo?: string;
  private storeKey = 'user';

  loggedIn(account: UserAccount) {
    this.account = account;
    localStorage.setItem(this.storeKey, JSON.stringify(account));
  }

  setRedirectTo(path: string) {
    this.redirectTo = path || '/';
  }

  getRedirectTo(): string {
    return this.redirectTo || '/';
  }

  get isLoggedIn(): boolean {
    if (!this.account) {
      const val = localStorage.getItem(this.storeKey);
      if (val) {
        this.account = JSON.parse(val);
      }
    }

    if (!this.account) {
      return false;
    }

    return true;
  }

  get isExpired(): boolean {
    if (!this.account) {
      return true;
    }
    return (Date.now() / 1000) > this.account.expiresAt;
  }

  get authToken(): string | null {
    if (!this.account) {
      return null;
    }
    return `Bearer ${this.account.token}`;
  }

  get displayName(): string {
    if (!this.account) {
      return '';
    }

    return this.account.userName
  }

  logout(): void {
    this.account = undefined;
    localStorage.removeItem(this.storeKey);
  }
}

export const authService = new AuthService();
