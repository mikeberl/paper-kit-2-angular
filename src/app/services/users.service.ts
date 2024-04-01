import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,
    private router: Router,
    private authService : AuthService) {}

    uploadImage(userId: string, image : FormData): Observable<any> {
      return this.http.post<any>(`http://localhost:8000/upload-user-image/${userId}`, image);
    }  

    getImage(userId : string): Observable<Blob> {
      const token = this.authService.user().token;

      const url = `http://localhost:8000/get-user-image/${userId}`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'image/jpeg',
        'Content-Type': 'image/jpeg'
      });
      return this.http.get(url, { headers, responseType: 'blob' });
    }
}
