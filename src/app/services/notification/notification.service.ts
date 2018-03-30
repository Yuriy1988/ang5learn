import { Injectable } from '@angular/core';
import 'rxjs/add/operator/publish';

@Injectable()
export class NotificationService {
  notify(message) {
    console.log('notify DB for error', message);
  }
}
