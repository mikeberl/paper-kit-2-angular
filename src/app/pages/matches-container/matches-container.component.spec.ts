import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesContainerComponent } from './matches-container.component';

describe('MatchesContainerComponent', () => {
  let component: MatchesContainerComponent;
  let fixture: ComponentFixture<MatchesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesContainerComponent]
    });
    fixture = TestBed.createComponent(MatchesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
