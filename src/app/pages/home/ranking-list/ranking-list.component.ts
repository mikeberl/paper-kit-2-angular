import { Component, OnInit } from '@angular/core';
import { League } from 'app/models/league/league.module';
import { AuthService } from 'app/services/auth.service';
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
  leagues : League[] = [];
  imageURLs: {[key: string]: string} = {};

  constructor(private leagueService : LeaguesService,
            private authService : AuthService) {
  }

  ngOnInit(): void {
    this.loadLeagues();
  }

  loadLeagues(): void {
    var user_id = this.authService.user().id;
    this.leagueService.getLeaguesByUser(user_id).subscribe((leagues: League[]) => {
      this.leagues = leagues;
      console.log("here");
      console.log(leagues);
      this.leagues.forEach(league => {
        this.getLeagueImage(league._id);
      });
    });
  }

  getLeagueImage(id: string): void {
    console.log(id);
    this.leagueService.getLeagueImage(id).subscribe({
      next: (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageURLs[id] = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
      },
      error: (error: any) => {
        console.error('Errore durante il recupero dell\'immagine:', error);
      }
    });
  }

  getLeagueImageUrl(id: string): string {
    return this.imageURLs[id] || '';
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
