import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';

@Injectable()

export class AuthService{

    private _signupUrl = environment.serverUrl + "/api/user/register/"
  private _loginUrl = environment.serverUrl + "/api/user/login"

    constructor(private http: HttpClient, private _router: Router) { }

    signupUser(user) {
        return this.http.post<any>(this._signupUrl, user);
      }
    
      loginUser(user) {
        return this.http.post<any>(this._loginUrl, user);
      }
    
      logoutUser() {
        localStorage.removeItem('token')
        this._router.navigate(['/']);
      }
    
      loggedIn() {
        return !!localStorage.getItem('token')
      }
    
      getToken() {
        return localStorage.getItem('token')
      }
    }