import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService
        .checklogin(this.username, this.password)
        .subscribe(function(res:any) {
          console.info(res);
        });
  }

}
