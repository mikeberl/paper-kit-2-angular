import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Router } from '@angular/router';
import { User } from '../models/user/user.module';
import { Credentials } from 'app/models/credentials/credentials.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router) {}

  verifyCredentials(credentials: Credentials): Observable<any> {
    return this.http.post<any>('http://localhost:8000/verify/', credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  test() {
    const token = localStorage.getItem('token');
    console.log("Token is: ", token);
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    const options = { headers: headers };
  
    this.http.get<any>('http://localhost:8000/secure-endpoint', options).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error("An error occurred:", error);
      }
    );
  }

  signup(user : User) : Observable<any> {
    return this.http.post<any>('http://localhost:8000/signup/', user);
  }

}
