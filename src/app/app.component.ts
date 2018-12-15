import { Component } from '@angular/core';
import { User } from './models/user';
/**
 * 부모 컴포넌트에서 모델 객체를 사용하여 리스트를 만든후 템플릿 에서 <app-user-list [users]="users"></app-user-list> 방식을 통해 전달한다.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * User 모델 객체를 생성해서 배열로 자식으로 전달할 데이터를 가공한다.
 */
export class AppComponent {
  users: User[];
  constructor() {
    this.users = [
      new User(1, 'Lee', 'Admin'),
      new User(2, 'Park', 'Guest'),
      new User(3, 'Yang', 'Admin')
    ];
  }
  title = 'component-interaction';

  addUser(name: string, role: string) {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
      console.log(this.users);
    }
  }
  getNextId() {
    return this.users.length ? Math.max(...this.users.map(({id}) => id)) + 1 : 1;
  }
  removeUser(user: User) {
    this.users = this.users.filter(({id}) => id !== user.id);
  }

  dataView() {
    console.log(this.users);
  }
}
