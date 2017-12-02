import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Rental} from '../classes/rental';
import {HttpClient} from '@angular/common/http';
import {api} from '../config/api';
import {Vehicle} from '../classes/vehicle';
import {VehicleService} from './vehicle.service';

@Injectable()
export class RentalService {

  private vehicles: Vehicle[];

  constructor(private http: HttpClient, private vehicleService: VehicleService) { }

  public getUserRentals(): Observable<Rental[]> {
    return this.http.get(api + 'getMyRentals');
  }

  public createNewRental(vehicleId: number, startDate: string, endDate: string) {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });
    const vehicle = this.vehicles.find((v) => v.id === vehicleId);
    return this.http.post(api + 'api/newRental', {vehicle, startDate, endDate});
  }

}
