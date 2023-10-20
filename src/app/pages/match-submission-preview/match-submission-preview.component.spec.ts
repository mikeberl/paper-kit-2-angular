import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSubmissionPreviewComponent } from './match-submission-preview.component';

describe('MatchSubmissionPreviewComponent', () => {
  let component: MatchSubmissionPreviewComponent;
  let fixture: ComponentFixture<MatchSubmissionPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchSubmissionPreviewComponent]
    });
    fixture = TestBed.createComponent(MatchSubmissionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
