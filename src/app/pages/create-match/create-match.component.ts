import { Component } from '@angular/core';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent {

  focus: any;

  players = [
    {
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Summer League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Summer League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Summer League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Summer League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Summer League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
  ];

  searchText: string = '';
  filteredPlayers: any[] = [];

  constructor() {
    this.filteredPlayers = this.players;
  }

  filterPlayers() {
    if (this.searchText) {
      this.filteredPlayers = this.players.filter(players =>
        players.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredPlayers = this.players;
    }
  }

}
