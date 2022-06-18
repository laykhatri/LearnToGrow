import { UserNull } from "./customtypes";
import { userRoles } from "./enums";

interface user{
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

export class User{
    static Users: user[] = [];

    private static getPasswordHash(password: string, salt: string): string{
        const crypto = require('crypto');
        return  crypto.createHash("sha256").update(password + salt).digest("hex");
    }

    static Login(email: string, password: string): UserNull{
        let user = User.Users.find(u => u.email === email);
        if(user){
            if(user.password === User.getPasswordHash(password, user.salt)){
                return user;
            }
        }
        return null;
    }

    static Register(user: user): UserNull{
        let existingUser = User.Users.find(u => u.email === user.email);
        if(existingUser){
            return null;
        }
        user.salt = Math.random().toString();
        user.password = User.getPasswordHash(user.password, user.salt);
        User.Users.push(user);
        return user;
    }

    static getUserById(id: number): user | null{
        let user = User.Users.find(u => u.id === id);
        if(user){
            return user;
        }
        return null;
    }
}