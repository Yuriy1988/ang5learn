import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from '../errors-service/errors.service';
import { NotificationService } from '../../services/notification/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationService);
    const errorsService = this.injector.get(ErrorsService);

    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return notificationService.notify('No Internet Connection');
      }

      errorsService.log(error);
      return notificationService.notify(`${error.status} - ${error.message}`);
    } else {
      errorsService.log(error);
    }
  }
}

