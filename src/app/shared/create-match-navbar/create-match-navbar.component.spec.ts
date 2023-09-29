import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatchNavbarComponent } from './create-match-navbar.component';

describe('CreateMatchNavbarComponent', () => {
  let component: CreateMatchNavbarComponent;
  let fixture: ComponentFixture<CreateMatchNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMatchNavbarComponent]
    });
    fixture = TestBed.createComponent(CreateMatchNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
