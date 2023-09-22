import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRankingComponent } from './league-ranking.component';

describe('LeagueRankingComponent', () => {
  let component: LeagueRankingComponent;
  let fixture: ComponentFixture<LeagueRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueRankingComponent]
    });
    fixture = TestBed.createComponent(LeagueRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
