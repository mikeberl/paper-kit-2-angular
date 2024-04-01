import { Component, OnInit } from '@angular/core';
import { League } from 'app/models/league/league.module';
import { LeaguesService } from 'app/services/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

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
  ];

  searchText: string = '';
  filteredClients: any[] = [];

  leagues: League[] = [];
  imageURLs: {[key: string]: string} = {};

  constructor(private leagueService: LeaguesService) { }

  ngOnInit(): void {
    this.loadLeagues();
  }

  loadLeagues(): void {
    this.leagueService.getLeagues().subscribe((leagues: League[]) => {
      this.leagues = leagues;
      this.leagues.forEach(league => {
        this.getLeagueImage(league._id);
      });
    });
  }

  getLeagueImage(id: string): void {
    this.leagueService.getLeagueImage(id).subscribe({
      next: (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageURLs[id] = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
      },
      error: (error: any) => {
        console.error('Errore durante il recupero dell\'immagine:', error);
      }
    });
  }

  getLeagueImageUrl(id: string): string {
    return this.imageURLs[id] || '';
  }

  filterLeagues() {
    if (this.searchText) {
      this.filteredClients = this.clients.filter(client =>
        client.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredClients = this.clients;
    }
  }
}
