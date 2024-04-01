import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit{

  username : string = null;

  imageURL : string;

  constructor(private authService : AuthService,
            private usersService : UsersService) {

  }

  ngOnInit() {
    this.username = this.authService.user().username;
    const userId = this.authService.user().id;
    this.loadImage(userId);
  }

  loadImage(userId : string) {
    this.usersService.getImage(userId).subscribe({
      next: (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageURL = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
      },
      error: (error: any) => {
        console.error('Errore durante il recupero dell\'immagine:', error);
      }
    });
  }
}
