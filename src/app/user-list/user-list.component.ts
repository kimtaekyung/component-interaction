import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private _users: User[];
  private cntAdmin: number;
  user: string;
  /**
   * 부모 - > 자식   컴포넌트간 데이터 전달.
   * 부모 템플릿으로부터 전달받은 users 이때 부모로부터 전달받은 users 는 같이 참조하게 된다. 따라서 어느 한쪽에서 변경시 같이 변경됨
   * get set 메소드 작성시 부모에서 전달받는 프로퍼티 이름으로 작성 해야 데이타가 바인딩 된다.
   */
  // tslint:disable-next-line:no-input-rename
  @Input()
  public get users(): User[] {
    console.log('getter');
    return this._users;
  }
  public set users(users: User[]) {
    console.log('setter');
    this._users = users;
    this.cntAdmin = users.filter(({role}) => role === 'Admin').length;
  }
  /**
   * 자식 -> 부모 컴포넌트간 데이터 전달
   */
  @Output()
  remove = new EventEmitter<User>();
  constructor() {
    this.user = 'user';
  }
  ngOnInit() {
  }

}
