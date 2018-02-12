import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contacts.service';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, OnDestroy {
  contact: Contact;
  subscribe;

  constructor(
    private contactService: ContactsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(params => {
      this.contact = this.contactService.getContactById(params.id);
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
