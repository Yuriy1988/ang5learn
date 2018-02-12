import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsService} from './contacts.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactsComponent,
    ContactComponent,
    ContactDetailsComponent,
    EditContactComponent
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsModule { }
