import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Credentials } from 'app/models/credentials/credentials.module';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;

  username: string;
  password: string;
  errors: any = {};


  showAlert: boolean = false; // Variabile per controllare la visibilità dell'alert
  alertType: string = 'danger'; // Tipo di alert (danger = rosso, puoi cambiare in base ai tuoi stili)
  alertMessage: string = ''; // Messaggio dell'alert
  // emptyFields: boolean = false;

  constructor(private authService: AuthService, private router: Router, alertConfig: NgbAlertConfig) {
    // Configura l'aspetto dell'alert
    alertConfig.type = 'danger'; // Imposta il tipo di alert come "danger"
    alertConfig.dismissible = true; // Permette di chiudere l'alert cliccando sull'icona "x"
  }

  // Funzione per chiudere l'alert
  closeAlert() {
    this.showAlert = false;
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  onFocus(fieldName: string) {
    // Quando l'utente entra nel campo, rimuovi eventuali errori relativi a quel campo
    this.errors[fieldName] = false;
  }

  onBlur(fieldName: string) {
    // Quando l'utente esce dal campo, verifica se il campo è vuoto
    if (this[fieldName].trim() === '') {
      // Se il campo è vuoto, mostra l'errore
      this.errors[fieldName] = true;
    } else {
      // Se il campo non è vuoto, rimuovi l'errore
      this.errors[fieldName] = false;
    }
  }

  login() {
    const credentials: Credentials = {
      username: this.username,
      password: this.password
    };
    this.authService.verifyCredentials(credentials).subscribe(
      response => {
        console.log(response);
        console.log("YOU ARE HERE!");
        if (response.result === 'OK') {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        } else {
          this.alertMessage = 'Wrong username or password';
          this.showAlert = true; // Mostra l'alert in caso di errore
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
