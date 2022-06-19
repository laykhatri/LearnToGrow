import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

})
export class CryptoService {

  constructor() { }

  public static getPasswordHash(password: string, salt: string): string {
    const crypto = require('crypto');
    return crypto
      .createHash('sha256')
      .update(password + salt)
      .digest('hex');
  }
}
