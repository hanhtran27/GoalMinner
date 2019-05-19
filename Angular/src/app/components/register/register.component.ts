import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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
  invisible:string;

  constructor(private userService:UserService,
              private router:Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.invisible = "invisible";
  }

  register() {
    let user = {
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      userName: this.username, 
      password: this.password};
    this.userService
        .checkregister(user)
        .subscribe((res:any) => {
          if (res.token) {
            this.authService.setAuthenticationToken(res.token);
            this.router.navigate(['/']);
          } else {
            this.invisible = "visible";
          }
    })
  }

}
