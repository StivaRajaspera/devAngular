import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  signupUserData = {
    name: String,
    email: String,
    password: String
  }

  loginUserData = {
    email: String,
    password: String
  }

  constructor(private _auth: AuthentificationService, private _router: Router) { }

  ngOnInit(): void {
  }

  saveUserInformation() {
    this._auth.saveInformation(this.signupUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/booksMain'])
        },
        err => console.log(err)
      )

  }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/booksMain'])
        },
        err => console.log(err)
      )
  }

}
