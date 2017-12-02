import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../classes/user';
import { api } from '../config/api';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private static user: User = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public registration(username: string, lastName: string, firstName: string, email: string,
                      password: string, address: string, phoneNumber: string): Observable<string> {
    return this.http.post(api + 'auth/registration', {username, lastName, firstName, email, password, address, phoneNumber}, {
      'responseType': 'text'
    });
  }

  public login(username: string, password: string): Observable<boolean> {
    const result = new Subject<boolean>();
    this.http.post(api + 'auth/login', { username, password }).subscribe((user) => {
      AuthService.user = user as User;
      result.next(true);
    }, (error) => {
      AuthService.user = null as User;
      result.next(false);
    });
    return result;
  }

  public logout(): void {
    this.http.get(api + 'auth/logout').subscribe(() => {
      AuthService.user = null;
      this.router.navigate(['login']);
    });
  }

  public isLoggedIn(): boolean {
    return AuthService.user !== null;
  }

  public getCurrentUser(): User {
    return AuthService.user;
  }

  public syncLoginStatus(): void {
    this.http.get(api + 'auth/user').subscribe((user) => {
      if (user) {
        AuthService.user = user as User;
      } else {
        AuthService.user = null;
      }
    });
  }

  public userHasRole(role: string[]): boolean {
    if (!this.isLoggedIn()) {
      return false;
    }
    return role.includes(AuthService.user.role);
  }
}
