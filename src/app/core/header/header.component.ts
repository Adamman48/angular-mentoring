import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { IconLigaturesEnum } from '../definitions/icons.shared';

@Component({
  selector: 'trng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthenticationService],
})
export class HeaderComponent {
  readonly IconsEnum = IconLigaturesEnum;
  @Input() isLoggedIn = false;

  constructor(private authService: AuthenticationService) {}

  onLogoutClick(): void {
    this.authService.logout();
    console.log('Logout');
  }
}
