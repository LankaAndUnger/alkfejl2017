import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseRentalComponent } from './close-rental.component';

describe('CloseRentalComponent', () => {
  let component: CloseRentalComponent;
  let fixture: ComponentFixture<CloseRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
