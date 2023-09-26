import { Component } from '@angular/core';

@Component({
  selector: 'app-last-matches',
  templateUrl: './last-matches.component.html',
  styleUrls: ['./last-matches.component.scss']
})
export class LastMatchesComponent {
  matches: { label: string }[] = [];

  ngOnInit() {
    // Inizializza la lista matches con almeno 5 elementi
    while (this.matches.length < 2) {
      this.matches.push({ label: '+15' }); // Puoi impostare il valore predefinito come desideri
    }
    while (this.matches.length >=2 && this.matches.length < 4) {
      this.matches.push({ label: '-15' }); // Puoi impostare il valore predefinito come desideri
    }
    this.matches.push({ label: '' });
  }
}
