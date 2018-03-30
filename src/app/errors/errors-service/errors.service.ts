import { Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import * as StackTraceParser from 'error-stack-parser';

@Injectable()
export class ErrorsService {

  constructor(
    private injector: Injector,
  ) {}

  log(error) {
    return this.addContextInfo(error);
  }

  addContextInfo(error) {
    const name = error.name || null;
    const appId = 'appId';
    const user = 'userId';
    const time = new Date().getTime();
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);

    const errorWithContext = {name, appId, user, time, status, message, stack};
    return errorWithContext;
  }
}
