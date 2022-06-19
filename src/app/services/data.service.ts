import { Injectable } from '@angular/core';
import { UserNull } from '../models/customtypes';
import { user, User } from '../models/user';
import { AuthService } from './auth.service';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _user: User, private _auth: AuthService) {}

  login(email: string, password: string): UserNull {
    let user = this._user.getUserByEmail(email);
    if (user != null) {
      if (user.password == CryptoService.getPasswordHash(password, user.salt)) {
        user.password = "";
        user.salt = "";
        this._auth.isAuthenticated = true;
        this._auth.role = user.role;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
    }
    return null;
  }

  logout() {
    this._auth.isAuthenticated = false;
    this._auth.role = null;
    localStorage.removeItem('user');
  }

  register(user: user): UserNull {
    let userExists = this._user.getUserByEmail(user.email);
    if (userExists == null) {
      this._user.addUser(user);
      return user;
    }
    return null;
  }
}
