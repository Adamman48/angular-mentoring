import { Component, Input } from '@angular/core';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';

@Component({
  selector: 'trng-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconLigature!: IconLigaturesEnum;
}
