import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from "../services/user/user.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let userService : UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers :[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  beforeEach(async ()=>{
    userService =TestBed.inject(UserService);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one user', function () {
    expect(component.users.length).toEqual(4)
  });

  it('html should render one user', function () {
    fixture.detectChanges();
    const elem = fixture.nativeElement.querySelector('p');
    expect(elem.innerText).toContain("Anicet")
  });
});
