import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  private signupURL = "http://localhost:3000/api/register"
  private loginURL = "http://localhost:3000/api/login"

  constructor(private http: HttpClient, private _router: Router) { }

  saveInformation(user) {
    return this.http.post<any>(this.signupURL, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.loginURL, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

}
