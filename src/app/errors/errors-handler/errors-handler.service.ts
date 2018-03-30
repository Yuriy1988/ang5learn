import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    const parsedError = this.addContextInfo(error);
    // todo: should notify another service
    if (error instanceof HttpErrorResponse) {
      // todo: handle server-side error
      console.log(parsedError);
    } else {
      // todo: handle client-side error
      console.log(parsedError);
    }
  }

  addContextInfo(error) {
    // todo: add meta info according to errorcache table structure
    const name = error.name || null;
    const appId = 'appId';
    const userId = 'userId';
    const time = new Date().getTime();
    const status = error.status || null;
    const message = JSON.stringify(error.message);

    return { name, appId, userId, time, status, message };
  }
}

