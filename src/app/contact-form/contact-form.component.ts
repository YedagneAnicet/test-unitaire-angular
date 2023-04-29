import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm !: FormGroup;
  contact = {
    name : '',
    email : '',
    text : ''
  };

  submitted =false

  constructor() {
    this.contactForm= new FormGroup<any>(
      {
        'name' : new FormControl(this.contact.name, [
          Validators.required,
          Validators.minLength(4)
        ]),
        'email' : new FormControl(this.contact.email, [
          Validators.required,
          Validators.email
        ]),
        'text' : new FormControl(this.contact.text, Validators.required)
      }
    )  }
  OnSubmit():void{
    this.submitted=true;
  }
}
