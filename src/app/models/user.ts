import { CryptoService } from '../services/crypto.service';
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
            password: CryptoService.getPasswordHash("admin", salt),
            role: userRoles.ADMIN,
            salt: salt
        }
    }
  }

  getUserById(id: number): UserNull {
    let user = User.Users.find(u => u.id == id);
    return user==undefined?null:user;
  }

  getUsers(): UserNull[] {
    return User.Users;
  }

  addUser(user: user): void {
    User.Users.push(user);
  }

  updateUser(user: user): void {
    let index = User.Users.findIndex(u => u.id == user.id);
    User.Users[index].firstName = user.firstName;
    User.Users[index].lastName = user.lastName;
    User.Users[index].updatedAt = new Date();
  }

  deleteUser(id: number): void {
    let index = User.Users.findIndex(u => u.id == id);
    User.Users[index].isActive = false;
    User.Users[index].isDeleted = true;
    User.Users[index].updatedAt = new Date();
  }

  changePassword(id: number, password: string): void {
    let index = User.Users.findIndex(u => u.id == id);
    let salt = Math.random().toString();
    User.Users[index].password = CryptoService.getPasswordHash(password, salt);
    User.Users[index].salt = salt;
    User.Users[index].updatedAt = new Date();
  }
}
