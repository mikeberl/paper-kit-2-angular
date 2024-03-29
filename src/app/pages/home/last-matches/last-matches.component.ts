import { Component } from '@angular/core';
import { Point } from 'app/models/point/point.module';
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

  constructor(private matchesService: MatchesService) {

  }

  // ngOnInit() {
  //   // Inizializza la lista matches con almeno 5 elementi
  //   while (this.matches.length < 2) {
  //     this.matches.push({ label: '+15' }); // Puoi impostare il valore predefinito come desideri
  //   }
  //   while (this.matches.length >=2 && this.matches.length < 4) {
  //     this.matches.push({ label: '-15' }); // Puoi impostare il valore predefinito come desideri
  //   }
  //   this.matches.push({ label: '' });
  // }

  ngOnInit(): void {
    this.getLastFivePointEntries();
    
  }

  getLastFivePointEntries() {
    const userId = '654cbc816598b8364c664b84'; // Inserisci l'ID del tuo utente
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
