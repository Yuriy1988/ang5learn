import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';

export interface Movie {
  name: string;
  id: string | number;
  title: string;
  posterUrl: string;
  stars: number;
  likes: number;
  genres: string[];
  actors: string[];
  director: string;
  description: string;
}

@Injectable()
export class MoviesService {
  // private selectedMovieSource = new BehaviorSubject<Movie>(null);
  // selectedMovie = this.selectedMovieSource.asObservable();
  // movies: Observable<Movie[]> = this.moviesSource.asObservable();

  constructor(private http: HttpClient) { }

  public getMovies() {
    console.log(this.http.get('http://localhost:3001/movies'));
    return this.http.get('http://localhost:3001/movies');
  }
  // public getMovieById(id: string) {
  //   this.movies.find((movie: Movie) => movie.id === id);
  // }
  //
  // public selectMovie(movie: Movie) {
  //   this.movies.find(c => c.id === id)
  //   this.selectedMovieSource.next(movie);
  // }
  //
  // public updateMovie(movie: Movie, id: Movie['id']) {
  //   // this.movies.find(c => c.id === id ? movie : c);
  // }
}
