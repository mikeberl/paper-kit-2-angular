import { Component } from '@angular/core';

@Component({
  selector: 'app-league-ranking',
  templateUrl: './league-ranking.component.html',
  styleUrls: ['./league-ranking.component.scss']
})
export class LeagueRankingComponent {
  classifica = [
    { posizione: 1, name: 'Giocatore 1', points: 100, mp: 10, rp: 20, bp: 30, sep: 40 },
    { posizione: 2, name: 'Giocatore 2', points: 90, mp: 9, rp: 18, bp: 27, sep: 36 },
    { posizione: 3, name: 'Giocatore 3', points: 80, mp: 8, rp: 16, bp: 24, sep: 32 },
    { posizione: 4, name: 'Giocatore 4', points: 70, mp: 7, rp: 14, bp: 21, sep: 28 },
    { posizione: 5, name: 'Giocatore 5', points: 60, mp: 6, rp: 12, bp: 18, sep: 24 },
    { posizione: 6, name: 'Giocatore 6', points: 50, mp: 5, rp: 10, bp: 15, sep: 20 },
    { posizione: 7, name: 'Giocatore 7', points: 40, mp: 4, rp: 8, bp: 12, sep: 16 },
    { posizione: 8, name: 'Giocatore 8', points: 30, mp: 3, rp: 6, bp: 9, sep: 12 },
    { posizione: 9, name: 'Giocatore 9', points: 20, mp: 2, rp: 4, bp: 6, sep: 8 },
    { posizione: 10, name: 'Giocatore 10', points: 10, mp: 1, rp: 2, bp: 3, sep: 4 }
  ];

  highlightPlayer8 = true;
  

  showDetailedStats = false;

  toggleDetailedStats() {
    this.showDetailedStats = !this.showDetailedStats;
  }

}
