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
      id : 1,
      name: 'Winter 11',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 2,
      name: '234 League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 3,
      name: 'xxague',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 4,
      name: 'Sumgue',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 5,
      name: 'Winnererf dsfsdfsd',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 6,
      name: 'Suxccc',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 7,
      name: 'Win',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 8,
      name: 'Suague',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 9,
      name: 'Winter League',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id : 10,
      name: 'Summerague',
      imageSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
  ];

  searchText: string = '';
  filteredPlayers: any[] = [];

  winners: any[] = [];
  losers: any[] = [];

  selectedPoints: number = 0;

  constructor() {
    this.filteredPlayers = this.players;
  }

  onSliderChange(event: any) {
    this.selectedPoints = event.target.value;
  }

  removeLabel(array: any, index: number): void {
    const player = array.splice(index, 1);
    this.filteredPlayers.push(player[0]);
    this.filteredPlayers.sort((a, b) => a.id - b.id);
  }

  addToWinners(player: any): void {
    this.winners.push(player);
    const index = this.filteredPlayers.findIndex((x) => x.name === player.name);
    this.filteredPlayers.splice(index, 1);
  }

  addToLosers(player : any): void {
    this.losers.push(player);
    const index = this.filteredPlayers.findIndex((x) => x.name === player.name);
    this.filteredPlayers.splice(index, 1);
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
