import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  
  constructor(private http: HttpClient,
    private router: Router) {}

    getLeaguesByUser(userId: string): Observable<any> {
      return this.http.get<any>(`http://localhost:8000/get-leagues-by-user/${userId}`);
    }  

    getLeagueImage(): Observable<Blob> {
      const token = localStorage.getItem('token');
      console.log("Token is: ", token);

      const url = `http://localhost:8000/get-league-image/1.jpg`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'image/jpeg',
        'Content-Type': 'image/jpeg', // Se necessario
        // 'Origin': 'http://localhost:4200' // Assicurati di sostituire con l'indirizzo corretto del tuo frontend
      });
      return this.http.get(url, { headers, responseType: 'blob' });
    }
}
