import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';
import { ReactiveFormsModule} from '@angular/forms';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MoviesComponent,
    MovieComponent,
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
