import { Component } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent {

  focus: any;

  clients = [
    {
      name: 'Winter League',
      location: 'Georgia, USA',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      amount: '13 / 30'
    },
    {
      name: 'Summer League',
      location: 'Georgia, USA',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      amount: '1 / 2'
    },
    // Aggiungi gli altri oggetti cliente qui...
  ];
}
