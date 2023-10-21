import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  matches: any[] = [];


  constructor(private router: Router, private route : ActivatedRoute) {
    this.filteredPlayers = this.players;
  }

  // slider handler
  onSliderChange(event: any) {
    this.selectedPoints = event.target.value;
  }

  // add to the winner list and removed from filteredPlayers
  addToWinners(player: any): void {
    this.winners.push(player);
    const index = this.filteredPlayers.findIndex((x) => x.name === player.name);
    this.filteredPlayers.splice(index, 1);
  }

   // add to the loser list and removed from filteredPlayers
  addToLosers(player : any): void {
    this.losers.push(player);
    const index = this.filteredPlayers.findIndex((x) => x.name === player.name);
    this.filteredPlayers.splice(index, 1);
  }

  // player removed from team and added to filteredPlayers
  removePlayerFromTeam(array: any, index: number): void {
    const player = array.splice(index, 1);
    this.filteredPlayers.push(player[0]);
    this.filteredPlayers.sort((a, b) => a.id - b.id);
  }

  // used in search function
  filterPlayers() {
    if (this.searchText) {
      this.filteredPlayers = this.players.filter(players =>
        players.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredPlayers = this.players;
    }
  }
  
  checkTheInputs() {
    return true;
  }

  backToStart() {
    this.winners = [];
    this.losers = [];
    this.selectedPoints = 0;
    this.filteredPlayers = this.players;
    this.searchText = '';
    return;
  }

  newMatch() {
    if (this.checkTheInputs()) {
      this.matches.push( {
        winners : this.winners,
        losers: this.losers,
        winpoints : this.selectedPoints,
        losepoints: 0 - (this.selectedPoints * (this.winners.length / this.losers.length))
      })
      this.backToStart();
      console.log(this.matches);
      return;

    }
  }

  goToPreview() {
    if (this.checkTheInputs()) {
      this.matches.push({
        winners: this.winners,
        losers: this.losers,
        winpoints: this.selectedPoints,
        losepoints: 0 - (this.selectedPoints * (this.winners.length / this.losers.length))
      });
  
      console.log(this.matches);
      // just for testing 
      if (localStorage.getItem("matches") === null) {
        console.log("saving matches for testing purpose");
        localStorage.setItem("matches", JSON.stringify(this.matches));
      }
      else {
        console.log(localStorage.getItem("matches"));
      }

      this.route.queryParams.subscribe(params => {
        this.router.navigate(['/match-submission-preview'], {
          queryParams: {
            matchesData: JSON.stringify(this.matches)
          }
        });
      });
    } else if (this.matches.length > 0) {
      this.showInvalidMatchEndPopUp();
    } else {
      return;
    }
  }

  showInvalidMatchEndPopUp() {
    throw new Error('Method not implemented.');
  }
}
