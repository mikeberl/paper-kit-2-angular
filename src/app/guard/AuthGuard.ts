import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoggedUser } from 'app/models/user/user.module';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router,
    private authService : AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var user : LoggedUser = this.authService.user();
    if (user) {
      const token = user.token;
      if (token) {
        // L'utente è autenticato, consenti l'accesso
        return true;
      }
    }
    // L'utente non è autenticato, reindirizza alla pagina di accesso
    return this.router.createUrlTree(['/login']);
  }
}
