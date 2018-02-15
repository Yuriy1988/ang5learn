import {Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getCurrentMovie()
      .subscribe((movie: Movie) => this.movie = movie);
  }
}
