import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private authService : AuthService) { }
              

  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout();
  }

}
