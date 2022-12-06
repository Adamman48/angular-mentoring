import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() authChangeEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthenticationService) {}

  handleLoginClick() {
    if (this.emailInput && this.pwInput) {
      this.authService.login({
        firstName: 'Din',
        lastName: 'Djarin',
      });
      this.authChangeEvent.emit(true);
      console.log('logged in successfully', this.authService.getUserInfo());
    }
  }
}
