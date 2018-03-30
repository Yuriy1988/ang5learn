import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';
import { ReactiveFormsModule} from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { SharedModule } from '../shared/shared.module';
import { ErrorsModule } from '../errors/errors.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StarRatingModule,
    ErrorsModule,
  ],
  declarations: [
    MoviesComponent,
  ],
  providers: [
    MoviesService,
  ]
})
export class MoviesModule { }
