import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {

  constructor() {
  }

  ngOnInit(): void {
    this.groupPanelsByMonth();
  }

  @Input() panels: any[] = [];
  dateGroups: { [key: string]: any[] } = {};

  openPanelId: string | null = null; // Aggiunto

  togglePanel(panel: any) {
    if (this.openPanelId === panel.date) {
      // Se il pannello cliccato è già aperto, chiudilo
      this.openPanelId = null;
    } else {
      // Altrimenti, apri il pannello cliccato e chiudi quello aperto in precedenza
      this.openPanelId = panel.date;
    }
  }

  report(panel: any) {
    // Qui puoi implementare la logica per il report specifico per il pannello.
    // Puoi accedere alle proprietà del pannello specifico, ad esempio, panel.date, panel.name, ecc.
  }

  groupPanelsByMonth() {
    this.panels.forEach(panel => {
      const month = new Date(panel.date).getMonth();
      if (!this.dateGroups[month]) {
        this.dateGroups[month] = [];
      }
      this.dateGroups[month].push(panel);
    });
  }

  getMonthName(monthIndex: string): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[Number(monthIndex)];
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day}, ${month}`;
  }
}
