import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [AuthService]
})
export class LoginViewComponent implements OnInit {
  private error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.error = '';
  }

  ngOnInit() {
  }

  private tryLogin(username: string, password: string) {
    this.authService.login(username, password).subscribe((success: boolean) => {
      if (success) {
        this.router.navigate(['vehicle']);
      } else {
        this.error = 'Hibás felhasználónév vagy jelszó!';
      }
    });
  }

}
