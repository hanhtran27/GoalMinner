import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUrl = 'http://localhost:8080/login';
  registerUrl = 'http://localhost:8080/register';

  constructor(private http:HttpClient) { }

  checklogin(username:string, password:string):Observable<any> {
    let login = {userName:username, password:password};
    return this.http.post(this.loginUrl, login, httpOptions);
  }

  checkregister(user:User):Observable<User> {
    return this.http.post<User>(this.registerUrl, user, httpOptions);
  }
}
