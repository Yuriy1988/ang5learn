import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from './movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie = null;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log('fuck');
    this.moviesService.getMovies()
      .subscribe(response => this.movies = response);
  }

  navigateToEdit(id) {
    return this.router.navigate(['edit', id]);
  }

  selectMovie(movie: Movie): void {
    // this.moviesService.selectMovie(movie);
  }
}
