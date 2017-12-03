import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../config/api';
import {Observable} from 'rxjs/Observable';
import {Rating} from '../classes/rating';

@Injectable()
export class RatingService {

  constructor(private http: HttpClient) { }

  public getRatings(): Observable<Rating[]> {
    return this.http.get(api + 'r/ratings');
  }

  public setRatingForVehicle(ratingId: number, vehicleId: number) {
    return this.http.post(api + 'api/rating/' + vehicleId + '/' + ratingId, null, {'responseType': 'text'});
  }
}
