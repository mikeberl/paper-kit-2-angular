import { Component } from '@angular/core';

@Component({
  selector: 'app-create-match-navbar',
  templateUrl: './create-match-navbar.component.html',
  styleUrls: ['./create-match-navbar.component.scss']
})
export class CreateMatchNavbarComponent {

  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOption: string = this.options[0];

  // Funzione per gestire il clic su un'opzione
  onSelectOption(option: string) {
    this.selectedOption = option;
  }

  getFilteredOptions(): string[] {
    return this.options.filter(option => option !== this.selectedOption);
  }

}
