import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact: Contact;
  @Output() selectContact = new EventEmitter<Contact>();

  constructor() { }

  handleClick(contact): void {
    this.selectContact.emit(contact);
  }
}
