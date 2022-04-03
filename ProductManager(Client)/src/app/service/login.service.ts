import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http: HttpClient) { }

  doLogin(credentials: any){
    return this.http.post(`${this.url}/token`, credentials)
  }

  //set into local storage
  loginUser(token: any){
    localStorage.setItem("token",token);
    return true;
  }

  
  isLoggedIn(){
    let token = localStorage.getItem("token");
    return (token == undefined || token === '' || token == null)?  false :  true;
  }

  logOut(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
