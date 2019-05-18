import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let rounter = this.router;
    console.info("clicked!");
    this.userService
        .checklogin(this.username, this.password)
        .subscribe((res:any) => {
          if (res.status) {
            console.info("Success!");
            this.router.navigate(['/']);
            localStorage.setItem("token", res.token);
          } else {
            console.info("Failed!");
          }
        });
  }

}
