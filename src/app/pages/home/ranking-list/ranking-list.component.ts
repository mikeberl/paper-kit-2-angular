import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent {
  clients = [
    {
      name: 'Inara Britt',
      location: 'Georgia, USA',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      amount: '13 / 30'
    },
    {
      name: 'Inara Britt',
      location: 'Georgia, USA',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      amount: '1 / 2'
    },
    // Aggiungi gli altri oggetti cliente qui...
  ];
}
