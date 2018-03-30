import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'https://gggggggg.comn';

export interface Movie {
  id: number;
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
  private selectedMovieSource = new BehaviorSubject<Movie>(null);
  selectedMovie = this.selectedMovieSource.asObservable();

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(url);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${url}/${id}`);
  }

  like(movie: Movie): Observable<Movie> {
    const body = {
      id: movie.id,
      likes: Number(movie.likes) + 1,
    };

    return this.http.patch<Movie>(`${url}/${movie.id}`, body, httpOptions);
  }

  dislike(movie: Movie): Observable<Movie> {
    const body = {
      id: movie.id,
      likes: Number(movie.likes) - 1,
    };

    return this.http.patch<Movie>(`${url}/${movie.id}`, body, httpOptions);
  }

  changeRating(stars: number, id: number): Observable<Movie> {
    const body = {
      id,
      stars,
    };

    return this.http.patch<Movie>(`${url}/${id}`, body, httpOptions);
  }

  edit(body: Movie) {
    return this.http.patch<Movie>(`${url}/${body.id}`, body, httpOptions);
  }

  selectMovie(movie: Movie) {
    this.selectedMovieSource.next(movie);
  }

  getCurrentMovie(): Observable<Movie> {
    return this.selectedMovie;
  }
}
