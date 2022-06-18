import { UserNull } from './customtypes';
import { userRoles } from './enums';

export interface user {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: userRoles;
  salt: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  static Users: user[] = [];

  constructor() {
    if(User.Users.length == 0){
        const salt = Math.random().toString();
        let user: user = {
            id: 1,
            firstName: "Admin",
            lastName: "Admin",
            email: "admin@LearnToGrow.com",
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            isDeleted: false,
            password: User.getPasswordHash("admin", salt),
            role: userRoles.ADMIN,
            salt: salt
        }
    }
  }

  private static getPasswordHash(password: string, salt: string): string {
    const crypto = require('crypto');
    return crypto
      .createHash('sha256')
      .update(password + salt)
      .digest('hex');
  }

  private static isUserExist(id:number): boolean {
    let user = User.Users.find((u) => u.id === id);
    if (user) {
      return true;
    }
    return false;
  }

  updateUser(user: user): boolean {
    if(User.isUserExist(user.id)){
      let userIndex = User.Users.findIndex((u) => u.id === user.id);
      User.Users[userIndex] = user;
      User.Users[userIndex].updatedAt = new Date();
      return true;
    }
    return false;
    
  }
   getUserById(id: number): UserNull {
    let user = User.Users.find((u) => u.id === id);
    if (user) {
      return user;
    }
    return null;
  }

   getUserByEmail(email: string): UserNull {
    let user = User.Users.find((u) => u.email === email);
    if (user) {
      return user;
    }
    return null;
  }

   getAllUsers(): user[] {
    return User.Users;
  }

   deactivateUser(id: number): boolean {
    let user = User.Users.find((u) => u.id === id);
    if (user) {
      user.isActive = false;
      return true;
    }
    return false;
  }

   deleteUser(id: number): boolean {
    let user = User.Users.find((u) => u.id === id);
    if (user) {
      user.isActive = false;
      user.isDeleted = true;
      return true;
    }
    return false;
  }
}
