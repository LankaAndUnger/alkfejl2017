import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../classes/vehicle';
import {VehicleService} from '../../services/vehicle.service';
import * as $ from 'jquery';
import {RentalService} from '../../services/rental.service';

@Component({
  selector: 'app-rental-view',
  templateUrl: './rental-view.component.html',
  styleUrls: ['./rental-view.component.css'],
  providers: [VehicleService, RentalService]
})
export class RentalViewComponent implements OnInit {

  @Input()
  public vehicles: Vehicle[];

  constructor(
    private vehicleService: VehicleService,
    private rentalService: RentalService,
    private startDate: string,
    private endDate: string
  ) { }

  ngOnInit() {
    this.vehicleService.getUnrentedVehicles().subscribe((vehicle: Vehicle[]) => {
      this.vehicles = vehicle;
    });
  }

  public applyFilter(value: string): void {
    let input, filter, tr, td, i;
    input = value;
    filter = input.toUpperCase();
    tr = $('tr');
    // márka szerint
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        if ($(td).html().toUpperCase().indexOf(filter) > -1) {
          $(tr).eq(i).show();
        } else {
          $(tr).eq(i).hide();
        }
      }
    }
  }

  public startDateInput(value: string) {
    this.startDate = value;
  }

  public endDateInput(value: string) {
    this.endDate = value;
  }

  public tryCreateNewRental(vehicle: number) {
    this.rentalService.createNewRental(vehicle, this.startDate, this.endDate).subscribe((result) => {
      console.log(result);
    });
  }

}
