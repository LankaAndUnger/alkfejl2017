import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { api } from '../config/api';

@Injectable()
export class VehicleService {

  public constructor(
    private httpClient: HttpClient
  ) {}

  public getVehicles(): Observable<any> {
    return this.httpClient.get(api + 'r/vehicles');
  }

  public getUnrentedVehicles(): Observable<any> {
    return this.httpClient.get(api + 'r/unrentedVehicles');
  }

  public addVehicle(plate: string, brand: string, type: string, vintage: number, price: number) {
      return this.httpClient.post(api + 'api/addVehicle', {plate, brand, type, vintage, price}, {'responseType': 'text'});
  }
}
