import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import {DebugElement} from "@angular/core";
import {BrowserModule, By} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let deg : DebugElement;
  let elem : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports :[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then();
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    deg = fixture.debugElement.query(By.css('form'));
    elem = deg.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submit to true', function () {
    component.OnSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call the onSubmit method', function () {
    fixture.detectChanges();
    spyOn(component,"OnSubmit");

    elem = fixture.debugElement.query(By.css('button')).nativeElement;
    elem.click();

    expect(component.OnSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid ', function () {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');

    expect(component.contactForm.valid).toBeFalsy();
  });

  it('form should be valid ', function () {
    component.contactForm.controls['email'].setValue('anicet@gmail.com');
    component.contactForm.controls['name'].setValue('Anicet');
    component.contactForm.controls['text'].setValue('Le Code et Les Mangas sont ma vie après viendra le reste');

    expect(component.contactForm.valid).toBeTruthy();
  });

});
