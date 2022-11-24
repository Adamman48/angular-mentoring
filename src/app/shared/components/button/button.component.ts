import { Component, Input } from '@angular/core';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';

@Component({
  selector: 'trng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = 'Push';
  @Input() iconLigature?: IconLigaturesEnum;

  // TODO: extend or inject possibly
  onButtonClick(): void {
    console.log('Button clicked');
  }
}
