import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() title: string;
  @Output() handleClick = new EventEmitter<any>();

  constructor() { }

  click(): void {
    this.handleClick.emit();
  }
}
