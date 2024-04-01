import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  
  constructor(private http: HttpClient,
    private router: Router,
    private authService : AuthService) {}

    getLeaguesByUser(userId: string): Observable<any> {
      return this.http.get<any>(`http://localhost:8000/get-leagues-by-user/${userId}`);
    }  

    getLeagueImage(): Observable<Blob> {
      const token = this.authService.user().token;

      const url = `http://localhost:8000/get-league-image/1.jpg`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'image/jpeg',
        'Content-Type': 'image/jpeg'
      });
      return this.http.get(url, { headers, responseType: 'blob' });
    }
}
