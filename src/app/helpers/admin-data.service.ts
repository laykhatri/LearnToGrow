import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Notification } from '../models/notification';
import { StudentTeacher } from '../models/studentteacher';


@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  constructor(
    private _notification: Notification,
    private _user: User,
    private _studentteacher: StudentTeacher
  ) {}

  
}
