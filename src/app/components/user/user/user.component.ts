import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[] = []
  user: IUser
  userId: any

  constructor(private userService : UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe(value => this.user = value)
  }

  ngOnInit(): void {
  }

}
