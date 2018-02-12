import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from './contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact = null;

  constructor(
    private contactService: ContactsService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    this.contactService.selectedContact
      .subscribe(selectedContact => this.selectedContact = selectedContact);
  }

  navigateToEdit(id) {
    this.router.navigate(['edit', id]);
  }

  selectContact(contact: Contact): void {
    this.contactService.selectContact(contact);
  }
}
