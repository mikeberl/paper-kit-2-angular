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
      name: 'Winter 11',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: '234 League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'xxague',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Sumgue',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Winnererf dsfsdfsd',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Suxccc',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Win',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Suague',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Summerague',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
  ];

  searchText: string = '';
  filteredPlayers: any[] = [];

  winners: string[] = [];
  losers: string[] = [];

  

  constructor() {
    this.filteredPlayers = this.players;
  }

  removeLabel(array: string[], index: number): void {
    array.splice(index, 1);
  }

  addToWinners(playerName: string): void {
    this.winners.push(playerName);
  }

  // Aggiungi un metodo per aggiungere un giocatore a "losers"
  addToLosers(playerName: string): void {
    this.losers.push(playerName);
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
