import { Component } from '@angular/core';
import { NavbarService } from 'app/services/navbar.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  constructor(private navbarService: NavbarService) {
    this.navbarService.selectMenuItem(2);
  }

}
