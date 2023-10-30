import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'app/models/user/user.module';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    test : Date = new Date();
    focus;
    focus1;

    showAlert: boolean = false; // Variabile per controllare la visibilità dell'alert
    alertType: string = 'danger';
    alertMessage: string = '';

    username: string;
    password: string;
    email: string;

    constructor(private authService: AuthService, private router: Router, alertConfig: NgbAlertConfig) {
        alertConfig.type = 'danger'; // Imposta il tipo di alert come "danger"
        alertConfig.dismissible = true; // Permette di chiudere l'alert cliccando sull'icona "x"
    }

  // Funzione per chiudere l'alert
  closeAlert() {
    this.showAlert = false;
  }

  signup() {
    const credentials: User = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.authService.signup(credentials).subscribe(
      response => {
        console.log(response);
        if (response.result === 'OK') {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/login']);
        } else {
          // TODO:
          // error handling by invalid signup

        }
      },
      error => {
        console.error("An error occurred:", error);
        this.alertMessage = 'Can\'t connect to the server';
        this.showAlert = true;
      }
    );
  }
}
