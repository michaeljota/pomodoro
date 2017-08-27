import { Injectable } from '@angular/core';

import { INotificationsParams } from 'app/models';

@Injectable()
export class NotificationsService {
  public showNotification({title, options}: INotificationsParams): void {
    const notification = new Notification(title, options);
    window.setTimeout(() => notification.close(), 10000);
  }
}
