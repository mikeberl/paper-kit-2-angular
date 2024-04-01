import { Component } from '@angular/core';
import { Point } from 'app/models/point/point.module';
import { AuthService } from 'app/services/auth.service';
import { MatchesService } from 'app/services/matches.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-last-matches',
  templateUrl: './last-matches.component.html',
  styleUrls: ['./last-matches.component.scss']
})
export class LastMatchesComponent {
  points: Point[] = [];
  private subscription: Subscription;

  constructor(private matchesService: MatchesService, 
            private authService : AuthService) {}

  ngOnInit(): void {
    this.getLastFivePointEntries();
    
  }

  getLastFivePointEntries() {
    console.log(this.authService.user());
    const userId = this.authService.user().id; // Inserisci l'ID del tuo utente
    this.subscription = this.matchesService.getLastFivePointEntriesByUser(userId).subscribe({
      next: (data) => {
        this.points = data.point_entries;
        while (this.points.length < 5) {
          this.points.push(new Point());
        }
      },
      error: (error) => {
        console.error('Errore durante il recupero delle ultime 5 voci di punteggio:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
