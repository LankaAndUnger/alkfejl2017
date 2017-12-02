import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {RentalService} from '../../services/rental.service';
import {Vehicle} from '../../classes/vehicle';
import {Rental} from '../../classes/rental';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
  providers: [UserService, AuthService, RentalService]
})
export class ProfileViewComponent implements OnInit {
  @Input()
  public rentals: Rental[];

  private error: string;
  constructor(private userService: UserService, private router: Router, private authService: AuthService,
              private rentalService: RentalService) { }

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
        if (!window.alert('Sikeres adatmódosítás!')) {
          window.location.reload();
        }
      }
    });
  }

}
