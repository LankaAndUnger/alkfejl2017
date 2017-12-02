import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { api } from '../config/api';
import {Vehicle} from '../classes/vehicle';

@Injectable()
export class VehicleService {

  public constructor(
    private httpClient: HttpClient
  ) {}

  public getVehicles(): Observable<any> {
    return this.httpClient.get(api + 'r/vehicles');
  }
}
