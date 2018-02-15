import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Output() like = new EventEmitter<any>();
  @Output() dislike = new EventEmitter<any>();
  @Output() changeRating = new EventEmitter<any>();
  @Output() selectMovie = new EventEmitter<any>();
  @Output() toEditPage = new EventEmitter<any>();

  constructor() { }

}
