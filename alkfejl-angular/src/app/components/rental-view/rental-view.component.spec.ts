import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalViewComponent } from './rental-view.component';

describe('RentalViewComponent', () => {
  let component: RentalViewComponent;
  let fixture: ComponentFixture<RentalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
