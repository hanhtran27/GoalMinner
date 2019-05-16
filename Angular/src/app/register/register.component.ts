import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:string;
  lastname:string;
  username:string;
  email:string;
  password:string;

  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  register() {
    let user = {firstName: this.firstname, lastName: this.lastname,
      email: this.email, userName: this.username, 
      password: this.password};
    this.userService
        .checkregister(user)
        .subscribe(function(res:User) {
          console.info(res);
    })
  }

}
