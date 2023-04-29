import { Component } from '@angular/core';
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users : any;
  constructor(private _userService : UserService) {
    this.users = this._userService.getListe();
  }

}
