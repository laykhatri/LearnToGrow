import { NotificationNull } from './customtypes';
import { userRoles } from './enums';
import { User } from './user';

export interface notification {
  id: number;
  SendBy: number;
  SendTo: number;
  Message: string;
  IsRead: boolean;
  CreatedAt: Date;
}

export class Notification {
  constructor(private _user: User) {}

  static Notifications: notification[] = [];

  getAllNotifications(): notification[] {
    return Notification.Notifications;
  }

  getNotificationById(id: number): NotificationNull {
    let notification = Notification.Notifications.find((n) => n.id === id);
    if (notification) {
      return notification;
    }
    return null;
  }

  getNotificationsBySendTo(sendTo: number): notification[] {
    return Notification.Notifications.filter((n) => n.SendTo === sendTo);
  }

  getNotificationsBySendBy(sendBy: number): notification[] {
    return Notification.Notifications.filter((n) => n.SendBy === sendBy);
  }

  getNotificationsBySendByAndSendTo(
    sendBy: number,
    sendTo: number
  ): notification[] {
    return Notification.Notifications.filter(
      (n) => n.SendBy === sendBy && n.SendTo === sendTo
    );
  }

  sendNotification(notification: notification): boolean {
    if (notification.SendTo == 0) {
      const sender = this._user.getUserById(notification.SendBy);
      if (
        sender != null &&
        sender!.role != userRoles.STUDENT &&
        sender!.role != userRoles.TEACHER
      ) {
        let users = User.Users;
        for (let user of users) {
          if (user.id != notification.SendBy) {
            notification.SendTo = user.id;
            Notification.Notifications.push(notification);
          }
        }
        return true;
      } else {
        return false;
      }
    } else {
      Notification.Notifications.push(notification);
      return true;
    }
  }
}
