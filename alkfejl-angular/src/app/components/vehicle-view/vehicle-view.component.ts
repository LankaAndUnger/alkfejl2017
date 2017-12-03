///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import { Vehicle } from '../../classes/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css'],
  providers: [VehicleService]
})
export class VehicleViewComponent implements OnInit {

  @Input()
  public vehicles: Vehicle[];

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((vehicle: Vehicle[]) => {
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
}
