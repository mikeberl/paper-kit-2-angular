import { Component } from '@angular/core';
import { NavbarService } from 'app/services/navbar.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent {

  menuItems = [];

  constructor(private navbarService: NavbarService) {
    this.menuItems = [
      { title: 'Play', scss: 'nc-user-run', link: '/create-match', selected: false },
      { title: 'Home', scss: 'nc-single-02',link: '/home', selected: false },
      { title: 'Updates', scss: 'nc-time-alarm',link: '/notifications', selected: false },
      { title: 'Settings', scss: 'nc-settings-gear-65',link: '/settings', selected: false }
    ];
  }

  ngOnInit(): void {
    this.navbarService.selectedItemIndex$.subscribe((index) => {
      this.menuItems.forEach((item, i) => {
        item.selected = i === index;
      });
    });
  }

  onItemClick(index: number): void {
    this.navbarService.selectMenuItem(index);
  }

}
