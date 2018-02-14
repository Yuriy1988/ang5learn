import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Output() like = new EventEmitter<any>();
  @Output() dislike = new EventEmitter<any>();

  constructor() { }
}
