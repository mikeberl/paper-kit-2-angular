import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-navbar',
  templateUrl: './back-navbar.component.html',
  styleUrls: ['./back-navbar.component.scss']
})
export class BackNavbarComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
