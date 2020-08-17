import { CurrencyPipe } from '@angular/common';
import { Component, Output, ɵCurrencyIndex } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Gender } from './shared/contact.model';
import { IContact } from './shared/contact.model';
import { ContactService } from './shared/contact.service';
import { EventEmitter } from '@angular/core';
import { nameExistsAsyncValidator } from './shared/name-exists-async.validator';
import { emailExistsAsyncValidator } from './shared/email-exists-async.validator';
import { identifierName, Identifiers } from '@angular/compiler';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { MatHeaderRow } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent {
  contactForm: FormGroup;
  gender = Gender;
  summary = summaryFileName;
  id = Identifiers;
  country = Location;
  nameExits: boolean;
  submitted = false;

  @Output() addContact: EventEmitter<IContact> = new EventEmitter<IContact>();

  constructor(private fb: FormBuilder,
              private contactService: ContactService, private http: HttpClient) {
    this.initContactForm();
  }

  onSave() {
    this.submitted = true;
    this.nameExits = false;

    if (this.contactForm.invalid) {
      return;
    }

    const contact: IContact = {
      id: this.contactForm.controls.id.value + Math.random().toString(36).substr(2, 9),
      token: this.contactForm.controls.token.value + Math.random().toString().substr(2 + 9),
      name: this.contactForm.controls.name.value,
      gender: this.contactForm.controls.gender.value as Gender,
      email: this.contactForm.controls.email.value,
      phone: this.contactForm.controls.phone.value,
      idea: this.contactForm.controls.idea.value,
      country: this.contactForm.controls.country.value,
      location: this.contactForm.controls.location.value,
      targetCustomer: this.contactForm.controls.targetCustomer.value,
      problemSolving: this.contactForm.controls.problemSolving.value,
      summary: this.contactForm.controls.summary.value,
      whyou: this.contactForm.controls.whyou.value,
      competitor: this.contactForm.controls.competitor.value,
      employees: this.contactForm.controls.employees.value,
      nextYearSells: this.contactForm.controls.nextYearSells.value,
      investor: this.contactForm.controls.investor.value,
      investement: this.contactForm.controls.investement.value,
      partners: this.contactForm.controls.partners.value,
      network: this.contactForm.controls.network.value,
      contributors: this.contactForm.controls.contributors.value,
      goods: this.contactForm.controls.goods.value,
      salaries: this.contactForm.controls.salaries.value,
      taxe: this.contactForm.controls.taxe.value,
      currency: this.contactForm.controls.currency.value,
      message: this.contactForm.controls.message.value,
    };

    this.addContact.emit(contact);

    // reset form back to the original;
    this.initContactForm();
  }

  onCancel() {
    this.initContactForm();
  }

  initContactForm() {
    this.submitted = false;
    this.contactForm = this.fb.group({
      name: ['', Validators.required, nameExistsAsyncValidator(this.contactService)],
      gender: [Gender.Male, Validators.required],
      email: ['', Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$'),
        emailExistsAsyncValidator(this.contactService)],
      phone: [''],
      idea: [''],
      country: [''],
      location: [''],
      summary: [''],
      problemSolving: [''],
      targetCustomer: [''],
      whyou: [''],
      competitor: [''],
      employees: [''],
      nextYearSells: [''],
      investor: [''],
      investement: [''],
      partners: [''],
      network: [''],
      contributors: [''],
      goods: [''],
      salaries: [''],
      taxe: [''],
      currency: [''],
      id: [''],
      message: [''],
      token: [''],
    });
  }
}
