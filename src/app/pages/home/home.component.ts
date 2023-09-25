import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
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
