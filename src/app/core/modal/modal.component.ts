import { Component, Input } from '@angular/core';
import { ModalConfigInterface } from '../definitions/modal.core';

@Component({
  selector: 'trng-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpened = false;
  @Input() modalData!: ModalConfigInterface;

  private toggleModal() {
    this.isOpened = !this.isOpened;
  }
}
