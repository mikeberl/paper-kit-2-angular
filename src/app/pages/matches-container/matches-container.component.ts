import { Component } from '@angular/core';

@Component({
  selector: 'app-matches-container',
  templateUrl: './matches-container.component.html',
  styleUrls: ['./matches-container.component.scss']
})
export class MatchesContainerComponent {
  leagues = ["Bolzano", "Milano", "All"];

  tabGroups: any[] = [
    [
      { date: '2023-08-16', name: 'Panel 1', number: 1 },
      { date: '2023-08-17', name: 'Panel 2', number: 2 },
      { date: '2023-09-19', name: 'Panel 4', number: 4 },
      { date: '2023-10-16', name: 'Panel 1', number: 1 },
      { date: '2024-11-11', name: 'Panel 2', number: 2 },
      { date: '2024-11-11', name: 'Panel 4', number: 4 },
      { date: '2023-11-11', name: 'Panel 1', number: 1 },
      { date: '2023-08-17', name: 'Panel 2', number: 2 },
      { date: '2023-09-19', name: 'Panel 4', number: 4 },
    ],
    [
      { date: '2023-09-18', name: 'Panel 3', number: 3 },
      { date: '2023-09-19', name: 'Panel 4', number: 4 }
    ],
    [
      { date: '2023-09-18', name: 'Panel 3', number: 3 },
      { date: '2023-11-19', name: 'Panel 4', number: 4 }
    ],
  ];

}
