import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../config/api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public modifyUser(email: string, address: string, phoneNumber: string): Observable<string> {
    return this.http.post(api + 'api/modifyUser', {email, address, phoneNumber}, {
      'responseType': 'text'
    });
  }
}
