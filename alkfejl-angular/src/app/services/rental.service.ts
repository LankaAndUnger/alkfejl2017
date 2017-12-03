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

  constructor(private http: HttpClient, private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
    this.vehicles = vehicles; });
  }

  public getUserRentals(): Observable<Rental[]> {
    return this.http.get(api + 'getMyRentals');
  }

  public createNewRental(vehicleId: number, rentalStart: Date, rentalEnd: Date) {
      const vehicle = this.vehicles.find((v) => v.id === vehicleId);
      return this.http.post(api + 'api/newRental', {vehicle, rentalStart, rentalEnd}, {'responseType': 'text'});
  }

  public getAllRentals(): Observable<Rental[]> {
    return this.http.get(api + 'r/rentals');
  }

  public closeRental(value: number) {
    return this.http.post(api + 'api/closeRental/' + value, null , {'responseType': 'text'});
  }

}
