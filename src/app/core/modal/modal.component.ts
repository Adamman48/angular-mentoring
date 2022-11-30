import { Component, Input } from '@angular/core';
import { ModalConfigInterface } from '../definitions/modal.core';

@Component({
  selector: 'trng-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpened = false;
  @Input() modalConfig!: ModalConfigInterface;

  handleSuccessBtnClick() {
    const {
      successClickHandlerData: { callback = null, callbackArgs = [] } = {},
    } = this.modalConfig;

    if (callback && !callbackArgs.length) {
      callback();
    } else if (callback && callbackArgs.length) {
      callback(...callbackArgs);
    }
  }

  toggleModal() {
    this.isOpened = !this.isOpened;
  }
}
