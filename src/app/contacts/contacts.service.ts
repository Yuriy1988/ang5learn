import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  city: string;
}

type contactId = Contact['id'];

const contactsData: Contact[] = [
  {
    id: '1',
    name: 'Yura',
    phoneNumber: '132',
    city: 'Dnipro',
  }, {
    id: '2',
    name: 'John',
    phoneNumber: '102',
    city: 'London',
  },
];

@Injectable()
export class ContactsService {
  private selectedContactSource = new BehaviorSubject<Contact>(null);
  selectedContact = this.selectedContactSource.asObservable();

  constructor() {}

  public getContacts():  Contact[]  {
    return contactsData;
  }

  public getContactById(id: contactId): Contact {
    return contactsData.find((contact: Contact) => contact.id === id);
  }

  public selectContact(contact: Contact) {
    this.selectedContactSource.next(contact);
  }
}
