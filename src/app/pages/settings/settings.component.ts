import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { NavbarService } from 'app/services/navbar.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private authService : AuthService,
    private navbarService: NavbarService) {
      this.navbarService.selectMenuItem(3);
     }
              

  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout();
  }


}
