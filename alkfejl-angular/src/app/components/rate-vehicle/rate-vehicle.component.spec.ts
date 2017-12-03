import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateVehicleComponent } from './rate-vehicle.component';

describe('RateVehicleComponent', () => {
  let component: RateVehicleComponent;
  let fixture: ComponentFixture<RateVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
