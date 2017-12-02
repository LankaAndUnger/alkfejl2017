import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css']
})
export class RegistrationViewComponent implements OnInit {
  private error: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private tryToRegister(username: string, lastName: string, firstName: string, email: string,
                        password: string, address: string, phoneNumber: string) {
    this.authService.registration(username, lastName, firstName, email, password, address, phoneNumber).subscribe((response) => {
      console.log(response);
      if (response === null) {
        this.router.navigate(['/login']);
      } else {
        this.error = response;
      }
    });
  }
}
