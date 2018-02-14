import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from './movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  // selectedMovie: Movie = null;

  constructor(
    private moviesService: MoviesService,
    // private router: Router,
  ) {}

  ngOnInit() {
   this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies()
      .subscribe(response => this.movies = response);
  }

  likeMovie(id: string): void {
    const movie: Movie = this.movies.find(m => m.id === id);

    this.moviesService.like(movie)
      .subscribe(response => {
        this.movies = this.movies.map(m => m.id === movie.id ? response : m );
      });
  }

  dislikeMovie(id: string): void {
    const movie: Movie = this.movies.find(m => m.id === id);

    this.moviesService.dislike(movie)
      .subscribe(response => this.movies = this.movies
        .map(m => m.id === movie.id ? response : m ));
  }

  // navigateToEdit(id) {
  //   return this.router.navigate(['edit', id]);
  // }
  //
  // selectMovie(movie: Movie): void {
  //   // this.moviesService.selectMovie(movie);
  // }
}
