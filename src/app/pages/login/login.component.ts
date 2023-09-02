import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'app/models/credentials/credentials.module';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  test : Date = new Date();
  focus;
  focus1;

  username: string = '';
  password: string = '';
  invalidCredentials: boolean = false;
  emptyFields: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  verifyCredentials() {
    const credentials: Credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.verifyCredentials(credentials).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log('Errore nella chiamata API');
      }
    );
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    if (!this.username || !this.password) {
      this.emptyFields = true;
      this.invalidCredentials = false;
      return;
    }
    const credentials: Credentials = {
      username: this.username,
      password: this.password
    };
    this.authService.verifyCredentials(credentials).subscribe(
      response => {
        console.log(response);
        if (response.result === 'OK') {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        } else {
          this.emptyFields = false;
          this.invalidCredentials = true;
        }
      }
    );
  }
}
