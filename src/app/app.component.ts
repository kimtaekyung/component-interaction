import { Component, ViewChild } from '@angular/core';
import { User } from './models/user';
import { CounterComponent } from './counter/counter.component';
import { ChildComponent } from './child/child.component';
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
  @ViewChild(ChildComponent) myChild: ChildComponent;
  /**
   * 데이터는 부모에서 관리 하지만 자식 컴포넌트가 전달받은 데이터를 렌더한다. user-lsit, user-detail
   */
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
  /**
   * 부모에서 데이터를 관리 하지 않고 직접 CounterComponent 를 가져와서 호출한다.
   */
  increase(counter: CounterComponent) {
    counter.increase();
  }

  decrease(counter: CounterComponent) {
    counter.decrease();
  }
  /**
   * 마찬가지로 부모에서 직접 자식 컴포넌트에 엑세스
   */
  toggle() {
    this.myChild.isShow = !this.myChild.isShow;
  }
  changeText() {
    this.myChild.changeText('hello');
  }
}
