import { AppRoutingModule } from './../../projects/offpaths/src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddContactComponent } from './contacts/add-contact.component';
import { ListContactsComponent } from './contacts/list-contacts.component';
import { ContactsMainComponent } from './contacts/main-contacts.component';
import { ContactComponent } from './component/shared/contact/contact.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ListContactsComponent,
    ContactsMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent, ContactsMainComponent]
})

export class AppModule { }
