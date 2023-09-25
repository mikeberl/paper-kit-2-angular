import { Component } from '@angular/core';
import { NavbarService } from 'app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    // Invia un segnale al componente di navigazione quando questo componente viene caricato
    this.navbarService.selectMenuItem(1); // Esempio: seleziona l'elemento "Home" (indice 1)
    this.setMinHeight();
  }


  setMinHeight() {
    const container1 = document.querySelector('.container1') as HTMLElement;
    const navbar = document.querySelector('.navbar-div') as HTMLElement;
    const container2 = document.querySelector('.container2') as HTMLElement;
    
    if (container1 && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const containerHeight = container1.offsetHeight;
      container2.style.minHeight = `calc(100vh - ${navbarHeight}px - ${containerHeight}px)`;
    }
  }

  
}
