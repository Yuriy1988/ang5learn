import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'http://localhost:3001/movies';

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
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(url);
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
}
