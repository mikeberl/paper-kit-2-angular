import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit{

  username : string = null;

  constructor(private authService : AuthService) {

  }

  ngOnInit() {
    this.username = this.authService.user().username;
  }

}
