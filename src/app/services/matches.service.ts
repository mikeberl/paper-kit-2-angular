import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient,
    private router: Router) {}

    getLastFivePointEntriesByUser(userId: string): Observable<any> {
      return this.http.get<any>(`http://localhost:8000/get-last-five-point-entries-by-user/${userId}`);
    }  
}
