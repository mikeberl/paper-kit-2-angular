import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Router } from '@angular/router';
import { LoggedUser, User } from '../models/user/user.module';
import { Credentials } from 'app/models/credentials/credentials.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUser : LoggedUser;

  constructor(private http: HttpClient,
              private router: Router) {
    this.loggedUser = null;
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post<any>('http://localhost:8000/verify/', credentials);
  }

  registerUser(user : LoggedUser) {
    this.loggedUser = user;
    localStorage.setItem("user", JSON.stringify(this.loggedUser));
  }

  logout() {
    this.loggedUser = null;
    this.router.navigate(['/login']);
  }

  signup(user : User) : Observable<any> {
    return this.http.post<any>('http://localhost:8000/signup/', user);
  }

  user() : LoggedUser | null {
    if (this.loggedUser) {
      return this.loggedUser;
    }
    else {
      this.loggedUser = JSON.parse(localStorage.getItem("user"));
      return this.loggedUser;
    }
  }

  // test() {
  //   const token = localStorage.getItem('token');
  //   console.log("Token is: ", token);
  
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  
  //   const options = { headers: headers };
  
  //   this.http.get<any>('http://localhost:8000/secure-endpoint', options).subscribe(
  //     response => {
  //       console.log(response);
  //     },
  //     error => {
  //       console.error("An error occurred:", error);
  //     }
  //   );
  // }

  

}
