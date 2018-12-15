import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private _user;

  @Input()
  public get user(): User {
    console.log('getter');
    return this._user;
  }
  public set user(users: User) {
    console.log('setter');
    this._user = users;
  }
  constructor() { }

  ngOnInit() {
  }

}
