export class AccessToken {
  TOKEN_KEY = 'access_token';

  static make() {
    return new AccessToken();
  }

  store(token: string): void {
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  get(): string | null {
    return window.localStorage.getItem(this.TOKEN_KEY);
  }
}
