import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../classes/rental';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
  providers: [UserService, AuthService, RentalService, VehicleService]
})
export class ProfileViewComponent implements OnInit {
  @Input()
  public rentals: Rental[];

  public regexp: RegExp;

  private error: string;
  constructor(private userService: UserService, private router: Router, private authService: AuthService,
              private rentalService: RentalService) {this.regexp = new RegExp(',', 'g');
  }

  ngOnInit() {
    this.rentalService.getUserRentals().subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }

  public modifyUser(email: string, address: string, phoneNumber: string) {
    this.userService.modifyUser(email, address, phoneNumber).subscribe((response) => {
      if (response !== null) {
        this.error = response;
      } else {
        window.alert('Sikeres adatmódosítás!');
      }
    });
  }

}
