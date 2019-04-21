import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupUserData = {};
  displayresult = {};
  showResultBox;
  msg;

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  signupUser() {
    this._auth.signupUser(this.signupUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/players'])
        },
        err => {
          console.log(err);
          if (err.status === 500) this.msg = "Please provide a username of at least 3 characters and a password."
          if (err.status === 401) this.msg = JSON.stringify(err.error.Error)
          this.displayresult = {
            result: "Failed",
            message: this.msg
          };
          this.showResult();
        }
      )
  } 

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}