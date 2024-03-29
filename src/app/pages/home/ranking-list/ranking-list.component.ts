import { Component, OnInit } from '@angular/core';
import { League } from 'app/models/league/league.module';
import { LeaguesService } from 'app/services/leagues.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {

  private subscription: Subscription;
  imageURL: string;
  leagues : League[] = [
    // {
    //   name: 'Inara Britt',
    //   location: 'Georgia, USA',
    //   imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    //   amount: '13 / 30'
    // },
    // {
    //   name: 'Inara Britt',
    //   location: 'Georgia, USA',
    //   imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    //   amount: '1 / 2'
    // },
  ];

  constructor(private leaguesService : LeaguesService) {
  }

  ngOnInit() {
    this.getLeague();
    this.getLeagueImage();
  }

  getLeague() {
    const userId = '6606d3837cefc7772725bb5d';
    this.subscription = this.leaguesService.getLeaguesByUser(userId).subscribe({
      next: (data) => {
        this.leagues = data.leagues;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  getLeagueImage(): void {
    this.leaguesService.getLeagueImage().subscribe(
      (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageURL = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
      },
      error => {
        console.error('Errore durante il recupero dell\'immagine:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
