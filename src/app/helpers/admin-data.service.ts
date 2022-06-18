import { Injectable } from '@angular/core';
import { user, User } from '../models/user';
import { Notification } from '../models/notification';
import { StudentTeacher } from '../models/studentteacher';
import { userRoles } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  constructor(
    private _notification: Notification,
    private _user: User,
    private _studentteacher: StudentTeacher
  ) {}

  getAllNotifications() {
    return this._notification.getAllNotifications();
  }

  assignTeacher(teacher: number, standard: number): boolean {
    return this._studentteacher.assignTeacher(teacher, standard);
  }

  getAllTeachers(): user[] {
    return this._user.getAllUsers().filter(t => t.role == userRoles.TEACHER);
  }
}
