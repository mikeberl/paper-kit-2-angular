import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueNavbarComponent } from './league-navbar.component';

describe('LeagueNavbarComponent', () => {
  let component: LeagueNavbarComponent;
  let fixture: ComponentFixture<LeagueNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueNavbarComponent]
    });
    fixture = TestBed.createComponent(LeagueNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
