import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
  providers: [UserService]
})
export class ProfileViewComponent implements OnInit {
  private error: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public modifyUser(email: string, address: string, phoneNumber: string) {
    this.userService.modifyUser(email, address, phoneNumber).subscribe((response) => {
      if (response !== null) {
        this.error = response;
      } else {
        this.router.navigate(['/profile']);
      }
    });
  }

}
