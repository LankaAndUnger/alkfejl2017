import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../classes/rental';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-close-rental',
  templateUrl: './close-rental.component.html',
  styleUrls: ['./close-rental.component.css'],
  providers: [RentalService, VehicleService]
})
export class CloseRentalComponent implements OnInit {

  @Input()
  public rentals: Rental[];

  public regexp: RegExp;
  public error: string;

  constructor(private rentalService: RentalService) { this.regexp = new RegExp(',', 'g'); }

  ngOnInit() {
    this.rentalService.getAllRentals().subscribe((response: Rental[]) => {
      this.rentals = response;
    });
  }

  public getId(value: number) {
    const rental = this.rentals.find((r) => r.id === value);
    this.rentalService.closeRental(value).subscribe((response) => {
      if (response !== null) {
        this.error = response;
      } else {
        window.alert('Sikeresen lezárta a kölcsönzést!');
        this.rentalService.getAllRentals().subscribe((rentals: Rental[]) => {
          this.rentals = rentals;
        });
      }
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
