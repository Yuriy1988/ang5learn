import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpService } from './services/http/http.service';
import { NotificationService } from './services/notification/notification.service';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    SharedModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
  ],
  providers: [HttpService, NotificationService],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
