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
  @Input() isAuthenticated = false;
  @Output() authChangeEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthenticationService) {}

  onLogoutClick(): void {
    this.authService.logout();
    this.authChangeEvent.emit(false);
    console.log('Logout');
  }
}
