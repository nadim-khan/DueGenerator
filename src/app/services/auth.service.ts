import { Injectable } from '@angular/core';
import { Subject, of, throwError, Observable, EMPTY } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private registerUrl = 'http://localhost:4000/api/register';
  private loginUrl = 'http://localhost:4000/api/login';
  private eventsUrl = 'http://localhost:4000/api/events';
  private specialUrl = 'http://localhost:4000/api/special';

  constructor( private http: HttpClient) { }

  login(user): Observable<User[]>  {
    return this.http.post<User[]>(this.loginUrl, user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(user): Observable<User[]> {
    return this.http.post<User[]>(this.registerUrl, user);
  }

  loggedIn() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  getEvents() {
    return this.http.get(this.eventsUrl);
  }

  getSpecialEvents() {
    return this.http.get(this.specialUrl);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUser() {

  }


}
