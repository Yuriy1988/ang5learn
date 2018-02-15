import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MoviesService, Movie } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: [ './edit-movie.component.css' ]
})
export class EditMovieComponent implements OnInit  {
  movieEditForm: FormGroup;
  movie: Movie;
  sub;

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getMovieById();
  }

  getMovieById() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.moviesService.getMovieById(id)
        .subscribe(movie => {
          this.movie = movie;
          this.initForm();
        });

    });
  }

  initForm() {
    this.movieEditForm = this.fb.group({
      title: [this.movie.title],
      posterUrl: [this.movie.posterUrl],
      // genres: [this.movie.genres.join(', ')],
      // actors: [this.movie.actors.join(', ')],
      director: [this.movie.director],
      description: [this.movie.description],
    });
  }

  onSubmit() {
    // const controls = this.movieEditForm.controls;
    this.moviesService.edit({ id: this.movie.id, ...this.movieEditForm.value })
      .subscribe(() => {
        return this.router.navigate(['movies']);
      });
    // if (this.movieEditForm.invalid) {
    //   Object.keys(controls)
    //     .forEach(controlName => controls[controlName].markAsTouched());
    //   return;
    // }

    // console.log(this.movieEditForm.value);
  }
}
