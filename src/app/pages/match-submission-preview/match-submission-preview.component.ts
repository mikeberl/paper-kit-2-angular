import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-submission-preview',
  templateUrl: './match-submission-preview.component.html',
  styleUrls: ['./match-submission-preview.component.scss']
})
export class MatchSubmissionPreviewComponent {

  matches : any[] = []; 

  focus;

  constructor(private route: ActivatedRoute) {
    // ...
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.matchesData) {
        const matches : any[] = JSON.parse(params.matchesData);
        // Ora puoi utilizzare i dati `matches` nel tuo componente.
        console.log(matches);
        if (matches.length > 0) {
          this.matches = matches;
          localStorage.setItem("matches", JSON.stringify(this.matches));
        }
        else {
          // just for testing purpose
          const matchesFromStorage = JSON.parse(localStorage.getItem("matches"));
          if (matchesFromStorage == null) {
            console.log("Should be impossible");
          }
          this.matches = matchesFromStorage;
          console.log(this.matches);
        }
      }
    });
  }

  saveMatches() {
    throw new Error('Method not implemented.');
  }

}
