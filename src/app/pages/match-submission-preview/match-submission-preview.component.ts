import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-submission-preview',
  templateUrl: './match-submission-preview.component.html',
  styleUrls: ['./match-submission-preview.component.scss']
})
export class MatchSubmissionPreviewComponent {

  constructor(private route: ActivatedRoute) {
    // ...
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.matchesData) {
        const matches = JSON.parse(params.matchesData);
        // Ora puoi utilizzare i dati `matches` nel tuo componente.
        console.log(matches);
      }
    });
  }

}
