import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/players'])
        },
        err => {
          console.log(err);
          this.displayresult = {
            result: "Failed",
            message: "Invalid credentials."};
              //message: JSON.stringify(err.error.err.errors.name.message)};
          this.showResult();}
      )
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
