import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  
  verifyCredentials(credentials: Credentials) {
    return 0;
  }
  // verifyCredentials(credentials: Credentials): Observable<any> {
  //   return this.http.post<any>('http://localhost:8000/verify/', credentials);
  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  signup(user : User) {
    return this.http.post<any>('http://localhost:8000/signup/', user);
  }

}
