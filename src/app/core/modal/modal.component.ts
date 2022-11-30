import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalConfigInterface } from '../definitions/modal.core';

@Component({
  selector: 'trng-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalConfig!: ModalConfigInterface;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  handleSuccessBtnClick() {
    const {
      successClickHandlerData: { callback = null, callbackArgs = [] } = {},
    } = this.modalConfig;

    if (callback && !callbackArgs.length) {
      callback();
    } else if (callback && callbackArgs.length) {
      callback(...callbackArgs);
    }
    this.handleCancelBtnClick();
  }

  handleCancelBtnClick() {
    this.closeModalEvent.emit(false);
  }
}
