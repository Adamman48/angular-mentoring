import { Component } from '@angular/core';
import { IconLigaturesEnum } from '../definitions/icons.shared';

@Component({
  selector: 'trng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly IconsEnum = IconLigaturesEnum;
}
