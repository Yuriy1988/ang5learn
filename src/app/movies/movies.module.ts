import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';
import { ReactiveFormsModule} from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { LikesComponent } from './likes/likes.component';
import { StarRatingModule } from 'angular-star-rating';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StarRatingModule,
  ],
  declarations: [
    MoviesComponent,
    MovieComponent,
    LikesComponent,
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
