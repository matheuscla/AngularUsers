import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users;
  public subscriptions;
  public userFilter;
  public usersLength: number = 4;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.subscriptions = this.userService.getUsers()
    .then(users => this.users = users);
  }

  searchUsers(event) {
    this.userFilter = { name: event };
  }

  moreUsers() {
    this.usersLength += 4;
  }
}
