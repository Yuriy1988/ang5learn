import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from './movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[];

  constructor(
    private moviesService: MoviesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  private getMovies(): void {
    this.moviesService.getMovies()
      .subscribe(
        (response: Movie[]): void => { this.movies = response; },
        (err) => { console.log('err', err) }
      );
  }
}
