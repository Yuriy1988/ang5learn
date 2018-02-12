import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts.service';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  @Input() contact: Contact;
  @Output() navigateToEdit = new EventEmitter<string>();

  constructor() { }

  onEditButtonClick(id): void {
    this.navigateToEdit.emit(id);
  }
}
