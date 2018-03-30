import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsHandler } from './errors-handler/errors-handler.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ]
})
export class ErrorsModule { }
