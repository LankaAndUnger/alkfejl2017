import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../services/vehicle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
  providers: [VehicleService]
})
export class AddVehicleComponent implements OnInit {

  private error: string;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
  }

  tryToAddNewVehicle(plate: string, brand: string, type: string, vintage: string, price: string) {
    const vintageInt = parseInt(vintage, 10);
    const priceInt = parseInt(price, 10);
    if (!isNaN(vintageInt) && !isNaN(priceInt)) {
      this.vehicleService.addVehicle(plate, brand, type, vintageInt, priceInt).subscribe((result) => {
        if (result !== null) {
          this.error = result;
        } else {
          this.router.navigate(['/vehicle']);
        }
      });
    } else {
      if (isNaN(vintageInt)) {
        this.error = 'Hibás évjárat!';
      } else {
        this.error = 'Hibás bérleti díj!';
      }
    }
  }
}
