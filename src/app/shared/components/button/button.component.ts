import { Component, Input } from '@angular/core';

@Component({
  selector: 'trng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText = 'Push';
  @Input() buttonIconLigature?: string;

  // TODO: extend or inject possibly
  onButtonClick(): void {
    console.log('Button clicked');
  }
}
