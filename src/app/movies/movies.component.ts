import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie, MoviesService } from './movies.service';
import { Subscription } from "rxjs/Subscription";
// import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: Movie[];
  private subscription: Subscription;
  // selectedMovie: Movie = null;

  constructor(
    private moviesService: MoviesService,
    // private router: Router,
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateMovie(movies: Movie[], res: Movie) {
    return Object.assign(movies
      .find((m: Movie) => m.id === res.id), res);
  }

  private getMovies(): void {
    this.subscription = this.moviesService.getMovies()
      .subscribe((response: Movie[]) => this.movies = response);
  }

  likeMovie(id: number): void {
    const movie: Movie = this.movies.find(m => m.id === id);

    this.moviesService.like(movie)
      .subscribe((res: Movie) => {
        this.updateMovie(this.movies, res);
      });
  }

  dislikeMovie(id: number): void {
    const movie: Movie = this.movies.find(m => m.id === id);

    this.moviesService.dislike(movie)
      .subscribe((res: Movie) => {
        this.updateMovie(this.movies, res);
      });
  }

  changeRating(stars: number, id: number): void {
    this.moviesService.changeRating(stars, id)
      .subscribe((res: Movie) => {
        this.updateMovie(this.movies, res);
      });
  }

  // navigateToEdit(id) {
  //   return this.router.navigate(['edit', id]);
  // }
  //
  // selectMovie(movie: Movie): void {
  //   // this.moviesService.selectMovie(movie);
  // }
}
