import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loginout:string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initLoginText();
  }
  home() {
    console.info("home clicked!");
    this.router.navigate(['/']);
  } 
  
  goals() {
    console.info("goals clicked!");
    this.router.navigate(['/']);
  }

  about() {
    console.info("abt clciked!");
    this.router.navigate(['/about']);
  }

  login() {
    console.info("logined clicked!");
    localStorage.removeItem("token");
    this.loginout = "Login";
    this.router.navigate(['/login']);
  }

  private initLoginText():void {
    if (localStorage.getItem("token")) {
      this.loginout = "Logout";
    } else {
      this.loginout = "Login"
    }
  }
}
