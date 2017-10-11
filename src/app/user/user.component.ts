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

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.subscriptions = this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

}
