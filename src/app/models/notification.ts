import { NotificationNull } from './customtypes';
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

  getNotificationById(id: number): NotificationNull {
    let notification = Notification.Notifications.find(
      n => n.id == id
    );
    return notification == undefined ? null : notification;
  }

  getNotifications(): NotificationNull[] {
    return Notification.Notifications;
  }

  addNotification(notification: notification): void {
    Notification.Notifications.push(notification);
  }

  updateNotification(notification: notification): void {
    let index = Notification.Notifications.findIndex(
      n => n.id == notification.id
    );
    Notification.Notifications[index].IsRead = notification.IsRead;
  }
}
