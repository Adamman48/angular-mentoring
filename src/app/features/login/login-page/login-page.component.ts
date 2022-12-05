import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'trng-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthenticationService],
})
export class LoginPageComponent {
  emailInput = '';
  pwInput = '';

  constructor(private authService: AuthenticationService) {}

  handleLoginClick() {
    if (this.emailInput && this.pwInput) {
      this.authService.login({
        firstName: 'Din',
        lastName: 'Djarin',
      });
      console.log('loggen in successfully', this.authService.getUserInfo());
    }
  }
}
