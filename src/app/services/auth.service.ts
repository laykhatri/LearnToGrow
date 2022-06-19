import { Injectable } from '@angular/core';
import { RoleNull } from '../models/customtypes';
import { userRoles } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean = false;
  role: RoleNull = null;

  constructor() { }
}
