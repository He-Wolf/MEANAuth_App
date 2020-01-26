import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user'
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("http://localhost:3000/users/register", user, {headers: headers});
  }

  authenticateUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post("http://localhost:3000/users/authenticate", user, {headers: headers});
  }

  getProfile(): Observable<any> {
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    return this.http.get("http://localhost:3000/users/profile", {headers: headers});
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    this.authToken = localStorage.getItem("id_token");
  }

  loggedIn() {
    const helper = new JwtHelperService();
    const isNotExpired = !helper.isTokenExpired(this.authToken);
    return isNotExpired;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}